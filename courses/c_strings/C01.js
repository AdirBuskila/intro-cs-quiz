/* c_strings course, level C01 - תו הוא מספר, מחרוזת נגמרת ב-'\0' */
COURSE_LEVEL("c_strings", {
  "id": "C01",
  "order": 1,
  "icon": "🔤",
  "title": "תו הוא מספר, מחרוזת נגמרת ב-'\\0'",
  "goal": "אחרי השלב הזה תדעו מה מחזיקה מחרוזת בזיכרון, ומה ההבדל בין גודל המערך לאורך המחרוזת.",
  "source": "ai-verified",
  lesson: { html: String.raw`
<p>ב-C אין סוג נתונים "מחרוזת". מחרוזת היא <b>מערך של תווים</b> (<code>char</code>) שנגמר בתו מיוחד אחד: <code>'\0'</code>. כל השלבים הבאים נשענים על שני הרעיונות שכאן.</p>
<h3>1. תו הוא מספר</h3>
<p>משתנה <code>char</code> שומר מספר קטן. אות בגרשיים בודדים, למשל <code>'a'</code>, היא קיצור למספר הקוד שלה בטבלת ASCII: <code>'a'</code> הוא 97, <code>'b'</code> הוא 98, <code>'A'</code> הוא 65 ו-<code>'0'</code> הוא 48. אותו תו מודפס כאות עם <code>%c</code> וכמספר עם <code>%d</code>.</p>
<pre>char c = 'a';
printf("%c %d", c, c);   /* a 97 */
printf("%c", c + 1);     /* b */</pre>
<div class="lesson-rule">🔑 האותיות רצופות בטבלה, ולכן <code>'a' + 1</code> הוא <code>'b'</code> ו-<code>'z' - 'a'</code> הוא 25.</div>
<h3>2. מחרוזת נגמרת ב-'\0'</h3>
<p>המחרוזת <code>"abc"</code> נשמרת בארבעה תאים: <code>'a'</code>, <code>'b'</code>, <code>'c'</code> ועוד התו <code>'\0'</code>, תו שערכו 0. הוא סימן הסוף: <code>printf("%s")</code> ו-<code>strlen</code> קוראים תו אחר תו עד שהם פוגשים אותו.</p>
<table>
<thead><tr><th>ביטוי</th><th>מה הוא סופר</th><th>עבור <code>char s[] = "abc"</code></th></tr></thead>
<tbody>
<tr><td><code>sizeof(s)</code></td><td>כל התאים במערך, כולל ה-<code>'\0'</code></td><td>4</td></tr>
<tr><td><code>strlen(s)</code></td><td>התווים שלפני ה-<code>'\0'</code> הראשון</td><td>3</td></tr>
</tbody></table>
<pre>char s[] = "abc";    /* 4 cells: a b c \0 */
char t[10] = "hi";   /* 10 cells, but strlen(t) == 2 */</pre>
<div class="lesson-rule">🔑 מערך שמחזיק מחרוזת באורך n חייב להכיל לפחות n+1 תאים. האורך של המחרוזת (<code>strlen</code>) נקבע לפי מיקום ה-<code>'\0'</code>, לא לפי גודל המערך.</div>
<div class="lesson-ex">דוגמה: אחרי <code>char s[] = "hello"; s[2] = '\0';</code> ההדפסה <code>printf("%s", s)</code> נותנת <code>he</code> ו-<code>strlen(s)</code> הוא 2, כי הקריאה נעצרת ב-<code>'\0'</code> החדש. אבל <code>sizeof(s)</code> עדיין 6: המערך לא התכווץ.</div>
<div class="lesson-trap">⚠️ <code>'a'</code> ו-<code>"a"</code> שונים: הראשון תו בודד (המספר 97), והשני מחרוזת של שני תאים (<code>'a'</code> ו-<code>'\0'</code>).</div>
` },
  questions: [
  {
    "id": "C01-Q1",
    "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"abc\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));\n```",
    "options": [
      {
        "id": "a",
        "value": "`4 3`"
      },
      {
        "id": "b",
        "value": "`3 3`"
      },
      {
        "id": "c",
        "value": "`4 4`"
      },
      {
        "id": "d",
        "value": "`3 4`"
      }
    ],
    "correctId": "a",
    "explanation": "`sizeof(s)` סופר את כל התאים במערך, כולל ה-`'\\0'`: ארבעה. `strlen(s)` עוצר לפני ה-`'\\0'`: שלושה. התשובה `3 3` שוכחת את תא הסיום, `4 4` סופרת אותו גם באורך, ו-`3 4` מחליפה בין השניים.",
    "recap": "sizeof סופר תאים כולל '\\0', strlen עוצר לפניו"
  },
  {
    "id": "C01-Q2",
    "step": {
      "type": "text",
      "prompt": "מה ידפיס הקוד? (תו אחד)\n```c\nprintf(\"%c\", 'a' + 2);\n```",
      "accept": [
        "c"
      ],
      "normalize": "none",
      "explain": "`'a'` הוא 97, ו-`'a' + 2` הוא 99, שהוא הקוד של `'c'`. עם `%c` מודפסת האות `c`, ועם `%d` היה מודפס 99."
    },
    "recap": "האותיות רצופות: 'a' + 2 הוא 'c'"
  },
  {
    "id": "C01-Q3",
    "question": "מה מדפיס הקוד?\n```c\nchar s[10] = \"hi\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));\n```",
    "options": [
      {
        "id": "a",
        "value": "`2 2`"
      },
      {
        "id": "b",
        "value": "`10 10`"
      },
      {
        "id": "c",
        "value": "`3 2`"
      },
      {
        "id": "d",
        "value": "`10 2`"
      }
    ],
    "correctId": "d",
    "explanation": "המערך הוגדר עם 10 תאים, ולכן `sizeof(s)` הוא 10. המחרוזת שבתוכו היא `\"hi\"` ואחריה `'\\0'`, ולכן `strlen(s)` הוא 2. גודל המערך ואורך המחרוזת הם שני מספרים נפרדים: `2 2` ו-`10 10` מתעלמות מההבדל, ו-`3 2` מניחה שהמערך בגודל המחרוזת כולל ה-`'\\0'`.",
    "recap": "גודל המערך (sizeof) שונה מאורך המחרוזת (strlen)"
  },
  {
    "id": "C01-Q4",
    "step": {
      "type": "numeric",
      "prompt": "מה ידפיס הקוד?\n```c\nchar s[] = \"banana\";\ns[4] = '\\0';\nprintf(\"%d\", (int)strlen(s));\n```",
      "answer": 4,
      "tol": 0,
      "explain": "התאים הם `b a n a n a \\0`. אחרי `s[4] = '\\0'` התא ה-4 (מספור מ-0) הוא סימן הסוף, ולכן יש ארבעה תווים לפניו: `bana`, ו-`strlen` מחזירה 4."
    },
    "recap": "strlen נעצרת ב-'\\0' הראשון, גם אם אחריו יש עוד תווים"
  },
  {
    "id": "C01-Q5",
    "question": "מה מדפיס הקוד?\n```c\nprintf(\"%d %d\", 'a', (int)sizeof(\"a\"));\n```",
    "options": [
      {
        "id": "a",
        "value": "`97 1`"
      },
      {
        "id": "b",
        "value": "`1 2`"
      },
      {
        "id": "c",
        "value": "`97 2`"
      },
      {
        "id": "d",
        "value": "`2 97`"
      }
    ],
    "correctId": "c",
    "explanation": "`'a'` הוא תו בודד, ובהדפסה עם `%d` מקבלים את הקוד שלו: 97. `\"a\"` היא מחרוזת של שני תאים (`'a'` ו-`'\\0'`), ולכן `sizeof(\"a\")` הוא 2. אין `1` בשום מקום: גם מחרוזת של אות אחת תופסת שני בתים.",
    "recap": "'a' הוא תו (97), \"a\" הוא מערך של שני תאים"
  },
  {
    "id": "C01-Q6",
    "step": {
      "type": "fillblank",
      "prompt": "המערך `t` מלא מראש באותיות `X`. מה צריך להיכנס במקום ___ כדי שההדפסה תהיה בדיוק `ok`?",
      "code": true,
      "lines": [
        "char t[6] = \"XXXXX\";",
        "t[0] = 'o';",
        "t[1] = 'k';",
        "___",
        "printf(\"%s\", t);"
      ],
      "blankIndex": 3,
      "options": [
        {
          "id": "a",
          "type": "text",
          "value": "t[2] = '\\0';"
        },
        {
          "id": "b",
          "type": "text",
          "value": "t[2] = '0';"
        },
        {
          "id": "c",
          "type": "text",
          "value": "t[3] = '\\0';"
        },
        {
          "id": "d",
          "type": "text",
          "value": "t[1] = '\\0';"
        }
      ],
      "correctId": "a",
      "explain": "ההדפסה קוראת עד ה-`'\\0'` הראשון, ולכן צריך לשים אותו מיד אחרי `ok`, בתא 2. `t[2] = '0'` שם את התו הספרה אפס (לא סימן סיום) ומדפיס `ok0XX`. `t[3] = '\\0'` משאיר את `X` בתא 2 ומדפיס `okX`. `t[1] = '\\0'` דורס את ה-`k` ומדפיס `o`."
    },
    "recap": "בלי '\\0' במקום הנכון, המחרוזת ממשיכה עד הסימן הבא"
  }
],
});
