# -*- coding: utf-8 -*-
"""Machine check of the guided course `matrices` (courses/matrices/C01..C08.js).

Every stored answer is re-derived by compiling and running the code shown in the question with clang:
  * output questions : the displayed program is compiled verbatim, its output must equal the correct option,
                       and every distractor must be the real output of a named wrong variant of that program;
  * code-choice      : each option is substituted into a harness; the correct one reproduces a reference on
                       all test matrices, every distractor gives a different result or crashes (bounds trap);
  * findbug / order  : the buggy version differs from the fixed one on a test matrix, only the bug line differs,
                       and for `order` every other permutation of the lines fails (build error, wrong result);
  * numeric          : recomputed by a program or brute force.
Bounds are enforced with -fsanitize=bounds -fsanitize-trap=bounds, so an out-of-range read is a crash.
Run:  py tools/verify/needhelp/matrices/check.py     (exit 0 and "ALL OK" when everything holds)
"""
import itertools, json, pathlib, random, re, subprocess, sys, tempfile

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[3]
CLANG = r"C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang"
TMP = pathlib.Path(tempfile.gettempdir()) / "needhelp_matrices"
TMP.mkdir(exist_ok=True)
TRAP = ["-fsanitize=bounds", "-fsanitize-trap=bounds"]
HDR = "#include <stdio.h>\n#include <limits.h>\n#include <string.h>\n#include <stdlib.h>\n"
_n = [0]
FAILS = []
CHECKED = set()


def ok(cond, msg):
    if not cond:
        FAILS.append(msg)
        print("FAIL", msg)


def build_run(src, trap=True, timeout=10):
    """-> ('build', None) | ('crash', rc) | ('ok', stdout)"""
    _n[0] += 1
    c = TMP / f"t{_n[0]}.c"
    exe = TMP / f"t{_n[0]}.exe"
    c.write_text(src, encoding="utf-8")
    cmd = [CLANG, "-w", "-O0", "-o", str(exe), str(c)] + (TRAP if trap else [])
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        return ("build", r.stderr[:300])
    try:
        p = subprocess.run([str(exe)], capture_output=True, text=True, timeout=timeout)
    except subprocess.TimeoutExpired:
        return ("crash", "timeout")
    if p.returncode != 0:
        return ("crash", p.returncode)
    return ("ok", p.stdout.strip())


def out(src, **kw):
    st, v = build_run(src, **kw)
    assert st == "ok", (st, v, src[:400])
    return v


def fence(text):
    m = re.search(r"```c\n(.*?)\n```", text, re.S)
    return m.group(1)


def wrap(snippet):
    if "main(" in snippet:
        return HDR + snippet
    return HDR + "int main(void) {\n" + snippet + "\nreturn 0;\n}\n"


def strip_code(v):
    return v.strip("`").strip()


# ---------------------------------------------------------------- load the level files
data = json.loads(subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, text=True,
                                 encoding="utf-8").stdout)
Q = {}
for e in data["levels"]:
    if e["courseId"] != "matrices":
        continue
    for q in e["level"]["questions"]:
        if "id" in q:
            Q[q["id"]] = q


def opts(q):
    return {o["id"]: o["value"] for o in q["options"]}


def correct_val(q):
    return opts(q)[q["correctId"]]


def mark(qid):
    CHECKED.add(qid)
    return Q[qid]


def check_output_question(qid, variants):
    """variants: {output_string: replacement-or-None}. None = the displayed program itself."""
    q = mark(qid)
    base = fence(q["question"])
    o = opts(q)
    real = out(wrap(base))
    ok(real == correct_val(q), f"{qid}: displayed program prints {real!r}, correct option is {correct_val(q)!r}")
    got = {real}
    for want, fn in variants.items():
        v = out(wrap(fn(base)))
        ok(v == want, f"{qid}: variant should print {want!r}, printed {v!r}")
        got.add(v)
    ok(got == set(o.values()), f"{qid}: options {sorted(o.values())} != real outputs {sorted(got)}")
    ok(len(set(o.values())) == len(o), f"{qid}: duplicate options")


def check_numeric_program(qid):
    q = mark(qid)
    v = out(wrap(fence(q["step"]["prompt"])))
    ok(float(v) == q["step"]["answer"], f"{qid}: program prints {v}, stored answer {q['step']['answer']}")


def sub(base, old, new):
    assert old in base, (old, base)
    return base.replace(old, new)


# ================================================================ C01
q = mark("C01-Q1")
decl = fence(q["question"])
exprs = {"10": "m[2][1]", "7": "m[1][2]", "8": "m[1][3]", "3": "m[0][2]"}
for v in opts(q).values():
    r = out(HDR + "int main(void){" + decl + f'printf("%d", {exprs[v]});return 0;}}')
    ok(r == v, f"C01-Q1: {exprs[v]} prints {r}, option {v}")
ok(exprs[correct_val(q)] == "m[1][2]", "C01-Q1 correct expr")

q = mark("C01-Q2")
r = out(HDR + 'int main(void){int a[5][7];printf("%d",(int)(sizeof(a)/sizeof(int)));return 0;}')
ok(int(r) == q["step"]["answer"], "C01-Q2")

q = mark("C01-Q3")
good = []
for k, v in opts(q).items():
    d = strip_code(v)
    st, res = build_run(HDR + "int main(void){" + d + 'int r=sizeof(a)/sizeof(a[0]);int c=sizeof(a[0])/sizeof(int);a[3][5]=1;printf("%d %d",r,c);return 0;}')
    if st == "ok" and res == "4 6":
        good.append(k)
ok(good == [q["correctId"]], f"C01-Q3: declarations that give 4x6 and a valid a[3][5]: {good}")

q = mark("C01-Q4")
good = []
for k, v in opts(q).items():
    e = strip_code(v)
    st, res = build_run(HDR + "#define R 3\n#define C 4\nint mat[R][C];\nint get(int i,int j){(void)i;(void)j;return " + e.replace("R-1", "(R-1)").replace("C-1", "(C-1)") + ";}\nint main(void){mat[R-1][C-1]=5;int x=get(0,0);printf(\"%d\",x);return 0;}")
    if st == "ok":
        good.append(k)
ok(good == [q["correctId"]], f"C01-Q4: last-cell expressions that do not crash: {good}")

q = mark("C01-Q5")
base = fence(q["question"])
r = out(wrap(base))
ok(r == correct_val(q), "C01-Q5 output")
colmajor = out(HDR + 'int main(void){int m[3][4]={{1,2,3,4},{5,6,7,8},{9,10,11,12}};int k=6;printf("%d",m[k%3][k/3]);return 0;}')
p5 = out(wrap(base.replace("p[6]", "p[5]")))
p7 = out(wrap(base.replace("p[6]", "p[7]")))
ok({r, colmajor, p5, p7} == set(opts(q).values()), f"C01-Q5 distractors {sorted(opts(q).values())} vs {r, colmajor, p5, p7}")

# ================================================================ C02
for qid in ("C02-Q1", "C02-Q2"):
    check_numeric_program(qid)

check_output_question("C02-Q3", {
    "123456": lambda b: sub(b, "for (int j = 0; j < 3; j++)\n    for (int i = 0; i < 2; i++)", "for (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)"),
    "321654": lambda b: sub(b, "for (int j = 0; j < 3; j++)\n    for (int i = 0; i < 2; i++)", "for (int i = 0; i < 2; i++)\n    for (int j = 2; j >= 0; j--)"),
    "1245": lambda b: sub(b, "for (int j = 0; j < 3; j++)\n    for (int i = 0; i < 2; i++)", "for (int i = 0; i < 2; i++)\n    for (int j = 0; j < 2; j++)"),
})

q = mark("C02-Q4")
good = []
for k, v in opts(q).items():
    d = strip_code(v)
    r = out(HDR + "int main(void){int a[2][2]={{-5,-3},{-9,-4}};" + d + 'for(int i=0;i<2;i++)for(int j=0;j<2;j++)if(a[i][j]>max)max=a[i][j];printf("%d",max);return 0;}')
    if r == "-3":
        good.append(k)
ok(good == [q["correctId"]], f"C02-Q4: initialisations giving the true max -3: {good}")

q = mark("C02-Q5")
st = q["step"]
lines = st["lines"]
fixed = list(lines)
fixed[st["bugIndex"]] = lines[st["bugIndex"]].replace("j < ROWS", "j < COLS")
main = '\nint main(void){int a[2][3]={{1,2,3},{4,5,6}};printf("%d",countPositive(a));return 0;}'
rb = out(HDR + "\n".join(lines) + main)
rf = out(HDR + "\n".join(fixed) + main)
ok(rf == "6" and rb == "4", f"C02-Q5 fixed {rf} buggy {rb}")
ok([i for i in range(len(lines)) if lines[i] != fixed[i]] == [st["bugIndex"]], "C02-Q5 exactly one line differs / bugIndex")

# ================================================================ C03
check_numeric_program("C03-Q1")

q = mark("C03-Q2")
st = q["step"]
good = []
for o in st["options"]:
    ls = list(st["lines"])
    ls[st["blankIndex"]] = ls[st["blankIndex"]].replace("___", o["value"])
    src = HDR + "#define N 3\n" + "\n".join(ls) + '\nint main(void){int a[3][3]={{1,4,2},{6,0,3},{5,5,1}};for(int j=0;j<3;j++)printf("%d ",colSum(a,j));return 0;}'
    sta, res = build_run(src)
    if sta == "ok" and res == "12 9 6":
        good.append(o["id"])
ok(good == [st["correctId"]], f"C03-Q2: fills that give the column sums 12 9 6: {good}")

check_output_question("C03-Q3", {
    "11": lambda b: sub(b, 'printf("%d", best);', 'printf("%d", bestSum);'),
    "0": lambda b: sub(b, 'printf("%d", best);', 'printf("%d", 0);'),
    "1": lambda b: sub(b, "if (s > bestSum)", "if (s > bestSum && s < 10)"),
})

q = mark("C03-Q4")
st = q["step"]
lines = st["lines"]
fixed = list(lines)
fixed[st["bugIndex"]] = "        ref += a[0][j];"
mainf = "\nint main(void){int a[3][3]={{1,2,3},{4,1,1},{0,3,3}};int b[3][3]={{1,2,3},{4,1,1},{0,3,4}};printf(\"%d %d\",equalRows(a),equalRows(b));return 0;}"
rb = out(HDR + "#define N 3\n" + "\n".join(lines) + mainf)
rf = out(HDR + "#define N 3\n" + "\n".join(fixed) + mainf)
ok(rf == "1 0" and rb == "0 0", f"C03-Q4 fixed {rf} buggy {rb}")
ok([i for i in range(len(lines)) if lines[i].strip() != fixed[i].strip()] == [st["bugIndex"]], "C03-Q4 one line differs")
# fixed version vs an independent reference on many random matrices
rnd = random.Random(1)
tests = []
for _ in range(400):
    m = [[rnd.randint(0, 3) for _ in range(3)] for _ in range(3)]
    if rnd.random() < 0.5:  # force equal row sums
        t = sum(m[0])
        for i in range(1, 3):
            m[i][2] = t - m[i][0] - m[i][1]
    tests.append(m)
body = "\n".join(fixed)
cases = "".join("{int a[3][3]={%s};printf(\"%%d\",equalRows(a));}" % ",".join("{%s}" % ",".join(map(str, r)) for r in m) for m in tests)
res = out(HDR + "#define N 3\n" + body + "\nint main(void){" + cases + "return 0;}")
refres = "".join("1" if len({sum(r) for r in m}) == 1 else "0" for m in tests)
ok(res == refres, "C03-Q4 fixed equalRows differs from the reference")

q = mark("C03-Q5")
ops = {}
for n in (50, 100, 200):
    ops[n] = int(out(HDR + f'#define N {n}\nint main(void){{long c=0;for(int j=0;j<N;j++)c++;for(int i=1;i<N;i++){{for(int j=0;j<N;j++)c++;}}printf("%ld",c);return 0;}}'))
ok(abs(ops[200] / ops[100] - 4) < 0.1 and abs(ops[100] / ops[50] - 4) < 0.2, f"C03-Q5 doubling N should ~quadruple the work: {ops}")
ok("O(N^2)" in q["step"]["accept"], "C03-Q5 accept list")

# ================================================================ C04
check_numeric_program("C04-Q1")
check_numeric_program("C04-Q2")

q = mark("C04-Q3")
good = []
sums = {}
for k, v in opts(q).items():
    e = strip_code(v).replace("N-1-i", "(N-1-i)").replace("N-i", "(N-i)")
    st, res = build_run(HDR + "#define N 4\nint e[4][4]={{2,0,5,1},{3,4,1,7},{6,2,9,0},{8,1,3,5}};\nint main(void){int a[4][4];memcpy(a,e,sizeof a);int s=0;for(int i=0;i<N;i++)s+=" + e.replace("a[", "a[") + ';printf("%d",s);return 0;}')
    sums[strip_code(v)] = (st, res)
    if st == "ok" and res == "12":
        good.append(k)
ok(good == [q["correctId"]], f"C04-Q3: expressions summing to the secondary diagonal 12: {good} {sums}")

q = mark("C04-Q4")
conds = {}
for k, v in opts(q).items():
    conds[k] = strip_code(v)
good = []
for k, c in conds.items():
    allok = True
    for n in range(1, 8):
        cells = {(i, j) for i in range(n) for j in range(n) if eval(c.replace("N", str(n)))}
        if cells != {(i, n - 1 - i) for i in range(n)}:
            allok = False
    if allok:
        good.append(k)
ok(good == [q["correctId"]], f"C04-Q4: conditions equal to the secondary diagonal for N=1..7: {good}")
# the same condition compiled as C, to be sure the syntax means what Python evaluated
r = out(HDR + '#define N 4\nint main(void){int c=0;for(int i=0;i<N;i++)for(int j=0;j<N;j++)if(' + conds[q["correctId"]] + ')c++;printf("%d",c);return 0;}')
ok(r == "4", "C04-Q4 C count")

q = mark("C04-Q5")
st = q["step"]
good = []
rnd = random.Random(2)
mats = [[[rnd.randint(0, 3) for _ in range(4)] for _ in range(4)] for _ in range(300)]
exp = "".join("1" if sum(m[i][i] for i in range(4)) == sum(m[i][3 - i] for i in range(4)) else "0" for m in mats)
ones = exp.count("1")
ok(0 < ones < len(mats), "C04-Q5 test set must contain both outcomes")
cases = "".join("{int a[4][4]={%s};printf(\"%%d\",sameDiagonals(a));}" % ",".join("{%s}" % ",".join(map(str, r)) for r in m) for m in mats)
results = {}
for o in st["options"]:
    ls = list(st["lines"])
    ls[st["blankIndex"]] = ls[st["blankIndex"]].replace("___", o["value"])
    sta, res = build_run(HDR + "#define N 4\n" + "\n".join(ls) + "\nint main(void){" + cases + "return 0;}")
    results[o["id"]] = (sta, res if sta != "ok" else res == exp)
    if sta == "ok" and res == exp:
        good.append(o["id"])
ok(good == [st["correctId"]], f"C04-Q5: fills that match the reference on all matrices: {good} {results}")

# ================================================================ C05
q = mark("C05-Q1")
good = []
for k, v in opts(q).items():
    sig = strip_code(v)
    src = HDR + sig + " { m[1][2] = 5; }\nint main(void){int g[5][7]; memset(g,0,sizeof g); f(g, 5); printf(\"%d\", g[1][2]); return 0;}"
    sta, res = build_run(src)
    if sta == "ok" and res == "5":
        good.append(k)
ok(good == [q["correctId"]], f"C05-Q1: signatures that compile and work: {good}")

q = mark("C05-Q2")
r = out(HDR + 'int main(void){int a[4][5];printf("%d",(int)((int*)&a[2][3]-(int*)&a[0][0]));return 0;}')
ok(int(r) == q["step"]["answer"], "C05-Q2")

check_output_question("C05-Q3", {
    "45": lambda b: sub(b, "void clearDiag(int m[][3], int rows) {\n    for (int i = 0; i < rows; i++)\n        m[i][i] = 0;\n}", "void clearDiag(int m[][3], int rows) {\n    int c[3][3];\n    memcpy(c, m, sizeof c);\n    for (int i = 0; i < rows; i++)\n        c[i][i] = 0;\n}"),
    "15": lambda b: sub(b, "s += a[i][j];", "if (i == j) s += a[i][j];").replace("clearDiag(a, 3);", "int dd[3][3]; memcpy(dd, a, sizeof dd); for (int k = 0; k < 3; k++) a[k][k] = a[k][k];"),
    "0": lambda b: sub(b, "m[i][i] = 0;", "for (int j = 0; j < 3; j++) m[i][j] = 0;"),
})

q = mark("C05-Q4")
st = q["step"]
rows, cols = 4, 6
g = [[((i * 2 + j * 2 + i * j) % 5) - 2 for j in range(cols)] for i in range(rows)]
want = sum(1 for r in g for v in r if v > 0)
init = "{" + ",".join("{" + ",".join(map(str, r)) + "}" for r in g) + "}"
res = {}
good = []
for o in st["options"]:
    ls = list(st["lines"])
    ls[st["blankIndex"]] = ls[st["blankIndex"]].replace("___", o["value"])
    sta, r = build_run(HDR + "\n".join(ls) + f'\nint main(void){{int g[4][6]={init};printf("%d",countPositive(g,4));return 0;}}', trap=False)
    res[o["value"]] = (sta, r)
    if sta == "ok" and r == str(want):
        good.append(o["id"])
ok(len({r for _, r in res.values()}) == 4, f"C05-Q4: every COLS value must give its own count: {res}")
ok(good == [st["correctId"]], f"C05-Q4: COLS values giving the right count {want}: {good} {res}")

check_output_question("C05-Q5", {
    "6 15 0": lambda b: sub(b, "out[j] += a[i][j];", "out[i] += a[i][j];"),
    "4 5 6": lambda b: sub(b, "out[j] += a[i][j];", "out[j] = a[i][j];"),
    "21 0 0": lambda b: sub(b, "out[j] += a[i][j];", "out[0] += a[i][j];"),
})

# ================================================================ C06
q = mark("C06-Q1")
brute = sum(1 for r in range(6) for c in range(5) if r + 2 < 6 and c + 2 < 5)
ok(brute == q["step"]["answer"], f"C06-Q1 brute force {brute}")

q = mark("C06-Q2")
good = []
for k, v in opts(q).items():
    cnd = strip_code(v)
    src = HDR + "#define N 3\nint main(void){int a[N][N]={{1,1,2},{3,3,3},{2,1,1}};int c=0;for(int i=0;i<N;i++)for(int j=0;j<N;j++)if(" + cnd + ")c++;printf(\"%d\",c);return 0;}"
    sta, res = build_run(src)
    if sta == "ok" and res == "4":
        good.append(k)
ok(good == [q["correctId"]], f"C06-Q2: conditions that count 4 equal right-neighbours without a crash: {good}")

check_numeric_program("C06-Q3")

q = mark("C06-Q4")
st = q["step"]
lines = st["lines"]
fixed = list(lines)
fixed[st["bugIndex"]] = "    for (int i = 0; i < N - 1; i++)"
# the matrix sits inside a 4-row array whose extra row copies the last row: the buggy version reads that row
mainf = "\nint main(void){int big[4][3]={{1,2,3},{1,2,4},{1,5,4},{1,5,4}};printf(\"%d\",equalBelow((int(*)[3])big));return 0;}"
rb = out(HDR + "\n".join(lines) + mainf)
rf = out(HDR + "\n".join(fixed) + mainf)
ok(rf == "4" and rb == "7", f"C06-Q4 fixed {rf}, buggy {rb}")
ok([i for i in range(len(lines)) if lines[i] != fixed[i]] == [st["bugIndex"]], "C06-Q4 one line differs")

check_output_question("C06-Q5", {
    "45": lambda b: sub(b, "        if (di != 0 || dj != 0)\n            s", "        s"),
    "25": lambda b: sub(b, "if (di != 0 || dj != 0)", "if (di == 0 || dj == 0)"),
    "23": lambda b: sub(b, "for (int di = -1; di <= 1; di++)\n    for (int dj = -1; dj <= 1; dj++)", "for (int di = 0; di <= 1; di++)\n    for (int dj = 0; dj <= 1; dj++)"),
})
check_numeric_program("C06-Q6")

# ================================================================ C07
q = mark("C07-Q1")
base = fence(q["question"])
variants = {
    "2 3 4 1": base.replace("int last = m[r][3];", "int last = m[r][0];").replace("for (int c = 3; c > 0; c--)\n    m[r][c] = m[r][c - 1];\nm[r][0] = last;", "for (int c = 0; c < 3; c++)\n    m[r][c] = m[r][c + 1];\nm[r][3] = last;"),
    "4 1 1 1": sub(base, "for (int c = 3; c > 0; c--)", "for (int c = 1; c < 4; c++)"),
    "1 1 2 3": sub(base, "m[r][0] = last;\n", ""),
}
real = out(wrap(base)).split()
ok(" ".join(real) == correct_val(q), "C07-Q1 displayed program")
got = {" ".join(real)}
for want, src in variants.items():
    r = " ".join(out(wrap(src)).split())
    ok(r == want, f"C07-Q1 variant {want!r} printed {r!r}")
    got.add(r)
ok(got == set(opts(q).values()), f"C07-Q1 options {sorted(opts(q).values())} vs {sorted(got)}")

q = mark("C07-Q2")
st = q["step"]
lines = st["lines"]
mats = [[[rnd.randint(0, 9) for _ in range(4)] for _ in range(4)] for _ in range(50)]
cases = "".join("{int m[4][4]={%s};shift(m,%d);for(int i=0;i<4;i++)for(int j=0;j<4;j++)printf(\"%%d \",m[i][j]);}" % (",".join("{%s}" % ",".join(map(str, r)) for r in m), t % 4) for t, m in enumerate(mats))
exp = ""
for t, m in enumerate(mats):
    mm = [r[:] for r in m]
    r = t % 4
    mm[r] = [mm[r][-1]] + mm[r][:-1]
    exp += "".join(f"{v} " for row in mm for v in row)
passing = []
for perm in itertools.permutations(range(len(lines))):
    body = "\n".join(lines[i] for i in perm)
    src = HDR + "#define N 4\nvoid shift(int m[][N], int r) {\n" + body + "\n}\nint main(void){" + cases + "return 0;}"
    sta, res = build_run(src)
    if sta == "ok" and res == exp.strip():
        passing.append(perm)
ok(passing == [tuple(range(len(lines)))], f"C07-Q2: permutations of the lines that shift correctly: {passing}")

check_numeric_program("C07-Q3")
check_output_question("C07-Q4", {
    "2": lambda b: sub(b, "for (int i = 0; i < N; i++)", "for (int i = 0; i < N / 2; i++)"),
    "3": lambda b: sub(b, "for (int i = 0; i < N; i++)", "for (int i = 0; i < N - 1; i++)"),
    "1": lambda b: sub(b, "for (int i = 0; i < N; i++)", "for (int i = 0; i < N / 2 - 1; i++)"),
})

q = mark("C07-Q5")
st = q["step"]
lines = st["lines"]
fixed = list(lines)
fixed[st["bugIndex"]] = "    m[r2][j] = t;"
mk = lambda ls: HDR + "#define N 3\nvoid swapRows(int m[][N], int r1, int r2) {\n" + "\n".join(ls) + "\n}\nint main(void){int m[3][3]={{1,2,3},{4,5,6},{7,8,9}};swapRows(m,0,2);for(int i=0;i<3;i++)for(int j=0;j<3;j++)printf(\"%d\",m[i][j]);return 0;}"
rb, rf = out(mk(lines)), out(mk(fixed))
ok(rf == "789456123" and rb != rf, f"C07-Q5 fixed {rf} buggy {rb}")
ok([i for i in range(len(lines)) if lines[i] != fixed[i]] == [st["bugIndex"]], "C07-Q5 one line differs")

check_numeric_program("C07-Q6")

# ================================================================ coverage
missing = [k for k in Q if k not in CHECKED]
ok(not missing, f"questions without a check: {missing}")
# stored keys: every correctId is among options, every option text is unique
for k, q in Q.items():
    if "options" in q:
        ok(q["correctId"] in opts(q), f"{k} correctId")

if FAILS:
    print(f"\n{len(FAILS)} FAILURE(S)")
    sys.exit(1)
print(f"\nALL OK: {len(CHECKED)} own questions machine-checked ({_n[0]} programs compiled and run)")
