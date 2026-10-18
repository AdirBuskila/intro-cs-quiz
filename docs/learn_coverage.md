# Learn coverage re-pass (QA, full bank of 53 questions)

Method: C keywords, library calls and operators used in questions.json compared against the 13 briefs.

- Gap found and closed: `abs` (24A-A Q1, Q2) - added section to docs/briefs/01 - basics_io.md.
- `qsort` appears only inside a pitfall warning (23A-A Q3), not relied on: out of scope.
- No other uncovered construct (malloc/calloc/free, strlen/strcmp/strcpy, struct/typedef, static, sizeof, switch, do-while, ?:, bit ops, NULL, ->).
- Topics with no bank questions (conditionals_loops, functions) still have briefs; they are reached by the guided courses.
