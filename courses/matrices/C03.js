/* matrices course, level 3 - a single row or a single column: sums and comparisons */
COURSE_LEVEL("matrices", {
  id: "C03", order: 3, icon: "➡️", title: "סכום שורה וסכום עמודה", boss: false,
  goal: "לחשב סכום של שורה אחת או עמודה אחת, ולהשוות בין השורות בעזרת סכום ייחוס.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>לפעמים צריך רק שורה אחת או עמודה אחת, ואז לא צריך שתי לולאות: מקבעים אינדקס אחד ורק השני רץ.</p>
<div class="lesson-formula">סכום שורה i: <code>a[i][k]</code> עבור k = 0, 1, ...  &nbsp;|&nbsp; סכום עמודה j: <code>a[k][j]</code> עבור k = 0, 1, ...</div>
<pre class="code-block">int rowSum = 0, colSum = 0;
for (int k = 0; k &lt; N; k++) {
    rowSum += a[i][k];   /* i קבוע, העמודה זזה */
    colSum += a[k][j];   /* j קבוע, השורה זזה */
}</pre>
<div class="lesson-rule">🔑 בשורה האינדקס הראשון קבוע. בעמודה האינדקס השני קבוע. זה האינדקס שזז שמכריע.</div>
<h3>להשוות בין שורות: סכום ייחוס</h3>
<p>כדי לבדוק "האם לכל השורות אותו סכום" מחשבים את הסכום של שורה 0 פעם אחת, ומשווים אליו כל שורה אחרת. אם אחת שונה מחזירים 0 מיד; אם סיימנו את כל השורות מחזירים 1.</p>
<pre class="code-block">int equalRows(int a[][N]) {
    int ref = 0;
    for (int j = 0; j &lt; N; j++) ref += a[0][j];
    for (int i = 1; i &lt; N; i++) {
        int s = 0;
        for (int j = 0; j &lt; N; j++) s += a[i][j];
        if (s != ref) return 0;
    }
    return 1;
}</pre>
<div class="lesson-ex"><b>דוגמה:</b> ב-<code>{{1,2,3},{4,1,1},{0,3,3}}</code> הייחוס הוא 6, שורה 1 נותנת 6, שורה 2 נותנת 6, ולכן התוצאה 1.</div>
<div class="lesson-trap">⚠️ הסכום <code>s</code> מתאפס <b>בתוך</b> הלולאה החיצונית, בכל שורה מחדש. אם מאפסים אותו מבחוץ הסכומים מצטברים משורה לשורה.</div>
<h3>סדר גודל</h3>
<p>הקוד נוגע בכל תא פעם אחת, ולכן הזמן הוא מספר התאים: במטריצה <code>N x N</code> זה $O(N^2)$.</p>
` },
  questions: [
    { id: "C03-Q1",
      step: { type: "numeric",
        prompt: "מה ידפיס הקוד?\n```c\nint a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint s = 0;\nfor (int k = 0; k < 3; k++)\n    s += a[k][2];\nprintf(\"%d\", s);\n```",
        answer: 6, tol: 0,
        explain: "האינדקס השני קבוע (2), ולכן זו עמודה 2: $2+3+1=6$. שימו לב שהמטריצה אינה סימטרית: סכום שורה 2 הוא 11, ולא 6." },
      recap: "עמודה j: a[k][j], כשהשורה k זזה" },
    { id: "C03-Q2",
      step: { type: "fillblank", code: true,
        prompt: "הפונקציה מחזירה את סכום עמודה `j` של מטריצה `N x N`. מה צריך להיכנס במקום החסר?",
        lines: [
          "int colSum(int a[][N], int j) {",
          "    int s = 0;",
          "    for (int k = 0; k < N; k++)",
          "        s += ___;",
          "    return s;",
          "}"],
        blankIndex: 3,
        options: [{ id: "a", value: "a[j][k]" }, { id: "b", value: "a[k][j]" }, { id: "c", value: "a[k][k]" }, { id: "d", value: "a[k][0]" }],
        correctId: "b",
        explain: "בעמודה `j` האינדקס השני קבוע והשורה `k` זזה: `a[k][j]`. `a[j][k]` הוא סכום **שורה** `j`. `a[k][k]` הוא האלכסון. `a[k][0]` הוא תמיד עמודה 0." },
      recap: "מה שקבוע הוא האינדקס שלא זז" },
    { id: "C03-Q3",
      question: "מה ידפיס הקוד?\n```c\nint a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint best = 0, bestSum = -1;\nfor (int i = 0; i < 3; i++) {\n    int s = 0;\n    for (int j = 0; j < 3; j++)\n        s += a[i][j];\n    if (s > bestSum) {\n        bestSum = s;\n        best = i;\n    }\n}\nprintf(\"%d\", best);\n```",
      options: [{ id: "a", value: "11" }, { id: "b", value: "0" }, { id: "c", value: "2" }, { id: "d", value: "1" }],
      correctId: "c",
      explanation: "סכומי השורות הם 7, 9, 11, והגדול ביותר הוא בשורה **2**. הקוד מדפיס את האינדקס של השורה, לא את הסכום: 11 הוא `bestSum`. 0 הוא הערך ההתחלתי של `best`, ו-1 הוא השורה עם הסכום האמצעי 9.",
      recap: "שומרים גם את הסכום הטוב ביותר וגם את האינדקס שלו" },
    { id: "C03-Q4",
      step: { type: "findbug", code: true,
        prompt: "הפונקציה אמורה להחזיר 1 אם לכל השורות אותו סכום, ו-0 אחרת. מצאו את השורה השגויה.",
        lines: [
          "int equalRows(int a[][N]) {",
          "    int ref = 0;",
          "    for (int j = 0; j < N; j++)",
          "        ref += a[j][0];",
          "    for (int i = 1; i < N; i++) {",
          "        int s = 0;",
          "        for (int j = 0; j < N; j++)",
          "            s += a[i][j];",
          "        if (s != ref)",
          "            return 0;",
          "    }",
          "    return 1;",
          "}"],
        bugIndex: 3,
        explain: "סכום הייחוס צריך להיות סכום **שורה** 0, כלומר `a[0][j]`. השורה `a[j][0]` סוכמת את עמודה 0. על `{{1,2,3},{4,1,1},{0,3,3}}` כל השורות שוות (6), אבל עמודה 0 נותנת 5, ולכן הפונקציה השגויה מחזירה 0 במקום 1." },
      recap: "ייחוס = סכום שורה 0, כלומר a[0][j]" },
    { id: "C03-Q5",
      step: { type: "text", normalize: "complexity",
        prompt: "מה סיבוכיות הזמן של `equalRows` על מטריצה `N x N`? (כתבו בצורה `O(...)`)",
        accept: ["O(N²)", "O(N^2)", "O(N*N)", "O(n^2)", "O(n*n)"],
        explain: "הפונקציה נוגעת בכל תא פעם אחת (ובשורה 0 עוד פעם): בערך $N^2$ פעולות, כלומר $O(N^2)$. זה לינארי במספר התאים, אבל ריבועי ב-$N$." },
      recap: "מעבר על כל התאים במטריצה N x N: O(N²)" },
  ],
});
