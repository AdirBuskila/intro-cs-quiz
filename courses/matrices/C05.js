/* matrices course, level 5 - passing a matrix to a function, non-square matrices */
COURSE_LEVEL("matrices", {
  id: "C05", order: 5, icon: "📤", title: "מטריצה כפרמטר לפונקציה", boss: false,
  goal: "לכתוב חתימה נכונה לפונקציה שמקבלת מטריצה, להבין למה חייבים לציין את מספר העמודות, ולזכור שהפונקציה משנה את המטריצה המקורית.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>כשמעבירים מטריצה לפונקציה כותבים את מספר העמודות בחתימה, ואת מספר השורות מעבירים כפרמטר נפרד:</p>
<pre class="code-block">int sumAll(int m[][7], int rows);   /* מטריצה עם 7 עמודות */
...
int g[5][7];
sumAll(g, 5);</pre>
<div class="lesson-rule">🔑 את מספר השורות אפשר להשמיט מהחתימה, את מספר העמודות <b>אי אפשר</b>. חתימות כמו <code>int m[][]</code> או <code>int m[5][]</code> לא מתקמפלות.</div>
<h3>למה חייבים את מספר העמודות</h3>
<p>המטריצה שמורה שורה אחרי שורה כרצף אחד. כדי למצוא את <code>m[i][j]</code> המחשב מדלג על <code>i</code> שורות שלמות ואז <code>j</code> תאים: המקום ברצף הוא <code>i * COLS + j</code>. בלי <code>COLS</code> אי אפשר לדעת כמה תאים בשורה.</p>
<div class="lesson-ex"><b>דוגמה:</b> ב-<code>int a[4][5]</code> התא <code>a[2][3]</code> נמצא במקום <code>2 * 5 + 3 = 13</code> ברצף.</div>
<div class="lesson-trap">⚠️ אם כותבים בחתימה מספר עמודות שונה ממה שבהצהרה, הקוד מתקמפל (לכל היותר עם אזהרה) אבל מחשב כתובות לא נכונות וקורא את התאים הלא נכונים.</div>
<h3>הפונקציה משנה את המקור</h3>
<p>מערכים לא מועתקים בהעברה לפונקציה: הפונקציה מקבלת את המטריצה עצמה. לכן כל <code>m[i][j] = ...</code> בתוך הפונקציה משנה את המטריצה של הקורא.</p>
<h3>מטריצה שאינה ריבועית</h3>
<p>כשמספר השורות שונה ממספר העמודות חשוב לשמור על ההתאמה: <code>i</code> עד מספר השורות ו-<code>j</code> עד מספר העמודות. אם רוצים סכום לכל עמודה שומרים בתוצאה מערך באורך מספר העמודות ומוסיפים <code>out[j] += a[i][j]</code>.</p>
` },
  questions: [
    { id: "C05-Q1",
      question: "מעבירים לפונקציה את המטריצה `int g[5][7];` בקריאה `f(g, 5)`, והפונקציה ניגשת אל `m[1][2]`. איזו חתימה נכונה?",
      options: [{ id: "a", value: "`void f(int m[5][], int cols)`" }, { id: "b", value: "`void f(int m[][], int rows, int cols)`" }, { id: "c", value: "`void f(int m[], int rows, int cols)`" }, { id: "d", value: "`void f(int m[][7], int rows)`" }],
      correctId: "d",
      explanation: "חייבים לציין את מספר העמודות (7) ואפשר להשמיט את מספר השורות: `int m[][7]`. שלוש האחרות לא מתקמפלות: `m[5][]` ו-`m[][]` חסרות את מספר העמודות, ו-`int m[]` היא מערך חד-ממדי ולכן `m[1][2]` לא חוקי עליה.",
      recap: "int m[][COLS], int rows" },
    { id: "C05-Q2",
      step: { type: "numeric",
        prompt: "במטריצה `int a[4][5]`, באיזה מקום (מ-0) ברצף הזיכרון נמצא התא `a[2][3]` ?",
        answer: 13, tol: 0,
        explain: "מדלגים על 2 שורות שלמות של 5 תאים (10 תאים) ועוד 3 תאים בשורה: $2\\cdot 5+3=13$." },
      recap: "מקום ברצף = i * COLS + j" },
    { id: "C05-Q3",
      question: "מה ידפיס הקוד?\n```c\nvoid clearDiag(int m[][3], int rows) {\n    for (int i = 0; i < rows; i++)\n        m[i][i] = 0;\n}\n\nint main() {\n    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    clearDiag(a, 3);\n    int s = 0;\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 3; j++)\n            s += a[i][j];\n    printf(\"%d\", s);\n    return 0;\n}\n```",
      options: [{ id: "a", value: "45" }, { id: "b", value: "30" }, { id: "c", value: "15" }, { id: "d", value: "0" }],
      correctId: "b",
      explanation: "הפונקציה מקבלת את המטריצה המקורית ומאפסת את האלכסון הראשי (1, 5, 9). הסכום הכולל היה 45, אחרי האיפוס הוא $45-15=$ **30**. 45 היה הפלט אילו הפונקציה עבדה על עותק. 15 הוא סכום האלכסון שנמחק. 0 היה אילו כל המטריצה מתאפסת.",
      recap: "פונקציה משנה את המטריצה של הקורא, לא עותק" },
    { id: "C05-Q4",
      step: { type: "fillblank", code: true,
        prompt: "המטריצה מוצהרת `int g[4][6];` והפונקציה נקראת כך: `countPositive(g, 4)`. מה צריך להיכנס בחתימה במקום החסר?",
        lines: [
          "int countPositive(int m[][___], int rows) {",
          "    int c = 0;",
          "    for (int i = 0; i < rows; i++)",
          "        for (int j = 0; j < 6; j++)",
          "            if (m[i][j] > 0)",
          "                c++;",
          "    return c;",
          "}"],
        blankIndex: 0,
        options: [{ id: "a", value: "4" }, { id: "b", value: "6" }, { id: "c", value: "5" }, { id: "d", value: "3" }],
        correctId: "b",
        explain: "מספר העמודות בחתימה חייב להיות זהה לזה שבהצהרה, 6. כל מספר אחר גורם לחישוב מקום שגוי `i * COLS + j`, והפונקציה סופרת תאים לא נכונים: על מטריצה שבה התוצאה הנכונה שונה, כל אחד מהערכים 4, 5 ו-3 מחזיר מספר אחר." },
      recap: "COLS בחתימה = COLS בהצהרה" },
    { id: "C05-Q5",
      question: "מה ידפיס הקוד?\n```c\nint a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nint out[3] = {0, 0, 0};\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        out[j] += a[i][j];\nprintf(\"%d %d %d\", out[0], out[1], out[2]);\n```",
      options: [{ id: "a", value: "6 15 0" }, { id: "b", value: "4 5 6" }, { id: "c", value: "5 7 9" }, { id: "d", value: "21 0 0" }],
      correctId: "c",
      explanation: "`out[j]` צובר את סכום עמודה `j`: $1+4=5$, $2+5=7$, $3+6=9$, ולכן **5 7 9**. 6 15 0 היה הפלט אילו כתבו `out[i] += a[i][j]` (סכומי שורות). 4 5 6 היה הפלט עם `=` במקום `+=` (נשאר רק הערך של השורה האחרונה). 21 0 0 היה הפלט אילו כל התאים נצברו ב-`out[0]`.",
      recap: "out[j] += a[i][j] צובר סכומי עמודות" },
  ],
});
