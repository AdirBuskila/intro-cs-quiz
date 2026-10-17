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
      r"$\{a_{n-2},a_{n-1},\ldots,a_{n-3}\}$ וכו' הם תוצר של **סיבובים ציקלי ימינה** של המערך $a$.\n"
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
