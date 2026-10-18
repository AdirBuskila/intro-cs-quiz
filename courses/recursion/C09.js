/* recursion course, level 9 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C09",
  "order": 9,
  "icon": "✍️",
  "title": "לכתוב פונקציה רקורסיבית",
  "goal": "לכתוב פונקציה רקורסיבית מאפס לפי שלוש שאלות: בסיס, צעד, וחיבור.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>כשצריך <b>לכתוב</b> פונקציה רקורסיבית, שואלים שלוש שאלות לפי הסדר:</p>\n<ol><li><b>בסיס</b>: מהו הקלט הקטן ביותר, ומה התשובה עליו? (מספר 0 או ספרה אחת, מערך קטן מ-2 איברים, מחרוזת ריקה.)</li>\n<li><b>צעד</b>: איך מקטינים את הקלט? (<code>n / 10</code>, <code>n - 1</code>, <code>a + 1</code> עם <code>n - 1</code>, <code>s + 1</code>.)</li>\n<li><b>חיבור</b>: איך משלבים את תשובת הקריאה עם החלק שהסרתי? (חיבור, כפל, השוואה.)</li></ol>\n<div class=\"lesson-ex\">דוגמה: מספר האחדות בייצוג בינארי של $n$. בסיס: <code>n == 0</code> נותן 0. צעד: <code>n / 2</code>. חיבור: הביט האחרון <code>n % 2</code> ועוד התשובה לשאר.</div>\n<pre><code>int bitOnes(int n) {\n    if (n == 0) return 0;\n    return n % 2 + bitOnes(n / 2);\n}</code></pre>\n<p>אפשר גם להקטין בחצי, ולא רק ב-1: <code>power(x, n)</code> עם <code>n / 2</code> מבצעת הרבה פחות קריאות.</p>\n<div class=\"lesson-rule\">🔑 בדקו את הפונקציה על שלושה קלטים: הקטן ביותר (בסיס), קלט קטן אחד מעליו, וקלט רגיל.</div>\n<div class=\"lesson-trap\">⚠️ במבחן לעתים אסור להשתמש בלולאה או בפונקציית עזר. הרקורסיה צריכה לעשות את כל העבודה.</div>"
  },
  "questions": [
    {
      "id": "C09-Q1",
      "step": {
        "type": "order",
        "prompt": "סדרו את שורות הפונקציה, שמחזירה כמה ביטים 1 יש בייצוג הבינארי של $n \\ge 0$.",
        "lines": [
          "int onesBin(int n) {",
          "if (n == 0) return 0;",
          "return n % 2 + onesBin(n / 2);",
          "}"
        ],
        "code": true,
        "explain": "הבסיס `n == 0` קודם, כדי שהקריאות ייעצרו. בצעד מוסיפים את הביט האחרון (`n % 2`) ועוברים ל-`n / 2`. אם הצעד קודם לבסיס, `onesBin(0)` ממשיכה בלי סוף."
      },
      "recap": "בסיס, אחר כך ביט אחרון + קריאה על n/2"
    },
    {
      "id": "C09-Q2",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו כך שהפונקציה תחזיר `1` אם המערך פלינדרום (נקרא אותו דבר משני הכיוונים), אחרת `0`.",
        "lines": [
          "int isPal(int* arr, int n) {",
          "if (n <= 1) return 1;",
          "if (arr[0] != arr[n - 1]) return 0;",
          "return isPal(arr + 1, ___);",
          "}"
        ],
        "blankIndex": 3,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "n - 1"
          },
          {
            "id": "b",
            "value": "n - 2"
          },
          {
            "id": "c",
            "value": "n - 3"
          },
          {
            "id": "d",
            "value": "n / 2"
          }
        ],
        "correctId": "b",
        "explain": "משווים את הראשון לאחרון, ואז ממשיכים על הקטע הפנימי: מדלגים על הראשון (`arr + 1`) ועל האחרון, כלומר הגודל קטן ב-2. עם `n - 1` הקטע הפנימי כולל גם את האחרון, ואז `{1,2,2,1}` נכשל. עם `n - 3` מדלגים על אחד מהאיברים הפנימיים וחוזרים 1 בטעות על `{1,2,3,1}`. עם `n / 2` הגודל הפנימי שגוי: `{1,2,3,3,2,1}` נכשל."
      },
      "recap": "בפנים: arr + 1 ו-n - 2"
    },
    {
      "id": "C09-Q3",
      "step": {
        "type": "findbug",
        "prompt": "הפונקציה אמורה להחזיר $x^n$ ($n \\ge 0$). יש בה שורה אחת שגויה. איזו?",
        "lines": [
          "int power(int x, int n) {",
          "if (n == 0) return 1;",
          "return x + power(x, n - 1);",
          "}"
        ],
        "bugIndex": 2,
        "code": true,
        "explain": "חזקה היא כפל חוזר: $x^n = x \\cdot x^{n-1}$. השורה השגויה מחברת במקום לכפול, ולכן נותנת $x \\cdot n + 1$ ולא $x^n$."
      },
      "recap": "חזקה = כפל, והבסיס $x^0 = 1$"
    },
    {
      "id": "C09-Q4",
      "question": "השלימו את השורה החסרה כך ש-`prodDigits(n)` תחזיר את מכפלת הספרות של $n \\ge 1$ (למשל 234 נותן 24).\n```c\nint prodDigits(int n) {\n    if (n < 10) return n;\n    return ___;\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`n % 10 + prodDigits(n / 10)`"
        },
        {
          "id": "b",
          "value": "`n / 10 * prodDigits(n % 10)`"
        },
        {
          "id": "c",
          "value": "`n % 10 * prodDigits(n / 10)`"
        },
        {
          "id": "d",
          "value": "`prodDigits(n / 10)`"
        }
      ],
      "correctId": "c",
      "explanation": "הספרה האחרונה `n % 10` כפול המכפלה של שאר הספרות. החיבור נותן סכום. `n / 10 * prodDigits(n % 10)` מכפיל את כל השאר (לא את הספרות שלו) בספרה האחרונה: עבור 234 מקבלים $23 \\cdot 4 = 92$ ולא 24. והרביעית פשוט זורקת את הספרה האחרונה.",
      "recap": "בסיס ספרה אחת, צעד: ספרה אחרונה כפול השאר"
    },
    {
      "id": "C09-Q5",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `g(3, 5)`?\n```c\nint g(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 == 0) {\n        int h = g(x, n / 2);\n        return h * h;\n    }\n    return x * g(x, n - 1);\n}\n```",
        "answer": 243,
        "tol": 0,
        "explain": "הפונקציה מחשבת $x^n$ בחצי מהקריאות: `g(3,5) = 3 * g(3,4)`, `g(3,4) = g(3,2)^2`, `g(3,2) = g(3,1)^2`, `g(3,1) = 3 * g(3,0) = 3`. לכן `g(3,2)=9`, `g(3,4)=81`, `g(3,5)=243`, כלומר $3^5$."
      },
      "recap": "אם n זוגי מעלים בריבוע את התוצאה על n/2"
    },
    {
      "bankId": "19A-A-Q2",
      "recap": "פלינדרום: משווים ראשון לאחרון, ממשיכים עם arr + 1 ו-n - 2"
    }
  ]
});
