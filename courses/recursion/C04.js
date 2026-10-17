/* recursion course, level 4 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C04",
  "order": 4,
  "icon": "🔢",
  "title": "ספרות של מספר",
  "goal": "לפרק מספר לספרות ברקורסיה עם `n % 10` ו-`n / 10`, ולבחור מקרה בסיס נכון.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>רקורסיה על מספר מפרקת אותו לשניים: הספרה האחרונה ושאר המספר.</p>\n<table><thead><tr><th>ביטוי</th><th>משמעות</th><th>עבור 4527</th></tr></thead><tbody>\n<tr><td><code>n % 10</code></td><td>הספרה האחרונה</td><td>7</td></tr>\n<tr><td><code>n / 10</code></td><td>שאר המספר (חילוק שלמים)</td><td>452</td></tr></tbody></table>\n<pre><code>int digitCount(int n) {\n    if (n &lt; 10) return 1;                /* ספרה אחת */\n    return 1 + digitCount(n / 10);       /* מורידים ספרה */\n}</code></pre>\n<div class=\"lesson-ex\">דוגמה: <code>digitCount(305)</code> קוראת ל-<code>digitCount(30)</code> שקוראת ל-<code>digitCount(3)</code>, שמחזירה 1. לכן התוצאה 3.</div>\n<div class=\"lesson-rule\">🔑 הצעד מחליף את <code>n</code> ב-<code>n / 10</code>, והבסיס הוא <code>n == 0</code> (אין ספרות) או <code>n &lt; 10</code> (ספרה אחת). תמיד בודקים מה הבסיס מחזיר.</div>\n<div class=\"lesson-trap\">⚠️ הספרה <code>0</code> היא ספרה לכל דבר. בסיס <code>n == 0</code> סופר 305 בתור 3 ספרות, אבל נותן 0 ל-<code>0</code> עצמו.</div>\n<div class=\"lesson-trap\">⚠️ הפרמטר שמועבר הלאה הוא <code>n / 10</code>, לא <code>n % 10</code>. עם <code>n % 10</code> לא מורידים ספרות.</div>"
  },
  "questions": [
    {
      "id": "C04-Q1",
      "question": "מה מחזירה `f(4527)`?\n```c\nint f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`7`"
        },
        {
          "id": "b",
          "value": "`4527`"
        },
        {
          "id": "c",
          "value": "`18`"
        },
        {
          "id": "d",
          "value": "`4`"
        }
      ],
      "correctId": "c",
      "explanation": "הפונקציה מחברת את הספרות: $7+2+5+4=18$. כל קריאה מוסיפה את הספרה האחרונה ומעבירה את השאר. 7 הוא רק הספרה האחרונה, 4 הוא הספרה הראשונה.",
      "recap": "n % 10 מוסיפים, n / 10 ממשיכים"
    },
    {
      "id": "C04-Q2",
      "question": "מה מדפיסה `p(1230)`?\n```c\nvoid p(int n) {\n    if (n == 0) return;\n    printf(\"%d\", n % 10);\n    p(n / 10);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`1230`"
        },
        {
          "id": "b",
          "value": "`321`"
        },
        {
          "id": "c",
          "value": "`0321`"
        },
        {
          "id": "d",
          "value": "`123`"
        }
      ],
      "correctId": "c",
      "explanation": "ההדפסה לפני הקריאה, אז הספרות יוצאות מהסוף להתחלה: 0, 3, 2, 1. הספרה 0 נדפסת כי `1230 % 10` הוא 0. `321` מפספס אותה, ו-`1230` היה הפלט אילו ההדפסה אחרי הקריאה.",
      "recap": "מדפיסים n % 10 לפני הקריאה: הספרות בסדר הפוך"
    },
    {
      "id": "C04-Q3",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `f(7177)`?\n```c\nint f(int n) {\n    if (n == 0) return 0;\n    return (n % 10 == 7) + f(n / 10);\n}\n```",
        "answer": 3,
        "tol": 0,
        "explain": "הביטוי `(n % 10 == 7)` הוא 1 כשהספרה האחרונה 7, אחרת 0. בספרות 7, 1, 7, 7 יש שלוש שבעיות: 3."
      },
      "recap": "תנאי ב-C שווה 1 או 0, ואפשר לחבר אותו"
    },
    {
      "id": "C04-Q4",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו את השורה כך ש-`sumDigits` תחזיר את סכום הספרות של $n$ (למשל 123 נותן 6).",
        "lines": [
          "int sumDigits(int n) {",
          "if (n == 0) return 0;",
          "return ___;",
          "}"
        ],
        "blankIndex": 2,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "n % 10 + sumDigits(n / 10)"
          },
          {
            "id": "b",
            "value": "n / 10 + sumDigits(n % 10)"
          },
          {
            "id": "c",
            "value": "n % 10 * sumDigits(n / 10)"
          },
          {
            "id": "d",
            "value": "sumDigits(n / 10)"
          }
        ],
        "correctId": "a",
        "explain": "הספרה האחרונה `n % 10` נוספת לסכום של שאר המספר `sumDigits(n / 10)`. בגרסה השנייה התפקידים הפוכים וההתקדמות נתקעת: `sumDigits(2)` קוראת ל-`sumDigits(2)` שוב ושוב. בגרסה השלישית כפל במקום חיבור, והתוצאה תמיד 0 כי בסוף מגיעים ל-`sumDigits(0)`. הרביעית זורקת את הספרה ומחזירה תמיד 0."
      },
      "recap": "ספרה אחרונה + קריאה על השאר"
    },
    {
      "id": "C04-Q5",
      "step": {
        "type": "findbug",
        "prompt": "הפונקציה אמורה להחזיר את מספר הספרות של $n$, אבל יש בה שורה אחת שגויה. איזו?",
        "lines": [
          "int digitCount(int n) {",
          "if (n < 10) return 1;",
          "return 1 + digitCount(n % 10);",
          "}"
        ],
        "bugIndex": 2,
        "code": true,
        "explain": "הקריאה הרקורסיבית צריכה להעביר `n / 10` (שאר המספר). עם `n % 10` מעבירים רק את הספרה האחרונה, ותמיד מקבלים 2 עבור כל מספר מ-10 ומעלה."
      },
      "recap": "מורידים ספרה עם n / 10"
    },
    {
      "id": "C04-Q6",
      "question": "מה מחזירות `c(0)` ו-`c(305)`, לפי הסדר?\n```c\nint c(int n) {\n    if (n == 0) return 0;\n    return 1 + c(n / 10);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`1 3`"
        },
        {
          "id": "b",
          "value": "`0 3`"
        },
        {
          "id": "c",
          "value": "`0 2`"
        },
        {
          "id": "d",
          "value": "`1 2`"
        }
      ],
      "correctId": "b",
      "explanation": "`c(0)` נעצרת מיד ומחזירה 0 (למרות ש-0 הוא מספר עם ספרה אחת). `c(305)` עוברת על 305, 30, 3 ואז 0: שלוש קריאות שמוסיפות 1, כלומר 3. הספרה 0 שבאמצע נספרת.",
      "recap": "בסיס n == 0 נותן 0 ל-0, אבל סופר ספרות אפס שבאמצע"
    }
  ]
});
