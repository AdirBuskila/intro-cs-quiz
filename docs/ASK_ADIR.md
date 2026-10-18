# ASK_ADIR - intro-cs

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open - summary (all items are already shipped and refuter-verified; each only needs a keep/hold decision)
1. 19A-A Q5 and Q6, 24A-B Q1-Q4, 19A-B Q1-Q6, 25A-B Q4: no usable official key, or the key has a typo. Shipped as `solved` + `official:false` with a visible label and a Hebrew note. Keep, or hold?
2. 20A-A Q5, 22A-A Q3/Q4, 22A-B Q3: official solution kept verbatim, with a note about a flawed alternative version or a printed-skeleton mismatch. Keep, or hold?
3. Nothing else blocks ship. Phase 7 needs: the deck redesign check, then your OK to go public.

Details (entries below say "pending refuter"; the refuter pass is done, see tools/raw/_verify_*.json):

### 19A-A Q5 - resolved by solver, pending refuter (was: official key does not compile)
19A-A p.4 Q5: the key `is_sum(int* a, int* b, int n)` uses `d` in `binary_search(b, n, d-a[i])` but has no `d` parameter (clang: undeclared identifier). Adding `d` makes it correct (100000 random cases), but the key as printed is wrong. Decide: ship with `d` added (labelled fix) or let the solver write it.
Solver: per ruling, shipped the official code with `int d` added only, `solved`/`official:false`, Hebrew typo-fix note; 20000 random cases, 0 mismatches.

### 19A-A Q6 - resolved by solver, pending refuter (was: official key loops forever)
19A-A p.5 Q6: `CheckMagic` column loop reads `for (i=0; i<N; j++)` (i never advances; the run segfaults on the exam's own magic square). Decide: approve the corrected loop (`i++`) or let the solver write it.
Solver: per ruling, shipped the official code with `j++` -> `i++` only, `solved`/`official:false`, Hebrew typo-fix note; 20000 cases each at N=3/4/5, 0 mismatches.

### 19A-B Q1-Q6 (incl. bonus) - resolved by solver, pending refuter (was: no-key)
No answer source for this sitting; route to the solver. Question text is fully transcribed.
Solver: all 7 items (Q1, Q2, Q3, Q3 bonus, Q4, Q5, Q6) solved, harnesses in tools/verify/19A-B/; examples + >=20000 random/exhaustive cases each, 0 mismatches. Function names chosen by the solver (none printed).

### 20A-A Q5 - shipped, printed skeleton and key differ
20A-A p.7 Q5a: the exam skeleton of `TestCount` ends with `return 0;`, the official solution page prints `return 1;` there (the printed skeleton cannot work). Also the exam's example matrix holds 12, 17, 11, outside the 0..9 range the solution page assumes. Key kept verbatim with notes; hold if you prefer.

### 25A-B Q4 - resolved by solver, pending refuter (was: no full-mark key)
Only source is the graded student answer (22/27); its third loop in the helper runs to the wrong bound and returns 6 on the printed example (answer 4). Needs a solver key. Solver: wrote `number_squares` (O(N^2)), example 4, 40000 random cases, 0 mismatches; tools/verify/25A-B/solve_q4.c. Also 25A-B Q3: the printed example claims `glue` is buildable from "intelligence" (no letter u); kept verbatim.

### 24A-B Q1-Q4 - resolved by solver, pending refuter (was: no-key)
No answer source for this sitting; route to the solver.
Solver: all 4 solved, harnesses in tools/verify/24A-B/; all printed examples + 20000 random cases each vs brute force, 0 mismatches.

### 22A-A Q4, 22A-A Q3, 22A-B Q3 - shipped, official key has a flawed alternative version
22A-A p.4 Q4: the key prints two functions; `question4_version1` returns the largest element <= k (0 on the printed example, answer 2), `version2` is correct. 22A-A p.3 Q3: second version indexes `s[i]-'A'` on lowercase input (out of bounds); first version correct. 22A-B p.3-4 Q3: alternative `f_33` returns 1 for "ca" (should be 0); `f_3` correct. All kept verbatim with a note in the solution text; hold them if you prefer.


## Resolved

### 25A-A Q2 - resolved: official code correct for k<0 as specified
