# -*- coding: utf-8 -*-
"""Writes courses/c_strings/C01.js .. C09.js from the level modules. Run:  py tools/verify/needhelp/c_strings/author.py [--final]
--final sets source "ai-verified" (only after check.py passes)."""
import pathlib, sys
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import alib, lvA, lvB, lvC  # noqa: E402

ROOT = HERE.parents[3]
OUT = ROOT / "courses" / "c_strings"
final = "--final" in sys.argv
levels = lvA.LEVELS + lvB.LEVELS + lvC.LEVELS
OUT.mkdir(parents=True, exist_ok=True)
for lv in levels:
    if final:
        lv["source"] = "ai-verified"
    (OUT / (lv["id"] + ".js")).write_text(alib.emit("c_strings", lv), encoding="utf-8", newline="\n")
print("wrote", len(levels), "levels,", sum(len(l["questions"]) for l in levels), "questions", "(ai-verified)" if final else "(ai-draft)")
