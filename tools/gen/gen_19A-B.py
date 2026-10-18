# -*- coding: utf-8 -*-
"""Generator for tools/raw/19A-B.json -- intro-cs, semester A 2019, moed B (18.3.19).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_19A-B.py

Source: exam pp.1-4 (p.4 = allowed-functions list). There is NO answer source for this sitting.
The solver wrote every solution (solutionSource "solved", official false), pending the refuter. Q2, Q3, Q3-bonus,
Q4, Q5 and Q6 print no function name or signature; the solver chose the names shown in the solutions.

Solver verification (clang -Wall -Wextra, no warnings; harnesses tools/verify/19A-B/solve_q*.c, the code between
SOLUTION BEGIN/END is the shipped code verbatim):
- Q1 fn (with the printed `If` read as `if`): exhaustive x,y in -60..60 (14641 cases): always x+y -> answer c.
- Q2 digits_parity: both examples (1, 0); exhaustive n = 0..2000000 vs an iterative reference: 0 mismatches.
- Q3a count_in_range: example 3; 20000 random arrays (values in and out of range, negatives) vs brute force: 0.
- Q3b min_prefix_index: both examples (4, 0); 20000 random arrays vs brute force over every prefix: 0.
  No in-range value at all returns 0 (the condition holds vacuously at i=0); n == 0 returns -1. Not specified.
- Q4 is_rotation: example 1; 20000 random distinct-valued pairs (8112 rotations, the rest near-misses and
  unrelated) vs trying every shift: 0. b == a (shift 0) counts as a rotation.
- Q5 sort_two_parts: example -> -2 1 1 3 4 8; 20000 random two-run arrays (any split, incl. empty parts) vs qsort: 0.
- Q6 neighbors_differ: both examples (1, 0); 50000 random 3x3 and 50000 random 5x5 (-DN=5) vs an all-pairs
  brute force: 0 mismatches.
Printed questions: 1, 2, 3, bonus (inside Q3, 10 pts; stored as Q3 part "ב", main question = part "א"),
4 (part 1: answer all of 1-4), and 5, 6 (part 2: answer ONE of 5/6). Points 15/20/20(+10)/25/20/20, cap 100.

Transcription notes
- Q1 code is printed with a capital `If (y==0)` (typo in the exam, kept as printed).
- Q4 is a cyclic-right-rotation question; the three printed rotations are {a_{n-1},a_0,...,a_{n-2}},
  {a_{n-2},a_{n-1},...,a_{n-3}}, ...
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "19A-B.json"
SOLVED = "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n"


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


SOL2 = r"""int digits_parity(int n)
{
   if (n == 0)
      return 1;
   if (n % 10 % 2 != 0)        // even position (0, 2, ...) must hold an even digit
      return 0;
   n = n / 10;
   if (n == 0)
      return 1;
   if (n % 10 % 2 == 0)        // odd position (1, 3, ...) must hold an odd digit
      return 0;
   return digits_parity(n / 10);
}"""

SOL3A = r"""int count_in_range(int *a, int n)
{
   int i, count = 0;
   int *seen = (int*)calloc(n, sizeof(int));
   for (i = 0; i < n; i++)
   {
      if (a[i] >= 0 && a[i] < n && !seen[a[i]])
      {
         seen[a[i]] = 1;
         count++;
      }
   }
   free(seen);
   return count;
}"""

SOL3B = r"""int min_prefix_index(int *a, int n)
{
   int i, total = 0, found = 0;
   int *seen = (int*)calloc(n, sizeof(int));
   for (i = 0; i < n; i++)              // pass 1: how many distinct values in 0..n-1
      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0)
      {
         seen[a[i]] = 1;
         total++;
      }
   for (i = 0; i < n; i++)              // pass 2: first index where all of them were seen
   {
      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1)
      {
         seen[a[i]] = 2;
         found++;
      }
      if (found == total)
      {
         free(seen);
         return i;
      }
   }
   free(seen);
   return -1;                           // only when n == 0
}"""

SOL4 = r"""int is_rotation(int *a, int *b, int n)
{
   int i, k = -1;
   if (n == 0)
      return 1;
   for (i = 0; i < n; i++)          // where did a[0] move to? (values are distinct)
      if (b[i] == a[0])
         k = i;
   if (k == -1)
      return 0;
   for (i = 0; i < n; i++)          // a rotation by k cells puts a[i] at b[(i+k)%n]
      if (b[(i + k) % n] != a[i])
         return 0;
   return 1;
}"""

SOL5 = r"""void sort_two_parts(int *a, int n)
{
   int i, j, k, mid = 1;
   int *temp;
   while (mid < n && a[mid - 1] <= a[mid])   // the second part starts at the first descent
      mid++;
   if (mid >= n)                             // no descent: already sorted
      return;
   temp = (int*)malloc(n * sizeof(int));
   i = 0; j = mid; k = 0;
   while (i < mid && j < n)                  // merge the two sorted parts
   {
      if (a[i] <= a[j])
         temp[k++] = a[i++];
      else
         temp[k++] = a[j++];
   }
   while (i < mid)
      temp[k++] = a[i++];
   while (j < n)
      temp[k++] = a[j++];
   for (i = 0; i < n; i++)
      a[i] = temp[i];
   free(temp);
}"""

SOL6 = r"""int neighbors_differ(int A[N][N])
{
   int i, j;
   for (i = 0; i < N; i++)
      for (j = 0; j < N; j++)
      {
         if (j + 1 < N && A[i][j] == A[i][j + 1])                  // right
            return 0;
         if (i + 1 < N && A[i][j] == A[i + 1][j])                  // down
            return 0;
         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j + 1]) // down-right
            return 0;
         if (i + 1 < N && j > 0 && A[i][j] == A[i + 1][j - 1])     // down-left
            return 0;
      }
   return 1;
}"""

NAMED = "(השאלה לא נותנת שם לפונקציה; השם `{}` נבחר כאן.)\n"

SOLUTIONS = {
    (1, None):
        "**פתרון הפותר** (אין פתרון רשמי למועד זה): תשובה **c**, סכום x ו-y.\n"
        "בקוד המודפס כתוב `If` באות גדולה; זו שגיאת הקלדה, והכוונה ל-`if`.\n"
        "אם `y==0` מוחזר `x`. אם $y>0$, כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, כך שאחרי y קריאות מקבלים $x+y$.\n"
        "אם $y<0$, כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, כך שאחרי $|y|$ קריאות מקבלים $x-|y|=x+y$.\n"
        "לכן בכל מקרה מוחזר $x+y$. למשל `fn(5,3)` מחזירה 8 ו-`fn(5,-3)` מחזירה 2.",
    (2, None):
        SOLVED + code_block(SOL2) + "\n" + NAMED.format("digits_parity") +
        "מקרה בסיס: `n==0`, לא נשארו ספרות, מחזירים `1`. בכל קריאה הספרה האחרונה (`n%10`) נמצאת במקום זוגי וחייבת "
        "להיות זוגית. אחרי שמורידים אותה, הספרה הבאה נמצאת במקום אי-זוגי וחייבת להיות אי-זוגית.\n"
        "אחרי שתי ספרות ממשיכים רקורסיבית עם המספר בלי שתיהן, ושוב הספרה האחרונה נמצאת במקום זוגי. "
        "מספר הקריאות הוא בערך חצי ממספר הספרות.",
    (3, "א"):
        SOLVED + code_block(SOL3A) + "\n" + NAMED.format("count_in_range") +
        "מערך עזר `seen` בגודל `n` מסמן אילו ערכים בתחום `0` עד `n-1` כבר נספרו; ערכים מחוץ לתחום (כמו `9999`) "
        "מדלגים עליהם. כל ערך נספר רק בפעם הראשונה שהוא מופיע.\n"
        "סריקה אחת של המערך: $O(n)$.",
    (3, "ב"):
        SOLVED + code_block(SOL3B) + "\n" + NAMED.format("min_prefix_index") +
        "סריקה ראשונה (כמו בסעיף הראשי) סופרת כמה ערכים שונים בתחום יש במערך, `total`, ומסמנת אותם ב-1. "
        "סריקה שנייה עוברת מההתחלה ומסמנת ב-2 כל ערך בתחום שנראה בה לראשונה; האינדקס הראשון שבו נראו כל `total` "
        "הערכים הוא התשובה.\n"
        "אם אין במערך אף ערך בתחום, `total` הוא 0 ומוחזר `0` (התנאי מתקיים כבר בקידומת `a[0]`); השאלה לא מגדירה "
        "את המקרה הזה.\n"
        "שתי סריקות: $O(n)$.",
    (4, None):
        SOLVED + code_block(SOL4) + "\n" + NAMED.format("is_rotation") +
        "כל הערכים ב-`b` שונים, ולכן `a[0]` מופיע ב-`b` לכל היותר פעם אחת, והמקום שלו `k` קובע את גודל הסיבוב: "
        "סיבוב ב-`k` תאים ימינה מעביר את `a[i]` למקום `(i+k)%n`.\n"
        "סריקה אחת מוצאת את `k` (אם `a[0]` לא נמצא ב-`b` מחזירים `0`), וסריקה שנייה בודקת את כל המקומות. "
        "בדוגמה `a[0]=5` נמצא ב-`b[2]`, כלומר סיבוב ב-2.\n"
        "שתי סריקות: $O(n)$. (מערך `b` זהה ל-`a`, כלומר סיבוב ב-0 או ב-`n` תאים, נחשב כאן סיבוב.)",
    (5, None):
        SOLVED + code_block(SOL5) + "\n" + NAMED.format("sort_two_parts") +
        "קודם מוצאים את תחילת החלק השני: המקום הראשון `mid` שבו `a[mid-1] > a[mid]`. בתוך כל חלק אין ירידה, "
        "ולכן הירידה הראשונה היא בדיוק הגבול בין החלקים; אם אין ירידה בכלל, המערך כבר ממוין.\n"
        "אחר כך ממזגים את שני החלקים הממוינים למערך עזר, כמו שלב המיזוג במיון מיזוג, ומעתיקים חזרה.\n"
        "כל איבר נבדק ומועתק מספר קבוע של פעמים: $O(n)$.",
    (6, None):
        SOLVED + code_block(SOL6) + "\n" + NAMED.format("neighbors_differ") +
        "`N` מוגדר ב-`#define`. כל זוג שכנים נבדק פעם אחת: כל תא מושווה רק לשכן מימין, מלמטה, מלמטה-ימינה "
        "ומלמטה-שמאלה. השכנים שמעליו ומשמאלו כבר הושוו אליו כשעברנו עליהם.\n"
        "התנאים `i+1<N`, `j+1<N` ו-`j>0` מונעים יציאה מגבולות המטריצה.\n"
        "לכל היותר ארבע השוואות לכל תא: $O(N^2)$, וזה אופטימלי כי צריך לקרוא כל תא.",
}

BLACKBOX = ("(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, "
            "`swap`, `partition`, `merge_arrays`.)")


def Q(num, topic, question, points, **kw):
    q = {"num": num, "kind": "code", "topic": topic, "question": question, "points": points}
    q.update(kw)
    q.update({"solution": SOLUTIONS[(num, kw.get("part"))], "solutionSource": "solved",
              "official": False, "confidence": "high"})
    return q


questions = [
    Q(1, "recursion",
      "נתונה הפונקציה הבאה.\n"
      "```c\n"
      "int fn (int x, int y)\n"
      "{\n"
      "        If (y==0)\n"
      "                return x;\n"
      "        if (y<0)\n"
      "                return fn(x, y+1) - 1;\n"
      "        return fn(x, y-1) + 1;\n"
      "}\n"
      "```\n"
      "מה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:\n"
      "a. הפרש בין x ל-y\n"
      "b. הפרש בין y ל-x\n"
      "c. סכום x ו-y\n"
      "d. מכפלת x ו-y+1\n"
      "e. מכפלת x ו-y-1\n"
      "f. אף אחת מהתשובות לעיל לא נכונה",
      15, kind="computation"),

    Q(2, "recursion",
      "כתבו פונקציה **רקורסיבית** המקבלת מספר טבעי, $n$.\n"
      "הפונקציה תחזיר `1` אם כל ספרה במיקום זוגי היא זוגית, וכל ספרה במיקום אי-זוגי היא אי-זוגית, אחרת "
      "הפונקציה תחזיר `0`. מספור המיקומים מתחיל מ-0 ומימין לשמאל.\n"
      "לדוגמא:\n"
      "עבור `n = 43418` הפונקציה תחזיר `1`\n"
      "עבור `n = 343518` הפונקציה תחזיר `0` (במיקום ה-2 נמצאת הספרה 5, מיקום זוגי וערך אי-זוגי)",
      20),

    Q(3, "arrays",
      "כתבו פונקציה **יעילה** שמקבלת מערך של שלמים $a$ וגודלו $n$. הפונקציה בודקת ומחזירה **את כמות הערכים "
      "השונים** בתחום שבין `0` ל-`n-1` המופיעים במערך.\n"
      "לדוגמא:\n"
      "עבור `n = 7` ו-`a = {1,1,5,0,9999,123456,0}`, הפונקציה תחזיר `3`, כי במערך מופיעים 3 ערכים שונים "
      "מהתחום מ-0 עד 6 - 0,1,5.\n"
      "על הפונקציה לרוץ בסדר גודל $n$.\n"
      "ניתן להשתמש במערך עזר.",
      20, part="א"),

    Q(3, "arrays",
      "**בונוס** (10 נקודות)\n"
      "כתבו פונקציה **יעילה** שמקבלת מערך של שלמים $a$ וגודלו $n$.\n"
      "הפונקציה בודקת ומחזירה את האינדקס המינימלי `i`, כך שכל הערכים השונים שיש במערך בתחום שבין `0` ל-`n-1` "
      "מופיעים בחלקו הראשון של המערך, באינדקסים שבין 0 עד `i` (כולל).\n"
      "לדוגמא:\n"
      "עבור `n = 6` ו-`a = {1,9999,1,4,2,1}`, הפונקציה תחזיר `4`, כי עד איבר `a[4]` מופיעים כל הערכים השונים "
      "שיש במערך בתחום מ-0 עד 5.\n"
      "עבור `n = 5` ו-`a = {2,8888,2,5,2}`, הפונקציה תחזיר `0`, כי במערך יש רק ערך אחד בתחום מ-0 עד 4.\n"
      "על הפונקציה לרוץ בסדר גודל $n$.\n"
      "ניתן להשתמש במערך עזר.",
      10, part="ב"),

    Q(4, "arrays",
      r"בהינתן מערך $a=\{a_0,a_1,\ldots,a_{n-1}\}$ המערכים הבאים $\{a_{n-1},a_0,\ldots,a_{n-2}\}$, "
      r"$\{a_{n-2},a_{n-1},\ldots,a_{n-3}\}$ וכו' הם תוצר של **סיבובים ציקלי ימינה** של המערך $a$."
      "\n"
      "כתבו פונקציה **יעילה** שמקבלת שני מערכים $a$ ו-$b$ באותו הגודל, ואת גודלם $n$. המערכים מכילים "
      "מספרים שלמים. כל המספרים בתוך מערך $a$ שונים זה מזה, ובנוסף, כל המספרים בתוך מערך $b$ שונים זה "
      "מזה. הפונקציה בודקת ומחזירה `1` אם מערך $b$ הוא סיבוב ציקלי ימינה של מערך $a$, אחרת היא מחזירה `0`.\n"
      "לדוגמא:\n"
      "עבור `a = {5,2,8,4,1}` ו-`b = {4,1,5,2,8}` הפונקציה תחזיר `1` (כי $b$ הוא סיבוב ציקלי ב-2 תאים ימינה "
      "של מערך $a$).\n"
      "על הפונקציה לרוץ בסדר גודל $n$.",
      25),

    Q(5, "sorting_merge",
      "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\n"
      "נתון מערך $a$ של מספרים שלמים וגודלו $n$, כאשר ידוע כי החלק הראשון (השמאלי) של המערך ממוין בסדר "
      "עולה, וגם החלק השני (הימני) של המערך ממוין בסדר עולה. אין חפיפה בין החלקים, וביחד הם מהווים את "
      "המערך כולו.\n"
      "כתבו פונקציה **יעילה** שמקבלת את המערך $a$ וממיינת אותו.\n"
      "לדוגמא: עבור המערך `a = {1,1,4,8,-2,3}` (החלק הראשון מכיל את האיברים אשר נמצאו במקומות מ-0 עד 3, "
      "והחלק השני מכיל את האיברים שנמצאים במקומות 4,5) הפונקציה תסדר את המערך מחדש: `a = {-2,1,1,3,4,8}`.\n"
      "על הפונקציה לרוץ בסדר גודל של $n$.\n"
      "ניתן להשתמש במערך עזר.\n" + BLACKBOX,
      20),

    Q(6, "matrices",
      "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\n"
      "נאמר ששני איברים שונים במטריצה בעלי אינדקסים $(i,j)$ ו-$(k,m)$ הינם **שכנים** אם $|i-k|\\le 1$ וגם "
      "$|j-m|\\le 1$.\n"
      "מכאן שלכל איבר במטריצה יש לכל היותר שמונה שכנים: שניים באותה השורה, שניים באותה העמודה וארבעה "
      "באלכסונים.\n"
      "כתבו פונקציה **יעילה** שמקבלת מטריצה ריבועית $A$ בגודל $N\\times N$ של מספרים שלמים.\n"
      "הפונקציה צריכה להחזיר `1` אם כל שני איברים שכנים במטריצה $A$ הינם שונים זה מזה, ואפס אחרת.\n"
      "לדוגמא:\n"
      "```\n"
      "11 10 11\n"
      "17 -5 13\n"
      "10 11 10\n"
      "```\n"
      "הפונקציה תחזיר `1`. (לשם אילוסטרציה, השכנים של `-5` במטריצה הראשונה סומנו בקו תחתון.)\n"
      "```\n"
      "11 33 11\n"
      "33 15 13\n"
      "10 11 10\n"
      "```\n"
      "הפונקציה תחזיר `0`.\n" + BLACKBOX,
      20),
]

# ---- steps / rubric / pitfalls (ai-draft); every expected value is re-proved by tools/verify/19A-B/steps_check.py ----
import re
from steps_helpers import opts, rub, blank, bug, add, check_sums


def lines_of(src):
    """Code lines without blank lines, // comment lines and trailing // comments."""
    out = []
    for ln in src.strip("\n").split("\n"):
        ln = re.sub(r"\s*//.*$", "", ln)
        if ln.strip():
            out.append(ln)
    return out


L2 = ["int digits_parity(int n)", "{",
      "   if (n == 0) return 1; if (n % 10 % 2 != 0) return 0;",
      "   n = n / 10; if (n == 0) return 1;",
      "   if (n % 10 % 2 == 0) return 0;",
      "   return digits_parity(n / 10);", "}"]
F2, j2 = blank(L2, 5)

L3A = ["int count_in_range(int *a, int n)", "{",
       "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && !seen[a[i]]) { seen[a[i]] = 1; count++; }",
       "   free(seen); return count;", "}"]
F3A = ["int count_in_range(int *a, int n)", "{",
       "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++)", "      if (___)", "      {", "         seen[a[i]] = 1;", "         count++;", "      }",
       "   free(seen);", "   return count;", "}"]
j3a = 4
F3A[j3a] = "      if (___)"

L3B = ["int min_prefix_index(int *a, int n)", "{",
       "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
       "   for (i = 0; i < n; i++) { if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1) { seen[a[i]] = 2; found++; } if (found == total) { free(seen); return i; } }",
       "   free(seen); return -1;", "}"]
F3B = ["int min_prefix_index(int *a, int n)", "{",
       "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
       "   for (i = 0; i < n; i++)", "   {",
       "      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1) { seen[a[i]] = 2; found++; }",
       "      if (___) { free(seen); return i; }", "   }", "   free(seen);", "   return -1;", "}"]
j3b = 7

L4 = ["int is_rotation(int *a, int *b, int n)", "{",
      "   int i, k = -1; if (n == 0) return 1;",
      "   for (i = 0; i < n; i++) { if (b[i] == a[0]) k = i; } if (k == -1) return 0;",
      "   for (i = 0; i < n; i++) if (b[(i + k) % n] != a[i]) return 0;",
      "   return 1;", "}"]
F4 = ["int is_rotation(int *a, int *b, int n)", "{", "   int i, k = -1;", "   if (n == 0) return 1;",
      "   for (i = 0; i < n; i++)", "      if (b[i] == a[0]) k = i;", "   if (k == -1) return 0;",
      "   for (i = 0; i < n; i++)", "      if (___) return 0;", "   return 1;", "}"]
j4 = 8

L5 = ["void sort_two_parts(int *a, int n)", "{",
      "   int i, j, k, mid = 1, *temp;",
      "   while (mid < n && a[mid - 1] <= a[mid]) mid++;",
      "   if (mid >= n) return; temp = (int*)malloc(n * sizeof(int)); i = 0; j = mid; k = 0;",
      "   while (i < mid && j < n) { if (a[i] <= a[j]) temp[k++] = a[i++]; else temp[k++] = a[j++]; }",
      "   while (i < mid) temp[k++] = a[i++]; while (j < n) temp[k++] = a[j++];",
      "   for (i = 0; i < n; i++) a[i] = temp[i]; free(temp);", "}"]
F5 = ["void sort_two_parts(int *a, int n)", "{", "   int i, j, k, mid = 1, *temp;",
      "   while (mid < n && a[mid - 1] <= a[mid]) mid++;", "   if (mid >= n) return;",
      "   temp = (int*)malloc(n * sizeof(int));", "   i = 0; j = mid; k = 0;",
      "   while (i < mid && j < n)", "      if (___) temp[k++] = a[i++];", "      else temp[k++] = a[j++];",
      "   while (i < mid) temp[k++] = a[i++];", "   while (j < n) temp[k++] = a[j++];",
      "   for (i = 0; i < n; i++) a[i] = temp[i];", "   free(temp);", "}"]
j5 = 8

L6 = lines_of(SOL6)
dl = [k for k, ln in enumerate(L6) if "A[i + 1][j - 1]" in ln]
assert len(dl) == 1
F6 = list(L6)
assert "j > 0" in F6[dl[0]]
F6[dl[0]] = F6[dl[0]].replace("j > 0", "___")
j6 = dl[0]
dr = [k for k, ln in enumerate(L6) if "A[i + 1][j + 1]" in ln]
assert len(dr) == 1
B6, k6 = bug(L6, dr[0], L6[dr[0]].replace("A[i + 1][j + 1]", "A[i + 1][j]"))

M6 = "```\n1 2 1\n3 4 3\n1 2 1\n```"

add(questions, 1,
    rubric=rub(("בחירת התשובה הנכונה, c: הפונקציה מחזירה את סכום x ו-y", 5),
               ("עבור $y>0$: כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, ולכן מקבלים $x+y$", 5),
               ("עבור $y<0$: כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, ולכן מקבלים $x-|y|=x+y$", 5)),
    rubricSource="ai-verified",
    pitfalls=["לבחור a (הפרש): במקרה $y<0$ הפונקציה מחסירה, אבל התוצאה היא $x+y$ ולא $x-y$.",
              "לשכוח את המקרה $y<0$ ולנמק רק עבור $y>0$.",
              "לטעות בבסיס הרקורסיה: הוא `y==0` ומחזיר `x`, ולא מוסיף איבר."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `fn(5, 3)`?", "answer": 8, "tol": 0,
         "explain": "y חיובי, ולכן בכל קריאה מוסיפים 1 לתוצאה: $5+3=8$ (ריצה אמיתית: 8)."},
        {"type": "numeric", "prompt": "מה מחזירה `fn(5, -3)`?", "answer": 2, "tol": 0,
         "explain": "y שלילי, ולכן בכל קריאה מחסירים 1: $5-3=2$, כלומר $x+y$ (ריצה אמיתית: 2)."},
        {"type": "numeric", "prompt": "כמה קריאות ל-`fn` מתבצעות בסך הכול (כולל הראשונה) עבור `fn(5, -3)`?", "answer": 4, "tol": 0,
         "explain": "הערכים של y: $-3,-2,-1,0$, ובקריאה האחרונה `y==0` מחזיר `x` (ריצה אמיתית: 4)."},
    ],
    stepsSource="ai-verified")

add(questions, 2,
    rubric=rub(("מקרה בסיס: `n==0` מחזיר `1`", 4),
               ("בדיקת הספרה האחרונה `n%10` שבמקום זוגי: חייבת להיות זוגית", 5),
               ("הסרת ספרה ובדיקת הספרה הבאה, במקום אי-זוגי: חייבת להיות אי-זוגית, ובסיס נוסף כש-`n` נגמר", 5),
               ("קריאה רקורסיבית על המספר בלי שתי הספרות (`n / 10` אחרי ההסרה הראשונה)", 4),
               ("החזרת `0` בהפרה הראשונה", 2)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק רק זוגיות של כל ספרה ולשכוח שבמקום אי-זוגי הספרה צריכה להיות אי-זוגית.",
              "לספור מקומות משמאל: המספור מימין לשמאל, והספרה `n%10` נמצאת במקום 0.",
              "לשכוח את בדיקת הסיום אחרי הספרה הראשונה: עבור מספר בעל ספרה אחת `n` הופך ל-0, והספרה 0 זוגית ולכן תחזיר 0 בטעות."],
    steps=[
        {"type": "numeric", "prompt": "כמה קריאות ל-`digits_parity` מתבצעות בסך הכול (כולל הראשונה) עבור `n = 43418`?",
         "answer": 3, "tol": 0,
         "explain": "כל קריאה מסירה שתי ספרות: 43418, אחר כך 434, אחר כך 4, ושם `n` נהיה 0 ומחזירים 1 (ריצה אמיתית: 3)."},
        {"type": "choice", "prompt": "מה מחזירה `digits_parity(12)` ומה מחזירה `digits_parity(21)`, לפי הסדר?",
         "options": opts("`1, 0`", "`0, 1`", "`1, 1`", "`0, 0`"), "correctId": "a",
         "explain": "ב-12 הספרה 2 במקום 0 (זוגית) והספרה 1 במקום 1 (אי-זוגית): 1. ב-21 הספרה 1 במקום 0 אי-זוגית: 0 (ריצה אמיתית: 1, 0)."},
        {"type": "fillblank", "prompt": "השלימו את השורה האחרונה של הפונקציה.", "code": True, "lines": F2, "blankIndex": j2,
         "options": opts("return digits_parity(n / 10);", "return digits_parity(n);", "return digits_parity(n / 100);",
                         "return digits_parity(n / 10) + 1;"), "correctId": "a",
         "explain": "אחרי שהוסרה ספרה אחת, מסירים את השנייה בעזרת `n / 10` וממשיכים עם המקום הזוגי הבא. `n` לבדו בודק שוב את אותה ספרה, `n / 100` מדלג על ספרה, ו-`+ 1` מחזיר ערך שאינו 0 או 1 (ריצה אמיתית: כולן נכשלות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `digits_parity`.", "code": True, "lines": L2,
         "explain": "בסיס ובדיקת מקום זוגי, הסרת ספרה ובסיס שני, בדיקת מקום אי-זוגי, ובסוף הרקורסיה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
    ],
    stepsSource="ai-verified")

add(questions, 3, "א",
    rubric=rub(("מערך עזר `seen` בגודל `n`, כי הערכים בתחום 0 עד `n-1`", 4),
               ("דילוג על ערכים מחוץ לתחום (`a[i] >= 0 && a[i] < n`)", 5),
               ("ספירת כל ערך שונה פעם אחת בלבד, בעזרת `seen`", 5),
               ("החזרת `count` ושחרור הזיכרון", 3),
               ("סריקה אחת, כלומר $O(n)$", 3)),
    rubricSource="ai-verified",
    pitfalls=["לספור כל מופע במקום כל ערך שונה: במערך `{1,1}` מתקבל 2 במקום 1.",
              "לא לדלג על ערכים מחוץ לתחום: `seen[9999]` יוצא מגבולות המערך.",
              "בדיקת כל ערך מול כל הערכים שלפניו בלולאה מקוננת: $O(n^2)$ ולא $O(n)$."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `count_in_range` עבור `a = {3,3,-1,0,7,0}` ו-`n = 6`?", "answer": 2, "tol": 0,
         "explain": "בתחום $0..5$ מופיעים רק הערכים 3 ו-0 (כל אחד פעמיים), וההשאר `-1` ו-`7` מחוץ לתחום: 2 ערכים שונים (ריצה אמיתית: 2)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי ה-`if`.", "code": True, "lines": F3A, "blankIndex": j3a,
         "options": opts("a[i] >= 0 && a[i] < n && !seen[a[i]]", "a[i] >= 0 && a[i] < n",
                         "a[i] >= 0 && a[i] < n && seen[a[i]]", "a[i] > 0 && a[i] < n && !seen[a[i]]"), "correctId": "a",
         "explain": "סופרים ערך רק אם הוא בתחום ועוד לא נראה. בלי `!seen` מתקבלות ספירות כפולות, עם `seen` בלי שלילה לא סופרים אף ערך, ו-`> 0` מפספס את הערך 0 (ריצה אמיתית: כולן נכשלות על מערכים אקראיים)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `count_in_range`.", "code": True, "lines": L3A,
         "explain": "הקצאת `seen`, הסריקה, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "סריקה אחת של המערך עם עבודה קבועה בכל איבר: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 3, "ב",
    rubric=rub(("סריקה ראשונה: ספירת הערכים השונים שבתחום, `total`, וסימונם ב-`seen`", 3),
               ("סריקה שנייה: סימון המופע הראשון של כל ערך בתחום (`seen` ל-2) וספירתו ב-`found`", 3),
               ("החזרת `i` כאשר `found == total`", 2),
               ("זמן $O(n)$ ושחרור המערך", 2)),
    rubricSource="ai-verified",
    pitfalls=["לספור גם ערכים מחוץ לתחום, כמו `9999`, כחלק מ-`total`.",
              "להגדיל את `found` בכל מופע של ערך ולא רק במופע הראשון שלו: לכן מסמנים ב-2.",
              "לבדוק את `found == total` רק אחרי הלולאה ולהחזיר את האינדקס האחרון במקום הקטן ביותר."],
    steps=[
        {"type": "numeric", "prompt": "אחרי הסריקה הראשונה עבור `a = {1,9999,1,4,2,1}` ו-`n = 6`: מהו `total`?", "answer": 3, "tol": 0,
         "explain": "בתחום $0..5$ מופיעים 1, 4 ו-2, והערך 9999 מחוץ לתחום: `total = 3` (ריצה אמיתית: 3)."},
        {"type": "numeric", "prompt": "מה מחזירה `min_prefix_index` עבור `a = {0,0,0,1,1}` ו-`n = 5`?", "answer": 3, "tol": 0,
         "explain": "יש שני ערכים בתחום (0 ו-1), והערך 1 מופיע לראשונה באינדקס 3, שבו `found` מגיע ל-`total` (ריצה אמיתית: 3)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי העצירה בסריקה השנייה.", "code": True, "lines": F3B, "blankIndex": j3b,
         "options": opts("found == total", "found == n", "found > total", "found == total - 1"), "correctId": "a",
         "explain": "עוצרים כשכל הערכים השונים כבר נראו. האפשרויות האחרות לא מתקיימות לעולם או מתקיימות מוקדם מדי (ריצה אמיתית: כולן נכשלות על הדוגמאות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `min_prefix_index`.", "code": True, "lines": L3B,
         "explain": "הקצאה, סריקה ראשונה לספירה, סריקה שנייה שעוצרת, ושחרור והחזרת `-1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "שתי סריקות לינאריות: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 4,
    rubric=rub(("מציאת המקום `k` של `a[0]` בתוך `b` (הערכים שונים, ולכן `k` יחיד), ו-`0` אם `a[0]` לא נמצא", 6),
               ("טיפול ב-`n == 0`: מחזירים `1`", 4),
               ("בדיקת כל התאים: `a[i]` חייב להופיע ב-`b[(i + k) % n]`", 9),
               ("החזרת `0` בהפרה הראשונה ו-`1` בסוף", 3),
               ("שתי סריקות לינאריות, כלומר $O(n)$", 3)),
    rubricSource="ai-verified",
    pitfalls=["לנסות את כל $n$ הסיבובים ולהשוות כל אחד: $O(n^2)$ ולא $O(n)$.",
              "לשכוח את `% n`: `i + k` יוצא מגבולות `b`.",
              "לא לנצל שהערכים שונים: רק בגללו המקום של `a[0]` יחיד וקובע את גודל הסיבוב."],
    steps=[
        {"type": "numeric", "prompt": "עבור `a = {5,2,8,4,1}` ו-`b = {4,1,5,2,8}`: מהו `k`, האינדקס של `a[0]` בתוך `b`?", "answer": 2, "tol": 0,
         "explain": "`b[2] = 5 = a[0]`, כלומר סיבוב ב-2 תאים ימינה (ריצה אמיתית: 2)."},
        {"type": "choice", "prompt": "מה מחזירה הפונקציה עבור `a = {1,2,3}` ו-`b = {3,2,1}`?",
         "options": opts("`0`", "`1`"), "correctId": "a",
         "explain": "`a[0] = 1` נמצא ב-`b[2]`, ולכן `k = 2`. אבל `b[(1+2)%3] = b[0] = 3` שונה מ-`a[1] = 2`: מחזירים 0 (ריצה אמיתית: 0). הפיכת סדר אינה סיבוב."},
        {"type": "fillblank", "prompt": "השלימו את התנאי שבודק כל תא.", "code": True, "lines": F4, "blankIndex": j4,
         "options": opts("b[(i + k) % n] != a[i]", "b[(i + k + 1) % n] != a[i]", "b[i] != a[i]", "b[(k - i + n) % n] != a[i]"),
         "correctId": "a",
         "explain": "סיבוב ב-`k` תאים ימינה מעביר את `a[i]` למקום `(i + k) % n`. האחרות בודקות היסט שגוי, בלי היסט, או סדר הפוך (ריצה אמיתית: כולן נכשלות על סיבובים אמיתיים)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `is_rotation`.", "code": True, "lines": L4,
         "explain": "הכנה וטיפול ב-`n == 0`, איתור `k`, בדיקת כל התאים, ו-`return 1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "שתי סריקות לינאריות: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 5,
    rubric=rub(("איתור תחילת החלק השני: המקום הראשון `mid` שבו `a[mid-1] > a[mid]`, ו-`return` כשאין ירידה", 5),
               ("מיזוג שני החלקים הממוינים למערך עזר בעזרת שני מצביעים `i`, `j`", 7),
               ("העתקת השארית של החלק שלא נגמר", 3),
               ("העתקה חזרה ל-`a` ושחרור מערך העזר", 3),
               ("זמן $O(n)$", 2)),
    rubricSource="ai-verified",
    pitfalls=["למיין את כל המערך מחדש ($O(n\\log n)$) במקום לנצל את שני החלקים הממוינים.",
              "לשכוח להעתיק את שארית החלק שנותר אחרי שהאחר נגמר.",
              "לא להעתיק חזרה למערך `a`: הפונקציה אמורה למיין אותו במקום."],
    steps=[
        {"type": "numeric", "prompt": "מהו `mid`, תחילת החלק השני, עבור `a = {1,1,4,8,-2,3}`?", "answer": 4, "tol": 0,
         "explain": "הירידה הראשונה היא `8 > -2` באינדקסים 3 ו-4, ולכן `mid = 4` (ריצה אמיתית: 4)."},
        {"type": "numeric", "prompt": "מהו `mid` עבור `a = {5,6,7,1,2}`?", "answer": 3, "tol": 0,
         "explain": "הירידה הראשונה היא `7 > 1`, ולכן `mid = 3` (ריצה אמיתית: 3)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי המיזוג.", "code": True, "lines": F5, "blankIndex": j5,
         "options": opts("a[i] <= a[j]", "a[i] >= a[j]", "a[i] == a[j]", "a[i] > 0"), "correctId": "a",
         "explain": "מעתיקים תחילה את האיבר הקטן מבין שני ראשי החלקים. האחרות מעתיקות בסדר הפוך או לפי תנאי שאינו קשור (ריצה אמיתית: כולן נכשלות על מערכים אקראיים)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `sort_two_parts`.", "code": True, "lines": L5,
         "explain": "הגדרות, איתור `mid`, הכנת מערך העזר, מיזוג, שארית, והעתקה חזרה עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "כל איבר נבדק ומועתק מספר קבוע של פעמים: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 6,
    rubric=rub(("מעבר על כל תא ובדיקה מול השכן מימין", 4),
               ("בדיקה מול השכן מלמטה", 4),
               ("בדיקה מול שני השכנים באלכסונים למטה: ימינה ושמאלה", 6),
               ("הגנה על הגבולות (`j + 1 < N`, `i + 1 < N`, `j > 0`)", 3),
               ("החזרת `0` בשכנים שווים ו-`1` בסוף", 1),
               ("זמן $O(N^2)$", 2)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק רק שכנים באותה שורה ובאותה עמודה ולשכוח את האלכסונים.",
              "לא להגן על הגבולות: `A[i+1][j-1]` בלי `i+1<N` ו-`j>0` יוצא מהמטריצה.",
              "להשוות כל תא לתא הבא אחריו ברצף בלבד (`A[i][j]` מול `A[i][j+1]`) ולהסיק שאין שכנים שווים, בלי לבדוק את השורה שמתחת."],
    steps=[
        {"type": "choice", "prompt": "מה מחזירה `neighbors_differ` עבור המטריצה הבאה?\n" + M6,
         "options": opts("`1`", "`0`"), "correctId": "a",
         "explain": "הערכים השווים (1 בפינות, 3 בצדדים ו-2 למעלה ולמטה) רחוקים זה מזה בשתי שורות או עמודות, ולכן אינם שכנים: מחזירים 1 (ריצה אמיתית: 1)."},
        {"type": "numeric", "prompt": "במטריצה $3\\times 3$ שכל ערכיה שונים: כמה השוואות בין תאים מתבצעות בסך הכול?", "answer": 20, "tol": 0,
         "explain": "זוגות שכנים: 6 אופקיים, 6 אנכיים, 4 באלכסון ימינה-למטה ו-4 באלכסון שמאלה-למטה, כלומר 20 (ריצה אמיתית: 20)."},
        {"type": "fillblank", "prompt": "השלימו את הגנת הגבול בבדיקת השכן שלמטה-שמאלה.", "code": True, "lines": F6, "blankIndex": j6,
         "options": opts("j > 0", "j > 1", "j + 1 < N", "j > 2"), "correctId": "a",
         "explain": "השכן שמאלה-למטה קיים רק כאשר `j > 0`. האחרות מדלגות על עמודות (ריצה אמיתית: הן נכשלות על מטריצות אקראיות)."},
        {"type": "findbug", "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה מפספסת שכנים. מצאו אותה.", "code": True,
         "lines": B6, "bugIndex": k6,
         "explain": "השורה בודקת את השכן מלמטה פעמיים ולא את האלכסון ימינה-למטה, ולכן במטריצה `{{1,2,3},{4,1,5},{6,7,8}}` (שני 1 באלכסון) מתקבל 1 במקום 0 (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)", "accept": ["O(N²)", "O(N^2)"], "normalize": "complexity",
         "explain": "מבקרים בכל אחד מ-$N^2$ התאים ובודקים לכל היותר ארבעה שכנים: $O(N^2)$."},
    ],
    stepsSource="ai-verified")

check_sums(questions)

exam = {
    "examCode": "19A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
    "year": 2019,
    "examDate": "18.3.2019",
    "sourceFile": "19A-B exam pp.1-4",
    "solutionFile": "none (solutions written by the solver)",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
