# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-B.json -- intro-cs, semester A 2025, moed B (4.03.2025).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25A-B.py

Source: a graded student scan (29 pages). Question text transcribed from the printed pages; the only answers are the
handwritten ones, used as solutionSource "student-solution", anonymized, TEXT ONLY. No page of the scan is cropped or
shipped (p.1 grade report and p.2 cover carry a student ID). The grade report gives 26/26/26/22 out of 26/26/26/27.
Page map: Q1 p.4 (crossed-out attempt) + p.6 (final, graded 26); Q2 p.8; Q3 p.12; Q4 p.16 + p.18 (graded 22/27).

Transcription notes
- Q1/Q2/Q3: student code transcribed as written (Q1 final version on p.6, the crossed-out attempt on p.4 is omitted;
  Q3 omits one crossed-out line). Compile-and-run harness tools/verify/25A-B/all.c: Q1 both examples (0 and 2) and
  20000 random arrays match a reference; Q3 20000 random cases match a reference.
- Q2: the answer relies on library binary_search "returning 1 if found, else 0" (handwritten comment, paraphrased in the
  solution text). The sitting does not define that function's return value; graded 26/26, kept at confidence "med".
  Harness uses stand-in sort/search with that assumed semantics: example output matches.
- Q3 example as printed is inconsistent: "glue" needs a letter u, which "intelligence" lacks, yet the example says 1.
  The student answer was graded 26 regardless. Printed text kept verbatim.
- Q4: the only source is the student answer, graded 22/27. Its third loop in is_sub_square runs `i<c` instead of
  `i<r`; compiled, it returns 6 on the printed example (expected 4) and differs from a reference on 1106/2000 random 6x6.
  The student code is NOT shipped. The solver wrote a solution (solutionSource "solved", official false), pending the
  refuter: tools/verify/25A-B/solve_q4.c (clang -Wall -Wextra, no warnings): printed example -> 4; 20000 random
  6x6 and 20000 random 9x9 (-DN=9) 0/1 matrices vs an independent bottom-right-corner reference: 0 mismatches.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-B.json"


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


SOL1 = r"""int check_parity(int* arr, int size)
{
   if(size==0)
      return 0;
   if((arr[size-1]+size)%2==0)
      return 1+check_parity(arr,size-1);
   return check_parity(arr,size-1);
}"""

SOL2 = r"""void search_in_array(int* arr1, int* arr2, int size)
{
   int* temp=(int*)malloc(size*sizeof(int));
   assert(temp);
   for(int i=0;i<size;i++)
      temp[i]=arr1[i];
   merge_sort(temp,0,size-1);
   for(int i=0;i<size;i++)
      arr2[i]=binary_search(temp,size,arr2[i]);
   free(temp);
}"""

SOL3 = r"""int word_in_text(char* text, char* word)
{
   int count[26]={0};
   while(*text){
      count[*text-'a']++;
      text++;
   }
   while(*word){
      if(--count[*word-'a']<0)
         return 0;
      word++;
   }
   return 1;
}"""

CTX4 = r"""int image[6][6] = {
   {0, 0, 1, 0, 1, 1},
   {1, 1, 1, 1, 1, 1},
   {1, 1, 1, 1, 1, 0},
   {1, 1, 1, 1, 1, 1},
   {1, 1, 0, 1, 1, 1},
   {1, 1, 1, 1, 1, 1}
};"""

SOL4 = r"""int number_squares(int matrix[N][N])
{
   int i, j, a, b, all_ones, count = 0;
   for (i = 0; i + 2 < N; i++)            // (i, j) = top-left corner of a 3x3 square
      for (j = 0; j + 2 < N; j++)
      {
         all_ones = 1;
         for (a = i; a < i + 3; a++)      // fixed 9 cells per square
            for (b = j; b < j + 3; b++)
               if (matrix[a][b] == 0)
                  all_ones = 0;
         count += all_ones;
      }
   return count;
}"""

STU = "**פתרון סטודנט** (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:\n"


def S(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "student-solution", "official": False, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    S(1, "code", "recursion",
      "כתבו פונקציה **רקורסיבית** יעילה שמקבלת מערך של מספרים שלמים `arr`, ואת גודלו $size \\ge 0$. "
      "הפונקציה בודקת שהמערך מקיים את התכונה הבאה - בכל המקומות הזוגיים מופיע מספר זוגי. ובכל המקומות האי-זוגיים מופיע מספר אי-זוגי. "
      "הפונקציה מחזירה את **מספר** האיברים שלא מקיימים את התכונה הזו.\n"
      "לדוגמא:\n"
      "עבור המערך `8, 7, 22, -5, 14, 3, 2` (מערך עם 7 ערכים המקום הראשון נחשב מקום 0). הפונקציה מחזירה `0`.\n"
      "עבור המערך `8, 8, 6, 5, 51, 7` (מערך עם 6 ערכים המקום הראשון נחשב מקום 0), במקום שהאינדקס שלו הוא 1 מופיע מספר זוגי `8` "
      "ובמקום שהאינדקס שלו הוא 4 מופיע מספר אי-זוגי `51` - הפונקציה מחזירה `2`.\n"
      "החתימה של הפונקציה:\n"
      "`int check_parity(int *arr, int size)`",
      STU + code_block(SOL1) + "\nבודקים את האיבר האחרון (אינדקס `size-1`): הוא מפר את התכונה כאשר סכום הערך והאינדקס אי-זוגי, "
      "כלומר כאשר `arr[size-1]+size` זוגי. אם יש הפרה מוסיפים `1`, ובכל מקרה ממשיכים רקורסיבית עם `size-1`.",
      points=26),

    S(2, "code", "binary_search",
      "כתבו פונקציה יעילה שמקבלת שני מערכים של מספרים שלמים `arr1`,`arr2`, ששניהם בגודל `size`.\n"
      "הערכים בכל מערך בנפרד שונים זה מזה אך אינם מסודרים בסדר מסוים.\n"
      "על הפונקציה לשנות את המערך `arr2` כך שבכל אינדקס יופיע הערך `1` או `0`. הערך `1` יופיע במקום `i` אם הערך המקורי `arr2[i]` נמצא ב-`arr1`, "
      "אחרת יופיע `0`. אין לשנות את המערך `arr1`, אך ניתן להשתמש במערך עזר.\n"
      "לדוגמא:\n"
      "בקלט:\n"
      "`arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23`\n"
      "`arr2: 99, 2, 3, 4, -5, 6, 7, 1, 9`\n"
      "לאחר ביצוע הפונקציה:\n"
      "`arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23` (לא השתנה)\n"
      "`arr2: 0, 1, 1, 0, 1, 0, 0, 0, 1` (הערכים `2,3,-5,9` נמצאים ב-`arr1`, שאר הערכים לא נמצאים).\n"
      "יש לכתוב פונקציה שחתימתה היא:\n"
      "`void search_in_array(int* arr1, int* arr2, int size);`\n"
      "על הפונקציה לרוץ בסדר גודל של $size\\cdot\\log(size)$",
      "**הנחה: הפונקציה binary_search מחזירה 1 אם האיבר נמצא ו-0 אחרת (החתימה בלבד ניתנה במבחן)**\n" + STU + code_block(SOL2) + "\nהסטודנט מוסיף הערה בכתב יד (הועתקה בקירוב, הכתב אינו ברור לחלוטין): "
      "`binary_search` מחזירה `1` אם האיבר נמצא, אחרת `0`, וזו הנחת הפתרון. מעתיקים את `arr1` למערך עזר, ממיינים אותו (מיון מיזוג) "
      "ומחפשים בינארית כל איבר של `arr2`: $O(size\\log size)$.",
      points=26, confidence="med"),

    S(3, "code", "strings",
      "כתבו פונקציה יעילה שמקבלת שתי מחרוזות `text` ו-`word` המכילות רק אותיות אנגלית קטנות. "
      "הפונקציה בודקת האם מהאותיות של `text` אפשר להרכיב מילה `word`. אם ההרכבה אפשרית הפונקציה תחזיר `1`, אחרת - על הפונקציה להחזיר `0`.\n"
      "לדוגמא: אם `text=\"intelligence\"`\n"
      "אז עבור המילים: `glue, glee, client, electing` על הפונקציה להחזיר `1`,\n"
      "ועבור המילה `inciting` על הפונקציה להחזיר `0`, כי אות `i` מופיעה ב-`text` רק **פעמיים**.\n"
      "אין לשנות את המחרוזות אך ניתן להשתמש במערך עזר.\n"
      "יש לכתוב פונקציה שחתימתה היא:\n"
      "`int word_in_text(char* text, char* word)`\n"
      "על הפונקציה לרוץ בסדר גודל של $n$ כאשר $n$ זה אורך של המחרוזת הארוכה בין השתיים.",
      STU + code_block(SOL3) + "\nסופרים את מופעי כל אות ב-`text` במערך של 26 מונים, ואז מורידים מונה לכל אות של `word`; "
      "אם מונה יורד מתחת ל-0 חסרה אות ומחזירים `0`. שתי סריקות לינאריות.",
      points=26),

    {"num": 4, "kind": "code", "topic": "matrices", "points": 27, "contextId": "c4",
     "question":
      "נתון מערך ריבועי דו-ממדי בגודל $N\\times N$, המכיל רק את הערכים `0` ו-`1` (מטריצה בינארית).\n"
      "יש לכתוב פונקציה יעילה שמקבלת את המערך ומחזירה את מספר תת-המערכים בגודל $3\\times 3$ שבהם כל הערכים הם `1`.\n"
      "לדוגמא:\n"
      "עבור המערך הבא (ראו למעלה) הפונקציה תחזיר `4`.\n"
      "חתימת הפונקציה היא:\n"
      "`int number_squares (int matrix[N][N]);`\n"
      "על הפונקציה לרוץ בסדר גודל של $N*N$",
      "solution":
      "**פתרון הפותר** (המקור היחיד הוא פתרון סטודנט שקיבל 22/27 ושגוי: הלולאה השלישית שלו רצה עד `c` במקום עד `r`, "
      "ולכן הוא לא מוצג כאן):\n" + code_block(SOL4) + "\n"
      "עוברים על כל פינה שמאלית-עליונה `(i, j)` של ריבוע $3\\times 3$ שנכנס כולו במטריצה (`i+2<N` וגם `j+2<N`), "
      "ובודקים את 9 התאים שלו. אם כולם `1` מוסיפים 1 למונה.\n"
      "יש פחות מ-$N^2$ פינות, ולכל אחת מספר קבוע (9) של בדיקות, ולכן הזמן $O(N^2)$. בדוגמה המודפסת מוחזר `4`.",
      "solutionSource": "solved", "official": False, "confidence": "high"},
]

# ---- steps / rubric / pitfalls (ai-draft); every expected value is re-proved by tools/verify/25A-B/steps_check.py ----
import re
from steps_helpers import opts, rub, blank, bug, add, check_sums


def lines_of(src):
    out = []
    for ln in src.strip("\n").split("\n"):
        ln = re.sub(r"\s*//.*$", "", ln)
        if ln.strip():
            out.append(ln)
    return out


L1 = ["int check_parity(int* arr, int size)", "{",
      "   if (size == 0) return 0;",
      "   if ((arr[size - 1] + size) % 2 == 0) return 1 + check_parity(arr, size - 1);",
      "   return check_parity(arr, size - 1);", "}"]
F1 = list(L1)
F1[3] = "   if (___) return 1 + check_parity(arr, size - 1);"
j1 = 3

L2 = ["void search_in_array(int* arr1, int* arr2, int size)", "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i < size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i < size; i++) arr2[i] = binary_search(temp, size, arr2[i]); free(temp);", "}"]
F2 = ["void search_in_array(int* arr1, int* arr2, int size)", "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i < size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i < size; i++)", "      ___", "   free(temp);", "}"]
j2 = 6

L3 = ["int word_in_text(char* text, char* word)", "{",
      "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word) { if (--count[*word - 'a'] < 0) return 0; word++; }",
      "   return 1;", "}"]
F3 = ["int word_in_text(char* text, char* word)", "{", "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word)", "   {", "      if (___) return 0;", "      word++;", "   }", "   return 1;", "}"]
j3 = 6

S4 = lines_of(SOL4)
f4 = [k for k, ln in enumerate(S4) if ln.strip() == "for (i = 0; i + 2 < N; i++)"]
assert len(f4) == 1
F4 = list(S4)
F4[f4[0]] = "   ___"
j4 = f4[0]
O4 = ["all_ones = 1;",
      "for (a = i; a < i + 3; a++) for (b = j; b < j + 3; b++) if (matrix[a][b] == 0) all_ones = 0;",
      "count += all_ones;"]

add(questions, 1,
    rubric=rub(("מקרה בסיס: `size == 0` מחזיר `0`", 5),
               ("בדיקת האיבר האחרון: הפרה כאשר `(arr[size-1] + size)` זוגי, כלומר הזוגיות של הערך שונה מזו של האינדקס", 7),
               ("הוספת `1` על כל הפרה", 6),
               ("המשך רקורסיבי עם `size - 1` בשני המקרים", 6),
               ("רקורסיה בלבד ללא לולאות, והחזרת המספר המצטבר", 2)),
    rubricSource="ai-draft",
    pitfalls=["לבדוק רק את הזוגיות של הערך ולא את הקשר לאינדקס.",
              "לבלבל בין `size` לאינדקס האחרון `size-1`: הסכום `arr[size-1] + size` זוגי דווקא כשיש הפרה.",
              "להחזיר `0` או `1` במקום לצבור את מספר ההפרות."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `check_parity` עבור `arr = {3,4}` ו-`size = 2`?", "answer": 2, "tol": 0,
         "explain": "באינדקס 0 מופיע 3 (אי-זוגי במקום זוגי) ובאינדקס 1 מופיע 4 (זוגי במקום אי-זוגי): שתי הפרות (ריצה אמיתית: 2)."},
        {"type": "numeric", "prompt": "כמה קריאות ל-`check_parity` מתבצעות בסך הכול (כולל הראשונה והבסיס) עבור `arr = {8,8,6,5,51,7}` ו-`size = 6`?",
         "answer": 7, "tol": 0,
         "explain": "הערכים של `size` לאורך הקריאות: 6, 5, 4, 3, 2, 1, 0: שבע קריאות. סך ההפרות הוא 2 (ריצה אמיתית: 7)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי שמזהה הפרה באיבר האחרון.", "code": True, "lines": F1, "blankIndex": j1,
         "options": opts("(arr[size - 1] + size) % 2 == 0", "(arr[size - 1] + size) % 2 == 1", "arr[size - 1] % 2 == 0",
                         "(arr[size - 1] + size - 1) % 2 == 0"), "correctId": "a",
         "explain": "האינדקס של האיבר האחרון הוא `size - 1`, והוא תקין כשהערך והאינדקס בעלי אותה זוגיות. לכן הפרה פירושה ש-`arr[size-1] + size` זוגי. האחרות סופרות את התקינים או את הזוגיים בלבד (ריצה אמיתית: כולן נכשלות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `check_parity`.", "code": True, "lines": L1,
         "explain": "בסיס, הספירה כשיש הפרה, ובסוף ההמשך כשאין (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
    ],
    stepsSource="ai-draft")

add(questions, 2,
    rubric=rub(("העתקת `arr1` למערך עזר, כדי לא לשנות את `arr1`", 5),
               ("מיון מערך העזר עם `merge_sort`", 6),
               ("חיפוש בינארי של כל `arr2[i]` במערך העזר הממוין", 7),
               ("כתיבת תוצאת החיפוש (`1` או `0`) ל-`arr2[i]`", 4),
               ("שחרור מערך העזר וזמן $O(size\\log size)$", 4)),
    rubricSource="ai-draft",
    pitfalls=["חיפוש לינארי של כל איבר של `arr2` ב-`arr1`: $O(size^2)$ ולא $O(size\\log size)$.",
              "למיין את `arr1` עצמו: השאלה אוסרת לשנות אותו, ולכן ממיינים העתק.",
              "לחפש בינארית במערך שלא מוין."],
    steps=[
        {"type": "choice", "prompt": "מה הפתרון עושה עם `arr1` לפני החיפושים?",
         "options": opts("מעתיק אותו למערך עזר וממיין את ההעתק", "ממיין את `arr1` עצמו", "ממיין את `arr2` ומחפש בו את ערכי `arr1`",
                         "מחפש בו בינארית כמות שהוא, בלי למיין"), "correctId": "a",
         "explain": "השאלה אוסרת לשנות את `arr1`, ולכן ממיינים העתק (ריצה אמיתית: מיון `arr1` עצמו משנה אותו, וחיפוש בינארי בלי מיון נותן תשובות שגויות)."},
        {"type": "numeric", "prompt": "בדוגמה של השאלה: מהו סכום הערכים ב-`arr2` אחרי הקריאה?", "answer": 4, "tol": 0,
         "explain": "ארבעה ערכים, `2, 3, -5, 9`, נמצאים ב-`arr1`, ולכן במערך `arr2` ארבעה 1 וחמישה 0 (ריצה אמיתית: 4). הנחת הפתרון: `binary_search` מחזירה 1 אם נמצא ו-0 אחרת."},
        {"type": "fillblank", "prompt": "השלימו את גוף הלולאה האחרונה.", "code": True, "lines": F2, "blankIndex": j2,
         "options": opts("arr2[i] = binary_search(temp, size, arr2[i]);", "arr2[i] = binary_search(arr1, size, arr2[i]);",
                         "arr2[i] = binary_search(temp, size, i);", "arr2[i] = 1 - binary_search(temp, size, arr2[i]);"),
         "correctId": "a",
         "explain": "מחפשים את הערך `arr2[i]` במערך העזר הממוין. חיפוש ב-`arr1` שלא ממוין שגוי, חיפוש של האינדקס שגוי, והחסרה מ-1 הופכת את התשובה (ריצה אמיתית: כולן נכשלות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `search_in_array`.", "code": True, "lines": L2,
         "explain": "הקצאה, העתקה, מיון, חיפושים עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
         "accept": ["O(size log size)", "O(size log(size))", "O(n log n)", "O(nlogn)"], "normalize": "complexity",
         "explain": "מיון $O(size\\log size)$ ועוד `size` חיפושים של $O(\\log size)$ כל אחד: $O(size\\log size)$."},
    ],
    stepsSource="ai-draft")

add(questions, 3,
    rubric=rub(("מערך מונים `count` בגודל 26, מאופס", 4),
               ("ספירת מופעי כל אות של `text` בסריקה אחת", 7),
               ("הקטנת המונה של כל אות של `word`", 7),
               ("החזרת `0` כשמונה יורד מתחת ל-0, כלומר חסרה אות", 5),
               ("החזרת `1` בסוף, וזמן $O(n)$", 3)),
    rubricSource="ai-draft",
    pitfalls=["לבדוק רק שכל אות של `word` מופיעה ב-`text`, בלי לספור: `inciting` דורשת שלוש `i`, ו-`text` מכיל שתיים.",
              "לחפש לכל אות של `word` בתוך `text`: $O(n^2)$ ולא $O(n)$.",
              "לא לאפס את מערך המונים: הוא חייב להתחיל באפסים."],
    steps=[
        {"type": "numeric", "prompt": "אחרי הלולאה הראשונה עבור `text = \"intelligence\"`: מהו המונה של האות `e`?", "answer": 3, "tol": 0,
         "explain": "האות `e` מופיעה ב-`intelligence` שלוש פעמים (ריצה אמיתית: 3)."},
        {"type": "choice", "prompt": "עבור `word = \"inciting\"`: על איזו אות מונה יורד מתחת ל-0 ו-`word_in_text` מחזירה 0?",
         "options": opts("`i`", "`n`", "`c`", "`g`"), "correctId": "a",
         "explain": "האות `i` מופיעה ב-`text` פעמיים ובמילה שלוש פעמים, ובמופע השלישי המונה הופך ל-1- (ריצה אמיתית: `i`)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי שבודק אם חסרה אות.", "code": True, "lines": F3, "blankIndex": j3,
         "options": opts("--count[*word - 'a'] < 0", "count[*word - 'a']-- < 0", "--count[*word - 'a'] <= 0", "count[*word - 'a'] < 0"),
         "correctId": "a",
         "explain": "מקטינים קודם ואז בודקים אם התוצאה שלילית. הקטנה אחרי הבדיקה מאחרת בצעד אחד, `<= 0` פוסל אות אחרונה שקיימת, ובלי הקטנה המונה לא משתנה (ריצה אמיתית: כולן נכשלות)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `word_in_text`.", "code": True, "lines": L3,
         "explain": "מערך מונים, ספירת `text`, הקטנה לפי `word`, והחזרת `1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "שתי סריקות לינאריות ומערך בגודל קבוע: $O(n)$."},
    ],
    stepsSource="ai-draft")

add(questions, 4,
    rubric=rub(("מעבר על פינות שמאליות-עליונות אפשריות בלבד: `i + 2 < N` ו-`j + 2 < N`", 6),
               ("בדיקת תשעת תאי הריבוע $3\\times 3$ מהפינה `(i, j)`", 7),
               ("דגל `all_ones` שמאותחל ל-1 לפני כל ריבוע ומתאפס כשנמצא `0`", 6),
               ("הוספת הדגל למונה והחזרתו", 3),
               ("מספר קבוע של בדיקות לכל פינה, כלומר $O(N^2)$", 5)),
    rubricSource="ai-draft",
    pitfalls=["לרוץ על כל התאים כפינות (`i < N`): הבדיקה יוצאת מגבולות המטריצה.",
              "לשכוח לאפס את `all_ones` לפני כל ריבוע, כך שריבוע פגום אחד פוסל את כל הבאים אחריו.",
              "לבדוק רק את הפינה או את התא האמצעי ולא את כל תשעת התאים."],
    steps=[
        {"type": "numeric", "prompt": "כמה פינות `(i, j)` של ריבוע $3\\times 3$ בודקת הפונקציה במטריצה `image` מהדוגמה ($N=6$)?", "answer": 16, "tol": 0,
         "explain": "`i` ו-`j` רצים כל אחד על 0 עד 3, כלומר $4\\cdot4=16$ פינות (ריצה אמיתית: 16)."},
        {"type": "numeric", "prompt": "מה מחזירה `number_squares` עבור `image`?", "answer": 4, "tol": 0,
         "explain": "מתוך 16 הפינות, ארבעה ריבועים $3\\times 3$ מכילים רק 1 (ריצה אמיתית: 4)."},
        {"type": "fillblank", "prompt": "השלימו את כותרת הלולאה החיצונית.", "code": True, "lines": F4, "blankIndex": j4,
         "options": opts("for (i = 0; i + 2 < N; i++)", "for (i = 0; i + 3 < N; i++)", "for (i = 0; i < N / 3; i++)",
                         "for (i = 0; i + 4 < N; i++)"), "correctId": "a",
         "explain": "ריבוע שפינתו בשורה `i` תופס את השורות `i` עד `i + 2`, ולכן `i + 2 < N`. האחרות מפספסות שורות של פינות (ריצה אמיתית: כולן סופרות פחות ריבועים)."},
        {"type": "order", "prompt": "סדרו את שלוש הפקודות שבגוף הלולאה שבודקת ריבוע $3\\times 3$ אחד (הפינה היא `(i, j)`).", "code": True, "lines": O4,
         "explain": "קודם מאתחלים את הדגל, אחר כך בודקים את תשעת התאים, ורק אז מוסיפים למונה (ריצה אמיתית: כל החלפה משנה את הפלט)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)", "accept": ["O(N^2)", "O(N*N)", "O(N²)"], "normalize": "complexity",
         "explain": "פחות מ-$N^2$ פינות ולכל אחת 9 בדיקות: $O(N^2)$."},
    ],
    stepsSource="ai-draft")

check_sums(questions)

exam = {
    "examCode": "25A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
    "year": 2025,
    "examDate": "4.03.2025",
    "sourceFile": "25A-B exam pp.1-29 (scan)",
    "solutionFile": "student-solution-1",
    "contexts": {
        "c4": {"kind": "code", "title": "שאלה 4: מערך לדוגמה", "code": CTX4},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
