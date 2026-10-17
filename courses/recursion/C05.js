/* recursion course, level 5 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C05",
  "order": 5,
  "icon": "📚",
  "title": "מערכים ברקורסיה",
  "goal": "לעבור על מערך ברקורסיה עם אינדקס או עם `arr + 1`, ולבחור נכון את הבסיס.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>במערך מקטינים את הבעיה בשתי דרכים מקובלות. בשתיהן מעבירים את <b>הגודל</b> ומקטינים אותו בכל קריאה.</p>\n<pre><code>/* דרך 1: מסתכלים על האיבר האחרון, a[n-1] */\nint sum1(int* a, int n) {\n    if (n == 0) return 0;\n    return a[n - 1] + sum1(a, n - 1);\n}\n/* דרך 2: מסתכלים על הראשון ומזיזים את המצביע */\nint sum2(int* a, int n) {\n    if (n == 0) return 0;\n    return a[0] + sum2(a + 1, n - 1);\n}</code></pre>\n<ul><li><code>a + 1</code> הוא מצביע לאיבר השני: לקריאה הבאה המערך \"מתחיל\" מאיבר אחד קדימה.</li>\n<li>בסיס <code>n == 0</code> מתאים לפעולות כמו סכום. כשצריך להשוות <code>a[0]</code> ל-<code>a[1]</code> או להחזיר <code>a[0]</code> אחרי ש\"נשאר איבר אחד\", הבסיס הוא <code>n &lt;= 1</code> או <code>n == 1</code>.</li></ul>\n<div class=\"lesson-rule\">🔑 בכל קריאה גודל הבעיה קטן באחד. עם <code>a + 1</code> חייבים להקטין גם את <code>n</code> (<code>n - 1</code>), אחרת הקריאה הבאה מסתכלת מעבר לסוף המערך.</div>\n<div class=\"lesson-trap\">⚠️ פעולה שמשווה <code>a[0]</code> ל-<code>a[1]</code> לא תקינה כש-<code>n == 1</code>: אין <code>a[1]</code>. לכן הבסיס הוא <code>n &lt;= 1</code>.</div>\n<div class=\"lesson-trap\">⚠️ קריאה שלא מקדמת את המערך ולא מקטינה את <code>n</code> אף פעם לא מתקדמת.</div>"
  },
  "questions": [
    {
      "id": "C05-Q1",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה הקריאה `f(a, 6)` עבור `a = {5, 1, 4, 3, 9, 2}` ?\n```c\nint f(int* a, int n) {\n    if (n == 0) return 0;\n    return (a[n - 1] > 3) + f(a, n - 1);\n}\n```",
        "answer": 3,
        "tol": 0,
        "explain": "הפונקציה סופרת איברים גדולים מ-3 בתוך `n` האיברים הראשונים. הגדולים מ-3 הם 5, 4 ו-9: שלושה."
      },
      "recap": "בודקים את a[n-1] ומקטינים את n"
    },
    {
      "id": "C05-Q2",
      "question": "מה מחזירה `f(a, 2)` עבור `a = {2, 4, 6, 8}` ?\n```c\nint f(int* a, int n) {\n    if (n == 0) return 0;\n    return a[0] + f(a + 1, n - 1);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`20`"
        },
        {
          "id": "b",
          "value": "`6`"
        },
        {
          "id": "c",
          "value": "`4`"
        },
        {
          "id": "d",
          "value": "`12`"
        }
      ],
      "correctId": "b",
      "explanation": "`n=2` אומר שעוברים רק על שני איברים: `a[0]=2` ואחריו `a[1]=4`, ואז `n=0` עוצר. הסכום 6. התשובה 20 היא סכום כל המערך, אבל הפרמטר `n` מגביל ל-2 איברים. 12 הוא סכום שלושה איברים, ו-4 הוא רק האיבר השני.",
      "recap": "הפרמטר n קובע כמה איברים עוברים, לא אורך המערך"
    },
    {
      "id": "C05-Q3",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו את הקריאה הרקורסיבית כך שהפונקציה תחזיר `1` אם המערך ממוין בסדר עולה (לא יורד), אחרת `0`.",
        "lines": [
          "int isAscending(int* arr, int size) {",
          "if (size <= 1) return 1;",
          "if (arr[0] > arr[1]) return 0;",
          "return ___;",
          "}"
        ],
        "blankIndex": 3,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "isAscending(arr + 1, size - 1)"
          },
          {
            "id": "b",
            "value": "isAscending(arr, size - 1)"
          },
          {
            "id": "c",
            "value": "isAscending(arr + 1, size - 2)"
          },
          {
            "id": "d",
            "value": "arr[0] <= arr[1]"
          }
        ],
        "correctId": "a",
        "explain": "אחרי שהזוג הראשון תקין, ממשיכים עם המערך שמתחיל באיבר הבא ובגודל קטן באחד. בגרסה השנייה המצביע לא זז, ולכן תמיד משווים שוב את הזוג הראשון: `{1,2,3,1}` נראה ממוין. בשלישית מדלגים על זוג: ב-`{1,2,3,2}` הירידה מ-3 ל-2 לא נבדקת. הרביעית לא ממשיכה ברקורסיה בכלל."
      },
      "recap": "arr + 1 ו-size - 1 ביחד"
    },
    {
      "id": "C05-Q4",
      "step": {
        "type": "order",
        "prompt": "סדרו את שורות הפונקציה שמחזירה את האיבר הגדול ביותר במערך (גודל $n \\ge 1$).",
        "lines": [
          "int maxArr(int* a, int n) {",
          "if (n == 1) return a[0];",
          "int m = maxArr(a + 1, n - 1);",
          "return a[0] > m ? a[0] : m;",
          "}"
        ],
        "code": true,
        "explain": "קודם הבסיס (מערך של איבר אחד), אחר כך מחשבים את המקסימום של השאר, ורק אז משווים אותו ל-`a[0]`. אם השורה של `m` באה לפני הבסיס, `maxArr` נקראת גם עם `n=0` ואז עם מספרים שליליים, והקריאות לא נעצרות. אם ההשוואה באה לפני `m`, הערך `m` עוד לא מחושב."
      },
      "recap": "בסיס, אחר כך קריאה, ואז שימוש בתוצאה"
    },
    {
      "id": "C05-Q5",
      "step": {
        "type": "findbug",
        "prompt": "הפונקציה אמורה להחזיר `1` אם כל איברי המערך חיוביים. יש בה שורה אחת שגויה. איזו?",
        "lines": [
          "int allPositive(int* a, int n) {",
          "if (n == 0) return 1;",
          "if (a[0] <= 0) return 0;",
          "return allPositive(a, n - 1);",
          "}"
        ],
        "bugIndex": 3,
        "code": true,
        "explain": "הקריאה מקטינה את `n` אבל לא מזיזה את המצביע, ולכן `a[0]` נבדק שוב ושוב. מערך כמו `{1, -2}` נראה חיובי. התיקון: `allPositive(a + 1, n - 1)`."
      },
      "recap": "אם מסתכלים על a[0], חייבים גם לקדם את a"
    },
    {
      "bankId": "20A-A-Q1a",
      "recap": "עוקבים אחרי fun_rec מלמטה למעלה: כל ערך משתמש בקודם"
    }
  ]
});
