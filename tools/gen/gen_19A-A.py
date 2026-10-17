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
