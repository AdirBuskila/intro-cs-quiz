# STATUS - intro-cs

Resume here: phase 7 - ship (awaiting Adir: deck redesign check + GATE 3 OK to go public)
Opus sessions: not tracked in this file (solver/arbiter work was done earlier; see git log)
Engine: open   Format: open (code-heavy)   Cutoff: 2019 (10 sittings, 19A-A .. 25B)

Triage material (private, names students, never copied into this repo): C:\Users\Adir\Desktop\Coding\Dev\course-factory\courses\intro-csormat_triage.md

Gates 1, 2 and 7 always stop for Adir.

- [x] Phase 0 - intake
  - [x] registry entry exists
  - [x] source folder exists and is non-empty
- [ ] Phase 1 - triage  (GATE 1: Adir approves format, cutoff, topics)
  - [x] triager run per subfolder
  - [x] format_triage.md merged (verdict, cutoff, topics, engine choice)
  - [ ] Adir approved
  - [x] config.overlay.json written, app repo scaffolded (triage stays in the factory)
- [ ] Phase 2 - flagship  (GATE 2: Adir tries it in the browser)
  - [x] topic taxonomy chosen
  - [x] flagship sitting transcribed + validated (25A-A: 4 code items)
  - [x] steps (if open questions) + refuter pass
  - [x] smoke / verify_dom green, running locally
  - [ ] Adir tried it
- [x] Phase 3 - bank
  - [x] all in-scope sittings transcribed (batches of <=4)
  - [x] validate.py clean
  - [x] solver run for questions with no trustworthy solution
  - [x] refuter: non-official all; official 20% sample (whole exam on any disagreement)
  - [x] arbiter / ASK_ADIR for disagreements
  - [x] completeness check per exam
- [x] Phase 4 - steps
  - [x] step-author batches done for every open question
  - [x] rubricSource / stepsSource labeled
  - [x] refuter on every steps block
- [x] Phase 5 - learn
  - [x] learn-writer per topic
  - [x] coverage report: no gaps
- [x] Phase 5b - need help
  - [x] 2-5 course areas approved at gate 1, `needHelp` in course.config.json
  - [x] learn-writer lessons + coverage table complete, step-author questions (bankId pulls marked)
  - [x] course_lint.js --strict clean, refuter (course_dump.js) clean, levels set to ai-verified
  - [x] tools/redact.txt filled, validate.py clean
- [x] Phase 6 - QA
  - [x] validate, build_questions, build_learn, smoke, verify_dom green
  - [x] shoot.js screenshots taken
  - [x] screenshot sweep clean (read by the QA agent, no render-checker worker; see Notes)
- [ ] Phase 7 - ship  (GATE 3: Adir OKs going public)
  - [ ] deck redesign done (else stop and tell Adir)
  - [ ] .gitignore excludes raw PNGs, favicon, GoatCounter, .nojekyll
  - [ ] year range checked against data
  - [ ] Adir OK to go public
  - [ ] GitHub repo + Pages live
  - [ ] deck tile added
  - [ ] registry status = live

## Notes
- Flagship 25A-A (5.02.2025, pp.1-8): 4 items, all kind `code` (arrays, binary_search, recursion, matrices), points 26/26/26/27. Raw generator tools/gen/gen_25A-A.py; rubric and steps still to come (step-author).
- clang results (tools/verify/25A-A/): Q1-Q4 official code compiles and matches the examples (Q1 also 20000 random arrays vs brute force). Q2 official code is correct for k<0 as the question specifies (positive keys are outside the spec); no hold.
- verify_dom.js fails at section 8 only because course.config.json lists 4 needHelp courses and no courses/ level files exist yet (courses=0); with needHelp empty everything passes.

- QA 2026-10-18: 53 questions (computation 6, proof 1, code 46), 0 held, ai-draft stripped 0; validate / verify_dom / verify_learn / course_lint --strict / test_aiprompt / test_normalize all green (smoke.js is mcq-only, n/a). 13 learn chapters, 4 guided courses (recursion 10 levels, c_strings 9, matrices 8, array_algos 8; 35 levels). Learn re-pass: docs/learn_coverage.md (added `abs` to the basics_io brief).
- Not ticked (no artifact in this repo): Phase 1 approval, Phase 2 gate (Adir approved / tried it), Phase 7 items. Phase 1 and 2 headers stay open for that reason; the work under them is ticked.
- Screenshot fixes in QA: raw backticks showed in guided-course level goals (now rendered as code chips in course-ui.js); two level icons (U+1FAA4, U+1FA86) rendered as tofu, replaced.
- Known cosmetic: at 390px an inline code chip next to Hebrew can wrap across a line (e.g. `n = 5`), which splits the chip; text stays correct.
