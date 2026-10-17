# -*- coding: utf-8 -*-
"""Step re-prover for the intro-cs steps (19A-A, 19A-B, 24A-B, 25A-B). Reads the shipped tools/raw/<CODE>.json and
re-runs every claim with clang (via fix_lib.run):
  claim : numeric/choice/text expected value == real program output
  order : identity output == reference, and EVERY pair swap changes status or output
  fill  : the correct option reproduces the reference, every distractor differs (wrong output, crash, hang, build error)
  bug   : the findbug variant differs from the reference
"""
import itertools, json, pathlib, re, sys, tempfile

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import fix_lib  # noqa: E402

fix_lib.TMP = pathlib.Path(tempfile.gettempdir()) / "fixcheck_introsteps"
fix_lib.TMP.mkdir(exist_ok=True)
ROOT = HERE.parents[1]
FAILS = []


def load(code):
    return json.load(open(ROOT / "tools" / "raw" / f"{code}.json", encoding="utf-8"))


def item(d, num, part=None):
    for q in d["questions"]:
        if q["num"] == num and q.get("part") == part:
            return q
    raise KeyError((num, part))


def code_of(text):
    m = re.search(r"```c\n(.*?)\n```", text, re.S)
    return m.group(1)


def sol_code(q):
    return code_of(q["solution"])


def run(src, driver, tag="p"):
    return fix_lib.run(src, driver, tag)


def ok(cond, msg):
    print(("  OK    " if cond else "  FAIL  ") + msg)
    if not cond:
        FAILS.append(msg)


def claim(q, idx, src, driver, label):
    s = q["steps"][idx]
    r = run(src, driver, "claim")
    good = r[0] == 0
    got = r[1].strip() if good else str(r)
    if good:
        if s["type"] == "numeric":
            good = float(got) == s["answer"]
        elif s["type"] == "choice":
            opt = {o["id"]: o["value"] for o in s["options"]}[s["correctId"]]
            good = opt.replace("`", "").strip() == got
        elif s["type"] == "text":
            good = got in s["accept"]
    ok(good, f"{label}: step {idx} {s['type']} -> program printed {got!r}")


def order(q, idx, build, driver, ref, label):
    s = q["steps"][idx]
    lines = s["lines"]
    base = run(build(lines), driver, "o_ref")
    ok(base == ref and base[0] == 0, f"{label}: order identity == reference")
    bad = []
    for i, j in itertools.combinations(range(len(lines)), 2):
        if lines[i].strip() == lines[j].strip():
            bad.append((i, j, "identical text"))
            continue
        b = list(lines)
        b[i], b[j] = b[j], b[i]
        v = run(build(b), driver, "o_sw")
        if v == base:
            bad.append((i, j, "same output"))
    ok(not bad, f"{label}: order forced ({len(lines)} blocks, {len(lines)*(len(lines)-1)//2} swaps) unforced={bad or 'none'}")


def fill(q, idx, build, driver, ref, label):
    s = q["steps"][idx]
    lines = s["lines"]
    bi = s["blankIndex"]
    opts = {o["id"]: o["value"] for o in s["options"]}
    for oid, val in opts.items():
        ls = list(lines)
        ls[bi] = ls[bi].replace("___", val)
        v = run(build(ls), driver, "f_opt")
        if oid == s["correctId"]:
            ok(v == ref and v[0] == 0, f"{label}: fill correct option {val.strip()!r} reproduces reference")
        else:
            ok(v != ref, f"{label}: fill distractor {val.strip()!r} -> {str(v[0])} (differs from reference)")


def bugcheck(q, idx, build, driver, ref, label):
    s = q["steps"][idx]
    v = run(build(s["lines"]), driver, "b_var")
    ok(v != ref, f"{label}: findbug line {s['bugIndex']} {s['lines'][s['bugIndex']].strip()!r} -> {str(v[0])} (differs)")
    # exactly one line differs from the reference solution is asserted in the generator (bug()).


def finish():
    print("\nFAILS:", len(FAILS))
    for f in FAILS:
        print("  -", f)
    sys.exit(1 if FAILS else 0)
