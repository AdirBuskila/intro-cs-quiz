# -*- coding: utf-8 -*-
"""Writes courses/recursion/C01.js ... from content.py.  Run: PYTHONUTF8=1 py tools/verify/needhelp/recursion/author.py"""
import json, pathlib, sys
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import content

OUT = HERE.parents[2].parent / "courses" / "recursion"
OUT.mkdir(parents=True, exist_ok=True)
for lv in content.LEVELS:
    body = json.dumps(lv, ensure_ascii=False, indent=2)
    txt = ('/* recursion course, level %s - authored in tools/verify/needhelp/recursion/content.py; '
           'every answer is checked there by check.py (clang) */\n'
           'COURSE_LEVEL("recursion", %s);\n') % (lv["order"], body)
    (OUT / (lv["id"] + ".js")).write_text(txt, encoding="utf-8", newline="\n")
    print(lv["id"], len(lv["questions"]))
