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
