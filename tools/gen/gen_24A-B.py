# -*- coding: utf-8 -*-
"""Generator for tools/raw/24A-B.json -- intro-cs, semester A 2024, moed B (8.04.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24A-B.py

Source: exam pp.1-14 (cover, 4 questions with answer boxes at pp.2/4/6/8, allowed-functions list p.10, scratch pages).
4 questions (27/26/26/26), cap 105, no sub-parts. There is NO answer source for this sitting
(no official solution, no student paper). The solver wrote every solution (solutionSource "solved",
official false), pending the refuter.

Solver verification (clang -Wall -Wextra, no warnings; harnesses tools/verify/24A-B/solve_q*.c, the code between
SOLUTION BEGIN/END is the shipped code verbatim; merge_sort(int*,int,int) is the course black box from p.10,
a real merge sort stands in):
- Q1 valueNotInArray: both printed examples ({2,4,6}/3 and {0}/1); 20000 random arrays (n 0..11, values 0..n)
  vs a brute-force reference: 0 mismatches.
- Q2 find_two_digits: all 6 printed examples (12,12,22,0,12,14); 20000 random digit strings vs brute force over
  all 100 pairs: 0 mismatches. A string shorter than 2 digits returns 0 (case not specified by the question).
- Q3 is_zero: both printed examples (1, 0); 20000 random sorted pos/neg pairs vs O(n*m) brute force: 0 mismatches.
- Q4 number_returns: printed example 6; 20000 random arrays vs O(n^2) brute force: 0 mismatches.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24A-B.json"

SOLVED = "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n"


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


def Q(num, topic, question, points, solution):
    return {"num": num, "kind": "code", "topic": topic, "question": question, "points": points,
            "solution": solution, "solutionSource": "solved", "official": False, "confidence": "high"}


SOL1 = r"""int *valueNotInArray(int *arr, int n, int *newSize)
{
   int i, k = 0, count = 0;
   int *seen = (int*)calloc(n + 1, sizeof(int));
   int *res;
   for (i = 0; i < n; i++)
      seen[arr[i]] = 1;
   for (i = 0; i <= n; i++)
      if (!seen[i])
         count++;
   res = (int*)malloc(count * sizeof(int));
   for (i = 0; i <= n; i++)
      if (!seen[i])
         res[k++] = i;
   free(seen);
   *newSize = count;
   return res;
}"""

SOL2 = r"""int find_two_digits(char *number)
{
   int count[100] = {0};
   int i, best = 0;
   for (i = 0; number[i] != '\0' && number[i + 1] != '\0'; i++)
      count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;
   for (i = 1; i < 100; i++)
      if (count[i] > count[best])
         best = i;
   return best;
}"""

SOL3 = r"""int is_zero(int* pos, int n, int* neg, int m)
{
   if (n == 0 || m == 0)
      return 0;
   if (pos[0] + neg[m - 1] == 0)
      return 1;
   if (pos[0] < -neg[m - 1])
      return is_zero(pos + 1, n - 1, neg, m);
   return is_zero(pos, n, neg, m - 1);
}"""

SOL4 = r"""int number_returns(int* arr, int size)
{
   int i, run = 1, best = 1;
   if (size == 0)
      return 0;
   merge_sort(arr, 0, size - 1);
   for (i = 1; i < size; i++)
   {
      if (arr[i] == arr[i - 1])
         run++;
      else
         run = 1;
      if (run > best)
         best = run;
   }
   return best;
}"""

questions = [
    Q(1, "pointers_memory",
      "כתבו פונקציה יעילה המקבלת מערך של מספרים שלמים `arr` וגודלו `n`.\n"
      "ידוע שטווח הערכים של המספרים במערך הוא בין `0` ו-`n`.\n"
      "הפונקציה תיצור ותחזיר מערך של המספרים בטווח בין `0` ל-`n` **שלא** הופיעו במערך `arr`, ותעביר את גודלו.\n"
      "לדוגמא: עבור המערך `{0, 1, 1, 0, 3, 5}` ו-`n = 6` הפונקציה תחזיר את המערך `{2, 4, 6}` ותעביר `3`,\n"
      "עבור המערך `{}` ו-`n = 0` הפונקציה תחזיר את המערך `{0}` ותעביר `1`.\n"
      "ניתן להשתמש במערך עזר.\n"
      "חתימת הפונקציה היא:\n"
      "`int *valueNotInArray(int *arr, int n, int *newSize);`",
      27,
      SOLVED + code_block(SOL1) + "\n"
      "מערך עזר `seen` בגודל `n+1` מסמן אילו ערכים בין `0` ל-`n` הופיעו ב-`arr`. סריקה שנייה סופרת כמה ערכים לא סומנו, "
      "מקצים מערך בדיוק בגודל הזה, וסריקה שלישית ממלאת אותו בסדר עולה. הגודל מועבר דרך `*newSize`.\n"
      "ב-`n` איברים יש לכל היותר `n` ערכים שונים מתוך `n+1` הערכים האפשריים, ולכן תמיד חסר לפחות ערך אחד "
      "והמערך המוחזר אינו ריק.\n"
      "שלוש סריקות לינאריות: $O(n)$."),
    Q(2, "strings",
      "אתם מקבלים מחרוזת שמייצגת מספר ארוך במיוחד, למשל `\"12345678910111213\"`\n"
      "עליכם למצוא את המספר הדו ספרתי שמופיע מספר הפעמים הגדול ביותר במחרוזת.\n"
      "אם יש יותר ממספר אחד כזה עליכם להחזיר את המספר ה**קטן** ביותר.\n"
      "מספר דו ספרתי מוגדר כשתי ספרות אחת אחרי השנייה, ויכול להתחיל ב-0 מקדים, "
      "כך ש-`\"00\"` וגם `\"01\"` נחשבים למספר דו ספרתי. (וכנ\"ל כל המספרים עד 99)\n"
      "לדוגמא, עבור המחרוזת `\"12121212121\"` יוחזר המספר הדו ספרתי `12` שמופיע 5 פעמים.\n"
      "עבור המחרוזת `\"21212121212\"` יוחזר המספר `12`, כי אמנם גם `21` מופיע 5 פעמים אבל גם `12` מופיע 5 פעמים, ו-`12` קטן מ-`21`.\n"
      "דוגמאות נוספות: עבור `\"222211\"` יוחזר `22` שמופיע 3 פעמים,\n"
      "עבור `\"0001\"` יוחזר `0` (כיוון שגם `00` נחשב דו ספרתי),\n"
      "עבור `\"1234\"` יוחזר `12`,\n"
      "עבור `\"426144\"` יוחזר `14`.\n"
      "חתימת הפונקציה היא:\n"
      "`int find_two_digits (char * number);`\n"
      "על הפונקציה לרוץ בסדר גודל של $n$ כאשר $n$ הוא מספר הספרות במחרוזת.",
      26,
      SOLVED + code_block(SOL2) + "\n"
      "מערך מונים `count` בגודל 100: כל זוג ספרות סמוכות הוא המספר `10*d1+d2` (כולל אפס מקדים, כך ש-`\"01\"` נספר כ-1). "
      "סריקה אחת של המחרוזת ממלאת את המונים. אחר כך עוברים על 100 המונים בסדר עולה ומחליפים את המועמד רק כשהמונה "
      "גדול **ממש**, כך שבמקרה של שוויון נשאר המספר הקטן.\n"
      "זמן $O(n)$: סריקה אחת של המחרוזת, והמעבר על 100 המונים הוא מספר קבוע של צעדים.\n"
      "(מחרוזת עם פחות משתי ספרות מחזירה `0`; השאלה לא מגדירה את המקרה הזה.)"),
    Q(3, "recursion",
      "כתבו פונקציה **רקורסיבית** `int is_zero(int* pos, int n, int* neg, int m)` "
      "המקבלת שני מערכים ממוינים בסדר עולה `pos` ו-`neg` וגודלם `n` ו-`m`.\n"
      "ידוע כי כל ערכי המערך `pos` גדולים מ-0 וכל ערכי המערך `neg` קטנים מ-0.\n"
      "על הפונקציה לבדוק האם קיימים שני ערכים `pos[i]` ו-`neg[j]` כך ש-`pos[i]+neg[j] == 0`.\n"
      "במידה וקיימים הפונקציה תחזיר `1`, אחרת תחזיר `0`.\n"
      "לדוגמא: עבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -11, -3, -2}` הפונקציה תחזיר `1`.\n"
      "עבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -12, -3, -2}` הפונקציה תחזיר `0`.",
      26,
      SOLVED + code_block(SOL3) + "\n"
      "משווים את האיבר הקטן ב-`pos` (`pos[0]`) עם הערך המוחלט הקטן ב-`neg`, שהוא `-neg[m-1]` "
      "(האיבר האחרון, כי `neg` ממוין בסדר עולה).\n"
      "אם הסכום `0` מחזירים `1`. אם `pos[0]` קטן יותר, הוא לא יתאפס עם אף איבר של `neg` (כל השאר בערך מוחלט גדול יותר), "
      "ולכן ממשיכים בלעדיו (`pos + 1`, `n - 1`). אחרת `neg[m-1]` לא יתאפס עם אף איבר של `pos`, וממשיכים בלעדיו (`m - 1`).\n"
      "מקרה בסיס: אחד המערכים ריק, מחזירים `0`. בכל קריאה אחד המערכים קטן באחד, לכן יש לכל היותר $n+m$ קריאות: $O(n+m)$."),
    Q(4, "sorting_merge",
      "כתוב פונקציה **יעילה** שמקבלת מערך וגודלו, ומחזירה את מספר החזרות הגדול ביותר של איבר כלשהו במערך.\n"
      "לדוגמא:\n"
      "עבור המערך הבא:\n"
      "`1, 2, -3005, 2, 3, 1, -1000, 3, 7, -11, 2, 15, 2, 3, 90, 7, 2, 2, 1000`\n"
      "הפונקציה תחזיר `6` (המספר `2` הוא המספר הכי שכיח שמופיע 6 פעמים).\n"
      "ניתן לשנות את המערך.\n"
      "חתימת הפונקציה היא:\n"
      "`int number_returns(int* arr, int size);`\n"
      "על הפונקציה לרוץ בסדר גודל $n\\log n$.",
      26,
      SOLVED + code_block(SOL4) + "\n"
      "ממיינים את המערך (מותר לשנות אותו) עם `merge_sort` בזמן $O(n\\log n)$. אחרי המיון כל המופעים של אותו ערך צמודים, "
      "ולכן סריקה אחת סופרת את אורך כל רצף של ערכים שווים ושומרת את הארוך ביותר, בזמן $O(n)$.\n"
      "סה\"כ $O(n\\log n)$. במערך ריק מוחזר `0`."),
]

exam = {
    "examCode": "24A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
    "year": 2024,
    "examDate": "8.04.2024",
    "sourceFile": "24A-B exam pp.1-14",
    "solutionFile": "none (solutions written by the solver)",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
