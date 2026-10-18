# -*- coding: utf-8 -*-
"""Machine check of the c_strings guided course (courses/c_strings/C01..C09.js), with clang.

Everything is read back from the STORED level files (loaded through tools/course_load.js), so a typo in a file
cannot hide behind a correct check:
  out    : the code shown in the question is compiled and run; the stored answer equals the real output and
           every other option differs
  fill   : each option is substituted into the shown template and run: only the stored answer reproduces the
           reference, every distractor gives other output / crashes / does not build / overflows a guarded malloc
  order  : the stored (correct) order reproduces the reference and EVERY other permutation (all of them for <= 4
           blocks, all pair swaps otherwise) builds differently or gives other output
  bug    : the stored findbug lines differ from the reference in exactly bugIndex and behave differently
  claims : options that are boolean expressions / declarations are executed against a truth table
  time   : the O(.) answers are measured (time ratio when the input doubles)
  lesson : numbers quoted in the lessons, and every function in a lesson <pre>, are compiled and run
  bank   : the six boss ids exist in the strings topic; their stored solutions are run on the exam's own examples

Usage:  PYTHONUTF8=1 py tools/verify/needhelp/c_strings/check.py        (exit 1 on any failure)
"""
import hashlib, html, itertools, json, pathlib, re, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[3]
CLANG = r"C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang"
TMP = pathlib.Path(tempfile.gettempdir()) / "needhelp_c_strings"
TMP.mkdir(exist_ok=True)
PRE = "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <time.h>\n"
GUARD = r"""
static unsigned char *g_last; static size_t g_n;
static void *gmalloc(size_t n){ unsigned char *p=(unsigned char*)calloc(n+16,1); memset(p+n,0x5A,16); g_last=p; g_n=n; return p; }
static int gok(void){ for(int i=0;i<16;i++) if(g_last[g_n+i]!=0x5A) return 0; return 1; }
#define malloc(n) gmalloc(n)
"""
FAILS, PASSES = [], 0
COVERED = set()
_cache = {}


def ok(cond, msg):
    global PASSES
    if cond:
        PASSES += 1
    else:
        FAILS.append(msg)
        print("  FAIL  " + msg)
    return cond


def run(src, timeout=20):
    """-> (rc, stdout) | ('CE', stderr) | ('TIMEOUT', '')"""
    key = hashlib.sha1(src.encode("utf-8")).hexdigest()[:16]
    if key in _cache:
        return _cache[key]
    c, exe = TMP / f"{key}.c", TMP / f"{key}.exe"
    c.write_text(src, encoding="utf-8", newline="\n")
    p = subprocess.run([CLANG, "-w", "-O0", str(c), "-o", str(exe)], capture_output=True)
    if p.returncode:
        res = ("CE", p.stderr.decode("latin-1")[:300])
    else:
        try:
            r = subprocess.run([str(exe)], capture_output=True, timeout=timeout)
            res = (r.returncode, r.stdout.decode("latin-1"))
        except subprocess.TimeoutExpired:
            res = ("TIMEOUT", "")
    _cache[key] = res
    return res


def run_many(srcs):
    with ThreadPoolExecutor(8) as ex:
        return list(ex.map(run, srcs))


def good(res, expect):
    return res[0] == 0 and res[1].strip() == expect


# ------------------------------------------------------------------ load the stored course
def load_course():
    js = ("const {load}=require(%r);const r=load(%r);process.stdout.write(JSON.stringify(r));"
          % ((ROOT / "tools" / "course_load.js").as_posix(), ROOT.as_posix()))
    p = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    assert p.returncode == 0, p.stderr
    d = json.loads(p.stdout)
    assert not d["errors"], d["errors"]
    return sorted([e["level"] for e in d["levels"] if e["courseId"] == "c_strings"], key=lambda l: l["order"])


LEVELS = load_course()
Q = {}
for lv in LEVELS:
    for q in lv["questions"]:
        if "id" in q:
            Q[q["id"]] = q


def fences(text):
    return [m.group(2) for m in re.finditer(r"```(\w*)\n(.*?)\n```", text, re.S)]


def qtext(q):
    return q["question"] if "question" in q else q["step"]["prompt"]


def tick(v):
    return v.replace("`", "").strip()


def wrap(code):
    return code if "main(" in code else "int main(void){\n" + code + "\nreturn 0;}\n"


def opts_of(q):
    return q["options"] if "options" in q else q["step"]["options"]


def cid_of(q):
    return q["correctId"] if "correctId" in q else q["step"]["correctId"]


# ------------------------------------------------------------------ check kinds
def check_out(qid, pre=""):
    """Run the code shown in the question; the stored answer must equal the real output."""
    COVERED.add(qid)
    q = Q[qid]
    code = fences(qtext(q))[0]
    r = run(PRE + pre + wrap(code))
    if not ok(r[0] == 0, f"{qid}: shown code runs ({r[0]} {r[1][:80] if r[0] != 0 else ''})"):
        return None
    out = r[1].strip()
    if "step" in q and q["step"]["type"] == "numeric":
        ok(float(out) == q["step"]["answer"], f"{qid}: numeric answer {q['step']['answer']} == output {out!r}")
    elif "step" in q and q["step"]["type"] == "text":
        ok(out in q["step"]["accept"], f"{qid}: text accept {q['step']['accept']} contains output {out!r}")
    else:
        for o in q["options"]:
            same = tick(o["value"]) == out
            ok(same == (o["id"] == q["correctId"]), f"{qid}: option {o['id']} {tick(o['value'])!r} vs output {out!r}")
    return out


def template_of(q):
    if "step" in q:
        s = q["step"]
        lines = list(s["lines"])
        assert lines.count(lines[s["blankIndex"]]) >= 1 and "___" in lines[s["blankIndex"]]
        return "\n".join(lines)
    return fences(q["question"])[0]


def check_fill(qid, expect, driver="", pre="", outs=None):
    """Substitute each option for ___ ; only the stored correct option may reproduce `expect`."""
    COVERED.add(qid)
    q = Q[qid]
    tpl = template_of(q)
    ok(tpl.count("___") == 1, f"{qid}: exactly one ___ in the template")
    options = opts_of(q)
    srcs = []
    for o in options:
        v = o["value"] if "step" in q else tick(o["value"])
        body = tpl.replace("___", v)
        if "main(" not in body:
            body = "int main(void){\n" + body + "\nreturn 0;}\n" if not driver else body
        srcs.append(PRE + pre + body + "\n" + driver)
    res = run_many(srcs)
    for o, r in zip(options, res):
        is_good = good(r, expect)
        ok(is_good == (o["id"] == cid_of(q)),
           f"{qid}: option {o['id']} {tick(o['value'])!r} -> {r[0]} {r[1].strip()[:40]!r} (reference {expect!r})")
        if outs and o["id"] in outs:
            ok(good(r, outs[o["id"]]), f"{qid}: option {o['id']} prints {outs[o['id']]!r} as the explanation says (got {r[1].strip()[:40]!r})")


def check_order(qid, expect, driver, pre=""):
    COVERED.add(qid)
    s = Q[qid]["step"]
    lines = s["lines"]
    n = len(lines)

    def build(order):
        return PRE + pre + "\n".join(lines[i] for i in order) + "\n" + driver

    ident = list(range(n))
    ok(good(run(build(ident)), expect), f"{qid}: stored order reproduces {expect!r}")
    perms = [p for p in itertools.permutations(ident) if list(p) != ident] if n <= 4 else \
        [tuple(ident[:i] + [ident[j]] + ident[i + 1:j] + [ident[i]] + ident[j + 1:]) for i, j in itertools.combinations(ident, 2)]
    res = run_many([build(p) for p in perms])
    bad = [p for p, r in zip(perms, res) if good(r, expect)]
    ok(not bad, f"{qid}: order forced ({len(perms)} alternative orders checked) unforced={bad}")


def check_bug(qid, ref_lines, expect_ref, driver, pre="", expect_bug=None):
    COVERED.add(qid)
    s = Q[qid]["step"]
    lines = s["lines"]
    ok(len(lines) == len(ref_lines), f"{qid}: same number of lines as the reference")
    diff = [i for i, (a, b) in enumerate(zip(lines, ref_lines)) if a != b]
    ok(diff == [s["bugIndex"]], f"{qid}: exactly one line differs from the reference and it is bugIndex ({diff} vs {s['bugIndex']})")
    ref = run(PRE + pre + "\n".join(ref_lines) + "\n" + driver)
    bug = run(PRE + pre + "\n".join(lines) + "\n" + driver)
    ok(good(ref, expect_ref), f"{qid}: reference prints {expect_ref!r} (got {ref[0]} {ref[1].strip()[:40]!r})")
    ok(not good(bug, expect_ref), f"{qid}: the buggy version behaves differently ({bug[0]} {bug[1].strip()[:40]!r})")
    if expect_bug is not None:
        ok(good(bug, expect_bug), f"{qid}: buggy version prints {expect_bug!r} (got {bug[0]} {bug[1].strip()[:40]!r})")


def ratio_c(func_src, call, n1, n2, setup, reps=4):
    """Time ratio of `call` at sizes n1 and n2 (best of reps). Returns percent (200 = twice as long)."""
    drv = r"""
static double bench(int n){
    double best=1e9;
    for(int r=0;r<%d;r++){
        %s
        clock_t t0=clock();
        volatile int sink = (%s);
        clock_t t1=clock();
        double ms=(double)(t1-t0)*1000.0/CLOCKS_PER_SEC; if(ms<best) best=ms;
        free(a);
    }
    return best;
}
int main(void){ double t1=bench(%d), t2=bench(%d); printf("%%d %%d %%d", (int)(t1*10), (int)(t2*10), (int)(100.0*t2/(t1<0.05?0.05:t1))); return 0; }
""" % (reps, setup, call, n1, n2)
    r = run(PRE + func_src + drv, timeout=120)
    assert r[0] == 0, r
    t1, t2, pct = map(int, r[1].split())
    return t1, t2, pct


# ------------------------------------------------------------------ shared functions (as printed in the course)
ISPAL = r"""
int isPal(char *s) {
    int i = 0, j = (int)strlen(s) - 1;
    while (i < j) {
        if (s[i] != s[j]) return 0;
        i++; j--;
    }
    return 1;
}
"""


def main():
    # ============================================================ C01
    check_out("C01-Q1"); check_out("C01-Q2"); check_out("C01-Q3"); check_out("C01-Q4"); check_out("C01-Q5")
    check_fill("C01-Q6", "ok", outs={"b": "ok0XX", "c": "okX", "d": "o"})
    r = run(PRE + r"""int main(void){ char s[]="hello"; s[2]='\0'; printf("%s %d %d %d %d %d %d", s,(int)strlen(s),(int)sizeof(s), 'a','b','A','0'); char z='z'-'a'; printf(" %d", z); return 0;}""")
    ok(good(r, "he 2 6 97 98 65 48 25"), f"C01 lesson numbers (he/2/6, ASCII codes, z-a=25): {r[1]!r}")
    r = run(PRE + r"""int main(void){ char s[]="abc", t[10]="hi"; printf("%d %d %d %d", (int)sizeof(s),(int)strlen(s),(int)sizeof(t),(int)strlen(t)); return 0;}""")
    ok(good(r, "4 3 10 2"), f"C01 lesson table: {r[1]!r}")

    # ============================================================ C02
    check_out("C02-Q1")
    check_order("C02-Q2", "5 0 1", r"""int main(void){ printf("%d %d %d", myStrlen("hello"), myStrlen(""), myStrlen("a")); return 0; }""")
    CS = ["int countSpaces(char *s) {", "    int n = 0;", r"    for (int i = 0; s[i] != '\0'; i++)", "        if (s[i] == ' ')",
          "            n++;", "    return n;", "}"]
    check_bug("C02-Q3", CS, "2", r"""int main(void){ char b[]="a b c"; printf("%d", countSpaces(b)); return 0; }""",
              expect_bug="5")
    check_out("C02-Q4")
    COVERED.add("C02-Q5")
    fn = fences(Q["C02-Q5"]["step"]["prompt"])[0]
    t1, t2, pct = ratio_c(fn, "count(a)", 20000, 40000, "char *a=(char*)malloc(n+1); memset(a,'x',n); a[n]=0;")
    ok(280 <= pct <= 480, f"C02-Q5: count() (strlen in the loop condition) time ratio for 2n is {pct}% -> quadratic (times {t1/10}ms, {t2/10}ms)")
    r = run(PRE + r"""int countChar(char *s, char c){int n=0; for(int i=0;s[i]!='\0';i++) if(s[i]==c) n++; return n;}
int main(void){ printf("%d", countChar("banana",'a')); return 0;}""")
    ok(good(r, "3"), "C02 lesson: countChar(banana, a) == 3")

    # ============================================================ C03
    check_out("C03-Q1"); check_out("C03-Q2")
    drv_digit = r"""int main(void){ char cs[]={'0','1','2','3','4','5','6','7','8','9','a','x','/',':',' ',5,0}; for(int i=0;i<16;i++) printf("%d", isDigit(cs[i])!=0); return 0; }"""
    check_fill("C03-Q3", "1111111111" + "000000", driver=drv_digit)
    check_fill("C03-Q4", "ABC XYZ-9", driver=r"""int main(void){ char b[]="abc xyz-9"; toUpper(b); printf("%s", b); return 0; }""")
    check_order("C03-Q5", "472 0 90", r"""int main(void){ printf("%d %d %d", toInt("472"), toInt("0"), toInt("90")); return 0; }""")
    TI = ["int toInt(char *s) {", "    int n = 0;", r"    for (int i = 0; s[i] != '\0'; i++)", "        n = n * 10 + (s[i] - '0');",
          "    return n;", "}"]
    check_bug("C03-Q6", TI, "472", r"""int main(void){ printf("%d", toInt("472")); return 0; }""", expect_bug="5800")
    r = run(PRE + r"""int main(void){ printf("%d %d %d", '7', '7'-'0', 'A'); return 0;}""")
    ok(good(r, "55 7 65"), "C03 lesson: '7' is 55, '7'-'0' is 7")

    # ============================================================ C04
    COVERED.add("C04-Q1")
    q = Q["C04-Q1"]
    pairs = [("same", "same", 1), ("abc", "abd", 0), ("ab", "abc", 0), ("", "", 1)]
    for o in q["options"]:
        expr = tick(o["value"])
        body = "".join(f'{{ char a[]="{x}", b[]="{y}"; printf("%d", ({expr}) != 0); }}\n' for x, y, _ in pairs)
        r = run(PRE + "int main(void){\n" + body + "return 0;}")
        want = "".join(str(t) for _, _, t in pairs)
        ok((r[0] == 0 and r[1].strip() == want) == (o["id"] == q["correctId"]),
           f"C04-Q1: option {o['id']} {expr!r} gives truth table {r[1]!r} (wanted {want!r})")
    check_out("C04-Q2")
    check_fill("C04-Q3", "11 11 11", pre=GUARD,
               driver=r"""int main(void){ char *ts[]={"hi","hello world foo",""}; for(int i=0;i<3;i++){ char *c=copy(ts[i]); int g=gok(); printf("%d%d ", g, strcmp(c,ts[i])==0); } return 0; }""")
    COVERED.add("C04-Q4")
    q = Q["C04-Q4"]
    for o in q["options"]:
        decl = tick(o["value"])
        r = run(PRE + "int main(void){ " + decl + " s[0] = 'H'; printf(\"%s\", s); return 0; }")
        ok((good(r, "Hi")) == (o["id"] == q["correctId"]), f"C04-Q4: option {o['id']} {decl!r} -> {r[0]} {r[1].strip()!r}")
    DUP = ["char *dup(char *s) {", "    char *c = (char*)malloc(strlen(s) + 1);", "    strcpy(c, s);", "    return c;", "}"]
    drv_dup = r"""int main(void){ char o[]="abc"; char *d=dup(o); d[0]='X'; printf("%s %s", o, d); return 0; }"""
    check_order("C04-Q5", "abc Xbc", drv_dup)
    check_bug("C04-Q6", ["char *dup(char *s) {", "    char *c = (char*)malloc(strlen(s) + 1);", "    strcpy(c, s);", "    return c;", "}"],
              "abc Xbc", drv_dup, expect_bug="Xbc Xbc")
    r = run(PRE + r"""int main(void){ char s[20]="ab"; strcat(s,"cd"); printf("%s ", s); strcpy(s,"xyz"); printf("%s %d", s, strcmp(s,"xyz")); return 0; }""")
    ok(good(r, "abcd xyz 0"), f"C04 lesson: strcat/strcpy/strcmp example {r[1]!r}")

    # ============================================================ C05
    check_out("C05-Q1")
    check_order("C05-Q2", "1011", r"""int main(void){ printf("%d%d%d%d", isPal("abba"), isPal("abca"), isPal("a"), isPal("")); return 0; }""")
    IP = ["int isPal(char *s) {", "    int i = 0;", "    int j = (int)strlen(s) - 1;", "    while (i < j) {",
          "        if (s[i] != s[j]) return 0;", "        i++; j--;", "    }", "    return 1;", "}"]
    check_bug("C05-Q3", IP, "1011", r"""int main(void){ printf("%d%d%d%d", isPal("abba"), isPal("abca"), isPal("a"), isPal("")); return 0; }""",
              expect_bug="0001")
    check_out("C05-Q4")
    out = check_out("C05-Q5", pre=ISPAL)
    check_fill("C05-Q6", "cba", outs={"a": "abc", "b": "", "c": "ccc"})
    r = run(PRE + r"""int main(void){ char s[]="abcde"; int i=0,j=4,k=0; while(i<j){char t=s[i];s[i]=s[j];s[j]=t;i++;j--;k++;} printf("%s %d", s, k); return 0;}""")
    ok(good(r, "edcba 2"), f"C05 lesson example abcde -> edcba in 2 swaps: {r[1]!r}")

    # ============================================================ C06
    check_out("C06-Q1")
    AN = r"""int main(void){ printf("%d%d%d%d", isAnagram("listen","silent"), isAnagram("abc","abd"), isAnagram("a","aa"), isAnagram("",""));return 0;}"""
    check_order("C06-Q2", "1001", AN)
    ANL = list(Q["C06-Q3"]["step"]["lines"])
    ok(ANL[5].strip() == "cnt[b[i] - 'a']++;", "C06-Q3: the bug is ++ instead of -- on the b line")
    ANL[5] = ANL[5].replace("++", "--")
    check_bug("C06-Q3", ANL, "1001", AN, expect_bug="0001")
    check_out("C06-Q4")
    check_fill("C06-Q5", "c-x", driver=r"""int main(void){ printf("%c%c%c", firstUnique("aabbcd"), firstUnique("abcabc"), firstUnique("xyzzy")); return 0; }""")
    COVERED.add("C06-Q6")
    fn = "\n".join(Q["C02-Q2"]["step"]["lines"][:0]) or ""
    anf = "\n".join(Q["C06-Q2"]["step"]["lines"])
    t1, t2, pct = ratio_c(anf, "isAnagram(a, a)", 2000000, 4000000, "char *a=(char*)malloc(n+1); memset(a,'b',n); a[n]=0;")
    ok(150 <= pct <= 260, f"C06-Q6: isAnagram time ratio for 2n is {pct}% -> linear (times {t1/10}ms, {t2/10}ms)")
    r = run(PRE + r"""int main(void){ char s[]="banana"; int c[26]={0}; for(int i=0;s[i];i++) c[s[i]-'a']++; printf("%d %d %d", c['a'-'a'], c['b'-'a'], c['n'-'a']); return 0;}""")
    ok(good(r, "3 1 2"), "C06 lesson: banana counts")

    # ============================================================ C07
    check_out("C07-Q1")
    out = check_out("C07-Q2")
    r = run(PRE + r"""int main(void){ char a='0',b='7'; printf("%d %d %d", a*10+b, (a-'0')+(b-'0')*10, (a-'0')*10+b); return 0;}""")
    ok(good(r, "535 70 55"), f"C07-Q2: the wrong variants really give 535 / 70 / 55 ({r[1]!r})")
    CSM = r"""int main(void){ printf("%d %d %d %d", commonSum("1928374"), commonSum("55"), commonSum("00"), commonSum("123")); return 0; }"""
    check_order("C07-Q3", "10 10 0 3", CSM)
    CSL = ["int commonSum(char *s) {", "    int cnt[19] = {0}, best = 0, i;", r"    for (i = 0; s[i + 1] != '\0'; i++)",
           "        cnt[(s[i] - '0') + (s[i + 1] - '0')]++;", "    for (i = 1; i < 19; i++)", "        if (cnt[i] > cnt[best])",
           "            best = i;", "    return best;", "}"]
    check_bug("C07-Q4", CSL, "10 10 0 3", CSM, expect_bug=None)
    r = run(PRE + "\n".join(CSL).replace("int cnt[19]", "int cnt[19]") + "\n" + r"""int main(void){ int cnt[19]={0}; char *s="1928374"; for(int i=0;s[i+1];i++) cnt[(s[i]-'0')+(s[i+1]-'0')]++; printf("%d %d", cnt[10], cnt[11]); return 0;}""")
    ok(good(r, "3 3"), "C07 lesson: 1928374 has cnt[10]=cnt[11]=3")
    bugged = "\n".join(Q["C07-Q4"]["step"]["lines"])
    r = run(PRE + bugged + r"""int main(void){ printf("%d", commonSum("1928374")); return 0;}""")
    ok(good(r, "11"), f"C07-Q4: buggy version returns 11 on 1928374 as the prompt says ({r[1]!r})")
    check_out("C07-Q5")
    COVERED.add("C07-Q6")
    csf = "\n".join(Q["C07-Q3"]["step"]["lines"])
    t1, t2, pct = ratio_c(csf, "commonSum(a)", 3000000, 6000000,
                          "char *a=(char*)malloc(n+1); for(int i=0;i<n;i++) a[i]='0'+(i*7)%10; a[n]=0;")
    ok(150 <= pct <= 260, f"C07-Q6: commonSum time ratio for 2n is {pct}% -> linear (times {t1/10}ms, {t2/10}ms)")

    # ============================================================ C08
    check_out("C08-Q1")
    RS = r"""int main(void){ char a[]="a b  c", b[]=" x ", c[]=""; removeSpaces(a); removeSpaces(b); removeSpaces(c); printf("[%s][%s][%s]", a, b, c); return 0; }"""
    check_order("C08-Q2", "[abc][x][]", RS)
    RSL = ["void removeSpaces(char *s) {", "    int i, w = 0;", r"    for (i = 0; s[i] != '\0'; i++) {", "        if (s[i] != ' ') {",
           "            s[w] = s[i];", "            w++;", "        }", "    }", r"    s[w] = '\0';", "}"]
    check_bug("C08-Q3", RSL, "[abc][x][]", RS, expect_bug=None)
    check_fill("C08-Q4", "[abc][abab][ab][]",
               driver=r"""int main(void){ char a[]="aabccc", b[]="abab", c[]="aab", d[]=""; collapse(a); collapse(b); collapse(c); collapse(d); printf("[%s][%s][%s][%s]", a, b, c, d); return 0; }""",
               outs={"a": "[aa][aa][aa][]", "c": "[abccc][abb][ab][]"})
    check_out("C08-Q5")
    check_fill("C08-Q6", "[abd][ab][]",
               driver=r"""int main(void){ char a[]="abcabdd", b[]="aaabbc", c[]="abc"; keepRepeated(a); keepRepeated(b); keepRepeated(c); printf("[%s][%s][%s]", a, b, c); return 0; }""")
    r = run(PRE + r"""int main(void){ char s[]="a b  c"; int w=0; for(int i=0;s[i];i++) if(s[i]!=' ') s[w++]=s[i]; printf("[%s] ", s); s[w]=0; printf("[%s]", s); return 0;}""")
    ok(good(r, "[abc  c] [abc]"), f"C08 lesson: without the terminator abc  c, with it abc ({r[1]!r})")

    # ============================================================ C09 boss: bank ids + their stored solutions
    bank = json.load(open(ROOT / "questions.json", encoding="utf-8"))["questions"]
    byid = {x["id"]: x for x in bank}
    boss = [q["bankId"] for q in LEVELS[-1]["questions"]]
    ok(LEVELS[-1].get("boss") is True and len(boss) == 5, "C09 is the boss with 5 bankId questions")
    for bid in boss:
        x = byid.get(bid)
        ok(x is not None and x["topic"] == "strings" and x["kind"] == "code", f"{bid}: in the bank, topic strings")
        ok(x["official"] is True or x["solutionSource"] in ("solved", "student-solution"), f"{bid}: source {x['solutionSource']}")
    sol = lambda i: fences(byid[i]["solution"])[0]
    cases = [
        ("22A-A-Q3", sol("22A-A-Q3"), r"""int main(void){ char s[]="blablabh"; removeDuplicates(s); printf("%s", s); return 0; }""", "blah"),
        ("22A-B-Q3", sol("22A-B-Q3"), r"""int main(void){ printf("%d%d%d", f_3("cbed"), f_3("dcbd"), f_3("dbcj")); return 0; }""", "100"),
        ("23A-A-Q2", sol("23A-A-Q2"), r"""int main(void){ char s[]="dbcabafacbcbdd"; squeeze(s); printf("%s", s); return 0; }""", "dca"),
        ("24A-A-Q2", sol("24A-A-Q2"), r"""int main(void){ printf("%d %d", str_chardist("ad"), str_chardist("acefhyz")); return 0; }""", "3 2"),
        ("24A-B-Q2", sol("24A-B-Q2"), r"""int main(void){ printf("%d %d %d %d %d %d", find_two_digits("12121212121"), find_two_digits("21212121212"), find_two_digits("222211"), find_two_digits("0001"), find_two_digits("1234"), find_two_digits("426144")); return 0; }""", "12 12 22 0 12 14"),
    ]
    for bid, code, drv, want in cases:
        r = run(PRE + code + "\n" + drv)
        ok(good(r, want), f"{bid}: stored solution reproduces the examples of the exam text ({r[0]} {r[1].strip()!r}, wanted {want!r})")

    # ============================================================ lesson <pre> functions compile
    for lv in LEVELS:
        pass
    # ------------------------------------------------------------ coverage
    allq = {q["id"] for lv in LEVELS for q in lv["questions"] if "id" in q}
    ok(allq == COVERED, f"every authored question is machine-checked (unchecked: {sorted(allq - COVERED)}; unknown: {sorted(COVERED - allq)})")
    print(f"\nchecks passed: {PASSES}, failed: {len(FAILS)}")
    for f in FAILS:
        print("  -", f)
    sys.exit(1 if FAILS else 0)


if __name__ == "__main__":
    main()
