/* recursion course, level 2 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C02",
  "order": 2,
  "icon": "📋",
  "title": "עוקבים אחרי ערכים מוחזרים",
  "goal": "לעקוב אחרי רקורסיה בטבלה, ולהבין מה פונקציה רקורסיבית מחשבת בכלל.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>לעקוב אחרי רקורסיה עושים בשני שלבים: קודם <b>יורדים</b> וכותבים את הקריאות עד מקרה הבסיס, ואז <b>עולים</b> וממלאים את הערך שכל קריאה מחזירה.</p>\n<pre><code>int t(int n) {\n    if (n == 0) return 1;\n    return t(n - 1) + n;\n}</code></pre>\n<table><thead><tr><th>קריאה</th><th>תלויה ב-</th><th>מחזירה</th></tr></thead><tbody>\n<tr><td><code>t(0)</code></td><td>בסיס</td><td>1</td></tr>\n<tr><td><code>t(1)</code></td><td><code>t(0) + 1</code></td><td>2</td></tr>\n<tr><td><code>t(2)</code></td><td><code>t(1) + 2</code></td><td>4</td></tr>\n<tr><td><code>t(3)</code></td><td><code>t(2) + 3</code></td><td>7</td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 ממלאים את הטבלה מהשורה של הבסיס כלפי מעלה. כל שורה משתמשת רק בשורה שמתחתיה.</div>\n<p>כדי להבין <b>מה</b> הפונקציה מחשבת, מציבים כמה ערכים קטנים ומחפשים את הכלל, ואז בודקים אותו על ערך נוסף.</p>\n<div class=\"lesson-trap\">⚠️ בסיס יכול להיות <code>n &lt;= 0</code> ולא רק <code>n == 0</code>. כשהצעד מקטין ב-2, הקריאות יכולות לדלג מעל 0, ולכן צריך לבדוק איך מקרה הבסיס מושג.</div>"
  },
  "questions": [
    {
      "id": "C02-Q1",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `f(3, 4)`?\n```c\nint f(int a, int b) {\n    if (b == 0) return 0;\n    return a + f(a, b - 1);\n}\n```",
        "answer": 12,
        "tol": 0,
        "explain": "`f(3,0)=0`, `f(3,1)=3+0=3`, `f(3,2)=3+3=6`, `f(3,3)=9`, `f(3,4)=12`."
      },
      "recap": "ממלאים את הטבלה מהבסיס למעלה"
    },
    {
      "id": "C02-Q2",
      "question": "מה הפונקציה `s` מחשבת עבור כל $n \\ge 1$ ?\n```c\nint s(int n) {\n    if (n == 1) return 1;\n    return s(n - 1) + 2 * n - 1;\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`n + n - 1`"
        },
        {
          "id": "b",
          "value": "`n * (n + 1) / 2`"
        },
        {
          "id": "c",
          "value": "`n * n`"
        },
        {
          "id": "d",
          "value": "`2 * n - 1`"
        }
      ],
      "correctId": "c",
      "explanation": "הערכים: `s(1)=1`, `s(2)=1+3=4`, `s(3)=4+5=9`, `s(4)=9+7=16`. אלה ריבועים: $n^2$. הנוסחה `n*(n+1)/2` נותנת 1, 3, 6 כבר בקריאה השנייה. `2n-1` הוא רק המחובר האחרון ולא הסכום, ו-`n+n-1` שווה לו.",
      "recap": "מציבים כמה ערכים ומחפשים כלל, ואז בודקים אותו"
    },
    {
      "id": "C02-Q3",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `g(4)`?\n```c\nint g(int n) {\n    if (n == 0) return 1;\n    return 2 * g(n - 1) + 1;\n}\n```",
        "answer": 31,
        "tol": 0,
        "explain": "`g(0)=1`, `g(1)=3`, `g(2)=7`, `g(3)=15`, `g(4)=31`. כל ערך הוא פעמיים הקודם ועוד 1."
      },
      "recap": "כל שורה בטבלה משתמשת בשורה שמתחתיה"
    },
    {
      "id": "C02-Q4",
      "question": "מה מחזירה `r(7)`?\n```c\nint r(int n) {\n    if (n <= 0) return 0;\n    return r(n - 2) + n;\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`28`"
        },
        {
          "id": "b",
          "value": "`12`"
        },
        {
          "id": "c",
          "value": "`16`"
        },
        {
          "id": "d",
          "value": "`7`"
        }
      ],
      "correctId": "c",
      "explanation": "הקריאות: 7, 5, 3, 1, ואז `r(-1)` שעוצרת (כי $-1 \\le 0$) ומחזירה 0. הסכום: $7+5+3+1=16$. התשובה 12 עוצרת מוקדם מדי (7+5), והתשובה 28 היא סכום כל המספרים מ-1 עד 7, אבל הצעד המקטין ב-2 לא עובר על כולם.",
      "recap": "כשהצעד מקטין ב-2, רק כל מספר שני נספר"
    }
  ]
});
