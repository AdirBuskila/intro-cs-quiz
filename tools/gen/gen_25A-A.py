# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-A.json -- intro-cs, semester A 2025, moed A (5.02.2025), flagship sitting.
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_25A-A.py

Source: sitting 25A-A, pp.1-8 (exam text + official answers typed into the answer boxes on pp.2,3,4,6;
p.7 = allowed-functions list, p.8 = scratch page). 4 questions (26/26/26/27), cap 105, no sub-parts.

Transcription notes
- Q1 example: the PDF line is RTL, so the array prints reversed. In C order it is {5,-4,-2,8,10,-3}
  (prefix 5-4-2+8=7 at index 3, suffix 10-3=7); second example {5,-4,-2,8,10,-2} -> -1.
- Official code is transcribed verbatim.

Compile-and-run (clang, harness files in tools/verify/25A-A/, each compiled with -Wall -Wextra, no warnings):
- Q1 index_half: both examples match (3 and -1); 20000 random arrays vs a brute-force reference: 0 mismatches. OK.
- Q2 search_in_array: COMPILES BUT IS WRONG. On the exam's own sample array every positive key is missed
  (keys 2, 5, 12, 23 return -1; negatives all found). Cause: the else branch sets right=mid-1 whenever the key is
  not smaller than a negative arr[mid] -- but a positive key must go RIGHT of the negative block, and for
  arr[mid]>=0 with key>arr[mid] it must also go right. Not fixed here: held + ASK_ADIR.
  (The question restricts k to negative; the code is correct for negative keys, so the exam may only
  have intended those. The statement still says "return the position if found", over the whole array.)
- Q3 sum_chars: "street"/'t' -> 2, empty -> 0, "banana"/'a' -> 3, no match -> 0. OK.
- Q4 countSymmetricViolations (N=5): perfect -> 0, notPerfect -> 3 (matches the 3 violations stated on p.5).
  Note: the corner cell [4][4] vs [0][4]/[4][0] is counted once by the row loop and once by the column loop,
  which is what produces the stated 3.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_lines(src):
    """Rich-text rendering of a code listing: one `code` span per line, newline-joined."""
    return "\n".join("`" + ln + "`" if ln.strip() else "" for ln in src.strip("\n").split("\n"))


SOL1 = r"""int index_half(int* arr, int size)
{
   int i, half_sum, sum=0;
   for (i = 0; i < size; i++)
      sum += arr[i];
   if (sum % 2)
      return -1;
   half_sum = sum / 2;
   sum = 0;
   for (i = 0; i < size - 1; i++)
   {
      sum += arr[i];
      if (sum == half_sum)
         return i;
   }
   return -1;
}"""

SOL2 = r"""int search_in_array(int* arr, int size, int key) {
   int left = 0, right = size - 1;
   while (left <= right) {
      int mid = (left + right) / 2;
      if (arr[mid] == key)
         return mid;
      else
         if ((key < arr[mid]) && (arr[mid] < 0))
            left = mid + 1;
         else
            right = mid - 1;
   }
   return -1;
}"""

SOL3 = r"""int sum_chars(char* str, char ch)
{
   if (*str == '\0')
      return 0;
   if (*str == ch)
      return 1 + sum_chars(str + 1, ch);
   return sum_chars(str + 1, ch);
}"""

SOL4 = r"""int countSymmetricViolations(int matrix[N][N])
{
   int violations = 0;

   // rows
   for (int i = 0; i < N / 2; i++) {
      for (int j = 0; j < N; j++) {
         if (matrix[i][j] != matrix[N - 1 - i][j]) {
            violations++;
         }
      }
   }

   // columns
   for (int i = 0; i < N; i++) {
      for (int j = 0; j < N / 2; j++) {
         if (matrix[i][j] != matrix[i][N - 1 - j]) {
            violations++;
         }
      }
   }
   return violations;
}"""

CTX4 = r"""// perfectly symmetric matrix
int perfect[5][5] = {
   {1, 2, 8, 2, 1},
   {7, 4, 6, 4, 7},
   {5, 9, 8, 9, 5},
   {7, 4, 6, 4, 7},
   {1, 2, 8, 2, 1}
};

// not perfectly symmetric: row 3 has 7 != 6 and the last row has 4 != 1
int notPerfect[5][5] = {
   {1, 2, 8, 2, 1},
   {7, 4, 6, 4, 7},
   {5, 6, 8, 7, 5},
   {7, 4, 6, 4, 7},
   {1, 2, 8, 2, 4}
};

// signature
int countSymmetricViolations(int matrix[N][N]);"""

questions = [
    Q(1, "code", "arrays",
      "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים ואת גודלו.\n"
      "הפונקציה בודקת אם קיים אינדקס `i` במערך כך שסכום כל האיברים עד `i` כולל `i` שווה לסכום כל האיברים "
      "מהאיבר ה-`i+1` ועד הסוף.\n"
      "במידה וקיים אינדקס כזה הפונקציה מחזירה את האינדקס הקטן ביותר שמקיים את התנאי. במידה ולא קיים הפונקציה מחזירה `-1`.\n"
      "לדוגמא:\n"
      "עבור המערך `{5, -4, -2, 8, 10, -3}` הפונקציה תחזיר `3` (`5-4-2+8=7` וגם `10-3=7`).\n"
      "עבור המערך `{5, -4, -2, 8, 10, -2}` הפונקציה תחזיר `-1`.\n"
      "חתימת הפונקציה היא:\n"
      "`int index_half(int* arr, int size);`\n"
      "על הפונקציה לרוץ בסדר גודל של $n$.",
      "**פתרון רשמי** (25A-A עמ' 2):\n" + code_lines(SOL1) + "\n"
      "אם סכום כל האיברים אי-זוגי, אי אפשר לחלק את המערך לשני חלקים עם סכום זהה ומחזירים `-1`. "
      "אחרת מחשבים את חצי הסכום וסורקים פעם נוספת עם סכום חלקי; האינדקס הראשון שבו הסכום החלקי שווה לחצי הסכום מוחזר. "
      "שתי סריקות לינאריות, כלומר $O(n)$.",
      points=26),

    Q(2, "code", "binary_search",
      "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים `arr`, גודלו `size` ומספר נוסף **שלילי** `k`.\n"
      "על הפונקציה להחזיר את מיקומו של `k` במערך אם הוא נמצא בו, או `-1` אם הוא איננו.\n"
      "ידוע שהמערך מקיים תכונה מיוחדת:\n"
      "כל המספרים השליליים במערך נמצאים בתחילת המערך וממוינים בסדר יורד, וכל המספרים החיוביים במערך ממוינים בסדר עולה.\n"
      "לדוגמא:\n"
      "`-1, -5, -13, -15, -21, 2, 5, 12, 23`\n"
      "יש לכתוב לפונקציה שחתימתה היא:\n"
      "`int search_in_array(int* arr, int size, int k);`\n"
      "על הפונקציה לרוץ בסדר גודל של $\\log n$.",
      "**פתרון רשמי** (25A-A עמ' 3), הועתק כלשונו:\n" + code_lines(SOL2) + "\n"
      "חיפוש בינארי עם תנאי כיוון: אם `arr[mid]` שלילי והמפתח קטן ממנו, ממשיכים ימינה (`left = mid + 1`), "
      "אחרת שמאלה (`right = mid - 1`). זמן ריצה $O(\\log n)$.",
      points=26,
      hold="הקוד הרשמי (25A-A עמ' 3) מתקמפל אך שגוי: במערך הדוגמה של השאלה עצמה כל מפתח חיובי "
           "(2, 5, 12, 23) מחזיר -1, כי הענף else זז שמאלה גם כשהמפתח גדול מ-arr[mid]. "
           "ראו docs/ASK_ADIR.md. הנוסח הרשמי הועתק ללא תיקון. "
           "השאלה מגדירה k שלילי, ולכן ייתכן שהמבחן התכוון רק למפתחות שליליים; הקוד נכון בהם."),

    Q(3, "code", "recursion",
      "כתבו פונקציה **רקורסיבית** `int sum_chars(char* str, char ch)` המקבלת מחרוזת `str` ותו `ch`, "
      "ומחזירה את מספר הפעמים שבהן התו מופיע במחרוזת.\n"
      "לדוגמא: עבור `str=\"street\"` ו-`ch='t'` הפונקציה תחזיר `2`.",
      "**פתרון רשמי** (25A-A עמ' 4):\n" + code_lines(SOL3) + "\n"
      "מקרה בסיס: סוף המחרוזת מחזיר $0$. אם התו הנוכחי שווה ל-`ch` מוסיפים $1$ לספירה של שאר המחרוזת, "
      "אחרת ממשיכים בלי להוסיף.",
      points=26),

    Q(4, "code", "matrices",
      "נתון מערך דו-ממדי בגודל $N\\times N$. נגדיר מערך כ\"**סימטרי מושלם**\" אם הוא סימטרי ביחס לשורות והן ביחס לעמודות. כלומר:\n"
      "1. השורה הראשונה זהה לשורה האחרונה, השורה השנייה זהה לשורה לפני אחרונה, וכן הלאה.\n"
      "2. העמודה הראשונה זהה לעמודה האחרונה, העמודה השנייה זהה לעמודה לפני אחרונה, וכן הלאה.\n"
      "בקוד למטה מופיעים דוגמה למערך דו-ממדי סימטרי מושלם ודוגמה למערך שאינו סימטרי מושלם "
      "(יש לו שלוש הפרות: בשורה שלישית `7≠6`, בשורה אחרונה `4` שונה מ-`1` של שורה ראשונה וגם של תחילת שורה אחרונה).\n"
      "עליכם לממש את הפונקציה הבאה: `countSymmetricViolations` הסופרת כמה הפרות יש במערך דו-ממדי אם אינו סימטרי מושלם "
      "(אם יש 0 הפרות זה מערך סימטרי מושלם).\n"
      "יש לבדוק סימטריה באופן יעיל (לא לגשת לכל ערך במטריצה יותר מפעמיים).\n"
      "הפונקציה מחזירה מספר הפרות.",
      "**פתרון רשמי** (25A-A עמ' 6):\n" + code_lines(SOL4) + "\n"
      "בודקים שורות: משווים את שורה $i$ לשורה $N-1-i$ רק עבור חצי העליון של השורות, ועמודות באופן דומה "
      "עבור חצי השמאלי של העמודות. כל תא נבדק לכל היותר פעמיים.",
      points=27, contextId="c4"),
]

exam = {
    "examCode": "25A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
    "year": 2025,
    "examDate": "5.02.2025",
    "sourceFile": "25A-A exam pp.1-8",
    "solutionFile": "25A-A official answers in the answer boxes, pp.2-6",
    "contexts": {
        "c4": {"kind": "code", "title": "שאלה 4: דוגמאות וחתימה", "code": CTX4},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
