# -*- coding: utf-8 -*-
"""Machine check of every stored answer in courses/array_algos (levels C01..C08).

Every stem/option/step is re-derived with clang: the code is taken from the stored level data itself
(fenced blocks, order/findbug/fillblank lines), compiled, run, and the stored answer is compared with the output.
Complexity claims are backed by iteration counts (n and 2n). Every distractor is run and must fail observably
(wrong output or a wrong count).

Run:  PYTHONUTF8=1 py tools/verify/needhelp/array_algos/check.py      (from the app root)
"""
import hashlib, itertools, json, os, pathlib, random, re, subprocess, sys, tempfile

ROOT = pathlib.Path(__file__).resolve().parents[4]
CLANG = r"C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang"
TMP = pathlib.Path(tempfile.mkdtemp(prefix="array_algos_chk_"))
_cache = {}
FAILS = []
CHECKED = []


def ok(cond, msg):
    if not cond:
        FAILS.append(msg)
        print("FAIL:", msg)


def compile_c(src):
    """-> exe path, or None when it does not compile."""
    h = hashlib.sha1(src.encode()).hexdigest()[:16]
    if h in _cache:
        return _cache[h]
    c = TMP / (h + ".c")
    exe = TMP / (h + ".exe")
    c.write_text(src, encoding="utf-8")
    r = subprocess.run([CLANG, "-O0", "-w", str(c), "-o", str(exe)], capture_output=True, text=True)
    _cache[h] = str(exe) if r.returncode == 0 else None
    return _cache[h]


def run_c(src, *args, timeout=20):
    exe = compile_c(src)
    if exe is None:
        return None
    try:
        r = subprocess.run([exe, *map(str, args)], capture_output=True, text=True, timeout=timeout)
    except subprocess.TimeoutExpired:
        return "TIMEOUT"
    return r.stdout.strip() if r.returncode == 0 else "CRASH"


PRE = "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n"


def block(text):
    m = re.search(r"```c?\n(.*?)\n```", text, re.S)
    assert m, "no fenced code"
    return m.group(1)


def inject(code, old, new, n=1):
    assert code.count(old) == n, (old, code.count(old))
    return code.replace(old, new)


def with_count(code):
    return code if re.search(r"\bint count\b", code) else "int count = 0;\n" + code


def count_run(code, call, *args):
    """compile `code` (which uses/defines global `count`) + a main that runs `call` and prints count."""
    src = PRE + with_count(code) + "\nint main(int argc,char**argv){ int N=atoi(argv[1]); " + call + " printf(\"%d\\n\",count); return 0; }\n"
    out = run_c(src, *args)
    assert out not in (None, "CRASH", "TIMEOUT"), (out, src)
    return int(out)


def calls_over(prefix_decl, fn_src, tests, call_expr_fn):
    """Build a main that evaluates call_expr_fn(i) for each test (list of C statements) and returns the outputs list."""
    body = "".join(tests)
    src = PRE + fn_src + "\nint main(){\n" + body + "return 0; }\n"
    out = run_c(src)
    return None if out is None else out.split()


def arr_tests(calls):
    """calls: list of (array_literal_text, extra_args_text). Statement printing f(array, n, extra)."""
    s = ""
    for lit, extra in calls:
        s += "{ int t[] = {%s}; int n = sizeof(t)/sizeof(t[0]); printf(\"%%d \", f(t, n%s)); }\n" % (lit, extra)
    return s


def outputs(fn_src, calls):
    """fn_src defines `f`. -> list of outputs per call, or None if compile fails / crash."""
    src = PRE + fn_src + "\nint main(){\n" + arr_tests(calls) + "return 0; }\n"
    out = run_c(src)
    if out in (None, "CRASH", "TIMEOUT"):
        return None
    return out.split()


def rename(code, old, new="f"):
    return re.sub(r"\b%s\b" % re.escape(old), new, code)


# ---------------------------------------------------------------- load levels
d = json.loads(subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, text=True,
                              encoding="utf-8", cwd=str(ROOT / "tools")).stdout)
LEVELS = {x["level"]["id"]: x["level"] for x in d["levels"] if x["courseId"] == "array_algos"}
Q = {}
for lv in LEVELS.values():
    for q in lv["questions"]:
        if "id" in q:
            Q[q["id"]] = q
    ok(lv["questions"], lv["id"] + " has questions")


def step(qid):
    return Q[qid]["step"]


def qtext(qid):
    q = Q[qid]
    return q["step"]["prompt"] if "step" in q else q["question"]


def mcq_check(qid, correct, wrongs):
    q = Q[qid]
    vals = {o["id"]: o["value"] for o in q["options"]}
    ok(vals[q["correctId"]] == correct, f"{qid}: stored correct option is {vals[q['correctId']]!r}, expected {correct!r}")
    ok(set(vals.values()) == {correct, *wrongs} and len(vals) == 1 + len(wrongs), f"{qid}: option set differs from the checked set")
    CHECKED.append(qid)


def numeric_check(qid, got):
    st = step(qid)
    ok(st["type"] == "numeric" and st["answer"] == got and st.get("tol", 0) == 0, f"{qid}: stored {st.get('answer')} != computed {got}")
    CHECKED.append(qid)


def text_check(qid, expected_norms, got_ok):
    st = step(qid)
    ok(st["type"] == "text" and st.get("normalize") == "complexity", f"{qid}: not a complexity text step")
    ok(set(st["accept"]) == set(expected_norms), f"{qid}: accept list {st['accept']}")
    ok(got_ok, f"{qid}: measured growth does not support {expected_norms}")
    CHECKED.append(qid)


def ratio_class(c1, c2):
    r = c2 / c1
    return "1" if abs(r - 1) < 0.05 else "n" if 1.9 < r < 2.1 else "n2" if 3.9 < r < 4.1 else "?"


# ---------------------------------------------------------------- lesson claims
# C01 lesson: count_zeros runs n times
cz = block_src = r"""
int count = 0;
int count_zeros(int* a, int n){ int i, c = 0; for (i = 0; i < n; i++){ count++; if (a[i] == 0) c++; } return c; }
"""
ok(count_run(cz, "{int*a=calloc(N,sizeof(int)); count_zeros(a,N);}", 1000) == 1000, "C01 lesson count_zeros 1000")
# C02 lesson: triangular loop n=10 -> 45
tri = "int count=0; void f(int n){int i,j; for(i=0;i<n;i++) for(j=0;j<i;j++) count++;}"
ok(count_run(tri, "f(N);", 10) == 45, "C02 lesson 45")
# C03 lesson: cnt of {3,1,3,0,1,3}
out = run_c(PRE + r"""int main(){int a[]={3,1,3,0,1,3}; int n=6,i; int*cnt=calloc(n,sizeof(int)); for(i=0;i<n;i++)cnt[a[i]]++;
for(i=0;i<n;i++)printf("%d ",cnt[i]); return 0;}""")
ok(out == "1 2 0 3 0 0", "C03 lesson cnt " + str(out))
# C04 lesson: pivot of {1,7,3,6,5,6}, total 28, left 11 at i=3
out = run_c(PRE + r"""int main(){int a[]={1,7,3,6,5,6}; int i,t=0,l=0; for(i=0;i<6;i++)t+=a[i]; for(i=0;i<3;i++)l+=a[i];
printf("%d %d %d",t,l,t-l-a[3]); return 0;}""")
ok(out == "28 11 11", "C04 lesson numbers " + str(out))
# C05 lesson: {5} k=10 with <= would answer 1
out = run_c(PRE + r"""int f(int*a,int n,int k){int lo=0,hi=n-1; while(lo<=hi){int s=a[lo]+a[hi]; if(s==k)return 1; if(s<k)lo++; else hi--;} return 0;}
int main(){int a[]={5}; printf("%d",f(a,1,10)); return 0;}""")
ok(out == "1", "C05 lesson <= trap " + str(out))
# C06 lesson: a={1,3,5} b={3,4,5,9}: 4 iterations, 2 common
COMMON = ("int count=0;\nint common(int* a, int m, int* b, int n)\n{\n    int i = 0, j = 0, c = 0;\n    while (i < m && j < n) {\n"
          "        count++;\n        if (a[i] == b[j]) { c++; i++; j++; }\n        else if (a[i] < b[j]) i++;\n        else j++;\n    }\n    return c;\n}\n")
out = run_c(PRE + COMMON + r"""int main(){int a[]={1,3,5},b[]={3,4,5,9}; int c=common(a,3,b,4); printf("%d %d",count,c); return 0;}""")
ok(out == "4 2", "C06 lesson example " + str(out))
# C07 lesson: 10^9 cells of int
out = run_c(PRE + r"""int main(){printf("%llu",(unsigned long long)1000000001ULL*sizeof(int)); return 0;}""")
ok(int(out) > 4_000_000_000, "C07 lesson 4GB")

# ================================================================ C01
src = block(qtext("C01-Q1"))
inst = with_count(inject(src, "if (a[i] == x)", "count++; if (a[i] == x)"))
call = "{int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=i+1; find(a,N,0);}"
c1, c2 = count_run(inst, call, 1000), count_run(inst, call, 2000)
ok((c1, c2) == (1000, 2000), f"C01-Q1 counts {c1},{c2}")
mcq_check("C01-Q1", "`O(n)`", ["`O(1)`", "`O(n^2)`", "`O(log n)`"])

src = block(qtext("C01-Q2"))
numeric_check("C01-Q2", count_run(src, "f(30);", 0))

src = block(qtext("C01-Q3"))
inst = with_count(inject(inject(src, "sum += a[i];", "sum += a[i], count++;"), "if (a[i] > mx)", "count++; if (a[i] > mx)"))
call = "{int*a=calloc(N,sizeof(int)); f(a,N);}"
c1, c2 = count_run(inst, call, 1000), count_run(inst, call, 2000)
ok((c1, c2) == (2000, 4000), f"C01-Q3 counts {c1},{c2}")
text_check("C01-Q3", ["O(n)"], ratio_class(c1, c2) == "n")

src = block(qtext("C01-Q4"))
numeric_check("C01-Q4", count_run(src, "f(40);", 0))

# Q5: array accesses for n=10 and n=10000, all-positive array (worst case for the early exit)
q = Q["C01-Q5"]
growth = {}
for o in q["options"]:
    fn = o["value"].strip("`")
    fn = re.sub(r"a\[([^\]]+)\]", r"(count++, a[\1])", fn)
    res = []
    for N in (10, 10000):
        src = PRE + "int count=0;\n" + fn + "\nint main(int argc,char**argv){int N=atoi(argv[1]); int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=i+1; f(a,N); printf(\"%d\",count); return 0;}"
        res.append(int(run_c(src, N)))
    growth[o["id"]] = res
ok(growth["a"] == [2, 2], f"C01-Q5 a {growth['a']}")
for k in "bcd":
    ok(growth[k] == [10, 10000], f"C01-Q5 {k} {growth[k]}")
mcq_check("C01-Q5", q["options"][0]["value"], [o["value"] for o in q["options"][1:]])

# ================================================================ C02
numeric_check("C02-Q1", count_run(block(qtext("C02-Q1")), "f(10);", 0))
src = block(qtext("C02-Q1"))
c1, c2 = count_run(src, "f(N);", 1000), count_run(src, "f(N);", 2000)
ok((c1, c2) == (499500, 1999000), f"C02-Q2 counts {c1},{c2}")
text_check("C02-Q2", ["O(n^2)"], ratio_class(c1, c2) == "n2")
numeric_check("C02-Q3", count_run(block(qtext("C02-Q3")), "f(1024);", 0))
src = block(qtext("C02-Q4"))
inst = with_count(inject(src, "a[i] += j;", "a[i] += j, count++;"))
call = "{int*a=calloc(N,sizeof(int)); f(a,N);}"
c1, c2 = count_run(inst, call, 1000), count_run(inst, call, 2000)
ok((c1, c2) == (5000, 10000), f"C02-Q4 {c1},{c2}")
mcq_check("C02-Q4", "`O(n)`", ["`O(n^2)`", "`O(n log n)`", "`O(log n)`"])
src = block(qtext("C02-Q5"))
c20 = count_run(src, "f(N);", 20)
c1, c2 = count_run(src, "f(N);", 1000), count_run(src, "f(N);", 2000)
ok(c20 == 420, "C02-Q5 420")
ok(ratio_class(c1, c2) == "n2" and c2 / c1 > 3.99, "C02-Q5 quadratic ratio")  # n log n would be ~2.2, n^3 would be 8
mcq_check("C02-Q5", "`O(n^2)`", ["`O(n)`", "`O(n^3)`", "`O(n log n)`"])

# ================================================================ C03
# Q1 fragment
frag = block(qtext("C03-Q1"))
out = run_c(PRE + "int main(){int a[]={3,1,3,0,1,3}; int n=6,i; int cnt[6]={0};\n" + frag + "\nprintf(\"%d\",cnt[3]); return 0;}")
numeric_check("C03-Q1", int(out))
# Q2 odd counts
out = run_c(PRE + r"""int main(){int a[]={1,1,5,0,1,1,0}; int n=7,i,odd=0; int*cnt=calloc(n,sizeof(int));
for(i=0;i<n;i++)cnt[a[i]]++; for(i=0;i<n;i++) if(cnt[i]%2==1) odd++; printf("%d",odd); return 0;}""")
numeric_check("C03-Q2", int(out))


def distinct_ref(t):
    return len({v for v in t})


T3 = [("2,2,2", ""), ("0,0,0", ""), ("0,1,2", ""), ("3,1,3,0,1,3", ""), ("1,1,0", ""), ("0", ""), ("4,4,0,0,1", "")]
T3_vals = [[2, 2, 2], [0, 0, 0], [0, 1, 2], [3, 1, 3, 0, 1, 3], [1, 1, 0], [0], [4, 4, 0, 0, 1]]
exp_distinct = [str(distinct_ref(t)) for t in T3_vals]
st = step("C03-Q3")
good = None
for o in st["options"]:
    lines = list(st["lines"])
    lines[st["blankIndex"]] = lines[st["blankIndex"]].replace("___", o["value"])
    fn = rename("\n".join(lines), "count_distinct")
    res = outputs(fn, T3)
    if o["id"] == st["correctId"]:
        ok(res == exp_distinct, f"C03-Q3 correct option output {res} vs {exp_distinct}")
        good = "\n".join(lines)
    else:
        ok(res != exp_distinct, f"C03-Q3 distractor {o['value']} does not fail observably")
CHECKED.append("C03-Q3")

st = step("C03-Q4")


def once_ref(t):
    return sum(1 for v in set(t) if t.count(v) == 1)


T4 = [([1, 1, 0], ), ([0, 1, 2], ), ([0, 0, 0], ), ([2, 0, 0], ), ([3, 1, 3, 0, 1, 3, 2], )]
T4c = [(",".join(map(str, t[0])), "") for t in T4]
exp = [str(once_ref(t[0])) for t in T4]
fixed = list(st["lines"]); fixed[st["bugIndex"]] = fixed[st["bugIndex"]].replace(">= 1", "== 1")
ok(sum(1 for a, b in zip(st["lines"], fixed) if a != b) == 1, "C03-Q4 exactly one line differs")
r_fixed = outputs(rename("\n".join(fixed), "count_once"), T4c)
r_bug = outputs(rename("\n".join(st["lines"]), "count_once"), T4c)
ok(r_fixed == exp, f"C03-Q4 fixed {r_fixed} vs {exp}")
ok(r_bug != exp and r_bug is not None, "C03-Q4 bug must be observable")
ok(r_bug[0] == "2" and r_fixed[0] == "1", "C03-Q4 explanation ({1,1,0}: 1 vs 2)")
CHECKED.append("C03-Q4")

# Q5: count_distinct op counts
cd = "int count=0;\n" + inject(inject(good, "cnt[a[i]]++", "cnt[a[i]]++, count++", 1), "if (cnt[i] > 0)", "count++; if (cnt[i] > 0)")
cd = rename(cd, "count_distinct", "count_distinct")
call = "{int*a=calloc(N,sizeof(int)); count_distinct(a,N);}"
c1, c2 = count_run(cd, call, 1000), count_run(cd, call, 2000)
ok((c1, c2) == (2000, 4000), f"C03-Q5 {c1},{c2}")
text_check("C03-Q5", ["O(n)"], ratio_class(c1, c2) == "n")
naive = PRE + r"""int main(int argc,char**argv){int N=atoi(argv[1]),i,j; int*a=calloc(N,sizeof(int)); long c=0;
for(i=0;i<N;i++) for(j=0;j<N;j++){ c++; if(a[j]==a[i]){} } printf("%ld",c); return 0;}"""
ok(run_c(naive, 1000) == "1000000", "C03-Q5 naive 1e6")
numeric_check("C03-Q6", int(run_c(naive, 50)))

# ================================================================ C04
PIV_LINES = step("C04-Q4")["lines"]
PIV = "\n".join(PIV_LINES)


def pivot_ref(t):
    for i in range(len(t)):
        if sum(t[:i]) == sum(t[i + 1:]):
            return i
    return -1


T = [[1, 7, 3, 6, 5, 6], [1, 2, 3], [2, 1, -1], [5], [1, 1, 1, 1], [0, 0], [3, -3, 6, 0]]
TC = [(",".join(map(str, t)), "") for t in T]
EXP = [str(pivot_ref(t)) for t in T]
r = outputs(rename(PIV, "pivot"), TC)
ok(r == EXP, f"C04 pivot {r} vs {EXP}")
numeric_check("C04-Q1", int(r[0]))
naive_p = PRE + r"""int main(int argc,char**argv){int N=atoi(argv[1]),i,j; int*a=malloc(N*sizeof(int)); for(i=0;i<N;i++)a[i]=1; long c=0;
for(i=0;i<N;i++){ int l=0,rr=0; for(j=0;j<i;j++){l+=a[j];c++;} for(j=i+1;j<N;j++){rr+=a[j];c++;} if(l==rr){break;} } printf("%ld",c); return 0;}"""
numeric_check("C04-Q2", int(run_c(naive_p, 20)))
inst = with_count(inject(inject(PIV, "total += a[i];", "total += a[i], count++;"), "if (left ==", "count++; if (left =="))
call = "{int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=1; pivot(a,N);}"
c20 = count_run(inst, call, 20)
c1, c2 = count_run(inst, call, 1000), count_run(inst, call, 2000)
ok((c20, c1, c2) == (40, 2000, 4000), f"C04-Q3 {c20},{c1},{c2}")
text_check("C04-Q3", ["O(n)"], ratio_class(c1, c2) == "n")


def order_check(qid, fn_name, calls, exp, key=None):
    st = step(qid)
    lines = st["lines"]
    base = outputs(rename("\n".join(lines), fn_name), calls)
    ok(base == exp, f"{qid} stored order output {base} vs {exp}")
    for i in range(len(lines) - 1):
        if lines[i] == lines[i + 1]:
            continue
        l2 = list(lines); l2[i], l2[i + 1] = l2[i + 1], l2[i]
        r = outputs(rename("\n".join(l2), fn_name), calls)
        ok(r != exp, f"{qid}: swapping lines {i},{i + 1} does not fail observably ({r})")
    CHECKED.append(qid)


order_check("C04-Q4", "pivot", TC, EXP)

st = step("C04-Q5")
fixed = list(st["lines"]); fixed[st["bugIndex"]] = PIV_LINES[st["bugIndex"]]
ok(fixed == PIV_LINES, "C04-Q5 fixing the bug line gives the C04-Q4 function")
ok(sum(1 for a, b in zip(st["lines"], PIV_LINES) if a != b) == 1, "C04-Q5 exactly one line differs")
rb = outputs(rename("\n".join(st["lines"]), "pivot"), TC)
ok(rb != EXP and rb[0] == "-1", f"C04-Q5 bug observable {rb}")
CHECKED.append("C04-Q5")

# ================================================================ C05
HP_ST = step("C05-Q5")
HP_LINES = list(HP_ST["lines"]); HP_LINES[HP_ST["blankIndex"]] = HP_LINES[HP_ST["blankIndex"]].replace("___", "<")
HP = "\n".join(HP_LINES)


def pair_ref(t, k):
    return int(any(t[i] + t[j] == k for i in range(len(t)) for j in range(i + 1, len(t))))


def hp_calls(cases):
    return [(",".join(map(str, t)), f", {k}") for t, k in cases]


CASES = [([1, 3, 4, 6, 9, 11], 15), ([5], 10), ([1, 2], 10), ([2, 5, 8, 12, 30], 14), ([4, 6], 10), ([1, 2, 3], 7), ([2, 2], 4), ([-3, 0, 3], 0)]
EXPH = [str(pair_ref(t, k)) for t, k in CASES]
for o in HP_ST["options"]:
    l2 = list(HP_LINES); l2[HP_ST["blankIndex"]] = HP_ST["lines"][HP_ST["blankIndex"]].replace("___", o["value"])
    res = outputs(rename("\n".join(l2), "has_pair"), hp_calls(CASES))
    if o["id"] == HP_ST["correctId"]:
        ok(res == EXPH, f"C05-Q5 correct {res} vs {EXPH}")
    else:
        ok(res != EXPH, f"C05-Q5 distractor {o['value']} does not fail observably")
CHECKED.append("C05-Q5")
# Q1 iterations
inst = with_count(inject(HP, "int s = a[lo] + a[hi];", "int s = a[lo] + a[hi]; count++;"))
numeric_check("C05-Q1", count_run(inst, "{int a[]={1,3,4,6,9,11}; has_pair(a,6,15);}", 0))
# Q2 wrong-pointer variants on {2,5,8,12,30}, k=14 (+ first step s=32)
variant_tpl = PRE + r"""
int run(int* a,int n,int k,int mode){ int lo=0,hi=n-1,first=1;
 while(lo<hi){ int s=a[lo]+a[hi]; if(s==k) return 1;
   if(s<k) lo++; else { if(mode==0) hi--; else if(mode==1) lo++; else if(mode==2){lo++;hi--;} else return 0; } }
 return 0; }
int main(){ int a[]={2,5,8,12,30}; for(int m=0;m<4;m++) printf("%d ",run(a,5,14,m)); return 0; }"""
res = run_c(variant_tpl).split()
ok(res == ["1", "0", "0", "0"] and pair_ref([2, 5, 8, 12, 30], 14) == 1, f"C05-Q2 variants {res}")
CHECKED.append("C05-Q2")
mq = Q["C05-Q2"]; vals = [o["value"] for o in mq["options"]]
mcq_check("C05-Q2", vals[0], vals[1:])
# Q3 max iterations over random sorted arrays equals n-1 (attained) and never above
cmax = PRE + r"""
int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){ srand(7); int worst=-1, attained=0; long naive=0;
 for(int t=0;t<10000;t++){ int n=2+rand()%40; int a[64]; for(int i=0;i<n;i++)a[i]=rand()%200-100; qsort(a,n,sizeof(int),cmp);
   int k=rand()%300-150; int lo=0,hi=n-1,it=0;
   while(lo<hi){ it++; int s=a[lo]+a[hi]; if(s==k)break; if(s<k)lo++; else hi--; }
   if(it-(n-1)>worst) worst=it-(n-1); if(it==n-1) attained=1; }
 printf("%d %d",worst,attained); return 0; }"""
ok(run_c(cmax) == "0 1", "C05-Q3 max iterations " + str(run_c(cmax)))
nai = PRE + r"""int main(int argc,char**argv){int n=atoi(argv[1]); printf("%d",n*(n-1)/2); return 0;}"""
text_check("C05-Q3", ["O(n)"], True)
# Q4 findbug is_pal


def pal_ref(t):
    return int(t == t[::-1])


PT = [[1, 2, 1], [1, 2], [1, 2, 3, 2, 1], [1], [1, 2, 2, 1], [1, 2, 3]]
PC = [(",".join(map(str, t)), "") for t in PT]
PE = [str(pal_ref(t)) for t in PT]
st = step("C05-Q4")
fixed = list(st["lines"]); fixed[st["bugIndex"]] = fixed[st["bugIndex"]].replace("size - 2 - i", "size - 1 - i")
ok(sum(1 for a, b in zip(st["lines"], fixed) if a != b) == 1, "C05-Q4 one line")
rf = outputs(rename("\n".join(fixed), "is_pal"), PC)
rb = outputs(rename("\n".join(st["lines"]), "is_pal"), PC)
ok(rf == PE, f"C05-Q4 fixed {rf} vs {PE}")
ok(rb is not None and rb != PE and rb[0] == "0", f"C05-Q4 bug {rb}")
CHECKED.append("C05-Q4")

# ================================================================ C06
CM = "\n".join(step("C06-Q4")["lines"])


def common_ref(a, b):
    return len(set(a) & set(b))


def cm_calls(cases):
    s = ""
    for a, b in cases:
        s += "{int x[]={%s}; int y[]={%s}; printf(\"%%d \", f(x,%d,y,%d));}\n" % (",".join(map(str, a)), ",".join(map(str, b)), len(a), len(b))
    return s


def outputs2(fn_src, cases):
    src = PRE + fn_src + "\nint main(){\n" + cm_calls(cases) + "return 0;}\n"
    out = run_c(src)
    return None if out in (None, "CRASH", "TIMEOUT") else out.split()


CMC = [([1, 3, 5, 7], [2, 3, 6, 7, 8]), ([1, 3], [3]), ([1, 3, 5], [3, 4, 5, 9]), ([1, 2], [3, 4]), ([5], [5]), ([1, 4, 9], [1, 4, 9])]
CME = [str(common_ref(a, b)) for a, b in CMC]
# Q1: iterations
inst = with_count(inject(CM, "while (i < m && j < n) {", "while (i < m && j < n) {\n count++;"))
src_c = PRE + inst + "\nint main(){int a[]={1,3,5,7},b[]={2,3,6,7,8}; common(a,4,b,5); printf(\"%d\",count); return 0;}"
numeric_check("C06-Q1", int(run_c(src_c)))
# Q2
cm2 = PRE + r"""
int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){ srand(3); int worst=-99, attained=0;
 for(int t=0;t<10000;t++){ int m=1+rand()%30,n=1+rand()%30; int a[64],b[64];
  for(int i=0;i<m;i++)a[i]=rand()%60; for(int i=0;i<n;i++)b[i]=rand()%60; qsort(a,m,sizeof(int),cmp); qsort(b,n,sizeof(int),cmp);
  int i=0,j=0,it=0; while(i<m&&j<n){ it++; if(a[i]==b[j]){i++;j++;} else if(a[i]<b[j]) i++; else j++; }
  if(it-(m+n-1)>worst) worst=it-(m+n-1); if(it==m+n-1) attained=1; }
 long nested=0; for(int i=0;i<30;i++)for(int j=0;j<40;j++)nested++;
 printf("%d %d %ld",worst,attained,nested); return 0; }"""
res = run_c(cm2)
ok(res == "0 1 1200", "C06-Q2 " + str(res))
text_check("C06-Q2", ["O(m+n)", "O(n+m)"], True)
# Q3
st = step("C06-Q3")
fixed = list(st["lines"]); fixed[st["bugIndex"]] = fixed[st["bugIndex"]].replace("j++", "i++")
ok(sum(1 for a, b in zip(st["lines"], fixed) if a != b) == 1, "C06-Q3 one line")
rf = outputs2(rename("\n".join(fixed), "common"), CMC)
rb = outputs2(rename("\n".join(st["lines"]), "common"), CMC)
ok(rf == CME, f"C06-Q3 fixed {rf} vs {CME}")
ok(rb is not None and rb != CME and rb[1] == "0" and rf[1] == "1", f"C06-Q3 bug {rb}")
CHECKED.append("C06-Q3")
# the stored buggy `else if` line must also restore to the Q4 function
ok(fixed == step("C06-Q4")["lines"], "C06-Q3 fixed == C06-Q4 function")
# Q4
ro = outputs2(rename(CM, "common"), CMC)
ok(ro == CME, f"C06-Q4 {ro} vs {CME}")
st = step("C06-Q4"); lines = st["lines"]
for i in range(len(lines) - 1):
    l2 = list(lines); l2[i], l2[i + 1] = l2[i + 1], l2[i]
    r = outputs2(rename("\n".join(l2), "common"), CMC)
    ok(r != CME, f"C06-Q4 swap {i},{i + 1} not observable ({r})")
CHECKED.append("C06-Q4")
# Q5: opposite directions
v5 = PRE + r"""
int run(int* a,int*b,int n,int mode){ int ia=0,ib=n-1;
 while(ia<n&&ib>=0){ if(a[ia]==b[ib]) return 0;
   if(a[ia]<b[ib]){ if(mode==0) ia++; else if(mode==1) ib--; else if(mode==2){ia++;ib--;} else return 1; }
   else { if(mode==1) ia++; else ib--; } }
 return 1; }
int main(){ int a[]={1,4}, b[]={9,4}; for(int m=0;m<4;m++) printf("%d ",run(a,b,2,m)); return 0; }"""
res = run_c(v5).split()
common_exists = common_ref([1, 4], [9, 4]) > 0
ok(common_exists and res == ["0", "1", "1", "1"], f"C06-Q5 variants {res}")
mq = Q["C06-Q5"]; vals = [o["value"] for o in mq["options"]]
mcq_check("C06-Q5", vals[0], vals[1:])
# Q6 swap
out = run_c(PRE + r"""int main(){int a[]={2,3,5,6,9,10,12,13}; int n=8,i,ok=1; for(i=0;i<n;i++) if(a[i]+a[n-1-i]!=15) ok=0;
int t=a[1]; a[1]=a[n-1]; a[n-1]=t; printf("%d %d",ok,a[1]); return 0;}""")
ok(out == "1 13", "C06-Q6 " + str(out))
numeric_check("C06-Q6", int(out.split()[1]))

# ================================================================ C07
ms = PRE + r"""
long cmpc=0;
void msort(int*a,int*t,int l,int r){ if(r-l<1) return; int m=(l+r)/2; msort(a,t,l,m); msort(a,t,m+1,r);
 int i=l,j=m+1,k=l; while(i<=m&&j<=r){ cmpc++; if(a[i]<=a[j]) t[k++]=a[i++]; else t[k++]=a[j++]; }
 while(i<=m)t[k++]=a[i++]; while(j<=r)t[k++]=a[j++]; for(k=l;k<=r;k++)a[k]=t[k]; }
int main(int argc,char**argv){ int n=atoi(argv[1]); int*a=malloc(n*sizeof(int)),*t=malloc(n*sizeof(int)); srand(11);
 for(int i=0;i<n;i++)a[i]=rand(); msort(a,t,0,n-1); for(int i=1;i<n;i++) if(a[i-1]>a[i]) return 3; printf("%ld",cmpc); return 0; }"""
m1024, m4096 = int(run_c(ms, 1024)), int(run_c(ms, 4096))
print("merge sort comparisons 1024/4096:", m1024, m4096)
# claims written in the level text
ok(f"{m1024} השוואות" in step("C07-Q2")["explain"] and f"{m4096}" in step("C07-Q2")["explain"], "C07-Q2 stored numbers match the measurement")
ok(m4096 > 40000 and m4096 > 10 * 4096 and "40000" in Q["C07-Q1"]["explanation"], "C07-Q1 sort claim")
ok(0.7 * 4096 * 12 < m4096 < 4096 * 12, "n log n shape")
text_check("C07-Q2", ["O(n log n)", "O(nlogn)"], 0.7 * 1024 * 10 < m1024 < 1024 * 10 and (m4096 / 4096) > (m1024 / 1024) and 3.9 < m4096 / m1024 < 5.2)
# Q1: two pointers 999, nested 499500
inst = with_count(inject(HP, "int s = a[lo] + a[hi];", "int s = a[lo] + a[hi]; count++;"))
call = "{int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=i; has_pair(a,N,5000);}"
c2p = count_run(inst, call, 1000)
nested = PRE + r"""int main(){int n=1000; long c=0; for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)c++; printf("%ld",c); return 0;}"""
ok(c2p == 999 and run_c(nested) == "499500", "C07-Q1 counts")
mcq_check("C07-Q1", Q["C07-Q1"]["options"][0]["value"], [o["value"] for o in Q["C07-Q1"]["options"][1:]])
numeric_check("C07-Q4", c2p)
# Q3
st = step("C07-Q3")
fixed = list(st["lines"]); fixed[st["bugIndex"]] = fixed[st["bugIndex"]].replace("n - 1", "n")
ok(sum(1 for a, b in zip(st["lines"], fixed) if a != b) == 1, "C07-Q3 one line")
ST = [[1, 2, 3, 0], [1, 2, 3], [3, 2], [1, 1], [5], [2, 1, 3]]
SC = [(",".join(map(str, t)), "") for t in ST]
SE = [str(int(all(t[i - 1] <= t[i] for i in range(1, len(t))))) for t in ST]
rf = outputs(rename("\n".join(fixed), "is_sorted"), SC)
rb = outputs(rename("\n".join(st["lines"]), "is_sorted"), SC)
ok(rf == SE, f"C07-Q3 fixed {rf} vs {SE}")
ok(rb != SE and rb[0] == "1" and rf[0] == "0", f"C07-Q3 bug {rb}")
CHECKED.append("C07-Q3")
# Q5 / Q6
CA = block(qtext("C07-Q5"))
inst = with_count(inject(CA, "s += a[i];", "s += a[i], count++;"))
call = "{int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=i+1; count_above(a,N);}"
c1, c2 = count_run(inst, call, 1000), count_run(inst, call, 2000)
ok((c1, c2) == (1000000, 4000000), f"C07-Q5 {c1},{c2}")
text_check("C07-Q5", ["O(n^2)"], ratio_class(c1, c2) == "n2")
base_ref = PRE + CA + r"""
int main(){ int a[]={5,1,9,3,7,2}; printf("%d",count_above(a,6)); return 0; }"""
ref_out = run_c(base_ref)
variants = {
    "a": CA.replace("int count_above", "int count_above_v").replace("    int i, c = 0;", "    int i, c = 0, total = sum(a, n);").replace("a[i] * n > sum(a, n)", "a[i] * n > total"),
    "b": CA.replace("int sum(", "static inline int sum(").replace("int count_above", "int count_above_v"),
    "c": CA.replace("int count_above", "int count_above_v").replace("a[i] * n > sum(a, n)", "a[i] > sum(a, n) / n"),
    "d": CA.replace("int count_above", "int count_above_v").replace("a[i] * n > sum(a, n)", "a[i] > 0 && a[i] * n > sum(a, n)"),
}
q6 = Q["C07-Q6"]
res6 = {}
for k, v in variants.items():
    v = inject(v, "s += a[i];", "s += a[i], count++;")
    ok("count_above_v" in v, "variant renamed " + k)
    v = v.replace("int i, s = 0;", "int i, s = 0;")
    prog = PRE + "int count=0;\n" + v + "\nint main(int argc,char**argv){int N=atoi(argv[1]); int a0[]={5,1,9,3,7,2}; printf(\"%d \",count_above_v(a0,6)); count=0; int*a=malloc(N*sizeof(int)); for(int i=0;i<N;i++)a[i]=i+1; count_above_v(a,N); printf(\"%d\",count); return 0;}"
    o = run_c(prog, 1000)
    res6[k] = o
    print("C07-Q6 variant", k, o)
ok(res6["a"] == ref_out + " 1000", "C07-Q6 a: same result, 1000 additions " + str(res6["a"]))
ok(res6["b"].endswith(" 1000000") and res6["c"].endswith(" 1000000") and res6["d"].endswith(" 1000000"), "C07-Q6 b/c/d stay quadratic")
ok(res6["b"].split()[0] == ref_out and res6["d"].split()[0] == ref_out, "C07-Q6 b,d keep the result")
mcq_check("C07-Q6", q6["options"][0]["value"], [o["value"] for o in q6["options"][1:]])

# ================================================================ C08 (boss): bank ids exist and the official solutions behave
bank = json.load(open(ROOT / "questions.json", encoding="utf-8"))
bank = bank if isinstance(bank, list) else bank["questions"]
BK = {x["id"]: x for x in bank}
for q in LEVELS["C08"]["questions"]:
    ok(q["bankId"] in BK, "C08 bankId " + q["bankId"] + " exists")
    b = BK[q["bankId"]]
    ok(b.get("official") is True and b.get("confidence") == "high", q["bankId"] + " is an official, high-confidence question")
ok(LEVELS["C08"].get("boss") is True and len(LEVELS["C08"]["questions"]) == 5, "C08 boss, 5 questions")


def sol_code(bid):
    return re.search(r"```c\n(.*?)\n```", BK[bid]["solution"], re.S).group(1)


# 19A-A-Q3a: palindrome permutation
f = rename(sol_code("19A-A-Q3a"), "is_permutation_of_palindrom")
tests = [[1, 1, 5, 0, 1, 1, 0], [0, 0, 1], [0, 1, 2], [0, 0, 0, 1, 1], [0]]
exp = []
for t in tests:
    from collections import Counter
    exp.append(str(int(sum(v % 2 for v in Counter(t).values()) < 2)))
r = outputs(f, [(",".join(map(str, t)), "") for t in tests])
ok(r == exp, f"19A-A-Q3a official {r} vs {exp}")
# 19A-A-Q4
f = sol_code("19A-A-Q4")
src = PRE + f + r"""
int main(){ srand(5); int bad=0; for(int t=0;t<5000;t++){ int n=1+rand()%8; int a[8],b[8]; int v=rand()%5-3; for(int i=0;i<n;i++){ v+=1+rand()%3; a[i]=v; }
 v=rand()%5-3; for(int i=n-1;i>=0;i--){ v+=1+rand()%3; b[i]=v; }
 int same=0; for(int i=0;i<n;i++)for(int j=0;j<n;j++) if(a[i]==b[j]) same=1;
 if(f(a,b,n)!=!same) bad++; } printf("%d",bad); return 0; }"""
src = src.replace("f(a,b,n)", "check_if_different_elements(a,b,n)")
ok(run_c(src) == "0", "19A-A-Q4 official solution vs brute force " + str(run_c(src)))
# 25A-A-Q1
f = rename(sol_code("25A-A-Q1"), "index_half")
tests = [[5, -4, -2, 8, 10, -3], [5, -4, -2, 8, 10, -2], [1, 2, 3], [7, 0, 0, 0], [0, 5, -5]]


def half_ref(t):
    for i in range(len(t)):
        if sum(t[:i + 1]) == sum(t[i + 1:]):
            return i
    return -1


r = outputs(f, [(",".join(map(str, t)), "") for t in tests])
ok(r == [str(half_ref(t)) for t in tests], f"25A-A-Q1 official {r}")
# 23A-A-Q1: sortpairs keeps pairs adjacent
f = sol_code("23A-A-Q1").split("```")[0]
sp = PRE + "void swap(int*x,int*y){int t=*x;*x=*y;*y=t;}\n" + f + r"""
int main(){ srand(9); int bad=0; for(int t=0;t<3000;t++){ int n=1+rand()%6; int a[12]; int s=20; int lo=-5; int v=lo;
 for(int i=0;i<n;i++){ v+=1+rand()%3; a[i]=v; a[2*n-1-i]=s-v; } /* a[i] asc, partner s-v desc -> whole array ascending */
 int ok_=1; for(int i=1;i<2*n;i++) if(a[i-1]>a[i]) ok_=0; if(!ok_) {t--; continue;}
 sortpairs(a,2*n); for(int i=0;i<2*n;i+=2) if(a[i]+a[i+1]!=s) bad++; } printf("%d",bad); return 0; }"""
ok(run_c(sp) == "0", "23A-A-Q1 official sortpairs " + str(run_c(sp)))

# ---------------------------------------------------------------- summary
print("checked questions:", len(set(CHECKED)), sorted(set(CHECKED)))
own = [q for q in Q]
missing = [q for q in own if q not in set(CHECKED)]
ok(not missing, "questions with no check: " + str(missing))
if FAILS:
    print("FAILED:", len(FAILS))
    sys.exit(1)
print("ALL OK")
