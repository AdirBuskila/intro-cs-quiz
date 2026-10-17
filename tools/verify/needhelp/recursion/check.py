# -*- coding: utf-8 -*-
"""Machine check of the `recursion` guided course.  Run: PYTHONUTF8=1 py tools/verify/needhelp/recursion/check.py
Reads the level files courses/recursion/C*.js (via node), and for every own question recompiles the code the student
sees (the fenced block in the question, or the step lines) with clang and asserts the stored answer, and that every
distractor / every other ordering fails observably (wrong output, crash, hang, or compile error). Exit 1 on failure."""
import ctypes, hashlib, itertools, json, pathlib, re, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import content

APP = HERE.parents[2].parent
CLANG = r"C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang.exe"
PRE = "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n"
TMP = pathlib.Path(tempfile.mkdtemp(prefix="rec_chk_"))
try:
    ctypes.windll.kernel32.SetErrorMode(0x8003)  # no crash dialogs in child processes
except Exception:
    pass
CACHE = {}


def run(src, timeout=8):
    """-> stdout (str), 'CRASH' (non-zero exit / timeout) or 'COMPILE_ERROR'."""
    h = hashlib.sha1(src.encode()).hexdigest()[:16]
    if h in CACHE:
        return CACHE[h]
    c, e = TMP / (h + ".c"), TMP / (h + ".exe")
    c.write_text(src, encoding="utf-8")
    p = subprocess.run([CLANG, "-O0", "-w", str(c), "-o", str(e)], capture_output=True, text=True)
    if p.returncode != 0:
        r = "COMPILE_ERROR"
    else:
        try:
            q = subprocess.run([str(e)], capture_output=True, timeout=timeout)
            r = q.stdout.decode("utf-8", "replace") if q.returncode == 0 else "CRASH"
        except subprocess.TimeoutExpired:
            r = "CRASH"
    CACHE[h] = r
    return r


def levels():
    js = ("global.COURSE_LEVEL=(c,o)=>out.push(o);const out=[];const fs=require('fs');"
          "for(const f of fs.readdirSync(process.argv[1]).filter(x=>/^C\\d+\\.js$/.test(x)).sort())"
          "eval(fs.readFileSync(process.argv[1]+'/'+f,'utf8'));console.log(JSON.stringify(out));")
    r = subprocess.run(["node", "-e", js, str(APP / "courses" / "recursion")], capture_output=True, encoding="utf-8")
    assert r.returncode == 0, r.stderr
    return json.loads(r.stdout)


def fence_of(text):
    m = re.search(r"```c?\n(.*?)\n```", text, re.S)
    assert m, "no fence"
    return m.group(1)


def plain(v):
    return re.sub(r"\s+", " ", v.replace("`", "")).strip()


def prog(code, main):
    return PRE + code + "\n" + (main if "int main" in main else "int main(void){ " + main + " return 0; }") + "\n"


FAILS = []


def fail(qid, msg):
    FAILS.append((qid, msg))
    print("FAIL", qid, msg)


def check_question(q):
    qid = q["id"]
    spec = content.CHK.get(qid)
    if spec is None:
        fail(qid, "no CHK recipe")
        return
    k = spec["k"]
    if "step" in q:
        st, text = q["step"], q["step"]["prompt"]
    else:
        st, text = None, q["question"]
    code = fence_of(text) if "```" in text else ""
    if k == "out":
        out = run(prog(code, spec["main"]))
        if spec.get("eq") == "crash":
            if out != "CRASH":
                fail(qid, "expected crash, got %r" % out)
            right = lambda v: "קורס" in v
        else:
            o = plain(out)
            right = lambda v: plain(v) == o
        corr = [x["id"] for x in q["options"] if right(x["value"])]
        if corr != [q["correctId"]]:
            fail(qid, "options matching the real output %s != stored %s (output %r)" % (corr, q["correctId"], out))
        if "also" in spec:
            o2 = run(prog(code, spec["also"][0]))
            if plain(o2) != spec["also"][1]:
                fail(qid, "also-run gave %r" % o2)
        print("ok  ", qid, "out", repr(out)[:30])
    elif k == "val":
        out = run(prog(code, spec["main"]))
        if spec.get("post") == "count":
            out = str(len(out.split()))
        if out in ("CRASH", "COMPILE_ERROR") or float(out) != st["answer"]:
            fail(qid, "computed %r stored %r" % (out, st["answer"]))
        else:
            print("ok  ", qid, "val", out)
    elif k == "expr":
        fn, tests = spec["fn"], spec["tests"]
        main = "int main(void){ " + " ".join('printf("%%d ", %s(%s));' % (fn, ",".join(map(str, t))) for t in tests) + " return 0; }"
        out = run(prog(code, main)).split()
        assert len(out) == len(tests), (qid, out)
        out = list(map(int, out))
        res = [all(e(*t) == o for t, o in zip(tests, out)) for e in spec["exprs"]]
        corr = [i for i, r in enumerate(res) if r]
        # options 0 and 3 are both "2n-1"; the stored option must be the only one equal to the real function
        if corr != ["abcd".index(q["correctId"])]:
            fail(qid, "matching options %s stored %s" % (corr, q["correctId"]))
        else:
            print("ok  ", qid, "expr")
    elif k == "growth":
        q4 = next(x for lv in LV for x in lv["questions"] if x.get("id") == "C07-Q4")
        code4 = fence_of(q4["step"]["prompt"])
        main = "int main(void){ for(int n=1;n<=18;n++){ calls=0; f(n); printf(\"%d \", calls);} return 0; }"
        c = list(map(int, run(prog(code4, main)).split()))
        exact = all(c[n - 1] == 2 ** (n + 1) - 1 for n in range(1, 19))
        refuted = c[17] > 18 ** 3 and c[17] > 1000 * 18 and c[17] > 100 * 18 * 18  # not n, n^2, n^3, log n
        if not (exact and refuted and q["options"]["abcd".index(q["correctId"])]["value"] == "$O(2^n)$"):
            fail(qid, "growth %s" % c[:6])
        else:
            print("ok  ", qid, "calls = 2^(n+1)-1 for n=1..18 (%d at n=18)" % c[17])
    elif k == "fillq":
        outs = {}
        for x in q["options"]:
            outs[x["id"]] = run(prog(code.replace("___", plain(x["value"])), spec["main"]))
        winners = [i for i, v in outs.items() if v == spec["expect"]]
        if winners != [q["correctId"]]:
            fail(qid, "outputs %s expect %r" % (outs, spec["expect"]))
        else:
            print("ok  ", qid, "fillq; distractors:", [v[:12] for i, v in outs.items() if i != q["correctId"]])
    elif k == "fill":
        outs = {}
        for x in st["options"]:
            lines = list(st["lines"])
            lines[st["blankIndex"]] = lines[st["blankIndex"]].replace("___", x["value"])
            outs[x["id"]] = run(prog("\n".join(lines), spec["main"]))
        winners = [i for i, v in outs.items() if v == spec["expect"]]
        if winners != [st["correctId"]]:
            fail(qid, "outputs %s expect %r" % (outs, spec["expect"]))
        else:
            print("ok  ", qid, "fill; distractors:", [v[:14] for i, v in outs.items() if i != st["correctId"]])
    elif k == "order":
        lines = st["lines"]
        base = run(prog("\n".join(lines), spec["main"]))
        if base != spec["expect"]:
            fail(qid, "stored order gives %r expect %r" % (base, spec["expect"]))
            return
        perms = [p for p in sorted(set(itertools.permutations(lines))) if list(p) != lines]
        with ThreadPoolExecutor(8) as ex:
            res = list(ex.map(lambda p: run(prog("\n".join(p), spec["main"])), perms))
        bad = [p for p, r in zip(perms, res) if r == spec["expect"]]
        if bad:
            fail(qid, "%d other orderings also work, e.g. %s" % (len(bad), bad[0]))
        else:
            print("ok  ", qid, "order: stored works, all %d other permutations fail" % len(perms))
    elif k == "bug":
        lines = st["lines"]
        buggy = run(prog("\n".join(lines), spec["main"]))
        fixed_lines = list(lines)
        fixed_lines[st["bugIndex"]] = spec["fix"]
        fixed = run(prog("\n".join(fixed_lines), spec["main"]))
        if buggy == spec["expect"] or fixed != spec["expect"]:
            fail(qid, "buggy %r fixed %r expect %r" % (buggy, fixed, spec["expect"]))
        else:
            print("ok  ", qid, "bug: buggy ->", repr(buggy)[:20], "; fixed ok")
    else:
        fail(qid, "unknown kind " + k)


LV = levels()
n = 0
for lv in LV:
    for q in lv["questions"]:
        if "bankId" in q:
            continue
        n += 1
        try:
            check_question(q)
        except Exception as e:  # noqa
            fail(q["id"], "exception %r" % e)
stored_ids = {q["id"] for lv in LV for q in lv["questions"] if "id" in q}
for qid in content.CHK:
    if qid not in stored_ids:
        fail(qid, "recipe without question")
print("checked", n, "questions;", len(FAILS), "failures")
sys.exit(1 if FAILS else 0)
