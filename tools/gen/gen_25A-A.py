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
- Q2 search_in_array: correct on the specified domain k<0 (all negative keys -25..-1 over the sample array
  pass, present and absent). Positive keys are outside the spec (the question states k is negative); the
  official code misses them, which is not a bug. Orchestrator ruling, no hold.
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
      points=26),

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

IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def lines_of(src):
    return [ln for ln in src.strip("\n").split("\n") if ln.strip()]


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


# ---- steps / rubric / pitfalls (ai-draft); expected values come from real clang runs of tools/verify/25A-A ----
S1 = lines_of(SOL1)
b1, i1 = swap(SOL1, "half_sum = sum / 2;", "half_sum = sum;")
S2 = lines_of(SOL2)
b2, i2 = swap(SOL2, "if ((key < arr[mid]) && (arr[mid] < 0))", "if ((key < arr[mid]) && (arr[mid] > 0))")
S3 = lines_of(SOL3)
b3, i3 = swap(SOL3, "return 1 + sum_chars(str + 1, ch);", "return 1;")
S4 = lines_of(SOL4)
b4, i4 = swap(SOL4, "for (int i = 0; i < N / 2; i++) {", "for (int i = 0; i < N; i++) {")
f1, j1 = blank(S1, "if (sum % 2)")
f2, j2 = blank(S2, "left = mid + 1;")
f3, j3 = blank(S3, "return 1 + sum_chars(str + 1, ch);")
f4, j4 = blank(S4, "for (int i = 0; i < N / 2; i++) {")


def add(num, **kw):
    for q in questions:
        if q["num"] == num:
            q.update(kw)
            return
    raise KeyError(num)


add(1,
    rubric=rub(("חישוב סכום כל המערך בסריקה אחת, והחזרת `-1` כשהסכום אי-זוגי", 6),
               ("חישוב חצי הסכום (`sum / 2`) ואיפוס הסכום החלקי לפני הסריקה השנייה", 6),
               ("סריקה שנייה עם סכום חלקי רץ, והחזרת האינדקס הראשון (הקטן ביותר) שבו הוא שווה לחצי הסכום", 8),
               ("טיפול נכון בקצה: האינדקס האחרון לא נבדק (`i < size - 1`), ואם לא נמצא מחזירים `-1`", 3),
               ("יעילות: שתי סריקות לינאריות בלבד, כלומר $O(n)$ ללא לולאות מקוננות", 3)),
    rubricSource="ai-draft",
    pitfalls=["פתרון בכוח גס: לכל `i` לחשב מחדש את הסכום משמאל ומימין (שתי לולאות מקוננות), וזה $O(n^2)$ ולא עומד בדרישת היעילות.",
              "לא לבדוק קודם שהסכום זוגי: חילוק שלם מעגל כלפי מטה, וסכום אי-זוגי עלול לתת התאמה שגויה.",
              "לשכוח לאפס את `sum` לפני הסריקה השנייה, או להחזיר אינדקס שאינו הקטן ביותר."],
    steps=[
        {"type": "choice",
         "prompt": "מה מחזירה `index_half` עבור המערך `{1, 2, 3}` (גודל 3)?",
         "options": opts("`1`", "`0`", "`2`", "`-1`"), "correctId": "a",
         "explain": "הסכום 6, חצי הסכום 3. אחרי `i=0` הסכום החלקי 1, אחרי `i=1` הוא 3 ושווה לחצי הסכום, לכן מחזירים 1 (ריצה אמיתית: 1)."},
        {"type": "choice",
         "prompt": "מה מחזירה `index_half` עבור `{7, 0, 0, 0}` ועבור `{0, 5, -5}`, לפי הסדר?",
         "options": opts("`-1` ואז `0`", "`0` ואז `0`", "`-1` ואז `-1`", "`0` ואז `-1`"), "correctId": "a",
         "explain": "בראשון הסכום 7 אי-זוגי ולכן `-1`. בשני הסכום 0, חצי הסכום 0 ו-`arr[0]=0` נותן סכום חלקי 0 כבר באינדקס 0 (ריצה אמיתית: -1 ו-0)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה בפונקציה.", "code": True,
         "lines": f1, "blankIndex": j1,
         "options": opts("if (sum % 2)", "if (sum % 2 == 0)", "if (sum > 0)", "if (sum == half_sum)"), "correctId": "a",
         "explain": "סכום אי-זוגי לא ניתן לחלוקה לשני חלקים שווים, ולכן יוצאים עם `-1` לפני הסריקה השנייה."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `index_half`.", "code": True, "lines": S1,
         "explain": "סריקה ראשונה לסכום, בדיקת זוגיות, חצי סכום ואיפוס, סריקה שנייה, ובסוף `-1`."},
        {"type": "findbug", "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה נכשלת. מצאו אותה.", "code": True,
         "lines": b1, "bugIndex": i1,
         "explain": "`half_sum = sum;` במקום `sum / 2`: מחפשים סכום חלקי השווה לכל הסכום ולא לחציו."},
    ],
    stepsSource="ai-draft")

add(2,
    rubric=rub(("הגדרת גבולות `left`, `right` ולולאת `while (left <= right)` עם `mid` אמצעי", 6),
               ("החזרת `mid` כשנמצא `arr[mid] == key`, ו-`-1` בסוף כשלא נמצא", 5),
               ("כיוון נכון בתחום השלילי היורד: אם `key < arr[mid]` ו-`arr[mid]` שלילי עוברים ימינה (`left = mid + 1`)", 8),
               ("בכל מקרה אחר עוברים שמאלה (`right = mid - 1`), כולל כש-`arr[mid]` חיובי", 4),
               ("זמן ריצה $O(\\log n)$ כי כל איטרציה חוצה את התחום לחצי", 3)),
    rubricSource="ai-draft",
    pitfalls=["לכתוב חיפוש בינארי רגיל לסדר עולה ולשכוח שהשליליים ממוינים בסדר יורד, כך שכיוון ההשוואה הפוך.",
              "לא להתחשב בחלק החיובי: כש-`arr[mid]` חיובי והמפתח שלילי חייבים ללכת שמאלה, ובדיקה של `key < arr[mid]` בלבד שולחת ימינה בטעות.",
              "חיפוש לינארי: נכון אבל $O(n)$ ולא מקבל את נקודות היעילות."],
    steps=[
        {"type": "choice",
         "prompt": "במערך `{-1, -5, -13, -15, -21, 2, 5, 12, 23}` (גודל 9) מחפשים את `-15`. איזה ערך `arr[mid]` נבדק באיטרציה הראשונה?",
         "options": opts("`-21`", "`-15`", "`-13`", "`-5`"), "correctId": "a",
         "explain": "`mid = (0+8)/2 = 4` ו-`arr[4] = -21` (ריצה אמיתית). `-15 < -21` שקר, לכן `right = 3`."},
        {"type": "numeric",
         "prompt": "באותו חיפוש של `-15`: איזה אינדקס מוחזר בסוף?",
         "answer": 3, "tol": 0,
         "explain": "האיטרציות בודקות mid=4 (`-21`), mid=1 (`-5`), mid=2 (`-13`), mid=3 (`-15`) ומחזירות 3 (ריצה אמיתית)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה: כשהמפתח קטן מ-`arr[mid]` השלילי, לאן ממשיכים?", "code": True,
         "lines": f2, "blankIndex": j2,
         "options": opts("left = mid + 1;", "left = mid;", "right = mid + 1;", "right = mid - 1;"), "correctId": "a",
         "explain": "בתחום השלילי הערכים יורדים: מפתח קטן יותר נמצא מימין ל-`mid`, ולכן `left = mid + 1`."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `search_in_array`.", "code": True, "lines": S2,
         "explain": "אתחול, לולאה, חישוב `mid`, השוואת שוויון, תנאי הכיוון, ובסוף `-1`."},
        {"type": "text", "prompt": "מהי סיבוכיות הזמן של הפתרון? (למשל `O(n)`)",
         "accept": ["O(log n)", "O(logn)", "O(lg n)"], "normalize": "complexity",
         "explain": "כל איטרציה חוצה את התחום, לכן $O(\\log n)$."},
    ],
    stepsSource="ai-draft")

add(3,
    rubric=rub(("מקרה בסיס: `*str == '\\0'` מחזיר `0`", 8),
               ("כשהתו הנוכחי שווה ל-`ch` מחזירים `1 +` קריאה רקורסיבית על `str + 1`", 8),
               ("אחרת מחזירים את הקריאה הרקורסיבית על `str + 1` בלי להוסיף", 7),
               ("התקדמות בכל קריאה (`str + 1`) כך שהרקורסיה מסתיימת, ושימוש ב-`ch` כפרמטר ולא בלולאה", 3)),
    rubricSource="ai-draft",
    pitfalls=["לשכוח את מקרה הבסיס של סוף המחרוזת, ולכן הרקורסיה קוראת מעבר ל-`'\\0'`.",
              "להשתמש בלולאה או במשתנה גלובלי/סטטי במקום ברקורסיה, שהוראות השאלה דורשות.",
              "להחזיר `1` בלבד כשיש התאמה (בלי להמשיך), או לשכוח `+ 1` ולהחזיר רק את הספירה של השאר."],
    steps=[
        {"type": "choice",
         "prompt": "מה מחזירה `sum_chars(\"aXa\", 'a')`?",
         "options": opts("`2`", "`1`", "`3`", "`0`"), "correctId": "a",
         "explain": "התו הראשון והאחרון שווים ל-`'a'`: 1 + 0 + 1 = 2 (ריצה אמיתית: 2)."},
        {"type": "choice",
         "prompt": "מה מחזירה `sum_chars(\"street\", 'z')` ומה מחזירה `sum_chars(\"street\", 'e')`, לפי הסדר?",
         "options": opts("`0` ואז `2`", "`0` ואז `1`", "`-1` ואז `2`", "`1` ואז `2`"), "correctId": "a",
         "explain": "אין `z` ולכן 0, ו-`e` מופיע פעמיים ב-`street` ולכן 2 (ריצה אמיתית: 0 ו-2)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה בפונקציה.", "code": True,
         "lines": f3, "blankIndex": j3,
         "options": opts("return 1 + sum_chars(str + 1, ch);", "return 1;", "return sum_chars(str + 1, ch) - 1;",
                         "return 1 + sum_chars(str, ch);"), "correctId": "a",
         "explain": "מוסיפים 1 על ההתאמה הנוכחית וממשיכים עם שאר המחרוזת (`str + 1`)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `sum_chars`.", "code": True, "lines": S3,
         "explain": "קודם מקרה הבסיס, אחר כך מקרה ההתאמה, ובסוף ההמשך בלי התאמה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה בגרסה הבאה. איזו?", "code": True,
         "lines": b3, "bugIndex": i3,
         "explain": "`return 1;` עוצר את הספירה בהתאמה הראשונה, ולכן `\"aaaa\"` ייתן 1 במקום 4."},
    ],
    stepsSource="ai-draft")

add(4,
    rubric=rub(("לולאת השורות: `i` רץ רק עד `N / 2` ו-`j` על כל העמודות", 6),
               ("השוואה נכונה של `matrix[i][j]` ל-`matrix[N - 1 - i][j]` וספירת הפרה", 7),
               ("לולאת העמודות: `j` רץ עד `N / 2`, והשוואה ל-`matrix[i][N - 1 - j]`", 7),
               ("אתחול מונה `violations`, הגדלה בכל הפרה והחזרתו בסוף", 3),
               ("יעילות: כל תא נבדק לכל היותר פעמיים (חצי מטריצה בכל לולאה)", 4)),
    rubricSource="ai-draft",
    pitfalls=["לרוץ על כל השורות (`i < N`) ולספור כל זוג פעמיים, כך שכל הפרה נספרת כפול ושוברים את דרישת היעילות.",
              "לבדוק רק סימטריה אחת (שורות או עמודות) ולשכוח את השנייה.",
              "טעות באינדקס ההשתקפות: `N - i` במקום `N - 1 - i` יוצאת מגבולות המערך."],
    steps=[
        {"type": "numeric",
         "prompt": "עבור `notPerfect`, כמה הפרות סופרת לולאת השורות בלבד (`i < N / 2`, השוואה ל-`matrix[N - 1 - i][j]`)?",
         "answer": 1, "tol": 0,
         "explain": "רק התא בפינה (עמודה 4: 1 בשורה 0 מול 4 בשורה 4) נבדל (ריצה אמיתית: 1)."},
        {"type": "numeric",
         "prompt": "וכמה הפרות סופרת לולאת העמודות באותה מטריצה?",
         "answer": 2, "tol": 0,
         "explain": "בשורה 2 הערכים 6 ו-7 שונים, ובשורה 4 הערכים 1 ו-4 שונים: 2 הפרות (ריצה אמיתית: 2, ובסך הכול 3)."},
        {"type": "fillblank", "prompt": "השלימו את כותרת הלולאה החיצונית של בדיקת השורות.", "code": True,
         "lines": f4, "blankIndex": j4,
         "options": opts("for (int i = 0; i < N / 2; i++) {", "for (int i = 0; i < N; i++) {",
                         "for (int i = 1; i < N / 2; i++) {", "for (int i = 0; i < N - 1; i++) {"), "correctId": "a",
         "explain": "די לרוץ על חצי השורות: כל שורה מושווית לשורת ההשתקפות שלה, ולכן אין צורך בחצי השני."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `countSymmetricViolations`.", "code": True, "lines": S4,
         "explain": "אתחול, בדיקת שורות, בדיקת עמודות, והחזרת המונה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. איזו, ומה קורה בגללה?", "code": True,
         "lines": b4, "bugIndex": i4,
         "explain": "`i < N` בלולאת השורות סופר כל זוג פעמיים: עבור `notPerfect` מתקבל 4 במקום 3 (ריצה אמיתית: 4)."},
    ],
    stepsSource="ai-draft")

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
