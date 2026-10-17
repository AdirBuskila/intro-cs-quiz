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
