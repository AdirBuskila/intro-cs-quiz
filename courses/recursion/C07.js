/* recursion course, level 7 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C07",
  "order": 7,
  "icon": "🌳",
  "title": "שתי קריאות: עץ קריאות",
  "goal": "לעקוב אחרי פונקציה שקוראת לעצמה פעמיים, לספור קריאות ולהבין למה הזמן מעריכי.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>כשפונקציה קוראת לעצמה <b>פעמיים</b> (כמו פיבונאצ'י), הקריאות יוצרות עץ ולא שרשרת.</p>\n<pre><code>int fib(int n) {\n    if (n &lt;= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}</code></pre>\n<div class=\"lesson-ex\">דוגמה: <code>fib(4) = fib(3) + fib(2)</code>. הקריאה <code>fib(3)</code> מתפצלת ל-<code>fib(2)</code> ול-<code>fib(1)</code>, וכן הלאה. הערכים של <code>fib(0..6)</code> הם 0, 1, 1, 2, 3, 5, 8.</div>\n<ul><li>מבצעים את הקריאה הראשונה <b>עד הסוף</b> (כולל כל התת-עץ שלה), ורק אחר כך את השנייה.</li>\n<li>אם יש <code>printf</code> בין שתי הקריאות, הוא מודפס בין שני התת-עצים.</li>\n<li>כשכל קריאה יוצרת שתי קריאות וגודל הבעיה יורד רק ב-1 או 2, מספר הקריאות כמעט מוכפל בכל צעד: סדר גודל <b>מעריכי</b>, $O(2^n)$.</li></ul>\n<div class=\"lesson-rule\">🔑 לספור קריאות: מציירים את העץ או מונים בעזרת משתנה גלובלי. כל קריאה, כולל קריאות מקרה הבסיס, נספרת.</div>\n<div class=\"lesson-trap\">⚠️ לא כל פונקציה עם שתי קריאות מעריכית אם הן על חצאים נפרדים, אבל כאן הקלט קטן רק ב-1, ולכן כן.</div>"
  },
  "questions": [
    {
      "id": "C07-Q1",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `w(5)`?\n```c\nint w(int n) {\n    if (n == 0) return 1;\n    if (n == 1) return 2;\n    return w(n - 1) + w(n - 2);\n}\n```",
        "answer": 13,
        "tol": 0,
        "explain": "`w(0)=1`, `w(1)=2`, `w(2)=3`, `w(3)=5`, `w(4)=8`, `w(5)=13`. כל ערך הוא סכום שני הקודמים."
      },
      "recap": "ממלאים טבלה מהבסיסים כלפי מעלה"
    },
    {
      "id": "C07-Q2",
      "step": {
        "type": "numeric",
        "prompt": "כמה קריאות ל-`fib` מתבצעות בסך הכול בהרצת `fib(5)`, כולל הקריאה הראשונה?\n```c\nint calls = 0;\nint fib(int n) {\n    calls++;\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n```",
        "answer": 15,
        "tol": 0,
        "explain": "מספר הקריאות C(n) מקיים $C(n)=1+C(n-1)+C(n-2)$ כש-$C(0)=C(1)=1$: 1, 1, 3, 5, 9, 15. לכן ל-`fib(5)` יש 15 קריאות."
      },
      "recap": "קריאות של fib(n) = 1 + קריאות של שני הילדים"
    },
    {
      "id": "C07-Q3",
      "question": "מה מדפיסה `f(3)`?\n```c\nvoid f(int n) {\n    if (n == 0) return;\n    f(n - 1);\n    printf(\"%d \", n);\n    f(n - 1);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`3 2 1 1 2 3`"
        },
        {
          "id": "b",
          "value": "`1 2 3 1 2 3`"
        },
        {
          "id": "c",
          "value": "`1 2 1 3 1 2 1`"
        },
        {
          "id": "d",
          "value": "`3 2 1 3 2 1`"
        }
      ],
      "correctId": "c",
      "explanation": "ההדפסה בין שתי הקריאות, אז `f(3)` מדפיסה: את כל הפלט של `f(2)`, אחר כך 3, ואחר כך שוב את כל הפלט של `f(2)`. הפלט של `f(2)` הוא `1 2 1` (כי `f(1)` מדפיסה רק 1). התוצאה: `1 2 1 3 1 2 1`.",
      "recap": "פלט f(n) = פלט f(n-1), אחר כך n, אחר כך פלט f(n-1)"
    },
    {
      "id": "C07-Q4",
      "step": {
        "type": "numeric",
        "prompt": "כמה קריאות ל-`f` מתבצעות בהרצת `f(4)`, כולל הראשונה וקריאות מקרה הבסיס?\n```c\nint calls = 0;\nvoid f(int n) {\n    calls++;\n    if (n == 0) return;\n    f(n - 1);\n    f(n - 1);\n}\n```",
        "answer": 31,
        "tol": 0,
        "explain": "אחת בקריאה עצמה ועוד שתיים של `f(3)`: $C(n)=1+2C(n-1)$ עם $C(0)=1$ נותן 1, 3, 7, 15, 31. כלומר $2^{n+1}-1$."
      },
      "recap": "כל קריאה יוצרת שתיים: מספר הקריאות מוכפל בכל שלב"
    },
    {
      "id": "C07-Q5",
      "question": "מה סדר הגודל של זמן הריצה של `f(n)` מהשאלה הקודמת?",
      "options": [
        {
          "id": "a",
          "value": "$O(n)$"
        },
        {
          "id": "b",
          "value": "$O(n^2)$"
        },
        {
          "id": "c",
          "value": "$O(2^n)$"
        },
        {
          "id": "d",
          "value": "$O(\\log n)$"
        }
      ],
      "correctId": "c",
      "explanation": "בכל רמה יש פי שניים יותר קריאות מהרמה שמעליה, ויש $n$ רמות. סך הקריאות $2^{n+1}-1$: מעריכי. ב-$O(n)$ או $O(n^2)$ הקריאות היו גדלות לאט הרבה יותר (לדוגמה, ל-$n=20$ יש יותר ממיליון קריאות). ב-$O(\\log n)$ היה צריך לחצות את הקלט.",
      "recap": "שתי קריאות על n-1 = סדר גודל מעריכי"
    },
    {
      "id": "C07-Q6",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו את שורת ההחזרה כך ש-`fib` תחזיר את איבר מספר $n$ של סדרת פיבונאצ'י ($0, 1, 1, 2, 3, 5, \\ldots$).",
        "lines": [
          "int fib(int n) {",
          "if (n <= 1) return n;",
          "return ___;",
          "}"
        ],
        "blankIndex": 2,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "fib(n - 1) + fib(n - 1)"
          },
          {
            "id": "b",
            "value": "fib(n - 1) * fib(n - 2)"
          },
          {
            "id": "c",
            "value": "fib(n - 1) + fib(n - 2)"
          },
          {
            "id": "d",
            "value": "fib(n - 2) + fib(n - 3)"
          }
        ],
        "correctId": "c",
        "explain": "כל איבר הוא סכום שני הקודמים. הגרסה הראשונה נותנת $2^{n-1}$ ל-$n \\ge 1$ (למשל 4 במקום 2 ב-`fib(3)`). המכפלה נותנת 0 כבר ב-`fib(2)`. הגרסה האחרונה נותנת $-1$ ב-`fib(2)` כי `fib(-1)` מחזירה $-1$."
      },
      "recap": "פיבונאצ'י: סכום שני הקודמים"
    }
  ]
});
