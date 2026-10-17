# ASK_ADIR - intro-cs

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

### 25A-A Q2 - official search_in_array misses every positive key
- Path: sitting 25A-A (the sitting is cited by code, not file name)
- Page: p.3 (answer box of Q2)
- Question: the official code compiles, but on the question's own sample array `-1,-5,-13,-15,-21,2,5,12,23` it returns -1 for the keys 2, 5, 12, 23 (all negative keys are found). The question restricts k to negative numbers, so the code is correct for negative keys only; the else branch sends a positive key left. Harness: tools/verify/25A-A/q2_search_in_array.c.
- Needed: decide (a) keep as an exam whose official answer is only valid for negative k (accept it, add a note), or (b) supply a corrected reference solution to use as the model answer.
- Status: hold

<!-- Entry format:
### <exam code> Q<number> - <short title>
- Path: <absolute file path>
- Page: <page number>
- Question: <what is unclear or missing>
- Needed: <what Adir must provide or decide>
- Status: hold
-->

## Resolved
