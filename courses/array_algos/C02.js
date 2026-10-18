/* array_algos, level 2 - nested loops, halving loops, adding vs multiplying */
const CB = (...l) => ["```c", ...l, "```"].join("\n");
COURSE_LEVEL("array_algos", {
  id: "C02", order: 2, icon: "🪆", title: "לולאות מקוננות ולולאות שמחצות",
  goal: "לחשב סדר גודל של לולאה בתוך לולאה, של לולאה שמכפילה את המונה, ושל שילוב ביניהן.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>שלושה כללים מספיקים כמעט לכל שאלת סדר גודל במבחן:</p>
<ul>
<li><b>לולאה בתוך לולאה: מכפילים.</b> החיצונית רצה $n$ פעמים, ובכל פעם הפנימית רצה $n$ פעמים, לכן $n\cdot n=n^2$.</li>
<li><b>לולאות זו אחר זו: מחברים,</b> והגדול מנצח: $n^2+n$ הוא $O(n^2)$.</li>
<li><b>מונה שמוכפל בכל צעד</b> (<code>i *= 2</code>) מגיע ל-$n$ אחרי בערך $\log_2 n$ צעדים. למשל מ-1 עד 1024: 1, 2, 4, ..., 512, כלומר 10 איטרציות.</li>
</ul>
<table>
<thead><tr><th>קוד</th><th>איטרציות</th><th>סדר גודל</th></tr></thead>
<tbody>
<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;n</code></td><td>$n^2$</td><td>$O(n^2)$</td></tr>
<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;i</code></td><td>$0+1+\dots+(n-1)=\frac{n(n-1)}{2}$</td><td>$O(n^2)$</td></tr>
<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;5</code></td><td>$5n$</td><td>$O(n)$</td></tr>
<tr><td><code>for (i = 1; i &lt; n; i *= 2)</code></td><td>בערך $\log_2 n$</td><td>$O(\log n)$</td></tr>
</tbody></table>
<div class="lesson-rule">🔑 לפני שמכפילים, שואלים: <b>עד כמה גדולה הלולאה הפנימית?</b> אם היא רצה עד קבוע, היא רק קבוע. אם היא רצה עד $n$ או עד $i$, זה $n^2$. אם היא תלויה ב-$i$, סוכמים: $0+1+2+\dots+(n-1)$ הוא חצי $n^2$, ושוב $O(n^2)$.</div>
<div class="lesson-ex"><b>דוגמה:</b> עבור $n=10$ בלולאה עם <code>j &lt; i</code> מתקבל $0+1+\dots+9=45$ איטרציות, וזה בדיוק $\frac{10\cdot 9}{2}$.</div>
<div class="lesson-trap">⚠️ סדר הגודל נקבע לפי <b>מספר הפעמים</b> שהגוף רץ, לא לפי מספר השורות או הסוגריים. שתי לולאות מקוננות שבהן הפנימית רצה פעם אחת בלבד הן בכלל $O(n)$.</div>
` },
  questions: [
    { id: "C02-Q1",
      step: { type: "numeric",
        prompt: "כמה פעמים מתבצעת `count++`, עבור `n = 10`?\n" + CB("int count = 0;", "void f(int n)", "{", "    int i, j;", "    for (i = 0; i < n; i++)", "        for (j = 0; j < i; j++)", "            count++;", "}"),
        answer: 45, tol: 0,
        explain: "עבור $i=0,1,\\ldots,9$ הלולאה הפנימית רצה $i$ פעמים: $0+1+\\dots+9=45$ (נבדק בהרצה). זה $\\frac{n(n-1)}{2}$." },
      recap: "פנימית עד $i$: סכום $0+1+\\dots+(n-1)$, חצי $n^2$." },
    { id: "C02-Q2",
      step: { type: "text",
        prompt: "מה סדר הגודל של הפונקציה מהשאלה הקודמת (לולאה חיצונית עד `n`, פנימית עד `i`)? (למשל `O(n)`)",
        accept: ["O(n^2)"], normalize: "complexity",
        explain: "$\\frac{n(n-1)}{2}$ איטרציות. הקבוע $\\frac12$ והאיבר הקטן נופלים: `O(n^2)`. נמדד: כשמכפילים את $n$ פי 2 מספר האיטרציות גדל פי ~4 (ל-$n=1000$: 499500, ל-$n=2000$: 1999000)." },
      recap: "חצי $n^2$ הוא עדיין `O(n^2)`." },
    { id: "C02-Q3",
      step: { type: "numeric",
        prompt: "כמה פעמים מתבצעת `count++`, עבור `n = 1024`?\n" + CB("int count = 0;", "void f(int n)", "{", "    int i;", "    for (i = 1; i < n; i *= 2)", "        count++;", "}"),
        answer: 10, tol: 0,
        explain: "$i$ מקבל 1, 2, 4, ..., 512 (הערך 1024 כבר לא עומד ב-`i < n`): עשרה ערכים, כלומר $\\log_2 1024=10$ (נבדק בהרצה)." },
      recap: "מכפילים את המונה: בערך $\\log_2 n$ איטרציות." },
    { id: "C02-Q4",
      question: "מה סדר הגודל של הפונקציה?\n" + CB("void f(int* a, int n)", "{", "    int i, j;", "    for (i = 0; i < n; i++)", "        for (j = 0; j < 5; j++)", "            a[i] += j;", "}"),
      options: [{ id: "a", value: "`O(n)`" }, { id: "b", value: "`O(n^2)`" }, { id: "c", value: "`O(n log n)`" }, { id: "d", value: "`O(log n)`" }],
      correctId: "a",
      explanation: "הפנימית רצה תמיד 5 פעמים, ולכן סך הכול $5n$ איטרציות (נמדד: 5000 עבור $n=1000$ ו-10000 עבור $n=2000$, פי 2). זה לא `O(n^2)` כי הפנימית לא תלויה ב-$n$.",
      recap: "לולאה פנימית עד קבוע = רק קבוע." },
    { id: "C02-Q5",
      question: "מה סדר הגודל של הפונקציה?\n" + CB("void f(int n)", "{", "    int i, j, k;", "    for (i = 0; i < n; i++)", "        for (j = 0; j < n; j++)", "            count++;", "    for (k = 0; k < n; k++)", "        count++;", "}"),
      options: [{ id: "a", value: "`O(n)`" }, { id: "b", value: "`O(n^2)`" }, { id: "c", value: "`O(n^3)`" }, { id: "d", value: "`O(n log n)`" }],
      correctId: "b",
      explanation: "$n^2+n$ איטרציות (נמדד: 420 עבור $n=20$). האיבר הגדול מנצח ו-$n$ נופל: `O(n^2)`. זה לא `O(n^3)`: הלולאה האחרונה מתווספת ולא מוכפלת. וזה גם לא `O(n log n)`: בהכפלת $n$ פי 2 מספר האיטרציות גדל פי 4 ולא פי ~2.2.",
      recap: "חיבור: האיבר הגדול מנצח." },
  ],
});
