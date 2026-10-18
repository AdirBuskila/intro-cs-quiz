/* c_strings course, level C02 - לעבור על מחרוזת */
COURSE_LEVEL("c_strings", {
  "id": "C02",
  "order": 2,
  "icon": "🚶",
  "title": "לעבור על מחרוזת",
  "goal": "אחרי השלב הזה תוכלו לכתוב לולאה שעוברת על מחרוזת ולספור בה תווים, ותדעו מה עולה strlen.",
  "source": "ai-verified",
  lesson: { html: String.raw`
<p>כמעט כל פונקציה על מחרוזת היא לולאה אחת שעוברת על התווים עד ה-<code>'\0'</code>. אין צורך לדעת את האורך מראש: סימן הסוף הוא תנאי העצירה.</p>
<h3>1. שתי דרכים לעבור על מחרוזת</h3>
<pre>for (int i = 0; s[i] != '\0'; i++) {
    /* use s[i] */
}

while (*s) {        /* *s is 0 exactly at the terminator */
    /* use *s */
    s++;
}</pre>
<p>התנאי <code>s[i] != '\0'</code> אפשר לקצר ל-<code>s[i]</code>, כי <code>'\0'</code> הוא 0 וכל תו אחר שונה מ-0.</p>
<div class="lesson-rule">🔑 עוצרים כשפוגשים <code>'\0'</code>. לא סופרים מראש, לא יוצאים מהמערך.</div>
<h3>2. מתכון הספירה</h3>
<p>כדי לספור תווים שמקיימים תנאי: מאפסים מונה, עוברים על כל המחרוזת, מעלים את המונה בכל תו מתאים, ומחזירים אותו.</p>
<pre>int countChar(char *s, char c) {
    int n = 0;
    for (int i = 0; s[i] != '\0'; i++)
        if (s[i] == c)
            n++;
    return n;
}</pre>
<div class="lesson-ex">דוגמה: <code>countChar("banana", 'a')</code>. המחרוזת מכילה <code>b a n a n a</code>, והלולאה פוגשת את <code>'a'</code> שלוש פעמים, ולכן התוצאה 3.</div>
<h3>3. strlen היא אותה לולאה</h3>
<p><code>strlen(s)</code> (מ-<code>string.h</code>) עושה בדיוק מעבר כזה וסופרת את התווים שלפני ה-<code>'\0'</code>. לכן היא עולה זמן שווה לאורך המחרוזת, $O(n)$.</p>
<div class="lesson-trap">⚠️ <code>i &lt;= strlen(s)</code> עושה צעד אחד יותר מדי: הוא מגיע גם אל ה-<code>'\0'</code> עצמו. ו-<code>i &lt; strlen(s)</code> נכון אבל איטי: בכל בדיקת תנאי <code>strlen</code> עוברת שוב על כל המחרוזת, ולכן הלולאה כולה לוקחת $O(n^2)$. אם צריך את האורך, מחשבים אותו פעם אחת לפני הלולאה, או פשוט בודקים <code>s[i] != '\0'</code>.</div>
` },
  questions: [
  {
    "id": "C02-Q1",
    "step": {
      "type": "numeric",
      "prompt": "מה מחזירה הקריאה בשורה האחרונה?\n```c\nint countChar(char *s, char c) {\n    int n = 0;\n    for (int i = 0; s[i] != '\\0'; i++)\n        if (s[i] == c)\n            n++;\n    return n;\n}\n\nint main(void) {\n    printf(\"%d\", countChar(\"mississippi\", 's'));\n    return 0;\n}\n```",
      "answer": 4,
      "tol": 0,
      "explain": "במילה `mississippi` האות `s` מופיעה פעמיים ב-`ss` הראשון ופעמיים ב-`ss` השני: ארבע פעמים."
    },
    "recap": "ספירה: מונה שעולה בכל תו מתאים"
  },
  {
    "id": "C02-Q2",
    "step": {
      "type": "order",
      "prompt": "סדרו את שורות הפונקציה שמחשבת אורך מחרוזת בלי `strlen`.",
      "code": true,
      "lines": [
        "int myStrlen(char *s) {\n    int len = 0;",
        "    while (s[len] != '\\0')\n        len++;",
        "    return len;\n}"
      ],
      "explain": "קודם מאפסים את המונה, אחר כך הלולאה מקדמת אותו עד ה-`'\\0'`, ורק בסוף מחזירים. החזרה לפני הלולאה הייתה מחזירה 0, והלולאה לפני ההצהרה לא הייתה מתקמפלת."
    },
    "recap": "אורך = מונה שמתקדם עד '\\0'"
  },
  {
    "id": "C02-Q3",
    "step": {
      "type": "findbug",
      "prompt": "הפונקציה אמורה לספור רווחים במחרוזת, אבל שורה אחת שונה והיא מחזירה תוצאה שגויה (למשל על `\"a b c\"`). איזו שורה?",
      "code": true,
      "lines": [
        "int countSpaces(char *s) {",
        "    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (s[i] = ' ')",
        "            n++;",
        "    return n;",
        "}"
      ],
      "bugIndex": 3,
      "explain": "`=` היא השמה ולא השוואה: היא שמה רווח בתא `s[i]` והתוצאה (קוד הרווח, שאינו 0) נחשבת אמת, כך שכל תו נספר, והמחרוזת גם נהרסת. על `\"a b c\"` מתקבל 5 במקום 2. הנכון הוא `s[i] == ' '`."
    },
    "recap": "השוואה היא ==, לא ="
  },
  {
    "id": "C02-Q4",
    "question": "מה מדפיס הקוד? (אחרי כל מספר יש רווח)\n```c\nchar s[] = \"abc\";\nfor (int i = 0; i <= (int)strlen(s); i++)\n    printf(\"%d \", s[i]);\n```",
    "options": [
      {
        "id": "a",
        "value": "`97 98 99`"
      },
      {
        "id": "b",
        "value": "`97 98 99 0`"
      },
      {
        "id": "c",
        "value": "`0 97 98 99`"
      },
      {
        "id": "d",
        "value": "`97 98 99 4`"
      }
    ],
    "correctId": "b",
    "explanation": "התנאי `i <= strlen(s)` כולל גם את `i == 3`, כלומר את התא של ה-`'\\0'`, שערכו 0. לכן מודפסים ארבעה מספרים: הקודים 97, 98, 99 ובסוף 0. הלולאה הנכונה היא עם `<`, או עם התנאי `s[i] != '\\0'`.",
    "recap": "<= strlen מגיע גם אל ה-'\\0'"
  },
  {
    "id": "C02-Q5",
    "step": {
      "type": "text",
      "prompt": "מהי סיבוכיות הזמן של הפונקציה כשאורך המחרוזת הוא n? (למשל `O(n)`)\n```c\nint count(char *s) {\n    int n = 0;\n    for (int i = 0; i < strlen(s); i++)\n        n++;\n    return n;\n}\n```",
      "accept": [
        "O(n²)",
        "O(n^2)"
      ],
      "normalize": "complexity",
      "explain": "בכל בדיקת תנאי `strlen(s)` עוברת על כל המחרוזת, n צעדים. הבדיקה נעשית כ-n פעמים, ולכן סך הכל כ-$n \\cdot n$ צעדים: $O(n^2)$. פתרון: לחשב את האורך פעם אחת לפני הלולאה, או לבדוק `s[i] != '\\0'`."
    },
    "recap": "strlen בתנאי לולאה = O(n²)"
  }
],
});
