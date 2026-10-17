/* recursion course, level 6 - authored in tools/verify/needhelp/recursion/content.py; every answer is checked there by check.py (clang) */
COURSE_LEVEL("recursion", {
  "id": "C06",
  "order": 6,
  "icon": "🔤",
  "title": "מחרוזות ברקורסיה",
  "goal": "לעבור על מחרוזת עם `*s` ו-`s + 1` ולעצור בסוף המחרוזת.",
  "boss": false,
  "source": "ai-verified",
  "lesson": {
    "html": "<p>מחרוזת ב-C היא מערך של תווים שנגמר בתו <code>'\\0'</code>. לכן במחרוזת לא צריך להעביר גודל: הבסיס הוא \"הגענו לסוף\".</p>\n<pre><code>int len(char* s) {\n    if (*s == '\\0') return 0;       /* בסיס: סוף המחרוזת */\n    return 1 + len(s + 1);           /* מדלגים על התו הנוכחי */\n}</code></pre>\n<ul><li><code>*s</code> הוא התו הנוכחי, ו-<code>s + 1</code> היא המחרוזת בלי התו הראשון.</li>\n<li>בספירה של תו מסוים מוסיפים 1 כשהתו הנוכחי שווה: <code>(*s == c)</code> הוא 1 או 0.</li>\n<li>מדפיסים לפני הקריאה = מהתחלה לסוף. מדפיסים אחרי הקריאה = מהסוף להתחלה.</li></ul>\n<div class=\"lesson-rule\">🔑 בסיס <code>*s == '\\0'</code>, צעד <code>s + 1</code>. תמיד מקדמים את המצביע, אחרת אף פעם לא מגיעים לסוף.</div>\n<div class=\"lesson-trap\">⚠️ בודקים <code>*s == '\\0'</code> (התו) ולא <code>s == '\\0'</code> (המצביע עצמו).</div>"
  },
  "questions": [
    {
      "id": "C06-Q1",
      "question": "מה מחזירה `cnt(\"banana\", 'a')`?\n```c\nint cnt(char* s, char c) {\n    if (*s == '\\0') return 0;\n    return (*s == c) + cnt(s + 1, c);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`6`"
        },
        {
          "id": "b",
          "value": "`2`"
        },
        {
          "id": "c",
          "value": "`1`"
        },
        {
          "id": "d",
          "value": "`3`"
        }
      ],
      "correctId": "d",
      "explanation": "הפונקציה סופרת כמה פעמים `c` מופיע. ב-banana יש שלוש `a`: במקומות 1, 3, 5. התשובה 6 היא אורך המחרוזת, ו-2 סופר רק `n`.",
      "recap": "(*s == c) הוא 1 או 0 ומצטבר"
    },
    {
      "id": "C06-Q2",
      "question": "מה מדפיסה `rev(\"abc\")`?\n```c\nvoid rev(char* s) {\n    if (*s == '\\0') return;\n    rev(s + 1);\n    putchar(*s);\n}\n```",
      "options": [
        {
          "id": "a",
          "value": "`abc`"
        },
        {
          "id": "b",
          "value": "`cba`"
        },
        {
          "id": "c",
          "value": "`cb`"
        },
        {
          "id": "d",
          "value": "`bca`"
        }
      ],
      "correctId": "b",
      "explanation": "ההדפסה אחרי הקריאה: קודם יורדים עד הסוף, ואז `c` מודפס, אחריו `b`, ואחריו `a`. `abc` היה הפלט אילו `putchar` לפני `rev(s+1)`.",
      "recap": "הדפסה אחרי הקריאה הופכת את הסדר"
    },
    {
      "id": "C06-Q3",
      "step": {
        "type": "numeric",
        "prompt": "מה מחזירה `f(\"hello world\")` ? (הרווח נספר כתו רגיל)\n```c\nint f(char* s) {\n    if (*s == '\\0') return 0;\n    return (*s >= 'a' && *s <= 'm') + f(s + 1);\n}\n```",
        "answer": 6,
        "tol": 0,
        "explain": "הפונקציה סופרת אותיות בטווח `a` עד `m`. בתוך hello world: h, e, l, l, l, d (שישה). האותיות o, w, o, r אינן בטווח, והרווח גם לא."
      },
      "recap": "תנאי מורכב ב-C הוא 1 או 0"
    },
    {
      "id": "C06-Q4",
      "step": {
        "type": "fillblank",
        "prompt": "השלימו כך ש-`hasChar` תחזיר `1` אם התו `c` מופיע במחרוזת, אחרת `0`.",
        "lines": [
          "int hasChar(char* s, char c) {",
          "if (*s == '\\0') return 0;",
          "if (*s == c) return 1;",
          "return ___;",
          "}"
        ],
        "blankIndex": 3,
        "code": true,
        "options": [
          {
            "id": "a",
            "value": "hasChar(s + 1, c)"
          },
          {
            "id": "b",
            "value": "hasChar(s, c)"
          },
          {
            "id": "c",
            "value": "hasChar(s + 1, c) + 1"
          },
          {
            "id": "d",
            "value": "0"
          }
        ],
        "correctId": "a",
        "explain": "אם התו הנוכחי לא `c`, ממשיכים לחפש בשאר המחרוזת. `hasChar(s, c)` לא מקדמת את המצביע ולכן קורסת. `hasChar(s+1, c) + 1` מחזירה מספר חיובי גם כשהתו לא נמצא. `0` מוותרת על המשך החיפוש, ולכן לא מוצאת תו שבא אחרי המקום הראשון."
      },
      "recap": "לא מצאנו כאן: ממשיכים לחפש בשאר המחרוזת"
    },
    {
      "id": "C06-Q5",
      "step": {
        "type": "order",
        "prompt": "סדרו את שורות הפונקציה שמדפיסה מחרוזת מהסוף להתחלה.",
        "lines": [
          "void rev(char* s) {",
          "if (*s == '\\0') return;",
          "rev(s + 1);",
          "putchar(*s);",
          "}"
        ],
        "code": true,
        "explain": "אחרי החתימה בא הבסיס. אחר כך `rev(s + 1)` לפני `putchar`, כדי שההדפסה תתבצע בחזרה. אם `putchar` קודם, המחרוזת מודפסת מההתחלה לסוף. אם הבסיס אחרי הקריאה, הקריאות לא נעצרות."
      },
      "recap": "הקריאה לפני ההדפסה = סדר הפוך"
    },
    {
      "id": "C06-Q6",
      "step": {
        "type": "findbug",
        "prompt": "הפונקציה אמורה לספור כמה פעמים התו `c` מופיע במחרוזת. יש בה שורה אחת שגויה. איזו?",
        "lines": [
          "int cnt(char* s, char c) {",
          "if (*s == '\\0') return 0;",
          "if (*s == c) return 1 + cnt(s + 1, c);",
          "return cnt(s, c);",
          "}"
        ],
        "bugIndex": 3,
        "code": true,
        "explain": "כשהתו הנוכחי לא `c`, חייבים לעבור לתו הבא: `cnt(s + 1, c)`. הגרסה השגויה קוראת לעצמה עם אותו `s`, ולכן אם התו הראשון אינו `c` הקריאות לא נעצרות."
      },
      "recap": "בכל ענף מקדמים את המצביע"
    }
  ]
});
