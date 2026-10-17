# -*- coding: utf-8 -*-
"""Generator for tools/raw/19A-A.json -- intro-cs, semester A 2019, moed A (19.2.19).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_19A-A.py

Source: exam pp.1-3, official solution pp.1-5 (code in the solution is typed text).
Printed questions: 1, 2, 3, bonus (inside Q3, 10 pts), 4 (part 1: answer all of 1-4), and 5, 6
(part 2: answer ONE of 5/6). The bonus is item Q3 part "ב" (Q3 part "א" is the main question).
Points 15/20/25(+10 bonus)/20/20/20, cap 100 (110 reachable).

Transcription notes
- Q1 is a pick-one-of-a..e trace question; the choices are listed in the question text, the key is b.
- Q3 bonus printed example says "add 1 and 5" but the printed result {1,1,4,3,4,1,1} adds 4 and 1 (exam typo,
  transcribed as printed).
- Official code is transcribed verbatim.

Compile-and-run (clang, harnesses in tools/verify/19A-A/, -Wall -Wextra):
- Q1 fun: equals x*y for every x,y in -20..20 (y != 0, y == 0 never terminates). OK.
- Q2 isPalindromeRec: examples 1/1/0, all 0/1 arrays up to n=8 vs a reference. OK.
- Q3 is_permutation_of_palindrom and bonus: examples (1 and 2); every array over 0..n-1 for n<=6 (50069 arrays)
  vs an independent backtracking palindrome builder; bonus vs brute-force search of the minimal additions
  (n<=5). 0 mismatches. OK.
- Q4 check_if_different_elements: 200000 random sorted pairs vs O(n^2) reference. OK.
- Q5 is_sum: the official code's signature is is_sum(int* a, int* b, int n) but the body uses d
  (undeclared): clang error (q5_is_sum_official_verbatim.c).
- Q6 CheckMagic: the column loop is `for (i=0; i<N; j++)` (i never advances): the official code
  crashes/loops on the exam's own magic square (q6_magic.c, segfault in the run).

Orchestrator ruling on Q5/Q6: ship the official code with the minimal typo fix, solutionSource "solved",
official false, solution prefixed with "הפתרון הרשמי עם תיקון שגיאת הקלדה: ..." naming the change. Solver
verification (diff against the verbatim harnesses = exactly the one fixed line each):
- Q5 (solve_q5.c): `int d` added as 4th parameter. Example d=23 -> 1, d=5 -> 0; 20000 random cases (n 1..10,
  values -10..10) vs O(n^2) brute force: 0 mismatches.
- Q6 (solve_q6.c): column loop `j++` -> `i++`. Example -> 1; 20000 cases each at N=3, 4, 5 (magic squares under
  symmetry/scaling, row-and-column-preserving perturbations that break a diagonal, single-cell changes, random
  0..2 matrices) vs an independent all-line-sums reference: 0 mismatches.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "19A-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


SOL2 = r"""int isPalindromeRec(int *arr, int n)
{
      if (n <= 1)  // !!
            return 1;
      return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);
}"""

SOL3 = r"""int is_permutation_of_palindrom(int *a, int n)
{
      int i, count = 0;
      int * temp = (int*)calloc(n, sizeof(int));
      for (i = 0; i<n; i++)
            temp[a[i]]++;
      for (i = 0; i < n; i++)
      {
            if (temp[i] % 2==1)
                  count++;
      }
      free(temp);
      return count<2;
}"""

SOL3B = r"""int bonus(int*a, int n)
{
      int i, count = 0;
      int * temp = (int*)calloc(n, sizeof(int));
      for (i = 0; i<n; i++)
            temp[a[i]]++;
      for (i = 0; i < n; i++)
      {
            if (temp[i] % 2)
                  count++;
      }
      free(temp);
      if (count > 1)
            return count - 1;
      else
            return 0;
}"""

SOL4 = r"""int check_if_different_elements(int *a, int *b, int n)
{
   int ia=0, ib=n-1;

   while( ia < n  &&  ib >=0 )
{
        if (a[ia] == b[ib])
            return 0;
        if (a[ia] < b[ib])
            ia++;
        else
            ib--;
    }
     return 1;
}"""

SOL5 = r"""int is_sum (int* a, int* b, int n, int d)
{
  int i;
  merge_sort(b, 0, n-1);
  for(i=0; i<n; i++)
  {
    if(binary_search(b, n, d-a[i]) >=0 )
     return 1;
  }
  return 0;
}"""

SOL6 = r"""int CheckMagic(int A[N][N])
{
      int i, j, sum=0, curr_sum;
      //first row
      for (j=0; j<N; j++)
            sum += A[0][j];
      //check rows
      for (i=1; i<N; i++)
      {
            curr_sum = 0;
            for (j=0; j<N; j++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check columns
      for (j=0; j<N; j++)
      {
            curr_sum = 0;
            for (i=0; i<N; i++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check main diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][i];
      if (curr_sum != sum)
            return 0;
      //check secondary diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][N-i-1];
      if (curr_sum != sum)
            return 0;

      return 1;
}"""

FIXED = dict(solutionSource="solved", official=False)

questions = [
    Q(1, "computation", "recursion",
      "נתונה הפונקציה הבאה.\n"
      "```c\n"
      "int fun (int x, int y)\n"
      "{\n"
      "        if (y<0)\n"
      "        {\n"
      "                y = -y;\n"
      "                x = -x;\n"
      "        }\n"
      "        if(y==1)\n"
      "                return x;\n"
      "        return fun(x,y-1)+x;\n"
      "}\n"
      "```\n"
      "מה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:\n"
      "a. סכום x ו-y\n"
      "b. מכפלת x ו-y\n"
      "c. x עם סימן הפוך\n"
      "d. y עם סימן הפוך\n"
      "e. אף אחת מהתשובות לעיל לא נכונה",
      "**פתרון רשמי** (19A-A עמ' 1-2): תשובה **b**, מכפלת x ו-y.\n"
      "הפונקציה סוכמת y פעמים את x, כלומר מחשבת מכפלת $xy$.\n"
      "אם y שלילי, הפונקציה סוכמת $(-y)$ פעמים את $-x$, כלומר גם כן מכפלת $xy$.",
      points=15),

    Q(2, "code", "recursion",
      "כתבו פונקציה **רקורסיבית** שמקבלת מערך $a$ וגודלו $n$. הפונקציה בודקת ומחזירה `1` אם המערך הוא "
      "**פלינדרום**, אחרת היא מחזירה `0`.\n"
      "לדוגמא:\n"
      "עבור מערך `a = {1,3,2,3,1}` ו-`n = 5`, הפונקציה תחזיר `1`.\n"
      "עבור מערך `a = {1,3,2,2,3,1}` ו-`n = 6`, הפונקציה תחזיר `1`.\n"
      "עבור מערך `a = {1,3,2,2,1}` ו-`n = 5`, הפונקציה תחזיר `0`.",
      "**פתרון רשמי** (19A-A עמ' 2):\n" + code_block(SOL2) + "\n"
      "מקרה בסיס: מערך באורך 0 או 1 הוא פלינדרום. אחרת משווים את האיבר הראשון לאחרון, ואם הם שווים ממשיכים "
      "ברקורסיה על הקטע הפנימי (`arr + 1`, `n - 2`).",
      points=20),

    Q(3, "code", "arrays",
      "נאמר שמערך הוא **תמורה של פלינדרום**, אם המערך הוא פלינדרום או אם קיים סידור מחדש של איברי המערך כך "
      "שהמערך המסודר מחדש הוא פלינדרום.\n"
      "כתבו פונקציה **יעילה** שמקבלת מערך $a$ וגודלו $n$, כאשר כל איברי המערך הם מספרים שלמים בתחום בין `0` "
      "ל-`n-1`. הפונקציה בודקת ומחזירה `1` אם המערך הוא **תמורה של פלינדרום**, אחרת היא מחזירה `0`.\n"
      "לדוגמא:\n"
      "עבור `n = 7` ו-`a = {1,1,5,0,1,1,0}`, הפונקציה תחזיר `1`, כי אפשר לסדר את המערך מחדש כך שהוא יהיה "
      "פלינדרום: `a = {1,0,1,5,1,0,1}`.\n"
      "על הפונקציה לרוץ בסדר גודל $n$.\n"
      "ניתן להשתמש במערך עזר.",
      "**פתרון רשמי** (19A-A עמ' 2-3):\n" + code_block(SOL3) + "\n"
      "אם מערך הוא פלינדרום, אז כל ערך מופיע מספר זוגי של פעמים, פרט למספר אחד שמופיע באמצע פלינדרום במקרה "
      "שהמערך הוא בגודל אי-זוגי. לכן כדי לבדוק האם מערך הוא תמורה של פלינדרום מספיק לספור כמות שערכים "
      "שמופיעים מספר אי-זוגי של פעמים. אם הכמות היא 0 או 1 המערך הוא תמורה של פלינדרום, אם הכמות גדולה "
      "מ-1 אין אפשרות לסדר את המערך כך שהוא יהיה פלינדרום.\n"
      "הערה: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, אז המערך אוטומטי בגודל אי-זוגי ואפשר להפוך "
      "אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, אז המערך הוא בגודל זוגי והוא תמורה של "
      "פלינדרום. לכן אין צורך לבדוק שני מקרים.",
      part="א", points=25),

    Q(3, "code", "arrays",
      "**בונוס** (10 נקודות)\n"
      "כתבו פונקציה **יעילה** שמקבלת מערך $a$ וגודלו $n$, כאשר כל איברי המערך הם מספרים שלמים בתחום בין `0` "
      "ל-`n-1`. הפונקציה בודקת ומחזירה את כמות האיברים המינימלית שצריך להוסיף למערך כדי להפוך אותו לתמורה "
      "של פלינדרום.\n"
      "לדוגמא:\n"
      "עבור `n = 5` ו-`a = {1,1,4,3,1}`, הפונקציה תחזיר `2`, כי אפשר להוסיף `1` ו-`5` כך שנקבל פלינדרום: "
      "`a = {1,1,4,3,4,1,1}`.\n"
      "על הפונקציה לרוץ בסדר גודל $n$.\n"
      "ניתן להשתמש במערך עזר.",
      "**פתרון רשמי** (19A-A עמ' 3):\n" + code_block(SOL3B) + "\n"
      "ההערה הרשמית בפתרון: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, המערך אוטומטי בגודל אי-זוגי "
      "ואפשר להפוך אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, המערך הוא בגודל זוגי והוא "
      "תמורה של פלינדרום. לכן אין צורך לבדוק שני מקרים.\n"
      "הערת תמלול: בשאלה המודפסת כתוב \"להוסיף 1 ו-5\", אבל הפלינדרום המודפס `{1,1,4,3,4,1,1}` מתקבל "
      "מהוספת `4` ו-`1`.",
      part="ב", points=10),

    Q(4, "code", "arrays",
      "נתונים שני מערכים $a$ ו-$b$ בגודל $n$ כל אחד. המערכים מכילים מספרים שלמים.\n"
      "המערך $a$ ממוין בסדר עולה ממש ו-$b$ ממוין בסדר יורד ממש.\n"
      "כתבו פונקציה **יעילה** שמקבלת שני מערכים $a$ ו-$b$ וגודלם $n$. הפונקציה בודקת ומחזירה `1` אם כל "
      "האיברים בשני המערכים שונים זה מזה, אחרת היא מחזירה `0`.\n"
      "על הפונקציה לרוץ בסדר גודל $n$.",
      "**פתרון רשמי** (19A-A עמ' 3):\n" + code_block(SOL4),
      points=20),

    Q(5, "code", "binary_search",
      "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\n"
      "נתונים שני מערכים $a$ ו-$b$ בגודל $n$ כל אחד. המערכים מכילים מספרים שלמים.\n"
      "כתבו פונקציה **יעילה** שמקבלת את שני המערכים ומספר שלם $d$, ומחזירה `1` אם קיים מספר $x$ במערך $a$ "
      "ומספר $y$ במערך $b$ כך ש-$x+y=d$. אחרת על הפונקציה להחזיר `0`.\n"
      "לדוגמא, עבור המערכים הבאים:\n"
      "`a = {12,2,14,2}`, `b = {15,11,2,8}`\n"
      "הפונקציה תחזיר `1` אם `d=23` (`12+11=23`) ותחזיר `0` אם `d=5`.\n"
      "על הפונקציה לרוץ בסדר גודל של $n\\log n$.\n"
      "ניתן להשתמש במערך עזר.\n"
      "מותר לפונקציה שאתם כותבים לשנות את הסדר שבו מופיעים האיברים בכל אחד ממערכי הקלט.\n"
      "(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, "
      "`binary_search_right`, `swap`, `partition`, `merge_arrays`.)",
      "הפתרון הרשמי עם תיקון שגיאת הקלדה: בחתימה המודפסת `is_sum (int* a, int* b, int n)` חסר הפרמטר `d` "
      "שהגוף משתמש בו, ולכן נוסף `int d` כפרמטר רביעי. שאר הקוד כפי שהודפס (19A-A עמ' 4).\n" + code_block(SOL5) + "\n"
      "ממיינים את `b` עם `merge_sort` בזמן $O(n\\log n)$. לכל `a[i]` מחפשים ב-`b` הממוין את `d-a[i]` בחיפוש בינארי, "
      "$O(\\log n)$ לכל חיפוש ו-$O(n\\log n)$ לכל $n$ החיפושים. אם נמצא, אז `a[i]+b[j]==d` ומחזירים `1`.\n"
      "סה\"כ $O(n\\log n)$.",
      points=20, **FIXED),

    Q(6, "code", "matrices",
      "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\n"
      "נאמר שמטריצה ריבועית היא **כמעט ריבוע קסם** אם היא מכילה מספרים שלמים כך שסכום האיברים בכל שורה, "
      "בכל עמודה ובשני האלכסונים הוא זהה.\n"
      "לדוגמא:\n"
      "```\n"
      "12 19 14\n"
      "17 15 13\n"
      "16 11 18\n"
      "```\n"
      "כתבו פונקציה **יעילה** שמקבלת מטריצה ריבועית $A$ בגודל $N\\times N$ של מספרים שלמים.\n"
      "על הפונקציה להחזיר `1` כאשר מטריצה היא \"כמעט ריבוע קסם\" ו-`0` אחרת.\n"
      "החישוב חייב להיות בזמן שסדר הגודל שלו $N^2$.\n"
      "(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, "
      "`binary_search_right`, `swap`, `partition`, `merge_arrays`.)",
      "הפתרון הרשמי עם תיקון שגיאת הקלדה: בלולאה הפנימית של בדיקת העמודות הודפס `for (i=0; i<N; j++)`, כך ש-`i` "
      "לא מתקדם והלולאה לא נעצרת; תוקן ל-`for (i=0; i<N; i++)`. שאר הקוד כפי שהודפס (19A-A עמ' 5).\n"
      + code_block(SOL6) + "\n"
      "מחשבים את סכום השורה הראשונה, ומשווים אליו את סכום כל שורה, כל עמודה ושני האלכסונים. בהפרש הראשון מחזירים `0`.\n"
      "בדיקת השורות והעמודות עוברת על $N^2$ תאים כל אחת, והאלכסונים על $N$ תאים כל אחד: סה\"כ $O(N^2)$.",
      points=20, **FIXED),
]

# ---- steps / rubric / pitfalls (ai-draft); every expected value is re-proved by tools/verify/19A-A/steps_check.py ----
from steps_helpers import opts, rub, blank, bug, add, check_sums


def lines_of(src):
    """Code lines of a listing without blank lines and // comment lines."""
    return [ln for ln in src.strip("\n").split("\n") if ln.strip() and not ln.strip().startswith("//")]


L2 = ["int isPalindromeRec(int *arr, int n)", "{",
      "   if (n <= 1) return 1;",
      "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);", "}"]
F2, j2 = blank(L2, 3)
B2, k2 = bug(L2, 3, "   return arr[0] == arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);")

L3A = ["int is_permutation_of_palindrom(int *a, int n)", "{",
       "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) temp[a[i]]++;",
       "   for (i = 0; i < n; i++) if (temp[i] % 2 == 1) count++;",
       "   free(temp); return count < 2;", "}"]
F3A = ["int is_permutation_of_palindrom(int *a, int n)", "{",
       "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) temp[a[i]]++;",
       "   for (i = 0; i < n; i++) if (temp[i] % 2 == 1) count++;",
       "   free(temp);", "   ___", "}"]
j3a = 6

L3B = ["int bonus(int *a, int n)", "{",
       "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) temp[a[i]]++;",
       "   for (i = 0; i < n; i++) if (temp[i] % 2) count++;",
       "   free(temp); if (count > 1) return count - 1; else return 0;", "}"]
F3B = ["int bonus(int *a, int n)", "{",
       "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
       "   for (i = 0; i < n; i++) temp[a[i]]++;",
       "   for (i = 0; i < n; i++) if (temp[i] % 2) count++;",
       "   free(temp);", "   if (count > 1) return ___; else return 0;", "}"]
j3b = 6

L4 = ["int check_if_different_elements(int *a, int *b, int n)", "{",
      "   int ia = 0, ib = n - 1;",
      "   while (ia < n && ib >= 0) { if (a[ia] == b[ib]) return 0; if (a[ia] < b[ib]) ia++; else ib--; }",
      "   return 1;", "}"]
F4 = ["int check_if_different_elements(int *a, int *b, int n)", "{",
      "   int ia = 0, ib = n - 1;", "   while (ia < n && ib >= 0)", "   {",
      "      if (a[ia] == b[ib]) return 0;", "      ___", "         ia++;", "      else", "         ib--;",
      "   }", "   return 1;", "}"]
j4 = 6

L5 = ["int is_sum(int* a, int* b, int n, int d)", "{",
      "   int i; merge_sort(b, 0, n - 1);",
      "   for (i = 0; i < n; i++) if (binary_search(b, n, d - a[i]) >= 0) return 1;",
      "   return 0;", "}"]
F5 = ["int is_sum(int* a, int* b, int n, int d)", "{", "   int i;", "   merge_sort(b, 0, n - 1);",
      "   for (i = 0; i < n; i++)", "      if (___)", "         return 1;", "   return 0;", "}"]
j5 = 5

L6 = lines_of(SOL6)
i6 = [k for k, ln in enumerate(L6) if ln.strip() == "curr_sum += A[i][i];"]
assert len(i6) == 1
B6, k6 = bug(L6, i6[0], L6[i6[0]].replace("A[i][i]", "A[0][i]"))
d6 = [k for k, ln in enumerate(L6) if ln.strip() == "curr_sum += A[i][N-i-1];"]
assert len(d6) == 1
F6, j6 = blank(L6, d6[0])
F6[j6] = "            ___"

M6 = "```\n1 2 3\n2 3 1\n3 1 2\n```"

add(questions, 1,
    rubric=rub(("בחירת התשובה הנכונה, b: הפונקציה מחזירה את מכפלת x ו-y", 5),
               ("נימוק: כל קריאה מוסיפה את x ובסיס הרקורסיה y==1 מחזיר x, ולכן x מסוכם y פעמים", 5),
               ("טיפול ב-y שלילי: הופכים את הסימן של x וגם של y לפני הרקורסיה, והתוצאה נשארת $xy$", 5)),
    rubricSource="ai-verified",
    pitfalls=["לבחור a (סכום x ו-y): כל קריאה רקורסיבית מוסיפה רק את x, ולא את y.",
              "להתעלם מ-y שלילי: הפונקציה הופכת את הסימן של x וגם של y, ולכן התוצאה נשארת $xy$ ולא $-xy$.",
              "לטעות בבסיס הרקורסיה: הוא `y==1` ומחזיר `x`, לא `y==0` שמחזיר 0."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `fun(3, 4)`?", "answer": 12, "tol": 0,
         "explain": "הפונקציה סוכמת y פעמים את x: $3+3+3+3=12$ (ריצה אמיתית: 12)."},
        {"type": "numeric", "prompt": "מה מחזירה `fun(5, -3)`?", "answer": -15, "tol": 0,
         "explain": "y שלילי, לכן y הופך ל-3 ו-x הופך ל-$-5$: סוכמים שלוש פעמים את $-5$ ומקבלים $-15$, כלומר $5\\cdot(-3)$ (ריצה אמיתית: -15)."},
        {"type": "numeric", "prompt": "כמה קריאות לפונקציה `fun` מתבצעות בסך הכול (כולל הקריאה הראשונה) עבור `fun(3, 4)`?",
         "answer": 4, "tol": 0,
         "explain": "הערך y יורד מ-4 ל-1 ובכל קריאה פוחת ב-1: ארבע קריאות, כלומר y קריאות (ריצה אמיתית: 4)."},
    ],
    stepsSource="ai-verified")

add(questions, 2,
    rubric=rub(("מקרה בסיס: `n <= 1` מחזיר `1`", 5),
               ("השוואת האיבר הראשון לאחרון, `arr[0]` מול `arr[n - 1]`, והחזרת `0` אם הם שונים", 6),
               ("קריאה רקורסיבית על הקטע הפנימי: `arr + 1` ו-`n - 2`", 6),
               ("רקורסיה בלבד, בלי לולאה, והחזרת תוצאת הקריאה", 3)),
    rubricSource="ai-verified",
    pitfalls=["בסיס `n == 0` בלבד: במערך באורך אי-זוגי מגיעים ל-`n = 1` ואז ל-`n = -1`, והרקורסיה לא נעצרת.",
              "קריאה רקורסיבית עם `n - 1` במקום `n - 2`: מסירים רק קצה אחד, והקצה השני נשאר.",
              "השוואת איברים סמוכים במקום הראשון מול האחרון."],
    steps=[
        {"type": "numeric", "prompt": "כמה קריאות ל-`isPalindromeRec` מתבצעות בסך הכול (כולל הראשונה) עבור `{1,3,2,2,3,1}` ו-`n = 6`?",
         "answer": 4, "tol": 0,
         "explain": "הערכים של `n` לאורך הקריאות: 6, 4, 2, 0. בכל קריאה מסירים שני איברים, ובקריאה עם $n=0$ מחזירים 1 (ריצה אמיתית: 4)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה: איך ממשיכים אחרי שהאיבר הראשון והאחרון שווים?", "code": True,
         "lines": F2, "blankIndex": j2,
         "options": opts("   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
                         "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 1);",
                         "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr, n - 2);",
                         "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 2, n - 2);"), "correctId": "a",
         "explain": "מזיזים את תחילת המערך ב-1 ומקטינים את `n` ב-2, כך שרק הקטע הפנימי נבדק. `n - 1` משאיר קצה אחד, ובשתי האפשרויות האחרות הקטע שנבדק אינו הפנים (ריצה אמיתית: הן נכשלות על הדוגמאות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `isPalindromeRec`.", "code": True, "lines": L2,
         "explain": "כותרת וסוגריים, מקרה הבסיס לפני הקריאה הרקורסיבית, ולבסוף ההשוואה והקריאה (ריצה אמיתית: כל החלפה של שתי שורות משנה את הפלט)."},
        {"type": "findbug", "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה אינה מזהה פלינדרום. מצאו אותה.", "code": True,
         "lines": B2, "bugIndex": k2,
         "explain": "`==` במקום `!=` מחזיר 0 כשהקצוות שווים. עבור `{1,3,2,3,1}` מתקבל 0 במקום 1 (ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

add(questions, 3, "א",
    rubric=rub(("שימוש במערך עזר `temp` בגודל `n` כמערך מונים, כי הערכים בתחום 0 עד `n-1`", 5),
               ("ספירת מופעי כל ערך בסריקה אחת: `temp[a[i]]++`", 6),
               ("ספירת הערכים שמספר המופעים שלהם אי-זוגי", 6),
               ("התנאי: מחזירים `1` כשיש לכל היותר ערך אי-זוגי אחד (`count < 2`)", 5),
               ("סדר גודל $O(n)$ ושחרור המערך שהוקצה", 3)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק את כל הסידורים האפשריים של המערך: זמן עצום ולא $O(n)$.",
              "לדרוש `count == 0`: מערך באורך אי-זוגי, עם ערך אמצעי אחד, היה נפסל בטעות.",
              "למיין את המערך לפני הספירה: זמן $O(n\\log n)$ ולא $O(n)$ כנדרש."],
    steps=[
        {"type": "numeric", "prompt": "בקריאה עם `a = {1,1,5,0,1,1,0}` ו-`n = 7`: כמה ערכים מופיעים במערך מספר אי-זוגי של פעמים?",
         "answer": 1, "tol": 0,
         "explain": "הערך 1 מופיע 4 פעמים, הערך 0 פעמיים והערך 5 פעם אחת, ולכן רק 5 אי-זוגי (ריצה אמיתית: `count = 1`)."},
        {"type": "choice", "prompt": "מה מחזירה הפונקציה עבור `a = {0,1,2}` ו-`n = 3`?",
         "options": opts("`0`", "`1`"), "correctId": "a",
         "explain": "שלושה ערכים מופיעים פעם אחת כל אחד, כלומר `count = 3`, ואי אפשר לסדר פלינדרום (ריצה אמיתית: 0)."},
        {"type": "fillblank", "prompt": "השלימו את שורת ההחזרה.", "code": True, "lines": F3A, "blankIndex": j3a,
         "options": opts("return count < 2;", "return count == 0;", "return count == 1;", "return count < 3;"), "correctId": "a",
         "explain": "אפס ערכים אי-זוגיים (אורך זוגי) או אחד (אורך אי-זוגי) מאפשרים פלינדרום. `count == 0` פוסל את `{1,1,5,0,1,1,0}`, `count == 1` פוסל את `{0,0}`, ו-`count < 3` מקבל את `{0,1}` בטעות (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `is_permutation_of_palindrom`.", "code": True, "lines": L3A,
         "explain": "הקצאת מערך המונים, ספירה, ספירת הערכים האי-זוגיים, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "שתי סריקות לינאריות, של $n$ איברים ושל מערך העזר: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 3, "ב",
    rubric=rub(("חישוב כמות הערכים שמספר המופעים שלהם אי-זוגי, באותה שיטה של מערך מונים", 4),
               ("אם `count > 1` מחזירים `count - 1`: ערך אי-זוגי אחד יכול להישאר באמצע הפלינדרום", 4),
               ("אחרת מחזירים `0`, ובזמן $O(n)$", 2)),
    rubricSource="ai-verified",
    pitfalls=["להחזיר `count` במקום `count - 1`: ערך אי-זוגי אחד לא דורש תוספת, כי הוא יכול לשבת באמצע.",
              "לא לטפל ב-`count == 0`: אין מה להוסיף, ולכן מחזירים `0`."],
    steps=[
        {"type": "numeric", "prompt": "בקריאה עם `a = {1,1,4,3,1}` ו-`n = 5`: כמה ערכים מופיעים מספר אי-זוגי של פעמים (`count`)?",
         "answer": 3, "tol": 0,
         "explain": "הערך 1 מופיע שלוש פעמים, והערכים 4 ו-3 פעם אחת כל אחד: `count = 3`. מוסיפים `count - 1 = 2` איברים (ריצה אמיתית: 3)."},
        {"type": "numeric", "prompt": "מה מחזירה `bonus` עבור `a = {0,1,2,3}` ו-`n = 4`?", "answer": 3, "tol": 0,
         "explain": "ארבעה ערכים שונים, `count = 4`. אחד נשאר באמצע והשאר דורשים זוג: מחזירים $4-1=3$ (ריצה אמיתית: 3)."},
        {"type": "fillblank", "prompt": "השלימו את הערך המוחזר כש-`count > 1`.", "code": True, "lines": F3B, "blankIndex": j3b,
         "options": opts("count - 1", "count", "count / 2", "count + 1"), "correctId": "a",
         "explain": "כל ערך אי-זוגי חוץ מאחד דורש איבר נוסף שיצמיד אותו לזוג: `count - 1`. השאר מחזירים ערכים שגויים, למשל `count / 2` נותן 2 ולא 3 עבור `{0,1,2,3}` (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `bonus`.", "code": True, "lines": L3B,
         "explain": "הקצאה, ספירה, ספירת הערכים האי-זוגיים, ואז שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "שתי סריקות לינאריות: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 4,
    rubric=rub(("ניצול הכיוונים: `a` עולה ממש ו-`b` יורד ממש, ולכן מספיקה סריקה אחת בשני אינדקסים", 5),
               ("אתחול שני אינדקסים: `ia = 0` ב-`a` ו-`ib = n - 1` ב-`b`", 5),
               ("אם `a[ia] == b[ib]` מחזירים `0`; אם `a[ia] < b[ib]` מקדמים `ia`, אחרת מקטינים את `ib`", 7),
               ("תנאי עצירה `ia < n && ib >= 0`, החזרת `1`, וזמן $O(n)$", 3)),
    rubricSource="ai-verified",
    pitfalls=["שתי לולאות מקוננות על כל הזוגות: $O(n^2)$ ולא עומד בדרישת היעילות.",
              "לקדם את האינדקס הלא נכון: כש-`a[ia]` קטן מ-`b[ib]` מקדמים את `ia`, ולא מקטינים את `ib`.",
              "להתחיל את `ib` ב-0: `b` יורד, ולכן הצד הקטן שלו נמצא בסוף."],
    steps=[
        {"type": "numeric", "prompt": "כמה איטרציות מבצעת לולאת ה-`while` עבור `a = {1,2,3}`, `b = {9,8,7}` ו-`n = 3`?",
         "answer": 3, "tol": 0,
         "explain": "בכל איטרציה `a[ia]` קטן מ-`b[2] = 7`, ולכן `ia` עולה עד 3 והלולאה מסתיימת (ריצה אמיתית: 3, והפונקציה מחזירה 1)."},
        {"type": "choice", "prompt": "מה מחזירה הפונקציה עבור `a = {1,3,5}`, `b = {9,6,3}` ו-`n = 3`?",
         "options": opts("`0`", "`1`"), "correctId": "a",
         "explain": "`1 < 3` מקדם את `ia`, ואז `a[1] == b[2] == 3` ומחזירים 0 (ריצה אמיתית: 0)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי שקובע איזה אינדקס מקדמים.", "code": True, "lines": F4, "blankIndex": j4,
         "options": opts("if (a[ia] < b[ib])", "if (a[ia] > b[ib])", "if (ia < ib)", "if (a[ia] + 1 < b[ib])"), "correctId": "a",
         "explain": "כש-`a[ia]` קטן מ-`b[ib]` הוא קטן מכל איברי `b` שנותרו, ולכן מקדמים את `ia`. שאר התנאים משמיטים התאמות או מחליפים כיוון (ריצה אמיתית: הם נכשלים על מערכים אקראיים)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `check_if_different_elements`.", "code": True, "lines": L4,
         "explain": "הגדרת האינדקסים, הלולאה, ובסוף `return 1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "בכל איטרציה אחד האינדקסים מתקדם, לכל היותר $2n$ איטרציות: $O(n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 5,
    rubric=rub(("מיון אחד המערכים (`b`) עם `merge_sort` בזמן $O(n\\log n)$", 5),
               ("לולאה על כל `a[i]` וחיפוש `d - a[i]` ב-`b`", 6),
               ("שימוש בחיפוש בינארי והחזרת `1` כשהתוצאה אי-שלילית (`>= 0`)", 5),
               ("החזרת `0` אחרי הלולאה, וניתוח זמן $O(n\\log n)$", 4)),
    rubricSource="ai-verified",
    pitfalls=["שתי לולאות מקוננות על כל הזוגות: $O(n^2)$ ולא $O(n\\log n)$.",
              "חיפוש בינארי במערך שלא מוין: צריך למיין את `b` לפני הלולאה.",
              "לחפש את `a[i]` או את `d + a[i]` במקום `d - a[i]`, או לבדוק `> 0` ולפספס את האינדקס 0."],
    steps=[
        {"type": "numeric", "prompt": "אחרי `merge_sort(b, 0, n-1)` עבור `b = {15,11,2,8}`: באיזה אינדקס נמצא הערך `11`?",
         "answer": 2, "tol": 0,
         "explain": "המערך הממוין הוא `{2,8,11,15}`, והערך 11 באינדקס 2 (ריצה אמיתית: 2). עבור `d = 23` ו-`a[0] = 12` זה הערך `d - a[0]` שמחפשים."},
        {"type": "numeric", "prompt": "עבור `a = {12,2,14,2}`, `b = {15,11,2,8}` ו-`d = 5`: כמה חיפושים בינאריים מתבצעים עד שהפונקציה מחזירה?",
         "answer": 4, "tol": 0,
         "explain": "אף ערך `5 - a[i]` אינו ב-`b`, ולכן מתבצעים כל $n=4$ החיפושים והפונקציה מחזירה 0 (ריצה אמיתית: 4)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי של ה-`if`.", "code": True, "lines": F5, "blankIndex": j5,
         "options": opts("binary_search(b, n, d - a[i]) >= 0", "binary_search(b, n, d - a[i]) > 0",
                         "binary_search(b, n, a[i]) >= 0", "binary_search(b, n, d + a[i]) >= 0"), "correctId": "a",
         "explain": "מחפשים את המשלים `d - a[i]` והתוצאה אי-שלילית פירושה שנמצא. `> 0` מפספס את האינדקס 0, ובשני האחרונים מחפשים ערך שגוי (ריצה אמיתית: הם נכשלים על מערכים אקראיים)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `is_sum`.", "code": True, "lines": L5,
         "explain": "קודם מיון `b`, אחר כך לולאת החיפוש, ובסוף `return 0` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n log n)", "O(nlogn)"], "normalize": "complexity",
         "explain": "מיון $O(n\\log n)$ ועוד $n$ חיפושים בינאריים של $O(\\log n)$ כל אחד: $O(n\\log n)$."},
    ],
    stepsSource="ai-verified")

add(questions, 6,
    rubric=rub(("חישוב סכום השורה הראשונה, `sum`, שאליו משווים את כל הסכומים", 4),
               ("בדיקת סכום כל שורה", 4),
               ("בדיקת סכום כל עמודה", 4),
               ("בדיקת שני האלכסונים: הראשי `A[i][i]` והמשני `A[i][N-i-1]`", 5),
               ("החזרת `0` בהפרה הראשונה ו-`1` בסוף, וזמן $O(N^2)$", 3)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק רק שורות ועמודות ולשכוח את האלכסונים (או אלכסון אחד).",
              "לשכוח לאפס את `curr_sum` בין שורה לשורה ובין עמודה לעמודה.",
              "אינדקס האלכסון המשני: `A[i][N-i]` יוצא מהמטריצה, והנכון `A[i][N-i-1]`."],
    steps=[
        {"type": "numeric", "prompt": "עבור המטריצה בדוגמה (השורה הראשונה `12 19 14`): מהו `sum`, סכום השורה הראשונה?",
         "answer": 45, "tol": 0,
         "explain": "$12+19+14=45$, וגם כל שורה, עמודה ואלכסון במטריצה מסתכמים ל-45 (ריצה אמיתית: 45)."},
        {"type": "choice", "prompt": "מה מחזירה `CheckMagic` עבור המטריצה הבאה?\n" + M6,
         "options": opts("`0`", "`1`"), "correctId": "a",
         "explain": "כל שורה וכל עמודה מסתכמת ל-6 והאלכסון הראשי $1+3+2=6$, אבל האלכסון המשני $3+3+3=9$, ולכן מחזירים 0 (ריצה אמיתית: 0)."},
        {"type": "fillblank", "prompt": "השלימו את השורה שמסכמת את האלכסון המשני.", "code": True, "lines": F6, "blankIndex": j6,
         "options": opts("curr_sum += A[i][N-i-1];", "curr_sum += A[i][i];", "curr_sum += A[0][i];", "curr_sum += A[i][N-1];"),
         "correctId": "a",
         "explain": "האלכסון המשני מורכב מהתאים `(i, N-i-1)`. האפשרויות האחרות מסכמות את האלכסון הראשי, את השורה הראשונה או את העמודה האחרונה, ולכן מתקבל 1 במטריצה שלמעלה (ריצה אמיתית)."},
        {"type": "findbug", "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה מקבלת מטריצות שאינן ריבוע קסם. מצאו אותה.", "code": True,
         "lines": B6, "bugIndex": k6,
         "explain": "`A[0][i]` מסכם שוב את השורה הראשונה במקום את האלכסון הראשי, ולכן הסכום תמיד שווה ל-`sum`. במטריצה `{{1,2,3},{3,1,2},{2,3,1}}` (אלכסון ראשי 3, אלכסון משני 6) מתקבל 1 במקום 0 (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)", "accept": ["O(N^2)", "O(N²)"], "normalize": "complexity",
         "explain": "כל שורה, עמודה ואלכסון נסרקים בלולאה של $N$ צעדים לכל היותר, והבדיקות על $N^2$ תאים: $O(N^2)$."},
    ],
    stepsSource="ai-verified")

check_sums(questions)

# held items carry no solution/official fields
for q in questions:
    if q.get("hold"):
        for k in ("solution", "solutionSource", "official", "confidence"):
            q.pop(k, None)

exam = {
    "examCode": "19A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
    "year": 2019,
    "examDate": "19.2.2019",
    "sourceFile": "19A-A exam pp.1-3",
    "solutionFile": "19A-A official solution pp.1-5",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
