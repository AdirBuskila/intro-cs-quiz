/* recursion course, level 3 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C03",
  "order": 3,
  "icon": "🖨️",
  "title": "לפני או אחרי הקריאה: סדר ההדפסה",
  "goal": "לקבוע באיזה סדר פונקציה רקורסיבית מדפיסה, לפי המקום של ה-printf ביחס לקריאה.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>כשיש <code>printf</code> בתוך פונקציה רקורסיבית, חשוב <b>איפה</b> הוא נמצא ביחס לקריאה:</p>\n<pre><code>void down(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    down(n - 1);\n}</code></pre><pre><code>void up(int n) {\n    if (n == 0) return;\n    up(n - 1);\n    printf(\"%d \", n);\n}</code></pre>\n<ul><li><b>לפני</b> הקריאה (<code>down</code>): מדפיסים בסדר הכניסה. <code>down(3)</code> מדפיסה <code>3 2 1</code>.</li>\n<li><b>אחרי</b> הקריאה (<code>up</code>): ההדפסה מחכה עד שהקריאה הפנימית חוזרת, ולכן הסדר הפוך. <code>up(3)</code> מדפיסה <code>1 2 3</code>.</li></ul>\n<div class=\"lesson-rule\">🔑 הדפסה לפני הקריאה = סדר הכניסה. הדפסה אחרי הקריאה = סדר היציאה (הפוך). אם יש שתיהן, כל קריאה מדפיסה פעמיים: פעם בדרך למטה ופעם בדרך חזרה.</div>\n<div class=\"lesson-trap\">⚠️ מקרה הבסיס שחוזר בלי להדפיס לא מוסיף שום פלט. אם הוא כן מדפיס (למשל <code>0</code>), הוא מופיע פעם אחת, באמצע.</div>"
  },
  "questions": [
    {
      "id": "C03-Q1",
      "question": "מה מדפיסה `f(4)`?\n```c\nvoid f(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n * 2);\n    f(n - 1);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`2 4 6 8`"
        },
        {
          "id": "b",
          "value": "`4 3 2 1`"
        },
        {
          "id": "c",
          "value": "`8 6 4 2`"
        },
        {
          "id": "d",
          "value": "`8 6 4 2 0`"
        }
      ],
      "correctId": "c",
      "explanation": "ההדפסה לפני הקריאה, ולכן בסדר הכניסה: `n=4` מדפיס 8, אחר כך `n=3` מדפיס 6, 4 ו-2. כשמגיעים ל-`n=0` חוזרים בלי להדפיס, ולכן אין `0`. `2 4 6 8` היה הפלט אילו ההדפסה אחרי הקריאה. `4 3 2 1` שוכח להכפיל ב-2.",
      "recap": "printf לפני הקריאה: סדר הכניסה"
    },
    {
      "id": "C03-Q2",
      "question": "מה מדפיסה `g(4)`?\n```c\nvoid g(int n) {\n    if (n == 0) return;\n    g(n - 1);\n    printf(\"%d \", n * 2);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`8 6 4 2`"
        },
        {
          "id": "b",
          "value": "`2 4 6 8`"
        },
        {
          "id": "c",
          "value": "`1 2 3 4`"
        },
        {
          "id": "d",
          "value": "`2 4 6 8 0`"
        }
      ],
      "correctId": "b",
      "explanation": "ההדפסה אחרי הקריאה, ולכן בסדר היציאה: הקריאה העמוקה ביותר (`n=1`) מדפיסה ראשונה 2, אחריה `n=2` מדפיסה 4, ואז 6 ו-8. `8 6 4 2` היה הפלט אילו ההדפסה לפני הקריאה.",
      "recap": "printf אחרי הקריאה: הסדר ההפוך"
    },
    {
      "id": "C03-Q3",
      "question": "מה מדפיסה `h(3)`?\n```c\nvoid h(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    h(n - 1);\n    printf(\"%d \", n * 10);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`3 2 1 10 20 30`"
        },
        {
          "id": "b",
          "value": "`3 2 1 30 20 10`"
        },
        {
          "id": "c",
          "value": "`3 30 2 20 1 10`"
        },
        {
          "id": "d",
          "value": "`1 2 3 10 20 30`"
        }
      ],
      "correctId": "a",
      "explanation": "בדרך למטה מודפסים 3, 2, 1 (לפני הקריאה). אחרי שמקרה הבסיס חוזר, כל קריאה מדפיסה את החלק השני בדרך חזרה, מהעמוקה לשטחית: `n=1` מדפיסה 10, `n=2` מדפיסה 20, `n=3` מדפיסה 30. `3 30 2 20 1 10` היה הפלט אילו ההדפסות באו זו אחר זו בלי קריאה ביניהן.",
      "recap": "פלט כפול: כניסה בסדר יורד, ואז יציאה בסדר הפוך"
    },
    {
      "id": "C03-Q4",
      "step": {
        "type": "numeric",
        "prompt": "כמה מספרים מדפיסה `k(3)` בסך הכול?\n```c\nvoid k(int n) {\n    if (n == 0) {\n        printf(\"0 \");\n        return;\n    }\n    printf(\"%d \", n);\n    k(n - 1);\n    printf(\"%d \", n);\n}\n```",
        "answer": 7,
        "tol": 0,
        "explain": "הפלט הוא `3 2 1 0 1 2 3`: שלושה מספרים בדרך למטה, `0` אחד ממקרה הבסיס, ושלושה בדרך חזרה: 7."
      },
      "recap": "מקרה בסיס שמדפיס מופיע פעם אחת באמצע"
    },
    {
      "id": "C03-Q5",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו את השורה כך ש-`up(3)` תדפיס `1 2 3`.",
        "lines": [
          "void up(int n) {",
          "if (n == 0) return;",
          "___",
          "printf(\"%d \", n);",
          "}"
        ],
        "blankIndex": 2,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "up(n - 1);"
          },
          {
            "id": "b",
            "value": "up(n + 1);"
          },
          {
            "id": "c",
            "value": "up(n);"
          },
          {
            "id": "d",
            "value": "printf(\"%d \", n - 1);"
          }
        ],
        "correctId": "a",
        "explain": "הקריאה הרקורסיבית חייבת להקטין את `n` כדי להגיע ל-0, וההדפסה אחריה. `up(n+1)` מגדילה, ו-`up(n)` לא משנה: בשתיהן אין עצירה והתוכנית קורסת. הפקודה `printf` עם `n - 1` לא קוראת רקורסיבית, ולכן `up(3)` מדפיסה רק `2 3`."
      },
      "recap": "הקריאה מקטינה את הפרמטר לעבר הבסיס"
    }
  ]
});
