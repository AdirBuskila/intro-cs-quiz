/* c_strings course, level C05 - שני אינדקסים: פלינדרום והיפוך */
COURSE_LEVEL("c_strings", {
  "id": "C05",
  "order": 5,
  "icon": "↔️",
  "title": "שני אינדקסים: פלינדרום והיפוך",
  "goal": "אחרי השלב הזה תוכלו לעבור על מחרוזת משני הקצוות ולכתוב פלינדרום והיפוך במקום.",
  "source": "ai-verified",
  lesson: { html: String.raw`
<p>הרבה שאלות על מחרוזות משווים או מחליפים תווים מהקצוות כלפי פנים. התבנית: אינדקס <code>i</code> בתחילת המחרוזת ואינדקס <code>j</code> בסופה, והם נעים זה לקראת זה.</p>
<pre>int i = 0, j = (int)strlen(s) - 1;   /* j is the LAST character */
while (i &lt; j) {
    /* work with s[i] and s[j] */
    i++;
    j--;
}</pre>
<div class="lesson-rule">🔑 התו האחרון נמצא ב-<code>strlen(s) - 1</code>. האינדקס <code>strlen(s)</code> הוא כבר ה-<code>'\0'</code>.</div>
<p>הלולאה רצה כל עוד <code>i &lt; j</code>. כשהם נפגשים (באורך אי-זוגי) התו האמצעי נשאר במקומו, ואין מה להשוות או להחליף איתו.</p>
<h3>פלינדרום</h3>
<p>מחרוזת היא פלינדרום אם היא נקראת אותו דבר משני הכיוונים. בודקים זוגות: אם יש זוג שונה, מחזירים 0 מיד. אם הלולאה נגמרה, מחזירים 1.</p>
<pre>int isPal(char *s) {
    int i = 0, j = (int)strlen(s) - 1;
    while (i &lt; j) {
        if (s[i] != s[j]) return 0;
        i++; j--;
    }
    return 1;
}</pre>
<p>מחרוזת ריקה ומחרוזת בת תו אחד הן פלינדרומים: הלולאה לא רצה אפילו פעם, והתשובה 1.</p>
<h3>היפוך במקום</h3>
<p>כדי להפוך מחרוזת מחליפים את <code>s[i]</code> עם <code>s[j]</code> באותה לולאה. ההחלפה דורשת <b>משתנה זמני</b>: בלעדיו התא הראשון נדרס לפני שהערך שלו נשמר.</p>
<pre>char t = s[i];
s[i] = s[j];
s[j] = t;</pre>
<div class="lesson-ex">דוגמה: <code>"abcde"</code>. הזוגות הם (0,4) ו-(1,3), ואז <code>i = 2 = j</code> והלולאה נעצרת. שתי החלפות, והתוצאה <code>"edcba"</code>, כשה-<code>c</code> האמצעי נשאר.</div>
<div class="lesson-trap">⚠️ <code>j = strlen(s)</code> (בלי ה-1) מתחיל מה-<code>'\0'</code>, והזוג הראשון הוא <code>s[0]</code> מול סימן הסיום: כל פלינדרום "נכשל".</div>
` },
  questions: [
  {
    "id": "C05-Q1",
    "step": {
      "type": "numeric",
      "prompt": "כמה החלפות מבצעת הלולאה?\n```c\nchar s[] = \"abcde\";\nint i = 0, j = (int)strlen(s) - 1, swaps = 0;\nwhile (i < j) {\n    char t = s[i]; s[i] = s[j]; s[j] = t;\n    i++; j--;\n    swaps++;\n}\nprintf(\"%d\", swaps);\n```",
      "answer": 2,
      "tol": 0,
      "explain": "הזוגות שמוחלפים הם (0,4) ו-(1,3). אחרי שתי ההחלפות `i == j == 2` והתנאי `i < j` שקרי, ולכן התו האמצעי `c` לא מוחלף. סך הכל 2."
    },
    "recap": "היפוך באורך n מבצע n/2 החלפות (חלק שלם)"
  },
  {
    "id": "C05-Q2",
    "step": {
      "type": "order",
      "prompt": "סדרו את שורות הפונקציה שבודקת פלינדרום.",
      "code": true,
      "lines": [
        "int isPal(char *s) {\n    int i = 0, j = (int)strlen(s) - 1;",
        "    while (i < j) {\n        if (s[i] != s[j]) return 0;\n        i++; j--;\n    }",
        "    return 1;\n}"
      ],
      "explain": "מגדירים את שני האינדקסים, בודקים זוגות מהקצוות פנימה, ורק אחרי שהלולאה נגמרה בלי הבדל מחזירים 1. `return 1` לפני הלולאה היה מחזיר 1 לכל מחרוזת."
    },
    "recap": "פלינדרום: i מההתחלה, j מהסוף, עד שנפגשים"
  },
  {
    "id": "C05-Q3",
    "step": {
      "type": "findbug",
      "prompt": "הפונקציה אמורה להחזיר 1 על פלינדרום (למשל `\"abba\"`), אבל שורה אחת שונתה והיא מחזירה 0. איזו?",
      "code": true,
      "lines": [
        "int isPal(char *s) {",
        "    int i = 0;",
        "    int j = (int)strlen(s);",
        "    while (i < j) {",
        "        if (s[i] != s[j]) return 0;",
        "        i++; j--;",
        "    }",
        "    return 1;",
        "}"
      ],
      "bugIndex": 2,
      "explain": "`j = strlen(s)` מצביע על ה-`'\\0'`. הזוג הראשון הוא `s[0]` מול `'\\0'`, והם שונים בכל מחרוזת לא ריקה, ולכן מוחזר 0 גם עבור `\"abba\"`. התו האחרון הוא ב-`strlen(s) - 1`."
    },
    "recap": "j מתחיל ב-strlen(s) - 1"
  },
  {
    "id": "C05-Q4",
    "question": "ההחלפה בקוד נעשית בלי משתנה זמני. מה מדפיס הקוד?\n```c\nchar s[] = \"abcd\";\nint i = 0, j = 3;\nwhile (i < j) {\n    s[i] = s[j];\n    s[j] = s[i];\n    i++; j--;\n}\nprintf(\"%s\", s);\n```",
    "options": [
      {
        "id": "a",
        "value": "`dcba`"
      },
      {
        "id": "b",
        "value": "`dccd`"
      },
      {
        "id": "c",
        "value": "`abcd`"
      },
      {
        "id": "d",
        "value": "`dbcd`"
      }
    ],
    "correctId": "b",
    "explanation": "בזוג הראשון `s[0] = s[3]` נותן `d`, ואז `s[3] = s[0]` מעתיק את אותו `d` חזרה, והערך המקורי `a` אבד: `dbcd`. בזוג השני אותו דבר עם `b` ו-`c`: `s[1] = s[2]` נותן `c` ו-`s[2] = s[1]` שוב `c`, וסך הכל `dccd`. ההחלפה דורשת משתנה זמני.",
    "recap": "החלפה בלי משתנה זמני מאבדת ערך"
  },
  {
    "id": "C05-Q5",
    "question": "הפונקציה `isPal` היא זו מהשיעור. מה מדפיס הקוד?\n```c\nprintf(\"%d %d %d %d\", isPal(\"abba\"), isPal(\"abca\"), isPal(\"a\"), isPal(\"\"));\n```",
    "options": [
      {
        "id": "a",
        "value": "`1 0 1 0`"
      },
      {
        "id": "b",
        "value": "`1 0 0 1`"
      },
      {
        "id": "c",
        "value": "`1 0 1 1`"
      },
      {
        "id": "d",
        "value": "`0 0 1 1`"
      }
    ],
    "correctId": "c",
    "explanation": "`\"abba\"` פלינדרום: 1. ב-`\"abca\"` הזוג (1,2) הוא `b` מול `c`: 0. מחרוזת בת תו אחד: `i = j = 0`, הלולאה לא רצה ומוחזר 1. מחרוזת ריקה: `j = -1`, הלולאה לא רצה ומוחזר 1.",
    "recap": "ריקה ותו בודד הן פלינדרומים"
  },
  {
    "id": "C05-Q6",
    "question": "הלולאה בונה ב-`t` את ההיפוך של `s`. מה צריך להיות במקום ___?\n```c\nchar s[] = \"abc\", t[4];\nint n = (int)strlen(s);\nfor (int i = 0; i < n; i++)\n    t[i] = ___;\nt[n] = '\\0';\nprintf(\"%s\", t);\n```",
    "options": [
      {
        "id": "a",
        "value": "`s[i]`"
      },
      {
        "id": "b",
        "value": "`s[n - i]`"
      },
      {
        "id": "c",
        "value": "`s[n - 1]`"
      },
      {
        "id": "d",
        "value": "`s[n - 1 - i]`"
      }
    ],
    "correctId": "d",
    "explanation": "כשהמקום בתוצאה הוא `i`, התו המתאים במקור הוא `n - 1 - i`: עבור `i = 0` זה התו האחרון `c`. `s[n - i]` מתחיל מה-`'\\0'` ולכן התוצאה נעצרת מיד. `s[i]` מעתיקה בלי להפוך. `s[n - 1]` שוכפל את התו האחרון בכל המקומות.",
    "recap": "תו i בהיפוך = s[n - 1 - i]"
  }
],
});
