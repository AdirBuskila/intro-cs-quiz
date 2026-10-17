/* matrices course, level 4 - the two diagonals */
COURSE_LEVEL("matrices", {
  id: "C04", order: 4, icon: "↘️", title: "האלכסון הראשי והמשני", boss: false,
  goal: "לגשת לאלכסון הראשי ולמשני בלולאה אחת, ולזהות לפי התנאי אם תא נמצא על אלכסון.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>במטריצה ריבועית <code>N x N</code> יש שני אלכסונים:</p>
<ul>
<li><b>האלכסון הראשי</b> (מהפינה השמאלית-עליונה לימנית-תחתונה): התאים עם <code>i == j</code>, כלומר <code>a[0][0], a[1][1], ...</code>.</li>
<li><b>האלכסון המשני</b> (מהפינה הימנית-עליונה לשמאלית-תחתונה): התאים עם <code>i + j == N - 1</code>. בשורה <code>i</code> זה התא <code>a[i][N-1-i]</code>.</li>
</ul>
<div class="lesson-rule">🔑 מספיקה לולאה אחת על <code>i</code>: האלכסון הראשי הוא <code>a[i][i]</code> והמשני הוא <code>a[i][N-1-i]</code>.</div>
<pre class="code-block">int d1 = 0, d2 = 0;
for (int i = 0; i &lt; N; i++) {
    d1 += a[i][i];
    d2 += a[i][N - 1 - i];
}</pre>
<div class="lesson-ex"><b>דוגמה:</b> ב-<code>N = 3</code> האלכסון המשני הוא <code>a[0][2], a[1][1], a[2][0]</code>. בכל תא הסכום <code>i + j</code> הוא 2, שהוא <code>N - 1</code>.</div>
<div class="lesson-trap">⚠️ <code>N - i</code> במקום <code>N - 1 - i</code>: בשורה 0 זה <code>a[0][N]</code>, תא שכבר מחוץ למטריצה. תמיד מחסירים 1.</div>
<p>במטריצה בגודל אי-זוגי שני האלכסונים נפגשים בתא האמצעי, והוא נספר בכל אחד מהם.</p>
` },
  questions: [
    { id: "C04-Q1",
      step: { type: "numeric",
        prompt: "מה ידפיס הקוד?\n```c\nint e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i < 4; i++)\n    s += e[i][i];\nprintf(\"%d\", s);\n```",
        answer: 20, tol: 0,
        explain: "האלכסון הראשי הוא `e[0][0], e[1][1], e[2][2], e[3][3]`, כלומר $2+4+9+5=20$." },
      recap: "אלכסון ראשי: a[i][i]" },
    { id: "C04-Q2",
      step: { type: "numeric",
        prompt: "באותה מטריצה:\n```c\nint e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i < 4; i++)\n    s += e[i][3 - i];\nprintf(\"%d\", s);\n```\nמה יודפס?",
        answer: 12, tol: 0,
        explain: "האלכסון המשני הוא `e[0][3], e[1][2], e[2][1], e[3][0]`, כלומר $1+1+2+8=12$." },
      recap: "אלכסון משני: a[i][N-1-i]" },
    { id: "C04-Q3",
      question: "בלולאה אחת שבה `i` רץ מ-0 עד `N-1`, איזה ביטוי ניגש לתא של **האלכסון המשני** בשורה `i` ?",
      options: [{ id: "a", value: "`a[i][N-i]`" }, { id: "b", value: "`a[i][N-1]`" }, { id: "c", value: "`a[N-1-i][N-1-i]`" }, { id: "d", value: "`a[i][N-1-i]`" }],
      correctId: "d",
      explanation: "בשורה `i` העמודה של האלכסון המשני היא `N-1-i`, כך ש-`i + j = N-1`. `a[i][N-i]` חורג מהמטריצה כבר ב-`i = 0`. `a[i][N-1]` הוא העמודה האחרונה, לא אלכסון. `a[N-1-i][N-1-i]` רץ על האלכסון הראשי (בסדר הפוך).",
      recap: "j = N-1-i" },
    { id: "C04-Q4",
      question: "איזה תנאי נכון לתא `(i, j)` שנמצא על **האלכסון המשני** של מטריצה `N x N` ?",
      options: [{ id: "a", value: "`i + j == N`" }, { id: "b", value: "`i - j == N - 1`" }, { id: "c", value: "`i * j == N - 1`" }, { id: "d", value: "`i + j == N - 1`" }],
      correctId: "d",
      explanation: "בכל תא של האלכסון המשני סכום האינדקסים קבוע, `N-1`: `(0, N-1)`, `(1, N-2)`, ... `i + j == N` הוא אלכסון שמוסט באחד, ובמטריצה 3x3 הוא תופס את `(1, 2)` ו-`(2, 1)` במקום את האלכסון המשני. `i - j == N - 1` מתקיים רק בפינה השמאלית-תחתונה. `i * j == N - 1` תופס תאים שגויים, למשל ב-`N = 4` את `(1, 3)` ו-`(3, 1)`.",
      recap: "אלכסון משני: i + j == N - 1" },
    { id: "C04-Q5",
      step: { type: "fillblank", code: true,
        prompt: "הפונקציה בודקת אם סכום האלכסון הראשי שווה לסכום המשני. מה צריך להיכנס במקום החסר?",
        lines: [
          "int sameDiagonals(int a[][N]) {",
          "    int d1 = 0, d2 = 0;",
          "    for (int i = 0; i < N; i++) {",
          "        d1 += a[i][i];",
          "        d2 += a[i][___];",
          "    }",
          "    return d1 == d2;",
          "}"],
        blankIndex: 4,
        options: [{ id: "a", value: "N - i" }, { id: "b", value: "N - 1" }, { id: "c", value: "i" }, { id: "d", value: "N - 1 - i" }],
        correctId: "d",
        explain: "העמודה של האלכסון המשני בשורה `i` היא `N - 1 - i`. עם `N - i` יש חריגה מהמטריצה בשורה 0. עם `N - 1` מקבלים את העמודה האחרונה. עם `i` שני הסכומים תמיד שווים, והפונקציה מחזירה 1 גם כשהאלכסונים שונים." },
      recap: "אלכסון משני: a[i][N-1-i]" },
  ],
});
