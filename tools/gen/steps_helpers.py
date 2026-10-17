# -*- coding: utf-8 -*-
"""Shared helpers for the step/rubric sections of the intro-cs generators (19A-A, 19A-B, 24A-B, 25A-B).
Every expected value placed through these helpers is re-proved by tools/verify/<CODE>/steps_check.py (clang runs)."""

IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def blank(lines, idx):
    """Copy of the code lines with line idx replaced by the placeholder."""
    out = list(lines)
    out[idx] = "___"
    return out, idx


def bug(lines, idx, new):
    """Copy of the code lines with exactly line idx changed (asserted to differ)."""
    assert lines[idx] != new
    out = list(lines)
    out[idx] = new
    return out, idx


def add(questions, num, part=None, **kw):
    for q in questions:
        if q["num"] == num and q.get("part") == part:
            q.update(kw)
            return
    raise KeyError((num, part))


def check_sums(questions):
    """Rubric points must add up to the item's points."""
    for q in questions:
        if q.get("rubric"):
            s = sum(r["points"] for r in q["rubric"])
            assert s == q["points"], (q["num"], q.get("part"), s, q["points"])
