# -*- coding: utf-8 -*-
"""Generator for tools/raw/22A-B.json -- intro-cs, 2022 semester A, moed B.
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_22A-B.py

Source: sitting 22A-B, pp.1-4 (official solution code printed under each question).
4 questions (25/25/25/30). Q1 has two printed functions (rows, then columns): items 1a and 1b; the 25 points are
not split on the page, so no per-part points are given.

Transcription notes
- Q1 matrices are LTR tables (the bold diagonal runs from the left column); transcribed as C initialisers.
- Q3: the key lists two versions ("Or" f_33). f_3 is correct. f_33 tracks min/max with if/else-if, so a letter that
  sets a new min is never considered for max: for "ca" it returns 1 although the answer is 0. Flagged inside the
  solution text; not corrected.

Compile-and-run (clang -Wall, harness tools/verify/22A-B/h22b.c):
- Q1a/Q1b: printed examples give 1 and 0. OK.
- Q2: examples give 1 and -1. OK.
- Q3: f_3 and f_33 give 1,0,0 on cbed/dcbd/dbcj; exhaustive check on strings over a..e (len<=4): they differ on 25
  strings, f_3 is right in all of them (e.g. "ca": f_3=0, f_33=1).
- Q4: stdin 2 6 3 4 7 5 prints 67. OK.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22A-B.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_lines(src):
    return "```c\n" + src.strip("\n").expandtabs(4) + "\n```"


SOL1A = r"""int f_1(int M[][N]) {
    int i, j, sum;
    for (i = 0; i < N; i++) {
        sum = 0;
        for (j = 0; j < N; j++) {
            sum += M[i][j];
        }
        if (sum - M[i][i] != M[i][i]) return 0;
    }
    return 1;
}"""

SOL1B = r"""int f_11(int M[][N]) {
    int i, j, sum;
    for (j = 0; j < N; j++) {
        sum = 0;
        for (i = 0; i < N; i++) {
            sum += M[i][j];
        }
        if (sum - M[j][j] != M[j][j]) return 0;
    }
    return 1;
}"""

SOL2 = r"""int f_2(int *c, int k, int i, int j) {
    if (i == j)
        return -1;
    if (c[i] + c[j] == k) return i;
    if (c[i] + c[j] > k)
        return f_2(c, k, i, j - 1);
    return f_2(c, k, i + 1, j);
}"""

SOL3A = r"""int f_3(char* str) {
      int a[26] = { 0 };
      int i = 0;
      while (*str) {
            a[*str - 'a']++;
            if (a[*str - 'a'] > 1) return 0;
            str++;
      }
      while ((i<26) && (a[i] == 0))
            i++;

      while ((i < 26) && (a[i] == 1))
            i++;

      while (i < 26) {
            if (a[i] != 0) return 0;
            i++;
      }
      return 1;
}"""

SOL3B = r"""int f_33(char* str) {
      int count[26] = { 0 };
      int i = 0,j;
      char min='z', max='a';
      while (*str) {
            count[*str - 'a']++;
            if (count[*str - 'a'] > 1) return 0;
            if (min > *str)
                  min = *str;
            else
                  if (max < *str)
                        max = *str;
            str++;
      }

      i = min - 'a';
      j= max - 'a';
      while (i <= j) {
            if (count[i] != 1) return 0;
            i++;
      }
      return 1;
}"""

SOL4 = r"""int  maxmax(int n) {
    int max, i, num;
    scanf("%d", &max);
    for (i = 0; i < n - 1; i++) {
        scanf("%d", &num);
        if (num > max) {
            printf("%d", num);
            max = num;
        }
    }
}"""

CTX1A = r"""// example 1 -- the function returns 1
int M1[4][4] = {
    {10,  2,  7,  1},
    { 2,  7, -1,  6},
    { 1, -2, -6, -5},
    {-2,  4,  7,  9}
};
// 2+7+1 = 10, 2+(-1)+6 = 7, 1+(-2)+(-5) = -6, (-2)+4+7 = 9

// example 2 -- the function returns 0
int M2[4][4] = {
    {10,  2,  7,  1},
    { 2,  7, -1,  5},
    { 1, -2, -6, -5},
    {-2,  4,  7,  9}
};
// second row: 2+(-1)+5 != 7"""

CTX1B = r"""// example 1 -- the function returns 1
int M1[4][4] = {
    {10,  2,   7, -1},
    { 2,  7, -20,  4},
    { 9, -2,  -6,  6},
    {-1,  7,   7,  9}
};
// 2+9+(-1) = 10, 2+(-2)+7 = 7, 7+(-20)+7 = -6, (-1)+4+6 = 9

// example 2 -- the function returns 0
int M2[4][4] = {
    {10,  2,   7,  1},
    { 2,  7, -20,  4},
    { 9, -2,  -6,  6},
    {-1,  4,   7,  9}
};
// second column: 2+(-2)+4 != 7"""

questions = [
    Q(1, "code", "matrices",
      "כתבו פונקציה **יעילה** המקבלת מערך דו-ממדי `M` (מטריצה) בגודל NxN (N מוגדר על ידי `#define`) של מספרים שלמים, "
      "בודקת ומחזירה **1** אם סכום איברים בכל שורה `i` ($0 \\le i \\le N-1$) של המטריצה ללא הערך שנמצא באלכסון הראשי של "
      "אותה שורה (`M[i][i]`) שווה ל-`M[i][i]`, אחרת הפונקציה מחזירה **0**.\n"
      "**לדוגמה**: עבור המטריצה הבאה הפונקציה תחזיר 1: (בשורה הראשונה 2+7+1 = 10, בשנייה 2+(-1)+6 = 7, בשלישית "
      "1+(-2)+(-5) = -6, ברביעית (-2)+4+7 = 9)\n"
      "ועבור המטריצה השנייה הפונקציה תחזיר 0: עבור השורה השנייה $2+(-1)+5 \\ne 7$.",
      "**פתרון רשמי** (22A-B עמ' 1):\n" + code_lines(SOL1A) + "\n"
      "לכל שורה מחשבים את סכום כל איבריה, ומחסירים את איבר האלכסון: אם הסכום ללא האלכסון שונה מהאיבר עצמו מחזירים 0. "
      "כל תא נקרא פעם אחת, כלומר $O(N^2)$ ביחס למספר התאים.",
      part="א", contextId="c1a"),

    Q(1, "code", "matrices",
      "כתבו פונקציה **יעילה** המקבלת מערך דו-ממדי `M` (מטריצה) בגודל NxN (N מוגדר על ידי `#define`) של מספרים שלמים, "
      "בודקת ומחזירה **1** אם סכום איברים בכל עמודה `j` ($0 \\le j \\le N-1$) של המטריצה ללא הערך שנמצא באלכסון הראשי של "
      "אותה עמודה (`M[j][j]`) שווה ל-`M[j][j]`, אחרת הפונקציה מחזירה **0**.\n"
      "**לדוגמה**: עבור המטריצה הבאה הפונקציה תחזיר 1: (בעמודה הראשונה 2+9+(-1) = 10, בשנייה 2+(-2)+7 = 7, בשלישית "
      "7+(-20)+7 = -6, ברביעית (-1)+4+6 = 9)\n"
      "ועבור המטריצה השנייה הפונקציה תחזיר 0: עבור העמודה השנייה $2+(-2)+4 \\ne 7$.",
      "**פתרון רשמי** (22A-B עמ' 1-2):\n" + code_lines(SOL1B) + "\n"
      "אותו רעיון כמו בסעיף א, כשהלולאה החיצונית רצה על העמודות והפנימית על השורות.",
      part="ב", contextId="c1b"),

    Q(2, "code", "recursion",
      "כתבו פונקציה **רקורסיבית יעילה** שמקבלת מערך **ממוין** `c` של מספרים שלמים, מספר `k` ושני אינדקסים במערך `i, j` כך ש-`i<j`.\n"
      "הפונקציה בודקת האם בתחום של המערך בין האיבר שבאינדקס `i` לבין האיבר שבאינדקס `j` ישנם שני מספרים שנמצאים במקומות "
      "שונים במערך שסכומם שווה ל-`k` - במידה וכן הפונקציה מחזירה את האינדקס של האיבר השמאלי (ימני, או 1 - גרסאות "
      "שונות) מבין זוג המספרים, במידה ולא הפונקציה מחזירה `-1`.\n"
      "לדוגמא:\n"
      "עבור המערך `-5,-2,12,25,34,40`, `k=23`, `i=0`, `j=4` על הפונקציה להחזיר 1.\n"
      "עבור המערך `-5,-2,12,25,34,40`, `k=23`, `i=2`, `j=4` על הפונקציה להחזיר -1.\n"
      "הניחו שהקלט תקין.",
      "**פתרון רשמי** (22A-B עמ' 2):\n" + code_lines(SOL2) + "\n"
      "שני מצביעים משני קצות התחום: אם הסכום שווה ל-`k` מחזירים `i`; אם הסכום גדול מדי מקטינים את `j`, אחרת מגדילים את `i`. "
      "כשהמצביעים נפגשים (`i == j`) אין זוג ומחזירים `-1`. כל קריאה מצמצמת את התחום באחד, כלומר $O(n)$.",
      points=25),

    Q(3, "code", "strings",
      "כתבו פונקציה **יעילה** שמקבלת מחרוזת של אותיות קטנות באנגלית בשם `str`. הפונקציה תחזיר 1 אם כל האותיות במחרוזת הן "
      "אותיות עוקבות ללא חזרות, אחרת תחזיר 0.\n"
      "שימו לב שאין חשיבות לסדר האותיות.\n"
      "הניחו שהקלט תקין.\n"
      "**לדוגמא**, עבור הקלט \"cbed\" יוחזר 1 כיוון שהמחרוזת מכילה את כל האותיות העוקבות בין `b` ל-`e` ללא חזרות.\n"
      "עבור הקלט \"dcbd\" יוחזר 0 כיוון שהאות `d` מופיעה פעמיים.\n"
      "עבור הקלט \"dbcj\" יוחזר 0 כיוון שהמחרוזת לא מכילה את כל האותיות העוקבות בין `b` לבין `j`.\n"
      "חישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא אורך המחרוזת.\n"
      "מותר להשתמש במערך עזר.",
      "**פתרון רשמי** (22A-B עמ' 3), הפונקציה הראשונה:\n" + code_lines(SOL3A) + "\n"
      "**או** (גרסה שנייה כפי שמופיעה בפתרון הרשמי, עמ' 3-4):\n" + code_lines(SOL3B) + "\n"
      "הגרסה הראשונה סופרת הופעות של כל אות (חזרה מחזירה 0), ואז בודקת שהאותיות שנספרו יוצרות בלוק רציף אחד: מדלגים על אפסים, "
      "על אחדים, ואחרי זה כל התאים חייבים להיות 0. סריקה אחת ועוד 26 תאים, כלומר $O(n)$.\n"
      "**הערה:** בגרסה השנייה המשתנה `max` מתעדכן רק כשהאות אינה מינימום חדש, ולכן למשל עבור \"ca\" היא מחזירה 1 "
      "(`max` נשאר `'a'`) אף שהאות `b` חסרה והתשובה הנכונה 0. הגרסה הראשונה תקינה.",
      points=25),

    Q(4, "code", "basics_io",
      "כתבו פונקציה **יעילה** `int maxmax (int n)` שקולטת (על ידי פונקציה `scanf`) סדרת מספרים שלמים בגודל `n` "
      "ומדפיסה כל מספר (לא כולל המספר הראשון בסדרה) **שגדול ממש** מכל המספרים שנקלטו לפניו.\n"
      "דוגמה: עבור הקלט: `2,6,3,4,7,5`\n"
      "הפונקציה תדפיס: `6,7`.\n"
      "על הפונקציה לרוץ בסדר גודל של **n**.\n"
      "אין להשתמש במערך לפתרון השאלה.",
      "**פתרון רשמי** (22A-B עמ' 4):\n" + code_lines(SOL4) + "\n"
      "שומרים רק את המקסימום עד כה. הראשון נקלט בנפרד, וכל מספר נוסף שגדול ממנו מודפס והופך למקסימום החדש. "
      "קריאה אחת לכל מספר וללא מערך, כלומר $O(n)$ וזיכרון $O(1)$.",
      points=30),
]

IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def lines_of(src):
    return [ln for ln in src.strip("\n").expandtabs(4).split("\n") if ln.strip() and not ln.strip().startswith("//")]


def swap(src, old, new):
    """Return the code lines with exactly one line changed (asserted)."""
    ls = lines_of(src)
    idx = [i for i, ln in enumerate(ls) if ln.strip() == old.strip()]
    assert len(idx) == 1, old
    ls[idx[0]] = ls[idx[0]].replace(old.strip(), new.strip())
    return ls, idx[0]


def blank(lines, target):
    idx = [i for i, ln in enumerate(lines) if ln.strip() == target]
    assert len(idx) == 1, target
    return [("___" if i == idx[0] else ln) for i, ln in enumerate(lines)], idx[0]


def grp(src, sizes, merge=()):
    """Logical blocks for `order` steps: consecutive code lines grouped by `sizes`, comments stripped,
    declarations merged via `merge` = [(regex, replacement)]."""
    import re
    ls = [re.sub(r"\s*//.*$", "", ln) for ln in lines_of(src)]
    assert sum(sizes) == len(ls), (sum(sizes), len(ls))
    out, pos = [], 0
    for n in sizes:
        out.append(chr(10).join(ls[pos:pos + n]))
        pos += n
    for old, new in merge:
        hit = [i for i, b in enumerate(out) if re.search(old, b)]
        assert len(hit) == 1, old
        out[hit[0]] = re.sub(old, new, out[hit[0]])
    return out


def add(num, part, **kw):
    for q in questions:
        if q["num"] == num and q.get("part") == part:
            q.update(kw)
            return
    raise KeyError((num, part))


# ---- rubric / pitfalls / steps (ai-draft); expected values come from real clang runs of tools/verify/22A-B/steps.c.
# Q3 uses the first official version f_3 (f_33 is wrong, see the note in the solution). The 25 points of Q1 are not
# split on the page: the 13/12 split below is a draft (parts a and b are the same problem transposed, so the points are nearly equal). ----
S1A = lines_of(SOL1A)
b1a, i1a = swap(SOL1A, "if (sum - M[i][i] != M[i][i]) return 0;", "if (sum - M[i][i] == M[i][i]) return 0;")
f1a, j1a = blank(S1A, "if (sum - M[i][i] != M[i][i]) return 0;")
S1B = lines_of(SOL1B)
b1b, i1b = swap(SOL1B, "if (sum - M[j][j] != M[j][j]) return 0;", "if (sum != M[j][j]) return 0;")
f1b, j1b = blank(S1B, "sum += M[i][j];")
S2 = lines_of(SOL2)
O2 = grp(SOL2, [3, 3, 2])
b2, i2 = swap(SOL2, "if (c[i] + c[j] > k)", "if (c[i] + c[j] < k)")
f2, j2 = blank(S2, "return f_2(c, k, i, j - 1);")
S3 = lines_of(SOL3A)
O3 = grp(SOL3A, [3, 5, 2, 2, 4, 2],
         merge=[(r"int a\[26\] = \{ 0 \};\s*int i = 0;", "int a[26] = { 0 }, i = 0;")])
b3, i3 = swap(SOL3A, "if (a[*str - 'a'] > 1) return 0;", "if (a[*str - 'a'] >= 1) return 0;")
f3, j3 = blank(S3, "while ((i < 26) && (a[i] == 1))")
S4 = lines_of(SOL4)
O4 = grp(SOL4, [2, 1, 2, 4, 2])
b4, i4 = swap(SOL4, "if (num > max) {", "if (num >= max) {")
f4, j4 = blank(S4, "if (num > max) {")

add(1, "א",
    rubric=rub(("לולאה חיצונית על השורות `i`, ולולאה פנימית שמסכמת את כל השורה", 5),
               ("איפוס `sum = 0` בתחילת כל שורה", 2),
               ("הבדיקה `sum - M[i][i] != M[i][i]` והחזרת `0` בכישלון", 4),
               ("`return 1` אחרי שכל השורות עברו, וקריאה של כל תא פעם אחת בלבד", 2)),
    rubricSource="ai-verified",
    pitfalls=["להשוות את `sum` ל-`M[i][i]` בלי להחסיר את איבר האלכסון מהסכום.",
              "לשכוח לאפס את `sum` בין שורות, ולצבור סכומים מכל השורות.",
              "להחזיר `1` או `0` בתוך הלולאה אחרי השורה הראשונה במקום לבדוק את כולן."],
    steps=[
        {"type": "numeric", "prompt": "במטריצה הראשונה (שמחזירה 1): מהו סכום השורה השנייה (`i = 1`) ללא איבר האלכסון?",
         "answer": 7, "tol": 0, "explain": "$2+(-1)+6=7$, ושווה ל-`M[1][1] = 7` (ריצה אמיתית: 7)."},
        {"type": "choice", "prompt": "מה מחזירה הפונקציה על המטריצה הראשונה ועל המטריצה השנייה, לפי הסדר?",
         "options": opts("`1` ואז `0`", "`0` ואז `1`", "`1` ואז `1`", "`0` ואז `0`"), "correctId": "a",
         "explain": "במטריצה השנייה בשורה 2 מתקבל $2+(-1)+5=6\\ne7$ (ריצה אמיתית: 1 ו-0)."},
        {"type": "fillblank", "prompt": "השלימו את הבדיקה בסוף כל שורה.", "code": True, "lines": f1a, "blankIndex": j1a,
         "options": opts("if (sum - M[i][i] != M[i][i]) return 0;", "if (sum != M[i][i]) return 0;",
                         "if (sum - M[i][i] == M[i][i]) return 0;", "if (sum + M[i][i] != M[i][i]) return 0;"),
         "correctId": "a",
         "explain": "הסכום כולל את האלכסון, ולכן מחסירים אותו לפני ההשוואה. שלוש האפשרויות האחרות מחזירות 0 גם על המטריצה החוקית (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `f_1`.", "code": True, "lines": S1A,
         "explain": "לכל שורה: איפוס, סכום, בדיקה; ובסוף `return 1`."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b1a, "bugIndex": i1a,
         "explain": "עם `==` מטריצה חוקית נפסלת: על המטריצה הראשונה מוחזר 0 במקום 1 (ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

add(1, "ב",
    rubric=rub(("לולאה חיצונית על העמודות `j` ופנימית על השורות `i` שמסכמת את העמודה", 4),
               ("איפוס `sum = 0` בתחילת כל עמודה", 2),
               ("הבדיקה `sum - M[j][j] != M[j][j]` והחזרת `0` בכישלון", 4),
               ("`return 1` בסוף וקריאה של כל תא פעם אחת", 2)),
    rubricSource="ai-verified",
    pitfalls=["להפוך את האינדקסים ולסכם שורה במקום עמודה (`M[j][i]`).",
              "לשכוח לאפס את `sum` בין עמודות.",
              "להשוות את הסכום לאיבר אחר במקום ל-`M[j][j]`, האלכסון של אותה עמודה."],
    steps=[
        {"type": "numeric", "prompt": "במטריצה הראשונה של סעיף ב: מהו סכום העמודה השנייה (`j = 1`) ללא איבר האלכסון?",
         "answer": 7, "tol": 0, "explain": "$2+(-2)+7=7$, ושווה ל-`M[1][1] = 7` (ריצה אמיתית: 7)."},
        {"type": "choice", "prompt": "מה מחזירה `f_11` על המטריצה הראשונה ועל השנייה, לפי הסדר?",
         "options": opts("`1` ואז `0`", "`0` ואז `1`", "`1` ואז `1`", "`0` ואז `0`"), "correctId": "a",
         "explain": "בשנייה בעמודה 2 מתקבל $2+(-2)+4=4\\ne7$ (ריצה אמיתית: 1 ו-0)."},
        {"type": "fillblank", "prompt": "השלימו את הסכימה בלולאה הפנימית.", "code": True, "lines": f1b, "blankIndex": j1b,
         "options": opts("sum += M[i][j];", "sum += M[j][i];", "sum += M[i][i];"), "correctId": "a",
         "explain": "העמודה `j` קבועה והשורה `i` רצה: `M[i][j]`. `M[j][i]` מסכם שורה ו-`M[i][i]` את האלכסון; שתיהן נכשלות על המטריצה החוקית (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `f_11`.", "code": True, "lines": S1B,
         "explain": "לכל עמודה: איפוס, סכום, בדיקה; ובסוף `return 1`."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b1b, "bugIndex": i1b,
         "explain": "בלי להחסיר את האלכסון, המטריצה החוקית נפסלת (מוחזר 0 במקום 1, ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

add(2, None,
    rubric=rub(("מקרה בסיס: `i == j` (נגמרו הזוגות) מחזיר `-1`", 6),
               ("כשהסכום שווה ל-`k` מחזירים `i`", 5),
               ("כשהסכום גדול מ-`k` מקטינים את `j` (קריאה עם `j - 1`)", 7),
               ("אחרת מגדילים את `i` (קריאה עם `i + 1`)", 5),
               ("כל קריאה מצמצמת את התחום באחד, כלומר זמן $O(n)$", 2)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק את כל הזוגות בשתי לולאות: לא רקורסיבי ו-$O(n^2)$.",
              "להזיז את המצביע הלא נכון: אם הסכום גדול מדי צריך להקטין את `j`, לא להגדיל את `i`.",
              "להשתמש במקרה בסיס `i > j` ולבדוק איבר מול עצמו."],
    steps=[
        {"type": "numeric", "prompt": "על `-5,-2,12,25,34,40`, `k=23`, `i=0`, `j=4`: כמה קריאות (כולל הראשונה) מבוצעות עד שמוחזר ערך?",
         "answer": 3, "tol": 0,
         "explain": "(0,4): $-5+34=29>23$; (0,3): $-5+25=20<23$; (1,3): $-2+25=23$, מחזירים 1 (ריצה אמיתית: 3 קריאות)."},
        {"type": "fillblank", "prompt": "השלימו את הענף שבו הסכום גדול מ-`k`.", "code": True, "lines": f2, "blankIndex": j2,
         "options": opts("return f_2(c, k, i, j - 1);", "return f_2(c, k, i + 1, j);", "return f_2(c, k, i, j - 2);",
                         "return f_2(c, k, i + 1, j - 1);"), "correctId": "a",
         "explain": "המערך ממוין: כדי להקטין סכום גדול מדי מקטינים את האיבר הימני. `j - 2` ו-`i + 1, j - 1` מדלגים על זוגות: `j - 2` מחזירה -1 בדוגמה הראשונה במקום 1, ו-`i + 1, j - 1` מחזירה -1 על `k=10` באותו מערך במקום 1 (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `f_2`.", "code": True, "lines": O2,
         "explain": "מקרה בסיס, בלוק שתי הבדיקות (שוויון וסכום גדול מדי, זרות זו לזו), ובסוף סכום קטן מדי."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b2, "bugIndex": i2,
         "explain": "עם `<` המצביעים זזים לכיוון הלא נכון: בדוגמה הראשונה מוחזר -1 במקום 1 (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "כל קריאה מצמצמת את התחום באחד: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(3, None,
    rubric=rub(("מערך מונים בגודל 26 וספירת כל אות במחרוזת", 5),
               ("הופעה שנייה של אות (`> 1`) מחזירה `0` מיד", 6),
               ("דילוג על האפסים עד האות הראשונה", 4),
               ("מעבר על רצף האחדים", 5),
               ("אחרי הרצף כל המונים חייבים להיות 0 (אחרת `0`), ואחרת `1`", 5)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק רק שאין חזרות ולשכוח לבדוק שהאותיות רצופות.",
              "לדרוש שהאותיות יופיעו במחרוזת בסדר עולה (כל אות גדולה ב-1 מקודמתה): `\"cbed\"` חוקית אף שאינה ממוינת, ולכן רק הרצף של הספירות קובע.",
              "מעקב מקסימום ומינימום עם `if`/`else if`: אות שהיא מינימום חדש לא נבדקת כמקסימום (הגרסה השנייה)."],
    steps=[
        {"type": "choice", "prompt": "מה מחזירה `f_3` על `\"ca\"` ועל `\"cab\"`, לפי הסדר?",
         "options": opts("`0` ואז `1`", "`1` ואז `1`", "`0` ואז `0`", "`1` ואז `0`"), "correctId": "a",
         "explain": "ב-`\"ca\"` חסרה `b` בין `a` ל-`c`; ב-`\"cab\"` שלוש אותיות רצופות (ריצה אמיתית: 0 ו-1)."},
        {"type": "fillblank", "prompt": "השלימו את הלולאה שעוברת על רצף האותיות שהופיעו.", "code": True, "lines": f3, "blankIndex": j3,
         "options": opts("while ((i < 26) && (a[i] == 1))", "while ((i < 26) && (a[i] == 0))",
                         "while ((i < 26) && (a[i] > 1))", "while (i < 26)"), "correctId": "a",
         "explain": "עוברים על האחדים; אחריהם כל המונים צריכים להיות 0. כל אחת משלוש האפשרויות האחרות שגויה "
                    "(בבדיקה מלאה על מחרוזות מעל a..e באורך עד 4: 79, 79 ו-126 תוצאות שגויות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `f_3`.", "code": True, "lines": O3,
         "explain": "הצהרות, לולאת הספירה, דילוג על אפסים, מעבר על אחדים, ובדיקה שהשאר אפס."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b3, "bugIndex": i3,
         "explain": "עם `>= 1` כל אות נחשבת חזרה: אפילו `\"b\"` מחזירה 0 (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "סריקה אחת של המחרוזת ועוד 26 תאים: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(4, None,
    rubric=rub(("קליטת המספר הראשון ל-`max` בנפרד, בלי להדפיס אותו", 8),
               ("לולאה שקולטת עוד `n - 1` מספרים", 8),
               ("הדפסה רק כש-`num > max` (גדול **ממש**)", 10),
               ("עדכון `max = num` אחרי ההדפסה, בלי מערך (זיכרון $O(1)$ וזמן $O(n)$)", 4)),
    rubricSource="ai-verified",
    pitfalls=["שמירת כל המספרים במערך: הנחיית השאלה אוסרת.",
              "`>=` במקום `>`: מדפיס גם מספר ששווה למקסימום הקודם.",
              "להדפיס את המספר הראשון או לא לעדכן את `max` אחרי ההדפסה."],
    steps=[
        {"type": "text", "prompt": "מה מדפיסה `maxmax(6)` על הקלט `2 6 3 4 7 5`? (הקוד מדפיס `%d` בלי מפרידים)",
         "accept": ["67"], "normalize": "none",
         "explain": "מודפסים 6 ו-7 בלבד, צמודים (ריצה אמיתית: 67)."},
        {"type": "numeric", "prompt": "כמה מספרים מודפסים באותה ריצה?", "answer": 2, "tol": 0,
         "explain": "6 גדול מ-2 ו-7 גדול מ-6; 3, 4 ו-5 אינם גדולים מהמקסימום (ריצה אמיתית: 2)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי ההדפסה.", "code": True, "lines": f4, "blankIndex": j4,
         "options": opts("if (num > max) {", "if (num >= max) {", "if (num < max) {", "if (num != max) {"), "correctId": "a",
         "explain": "מדפיסים רק מספר גדול ממש מכל קודמיו, כלומר מהמקסימום עד כה."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `maxmax`.", "code": True, "lines": O4,
         "explain": "הצהרות, קליטת הראשון, כותרת הלולאה עם קליטה, בלוק התנאי (הדפסה ועדכון), וסגירה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b4, "bugIndex": i4,
         "explain": "עם `>=` על הקלט `2 2 3` מודפס 23 במקום 3 (ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

exam = {
    "examCode": "22A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
    "year": 2022,
    "examDate": "2022",
    "sourceFile": "22A-B exam and solution pp.1-4",
    "solutionFile": "22A-B official solution code under each question, pp.1-4",
    "contexts": {
        "c1a": {"kind": "code", "title": "שאלה 1 סעיף א: מטריצות לדוגמה", "code": CTX1A},
        "c1b": {"kind": "code", "title": "שאלה 1 סעיף ב: מטריצות לדוגמה", "code": CTX1B},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
