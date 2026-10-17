/* matrices course, level 2 - visiting every cell with nested loops */
COURSE_LEVEL("matrices", {
  id: "C02", order: 2, icon: "🔁", title: "לעבור על כל התאים", boss: false,
  goal: "לעבור על כל תאי המטריצה בשתי לולאות מקוננות, ולחשב סכום, ספירה ומקסימום.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>כדי לטפל בכל תא במטריצה <code>R x C</code> משתמשים בשתי לולאות מקוננות: החיצונית עוברת על השורות, הפנימית על העמודות.</p>
<pre class="code-block">for (int i = 0; i &lt; R; i++)
    for (int j = 0; j &lt; C; j++)
        /* כאן עובדים עם a[i][j] */</pre>
<p>הלולאה החיצונית מקבלת ערך אחד של <code>i</code>, והפנימית רצה על כל ה-<code>j</code> שלה. לכן התאים מתקבלים <b>שורה אחרי שורה</b>, והגוף רץ <code>R * C</code> פעמים. אם מחליפים את סדר הלולאות (העמודות בחוץ), הסריקה היא עמודה אחרי עמודה.</p>
<div class="lesson-rule">🔑 הלולאה על <code>i</code> נעצרת ב-<code>R</code> (שורות) והלולאה על <code>j</code> נעצרת ב-<code>C</code> (עמודות). במטריצה שאינה ריבועית, אם מחליפים ביניהן מפספסים תאים או חורגים מהמטריצה.</div>
<h3>שלוש תבניות</h3>
<ul>
<li><b>סכום:</b> <code>s = 0</code> לפני הלולאות, ובתוכן <code>s += a[i][j]</code>.</li>
<li><b>ספירה:</b> <code>count = 0</code>, ובתוכן <code>if (תנאי) count++</code>.</li>
<li><b>מקסימום:</b> מאתחלים <code>max = a[0][0]</code> (תא אמיתי מהמטריצה) ובתוכן <code>if (a[i][j] &gt; max) max = a[i][j]</code>.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> כמה תאים זוגיים יש ב-<code>{{1,2},{3,4}}</code>? הלולאות עוברות על 1, 2, 3, 4. התנאי <code>a[i][j] % 2 == 0</code> נכון ל-2 ול-4, ולכן התוצאה 2.</div>
<div class="lesson-trap">⚠️ אתחול המקסימום ב-<code>0</code> שגוי כשכל המספרים שליליים: המקסימום יישאר 0, ערך שאינו במטריצה בכלל. מתחילים מתא אמיתי.</div>
` },
  questions: [
    { id: "C02-Q1",
      step: { type: "numeric",
        prompt: "מה ידפיס הקוד?\n```c\nint a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint s = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        s += a[i][j];\nprintf(\"%d\", s);\n```",
        answer: 46, tol: 0,
        explain: "מחברים את כל תשעת התאים: $3+8+1+6+2+9+4+7+6=46$." },
      recap: "סכום: s = 0 ואז s += a[i][j] בתוך שתי הלולאות" },
    { id: "C02-Q2",
      step: { type: "numeric",
        prompt: "מה ידפיס הקוד?\n```c\nint a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint count = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        if (a[i][j] > 4)\n            count++;\nprintf(\"%d\", count);\n```",
        answer: 5, tol: 0,
        explain: "התאים הגדולים מ-4 הם 8, 6, 9, 7, 6, כלומר 5 תאים. הערכים 3, 1, 2 ו-4 אינם גדולים מ-4 (4 עצמו לא, כי התנאי הוא גדול ממש)." },
      recap: "ספירה: count++ רק כשהתנאי מתקיים" },
    { id: "C02-Q3",
      question: "מה ידפיס הקוד? (הפלט בלי רווחים)\n```c\nint a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nfor (int j = 0; j < 3; j++)\n    for (int i = 0; i < 2; i++)\n        printf(\"%d\", a[i][j]);\n```",
      options: [{ id: "a", value: "123456" }, { id: "b", value: "321654" }, { id: "c", value: "142536" }, { id: "d", value: "1245" }],
      correctId: "c",
      explanation: "כאן הלולאה החיצונית רצה על העמודות, ולכן הסריקה היא עמודה אחרי עמודה: עמודה 0 היא 1 ו-4, עמודה 1 היא 2 ו-5, עמודה 2 היא 3 ו-6, והפלט **142536**. 123456 היה הפלט עם הסדר הרגיל (שורה אחרי שורה). 321654 היה יוצא אילו `j` רץ אחורה. 1245 היה יוצא אילו עברו שורה אחרי שורה אבל רק על שתי העמודות הראשונות.",
      recap: "עמודות בלולאה החיצונית נותנות סריקה עמודה אחרי עמודה" },
    { id: "C02-Q4",
      question: "רוצים למצוא את הערך **המקסימלי** במטריצה `a[R][C]`, שיכולה להכיל גם מספרים שליליים בלבד. איזה אתחול של `max` נכון לפני הלולאות?",
      options: [{ id: "a", value: "`int max = 0;`" }, { id: "b", value: "`int max = a[0][0];`" }, { id: "c", value: "`int max = -1;`" }, { id: "d", value: "`int max = INT_MAX;`" }],
      correctId: "b",
      explanation: "מאתחלים בתא אמיתי של המטריצה, `a[0][0]`. עם `0` או `-1` מטריצה כמו `{{-5,-3},{-9,-4}}` מחזירה 0 או -1 במקום -3. עם `INT_MAX` אף תא לא גדול ממנו, והתוצאה תמיד `INT_MAX`.",
      recap: "מקסימום מאתחלים בתא של המטריצה, לא ב-0" },
    { id: "C02-Q5",
      step: { type: "findbug", code: true,
        prompt: "הפונקציה אמורה לספור כמה תאים חיוביים יש במטריצה `ROWS x COLS`. מצאו את השורה השגויה.",
        lines: [
          "#define ROWS 2",
          "#define COLS 3",
          "int countPositive(int a[ROWS][COLS]) {",
          "    int count = 0;",
          "    for (int i = 0; i < ROWS; i++)",
          "        for (int j = 0; j < ROWS; j++)",
          "            if (a[i][j] > 0)",
          "                count++;",
          "    return count;",
          "}"],
        bugIndex: 5,
        explain: "הלולאה הפנימית צריכה לרוץ על העמודות, `j < COLS`. עם `j < ROWS` היא מפספסת את העמודה האחרונה: על `{{1,2,3},{4,5,6}}` הפונקציה מחזירה 4 במקום 6." },
      recap: "i עד ROWS, j עד COLS" },
  ],
});
