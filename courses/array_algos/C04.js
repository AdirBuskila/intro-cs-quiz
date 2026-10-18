/* array_algos, level 4 - one pass with a running value (prefix sum) */
const CB = (...l) => ["```c", ...l, "```"].join("\n");
COURSE_LEVEL("array_algos", {
  id: "C04", order: 4, icon: "➡️", title: "מעבר יחיד וסכום רץ",
  goal: "להחליף חישוב חוזר בתוך לולאה במשתנה שמתעדכן תוך כדי מעבר אחד, ולהגיע ל-$O(n)$.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>טעות נפוצה: לחשב מחדש בכל איטרציה משהו שאפשר לעדכן. נניח שמחפשים <b>אינדקס ציר</b>: אינדקס <code>i</code> שבו סכום האיברים משמאלו שווה לסכום האיברים מימינו (<code>a[i]</code> עצמו לא נספר באף צד). אם לכל <code>i</code> מחברים מחדש את שני הצדדים בלולאה, מקבלים לולאה בתוך לולאה: $O(n^2)$.</p>
<p>הפתרון: <b>שני מעברים</b>. מעבר ראשון מחשב את הסכום הכולל <code>total</code>. במעבר שני נושאים משתנה <code>left</code>, סכום האיברים שכבר עברנו. הסכום מימין נגזר בלי לולאה:</p>
<div class="lesson-formula">right = total - left - a[i]</div>
<pre class="code-block">int pivot(int* a, int n)
{
    int i, total = 0, left = 0;
    for (i = 0; i &lt; n; i++) total += a[i];
    for (i = 0; i &lt; n; i++) {
        if (left == total - left - a[i]) return i;
        left += a[i];
    }
    return -1;
}</pre>
<div class="lesson-rule">🔑 <b>סדר הפעולות בתוך הלולאה חשוב.</b> קודם בודקים את <code>i</code> (כש-<code>left</code> עדיין לא כולל את <code>a[i]</code>), ורק אחר כך מוסיפים אותו ל-<code>left</code>. אחרת <code>a[i]</code> היה נספר בצד שמאל.</div>
<div class="lesson-ex"><b>דוגמה:</b> במערך <code>{1,7,3,6,5,6}</code> הסכום הכולל 28. ב-<code>i=3</code>: <code>left = 1+7+3 = 11</code>, ומימין <code>28 - 11 - 6 = 11</code>. שווה, ולכן מחזירים 3. כל אינדקס נבדק ב-$O(1)$ ולכן הכול $O(n)$.</div>
<div class="lesson-trap">⚠️ <code>return -1</code> שייך אחרי הלולאה. אם הוא בתוכה, הפונקציה תחזיר אחרי האיבר הראשון.</div>
` },
  questions: [
    { id: "C04-Q1",
      step: { type: "numeric",
        prompt: "מה מחזירה הפונקציה `pivot` מהשיעור עבור `a = {1,7,3,6,5,6}` (`n = 6`)?",
        answer: 3, tol: 0,
        explain: "סכום כולל 28. עבור `i=3`: `left = 11` ומימין `28 - 11 - 6 = 11`. האינדקסים 0, 1, 2 לא עומדים בתנאי (הרצה: 3)." },
      recap: "ציר: `left == total - left - a[i]`." },
    { id: "C04-Q2",
      step: { type: "numeric",
        prompt: "בפתרון הנאיבי, בכל `i` שני לולאות מחברות את כל האיברים משמאל ומימין ל-`i` (בסך הכול `n-1` חיבורים לכל `i`). כמה חיבורים מתבצעים בסך הכול עבור `n = 20` כשאין ציר, כך שהלולאה החיצונית רצה עד הסוף?",
        answer: 380, tol: 0,
        explain: "$20\\cdot 19=380$ חיבורים (נספר בהרצה של הפתרון הנאיבי). הפתרון עם `left` ו-`total` מבצע בסך הכול 40 צעדים עבור אותו גודל." },
      recap: "חישוב מחדש בכל איטרציה: $n\\cdot n$." },
    { id: "C04-Q3",
      step: { type: "text",
        prompt: "מה סדר הגודל של `pivot` מהשיעור (מעבר לסכום כולל, ומעבר עם `left`)? (למשל `O(n)`)",
        accept: ["O(n)"], normalize: "complexity",
        explain: "שני מעברים, $2n$ צעדים (נמדד: 2000 עבור $n=1000$ ו-4000 עבור $n=2000$). כל איטרציה היא `O(1)`: סכום רץ במקום לולאה פנימית." },
      recap: "סכום רץ = `O(1)` לאיטרציה." },
    { id: "C04-Q4",
      step: { type: "order", code: true,
        prompt: "סדרו את שורות `pivot`. כל שורה היא בלוק, והסדר ביניהם קובע את התוצאה.",
        lines: [
          "int pivot(int* a, int n)",
          "{",
          "    int i, total = 0, left = 0;",
          "    for (i = 0; i < n; i++) total += a[i];",
          "    for (i = 0; i < n; i++) {",
          "        if (left == total - left - a[i]) return i;",
          "        left += a[i];",
          "    }",
          "    return -1;",
          "}",
        ],
        explain: "הגדרות, חישוב `total`, ואז הלולאה: בדיקה לפני עדכון של `left`. `return -1` אחרי הלולאה. נבדק: כל החלפה של שתי שורות סמוכות מחזירה תוצאה שגויה או לא מתקמפלת." },
      recap: "קודם בודקים את `i`, אחר כך מעדכנים את `left`." },
    { id: "C04-Q5",
      step: { type: "findbug", code: true,
        prompt: "בגרסה הבאה של `pivot` שורה אחת שגויה, והפונקציה מחזירה אינדקס לא נכון. מצאו אותה.",
        lines: [
          "int pivot(int* a, int n)",
          "{",
          "    int i, total = 0, left = 0;",
          "    for (i = 0; i < n; i++) total += a[i];",
          "    for (i = 0; i < n; i++) {",
          "        if (left == total - left) return i;",
          "        left += a[i];",
          "    }",
          "    return -1;",
          "}",
        ],
        bugIndex: 5,
        explain: "הסכום מימין חייב להפחית גם את `a[i]` עצמו. בגרסה השגויה `a[i]` נספר בצד ימין. עבור `{1,7,3,6,5,6}` היא מחזירה -1 במקום 3 (הרצה)." },
      recap: "מימין: `total - left - a[i]`." },
  ],
});
