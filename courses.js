window.COURSES = {
 "array_algos": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔢",
    "title": "סופרים איטרציות",
    "goal": "לספור כמה פעמים רץ גוף של לולאה ולקבוע אם זמן הריצה קבוע ($O(1)$) או לינארי ($O(n)$).",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>סיבוכיות זמן</b> עונה על השאלה: כמה פעולות בסיסיות הקוד מבצע כשגודל הקלט הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> (במערך: מספר האיברים). לא מודדים שניות אלא <b>סופרים איטרציות</b>.</p>\n<table>\n<thead><tr><th>קוד</th><th>כמה פעולות</th><th>סדר גודל</th></tr></thead>\n<tbody>\n<tr><td><code>x = a[0] + a[n-1];</code></td><td>קבוע, לא תלוי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span></td></tr>\n<tr><td><code>for (i = 0; i &lt; n; i++)</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איטרציות</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td><code>for (i = 0; i &lt; n; i += 3)</code></td><td>בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n/3</annotation></semantics></math></span> איטרציות</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td>שתי לולאות זו אחר זו, כל אחת על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mi>n</mi><mo>=</mo><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n+n=2n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <b>קבועים לא משנים את סדר הגודל.</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>n</mi><mo>+</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">3n+5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi mathvariant=\"normal\">/</mi><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">n/3</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> הם כולם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>. מה שחשוב הוא איך הכמות גדלה כשמכפילים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> היא לא משתנה, ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> היא מוכפלת פי 2.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b>\n<pre class=\"code-block\">int count_zeros(int* a, int n)\n{\n    int i, c = 0;\n    for (i = 0; i &lt; n; i++)\n        if (a[i] == 0)\n            c++;\n    return c;\n}</pre>\nהלולאה רצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים בכל קלט, בלי קשר לתוכן המערך, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>. עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> זה בדיוק 1000 איטרציות.</div>\n<div class=\"lesson-trap\">⚠️ <b>המקרה הגרוע.</b> כשהשאלה אומרת \"סדר גודל\", מתכוונים לקלט שגורם לקוד לעבוד הכי הרבה. בחיפוש ערך שלא קיים במערך, הלולאה עוברת על כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מה סדר הגודל של זמן הריצה של הפונקציה, כשהערך `x` **לא** קיים במערך?\n```c\nint find(int* a, int n, int x)\n{\n    int i;\n    for (i = 0; i < n; i++)\n        if (a[i] == x)\n            return i;\n    return -1;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`O(1)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(1)</code>"
       },
       {
        "id": "b",
        "value": "`O(n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n)</code>"
       },
       {
        "id": "c",
        "value": "`O(n^2)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n^2)</code>"
       },
       {
        "id": "d",
        "value": "`O(log n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(log n)</code>"
       }
      ],
      "correctId": "b",
      "explanation": "כש-`x` לא במערך הלולאה רצה עד הסוף: $n$ איטרציות (נמדד: 1000 איטרציות עבור $n=1000$ ו-2000 עבור $n=2000$). זה לא `O(1)` כי המספר גדל עם $n$, ולא `O(n^2)` או `O(log n)`, שהיו נותנים בהתאמה מיליון ובערך 10 איטרציות עבור $n=1000$.",
      "recap": "לולאה אחת על המערך = `O(n)`; מקרה גרוע = הערך לא קיים.",
      "questionHtml": "מה סדר הגודל של זמן הריצה של הפונקציה, כשהערך <code class=\"tok\" dir=\"ltr\">x</code> <strong>לא</strong> קיים במערך?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int find(int* a, int n, int x)\n{\n    int i;\n    for (i = 0; i &lt; n; i++)\n        if (a[i] == x)\n            return i;\n    return -1;\n}</code></pre>",
      "explanationHtml": "כש-<code class=\"tok\" dir=\"ltr\">x</code> לא במערך הלולאה רצה עד הסוף: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איטרציות (נמדד: 1000 איטרציות עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> ו-2000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>). זה לא <code class=\"tok\" dir=\"ltr\">O(1)</code> כי המספר גדל עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ולא <code class=\"tok\" dir=\"ltr\">O(n^2)</code> או <code class=\"tok\" dir=\"ltr\">O(log n)</code>, שהיו נותנים בהתאמה מיליון ובערך 10 איטרציות עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>.",
      "recapHtml": "לולאה אחת על המערך = <code class=\"tok\" dir=\"ltr\">O(n)</code>; מקרה גרוע = הערך לא קיים."
     },
     {
      "id": "C01-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה פעמים מתבצעת `count++` בקוד, עבור `n = 30`?\n```c\nint count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 0; i < n; i += 3)\n        count++;\n}\n```",
       "answer": 10,
       "tol": 0,
       "explain": "$i$ מקבל את הערכים 0, 3, 6, ..., 27, כלומר 10 ערכים (הריצה נבדקה בפועל). 30 לא נכלל כי התנאי הוא `i < n`.",
       "promptHtml": "כמה פעמים מתבצעת <code class=\"tok\" dir=\"ltr\">count++</code> בקוד, עבור <code class=\"tok\" dir=\"ltr\">n = 30</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 0; i &lt; n; i += 3)\n        count++;\n}</code></pre>",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> מקבל את הערכים 0, 3, 6, ..., 27, כלומר 10 ערכים (הריצה נבדקה בפועל). 30 לא נכלל כי התנאי הוא <code class=\"tok\" dir=\"ltr\">i &lt; n</code>."
      },
      "recap": "קפיצה של 3 מקטינה את מספר האיטרציות פי 3, אבל זה עדיין `O(n)`.",
      "recapHtml": "קפיצה של 3 מקטינה את מספר האיטרציות פי 3, אבל זה עדיין <code class=\"tok\" dir=\"ltr\">O(n)</code>."
     },
     {
      "id": "C01-Q3",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של הפונקציה? (למשל `O(n)`)\n```c\nint f(int* a, int n)\n{\n    int i, sum = 0, mx = a[0];\n    for (i = 0; i < n; i++)\n        sum += a[i];\n    for (i = 0; i < n; i++)\n        if (a[i] > mx)\n            mx = a[i];\n    return sum + mx;\n}\n```",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "שתי לולאות עוקבות, כל אחת $n$ איטרציות: $2n$ בסך הכול (נמדד: 2000 עבור $n=1000$). קבוע לא משנה, לכן `O(n)`. לולאות עוקבות מחברים, לא מכפילים.",
       "promptHtml": "מה סדר הגודל של הפונקציה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int* a, int n)\n{\n    int i, sum = 0, mx = a[0];\n    for (i = 0; i &lt; n; i++)\n        sum += a[i];\n    for (i = 0; i &lt; n; i++)\n        if (a[i] &gt; mx)\n            mx = a[i];\n    return sum + mx;\n}</code></pre>",
       "explainHtml": "שתי לולאות עוקבות, כל אחת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איטרציות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> בסך הכול (נמדד: 2000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>). קבוע לא משנה, לכן <code class=\"tok\" dir=\"ltr\">O(n)</code>. לולאות עוקבות מחברים, לא מכפילים."
      },
      "recap": "לולאות זו אחר זו: מחברים, והקבוע נופל.",
      "recapHtml": "לולאות זו אחר זו: מחברים, והקבוע נופל."
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה פעמים מתבצעת `count++` בסך הכול, עבור `n = 40`?\n```c\nint count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 0; i < n; i++)\n        count++;\n    for (i = 0; i < n; i += 2)\n        count++;\n}\n```",
       "answer": 60,
       "tol": 0,
       "explain": "הלולאה הראשונה: 40 פעמים. השנייה: $i=0,2,ldots,38$, כלומר 20 פעמים. סך הכול 60 (נבדק בהרצה).",
       "promptHtml": "כמה פעמים מתבצעת <code class=\"tok\" dir=\"ltr\">count++</code> בסך הכול, עבור <code class=\"tok\" dir=\"ltr\">n = 40</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 0; i &lt; n; i++)\n        count++;\n    for (i = 0; i &lt; n; i += 2)\n        count++;\n}</code></pre>",
       "explainHtml": "הלולאה הראשונה: 40 פעמים. השנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mi>l</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>s</mi><mo separator=\"true\">,</mo><mn>38</mn></mrow><annotation encoding=\"application/x-tex\">i=0,2,ldots,38</annotation></semantics></math></span>, כלומר 20 פעמים. סך הכול 60 (נבדק בהרצה)."
      },
      "recap": "סופרים כל לולאה לחוד ומחברים.",
      "recapHtml": "סופרים כל לולאה לחוד ומחברים."
     },
     {
      "id": "C01-Q5",
      "question": "איזו מהפונקציות הבאות רצה ב-`O(1)`, כלומר מספר הפעולות שלה לא גדל כש-`n` גדל?",
      "options": [
       {
        "id": "a",
        "value": "`int f(int* a, int n) { return a[0] + a[n-1]; }`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int f(int* a, int n) { return a[0] + a[n-1]; }</code>"
       },
       {
        "id": "b",
        "value": "`int f(int* a, int n) { int i, s = 0; for (i = 0; i < n; i++) s += a[i]; return s; }`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int f(int* a, int n) { int i, s = 0; for (i = 0; i &lt; n; i++) s += a[i]; return s; }</code>"
       },
       {
        "id": "c",
        "value": "`int f(int* a, int n) { int i, c = 0; for (i = 0; i < n; i++) if (a[i] == 0) c++; return c; }`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int f(int* a, int n) { int i, c = 0; for (i = 0; i &lt; n; i++) if (a[i] == 0) c++; return c; }</code>"
       },
       {
        "id": "d",
        "value": "`int f(int* a, int n) { int i; for (i = 0; i < n; i++) if (a[i] < 0) return 1; return 0; }`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int f(int* a, int n) { int i; for (i = 0; i &lt; n; i++) if (a[i] &lt; 0) return 1; return 0; }</code>"
       }
      ],
      "correctId": "a",
      "explanation": "רק הראשונה מבצעת שתי גישות למערך בכל גודל (נמדד: 2 גישות גם עבור $n=10$ וגם עבור $n=10000$). השנייה והשלישית עוברות על כל המערך. הרביעית עוצרת מוקדם כשמוצאת שלילי, אבל כשאין איבר שלילי היא עוברת על כל $n$ האיברים, ולכן במקרה הגרוע היא `O(n)`.",
      "recap": "גישה לאיבר בודד היא `O(1)`; כל מעבר על המערך הוא `O(n)`.",
      "questionHtml": "איזו מהפונקציות הבאות רצה ב-<code class=\"tok\" dir=\"ltr\">O(1)</code>, כלומר מספר הפעולות שלה לא גדל כש-<code class=\"tok\" dir=\"ltr\">n</code> גדל?",
      "explanationHtml": "רק הראשונה מבצעת שתי גישות למערך בכל גודל (נמדד: 2 גישות גם עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">n=10</annotation></semantics></math></span> וגם עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>10000</mn></mrow><annotation encoding=\"application/x-tex\">n=10000</annotation></semantics></math></span>). השנייה והשלישית עוברות על כל המערך. הרביעית עוצרת מוקדם כשמוצאת שלילי, אבל כשאין איבר שלילי היא עוברת על כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים, ולכן במקרה הגרוע היא <code class=\"tok\" dir=\"ltr\">O(n)</code>.",
      "recapHtml": "גישה לאיבר בודד היא <code class=\"tok\" dir=\"ltr\">O(1)</code>; כל מעבר על המערך הוא <code class=\"tok\" dir=\"ltr\">O(n)</code>."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🪆",
    "title": "לולאות מקוננות ולולאות שמחצות",
    "goal": "לחשב סדר גודל של לולאה בתוך לולאה, של לולאה שמכפילה את המונה, ושל שילוב ביניהן.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>שלושה כללים מספיקים כמעט לכל שאלת סדר גודל במבחן:</p>\n<ul>\n<li><b>לולאה בתוך לולאה: מכפילים.</b> החיצונית רצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים, ובכל פעם הפנימית רצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>⋅</mo><mi>n</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n\\cdot n=n^2</annotation></semantics></math></span>.</li>\n<li><b>לולאות זו אחר זו: מחברים,</b> והגדול מנצח: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n^2+n</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>.</li>\n<li><b>מונה שמוכפל בכל צעד</b> (<code>i *= 2</code>) מגיע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אחרי בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log_2 n</annotation></semantics></math></span> צעדים. למשל מ-1 עד 1024: 1, 2, 4, ..., 512, כלומר 10 איטרציות.</li>\n</ul>\n<table>\n<thead><tr><th>קוד</th><th>איטרציות</th><th>סדר גודל</th></tr></thead>\n<tbody>\n<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;n</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span></td></tr>\n<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;i</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">0+1+\\dots+(n-1)=\\frac{n(n-1)}{2}</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span></td></tr>\n<tr><td><code>for i&lt;n</code> ובתוכה <code>for j&lt;5</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">5n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td><code>for (i = 1; i &lt; n; i *= 2)</code></td><td>בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log_2 n</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 לפני שמכפילים, שואלים: <b>עד כמה גדולה הלולאה הפנימית?</b> אם היא רצה עד קבוע, היא רק קבוע. אם היא רצה עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> או עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>, זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>. אם היא תלויה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>, סוכמים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">0+1+2+\\dots+(n-1)</annotation></semantics></math></span> הוא חצי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>, ושוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">n=10</annotation></semantics></math></span> בלולאה עם <code>j &lt; i</code> מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mn>9</mn><mo>=</mo><mn>45</mn></mrow><annotation encoding=\"application/x-tex\">0+1+\\dots+9=45</annotation></semantics></math></span> איטרציות, וזה בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>10</mn><mo>⋅</mo><mn>9</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{10\\cdot 9}{2}</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ סדר הגודל נקבע לפי <b>מספר הפעמים</b> שהגוף רץ, לא לפי מספר השורות או הסוגריים. שתי לולאות מקוננות שבהן הפנימית רצה פעם אחת בלבד הן בכלל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה פעמים מתבצעת `count++`, עבור `n = 10`?\n```c\nint count = 0;\nvoid f(int n)\n{\n    int i, j;\n    for (i = 0; i < n; i++)\n        for (j = 0; j < i; j++)\n            count++;\n}\n```",
       "answer": 45,
       "tol": 0,
       "explain": "עבור $i=0,1,ldots,9$ הלולאה הפנימית רצה $i$ פעמים: $0+1+dots+9=45$ (נבדק בהרצה). זה $\frac{n(n-1)}{2}$.",
       "promptHtml": "כמה פעמים מתבצעת <code class=\"tok\" dir=\"ltr\">count++</code>, עבור <code class=\"tok\" dir=\"ltr\">n = 10</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count = 0;\nvoid f(int n)\n{\n    int i, j;\n    for (i = 0; i &lt; n; i++)\n        for (j = 0; j &lt; i; j++)\n            count++;\n}</code></pre>",
       "explainHtml": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>l</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>s</mi><mo separator=\"true\">,</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">i=0,1,ldots,9</annotation></semantics></math></span> הלולאה הפנימית רצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> פעמים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mi>d</mi><mi>o</mi><mi>t</mi><mi>s</mi><mo>+</mo><mn>9</mn><mo>=</mo><mn>45</mn></mrow><annotation encoding=\"application/x-tex\">0+1+dots+9=45</annotation></semantics></math></span> (נבדק בהרצה). זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>c</mi><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">rac{n(n-1)}{2}</annotation></semantics></math></span>."
      },
      "recap": "פנימית עד $i$: סכום $0+1+dots+(n-1)$, חצי $n^2$.",
      "recapHtml": "פנימית עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span>: סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>+</mo><mi>d</mi><mi>o</mi><mi>t</mi><mi>s</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">0+1+dots+(n-1)</annotation></semantics></math></span>, חצי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>."
     },
     {
      "id": "C02-Q2",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של הפונקציה מהשאלה הקודמת (לולאה חיצונית עד `n`, פנימית עד `i`)? (למשל `O(n)`)",
       "accept": [
        "O(n^2)"
       ],
       "normalize": "complexity",
       "explain": "$\frac{n(n-1)}{2}$ איטרציות. הקבוע $\frac12$ והאיבר הקטן נופלים: `O(n^2)`. נמדד: כשמכפילים את $n$ פי 2 מספר האיטרציות גדל פי ~4 (ל-$n=1000$: 499500, ל-$n=2000$: 1999000).",
       "promptHtml": "מה סדר הגודל של הפונקציה מהשאלה הקודמת (לולאה חיצונית עד <code class=\"tok\" dir=\"ltr\">n</code>, פנימית עד <code class=\"tok\" dir=\"ltr\">i</code>)? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>c</mi><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">rac{n(n-1)}{2}</annotation></semantics></math></span> איטרציות. הקבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>c</mi><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">rac12</annotation></semantics></math></span> והאיבר הקטן נופלים: <code class=\"tok\" dir=\"ltr\">O(n^2)</code>. נמדד: כשמכפילים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פי 2 מספר האיטרציות גדל פי ~4 (ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>: 499500, ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>: 1999000)."
      },
      "recap": "חצי $n^2$ הוא עדיין `O(n^2)`.",
      "recapHtml": "חצי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span> הוא עדיין <code class=\"tok\" dir=\"ltr\">O(n^2)</code>."
     },
     {
      "id": "C02-Q3",
      "step": {
       "type": "numeric",
       "prompt": "כמה פעמים מתבצעת `count++`, עבור `n = 1024`?\n```c\nint count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 1; i < n; i *= 2)\n        count++;\n}\n```",
       "answer": 10,
       "tol": 0,
       "explain": "$i$ מקבל 1, 2, 4, ..., 512 (הערך 1024 כבר לא עומד ב-`i < n`): עשרה ערכים, כלומר $log_2 1024=10$ (נבדק בהרצה).",
       "promptHtml": "כמה פעמים מתבצעת <code class=\"tok\" dir=\"ltr\">count++</code>, עבור <code class=\"tok\" dir=\"ltr\">n = 1024</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count = 0;\nvoid f(int n)\n{\n    int i;\n    for (i = 1; i &lt; n; i *= 2)\n        count++;\n}</code></pre>",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> מקבל 1, 2, 4, ..., 512 (הערך 1024 כבר לא עומד ב-<code class=\"tok\" dir=\"ltr\">i &lt; n</code>): עשרה ערכים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mn>1024</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">log_2 1024=10</annotation></semantics></math></span> (נבדק בהרצה)."
      },
      "recap": "מכפילים את המונה: בערך $log_2 n$ איטרציות.",
      "recapHtml": "מכפילים את המונה: בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">log_2 n</annotation></semantics></math></span> איטרציות."
     },
     {
      "id": "C02-Q4",
      "question": "מה סדר הגודל של הפונקציה?\n```c\nvoid f(int* a, int n)\n{\n    int i, j;\n    for (i = 0; i < n; i++)\n        for (j = 0; j < 5; j++)\n            a[i] += j;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`O(n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n)</code>"
       },
       {
        "id": "b",
        "value": "`O(n^2)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n^2)</code>"
       },
       {
        "id": "c",
        "value": "`O(n log n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n log n)</code>"
       },
       {
        "id": "d",
        "value": "`O(log n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(log n)</code>"
       }
      ],
      "correctId": "a",
      "explanation": "הפנימית רצה תמיד 5 פעמים, ולכן סך הכול $5n$ איטרציות (נמדד: 5000 עבור $n=1000$ ו-10000 עבור $n=2000$, פי 2). זה לא `O(n^2)` כי הפנימית לא תלויה ב-$n$.",
      "recap": "לולאה פנימית עד קבוע = רק קבוע.",
      "questionHtml": "מה סדר הגודל של הפונקציה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void f(int* a, int n)\n{\n    int i, j;\n    for (i = 0; i &lt; n; i++)\n        for (j = 0; j &lt; 5; j++)\n            a[i] += j;\n}</code></pre>",
      "explanationHtml": "הפנימית רצה תמיד 5 פעמים, ולכן סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">5n</annotation></semantics></math></span> איטרציות (נמדד: 5000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> ו-10000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>, פי 2). זה לא <code class=\"tok\" dir=\"ltr\">O(n^2)</code> כי הפנימית לא תלויה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
      "recapHtml": "לולאה פנימית עד קבוע = רק קבוע."
     },
     {
      "id": "C02-Q5",
      "question": "מה סדר הגודל של הפונקציה?\n```c\nvoid f(int n)\n{\n    int i, j, k;\n    for (i = 0; i < n; i++)\n        for (j = 0; j < n; j++)\n            count++;\n    for (k = 0; k < n; k++)\n        count++;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`O(n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n)</code>"
       },
       {
        "id": "b",
        "value": "`O(n^2)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n^2)</code>"
       },
       {
        "id": "c",
        "value": "`O(n^3)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n^3)</code>"
       },
       {
        "id": "d",
        "value": "`O(n log n)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">O(n log n)</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$n^2+n$ איטרציות (נמדד: 420 עבור $n=20$). האיבר הגדול מנצח ו-$n$ נופל: `O(n^2)`. זה לא `O(n^3)`: הלולאה האחרונה מתווספת ולא מוכפלת. וזה גם לא `O(n log n)`: בהכפלת $n$ פי 2 מספר האיטרציות גדל פי 4 ולא פי ~2.2.",
      "recap": "חיבור: האיבר הגדול מנצח.",
      "questionHtml": "מה סדר הגודל של הפונקציה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void f(int n)\n{\n    int i, j, k;\n    for (i = 0; i &lt; n; i++)\n        for (j = 0; j &lt; n; j++)\n            count++;\n    for (k = 0; k &lt; n; k++)\n        count++;\n}</code></pre>",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n^2+n</annotation></semantics></math></span> איטרציות (נמדד: 420 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">n=20</annotation></semantics></math></span>). האיבר הגדול מנצח ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> נופל: <code class=\"tok\" dir=\"ltr\">O(n^2)</code>. זה לא <code class=\"tok\" dir=\"ltr\">O(n^3)</code>: הלולאה האחרונה מתווספת ולא מוכפלת. וזה גם לא <code class=\"tok\" dir=\"ltr\">O(n log n)</code>: בהכפלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פי 2 מספר האיטרציות גדל פי 4 ולא פי ~2.2.",
      "recapHtml": "חיבור: האיבר הגדול מנצח."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🧮",
    "title": "מערך ספירה",
    "goal": "לספור שכיחויות במערך עזר בזמן $O(n)$ במקום בלולאה מקוננת, ולהשתמש בזוגיות של שכיחות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>נניח שכל איברי המערך הם מספרים שלמים בתחום <b>קטן וידוע</b>, למשל בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>. במקום לספור כל ערך בלולאה חדשה על המערך (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> ערכים כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>), פותחים <b>מערך ספירה</b> <code>cnt</code>, שבו התא <code>cnt[v]</code> סופר כמה פעמים הערך <code>v</code> הופיע, ועוברים על הקלט פעם אחת:</p>\n<pre class=\"code-block\">int* cnt = (int*)calloc(n, sizeof(int));   /* calloc מאפס את כל התאים */\nfor (i = 0; i &lt; n; i++)\n    cnt[a[i]]++;</pre>\n<p>האיבר <code>a[i]</code> משמש כאינדקס למערך הספירה. עכשיו כל שאלה על שכיחויות היא מעבר על <code>cnt</code>, וגם הוא באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n+n</annotation></semantics></math></span> פעולות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> זמן, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> זיכרון נוסף.</p>\n<div class=\"lesson-rule\">🔑 <b>מתי משתמשים:</b> ערכים בתחום קטן וידוע (<code>0..n-1</code> או <code>0..9</code>) והדרישה היא סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. <b>מתי לא:</b> כשהערכים גדולים ללא גבול, או כשאסור להשתמש במערך עזר.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> במערך <code>{3,1,3,0,1,3}</code> (לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">n=6</annotation></semantics></math></span>) מתקבל <code>cnt = {1,2,0,3,0,0}</code>: הערך 3 מופיע שלוש פעמים, והערך 2 לא מופיע בכלל.</div>\n<h3>זוגיות של שכיחויות</h3>\n<p>מערך הוא <b>פלינדרום</b> אם קריאתו מימין לשמאל זהה לקריאתו משמאל לימין. כדי לסדר איברים לפלינדרום, כל ערך חייב להופיע בשני צדדי האמצע, כלומר <b>בזוגות</b>. ערך עם שכיחות אי-זוגית משאיר איבר בלי בן זוג, ולכן הוא יכול לשבת רק במרכז. במרכז יש מקום לאיבר אחד בלבד.</p>\n<div class=\"lesson-rule\">🔑 אפשר לסדר את איברי המערך מחדש לפלינדרום אם ורק אם <b>לכל היותר ערך אחד</b> מופיע מספר אי-זוגי של פעמים. בודקים זאת עם מערך ספירה ובלולאה שסופרת את התאים האי-זוגיים (<code>cnt[v] % 2 == 1</code>).</div>\n<div class=\"lesson-trap\">⚠️ מערך ספירה צריך להתחיל מאפסים. <code>calloc</code> מאפס, <code>malloc</code> לא. ואם יש ערך מחוץ לתחום, האינדקס יוצא מגבולות המערך.</div>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "step": {
       "type": "numeric",
       "prompt": "אחרי הרצת הלולאה על המערך `a = {3,1,3,0,1,3}` (`n = 6`), מה הערך של `cnt[3]`?\n```c\nfor (i = 0; i < n; i++)\n    cnt[a[i]]++;\n```",
       "answer": 3,
       "tol": 0,
       "explain": "הערך 3 מופיע שלוש פעמים, ולכן `cnt[3]` שווה 3 (הרצת הקוד נתנה `cnt = {1,2,0,3,0,0}`).",
       "promptHtml": "אחרי הרצת הלולאה על המערך <code class=\"tok\" dir=\"ltr\">a = {3,1,3,0,1,3}</code> (<code class=\"tok\" dir=\"ltr\">n = 6</code>), מה הערך של <code class=\"tok\" dir=\"ltr\">cnt[3]</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>for (i = 0; i &lt; n; i++)\n    cnt[a[i]]++;</code></pre>",
       "explainHtml": "הערך 3 מופיע שלוש פעמים, ולכן <code class=\"tok\" dir=\"ltr\">cnt[3]</code> שווה 3 (הרצת הקוד נתנה <code class=\"tok\" dir=\"ltr\">cnt = {1,2,0,3,0,0}</code>)."
      },
      "recap": "`cnt[v]` סופר כמה פעמים הערך `v` הופיע.",
      "recapHtml": "<code class=\"tok\" dir=\"ltr\">cnt[v]</code> סופר כמה פעמים הערך <code class=\"tok\" dir=\"ltr\">v</code> הופיע."
     },
     {
      "id": "C03-Q2",
      "step": {
       "type": "numeric",
       "prompt": "במערך `a = {1,1,5,0,1,1,0}` (`n = 7`, כל הערכים בתחום `0..6`): כמה ערכים שונים מופיעים מספר **אי-זוגי** של פעמים?",
       "answer": 1,
       "tol": 0,
       "explain": "השכיחויות: הערך 0 פעמיים, הערך 1 ארבע פעמים, הערך 5 פעם אחת. רק 5 אי-זוגי, ולכן התשובה 1, וקיים סידור פלינדרומי (חישוב בקוד נתן 1).",
       "promptHtml": "במערך <code class=\"tok\" dir=\"ltr\">a = {1,1,5,0,1,1,0}</code> (<code class=\"tok\" dir=\"ltr\">n = 7</code>, כל הערכים בתחום <code class=\"tok\" dir=\"ltr\">0..6</code>): כמה ערכים שונים מופיעים מספר <strong>אי-זוגי</strong> של פעמים?",
       "explainHtml": "השכיחויות: הערך 0 פעמיים, הערך 1 ארבע פעמים, הערך 5 פעם אחת. רק 5 אי-זוגי, ולכן התשובה 1, וקיים סידור פלינדרומי (חישוב בקוד נתן 1)."
      },
      "recap": "פלינדרום אפשרי כשיש לכל היותר ערך אחד עם שכיחות אי-זוגית.",
      "recapHtml": "פלינדרום אפשרי כשיש לכל היותר ערך אחד עם שכיחות אי-זוגית."
     },
     {
      "id": "C03-Q3",
      "step": {
       "type": "fillblank",
       "code": true,
       "prompt": "הפונקציה סופרת כמה ערכים שונים בתחום `0..n-1` מופיעים במערך. השלימו את השורה החסרה.",
       "lines": [
        "int count_distinct(int* a, int n)",
        "{",
        "    int i, d = 0;",
        "    int* cnt = (int*)calloc(n, sizeof(int));",
        "    for (i = 0; i < n; i++)",
        "        ___;",
        "    for (i = 0; i < n; i++)",
        "        if (cnt[i] > 0)",
        "            d++;",
        "    free(cnt);",
        "    return d;",
        "}"
       ],
       "blankIndex": 5,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "cnt[a[i]]++",
         "html": "cnt[a[i]]++"
        },
        {
         "id": "b",
         "type": "text",
         "value": "cnt[i]++",
         "html": "cnt[i]++"
        },
        {
         "id": "c",
         "type": "text",
         "value": "a[cnt[i]]++",
         "html": "a[cnt[i]]++"
        },
        {
         "id": "d",
         "type": "text",
         "value": "cnt[i] = a[i]",
         "html": "cnt[i] = a[i]"
        }
       ],
       "correctId": "a",
       "explain": "הערך `a[i]` הוא האינדקס במערך הספירה. עם `cnt[i]++` כל תא מקבל 1 בלי קשר לתוכן (עבור `{2,2,2}` מתקבל 3 במקום 1). `a[cnt[i]]++` משנה את הקלט במקום לספור, ו-`cnt[i] = a[i]` שומר ערך במקום שכיחות (עבור `{0,0,0}` מתקבל 0 במקום 1). הרצת ארבע האפשרויות על אותם קלטים אישרה שרק הראשונה נותנת את התוצאה הנכונה בכולם.",
       "promptHtml": "הפונקציה סופרת כמה ערכים שונים בתחום <code class=\"tok\" dir=\"ltr\">0..n-1</code> מופיעים במערך. השלימו את השורה החסרה.",
       "explainHtml": "הערך <code class=\"tok\" dir=\"ltr\">a[i]</code> הוא האינדקס במערך הספירה. עם <code class=\"tok\" dir=\"ltr\">cnt[i]++</code> כל תא מקבל 1 בלי קשר לתוכן (עבור <code class=\"tok\" dir=\"ltr\">{2,2,2}</code> מתקבל 3 במקום 1). <code class=\"tok\" dir=\"ltr\">a[cnt[i]]++</code> משנה את הקלט במקום לספור, ו-<code class=\"tok\" dir=\"ltr\">cnt[i] = a[i]</code> שומר ערך במקום שכיחות (עבור <code class=\"tok\" dir=\"ltr\">{0,0,0}</code> מתקבל 0 במקום 1). הרצת ארבע האפשרויות על אותם קלטים אישרה שרק הראשונה נותנת את התוצאה הנכונה בכולם.",
       "linesHtml": [
        "int count_distinct(int* a, int n)",
        "{",
        "    int i, d = 0;",
        "    int* cnt = (int*)calloc(n, sizeof(int));",
        "    for (i = 0; i &lt; n; i++)",
        "        ___;",
        "    for (i = 0; i &lt; n; i++)",
        "        if (cnt[i] &gt; 0)",
        "            d++;",
        "    free(cnt);",
        "    return d;",
        "}"
       ]
      },
      "recap": "מערך ספירה: `cnt[a[i]]++`.",
      "recapHtml": "מערך ספירה: <code class=\"tok\" dir=\"ltr\">cnt[a[i]]++</code>."
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הפונקציה אמורה להחזיר כמה ערכים בתחום `0..n-1` מופיעים במערך **בדיוק פעם אחת**. שורה אחת שגויה. מצאו אותה.",
       "lines": [
        "int count_once(int* a, int n)",
        "{",
        "    int i, once = 0;",
        "    int* cnt = (int*)calloc(n, sizeof(int));",
        "    for (i = 0; i < n; i++)",
        "        cnt[a[i]]++;",
        "    for (i = 0; i < n; i++)",
        "        if (cnt[i] >= 1)",
        "            once++;",
        "    free(cnt);",
        "    return once;",
        "}"
       ],
       "bugIndex": 7,
       "explain": "התנאי `cnt[i] >= 1` סופר כל ערך שהופיע, ולא רק את אלה שהופיעו פעם אחת. עבור `{1,1,0}` הפונקציה המתוקנת (`== 1`) מחזירה 1, והשגויה מחזירה 2 (הרצה).",
       "promptHtml": "הפונקציה אמורה להחזיר כמה ערכים בתחום <code class=\"tok\" dir=\"ltr\">0..n-1</code> מופיעים במערך <strong>בדיוק פעם אחת</strong>. שורה אחת שגויה. מצאו אותה.",
       "explainHtml": "התנאי <code class=\"tok\" dir=\"ltr\">cnt[i] &gt;= 1</code> סופר כל ערך שהופיע, ולא רק את אלה שהופיעו פעם אחת. עבור <code class=\"tok\" dir=\"ltr\">{1,1,0}</code> הפונקציה המתוקנת (<code class=\"tok\" dir=\"ltr\">== 1</code>) מחזירה 1, והשגויה מחזירה 2 (הרצה).",
       "linesHtml": [
        "int count_once(int* a, int n)",
        "{",
        "    int i, once = 0;",
        "    int* cnt = (int*)calloc(n, sizeof(int));",
        "    for (i = 0; i &lt; n; i++)",
        "        cnt[a[i]]++;",
        "    for (i = 0; i &lt; n; i++)",
        "        if (cnt[i] &gt;= 1)",
        "            once++;",
        "    free(cnt);",
        "    return once;",
        "}"
       ]
      },
      "recap": "\"בדיוק פעם אחת\" = `cnt[i] == 1`.",
      "recapHtml": "\"בדיוק פעם אחת\" = <code class=\"tok\" dir=\"ltr\">cnt[i] == 1</code>."
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של זמן הריצה של `count_distinct` מהשאלה הקודמת (שתי לולאות עוקבות ומערך ספירה בגודל `n`)? (למשל `O(n)`)",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "שתי לולאות על $n$ איברים כל אחת, $2n$ בסך הכול (נמדד: 2000 עבור $n=1000$ ו-4000 עבור $n=2000$). הפתרון הנאיבי, לספור כל ערך בלולאה נפרדת על כל המערך, דורש $ncdot n$ השוואות: 1000000 עבור $n=1000$.",
       "promptHtml": "מה סדר הגודל של זמן הריצה של <code class=\"tok\" dir=\"ltr\">count_distinct</code> מהשאלה הקודמת (שתי לולאות עוקבות ומערך ספירה בגודל <code class=\"tok\" dir=\"ltr\">n</code>)? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "שתי לולאות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים כל אחת, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> בסך הכול (נמדד: 2000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> ו-4000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>). הפתרון הנאיבי, לספור כל ערך בלולאה נפרדת על כל המערך, דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">ncdot n</annotation></semantics></math></span> השוואות: 1000000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>."
      },
      "recap": "מערך ספירה: `O(n)` זמן ו-`O(n)` זיכרון.",
      "recapHtml": "מערך ספירה: <code class=\"tok\" dir=\"ltr\">O(n)</code> זמן ו-<code class=\"tok\" dir=\"ltr\">O(n)</code> זיכרון."
     },
     {
      "id": "C03-Q6",
      "step": {
       "type": "numeric",
       "prompt": "פתרון נאיבי סופר את `a[i]` בלולאה חדשה על כל המערך, לכל `i`. כמה השוואות `a[j] == a[i]` יתבצעו עבור `n = 50`?",
       "answer": 2500,
       "tol": 0,
       "explain": "$50cdot 50=2500$ השוואות (נספר בהרצה), לעומת 100 פעולות עם מערך ספירה.",
       "promptHtml": "פתרון נאיבי סופר את <code class=\"tok\" dir=\"ltr\">a[i]</code> בלולאה חדשה על כל המערך, לכל <code class=\"tok\" dir=\"ltr\">i</code>. כמה השוואות <code class=\"tok\" dir=\"ltr\">a[j] == a[i]</code> יתבצעו עבור <code class=\"tok\" dir=\"ltr\">n = 50</code>?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mn>50</mn><mo>=</mo><mn>2500</mn></mrow><annotation encoding=\"application/x-tex\">50cdot 50=2500</annotation></semantics></math></span> השוואות (נספר בהרצה), לעומת 100 פעולות עם מערך ספירה."
      },
      "recap": "ספירה בלולאה מקוננת: $n^2$.",
      "recapHtml": "ספירה בלולאה מקוננת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "➡️",
    "title": "מעבר יחיד וסכום רץ",
    "goal": "להחליף חישוב חוזר בתוך לולאה במשתנה שמתעדכן תוך כדי מעבר אחד, ולהגיע ל-$O(n)$.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>טעות נפוצה: לחשב מחדש בכל איטרציה משהו שאפשר לעדכן. נניח שמחפשים <b>אינדקס ציר</b>: אינדקס <code>i</code> שבו סכום האיברים משמאלו שווה לסכום האיברים מימינו (<code>a[i]</code> עצמו לא נספר באף צד). אם לכל <code>i</code> מחברים מחדש את שני הצדדים בלולאה, מקבלים לולאה בתוך לולאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>.</p>\n<p>הפתרון: <b>שני מעברים</b>. מעבר ראשון מחשב את הסכום הכולל <code>total</code>. במעבר שני נושאים משתנה <code>left</code>, סכום האיברים שכבר עברנו. הסכום מימין נגזר בלי לולאה:</p>\n<div class=\"lesson-formula\">right = total - left - a[i]</div>\n<pre class=\"code-block\">int pivot(int* a, int n)\n{\n    int i, total = 0, left = 0;\n    for (i = 0; i &lt; n; i++) total += a[i];\n    for (i = 0; i &lt; n; i++) {\n        if (left == total - left - a[i]) return i;\n        left += a[i];\n    }\n    return -1;\n}</pre>\n<div class=\"lesson-rule\">🔑 <b>סדר הפעולות בתוך הלולאה חשוב.</b> קודם בודקים את <code>i</code> (כש-<code>left</code> עדיין לא כולל את <code>a[i]</code>), ורק אחר כך מוסיפים אותו ל-<code>left</code>. אחרת <code>a[i]</code> היה נספר בצד שמאל.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> במערך <code>{1,7,3,6,5,6}</code> הסכום הכולל 28. ב-<code>i=3</code>: <code>left = 1+7+3 = 11</code>, ומימין <code>28 - 11 - 6 = 11</code>. שווה, ולכן מחזירים 3. כל אינדקס נבדק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> ולכן הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ <code>return -1</code> שייך אחרי הלולאה. אם הוא בתוכה, הפונקציה תחזיר אחרי האיבר הראשון.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה הפונקציה `pivot` מהשיעור עבור `a = {1,7,3,6,5,6}` (`n = 6`)?",
       "answer": 3,
       "tol": 0,
       "explain": "סכום כולל 28. עבור `i=3`: `left = 11` ומימין `28 - 11 - 6 = 11`. האינדקסים 0, 1, 2 לא עומדים בתנאי (הרצה: 3).",
       "promptHtml": "מה מחזירה הפונקציה <code class=\"tok\" dir=\"ltr\">pivot</code> מהשיעור עבור <code class=\"tok\" dir=\"ltr\">a = {1,7,3,6,5,6}</code> (<code class=\"tok\" dir=\"ltr\">n = 6</code>)?",
       "explainHtml": "סכום כולל 28. עבור <code class=\"tok\" dir=\"ltr\">i=3</code>: <code class=\"tok\" dir=\"ltr\">left = 11</code> ומימין <code class=\"tok\" dir=\"ltr\">28 - 11 - 6 = 11</code>. האינדקסים 0, 1, 2 לא עומדים בתנאי (הרצה: 3)."
      },
      "recap": "ציר: `left == total - left - a[i]`.",
      "recapHtml": "ציר: <code class=\"tok\" dir=\"ltr\">left == total - left - a[i]</code>."
     },
     {
      "id": "C04-Q2",
      "step": {
       "type": "numeric",
       "prompt": "בפתרון הנאיבי, בכל `i` שני לולאות מחברות את כל האיברים משמאל ומימין ל-`i` (בסך הכול `n-1` חיבורים לכל `i`). כמה חיבורים מתבצעים בסך הכול עבור `n = 20` כשאין ציר, כך שהלולאה החיצונית רצה עד הסוף?",
       "answer": 380,
       "tol": 0,
       "explain": "$20cdot 19=380$ חיבורים (נספר בהרצה של הפתרון הנאיבי). הפתרון עם `left` ו-`total` מבצע בסך הכול 40 צעדים עבור אותו גודל.",
       "promptHtml": "בפתרון הנאיבי, בכל <code class=\"tok\" dir=\"ltr\">i</code> שני לולאות מחברות את כל האיברים משמאל ומימין ל-<code class=\"tok\" dir=\"ltr\">i</code> (בסך הכול <code class=\"tok\" dir=\"ltr\">n-1</code> חיבורים לכל <code class=\"tok\" dir=\"ltr\">i</code>). כמה חיבורים מתבצעים בסך הכול עבור <code class=\"tok\" dir=\"ltr\">n = 20</code> כשאין ציר, כך שהלולאה החיצונית רצה עד הסוף?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mn>19</mn><mo>=</mo><mn>380</mn></mrow><annotation encoding=\"application/x-tex\">20cdot 19=380</annotation></semantics></math></span> חיבורים (נספר בהרצה של הפתרון הנאיבי). הפתרון עם <code class=\"tok\" dir=\"ltr\">left</code> ו-<code class=\"tok\" dir=\"ltr\">total</code> מבצע בסך הכול 40 צעדים עבור אותו גודל."
      },
      "recap": "חישוב מחדש בכל איטרציה: $ncdot n$.",
      "recapHtml": "חישוב מחדש בכל איטרציה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">ncdot n</annotation></semantics></math></span>."
     },
     {
      "id": "C04-Q3",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של `pivot` מהשיעור (מעבר לסכום כולל, ומעבר עם `left`)? (למשל `O(n)`)",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "שני מעברים, $2n$ צעדים (נמדד: 2000 עבור $n=1000$ ו-4000 עבור $n=2000$). כל איטרציה היא `O(1)`: סכום רץ במקום לולאה פנימית.",
       "promptHtml": "מה סדר הגודל של <code class=\"tok\" dir=\"ltr\">pivot</code> מהשיעור (מעבר לסכום כולל, ומעבר עם <code class=\"tok\" dir=\"ltr\">left</code>)? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "שני מעברים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> צעדים (נמדד: 2000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> ו-4000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>). כל איטרציה היא <code class=\"tok\" dir=\"ltr\">O(1)</code>: סכום רץ במקום לולאה פנימית."
      },
      "recap": "סכום רץ = `O(1)` לאיטרציה.",
      "recapHtml": "סכום רץ = <code class=\"tok\" dir=\"ltr\">O(1)</code> לאיטרציה."
     },
     {
      "id": "C04-Q4",
      "step": {
       "type": "order",
       "code": true,
       "prompt": "סדרו את שורות `pivot`. כל שורה היא בלוק, והסדר ביניהם קובע את התוצאה.",
       "lines": [
        "int pivot(int* a, int n)",
        "{",
        "    int i, total = 0, left = 0;",
        "    for (i = 0; i < n; i++) total += a[i];",
        "    for (i = 0; i < n; i++) {",
        "        if (left == total - left - a[i]) return i;",
        "        left += a[i];",
        "    }",
        "    return -1;",
        "}"
       ],
       "explain": "הגדרות, חישוב `total`, ואז הלולאה: בדיקה לפני עדכון של `left`. `return -1` אחרי הלולאה. נבדק: כל החלפה של שתי שורות סמוכות מחזירה תוצאה שגויה או לא מתקמפלת.",
       "promptHtml": "סדרו את שורות <code class=\"tok\" dir=\"ltr\">pivot</code>. כל שורה היא בלוק, והסדר ביניהם קובע את התוצאה.",
       "explainHtml": "הגדרות, חישוב <code class=\"tok\" dir=\"ltr\">total</code>, ואז הלולאה: בדיקה לפני עדכון של <code class=\"tok\" dir=\"ltr\">left</code>. <code class=\"tok\" dir=\"ltr\">return -1</code> אחרי הלולאה. נבדק: כל החלפה של שתי שורות סמוכות מחזירה תוצאה שגויה או לא מתקמפלת.",
       "linesHtml": [
        "int pivot(int* a, int n)",
        "{",
        "    int i, total = 0, left = 0;",
        "    for (i = 0; i &lt; n; i++) total += a[i];",
        "    for (i = 0; i &lt; n; i++) {",
        "        if (left == total - left - a[i]) return i;",
        "        left += a[i];",
        "    }",
        "    return -1;",
        "}"
       ]
      },
      "recap": "קודם בודקים את `i`, אחר כך מעדכנים את `left`.",
      "recapHtml": "קודם בודקים את <code class=\"tok\" dir=\"ltr\">i</code>, אחר כך מעדכנים את <code class=\"tok\" dir=\"ltr\">left</code>."
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "בגרסה הבאה של `pivot` שורה אחת שגויה, והפונקציה מחזירה אינדקס לא נכון. מצאו אותה.",
       "lines": [
        "int pivot(int* a, int n)",
        "{",
        "    int i, total = 0, left = 0;",
        "    for (i = 0; i < n; i++) total += a[i];",
        "    for (i = 0; i < n; i++) {",
        "        if (left == total - left) return i;",
        "        left += a[i];",
        "    }",
        "    return -1;",
        "}"
       ],
       "bugIndex": 5,
       "explain": "הסכום מימין חייב להפחית גם את `a[i]` עצמו. בגרסה השגויה `a[i]` נספר בצד ימין. עבור `{1,7,3,6,5,6}` היא מחזירה -1 במקום 3 (הרצה).",
       "promptHtml": "בגרסה הבאה של <code class=\"tok\" dir=\"ltr\">pivot</code> שורה אחת שגויה, והפונקציה מחזירה אינדקס לא נכון. מצאו אותה.",
       "explainHtml": "הסכום מימין חייב להפחית גם את <code class=\"tok\" dir=\"ltr\">a[i]</code> עצמו. בגרסה השגויה <code class=\"tok\" dir=\"ltr\">a[i]</code> נספר בצד ימין. עבור <code class=\"tok\" dir=\"ltr\">{1,7,3,6,5,6}</code> היא מחזירה -1 במקום 3 (הרצה).",
       "linesHtml": [
        "int pivot(int* a, int n)",
        "{",
        "    int i, total = 0, left = 0;",
        "    for (i = 0; i &lt; n; i++) total += a[i];",
        "    for (i = 0; i &lt; n; i++) {",
        "        if (left == total - left) return i;",
        "        left += a[i];",
        "    }",
        "    return -1;",
        "}"
       ]
      },
      "recap": "מימין: `total - left - a[i]`.",
      "recapHtml": "מימין: <code class=\"tok\" dir=\"ltr\">total - left - a[i]</code>."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "↔️",
    "title": "שני מצביעים משני הקצוות",
    "goal": "לעבור על מערך בעזרת שני אינדקסים שמתקרבים זה לזה, ולהסביר למה זה $O(n)$.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>בטכניקת <b>שני מצביעים</b> (אינדקסים) מתחילים משני קצוות המערך, <code>lo = 0</code> ו-<code>hi = n-1</code>, ובכל צעד מזיזים אחד מהם פנימה. הלולאה נעצרת כש-<code>lo</code> פוגש את <code>hi</code>, ולכן יש לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צעדים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>, בלי לולאה מקוננת.</p>\n<h3>דוגמה א: פלינדרום</h3>\n<p>משווים את הקצה השמאלי לימני וצועדים פנימה:</p>\n<pre class=\"code-block\">int is_pal(int* a, int n)\n{\n    int lo = 0, hi = n - 1;\n    while (lo &lt; hi) {\n        if (a[lo] != a[hi]) return 0;\n        lo++; hi--;\n    }\n    return 1;\n}</pre>\n<h3>דוגמה ב: זוג בעל סכום נתון במערך ממוין</h3>\n<p>מחפשים שני איברים (במקומות שונים) שסכומם <code>k</code> במערך <b>ממוין בסדר עולה</b>. סכום הקצוות <code>s = a[lo] + a[hi]</code> מכריע את המהלך:</p>\n<ul>\n<li><code>s == k</code>: מצאנו, מחזירים 1.</li>\n<li><code>s &lt; k</code>: <code>a[lo]</code> הוא הכי קטן שנשאר, וגם עם הכי גדול (<code>a[hi]</code>) לא הגענו ל-<code>k</code>. אין לו בן זוג, ולכן מזיזים <code>lo++</code>.</li>\n<li><code>s &gt; k</code>: <code>a[hi]</code> הוא הכי גדול שנשאר, וגם עם הכי קטן הסכום גדול מדי. אין לו בן זוג, ולכן <code>hi--</code>.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 בכל צעד <b>זורקים איבר אחד שבוודאות לא ישתתף בפתרון</b>. לכן אפשר לדלג עליו בלי לפספס תשובה, ואחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צעדים לכל היותר הלולאה נגמרת.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>a = {1,3,4,6,9,11}</code>, <code>k = 15</code>. צעד 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>12</mn><mo>&lt;</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">1+11=12&lt;15</annotation></semantics></math></span>, <code>lo++</code>. צעד 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>14</mn><mo>&lt;</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">3+11=14&lt;15</annotation></semantics></math></span>, <code>lo++</code>. צעד 3: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">4+11=15</annotation></semantics></math></span>, נמצא.</div>\n<div class=\"lesson-trap\">⚠️ התנאי הוא <code>lo &lt; hi</code> ולא <code>lo &lt;= hi</code>. עם <code>&lt;=</code> האיבר יכול להיבדק מול עצמו, ובמערך <code>{5}</code> עם <code>k = 10</code> הפונקציה הייתה מחזירה 1 בטעות.</div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "הפונקציה לחיפוש זוג עם סכום `k` (בשיעור) רצה על `a = {1,3,4,6,9,11}` עם `k = 15`. כמה איטרציות של הלולאה מתבצעות עד שמוחזר 1?",
       "answer": 3,
       "tol": 0,
       "explain": "$1+11=12$, אחר כך $3+11=14$, ובאיטרציה השלישית $4+11=15$ ומחזירים (נספר בהרצה: 3).",
       "promptHtml": "הפונקציה לחיפוש זוג עם סכום <code class=\"tok\" dir=\"ltr\">k</code> (בשיעור) רצה על <code class=\"tok\" dir=\"ltr\">a = {1,3,4,6,9,11}</code> עם <code class=\"tok\" dir=\"ltr\">k = 15</code>. כמה איטרציות של הלולאה מתבצעות עד שמוחזר 1?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">1+11=12</annotation></semantics></math></span>, אחר כך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">3+11=14</annotation></semantics></math></span>, ובאיטרציה השלישית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mn>11</mn><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">4+11=15</annotation></semantics></math></span> ומחזירים (נספר בהרצה: 3)."
      },
      "recap": "כל איטרציה זורקת קצה אחד, או מוצאת.",
      "recapHtml": "כל איטרציה זורקת קצה אחד, או מוצאת."
     },
     {
      "id": "C05-Q2",
      "question": "ב-`a = {2,5,8,12,30}` מחפשים זוג עם סכום `k = 14`. בצעד הראשון `s = 2 + 30 = 32`, וזה גדול מ-`k`. מה צריך לעשות?",
      "options": [
       {
        "id": "a",
        "value": "`hi--`: הערך 30 גדול מדי גם עם הכי קטן",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">hi--</code>: הערך 30 גדול מדי גם עם הכי קטן"
       },
       {
        "id": "b",
        "value": "`lo++`: מדלגים על הערך 2",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lo++</code>: מדלגים על הערך 2"
       },
       {
        "id": "c",
        "value": "גם `lo++` וגם `hi--` יחד",
        "type": "text",
        "html": "גם <code class=\"tok\" dir=\"ltr\">lo++</code> וגם <code class=\"tok\" dir=\"ltr\">hi--</code> יחד"
       },
       {
        "id": "d",
        "value": "להחזיר 0, כי 32 שונה מ-14",
        "type": "text",
        "html": "להחזיר 0, כי 32 שונה מ-14"
       }
      ],
      "correctId": "a",
      "explanation": "הזוג היחיד הוא $2+12=14$. `hi--` זורק את 30, שלא יכול להשתתף: אפילו עם 2 הסכום 32. כל אחת מהחלופות מפספסת את התשובה (הרצת כל וריאנט נתנה: `lo++` מחזיר 0, שתי ההזזות יחד מחזירות 0, והחזרה מיידית מחזירה 0, בעוד שהתשובה הנכונה היא 1). `lo++` זורק את 2, ובכך את בן הזוג של 12.",
      "recap": "סכום גדול מדי: מורידים את `hi`.",
      "questionHtml": "ב-<code class=\"tok\" dir=\"ltr\">a = {2,5,8,12,30}</code> מחפשים זוג עם סכום <code class=\"tok\" dir=\"ltr\">k = 14</code>. בצעד הראשון <code class=\"tok\" dir=\"ltr\">s = 2 + 30 = 32</code>, וזה גדול מ-<code class=\"tok\" dir=\"ltr\">k</code>. מה צריך לעשות?",
      "explanationHtml": "הזוג היחיד הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">2+12=14</annotation></semantics></math></span>. <code class=\"tok\" dir=\"ltr\">hi--</code> זורק את 30, שלא יכול להשתתף: אפילו עם 2 הסכום 32. כל אחת מהחלופות מפספסת את התשובה (הרצת כל וריאנט נתנה: <code class=\"tok\" dir=\"ltr\">lo++</code> מחזיר 0, שתי ההזזות יחד מחזירות 0, והחזרה מיידית מחזירה 0, בעוד שהתשובה הנכונה היא 1). <code class=\"tok\" dir=\"ltr\">lo++</code> זורק את 2, ובכך את בן הזוג של 12.",
      "recapHtml": "סכום גדול מדי: מורידים את <code class=\"tok\" dir=\"ltr\">hi</code>."
     },
     {
      "id": "C05-Q3",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של חיפוש הזוג בשני מצביעים במערך בגודל `n`? (למשל `O(n)`)",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "בכל איטרציה `hi - lo` קטן ב-1, ולכן לכל היותר $n-1$ איטרציות (נמדד על 10000 מערכים ממוינים אקראיים: מקסימום $n-1$). פתרון עם שתי לולאות מקוננות על כל הזוגות דורש $\frac{n(n-1)}{2}$ בדיקות.",
       "promptHtml": "מה סדר הגודל של חיפוש הזוג בשני מצביעים במערך בגודל <code class=\"tok\" dir=\"ltr\">n</code>? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "בכל איטרציה <code class=\"tok\" dir=\"ltr\">hi - lo</code> קטן ב-1, ולכן לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> איטרציות (נמדד על 10000 מערכים ממוינים אקראיים: מקסימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>). פתרון עם שתי לולאות מקוננות על כל הזוגות דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>c</mi><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">rac{n(n-1)}{2}</annotation></semantics></math></span> בדיקות."
      },
      "recap": "שני מצביעים: `O(n)`.",
      "recapHtml": "שני מצביעים: <code class=\"tok\" dir=\"ltr\">O(n)</code>."
     },
     {
      "id": "C05-Q4",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "בבדיקת פלינדרום הבאה שורה אחת שגויה: הפונקציה מחזירה 0 עבור פלינדרום אמיתי כמו `{1,2,1}`. מצאו אותה.",
       "lines": [
        "int is_pal(int* a, int size)",
        "{",
        "    int i;",
        "    for (i = 0; i < size / 2; i++)",
        "        if (a[i] != a[size - 2 - i])",
        "            return 0;",
        "    return 1;",
        "}"
       ],
       "bugIndex": 4,
       "explain": "בן הזוג של `a[i]` הוא `a[size - 1 - i]`. עם `size - 2 - i` מושווה `a[0]` מול `a[1]` במקום `a[2]`, ולכן `{1,2,1}` נדחה (נבדק: התיקון מחזיר 1, הגרסה השגויה מחזירה 0).",
       "promptHtml": "בבדיקת פלינדרום הבאה שורה אחת שגויה: הפונקציה מחזירה 0 עבור פלינדרום אמיתי כמו <code class=\"tok\" dir=\"ltr\">{1,2,1}</code>. מצאו אותה.",
       "explainHtml": "בן הזוג של <code class=\"tok\" dir=\"ltr\">a[i]</code> הוא <code class=\"tok\" dir=\"ltr\">a[size - 1 - i]</code>. עם <code class=\"tok\" dir=\"ltr\">size - 2 - i</code> מושווה <code class=\"tok\" dir=\"ltr\">a[0]</code> מול <code class=\"tok\" dir=\"ltr\">a[1]</code> במקום <code class=\"tok\" dir=\"ltr\">a[2]</code>, ולכן <code class=\"tok\" dir=\"ltr\">{1,2,1}</code> נדחה (נבדק: התיקון מחזיר 1, הגרסה השגויה מחזירה 0).",
       "linesHtml": [
        "int is_pal(int* a, int size)",
        "{",
        "    int i;",
        "    for (i = 0; i &lt; size / 2; i++)",
        "        if (a[i] != a[size - 2 - i])",
        "            return 0;",
        "    return 1;",
        "}"
       ]
      },
      "recap": "בן הזוג של `i` הוא `size - 1 - i`.",
      "recapHtml": "בן הזוג של <code class=\"tok\" dir=\"ltr\">i</code> הוא <code class=\"tok\" dir=\"ltr\">size - 1 - i</code>."
     },
     {
      "id": "C05-Q5",
      "step": {
       "type": "fillblank",
       "code": true,
       "prompt": "השלימו את תנאי הלולאה כך שהפונקציה תחזיר 1 רק כשיש שני איברים **במקומות שונים** שסכומם `k`.",
       "lines": [
        "int has_pair(int* a, int n, int k)",
        "{",
        "    int lo = 0, hi = n - 1;",
        "    while (lo ___ hi) {",
        "        int s = a[lo] + a[hi];",
        "        if (s == k) return 1;",
        "        if (s < k) lo++;",
        "        else hi--;",
        "    }",
        "    return 0;",
        "}"
       ],
       "blankIndex": 3,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "<",
         "html": "&lt;"
        },
        {
         "id": "b",
         "type": "text",
         "value": "<=",
         "html": "&lt;="
        },
        {
         "id": "c",
         "type": "text",
         "value": ">",
         "html": "&gt;"
        },
        {
         "id": "d",
         "type": "text",
         "value": ">=",
         "html": "&gt;="
        }
       ],
       "correctId": "a",
       "explain": "`<` עוצר כש-`lo` ו-`hi` מצביעים לאותו איבר. `<=` בודק איבר מול עצמו: עבור `{5}` ו-`k=10` מחזיר 1 בטעות. `>` ו-`>=` לא נכנסים לגוף הלולאה כלל כש-`n >= 2`, ולכן עבור `{1,3,4,6,9,11}` ו-`k=15` מחזירים 0 במקום 1 (נבדקו כל ארבע האפשרויות).",
       "promptHtml": "השלימו את תנאי הלולאה כך שהפונקציה תחזיר 1 רק כשיש שני איברים <strong>במקומות שונים</strong> שסכומם <code class=\"tok\" dir=\"ltr\">k</code>.",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">&lt;</code> עוצר כש-<code class=\"tok\" dir=\"ltr\">lo</code> ו-<code class=\"tok\" dir=\"ltr\">hi</code> מצביעים לאותו איבר. <code class=\"tok\" dir=\"ltr\">&lt;=</code> בודק איבר מול עצמו: עבור <code class=\"tok\" dir=\"ltr\">{5}</code> ו-<code class=\"tok\" dir=\"ltr\">k=10</code> מחזיר 1 בטעות. <code class=\"tok\" dir=\"ltr\">&gt;</code> ו-<code class=\"tok\" dir=\"ltr\">&gt;=</code> לא נכנסים לגוף הלולאה כלל כש-<code class=\"tok\" dir=\"ltr\">n &gt;= 2</code>, ולכן עבור <code class=\"tok\" dir=\"ltr\">{1,3,4,6,9,11}</code> ו-<code class=\"tok\" dir=\"ltr\">k=15</code> מחזירים 0 במקום 1 (נבדקו כל ארבע האפשרויות).",
       "linesHtml": [
        "int has_pair(int* a, int n, int k)",
        "{",
        "    int lo = 0, hi = n - 1;",
        "    while (lo ___ hi) {",
        "        int s = a[lo] + a[hi];",
        "        if (s == k) return 1;",
        "        if (s &lt; k) lo++;",
        "        else hi--;",
        "    }",
        "    return 0;",
        "}"
       ]
      },
      "recap": "תנאי הלולאה: `lo < hi`.",
      "recapHtml": "תנאי הלולאה: <code class=\"tok\" dir=\"ltr\">lo &lt; hi</code>."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🧵",
    "title": "שני מערכים ממוינים ומערך עם זוגות",
    "goal": "לסרוק שני מערכים ממוינים במעבר אחד ($O(m+n)$), ולהבין איך מסדרים איברים במקום בלי מערך עזר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>נתונים שני מערכים <b>ממוינים בסדר עולה</b>, <code>a</code> באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> ו-<code>b</code> באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ורוצים לספור כמה ערכים משותפים להם. לולאה מקוננת (כל איבר של <code>a</code> מול כל איבר של <code>b</code>) עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>⋅</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m\\cdot n</annotation></semantics></math></span> השוואות. אבל כשהמערכים ממוינים, שמים <b>מצביע בכל מערך</b>, <code>i</code> ב-<code>a</code> ו-<code>j</code> ב-<code>b</code>, ובכל צעד משווים:</p>\n<ul>\n<li><code>a[i] == b[j]</code>: ערך משותף. מקדמים את שניהם.</li>\n<li><code>a[i] &lt; b[j]</code>: <code>a[i]</code> קטן מכל מה שנשאר ב-<code>b</code> (כי <code>b</code> ממוין), אז אין לו בן זוג. מקדמים <code>i</code>.</li>\n<li><code>a[i] &gt; b[j]</code>: סימטרי, מקדמים <code>j</code>.</li>\n</ul>\n<pre class=\"code-block\">int common(int* a, int m, int* b, int n)\n{\n    int i = 0, j = 0, c = 0;\n    while (i &lt; m &amp;&amp; j &lt; n) {\n        if (a[i] == b[j]) { c++; i++; j++; }\n        else if (a[i] &lt; b[j]) i++;\n        else j++;\n    }\n    return c;\n}</pre>\n<div class=\"lesson-rule\">🔑 בכל איטרציה לפחות אחד המצביעים מתקדם ואף אחד לא חוזר אחורה, ולכן יש לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span> איטרציות: <b><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(m+n)</annotation></semantics></math></span></b>. זה אותו רעיון של \"זורקים איבר שלא יכול להשתתף\".</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>a = {1,3,5}</code>, <code>b = {3,4,5,9}</code>. השוואות: 1&lt;3 (<code>i++</code>), 3=3 (נמצא), 5&gt;4 (<code>j++</code>), 5=5 (נמצא). אחרי 4 איטרציות <code>i</code> הגיע לסוף, וסיימנו.</div>\n<h3>כיוונים מנוגדים</h3>\n<p>אם <code>a</code> עולה ו-<code>b</code> <b>יורד</b>, מתחילים ב-<code>i = 0</code> (הקטן ב-<code>a</code>) וב-<code>j = n-1</code> (הקטן ב-<code>b</code>). שני המצביעים הם הקטנים של המערכים שלהם, ולכן אותה לוגיקה: מקדמים את הצד שהערך שלו קטן יותר, כי הוא קטן מכל מה שנשאר בצד השני.</p>\n<h3>סידור במקום בלי מערך עזר</h3>\n<p>כשאסור להשתמש במערך עזר, מסדרים את המערך עצמו בעזרת החלפות. החלפה של שני תאים היא <code>swap(a + i, a + j)</code>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> זמן ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> זיכרון. במערך ממוין של זוגות בעלי סכום זהה, בן הזוג של <code>a[i]</code> נמצא ב-<code>a[size-1-i]</code> (הקטן עם הגדול).</p>\n<div class=\"lesson-trap\">⚠️ במערך שבו מחליפים ערכים בלולאה, בודקים אילו תאים כבר \"סגורים\". החלפה שנייה יכולה להחזיר איבר למקום שממנו הוצא.</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "הפונקציה `common` מהשיעור רצה עם `a = {1,3,5,7}`, `m = 4` ו-`b = {2,3,6,7,8}`, `n = 5`. כמה איטרציות של הלולאה מתבצעות?",
       "answer": 6,
       "tol": 0,
       "explain": "ההשוואות: 1<2 (`i++`), 3>2 (`j++`), 3=3 (שניהם), 5<6 (`i++`), 7>6 (`j++`), 7=7 (שניהם, ואז `i` בסוף). 6 איטרציות (הרצה: 6), פחות מ-$m+n=9$.",
       "promptHtml": "הפונקציה <code class=\"tok\" dir=\"ltr\">common</code> מהשיעור רצה עם <code class=\"tok\" dir=\"ltr\">a = {1,3,5,7}</code>, <code class=\"tok\" dir=\"ltr\">m = 4</code> ו-<code class=\"tok\" dir=\"ltr\">b = {2,3,6,7,8}</code>, <code class=\"tok\" dir=\"ltr\">n = 5</code>. כמה איטרציות של הלולאה מתבצעות?",
       "explainHtml": "ההשוואות: 1&lt;2 (<code class=\"tok\" dir=\"ltr\">i++</code>), 3&gt;2 (<code class=\"tok\" dir=\"ltr\">j++</code>), 3=3 (שניהם), 5&lt;6 (<code class=\"tok\" dir=\"ltr\">i++</code>), 7&gt;6 (<code class=\"tok\" dir=\"ltr\">j++</code>), 7=7 (שניהם, ואז <code class=\"tok\" dir=\"ltr\">i</code> בסוף). 6 איטרציות (הרצה: 6), פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">m+n=9</annotation></semantics></math></span>."
      },
      "recap": "איטרציות של שני מצביעים: לכל היותר $m+n$.",
      "recapHtml": "איטרציות של שני מצביעים: לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span>."
     },
     {
      "id": "C06-Q2",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של `common` כתלות ב-`m` וב-`n`? (למשל `O(n)`)",
       "accept": [
        "O(m+n)",
        "O(n+m)"
       ],
       "normalize": "complexity",
       "explain": "בכל איטרציה לפחות אחד המצביעים גדל, ולכן לכל היותר $m+n$ איטרציות (נבדק על 10000 זוגות אקראיים: מקסימום $m+n-1$). הפתרון המקונן דורש $mcdot n$: עבור $m=30$, $n=40$ זה 1200 השוואות.",
       "promptHtml": "מה סדר הגודל של <code class=\"tok\" dir=\"ltr\">common</code> כתלות ב-<code class=\"tok\" dir=\"ltr\">m</code> וב-<code class=\"tok\" dir=\"ltr\">n</code>? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "בכל איטרציה לפחות אחד המצביעים גדל, ולכן לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span> איטרציות (נבדק על 10000 זוגות אקראיים: מקסימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">m+n-1</annotation></semantics></math></span>). הפתרון המקונן דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">mcdot n</annotation></semantics></math></span>: עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">m=30</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">n=40</annotation></semantics></math></span> זה 1200 השוואות."
      },
      "recap": "סריקה אחת של כל מערך: `O(m+n)`.",
      "recapHtml": "סריקה אחת של כל מערך: <code class=\"tok\" dir=\"ltr\">O(m+n)</code>."
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "בגרסה הבאה של `common` שורה אחת שגויה: עבור `a = {1,3}` ו-`b = {3}` היא מחזירה 0 במקום 1. מצאו אותה.",
       "lines": [
        "int common(int* a, int m, int* b, int n)",
        "{",
        "    int i = 0, j = 0, c = 0;",
        "    while (i < m && j < n) {",
        "        if (a[i] == b[j]) { c++; i++; j++; }",
        "        else if (a[i] < b[j]) j++;",
        "        else j++;",
        "    }",
        "    return c;",
        "}"
       ],
       "bugIndex": 5,
       "explain": "כש-`a[i] < b[j]` צריך להתקדם ב-`a`, כי `a[i]` קטן מכל מה שנשאר ב-`b`. הגרסה השגויה מקדמת את `j`, ולכן `{1,3}` מול `{3}` מדלגת על ה-3 ומחזירה 0 (נבדק; התיקון `i++` מחזיר 1).",
       "promptHtml": "בגרסה הבאה של <code class=\"tok\" dir=\"ltr\">common</code> שורה אחת שגויה: עבור <code class=\"tok\" dir=\"ltr\">a = {1,3}</code> ו-<code class=\"tok\" dir=\"ltr\">b = {3}</code> היא מחזירה 0 במקום 1. מצאו אותה.",
       "explainHtml": "כש-<code class=\"tok\" dir=\"ltr\">a[i] &lt; b[j]</code> צריך להתקדם ב-<code class=\"tok\" dir=\"ltr\">a</code>, כי <code class=\"tok\" dir=\"ltr\">a[i]</code> קטן מכל מה שנשאר ב-<code class=\"tok\" dir=\"ltr\">b</code>. הגרסה השגויה מקדמת את <code class=\"tok\" dir=\"ltr\">j</code>, ולכן <code class=\"tok\" dir=\"ltr\">{1,3}</code> מול <code class=\"tok\" dir=\"ltr\">{3}</code> מדלגת על ה-3 ומחזירה 0 (נבדק; התיקון <code class=\"tok\" dir=\"ltr\">i++</code> מחזיר 1).",
       "linesHtml": [
        "int common(int* a, int m, int* b, int n)",
        "{",
        "    int i = 0, j = 0, c = 0;",
        "    while (i &lt; m &amp;&amp; j &lt; n) {",
        "        if (a[i] == b[j]) { c++; i++; j++; }",
        "        else if (a[i] &lt; b[j]) j++;",
        "        else j++;",
        "    }",
        "    return c;",
        "}"
       ]
      },
      "recap": "הקטן מבין השניים הוא זה שמתקדם.",
      "recapHtml": "הקטן מבין השניים הוא זה שמתקדם."
     },
     {
      "id": "C06-Q4",
      "step": {
       "type": "order",
       "code": true,
       "prompt": "סדרו את שורות הפונקציה `common`.",
       "lines": [
        "int common(int* a, int m, int* b, int n)",
        "{",
        "    int i = 0, j = 0, c = 0;",
        "    while (i < m && j < n) {",
        "        if (a[i] == b[j]) { c++; i++; j++; }",
        "        else if (a[i] < b[j]) i++;",
        "        else j++;",
        "    }",
        "    return c;",
        "}"
       ],
       "explain": "כותרת, הגדרות, הלולאה עם שלוש ההשוואות לפי הסדר (`if`, `else if`, `else`), ואחריה `return c`. נבדק: כל החלפה של שתי שורות סמוכות מובילה לשגיאת הידור או לתוצאה שגויה.",
       "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">common</code>.",
       "explainHtml": "כותרת, הגדרות, הלולאה עם שלוש ההשוואות לפי הסדר (<code class=\"tok\" dir=\"ltr\">if</code>, <code class=\"tok\" dir=\"ltr\">else if</code>, <code class=\"tok\" dir=\"ltr\">else</code>), ואחריה <code class=\"tok\" dir=\"ltr\">return c</code>. נבדק: כל החלפה של שתי שורות סמוכות מובילה לשגיאת הידור או לתוצאה שגויה.",
       "linesHtml": [
        "int common(int* a, int m, int* b, int n)",
        "{",
        "    int i = 0, j = 0, c = 0;",
        "    while (i &lt; m &amp;&amp; j &lt; n) {",
        "        if (a[i] == b[j]) { c++; i++; j++; }",
        "        else if (a[i] &lt; b[j]) i++;",
        "        else j++;",
        "    }",
        "    return c;",
        "}"
       ]
      },
      "recap": "`if`, אחר כך `else if`, אחר כך `else`; ה-`return` אחרי הלולאה.",
      "recapHtml": "<code class=\"tok\" dir=\"ltr\">if</code>, אחר כך <code class=\"tok\" dir=\"ltr\">else if</code>, אחר כך <code class=\"tok\" dir=\"ltr\">else</code>; ה-<code class=\"tok\" dir=\"ltr\">return</code> אחרי הלולאה."
     },
     {
      "id": "C06-Q5",
      "question": "המערך `a` ממוין בסדר **עולה** ו-`b` ממוין בסדר **יורד**. המצביעים `ia = 0` ו-`ib = n-1`. בהשוואה הנוכחית `a[ia] < b[ib]`. מה נכון לעשות?",
      "options": [
       {
        "id": "a",
        "value": "`ia++`: `a[ia]` קטן מכל מה שנשאר ב-`b`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ia++</code>: <code class=\"tok\" dir=\"ltr\">a[ia]</code> קטן מכל מה שנשאר ב-<code class=\"tok\" dir=\"ltr\">b</code>"
       },
       {
        "id": "b",
        "value": "`ib--`: `b[ib]` גדול מדי",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ib--</code>: <code class=\"tok\" dir=\"ltr\">b[ib]</code> גדול מדי"
       },
       {
        "id": "c",
        "value": "`ia++` ו-`ib--` יחד",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ia++</code> ו-<code class=\"tok\" dir=\"ltr\">ib--</code> יחד"
       },
       {
        "id": "d",
        "value": "לעצור ולהחזיר שהמערכים שונים",
        "type": "text",
        "html": "לעצור ולהחזיר שהמערכים שונים"
       }
      ],
      "correctId": "a",
      "explanation": "`b[ib]` הוא הקטן ביותר שנשאר ב-`b` (כי `b` יורד, וצועדים מהסוף שלו). אם `a[ia]` קטן ממנו, הוא קטן מכל איבר שנשאר ב-`b`, ולכן אין לו בן זוג שווה, וזורקים אותו עם `ia++`. כל חלופה אחרת מפספסת ערך משותף: עבור `a = {1,4}`, `b = {9,4}` הגרסה הנכונה מוצאת את 4, ואילו שלוש החלופות האחרות (`ib--`, שתי ההזזות יחד ויציאה מוקדמת) מחמיצות אותו (נבדק בהרצה של כל וריאנט).",
      "recap": "מקדמים את המצביע שהערך שלו קטן יותר.",
      "questionHtml": "המערך <code class=\"tok\" dir=\"ltr\">a</code> ממוין בסדר <strong>עולה</strong> ו-<code class=\"tok\" dir=\"ltr\">b</code> ממוין בסדר <strong>יורד</strong>. המצביעים <code class=\"tok\" dir=\"ltr\">ia = 0</code> ו-<code class=\"tok\" dir=\"ltr\">ib = n-1</code>. בהשוואה הנוכחית <code class=\"tok\" dir=\"ltr\">a[ia] &lt; b[ib]</code>. מה נכון לעשות?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">b[ib]</code> הוא הקטן ביותר שנשאר ב-<code class=\"tok\" dir=\"ltr\">b</code> (כי <code class=\"tok\" dir=\"ltr\">b</code> יורד, וצועדים מהסוף שלו). אם <code class=\"tok\" dir=\"ltr\">a[ia]</code> קטן ממנו, הוא קטן מכל איבר שנשאר ב-<code class=\"tok\" dir=\"ltr\">b</code>, ולכן אין לו בן זוג שווה, וזורקים אותו עם <code class=\"tok\" dir=\"ltr\">ia++</code>. כל חלופה אחרת מפספסת ערך משותף: עבור <code class=\"tok\" dir=\"ltr\">a = {1,4}</code>, <code class=\"tok\" dir=\"ltr\">b = {9,4}</code> הגרסה הנכונה מוצאת את 4, ואילו שלוש החלופות האחרות (<code class=\"tok\" dir=\"ltr\">ib--</code>, שתי ההזזות יחד ויציאה מוקדמת) מחמיצות אותו (נבדק בהרצה של כל וריאנט).",
      "recapHtml": "מקדמים את המצביע שהערך שלו קטן יותר."
     },
     {
      "id": "C06-Q6",
      "step": {
       "type": "numeric",
       "prompt": "במערך הממוין `a = {2,3,5,6,9,10,12,13}` (`size = 8`) כל הזוגות `(a[i], a[size-1-i])` בעלי סכום 15. מבצעים `swap(a + 1, a + size - 1)`, כדי להצמיד את `13`, בן הזוג של `2`, למקום שלידו. מה הערך שנמצא עכשיו ב-`a[1]`?",
       "answer": 13,
       "tol": 0,
       "explain": "אחרי ההחלפה `a = {2,13,5,6,9,10,12,3}`: `a[1]` הוא 13 ו-`a[7]` הוא 3. הזוג `(2,13)` צמוד (הרצה).",
       "promptHtml": "במערך הממוין <code class=\"tok\" dir=\"ltr\">a = {2,3,5,6,9,10,12,13}</code> (<code class=\"tok\" dir=\"ltr\">size = 8</code>) כל הזוגות <code class=\"tok\" dir=\"ltr\">(a[i], a[size-1-i])</code> בעלי סכום 15. מבצעים <code class=\"tok\" dir=\"ltr\">swap(a + 1, a + size - 1)</code>, כדי להצמיד את <code class=\"tok\" dir=\"ltr\">13</code>, בן הזוג של <code class=\"tok\" dir=\"ltr\">2</code>, למקום שלידו. מה הערך שנמצא עכשיו ב-<code class=\"tok\" dir=\"ltr\">a[1]</code>?",
       "explainHtml": "אחרי ההחלפה <code class=\"tok\" dir=\"ltr\">a = {2,13,5,6,9,10,12,3}</code>: <code class=\"tok\" dir=\"ltr\">a[1]</code> הוא 13 ו-<code class=\"tok\" dir=\"ltr\">a[7]</code> הוא 3. הזוג <code class=\"tok\" dir=\"ltr\">(2,13)</code> צמוד (הרצה)."
      },
      "recap": "`swap` על שני תאים ב-`O(1)` זמן וזיכרון.",
      "recapHtml": "<code class=\"tok\" dir=\"ltr\">swap</code> על שני תאים ב-<code class=\"tok\" dir=\"ltr\">O(1)</code> זמן וזיכרון."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🧭",
    "title": "בוחרים שיטה לפי הדרישות",
    "goal": "לקרוא את הדרישות של שאלה (סדר גודל, מערך עזר, מערך ממוין) ולבחור את הטכניקה המתאימה, בלי ליפול ללולאות חבויות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>בשאלת מבחן על מערך, הנוסח קובע איזו טכניקה מותרת. כך קוראים אותו:</p>\n<table>\n<thead><tr><th>מה כתוב בשאלה</th><th>הטכניקה</th><th>זמן</th></tr></thead>\n<tbody>\n<tr><td>ערכים בתחום קטן וידוע, \"ניתן להשתמש במערך עזר\"</td><td>מערך ספירה</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td>מערך ממוין, \"בלי מערך עזר\"</td><td>שני מצביעים</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td>שני מערכים ממוינים</td><td>מצביע בכל מערך</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(m+n)</annotation></semantics></math></span></td></tr>\n<tr><td>חישוב על קטעים או על \"עד i\"</td><td>סכום רץ במעבר אחד</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span></td></tr>\n<tr><td>המערך לא ממוין ואין תחום קטן</td><td>למיין קודם (מיון מיזוג)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <b>\"סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>\" פוסל לולאה מקוננת.</b> \"בלי מערך עזר\" פוסל מערך ספירה. \"מערך ממוין\" הוא רמז לשני מצביעים. אם הערכים גדולים ללא גבול, גם מערך ספירה לא אפשרי: ערכים עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>9</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^9</annotation></semantics></math></span> היו דורשים בערך 4 ג'יגה-בייט.</div>\n<h3>לולאות חבויות</h3>\n<p>קריאה לפונקציה בתוך לולאה היא גם לולאה אם בפנים הפונקציה יש לולאה. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> קריאות שכל אחת עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>⋅</mo><mi>n</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n\\cdot n=n^2</annotation></semantics></math></span>:</p>\n<pre class=\"code-block\">for (i = 0; i &lt; n; i++)\n    if (a[i] * n &gt; sum(a, n))   /* sum עוברת על כל המערך */\n        c++;</pre>\n<p>התיקון: מחשבים את <code>sum(a, n)</code> <b>פעם אחת</b> לפני הלולאה ושומרים במשתנה.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> מיון מיזוג של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים עולה בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n\\log_2 n</annotation></semantics></math></span> השוואות (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4096</mn></mrow><annotation encoding=\"application/x-tex\">n=4096</annotation></semantics></math></span>: 43941 בהרצה), ואחריו סריקה אחת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> צעדים. הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n\\log n+n</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ מקרי קצה: מערך באורך 1, כל האיברים שווים, ואין תשובה בכלל. בודקים מה הפונקציה מחזירה בהם לפני שמסיימים.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "במערך **ממוין** בגודל `n` צריך לבדוק אם יש זוג שסכומו `k`, בסדר גודל `n` ובלי מערך עזר. איזו שיטה עומדת בדרישות?",
      "options": [
       {
        "id": "a",
        "value": "שני מצביעים משני הקצוות",
        "type": "text",
        "html": "שני מצביעים משני הקצוות"
       },
       {
        "id": "b",
        "value": "לולאה מקוננת על כל הזוגות",
        "type": "text",
        "html": "לולאה מקוננת על כל הזוגות"
       },
       {
        "id": "c",
        "value": "למיין את המערך ואז לסרוק",
        "type": "text",
        "html": "למיין את המערך ואז לסרוק"
       },
       {
        "id": "d",
        "value": "מערך ספירה באורך `k + 1`",
        "type": "text",
        "html": "מערך ספירה באורך <code class=\"tok\" dir=\"ltr\">k + 1</code>"
       }
      ],
      "correctId": "a",
      "explanation": "שני מצביעים: לכל היותר $n-1$ איטרציות וזיכרון קבוע (נמדד: 999 עבור $n=1000$). לולאה מקוננת בודקת $\frac{n(n-1)}{2}$ זוגות (499500 עבור $n=1000$). מיון מחדש עולה $nlog n$ (עבור $n=4096$ נמדדו 43941 השוואות, יותר מ-40000, כלומר הרבה מעל $n$), והוא מיותר כי המערך כבר ממוין. מערך ספירה באורך `k+1` הוא מערך עזר, ועבור $k=10^9$ הוא דורש יותר מ-4 ג'יגה-בייט.",
      "recap": "ממוין + בלי מערך עזר + `O(n)` = שני מצביעים.",
      "questionHtml": "במערך <strong>ממוין</strong> בגודל <code class=\"tok\" dir=\"ltr\">n</code> צריך לבדוק אם יש זוג שסכומו <code class=\"tok\" dir=\"ltr\">k</code>, בסדר גודל <code class=\"tok\" dir=\"ltr\">n</code> ובלי מערך עזר. איזו שיטה עומדת בדרישות?",
      "explanationHtml": "שני מצביעים: לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> איטרציות וזיכרון קבוע (נמדד: 999 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>). לולאה מקוננת בודקת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>a</mi><mi>c</mi><mrow><mi>n</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">rac{n(n-1)}{2}</annotation></semantics></math></span> זוגות (499500 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span>). מיון מחדש עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>l</mi><mi>o</mi><mi>g</mi><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">nlog n</annotation></semantics></math></span> (עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4096</mn></mrow><annotation encoding=\"application/x-tex\">n=4096</annotation></semantics></math></span> נמדדו 43941 השוואות, יותר מ-40000, כלומר הרבה מעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>), והוא מיותר כי המערך כבר ממוין. מערך ספירה באורך <code class=\"tok\" dir=\"ltr\">k+1</code> הוא מערך עזר, ועבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><msup><mn>10</mn><mn>9</mn></msup></mrow><annotation encoding=\"application/x-tex\">k=10^9</annotation></semantics></math></span> הוא דורש יותר מ-4 ג'יגה-בייט.",
      "recapHtml": "ממוין + בלי מערך עזר + <code class=\"tok\" dir=\"ltr\">O(n)</code> = שני מצביעים."
     },
     {
      "id": "C07-Q2",
      "step": {
       "type": "text",
       "prompt": "מערך לא ממוין בגודל `n` ממיינים במיון מיזוג, ואחר כך סורקים פעם אחת. מה סדר הגודל הכולל? (למשל `O(n)`)",
       "accept": [
        "O(n log n)",
        "O(nlogn)"
       ],
       "normalize": "complexity",
       "explain": "המיון עולה בערך $nlog_2 n$ השוואות (נמדד במימוש מיון מיזוג: ל-$n=1024$ נמדדו 8932 השוואות, ול-$n=4096$ נמדדו 43941) והסריקה מוסיפה $n$. הסכום הוא `O(n log n)`.",
       "promptHtml": "מערך לא ממוין בגודל <code class=\"tok\" dir=\"ltr\">n</code> ממיינים במיון מיזוג, ואחר כך סורקים פעם אחת. מה סדר הגודל הכולל? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "המיון עולה בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>l</mi><mi>o</mi><msub><mi>g</mi><mn>2</mn></msub><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">nlog_2 n</annotation></semantics></math></span> השוואות (נמדד במימוש מיון מיזוג: ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1024</mn></mrow><annotation encoding=\"application/x-tex\">n=1024</annotation></semantics></math></span> נמדדו 8932 השוואות, ול-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4096</mn></mrow><annotation encoding=\"application/x-tex\">n=4096</annotation></semantics></math></span> נמדדו 43941) והסריקה מוסיפה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. הסכום הוא <code class=\"tok\" dir=\"ltr\">O(n log n)</code>."
      },
      "recap": "מיון מיזוג = `O(n log n)`; סריקה אחריו לא משנה.",
      "recapHtml": "מיון מיזוג = <code class=\"tok\" dir=\"ltr\">O(n log n)</code>; סריקה אחריו לא משנה."
     },
     {
      "id": "C07-Q3",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הפונקציה אמורה להחזיר 1 אם המערך ממוין בסדר עולה (לא ממש). שורה אחת שגויה, ועבור `{1,2,3,0}` מוחזר 1. מצאו אותה.",
       "lines": [
        "int is_sorted(int* a, int n)",
        "{",
        "    int i;",
        "    for (i = 1; i < n - 1; i++)",
        "        if (a[i - 1] > a[i])",
        "            return 0;",
        "    return 1;",
        "}"
       ],
       "bugIndex": 3,
       "explain": "התנאי `i < n - 1` מדלג על הזוג האחרון `a[n-2], a[n-1]`. צריך `i < n`. עבור `{1,2,3,0}` הגרסה השגויה מחזירה 1 והמתוקנת מחזירה 0 (הרצה).",
       "promptHtml": "הפונקציה אמורה להחזיר 1 אם המערך ממוין בסדר עולה (לא ממש). שורה אחת שגויה, ועבור <code class=\"tok\" dir=\"ltr\">{1,2,3,0}</code> מוחזר 1. מצאו אותה.",
       "explainHtml": "התנאי <code class=\"tok\" dir=\"ltr\">i &lt; n - 1</code> מדלג על הזוג האחרון <code class=\"tok\" dir=\"ltr\">a[n-2], a[n-1]</code>. צריך <code class=\"tok\" dir=\"ltr\">i &lt; n</code>. עבור <code class=\"tok\" dir=\"ltr\">{1,2,3,0}</code> הגרסה השגויה מחזירה 1 והמתוקנת מחזירה 0 (הרצה).",
       "linesHtml": [
        "int is_sorted(int* a, int n)",
        "{",
        "    int i;",
        "    for (i = 1; i &lt; n - 1; i++)",
        "        if (a[i - 1] &gt; a[i])",
        "            return 0;",
        "    return 1;",
        "}"
       ]
      },
      "recap": "עוברים על כל הזוגות השכנים: `i` מ-1 עד `n-1`.",
      "recapHtml": "עוברים על כל הזוגות השכנים: <code class=\"tok\" dir=\"ltr\">i</code> מ-1 עד <code class=\"tok\" dir=\"ltr\">n-1</code>."
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "numeric",
       "prompt": "מחפשים זוג עם סכום `k = 5000` במערך הממוין `a[i] = i` (`n = 1000`), בשני מצביעים. אין זוג כזה. כמה איטרציות מבצעת הלולאה?",
       "answer": 999,
       "tol": 0,
       "explain": "$a[lo]+a[hi]le 999+998<5000$, ולכן בכל איטרציה `lo++` עד ש-`lo` מגיע ל-999 ושווה ל-`hi`: $n-1=999$ איטרציות (הרצה: 999). זה המקרה הגרוע.",
       "promptHtml": "מחפשים זוג עם סכום <code class=\"tok\" dir=\"ltr\">k = 5000</code> במערך הממוין <code class=\"tok\" dir=\"ltr\">a[i] = i</code> (<code class=\"tok\" dir=\"ltr\">n = 1000</code>), בשני מצביעים. אין זוג כזה. כמה איטרציות מבצעת הלולאה?",
       "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mi>l</mi><mi>o</mi><mo stretchy=\"false\">]</mo><mo>+</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mi>h</mi><mi>i</mi><mo stretchy=\"false\">]</mo><mi>l</mi><mi>e</mi><mn>999</mn><mo>+</mo><mn>998</mn><mo>&lt;</mo><mn>5000</mn></mrow><annotation encoding=\"application/x-tex\">a[lo]+a[hi]le 999+998&lt;5000</annotation></semantics></math></span>, ולכן בכל איטרציה <code class=\"tok\" dir=\"ltr\">lo++</code> עד ש-<code class=\"tok\" dir=\"ltr\">lo</code> מגיע ל-999 ושווה ל-<code class=\"tok\" dir=\"ltr\">hi</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>999</mn></mrow><annotation encoding=\"application/x-tex\">n-1=999</annotation></semantics></math></span> איטרציות (הרצה: 999). זה המקרה הגרוע."
      },
      "recap": "המקרה הגרוע של שני מצביעים: $n-1$ צעדים.",
      "recapHtml": "המקרה הגרוע של שני מצביעים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> צעדים."
     },
     {
      "id": "C07-Q5",
      "step": {
       "type": "text",
       "prompt": "מה סדר הגודל של `count_above`, שסופרת כמה איברים גדולים מהממוצע? (למשל `O(n)`)\n```c\nint sum(int* a, int n)\n{\n    int i, s = 0;\n    for (i = 0; i < n; i++)\n        s += a[i];\n    return s;\n}\n\nint count_above(int* a, int n)\n{\n    int i, c = 0;\n    for (i = 0; i < n; i++)\n        if (a[i] * n > sum(a, n))\n            c++;\n    return c;\n}\n```",
       "accept": [
        "O(n^2)"
       ],
       "normalize": "complexity",
       "explain": "`sum` עוברת על $n$ איברים והיא נקראת $n$ פעמים: $ncdot n=n^2$ (נמדד: 1000000 חיבורים עבור $n=1000$ ו-4000000 עבור $n=2000$). זו לולאה חבויה.",
       "promptHtml": "מה סדר הגודל של <code class=\"tok\" dir=\"ltr\">count_above</code>, שסופרת כמה איברים גדולים מהממוצע? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int sum(int* a, int n)\n{\n    int i, s = 0;\n    for (i = 0; i &lt; n; i++)\n        s += a[i];\n    return s;\n}\n\nint count_above(int* a, int n)\n{\n    int i, c = 0;\n    for (i = 0; i &lt; n; i++)\n        if (a[i] * n &gt; sum(a, n))\n            c++;\n    return c;\n}</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">sum</code> עוברת על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים והיא נקראת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>c</mi><mi>d</mi><mi>o</mi><mi>t</mi><mi>n</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">ncdot n=n^2</annotation></semantics></math></span> (נמדד: 1000000 חיבורים עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">n=1000</annotation></semantics></math></span> ו-4000000 עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">n=2000</annotation></semantics></math></span>). זו לולאה חבויה."
      },
      "recap": "קריאה לפונקציה עם לולאה בתוך לולאה = $n^2$.",
      "recapHtml": "קריאה לפונקציה עם לולאה בתוך לולאה = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>."
     },
     {
      "id": "C07-Q6",
      "question": "איזה שינוי הופך את `count_above` מהשאלה הקודמת ל-`O(n)` בכל קלט?",
      "options": [
       {
        "id": "a",
        "value": "לחשב את `sum(a, n)` פעם אחת לפני הלולאה, לשמור במשתנה ולהשתמש בו בתנאי",
        "type": "text",
        "html": "לחשב את <code class=\"tok\" dir=\"ltr\">sum(a, n)</code> פעם אחת לפני הלולאה, לשמור במשתנה ולהשתמש בו בתנאי"
       },
       {
        "id": "b",
        "value": "להגדיר את `sum` כ-`static inline`",
        "type": "text",
        "html": "להגדיר את <code class=\"tok\" dir=\"ltr\">sum</code> כ-<code class=\"tok\" dir=\"ltr\">static inline</code>"
       },
       {
        "id": "c",
        "value": "לכתוב את התנאי כ-`a[i] > sum(a, n) / n`",
        "type": "text",
        "html": "לכתוב את התנאי כ-<code class=\"tok\" dir=\"ltr\">a[i] &gt; sum(a, n) / n</code>"
       },
       {
        "id": "d",
        "value": "לקרוא ל-`sum` רק כש-`a[i] > 0`",
        "type": "text",
        "html": "לקרוא ל-<code class=\"tok\" dir=\"ltr\">sum</code> רק כש-<code class=\"tok\" dir=\"ltr\">a[i] &gt; 0</code>"
       }
      ],
      "correctId": "a",
      "explanation": "שמירת הסכום במשתנה מבטלת את $n-1$ הקריאות המיותרות: $2n$ חיבורים בסך הכול. `inline` לא משנה את מספר החיבורים. שינוי הנוסחה בתנאי עדיין קורא ל-`sum` בכל איטרציה. והתנאי `a[i] > 0` מקל רק כשיש הרבה איברים לא חיוביים, אבל כשכולם חיוביים `sum` נקראת $n$ פעמים. נמדד על מערך חיובי בגודל 1000: אפשרות א נתנה 2000 חיבורים וכל האחרות 1000000.",
      "recap": "מחשבים פעם אחת מחוץ ללולאה.",
      "questionHtml": "איזה שינוי הופך את <code class=\"tok\" dir=\"ltr\">count_above</code> מהשאלה הקודמת ל-<code class=\"tok\" dir=\"ltr\">O(n)</code> בכל קלט?",
      "explanationHtml": "שמירת הסכום במשתנה מבטלת את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> הקריאות המיותרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> חיבורים בסך הכול. <code class=\"tok\" dir=\"ltr\">inline</code> לא משנה את מספר החיבורים. שינוי הנוסחה בתנאי עדיין קורא ל-<code class=\"tok\" dir=\"ltr\">sum</code> בכל איטרציה. והתנאי <code class=\"tok\" dir=\"ltr\">a[i] &gt; 0</code> מקל רק כשיש הרבה איברים לא חיוביים, אבל כשכולם חיוביים <code class=\"tok\" dir=\"ltr\">sum</code> נקראת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים. נמדד על מערך חיובי בגודל 1000: אפשרות א נתנה 2000 חיבורים וכל האחרות 1000000.",
      "recapHtml": "מחשבים פעם אחת מחוץ ללולאה."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות מערכים וסיבוכיות מהמבחנים עצמם: מערך ספירה, שני מצביעים, סכום רץ והחלפות במקום.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>זהו שלב הסיום: חמש שאלות אמיתיות מהמבחנים. בכל אחת עושים את אותם שלושה צעדים:</p>\n<ol>\n<li><b>קוראים את הדרישות:</b> סדר גודל? מערך עזר מותר? המערך ממוין? מה טווח הערכים?</li>\n<li><b>בוחרים טכניקה</b> לפי הטבלה: מערך ספירה, שני מצביעים, סכום רץ או החלפות במקום.</li>\n<li><b>בודקים מקרי קצה:</b> מערך באורך 1, כל האיברים שווים, אין תשובה.</li>\n</ol>\n<div class=\"lesson-rule\">🔑 סדר גודל אומרים תמיד עם נימוק: <b>כמה פעמים רצה כל לולאה</b> ומה מכפילים או מחברים. כך מצדיקים גם את התשובה \"<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(m+n)</annotation></semantics></math></span>\" ולא רק כותבים אותה.</div>\n<div class=\"lesson-trap\">⚠️ בשאלות כתיבת קוד: אם כתוב \"סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>\" ויש לולאה בתוך לולאה, הפתרון נפסל גם אם הוא נכון.</div>\n"
    },
    "questions": [
     {
      "bankId": "19A-A-Q3a",
      "recap": "פלינדרום-אפשרי: לכל היותר שכיחות אי-זוגית אחת, מערך ספירה ב-`O(n)`.",
      "recapHtml": "פלינדרום-אפשרי: לכל היותר שכיחות אי-זוגית אחת, מערך ספירה ב-<code class=\"tok\" dir=\"ltr\">O(n)</code>."
     },
     {
      "bankId": "19A-A-Q4",
      "recap": "שני מערכים ממוינים בכיוונים מנוגדים: מצביע בכל מערך, מקדמים את הקטן.",
      "recapHtml": "שני מערכים ממוינים בכיוונים מנוגדים: מצביע בכל מערך, מקדמים את הקטן."
     },
     {
      "bankId": "20A-A-Q3b",
      "recap": "שני מצביעים שלא חוזרים אחורה: `O(m+n)`.",
      "recapHtml": "שני מצביעים שלא חוזרים אחורה: <code class=\"tok\" dir=\"ltr\">O(m+n)</code>."
     },
     {
      "bankId": "23A-A-Q1",
      "recap": "זוגות בסכום זהה: `swap` במקום, בלי מערך עזר, ב-`O(n)`.",
      "recapHtml": "זוגות בסכום זהה: <code class=\"tok\" dir=\"ltr\">swap</code> במקום, בלי מערך עזר, ב-<code class=\"tok\" dir=\"ltr\">O(n)</code>."
     },
     {
      "bankId": "25A-A-Q1",
      "recap": "סכום רץ: סכום כולל, ואז מעבר עם סכום חלקי, `O(n)`.",
      "recapHtml": "סכום רץ: סכום כולל, ואז מעבר עם סכום חלקי, <code class=\"tok\" dir=\"ltr\">O(n)</code>."
     }
    ]
   }
  ]
 },
 "c_strings": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔤",
    "title": "תו הוא מספר, מחרוזת נגמרת ב-'\\0'",
    "goal": "אחרי השלב הזה תדעו מה מחזיקה מחרוזת בזיכרון, ומה ההבדל בין גודל המערך לאורך המחרוזת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>ב-C אין סוג נתונים \"מחרוזת\". מחרוזת היא <b>מערך של תווים</b> (<code>char</code>) שנגמר בתו מיוחד אחד: <code>'\\0'</code>. כל השלבים הבאים נשענים על שני הרעיונות שכאן.</p>\n<h3>1. תו הוא מספר</h3>\n<p>משתנה <code>char</code> שומר מספר קטן. אות בגרשיים בודדים, למשל <code>'a'</code>, היא קיצור למספר הקוד שלה בטבלת ASCII: <code>'a'</code> הוא 97, <code>'b'</code> הוא 98, <code>'A'</code> הוא 65 ו-<code>'0'</code> הוא 48. אותו תו מודפס כאות עם <code>%c</code> וכמספר עם <code>%d</code>.</p>\n<pre>char c = 'a';\nprintf(\"%c %d\", c, c);   /* a 97 */\nprintf(\"%c\", c + 1);     /* b */</pre>\n<div class=\"lesson-rule\">🔑 האותיות רצופות בטבלה, ולכן <code>'a' + 1</code> הוא <code>'b'</code> ו-<code>'z' - 'a'</code> הוא 25.</div>\n<h3>2. מחרוזת נגמרת ב-'\\0'</h3>\n<p>המחרוזת <code>\"abc\"</code> נשמרת בארבעה תאים: <code>'a'</code>, <code>'b'</code>, <code>'c'</code> ועוד התו <code>'\\0'</code>, תו שערכו 0. הוא סימן הסוף: <code>printf(\"%s\")</code> ו-<code>strlen</code> קוראים תו אחר תו עד שהם פוגשים אותו.</p>\n<table>\n<thead><tr><th>ביטוי</th><th>מה הוא סופר</th><th>עבור <code>char s[] = \"abc\"</code></th></tr></thead>\n<tbody>\n<tr><td><code>sizeof(s)</code></td><td>כל התאים במערך, כולל ה-<code>'\\0'</code></td><td>4</td></tr>\n<tr><td><code>strlen(s)</code></td><td>התווים שלפני ה-<code>'\\0'</code> הראשון</td><td>3</td></tr>\n</tbody></table>\n<pre>char s[] = \"abc\";    /* 4 cells: a b c \\0 */\nchar t[10] = \"hi\";   /* 10 cells, but strlen(t) == 2 */</pre>\n<div class=\"lesson-rule\">🔑 מערך שמחזיק מחרוזת באורך n חייב להכיל לפחות n+1 תאים. האורך של המחרוזת (<code>strlen</code>) נקבע לפי מיקום ה-<code>'\\0'</code>, לא לפי גודל המערך.</div>\n<div class=\"lesson-ex\">דוגמה: אחרי <code>char s[] = \"hello\"; s[2] = '\\0';</code> ההדפסה <code>printf(\"%s\", s)</code> נותנת <code>he</code> ו-<code>strlen(s)</code> הוא 2, כי הקריאה נעצרת ב-<code>'\\0'</code> החדש. אבל <code>sizeof(s)</code> עדיין 6: המערך לא התכווץ.</div>\n<div class=\"lesson-trap\">⚠️ <code>'a'</code> ו-<code>\"a\"</code> שונים: הראשון תו בודד (המספר 97), והשני מחרוזת של שני תאים (<code>'a'</code> ו-<code>'\\0'</code>).</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"abc\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));\n```",
      "options": [
       {
        "id": "a",
        "value": "`4 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4 3</code>"
       },
       {
        "id": "b",
        "value": "`3 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 3</code>"
       },
       {
        "id": "c",
        "value": "`4 4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4 4</code>"
       },
       {
        "id": "d",
        "value": "`3 4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 4</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`sizeof(s)` סופר את כל התאים במערך, כולל ה-`'\\0'`: ארבעה. `strlen(s)` עוצר לפני ה-`'\\0'`: שלושה. התשובה `3 3` שוכחת את תא הסיום, `4 4` סופרת אותו גם באורך, ו-`3 4` מחליפה בין השניים.",
      "recap": "sizeof סופר תאים כולל '\\0', strlen עוצר לפניו",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abc\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">sizeof(s)</code> סופר את כל התאים במערך, כולל ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>: ארבעה. <code class=\"tok\" dir=\"ltr\">strlen(s)</code> עוצר לפני ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>: שלושה. התשובה <code class=\"tok\" dir=\"ltr\">3 3</code> שוכחת את תא הסיום, <code class=\"tok\" dir=\"ltr\">4 4</code> סופרת אותו גם באורך, ו-<code class=\"tok\" dir=\"ltr\">3 4</code> מחליפה בין השניים.",
      "recapHtml": "sizeof סופר תאים כולל '\\0', strlen עוצר לפניו"
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
       "explain": "`'a'` הוא 97, ו-`'a' + 2` הוא 99, שהוא הקוד של `'c'`. עם `%c` מודפסת האות `c`, ועם `%d` היה מודפס 99.",
       "promptHtml": "מה ידפיס הקוד? (תו אחד)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>printf(\"%c\", 'a' + 2);</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">'a'</code> הוא 97, ו-<code class=\"tok\" dir=\"ltr\">'a' + 2</code> הוא 99, שהוא הקוד של <code class=\"tok\" dir=\"ltr\">'c'</code>. עם <code class=\"tok\" dir=\"ltr\">%c</code> מודפסת האות <code class=\"tok\" dir=\"ltr\">c</code>, ועם <code class=\"tok\" dir=\"ltr\">%d</code> היה מודפס 99."
      },
      "recap": "האותיות רצופות: 'a' + 2 הוא 'c'",
      "recapHtml": "האותיות רצופות: 'a' + 2 הוא 'c'"
     },
     {
      "id": "C01-Q3",
      "question": "מה מדפיס הקוד?\n```c\nchar s[10] = \"hi\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));\n```",
      "options": [
       {
        "id": "a",
        "value": "`2 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 2</code>"
       },
       {
        "id": "b",
        "value": "`10 10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10 10</code>"
       },
       {
        "id": "c",
        "value": "`3 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 2</code>"
       },
       {
        "id": "d",
        "value": "`10 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10 2</code>"
       }
      ],
      "correctId": "d",
      "explanation": "המערך הוגדר עם 10 תאים, ולכן `sizeof(s)` הוא 10. המחרוזת שבתוכו היא `\"hi\"` ואחריה `'\\0'`, ולכן `strlen(s)` הוא 2. גודל המערך ואורך המחרוזת הם שני מספרים נפרדים: `2 2` ו-`10 10` מתעלמות מההבדל, ו-`3 2` מניחה שהמערך בגודל המחרוזת כולל ה-`'\\0'`.",
      "recap": "גודל המערך (sizeof) שונה מאורך המחרוזת (strlen)",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[10] = \"hi\";\nprintf(\"%d %d\", (int)sizeof(s), (int)strlen(s));</code></pre>",
      "explanationHtml": "המערך הוגדר עם 10 תאים, ולכן <code class=\"tok\" dir=\"ltr\">sizeof(s)</code> הוא 10. המחרוזת שבתוכו היא <code class=\"tok\" dir=\"ltr\">\"hi\"</code> ואחריה <code class=\"tok\" dir=\"ltr\">'\\0'</code>, ולכן <code class=\"tok\" dir=\"ltr\">strlen(s)</code> הוא 2. גודל המערך ואורך המחרוזת הם שני מספרים נפרדים: <code class=\"tok\" dir=\"ltr\">2 2</code> ו-<code class=\"tok\" dir=\"ltr\">10 10</code> מתעלמות מההבדל, ו-<code class=\"tok\" dir=\"ltr\">3 2</code> מניחה שהמערך בגודל המחרוזת כולל ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>.",
      "recapHtml": "גודל המערך (sizeof) שונה מאורך המחרוזת (strlen)"
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nchar s[] = \"banana\";\ns[4] = '\\0';\nprintf(\"%d\", (int)strlen(s));\n```",
       "answer": 4,
       "tol": 0,
       "explain": "התאים הם `b a n a n a \\0`. אחרי `s[4] = '\\0'` התא ה-4 (מספור מ-0) הוא סימן הסוף, ולכן יש ארבעה תווים לפניו: `bana`, ו-`strlen` מחזירה 4.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"banana\";\ns[4] = '\\0';\nprintf(\"%d\", (int)strlen(s));</code></pre>",
       "explainHtml": "התאים הם <code class=\"tok\" dir=\"ltr\">b a n a n a \\0</code>. אחרי <code class=\"tok\" dir=\"ltr\">s[4] = '\\0'</code> התא ה-4 (מספור מ-0) הוא סימן הסוף, ולכן יש ארבעה תווים לפניו: <code class=\"tok\" dir=\"ltr\">bana</code>, ו-<code class=\"tok\" dir=\"ltr\">strlen</code> מחזירה 4."
      },
      "recap": "strlen נעצרת ב-'\\0' הראשון, גם אם אחריו יש עוד תווים",
      "recapHtml": "strlen נעצרת ב-'\\0' הראשון, גם אם אחריו יש עוד תווים"
     },
     {
      "id": "C01-Q5",
      "question": "מה מדפיס הקוד?\n```c\nprintf(\"%d %d\", 'a', (int)sizeof(\"a\"));\n```",
      "options": [
       {
        "id": "a",
        "value": "`97 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">97 1</code>"
       },
       {
        "id": "b",
        "value": "`1 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2</code>"
       },
       {
        "id": "c",
        "value": "`97 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">97 2</code>"
       },
       {
        "id": "d",
        "value": "`2 97`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 97</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`'a'` הוא תו בודד, ובהדפסה עם `%d` מקבלים את הקוד שלו: 97. `\"a\"` היא מחרוזת של שני תאים (`'a'` ו-`'\\0'`), ולכן `sizeof(\"a\")` הוא 2. אין `1` בשום מקום: גם מחרוזת של אות אחת תופסת שני בתים.",
      "recap": "'a' הוא תו (97), \"a\" הוא מערך של שני תאים",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>printf(\"%d %d\", 'a', (int)sizeof(\"a\"));</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">'a'</code> הוא תו בודד, ובהדפסה עם <code class=\"tok\" dir=\"ltr\">%d</code> מקבלים את הקוד שלו: 97. <code class=\"tok\" dir=\"ltr\">\"a\"</code> היא מחרוזת של שני תאים (<code class=\"tok\" dir=\"ltr\">'a'</code> ו-<code class=\"tok\" dir=\"ltr\">'\\0'</code>), ולכן <code class=\"tok\" dir=\"ltr\">sizeof(\"a\")</code> הוא 2. אין <code class=\"tok\" dir=\"ltr\">1</code> בשום מקום: גם מחרוזת של אות אחת תופסת שני בתים.",
      "recapHtml": "'a' הוא תו (97), \"a\" הוא מערך של שני תאים"
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
         "value": "t[2] = '\\0';",
         "html": "t[2] = '\\0';"
        },
        {
         "id": "b",
         "type": "text",
         "value": "t[2] = '0';",
         "html": "t[2] = '0';"
        },
        {
         "id": "c",
         "type": "text",
         "value": "t[3] = '\\0';",
         "html": "t[3] = '\\0';"
        },
        {
         "id": "d",
         "type": "text",
         "value": "t[1] = '\\0';",
         "html": "t[1] = '\\0';"
        }
       ],
       "correctId": "a",
       "explain": "ההדפסה קוראת עד ה-`'\\0'` הראשון, ולכן צריך לשים אותו מיד אחרי `ok`, בתא 2. `t[2] = '0'` שם את התו הספרה אפס (לא סימן סיום) ומדפיס `ok0XX`. `t[3] = '\\0'` משאיר את `X` בתא 2 ומדפיס `okX`. `t[1] = '\\0'` דורס את ה-`k` ומדפיס `o`.",
       "promptHtml": "המערך <code class=\"tok\" dir=\"ltr\">t</code> מלא מראש באותיות <code class=\"tok\" dir=\"ltr\">X</code>. מה צריך להיכנס במקום ___ כדי שההדפסה תהיה בדיוק <code class=\"tok\" dir=\"ltr\">ok</code>?",
       "explainHtml": "ההדפסה קוראת עד ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code> הראשון, ולכן צריך לשים אותו מיד אחרי <code class=\"tok\" dir=\"ltr\">ok</code>, בתא 2. <code class=\"tok\" dir=\"ltr\">t[2] = '0'</code> שם את התו הספרה אפס (לא סימן סיום) ומדפיס <code class=\"tok\" dir=\"ltr\">ok0XX</code>. <code class=\"tok\" dir=\"ltr\">t[3] = '\\0'</code> משאיר את <code class=\"tok\" dir=\"ltr\">X</code> בתא 2 ומדפיס <code class=\"tok\" dir=\"ltr\">okX</code>. <code class=\"tok\" dir=\"ltr\">t[1] = '\\0'</code> דורס את ה-<code class=\"tok\" dir=\"ltr\">k</code> ומדפיס <code class=\"tok\" dir=\"ltr\">o</code>.",
       "linesHtml": [
        "char t[6] = \"XXXXX\";",
        "t[0] = 'o';",
        "t[1] = 'k';",
        "___",
        "printf(\"%s\", t);"
       ]
      },
      "recap": "בלי '\\0' במקום הנכון, המחרוזת ממשיכה עד הסימן הבא",
      "recapHtml": "בלי '\\0' במקום הנכון, המחרוזת ממשיכה עד הסימן הבא"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🚶",
    "title": "לעבור על מחרוזת",
    "goal": "אחרי השלב הזה תוכלו לכתוב לולאה שעוברת על מחרוזת ולספור בה תווים, ותדעו מה עולה strlen.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כמעט כל פונקציה על מחרוזת היא לולאה אחת שעוברת על התווים עד ה-<code>'\\0'</code>. אין צורך לדעת את האורך מראש: סימן הסוף הוא תנאי העצירה.</p>\n<h3>1. שתי דרכים לעבור על מחרוזת</h3>\n<pre>for (int i = 0; s[i] != '\\0'; i++) {\n    /* use s[i] */\n}\n\nwhile (*s) {        /* *s is 0 exactly at the terminator */\n    /* use *s */\n    s++;\n}</pre>\n<p>התנאי <code>s[i] != '\\0'</code> אפשר לקצר ל-<code>s[i]</code>, כי <code>'\\0'</code> הוא 0 וכל תו אחר שונה מ-0.</p>\n<div class=\"lesson-rule\">🔑 עוצרים כשפוגשים <code>'\\0'</code>. לא סופרים מראש, לא יוצאים מהמערך.</div>\n<h3>2. מתכון הספירה</h3>\n<p>כדי לספור תווים שמקיימים תנאי: מאפסים מונה, עוברים על כל המחרוזת, מעלים את המונה בכל תו מתאים, ומחזירים אותו.</p>\n<pre>int countChar(char *s, char c) {\n    int n = 0;\n    for (int i = 0; s[i] != '\\0'; i++)\n        if (s[i] == c)\n            n++;\n    return n;\n}</pre>\n<div class=\"lesson-ex\">דוגמה: <code>countChar(\"banana\", 'a')</code>. המחרוזת מכילה <code>b a n a n a</code>, והלולאה פוגשת את <code>'a'</code> שלוש פעמים, ולכן התוצאה 3.</div>\n<h3>3. strlen היא אותה לולאה</h3>\n<p><code>strlen(s)</code> (מ-<code>string.h</code>) עושה בדיוק מעבר כזה וסופרת את התווים שלפני ה-<code>'\\0'</code>. לכן היא עולה זמן שווה לאורך המחרוזת, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.</p>\n<div class=\"lesson-trap\">⚠️ <code>i &lt;= strlen(s)</code> עושה צעד אחד יותר מדי: הוא מגיע גם אל ה-<code>'\\0'</code> עצמו. ו-<code>i &lt; strlen(s)</code> נכון אבל איטי: בכל בדיקת תנאי <code>strlen</code> עוברת שוב על כל המחרוזת, ולכן הלולאה כולה לוקחת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>. אם צריך את האורך, מחשבים אותו פעם אחת לפני הלולאה, או פשוט בודקים <code>s[i] != '\\0'</code>.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה הקריאה בשורה האחרונה?\n```c\nint countChar(char *s, char c) {\n    int n = 0;\n    for (int i = 0; s[i] != '\\0'; i++)\n        if (s[i] == c)\n            n++;\n    return n;\n}\n\nint main(void) {\n    printf(\"%d\", countChar(\"mississippi\", 's'));\n    return 0;\n}\n```",
       "answer": 4,
       "tol": 0,
       "explain": "במילה `mississippi` האות `s` מופיעה פעמיים ב-`ss` הראשון ופעמיים ב-`ss` השני: ארבע פעמים.",
       "promptHtml": "מה מחזירה הקריאה בשורה האחרונה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int countChar(char *s, char c) {\n    int n = 0;\n    for (int i = 0; s[i] != '\\0'; i++)\n        if (s[i] == c)\n            n++;\n    return n;\n}\n\nint main(void) {\n    printf(\"%d\", countChar(\"mississippi\", 's'));\n    return 0;\n}</code></pre>",
       "explainHtml": "במילה <code class=\"tok\" dir=\"ltr\">mississippi</code> האות <code class=\"tok\" dir=\"ltr\">s</code> מופיעה פעמיים ב-<code class=\"tok\" dir=\"ltr\">ss</code> הראשון ופעמיים ב-<code class=\"tok\" dir=\"ltr\">ss</code> השני: ארבע פעמים."
      },
      "recap": "ספירה: מונה שעולה בכל תו מתאים",
      "recapHtml": "ספירה: מונה שעולה בכל תו מתאים"
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
       "explain": "קודם מאפסים את המונה, אחר כך הלולאה מקדמת אותו עד ה-`'\\0'`, ורק בסוף מחזירים. החזרה לפני הלולאה הייתה מחזירה 0, והלולאה לפני ההצהרה לא הייתה מתקמפלת.",
       "promptHtml": "סדרו את שורות הפונקציה שמחשבת אורך מחרוזת בלי <code class=\"tok\" dir=\"ltr\">strlen</code>.",
       "explainHtml": "קודם מאפסים את המונה, אחר כך הלולאה מקדמת אותו עד ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>, ורק בסוף מחזירים. החזרה לפני הלולאה הייתה מחזירה 0, והלולאה לפני ההצהרה לא הייתה מתקמפלת.",
       "linesHtml": [
        "int myStrlen(char *s) {\n    int len = 0;",
        "    while (s[len] != '\\0')\n        len++;",
        "    return len;\n}"
       ]
      },
      "recap": "אורך = מונה שמתקדם עד '\\0'",
      "recapHtml": "אורך = מונה שמתקדם עד '\\0'"
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
       "explain": "`=` היא השמה ולא השוואה: היא שמה רווח בתא `s[i]` והתוצאה (קוד הרווח, שאינו 0) נחשבת אמת, כך שכל תו נספר, והמחרוזת גם נהרסת. על `\"a b c\"` מתקבל 5 במקום 2. הנכון הוא `s[i] == ' '`.",
       "promptHtml": "הפונקציה אמורה לספור רווחים במחרוזת, אבל שורה אחת שונה והיא מחזירה תוצאה שגויה (למשל על <code class=\"tok\" dir=\"ltr\">\"a b c\"</code>). איזו שורה?",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">=</code> היא השמה ולא השוואה: היא שמה רווח בתא <code class=\"tok\" dir=\"ltr\">s[i]</code> והתוצאה (קוד הרווח, שאינו 0) נחשבת אמת, כך שכל תו נספר, והמחרוזת גם נהרסת. על <code class=\"tok\" dir=\"ltr\">\"a b c\"</code> מתקבל 5 במקום 2. הנכון הוא <code class=\"tok\" dir=\"ltr\">s[i] == ' '</code>.",
       "linesHtml": [
        "int countSpaces(char *s) {",
        "    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (s[i] = ' ')",
        "            n++;",
        "    return n;",
        "}"
       ]
      },
      "recap": "השוואה היא ==, לא =",
      "recapHtml": "השוואה היא ==, לא ="
     },
     {
      "id": "C02-Q4",
      "question": "מה מדפיס הקוד? (אחרי כל מספר יש רווח)\n```c\nchar s[] = \"abc\";\nfor (int i = 0; i <= (int)strlen(s); i++)\n    printf(\"%d \", s[i]);\n```",
      "options": [
       {
        "id": "a",
        "value": "`97 98 99`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">97 98 99</code>"
       },
       {
        "id": "b",
        "value": "`97 98 99 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">97 98 99 0</code>"
       },
       {
        "id": "c",
        "value": "`0 97 98 99`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0 97 98 99</code>"
       },
       {
        "id": "d",
        "value": "`97 98 99 4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">97 98 99 4</code>"
       }
      ],
      "correctId": "b",
      "explanation": "התנאי `i <= strlen(s)` כולל גם את `i == 3`, כלומר את התא של ה-`'\\0'`, שערכו 0. לכן מודפסים ארבעה מספרים: הקודים 97, 98, 99 ובסוף 0. הלולאה הנכונה היא עם `<`, או עם התנאי `s[i] != '\\0'`.",
      "recap": "<= strlen מגיע גם אל ה-'\\0'",
      "questionHtml": "מה מדפיס הקוד? (אחרי כל מספר יש רווח)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abc\";\nfor (int i = 0; i &lt;= (int)strlen(s); i++)\n    printf(\"%d \", s[i]);</code></pre>",
      "explanationHtml": "התנאי <code class=\"tok\" dir=\"ltr\">i &lt;= strlen(s)</code> כולל גם את <code class=\"tok\" dir=\"ltr\">i == 3</code>, כלומר את התא של ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>, שערכו 0. לכן מודפסים ארבעה מספרים: הקודים 97, 98, 99 ובסוף 0. הלולאה הנכונה היא עם <code class=\"tok\" dir=\"ltr\">&lt;</code>, או עם התנאי <code class=\"tok\" dir=\"ltr\">s[i] != '\\0'</code>.",
      "recapHtml": "&lt;= strlen מגיע גם אל ה-'\\0'"
     },
     {
      "id": "C02-Q5",
      "step": {
       "type": "text",
       "prompt": "מהי סיבוכיות הזמן של הפונקציה כשאורך המחרוזת הוא n? (למשל `O(n)`)\n```c\nint count(char *s) {\n    int n = 0;\n    for (int i = 0; i < strlen(s); i++)\n        n++;\n    return n;\n}\n```",
       "accept": [
        "O(n^2)"
       ],
       "normalize": "complexity",
       "explain": "בכל בדיקת תנאי `strlen(s)` עוברת על כל המחרוזת, n צעדים. הבדיקה נעשית כ-n פעמים, ולכן סך הכל כ-$n \\cdot n$ צעדים: $O(n^2)$. פתרון: לחשב את האורך פעם אחת לפני הלולאה, או לבדוק `s[i] != '\\0'`.",
       "promptHtml": "מהי סיבוכיות הזמן של הפונקציה כשאורך המחרוזת הוא n? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count(char *s) {\n    int n = 0;\n    for (int i = 0; i &lt; strlen(s); i++)\n        n++;\n    return n;\n}</code></pre>",
       "explainHtml": "בכל בדיקת תנאי <code class=\"tok\" dir=\"ltr\">strlen(s)</code> עוברת על כל המחרוזת, n צעדים. הבדיקה נעשית כ-n פעמים, ולכן סך הכל כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>⋅</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n \\cdot n</annotation></semantics></math></span> צעדים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>. פתרון: לחשב את האורך פעם אחת לפני הלולאה, או לבדוק <code class=\"tok\" dir=\"ltr\">s[i] != '\\0'</code>."
      },
      "recap": "strlen בתנאי לולאה = O(n^2)",
      "recapHtml": "strlen בתנאי לולאה = O(n^2)"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🔢",
    "title": "אותיות וספרות כמספרים",
    "goal": "אחרי השלב הזה תוכלו לבדוק טווח של תווים, להמיר ספרה לערך ואות לאינדקס, ולבנות מספר ממחרוזת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כי תו הוא מספר, אפשר לעשות איתו חשבון. שלוש תבניות מופיעות שוב ושוב: ספרה לערך, אות לאינדקס, ובדיקת טווח.</p>\n<h3>1. ספרה וערך</h3>\n<p>הספרות <code>'0'</code> עד <code>'9'</code> רצופות בטבלה, ולכן הערך של ספרה הוא <code>c - '0'</code>. למשל <code>'7' - '0'</code> הוא 7. שימו לב: <code>'7'</code> לבדו הוא 55, לא 7.</p>\n<h3>2. אות ואינדקס</h3>\n<p>האותיות הקטנות רצופות, ולכן <code>c - 'a'</code> הוא מיקום האות באלפבית שמתחיל ב-0: <code>'a'</code> הוא 0, <code>'c'</code> הוא 2 ו-<code>'z'</code> הוא 25. מאוחר יותר זה יהיה האינדקס במערך של 26 מונים. בכיוון ההפוך, <code>'a' + k</code> הוא האות במקום k.</p>\n<h3>3. בדיקת טווח</h3>\n<pre>c &gt;= 'a' &amp;&amp; c &lt;= 'z'     /* lowercase letter */\nc &gt;= '0' &amp;&amp; c &lt;= '9'     /* digit */</pre>\n<p>שתי ההשוואות חייבות להתקיים יחד (<code>&amp;&amp;</code>). אם כותבים <code>||</code>, כל תו מקיים לפחות אחת מהן והתנאי תמיד אמת.</p>\n<h3>4. אותיות גדולות</h3>\n<p>האותיות הגדולות הן בלוק נפרד בטבלה (<code>'A'</code> הוא 65). האות הקטנה <code>c</code> הופכת לגדולה כך: <code>c - 'a' + 'A'</code>. קודם מוצאים את המקום באלפבית, ואז מתחילים מ-<code>'A'</code>.</p>\n<h3>5. בניית מספר מספרות</h3>\n<p>קוראים את המחרוזת משמאל לימין. בכל ספרה מכפילים את מה שנצבר ב-10 ומוסיפים את ערך הספרה.</p>\n<div class=\"lesson-ex\">דוגמה: <code>\"472\"</code>. מתחילים ב-<code>n = 0</code>. אחרי <code>'4'</code>: <code>0*10 + 4 = 4</code>. אחרי <code>'7'</code>: <code>4*10 + 7 = 47</code>. אחרי <code>'2'</code>: <code>47*10 + 2 = 472</code>.</div>\n<pre>int toInt(char *s) {\n    int n = 0;\n    for (int i = 0; s[i] != '\\0'; i++)\n        n = n * 10 + (s[i] - '0');\n    return n;\n}</pre>\n<div class=\"lesson-trap\">⚠️ <code>c == 5</code> שואל אם התו הוא קוד 5, לא אם הוא הספרה 5. הספרה היא <code>'5'</code>. ובלי החיסור של <code>'0'</code> נצבר קוד ה-ASCII ולא הערך.</div>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nprintf(\"%d\", '7' - '0' + 1);\n```",
       "answer": 8,
       "tol": 0,
       "explain": "`'7'` הוא הקוד 55, ו-`'0'` הוא הקוד 48. ההפרש `'7' - '0'` הוא 7, ערך הספרה, ולכן התוצאה 7 + 1 = 8. החיסור של `'0'` הוא מה שהופך קוד של ספרה לערך שלה.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>printf(\"%d\", '7' - '0' + 1);</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">'7'</code> הוא הקוד 55, ו-<code class=\"tok\" dir=\"ltr\">'0'</code> הוא הקוד 48. ההפרש <code class=\"tok\" dir=\"ltr\">'7' - '0'</code> הוא 7, ערך הספרה, ולכן התוצאה 7 + 1 = 8. החיסור של <code class=\"tok\" dir=\"ltr\">'0'</code> הוא מה שהופך קוד של ספרה לערך שלה."
      },
      "recap": "ערך ספרה = c - '0'",
      "recapHtml": "ערך ספרה = c - '0'"
     },
     {
      "id": "C03-Q2",
      "question": "מה מדפיס הקוד?\n```c\nprintf(\"%c%c\", 'a' + 3, 'z' - 2);\n```",
      "options": [
       {
        "id": "a",
        "value": "`dy`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">dy</code>"
       },
       {
        "id": "b",
        "value": "`ex`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ex</code>"
       },
       {
        "id": "c",
        "value": "`cx`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">cx</code>"
       },
       {
        "id": "d",
        "value": "`dx`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">dx</code>"
       }
      ],
      "correctId": "d",
      "explanation": "`'a' + 3` הוא האות שנמצאת שלושה מקומות אחרי `a`, כלומר `d`. `'z' - 2` הוא האות שנמצאת שני מקומות לפני `z`, כלומר `x`. לכן `dx`. שלוש האפשרויות האחרות טועות בהזזה באות אחת.",
      "recap": "הזזת אות: 'a' + k",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>printf(\"%c%c\", 'a' + 3, 'z' - 2);</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">'a' + 3</code> הוא האות שנמצאת שלושה מקומות אחרי <code class=\"tok\" dir=\"ltr\">a</code>, כלומר <code class=\"tok\" dir=\"ltr\">d</code>. <code class=\"tok\" dir=\"ltr\">'z' - 2</code> הוא האות שנמצאת שני מקומות לפני <code class=\"tok\" dir=\"ltr\">z</code>, כלומר <code class=\"tok\" dir=\"ltr\">x</code>. לכן <code class=\"tok\" dir=\"ltr\">dx</code>. שלוש האפשרויות האחרות טועות בהזזה באות אחת.",
      "recapHtml": "הזזת אות: 'a' + k"
     },
     {
      "id": "C03-Q3",
      "question": "איזה ביטוי צריך להיות במקום ___ כדי שהפונקציה תחזיר אמת בדיוק עבור תווי ספרה?\n```c\nint isDigit(char c) {\n    return ___;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`c >= '0' && c <= '9'`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">c &gt;= '0' &amp;&amp; c &lt;= '9'</code>"
       },
       {
        "id": "b",
        "value": "`c >= 0 && c <= 9`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">c &gt;= 0 &amp;&amp; c &lt;= 9</code>"
       },
       {
        "id": "c",
        "value": "`c > '0' && c < '9'`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">c &gt; '0' &amp;&amp; c &lt; '9'</code>"
       },
       {
        "id": "d",
        "value": "`c >= '0' || c <= '9'`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">c &gt;= '0' || c &lt;= '9'</code>"
       }
      ],
      "correctId": "a",
      "explanation": "הטווח של הספרות הוא `'0'` עד `'9'` כולל שני הקצוות, ושני התנאים חייבים להתקיים: `&&`. `c >= 0 && c <= 9` משווה לתווים שקודם 0 עד 9, לא לספרות: עבור `'5'` (קוד 53) התוצאה שקר. `c > '0' && c < '9'` מפספס את `'0'` ואת `'9'`. `c >= '0' || c <= '9'` נכון לכל תו, גם ל-`'x'`.",
      "recap": "טווח: שני התנאים עם && וקצוות כלולים",
      "questionHtml": "איזה ביטוי צריך להיות במקום ___ כדי שהפונקציה תחזיר אמת בדיוק עבור תווי ספרה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int isDigit(char c) {\n    return ___;\n}</code></pre>",
      "explanationHtml": "הטווח של הספרות הוא <code class=\"tok\" dir=\"ltr\">'0'</code> עד <code class=\"tok\" dir=\"ltr\">'9'</code> כולל שני הקצוות, ושני התנאים חייבים להתקיים: <code class=\"tok\" dir=\"ltr\">&amp;&amp;</code>. <code class=\"tok\" dir=\"ltr\">c &gt;= 0 &amp;&amp; c &lt;= 9</code> משווה לתווים שקודם 0 עד 9, לא לספרות: עבור <code class=\"tok\" dir=\"ltr\">'5'</code> (קוד 53) התוצאה שקר. <code class=\"tok\" dir=\"ltr\">c &gt; '0' &amp;&amp; c &lt; '9'</code> מפספס את <code class=\"tok\" dir=\"ltr\">'0'</code> ואת <code class=\"tok\" dir=\"ltr\">'9'</code>. <code class=\"tok\" dir=\"ltr\">c &gt;= '0' || c &lt;= '9'</code> נכון לכל תו, גם ל-<code class=\"tok\" dir=\"ltr\">'x'</code>.",
      "recapHtml": "טווח: שני התנאים עם &amp;&amp; וקצוות כלולים"
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "fillblank",
       "prompt": "הפונקציה הופכת כל אות קטנה במחרוזת לגדולה. מה מחליף את ___?",
       "code": true,
       "lines": [
        "void toUpper(char *s) {",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (s[i] >= 'a' && s[i] <= 'z')",
        "            s[i] = ___;",
        "}"
       ],
       "blankIndex": 3,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "s[i] - 'a' + 'A'",
         "html": "s[i] - 'a' + 'A'"
        },
        {
         "id": "b",
         "type": "text",
         "value": "s[i] + 'a' - 'A'",
         "html": "s[i] + 'a' - 'A'"
        },
        {
         "id": "c",
         "type": "text",
         "value": "s[i] - 'a'",
         "html": "s[i] - 'a'"
        },
        {
         "id": "d",
         "type": "text",
         "value": "s[i] + 'A'",
         "html": "s[i] + 'A'"
        }
       ],
       "correctId": "a",
       "explain": "`s[i] - 'a'` הוא המקום באלפבית, ו-`+ 'A'` מציב אותו בבלוק האותיות הגדולות: `'c'` הופך ל-`'C'`. `s[i] - 'a'` לבדו נותן מספר קטן (לא אות). `s[i] + 'a' - 'A'` זז לכיוון ההפוך ומרחיק את התו מהאותיות. `s[i] + 'A'` מוסיף עוד 65 ונותן תו שאינו אות.",
       "promptHtml": "הפונקציה הופכת כל אות קטנה במחרוזת לגדולה. מה מחליף את ___?",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">s[i] - 'a'</code> הוא המקום באלפבית, ו-<code class=\"tok\" dir=\"ltr\">+ 'A'</code> מציב אותו בבלוק האותיות הגדולות: <code class=\"tok\" dir=\"ltr\">'c'</code> הופך ל-<code class=\"tok\" dir=\"ltr\">'C'</code>. <code class=\"tok\" dir=\"ltr\">s[i] - 'a'</code> לבדו נותן מספר קטן (לא אות). <code class=\"tok\" dir=\"ltr\">s[i] + 'a' - 'A'</code> זז לכיוון ההפוך ומרחיק את התו מהאותיות. <code class=\"tok\" dir=\"ltr\">s[i] + 'A'</code> מוסיף עוד 65 ונותן תו שאינו אות.",
       "linesHtml": [
        "void toUpper(char *s) {",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (s[i] &gt;= 'a' &amp;&amp; s[i] &lt;= 'z')",
        "            s[i] = ___;",
        "}"
       ]
      },
      "recap": "אות קטנה לגדולה: c - 'a' + 'A'",
      "recapHtml": "אות קטנה לגדולה: c - 'a' + 'A'"
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה שהופכת מחרוזת של ספרות למספר.",
       "code": true,
       "lines": [
        "int toInt(char *s) {\n    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)\n        n = n * 10 + (s[i] - '0');",
        "    return n;\n}"
       ],
       "explain": "מאפסים את `n`, אחר כך הלולאה מצרפת ספרה אחרי ספרה, ובסוף מחזירים. כל סדר אחר לא יתקמפל או יחזיר 0.",
       "promptHtml": "סדרו את שורות הפונקציה שהופכת מחרוזת של ספרות למספר.",
       "explainHtml": "מאפסים את <code class=\"tok\" dir=\"ltr\">n</code>, אחר כך הלולאה מצרפת ספרה אחרי ספרה, ובסוף מחזירים. כל סדר אחר לא יתקמפל או יחזיר 0.",
       "linesHtml": [
        "int toInt(char *s) {\n    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)\n        n = n * 10 + (s[i] - '0');",
        "    return n;\n}"
       ]
      },
      "recap": "n = n * 10 + (c - '0')",
      "recapHtml": "n = n * 10 + (c - '0')"
     },
     {
      "id": "C03-Q6",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר את המספר שמיוצג במחרוזת (`\"472\"` נותן 472), אבל שורה אחת שונה. איזו?",
       "code": true,
       "lines": [
        "int toInt(char *s) {",
        "    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        n = n * 10 + s[i];",
        "    return n;",
        "}"
       ],
       "bugIndex": 3,
       "explain": "השורה `n = n * 10 + s[i]` מוסיפה את הקוד של התו (52 עבור `'4'`) ולא את ערך הספרה. על `\"472\"` מתקבל מספר ענק. צריך `s[i] - '0'`.",
       "promptHtml": "הפונקציה אמורה להחזיר את המספר שמיוצג במחרוזת (<code class=\"tok\" dir=\"ltr\">\"472\"</code> נותן 472), אבל שורה אחת שונה. איזו?",
       "explainHtml": "השורה <code class=\"tok\" dir=\"ltr\">n = n * 10 + s[i]</code> מוסיפה את הקוד של התו (52 עבור <code class=\"tok\" dir=\"ltr\">'4'</code>) ולא את ערך הספרה. על <code class=\"tok\" dir=\"ltr\">\"472\"</code> מתקבל מספר ענק. צריך <code class=\"tok\" dir=\"ltr\">s[i] - '0'</code>.",
       "linesHtml": [
        "int toInt(char *s) {",
        "    int n = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        n = n * 10 + s[i];",
        "    return n;",
        "}"
       ]
      },
      "recap": "בלי - '0' מצרפים קודי ASCII",
      "recapHtml": "בלי - '0' מצרפים קודי ASCII"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "📋",
    "title": "פונקציות string.h והעתקה",
    "goal": "אחרי השלב הזה תדעו להשוות, להעתיק ולהקצות מחרוזות נכון, ומה בדיוק עושות strcpy, strcat ו-strcmp.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>הספרייה <code>string.h</code> כוללת פונקציות מוכנות על מחרוזות. כל אחת מהן היא בעצם לולאה כמו אלה שכבר כתבתם, והן כולן סומכות על ה-<code>'\\0'</code>.</p>\n<table>\n<thead><tr><th>פונקציה</th><th>מה היא עושה</th></tr></thead>\n<tbody>\n<tr><td><code>strlen(s)</code></td><td>מספר התווים לפני ה-<code>'\\0'</code></td></tr>\n<tr><td><code>strcpy(dst, src)</code></td><td>מעתיקה את <code>src</code> אל <code>dst</code>, כולל ה-<code>'\\0'</code>, ודורסת מה שהיה שם</td></tr>\n<tr><td><code>strcat(dst, src)</code></td><td>מוסיפה את <code>src</code> אחרי הסוף הנוכחי של <code>dst</code></td></tr>\n<tr><td><code>strcmp(a, b)</code></td><td>0 אם התוכן שווה, שלילי אם <code>a</code> קטנה (לפי סדר המילון), חיובי אם גדולה</td></tr>\n</tbody></table>\n<pre>char s[20] = \"ab\";\nstrcat(s, \"cd\");     /* s is \"abcd\" */\nstrcpy(s, \"xyz\");    /* s is \"xyz\"  */\nif (strcmp(s, \"xyz\") == 0) { /* equal */ }</pre>\n<div class=\"lesson-rule\">🔑 <code>strcpy</code> ו-<code>strcat</code> לא בודקות גבולות. היעד חייב להיות מערך גדול מספיק, כולל מקום ל-<code>'\\0'</code>.</div>\n<h3>השוואה והעתקה</h3>\n<p>מחרוזת היא כתובת של מערך. לכן <code>a == b</code> משווה <b>כתובות</b>, לא תוכן: שני מערכים נפרדים עם אותן אותיות הם לא \"שווים\" בהשוואה כזו. תוכן משווים עם <code>strcmp(a, b) == 0</code>. ובאותו אופן <code>c = s</code> לא מעתיק מחרוזת, הוא רק גורם ל-<code>c</code> להצביע על אותו מערך.</p>\n<h3>מחרוזת חדשה בזיכרון דינמי</h3>\n<p>כדי ליצור עותק אמיתי מקצים מקום חדש. מחרוזת באורך n צריכה n+1 בתים, כי <code>strlen</code> לא סופרת את ה-<code>'\\0'</code>:</p>\n<pre>char *dup(char *s) {\n    char *c = (char*)malloc(strlen(s) + 1);\n    strcpy(c, s);\n    return c;\n}</pre>\n<div class=\"lesson-ex\">דוגמה: אם <code>s</code> היא <code>\"hello\"</code>, <code>strlen(s)</code> הוא 5 ויש להקצות 6 בתים. עם <code>malloc(strlen(s))</code> ההעתקה כותבת את ה-<code>'\\0'</code> בבית אחד אחרי סוף הזיכרון שהוקצה, כלומר מחוץ לו.</div>\n<h3>מערך או מצביע</h3>\n<p><code>char s[] = \"hi\";</code> יוצר מערך משלכם ואפשר לשנות אותו (<code>s[0] = 'H'</code>). <code>char *p = \"hi\";</code> מצביע על טקסט קבוע של התוכנית, ושינוי שלו קורס בזמן ריצה.</p>\n<div class=\"lesson-trap\">⚠️ <code>malloc(strlen(s))</code> חסר בית אחד. <code>sizeof(s)</code> כשהמשתנה הוא מצביע נותן את גודל המצביע ולא את אורך המחרוזת.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "a ו-b הן מחרוזות. איזה ביטוי הוא אמת (שונה מ-0) בדיוק כשהתוכן שלהן שווה?",
      "options": [
       {
        "id": "a",
        "value": "`a == b`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a == b</code>"
       },
       {
        "id": "b",
        "value": "`strlen(a) == strlen(b)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strlen(a) == strlen(b)</code>"
       },
       {
        "id": "c",
        "value": "`strcmp(a, b)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strcmp(a, b)</code>"
       },
       {
        "id": "d",
        "value": "`strcmp(a, b) == 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strcmp(a, b) == 0</code>"
       }
      ],
      "correctId": "d",
      "explanation": "`strcmp` מחזירה 0 כשהתוכן שווה, ולכן ההשוואה `== 0` היא הבדיקה הנכונה. `a == b` משווה כתובות, ושני מערכים נפרדים עם אותו תוכן יתנו שקר. `strlen(a) == strlen(b)` בודקת רק אורך: `\"abc\"` ו-`\"abd\"` יתנו אמת. `strcmp(a, b)` לבדה היא 0, כלומר שקר, בדיוק כשהמחרוזות שוות.",
      "recap": "תוכן = strcmp(a, b) == 0",
      "questionHtml": "a ו-b הן מחרוזות. איזה ביטוי הוא אמת (שונה מ-0) בדיוק כשהתוכן שלהן שווה?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">strcmp</code> מחזירה 0 כשהתוכן שווה, ולכן ההשוואה <code class=\"tok\" dir=\"ltr\">== 0</code> היא הבדיקה הנכונה. <code class=\"tok\" dir=\"ltr\">a == b</code> משווה כתובות, ושני מערכים נפרדים עם אותו תוכן יתנו שקר. <code class=\"tok\" dir=\"ltr\">strlen(a) == strlen(b)</code> בודקת רק אורך: <code class=\"tok\" dir=\"ltr\">\"abc\"</code> ו-<code class=\"tok\" dir=\"ltr\">\"abd\"</code> יתנו אמת. <code class=\"tok\" dir=\"ltr\">strcmp(a, b)</code> לבדה היא 0, כלומר שקר, בדיוק כשהמחרוזות שוות.",
      "recapHtml": "תוכן = strcmp(a, b) == 0"
     },
     {
      "id": "C04-Q2",
      "question": "מה מדפיס הקוד?\n```c\nchar s[20] = \"ab\";\nstrcpy(s, \"xyz\");\nstrcat(s, \"!\");\nprintf(\"%s %d\", s, (int)strlen(s));\n```",
      "options": [
       {
        "id": "a",
        "value": "`xyz 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xyz 3</code>"
       },
       {
        "id": "b",
        "value": "`abxyz! 6`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abxyz! 6</code>"
       },
       {
        "id": "c",
        "value": "`xyz! 4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xyz! 4</code>"
       },
       {
        "id": "d",
        "value": "`xyz! 20`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xyz! 20</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`strcpy` דורסת את `ab` ומשאירה `xyz`. `strcat` מוסיפה `!` מיד אחרי ה-`'\\0'` שהיה ב-`xyz`, והמחרוזת נהיית `xyz!` באורך 4. `abxyz! 6` מניחה ש-`strcpy` מוסיפה, `xyz 3` מדלגת על `strcat`, ו-`xyz! 20` מבלבלת עם גודל המערך.",
      "recap": "strcpy דורסת, strcat מוסיפה בסוף",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[20] = \"ab\";\nstrcpy(s, \"xyz\");\nstrcat(s, \"!\");\nprintf(\"%s %d\", s, (int)strlen(s));</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">strcpy</code> דורסת את <code class=\"tok\" dir=\"ltr\">ab</code> ומשאירה <code class=\"tok\" dir=\"ltr\">xyz</code>. <code class=\"tok\" dir=\"ltr\">strcat</code> מוסיפה <code class=\"tok\" dir=\"ltr\">!</code> מיד אחרי ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code> שהיה ב-<code class=\"tok\" dir=\"ltr\">xyz</code>, והמחרוזת נהיית <code class=\"tok\" dir=\"ltr\">xyz!</code> באורך 4. <code class=\"tok\" dir=\"ltr\">abxyz! 6</code> מניחה ש-<code class=\"tok\" dir=\"ltr\">strcpy</code> מוסיפה, <code class=\"tok\" dir=\"ltr\">xyz 3</code> מדלגת על <code class=\"tok\" dir=\"ltr\">strcat</code>, ו-<code class=\"tok\" dir=\"ltr\">xyz! 20</code> מבלבלת עם גודל המערך.",
      "recapHtml": "strcpy דורסת, strcat מוסיפה בסוף"
     },
     {
      "id": "C04-Q3",
      "question": "הפונקציה אמורה להחזיר עותק של המחרוזת בזיכרון דינמי. מה צריך להיות במקום ___?\n```c\nchar *copy(char *s) {\n    char *c = (char*)malloc(___);\n    strcpy(c, s);\n    return c;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`strlen(s)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strlen(s)</code>"
       },
       {
        "id": "b",
        "value": "`sizeof(s)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sizeof(s)</code>"
       },
       {
        "id": "c",
        "value": "`strlen(s) + 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strlen(s) + 1</code>"
       },
       {
        "id": "d",
        "value": "`strlen(s) - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">strlen(s) - 1</code>"
       }
      ],
      "correctId": "c",
      "explanation": "צריך מקום לכל התווים ועוד בית אחד ל-`'\\0'`: `strlen(s) + 1`. עם `strlen(s)` ו-`strlen(s) - 1` ההעתקה כותבת מעבר לגבול ההקצאה. `sizeof(s)` הוא גודל המצביע (כמה בתים תופס משתנה מצביע), ולא אורך המחרוזת: למחרוזות ארוכות מכך ההעתקה גולשת.",
      "recap": "עותק של מחרוזת: malloc(strlen(s) + 1)",
      "questionHtml": "הפונקציה אמורה להחזיר עותק של המחרוזת בזיכרון דינמי. מה צריך להיות במקום ___?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char *copy(char *s) {\n    char *c = (char*)malloc(___);\n    strcpy(c, s);\n    return c;\n}</code></pre>",
      "explanationHtml": "צריך מקום לכל התווים ועוד בית אחד ל-<code class=\"tok\" dir=\"ltr\">'\\0'</code>: <code class=\"tok\" dir=\"ltr\">strlen(s) + 1</code>. עם <code class=\"tok\" dir=\"ltr\">strlen(s)</code> ו-<code class=\"tok\" dir=\"ltr\">strlen(s) - 1</code> ההעתקה כותבת מעבר לגבול ההקצאה. <code class=\"tok\" dir=\"ltr\">sizeof(s)</code> הוא גודל המצביע (כמה בתים תופס משתנה מצביע), ולא אורך המחרוזת: למחרוזות ארוכות מכך ההעתקה גולשת.",
      "recapHtml": "עותק של מחרוזת: malloc(strlen(s) + 1)"
     },
     {
      "id": "C04-Q4",
      "question": "אחרי ההצהרה על `s` הקוד מבצע `s[0] = 'H';`. באיזו הצהרה השינוי מצליח?",
      "options": [
       {
        "id": "a",
        "value": "`char s[] = \"hi\";`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">char s[] = \"hi\";</code>"
       },
       {
        "id": "b",
        "value": "`char *s = \"hi\";`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">char *s = \"hi\";</code>"
       },
       {
        "id": "c",
        "value": "`const char s[] = \"hi\";`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">const char s[] = \"hi\";</code>"
       },
       {
        "id": "d",
        "value": "`const char *s = \"hi\";`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">const char *s = \"hi\";</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`char s[] = \"hi\"` יוצר מערך של שלושה תאים בזיכרון שלכם, ואפשר לשנות אותו. `char *s = \"hi\"` מצביע על טקסט קבוע, והכתיבה קורסת בזמן הריצה. בשתי ההצהרות עם `const` הקומפיילר דוחה את הכתיבה כבר בקומפילציה.",
      "recap": "מערך אפשר לשנות; מצביע למחרוזת קבועה לא",
      "questionHtml": "אחרי ההצהרה על <code class=\"tok\" dir=\"ltr\">s</code> הקוד מבצע <code class=\"tok\" dir=\"ltr\">s[0] = 'H';</code>. באיזו הצהרה השינוי מצליח?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">char s[] = \"hi\"</code> יוצר מערך של שלושה תאים בזיכרון שלכם, ואפשר לשנות אותו. <code class=\"tok\" dir=\"ltr\">char *s = \"hi\"</code> מצביע על טקסט קבוע, והכתיבה קורסת בזמן הריצה. בשתי ההצהרות עם <code class=\"tok\" dir=\"ltr\">const</code> הקומפיילר דוחה את הכתיבה כבר בקומפילציה.",
      "recapHtml": "מערך אפשר לשנות; מצביע למחרוזת קבועה לא"
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה שמחזירה עותק של מחרוזת.",
       "code": true,
       "lines": [
        "char *dup(char *s) {",
        "    char *c = (char*)malloc(strlen(s) + 1);",
        "    strcpy(c, s);",
        "    return c;\n}"
       ],
       "explain": "מקצים מקום, מעתיקים אליו, ורק אז מחזירים את הכתובת. `strcpy` לפני ההקצאה משתמשת במשתנה שעוד לא הוגדר, והחזרה לפני ההעתקה מחזירה זיכרון ריק.",
       "promptHtml": "סדרו את שורות הפונקציה שמחזירה עותק של מחרוזת.",
       "explainHtml": "מקצים מקום, מעתיקים אליו, ורק אז מחזירים את הכתובת. <code class=\"tok\" dir=\"ltr\">strcpy</code> לפני ההקצאה משתמשת במשתנה שעוד לא הוגדר, והחזרה לפני ההעתקה מחזירה זיכרון ריק.",
       "linesHtml": [
        "char *dup(char *s) {",
        "    char *c = (char*)malloc(strlen(s) + 1);",
        "    strcpy(c, s);",
        "    return c;\n}"
       ]
      },
      "recap": "הקצאה, העתקה, החזרה",
      "recapHtml": "הקצאה, העתקה, החזרה"
     },
     {
      "id": "C04-Q6",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר עותק עצמאי, כך ששינוי העותק לא ישפיע על המקור. שורה אחת שונתה. איזו?",
       "code": true,
       "lines": [
        "char *dup(char *s) {",
        "    char *c = (char*)malloc(strlen(s) + 1);",
        "    c = s;",
        "    return c;",
        "}"
       ],
       "bugIndex": 2,
       "explain": "השורה `c = s;` מעתיקה רק את הכתובת. `c` מצביע על המקור, ולכן שינוי של `c[0]` משנה גם את `s`, וההקצאה נזרקת. ההעתקה האמיתית היא `strcpy(c, s);`.",
       "promptHtml": "הפונקציה אמורה להחזיר עותק עצמאי, כך ששינוי העותק לא ישפיע על המקור. שורה אחת שונתה. איזו?",
       "explainHtml": "השורה <code class=\"tok\" dir=\"ltr\">c = s;</code> מעתיקה רק את הכתובת. <code class=\"tok\" dir=\"ltr\">c</code> מצביע על המקור, ולכן שינוי של <code class=\"tok\" dir=\"ltr\">c[0]</code> משנה גם את <code class=\"tok\" dir=\"ltr\">s</code>, וההקצאה נזרקת. ההעתקה האמיתית היא <code class=\"tok\" dir=\"ltr\">strcpy(c, s);</code>.",
       "linesHtml": [
        "char *dup(char *s) {",
        "    char *c = (char*)malloc(strlen(s) + 1);",
        "    c = s;",
        "    return c;",
        "}"
       ]
      },
      "recap": "השמה של מצביע לא מעתיקה מחרוזת",
      "recapHtml": "השמה של מצביע לא מעתיקה מחרוזת"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "↔️",
    "title": "שני אינדקסים: פלינדרום והיפוך",
    "goal": "אחרי השלב הזה תוכלו לעבור על מחרוזת משני הקצוות ולכתוב פלינדרום והיפוך במקום.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>הרבה שאלות על מחרוזות משווים או מחליפים תווים מהקצוות כלפי פנים. התבנית: אינדקס <code>i</code> בתחילת המחרוזת ואינדקס <code>j</code> בסופה, והם נעים זה לקראת זה.</p>\n<pre>int i = 0, j = (int)strlen(s) - 1;   /* j is the LAST character */\nwhile (i &lt; j) {\n    /* work with s[i] and s[j] */\n    i++;\n    j--;\n}</pre>\n<div class=\"lesson-rule\">🔑 התו האחרון נמצא ב-<code>strlen(s) - 1</code>. האינדקס <code>strlen(s)</code> הוא כבר ה-<code>'\\0'</code>.</div>\n<p>הלולאה רצה כל עוד <code>i &lt; j</code>. כשהם נפגשים (באורך אי-זוגי) התו האמצעי נשאר במקומו, ואין מה להשוות או להחליף איתו.</p>\n<h3>פלינדרום</h3>\n<p>מחרוזת היא פלינדרום אם היא נקראת אותו דבר משני הכיוונים. בודקים זוגות: אם יש זוג שונה, מחזירים 0 מיד. אם הלולאה נגמרה, מחזירים 1.</p>\n<pre>int isPal(char *s) {\n    int i = 0, j = (int)strlen(s) - 1;\n    while (i &lt; j) {\n        if (s[i] != s[j]) return 0;\n        i++; j--;\n    }\n    return 1;\n}</pre>\n<p>מחרוזת ריקה ומחרוזת בת תו אחד הן פלינדרומים: הלולאה לא רצה אפילו פעם, והתשובה 1.</p>\n<h3>היפוך במקום</h3>\n<p>כדי להפוך מחרוזת מחליפים את <code>s[i]</code> עם <code>s[j]</code> באותה לולאה. ההחלפה דורשת <b>משתנה זמני</b>: בלעדיו התא הראשון נדרס לפני שהערך שלו נשמר.</p>\n<pre>char t = s[i];\ns[i] = s[j];\ns[j] = t;</pre>\n<div class=\"lesson-ex\">דוגמה: <code>\"abcde\"</code>. הזוגות הם (0,4) ו-(1,3), ואז <code>i = 2 = j</code> והלולאה נעצרת. שתי החלפות, והתוצאה <code>\"edcba\"</code>, כשה-<code>c</code> האמצעי נשאר.</div>\n<div class=\"lesson-trap\">⚠️ <code>j = strlen(s)</code> (בלי ה-1) מתחיל מה-<code>'\\0'</code>, והזוג הראשון הוא <code>s[0]</code> מול סימן הסיום: כל פלינדרום \"נכשל\".</div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה החלפות מבצעת הלולאה?\n```c\nchar s[] = \"abcde\";\nint i = 0, j = (int)strlen(s) - 1, swaps = 0;\nwhile (i < j) {\n    char t = s[i]; s[i] = s[j]; s[j] = t;\n    i++; j--;\n    swaps++;\n}\nprintf(\"%d\", swaps);\n```",
       "answer": 2,
       "tol": 0,
       "explain": "הזוגות שמוחלפים הם (0,4) ו-(1,3). אחרי שתי ההחלפות `i == j == 2` והתנאי `i < j` שקרי, ולכן התו האמצעי `c` לא מוחלף. סך הכל 2.",
       "promptHtml": "כמה החלפות מבצעת הלולאה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abcde\";\nint i = 0, j = (int)strlen(s) - 1, swaps = 0;\nwhile (i &lt; j) {\n    char t = s[i]; s[i] = s[j]; s[j] = t;\n    i++; j--;\n    swaps++;\n}\nprintf(\"%d\", swaps);</code></pre>",
       "explainHtml": "הזוגות שמוחלפים הם (0,4) ו-(1,3). אחרי שתי ההחלפות <code class=\"tok\" dir=\"ltr\">i == j == 2</code> והתנאי <code class=\"tok\" dir=\"ltr\">i &lt; j</code> שקרי, ולכן התו האמצעי <code class=\"tok\" dir=\"ltr\">c</code> לא מוחלף. סך הכל 2."
      },
      "recap": "היפוך באורך n מבצע n/2 החלפות (חלק שלם)",
      "recapHtml": "היפוך באורך n מבצע n/2 החלפות (חלק שלם)"
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
       "explain": "מגדירים את שני האינדקסים, בודקים זוגות מהקצוות פנימה, ורק אחרי שהלולאה נגמרה בלי הבדל מחזירים 1. `return 1` לפני הלולאה היה מחזיר 1 לכל מחרוזת.",
       "promptHtml": "סדרו את שורות הפונקציה שבודקת פלינדרום.",
       "explainHtml": "מגדירים את שני האינדקסים, בודקים זוגות מהקצוות פנימה, ורק אחרי שהלולאה נגמרה בלי הבדל מחזירים 1. <code class=\"tok\" dir=\"ltr\">return 1</code> לפני הלולאה היה מחזיר 1 לכל מחרוזת.",
       "linesHtml": [
        "int isPal(char *s) {\n    int i = 0, j = (int)strlen(s) - 1;",
        "    while (i &lt; j) {\n        if (s[i] != s[j]) return 0;\n        i++; j--;\n    }",
        "    return 1;\n}"
       ]
      },
      "recap": "פלינדרום: i מההתחלה, j מהסוף, עד שנפגשים",
      "recapHtml": "פלינדרום: i מההתחלה, j מהסוף, עד שנפגשים"
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
       "explain": "`j = strlen(s)` מצביע על ה-`'\\0'`. הזוג הראשון הוא `s[0]` מול `'\\0'`, והם שונים בכל מחרוזת לא ריקה, ולכן מוחזר 0 גם עבור `\"abba\"`. התו האחרון הוא ב-`strlen(s) - 1`.",
       "promptHtml": "הפונקציה אמורה להחזיר 1 על פלינדרום (למשל <code class=\"tok\" dir=\"ltr\">\"abba\"</code>), אבל שורה אחת שונתה והיא מחזירה 0. איזו?",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">j = strlen(s)</code> מצביע על ה-<code class=\"tok\" dir=\"ltr\">'\\0'</code>. הזוג הראשון הוא <code class=\"tok\" dir=\"ltr\">s[0]</code> מול <code class=\"tok\" dir=\"ltr\">'\\0'</code>, והם שונים בכל מחרוזת לא ריקה, ולכן מוחזר 0 גם עבור <code class=\"tok\" dir=\"ltr\">\"abba\"</code>. התו האחרון הוא ב-<code class=\"tok\" dir=\"ltr\">strlen(s) - 1</code>.",
       "linesHtml": [
        "int isPal(char *s) {",
        "    int i = 0;",
        "    int j = (int)strlen(s);",
        "    while (i &lt; j) {",
        "        if (s[i] != s[j]) return 0;",
        "        i++; j--;",
        "    }",
        "    return 1;",
        "}"
       ]
      },
      "recap": "j מתחיל ב-strlen(s) - 1",
      "recapHtml": "j מתחיל ב-strlen(s) - 1"
     },
     {
      "id": "C05-Q4",
      "question": "ההחלפה בקוד נעשית בלי משתנה זמני. מה מדפיס הקוד?\n```c\nchar s[] = \"abcd\";\nint i = 0, j = 3;\nwhile (i < j) {\n    s[i] = s[j];\n    s[j] = s[i];\n    i++; j--;\n}\nprintf(\"%s\", s);\n```",
      "options": [
       {
        "id": "a",
        "value": "`dcba`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">dcba</code>"
       },
       {
        "id": "b",
        "value": "`dccd`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">dccd</code>"
       },
       {
        "id": "c",
        "value": "`abcd`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abcd</code>"
       },
       {
        "id": "d",
        "value": "`dbcd`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">dbcd</code>"
       }
      ],
      "correctId": "b",
      "explanation": "בזוג הראשון `s[0] = s[3]` נותן `d`, ואז `s[3] = s[0]` מעתיק את אותו `d` חזרה, והערך המקורי `a` אבד: `dbcd`. בזוג השני אותו דבר עם `b` ו-`c`: `s[1] = s[2]` נותן `c` ו-`s[2] = s[1]` שוב `c`, וסך הכל `dccd`. ההחלפה דורשת משתנה זמני.",
      "recap": "החלפה בלי משתנה זמני מאבדת ערך",
      "questionHtml": "ההחלפה בקוד נעשית בלי משתנה זמני. מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abcd\";\nint i = 0, j = 3;\nwhile (i &lt; j) {\n    s[i] = s[j];\n    s[j] = s[i];\n    i++; j--;\n}\nprintf(\"%s\", s);</code></pre>",
      "explanationHtml": "בזוג הראשון <code class=\"tok\" dir=\"ltr\">s[0] = s[3]</code> נותן <code class=\"tok\" dir=\"ltr\">d</code>, ואז <code class=\"tok\" dir=\"ltr\">s[3] = s[0]</code> מעתיק את אותו <code class=\"tok\" dir=\"ltr\">d</code> חזרה, והערך המקורי <code class=\"tok\" dir=\"ltr\">a</code> אבד: <code class=\"tok\" dir=\"ltr\">dbcd</code>. בזוג השני אותו דבר עם <code class=\"tok\" dir=\"ltr\">b</code> ו-<code class=\"tok\" dir=\"ltr\">c</code>: <code class=\"tok\" dir=\"ltr\">s[1] = s[2]</code> נותן <code class=\"tok\" dir=\"ltr\">c</code> ו-<code class=\"tok\" dir=\"ltr\">s[2] = s[1]</code> שוב <code class=\"tok\" dir=\"ltr\">c</code>, וסך הכל <code class=\"tok\" dir=\"ltr\">dccd</code>. ההחלפה דורשת משתנה זמני.",
      "recapHtml": "החלפה בלי משתנה זמני מאבדת ערך"
     },
     {
      "id": "C05-Q5",
      "question": "הפונקציה `isPal` היא זו מהשיעור. מה מדפיס הקוד?\n```c\nprintf(\"%d %d %d %d\", isPal(\"abba\"), isPal(\"abca\"), isPal(\"a\"), isPal(\"\"));\n```",
      "options": [
       {
        "id": "a",
        "value": "`1 0 1 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 0 1 0</code>"
       },
       {
        "id": "b",
        "value": "`1 0 0 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 0 0 1</code>"
       },
       {
        "id": "c",
        "value": "`1 0 1 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 0 1 1</code>"
       },
       {
        "id": "d",
        "value": "`0 0 1 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0 0 1 1</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`\"abba\"` פלינדרום: 1. ב-`\"abca\"` הזוג (1,2) הוא `b` מול `c`: 0. מחרוזת בת תו אחד: `i = j = 0`, הלולאה לא רצה ומוחזר 1. מחרוזת ריקה: `j = -1`, הלולאה לא רצה ומוחזר 1.",
      "recap": "ריקה ותו בודד הן פלינדרומים",
      "questionHtml": "הפונקציה <code class=\"tok\" dir=\"ltr\">isPal</code> היא זו מהשיעור. מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>printf(\"%d %d %d %d\", isPal(\"abba\"), isPal(\"abca\"), isPal(\"a\"), isPal(\"\"));</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">\"abba\"</code> פלינדרום: 1. ב-<code class=\"tok\" dir=\"ltr\">\"abca\"</code> הזוג (1,2) הוא <code class=\"tok\" dir=\"ltr\">b</code> מול <code class=\"tok\" dir=\"ltr\">c</code>: 0. מחרוזת בת תו אחד: <code class=\"tok\" dir=\"ltr\">i = j = 0</code>, הלולאה לא רצה ומוחזר 1. מחרוזת ריקה: <code class=\"tok\" dir=\"ltr\">j = -1</code>, הלולאה לא רצה ומוחזר 1.",
      "recapHtml": "ריקה ותו בודד הן פלינדרומים"
     },
     {
      "id": "C05-Q6",
      "question": "הלולאה בונה ב-`t` את ההיפוך של `s`. מה צריך להיות במקום ___?\n```c\nchar s[] = \"abc\", t[4];\nint n = (int)strlen(s);\nfor (int i = 0; i < n; i++)\n    t[i] = ___;\nt[n] = '\\0';\nprintf(\"%s\", t);\n```",
      "options": [
       {
        "id": "a",
        "value": "`s[i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">s[i]</code>"
       },
       {
        "id": "b",
        "value": "`s[n - i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">s[n - i]</code>"
       },
       {
        "id": "c",
        "value": "`s[n - 1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">s[n - 1]</code>"
       },
       {
        "id": "d",
        "value": "`s[n - 1 - i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">s[n - 1 - i]</code>"
       }
      ],
      "correctId": "d",
      "explanation": "כשהמקום בתוצאה הוא `i`, התו המתאים במקור הוא `n - 1 - i`: עבור `i = 0` זה התו האחרון `c`. `s[n - i]` מתחיל מה-`'\\0'` ולכן התוצאה נעצרת מיד. `s[i]` מעתיקה בלי להפוך. `s[n - 1]` שוכפל את התו האחרון בכל המקומות.",
      "recap": "תו i בהיפוך = s[n - 1 - i]",
      "questionHtml": "הלולאה בונה ב-<code class=\"tok\" dir=\"ltr\">t</code> את ההיפוך של <code class=\"tok\" dir=\"ltr\">s</code>. מה צריך להיות במקום ___?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abc\", t[4];\nint n = (int)strlen(s);\nfor (int i = 0; i &lt; n; i++)\n    t[i] = ___;\nt[n] = '\\0';\nprintf(\"%s\", t);</code></pre>",
      "explanationHtml": "כשהמקום בתוצאה הוא <code class=\"tok\" dir=\"ltr\">i</code>, התו המתאים במקור הוא <code class=\"tok\" dir=\"ltr\">n - 1 - i</code>: עבור <code class=\"tok\" dir=\"ltr\">i = 0</code> זה התו האחרון <code class=\"tok\" dir=\"ltr\">c</code>. <code class=\"tok\" dir=\"ltr\">s[n - i]</code> מתחיל מה-<code class=\"tok\" dir=\"ltr\">'\\0'</code> ולכן התוצאה נעצרת מיד. <code class=\"tok\" dir=\"ltr\">s[i]</code> מעתיקה בלי להפוך. <code class=\"tok\" dir=\"ltr\">s[n - 1]</code> שוכפל את התו האחרון בכל המקומות.",
      "recapHtml": "תו i בהיפוך = s[n - 1 - i]"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🧮",
    "title": "מערך עזר של 26 מונים",
    "goal": "אחרי השלב הזה תוכלו לספור אותיות במעבר אחד ולפתור אנגרמה, אות שכיחה ואות יחידה בזמן ליניארי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כשצריך לדעת <b>כמה פעמים</b> כל אות מופיעה, לא בודקים כל אות מול כל המחרוזת. מחזיקים <b>מערך מונים</b> עם תא אחד לכל אות, ועוברים על המחרוזת פעם אחת.</p>\n<pre>int cnt[26] = {0};                 /* a counter per letter, all zero */\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;              /* the letter's index is c - 'a' */</pre>\n<p>אחרי הלולאה <code>cnt[0]</code> הוא מספר ה-<code>'a'</code>, <code>cnt[1]</code> מספר ה-<code>'b'</code>, וכן הלאה. האינדקס של אות הוא <code>c - 'a'</code> (שלב 3).</p>\n<div class=\"lesson-ex\">דוגמה: <code>\"banana\"</code>. אחרי הספירה: <code>cnt['a'-'a'] = 3</code>, <code>cnt['b'-'a'] = 1</code>, <code>cnt['n'-'a'] = 2</code>, וכל שאר התאים 0.</div>\n<div class=\"lesson-rule\">🔑 סיבוכיות: מעבר אחד על המחרוזת ועוד לכל היותר 26 צעדים. המערך קבוע (26 תאים), ולכן זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> וזיכרון העזר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>. התנאי: המחרוזת מכילה רק אותיות קטנות.</div>\n<h3>מה עושים עם המונים</h3>\n<ul>\n<li><b>האות השכיחה ביותר:</b> מחפשים את האינדקס עם המונה הגדול. עם <code>cnt[i] &gt; cnt[best]</code> (גדול ממש) בתיקו נשארת האות הקטנה יותר.</li>\n<li><b>אות ראשונה שלא חוזרת:</b> עוברים על המחרוזת עצמה (כדי לשמור על הסדר) ובודקים אצל כל תו אם המונה שלו 1.</li>\n<li><b>אנגרמה:</b> שתי מחרוזות הן אנגרמות אם יש להן אותם מונים: מעלים לפי הראשונה, מורידים לפי השנייה, ובודקים שכל המונים חזרו ל-0.</li>\n</ul>\n<pre>int isAnagram(char *a, char *b) {\n    int cnt[26] = {0}, i;\n    for (i = 0; a[i] != '\\0'; i++) cnt[a[i] - 'a']++;\n    for (i = 0; b[i] != '\\0'; i++) cnt[b[i] - 'a']--;\n    for (i = 0; i &lt; 26; i++)\n        if (cnt[i] != 0) return 0;\n    return 1;\n}</pre>\n<div class=\"lesson-trap\">⚠️ האינדקס הוא <code>s[i] - 'a'</code> ולא <code>s[i]</code> ולא <code>i</code>. ולא לשכוח <code>= {0}</code>: מערך מקומי בלי איפוס מכיל זבל.</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nchar s[] = \"abracadabra\";\nint cnt[26] = {0};\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nprintf(\"%d\", cnt['a' - 'a']);\n```",
       "answer": 5,
       "tol": 0,
       "explain": "במחרוזת `abracadabra` האות `a` מופיעה בעמדות 0, 3, 5, 7 ו-10: חמש פעמים.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abracadabra\";\nint cnt[26] = {0};\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nprintf(\"%d\", cnt['a' - 'a']);</code></pre>",
       "explainHtml": "במחרוזת <code class=\"tok\" dir=\"ltr\">abracadabra</code> האות <code class=\"tok\" dir=\"ltr\">a</code> מופיעה בעמדות 0, 3, 5, 7 ו-10: חמש פעמים."
      },
      "recap": "cnt[c - 'a'] = כמה פעמים c הופיעה",
      "recapHtml": "cnt[c - 'a'] = כמה פעמים c הופיעה"
     },
     {
      "id": "C06-Q2",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה שבודקת אם שתי מחרוזות הן אנגרמות.",
       "code": true,
       "lines": [
        "int isAnagram(char *a, char *b) {\n    int cnt[26] = {0}, i;",
        "    for (i = 0; a[i] != '\\0'; i++) cnt[a[i] - 'a']++;\n    for (i = 0; b[i] != '\\0'; i++) cnt[b[i] - 'a']--;",
        "    for (i = 0; i < 26; i++)\n        if (cnt[i] != 0) return 0;",
        "    return 1;\n}"
       ],
       "explain": "קודם מגדירים ומאפסים את המונים, אחר כך סופרים לפי שתי המחרוזות, אחר כך בודקים שכולם חזרו ל-0, ורק בסוף מחזירים 1. בדיקה לפני הספירה הייתה עוברת תמיד (הכול 0).",
       "promptHtml": "סדרו את שורות הפונקציה שבודקת אם שתי מחרוזות הן אנגרמות.",
       "explainHtml": "קודם מגדירים ומאפסים את המונים, אחר כך סופרים לפי שתי המחרוזות, אחר כך בודקים שכולם חזרו ל-0, ורק בסוף מחזירים 1. בדיקה לפני הספירה הייתה עוברת תמיד (הכול 0).",
       "linesHtml": [
        "int isAnagram(char *a, char *b) {\n    int cnt[26] = {0}, i;",
        "    for (i = 0; a[i] != '\\0'; i++) cnt[a[i] - 'a']++;\n    for (i = 0; b[i] != '\\0'; i++) cnt[b[i] - 'a']--;",
        "    for (i = 0; i &lt; 26; i++)\n        if (cnt[i] != 0) return 0;",
        "    return 1;\n}"
       ]
      },
      "recap": "אנגרמה: ++ לפי a, -- לפי b, ובדיקה שהכול 0",
      "recapHtml": "אנגרמה: ++ לפי a, -- לפי b, ובדיקה שהכול 0"
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר 1 עבור `\"listen\"` ו-`\"silent\"`, אבל שורה אחת שונתה והיא מחזירה 0. איזו?",
       "code": true,
       "lines": [
        "int isAnagram(char *a, char *b) {",
        "    int cnt[26] = {0}, i;",
        "    for (i = 0; a[i] != '\\0'; i++)",
        "        cnt[a[i] - 'a']++;",
        "    for (i = 0; b[i] != '\\0'; i++)",
        "        cnt[b[i] - 'a']++;",
        "    for (i = 0; i < 26; i++)",
        "        if (cnt[i] != 0) return 0;",
        "    return 1;",
        "}"
       ],
       "bugIndex": 5,
       "explain": "במקום להוריד את המונים לפי המחרוזת השנייה (`--`), השורה מעלה אותם (`++`). בסוף כל מונה הוא כפול ממה שהיה, והבדיקה `cnt[i] != 0` נכשלת תמיד.",
       "promptHtml": "הפונקציה אמורה להחזיר 1 עבור <code class=\"tok\" dir=\"ltr\">\"listen\"</code> ו-<code class=\"tok\" dir=\"ltr\">\"silent\"</code>, אבל שורה אחת שונתה והיא מחזירה 0. איזו?",
       "explainHtml": "במקום להוריד את המונים לפי המחרוזת השנייה (<code class=\"tok\" dir=\"ltr\">--</code>), השורה מעלה אותם (<code class=\"tok\" dir=\"ltr\">++</code>). בסוף כל מונה הוא כפול ממה שהיה, והבדיקה <code class=\"tok\" dir=\"ltr\">cnt[i] != 0</code> נכשלת תמיד.",
       "linesHtml": [
        "int isAnagram(char *a, char *b) {",
        "    int cnt[26] = {0}, i;",
        "    for (i = 0; a[i] != '\\0'; i++)",
        "        cnt[a[i] - 'a']++;",
        "    for (i = 0; b[i] != '\\0'; i++)",
        "        cnt[b[i] - 'a']++;",
        "    for (i = 0; i &lt; 26; i++)",
        "        if (cnt[i] != 0) return 0;",
        "    return 1;",
        "}"
       ]
      },
      "recap": "לפי המחרוזת השנייה מורידים",
      "recapHtml": "לפי המחרוזת השנייה מורידים"
     },
     {
      "id": "C06-Q4",
      "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"bbaa\";\nint cnt[26] = {0}, best = 0;\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nfor (int i = 1; i < 26; i++)\n    if (cnt[i] > cnt[best])\n        best = i;\nprintf(\"%c\", 'a' + best);\n```",
      "options": [
       {
        "id": "a",
        "value": "`b`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">b</code>"
       },
       {
        "id": "b",
        "value": "`ab`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ab</code>"
       },
       {
        "id": "c",
        "value": "`a`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a</code>"
       },
       {
        "id": "d",
        "value": "`2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2</code>"
       }
      ],
      "correctId": "c",
      "explanation": "שתי האותיות `a` ו-`b` מופיעות פעמיים כל אחת. `best` מתחיל ב-0 (האות `a`), ו-`cnt[1] > cnt[0]` הוא `2 > 2`, שקר, ולכן `best` נשאר 0 ומודפס `a`. עם `>=` היה מודפס `b`. הלולאה מדפיסה תו אחד, לא `ab`, ו-`%c` מדפיס אות ולא את המונה.",
      "recap": "בתיקו, > ממש משאיר את האות הקטנה",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"bbaa\";\nint cnt[26] = {0}, best = 0;\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nfor (int i = 1; i &lt; 26; i++)\n    if (cnt[i] &gt; cnt[best])\n        best = i;\nprintf(\"%c\", 'a' + best);</code></pre>",
      "explanationHtml": "שתי האותיות <code class=\"tok\" dir=\"ltr\">a</code> ו-<code class=\"tok\" dir=\"ltr\">b</code> מופיעות פעמיים כל אחת. <code class=\"tok\" dir=\"ltr\">best</code> מתחיל ב-0 (האות <code class=\"tok\" dir=\"ltr\">a</code>), ו-<code class=\"tok\" dir=\"ltr\">cnt[1] &gt; cnt[0]</code> הוא <code class=\"tok\" dir=\"ltr\">2 &gt; 2</code>, שקר, ולכן <code class=\"tok\" dir=\"ltr\">best</code> נשאר 0 ומודפס <code class=\"tok\" dir=\"ltr\">a</code>. עם <code class=\"tok\" dir=\"ltr\">&gt;=</code> היה מודפס <code class=\"tok\" dir=\"ltr\">b</code>. הלולאה מדפיסה תו אחד, לא <code class=\"tok\" dir=\"ltr\">ab</code>, ו-<code class=\"tok\" dir=\"ltr\">%c</code> מדפיס אות ולא את המונה.",
      "recapHtml": "בתיקו, &gt; ממש משאיר את האות הקטנה"
     },
     {
      "id": "C06-Q5",
      "step": {
       "type": "fillblank",
       "prompt": "הפונקציה מחזירה את התו הראשון שמופיע במחרוזת פעם אחת בלבד, או `'-'` אם אין כזה. מה מחליף את ___?",
       "code": true,
       "lines": [
        "char firstUnique(char *s) {",
        "    int cnt[26] = {0};",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        cnt[s[i] - 'a']++;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (___)",
        "            return s[i];",
        "    return '-';",
        "}"
       ],
       "blankIndex": 5,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "cnt[s[i] - 'a'] > 1",
         "html": "cnt[s[i] - 'a'] &gt; 1"
        },
        {
         "id": "b",
         "type": "text",
         "value": "cnt[i] == 1",
         "html": "cnt[i] == 1"
        },
        {
         "id": "c",
         "type": "text",
         "value": "cnt[s[i] - 'a'] == 1",
         "html": "cnt[s[i] - 'a'] == 1"
        },
        {
         "id": "d",
         "type": "text",
         "value": "cnt[s[i] - 'a'] == 0",
         "html": "cnt[s[i] - 'a'] == 0"
        }
       ],
       "correctId": "c",
       "explain": "עוברים על המחרוזת עצמה (לא על המונים) כדי לשמור על סדר ההופעה, ובודקים אם המונה של התו הנוכחי הוא 1. `> 1` מחזירה דווקא תו שחוזר. `cnt[i]` משתמש במקום של התו בטקסט כאילו היה אות. `== 0` לא קורה אף פעם לתו שקיים במחרוזת.",
       "promptHtml": "הפונקציה מחזירה את התו הראשון שמופיע במחרוזת פעם אחת בלבד, או <code class=\"tok\" dir=\"ltr\">'-'</code> אם אין כזה. מה מחליף את ___?",
       "explainHtml": "עוברים על המחרוזת עצמה (לא על המונים) כדי לשמור על סדר ההופעה, ובודקים אם המונה של התו הנוכחי הוא 1. <code class=\"tok\" dir=\"ltr\">&gt; 1</code> מחזירה דווקא תו שחוזר. <code class=\"tok\" dir=\"ltr\">cnt[i]</code> משתמש במקום של התו בטקסט כאילו היה אות. <code class=\"tok\" dir=\"ltr\">== 0</code> לא קורה אף פעם לתו שקיים במחרוזת.",
       "linesHtml": [
        "char firstUnique(char *s) {",
        "    int cnt[26] = {0};",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        cnt[s[i] - 'a']++;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (___)",
        "            return s[i];",
        "    return '-';",
        "}"
       ]
      },
      "recap": "תו יחיד: מעבר על המחרוזת ובדיקת cnt[c - 'a'] == 1",
      "recapHtml": "תו יחיד: מעבר על המחרוזת ובדיקת cnt[c - 'a'] == 1"
     },
     {
      "id": "C06-Q6",
      "step": {
       "type": "text",
       "prompt": "מהי סיבוכיות הזמן של `isAnagram` מהשיעור, כשאורך כל אחת מהמחרוזות עד n? (למשל `O(n)`)",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "שני מעברים על המחרוזות, כל אחד בזמן ליניארי באורך שלו, ועוד לולאה של 26 צעדים קבועים: $O(n)$.",
       "promptHtml": "מהי סיבוכיות הזמן של <code class=\"tok\" dir=\"ltr\">isAnagram</code> מהשיעור, כשאורך כל אחת מהמחרוזות עד n? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "שני מעברים על המחרוזות, כל אחד בזמן ליניארי באורך שלו, ועוד לולאה של 26 צעדים קבועים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
      },
      "recap": "מערך מונים בגודל קבוע = O(n) זמן ו-O(1) זיכרון",
      "recapHtml": "מערך מונים בגודל קבוע = O(n) זמן ו-O(1) זיכרון"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🎯",
    "title": "אינדקס שנגזר מהנתונים",
    "goal": "אחרי השלב הזה תוכלו לספור הפרשים, סכומים ומספרים דו-ספרתיים של זוגות צמודים ולמצוא את השכיח.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>לפעמים הדבר שסופרים הוא לא אות אלא ערך שמחשבים מהמחרוזת: הפרש בין שני תווים, סכום של שתי ספרות, מספר דו-ספרתי. הטריק זהה לשלב הקודם: מערך מונים שה<b>אינדקס</b> שלו הוא הערך הזה.</p>\n<h3>שלושה צעדים</h3>\n<ul>\n<li><b>טווח הערכים קובע את גודל המערך.</b> הפרש בין שתי אותיות קטנות: 0 עד 25, ולכן 26 תאים. סכום של שתי ספרות: 0 עד 18, ולכן 19 תאים. מספר דו-ספרתי: 0 עד 99, ולכן 100 תאים.</li>\n<li><b>ביטוי שמחשב את האינדקס מהתווים.</b> הפרש בין אותיות: <code>abs(s[i] - s[i + 1])</code> (הפונקציה <code>abs</code> היא מ-<code>stdlib.h</code>). סכום ספרות: <code>(s[i] - '0') + (s[i + 1] - '0')</code>. מספר דו-ספרתי: <code>(s[i] - '0') * 10 + (s[i + 1] - '0')</code>.</li>\n<li><b>מעבר על הזוגות הצמודים</b> וספירה.</li>\n</ul>\n<h3>זוגות צמודים</h3>\n<p>זוג צמוד הוא <code>s[i]</code> ו-<code>s[i + 1]</code>, ולכן הלולאה צריכה לעצור כשאין תו הבא: <code>s[i + 1] != '\\0'</code>. מחרוזת עם n תווים נותנת n-1 זוגות.</p>\n<pre>int cnt[100] = {0};\nfor (int i = 0; s[i + 1] != '\\0'; i++)\n    cnt[(s[i] - '0') * 10 + (s[i + 1] - '0')]++;</pre>\n<h3>הערך השכיח ביותר</h3>\n<p>אחרי הספירה מחפשים את האינדקס עם המונה הגדול ביותר:</p>\n<pre>int best = 0;\nfor (int i = 1; i &lt; 100; i++)\n    if (cnt[i] &gt; cnt[best])\n        best = i;</pre>\n<div class=\"lesson-rule\">🔑 האינדקס <code>best</code> הוא <b>הערך</b> השכיח (לא כמה פעמים הוא הופיע). עם <code>&gt;</code> ממש, בתיקו נשאר הערך הקטן יותר, כי ערך שווה לא מחליף את <code>best</code>. עם <code>&gt;=</code> היה נבחר הערך הגדול.</div>\n<div class=\"lesson-ex\">דוגמה: סכומים של זוגות ספרות במחרוזת <code>\"1928374\"</code>: 1+9=10, 9+2=11, 2+8=10, 8+3=11, 3+7=10, 7+4=11. כך <code>cnt[10] = 3</code> ו-<code>cnt[11] = 3</code>. תיקו, ולכן התוצאה 10, הקטן.</div>\n<div class=\"lesson-trap\">⚠️ בלי <code>- '0'</code> מחשבים עם קודי ASCII (למשל <code>'0'*10 + '7'</code> הוא 535) ויוצאים מגבולות המערך. והסדר חשוב: ב-<code>\"07\"</code> העשרות הן <code>'0'</code>, והמספר הוא 7 ולא 70.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nchar s[] = \"abdeg\";\nint cnt[26] = {0};\nfor (int i = 0; s[i + 1] != '\\0'; i++)\n    cnt[abs(s[i] - s[i + 1])]++;\nprintf(\"%d\", cnt[1]);\n```",
       "answer": 2,
       "tol": 0,
       "explain": "ההפרשים בין זוגות צמודים הם: `a,b` נותן 1, `b,d` נותן 2, `d,e` נותן 1 ו-`e,g` נותן 2. ההפרש 1 מופיע פעמיים, ולכן `cnt[1]` הוא 2.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"abdeg\";\nint cnt[26] = {0};\nfor (int i = 0; s[i + 1] != '\\0'; i++)\n    cnt[abs(s[i] - s[i + 1])]++;\nprintf(\"%d\", cnt[1]);</code></pre>",
       "explainHtml": "ההפרשים בין זוגות צמודים הם: <code class=\"tok\" dir=\"ltr\">a,b</code> נותן 1, <code class=\"tok\" dir=\"ltr\">b,d</code> נותן 2, <code class=\"tok\" dir=\"ltr\">d,e</code> נותן 1 ו-<code class=\"tok\" dir=\"ltr\">e,g</code> נותן 2. ההפרש 1 מופיע פעמיים, ולכן <code class=\"tok\" dir=\"ltr\">cnt[1]</code> הוא 2."
      },
      "recap": "cnt[הפרש]++ על זוגות צמודים",
      "recapHtml": "cnt[הפרש]++ על זוגות צמודים"
     },
     {
      "id": "C07-Q2",
      "question": "מה מדפיס הקוד?\n```c\nchar a = '0', b = '7';\nprintf(\"%d\", (a - '0') * 10 + (b - '0'));\n```",
      "options": [
       {
        "id": "a",
        "value": "`70`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">70</code>"
       },
       {
        "id": "b",
        "value": "`535`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">535</code>"
       },
       {
        "id": "c",
        "value": "`7`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">7</code>"
       },
       {
        "id": "d",
        "value": "`55`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">55</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`a - '0'` הוא 0 ו-`b - '0'` הוא 7, ולכן `0 * 10 + 7 = 7`: המספר הדו-ספרתי `07` הוא 7. `70` מחליפה בין העשרות לאחדות, `535` שוכחת את שני החיסורים (`48 * 10 + 55`), ו-`55` שוכחת רק את אחד מהם.",
      "recap": "דו-ספרתי: (a - '0') * 10 + (b - '0')",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char a = '0', b = '7';\nprintf(\"%d\", (a - '0') * 10 + (b - '0'));</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">a - '0'</code> הוא 0 ו-<code class=\"tok\" dir=\"ltr\">b - '0'</code> הוא 7, ולכן <code class=\"tok\" dir=\"ltr\">0 * 10 + 7 = 7</code>: המספר הדו-ספרתי <code class=\"tok\" dir=\"ltr\">07</code> הוא 7. <code class=\"tok\" dir=\"ltr\">70</code> מחליפה בין העשרות לאחדות, <code class=\"tok\" dir=\"ltr\">535</code> שוכחת את שני החיסורים (<code class=\"tok\" dir=\"ltr\">48 * 10 + 55</code>), ו-<code class=\"tok\" dir=\"ltr\">55</code> שוכחת רק את אחד מהם.",
      "recapHtml": "דו-ספרתי: (a - '0') * 10 + (b - '0')"
     },
     {
      "id": "C07-Q3",
      "step": {
       "type": "order",
       "prompt": "הפונקציה מחזירה את הסכום השכיח ביותר של שתי ספרות צמודות במחרוזת, ובתיקו את הסכום הקטן ביותר. סדרו את שורותיה.",
       "code": true,
       "lines": [
        "int commonSum(char *s) {\n    int cnt[19] = {0}, best = 0, i;",
        "    for (i = 0; s[i + 1] != '\\0'; i++)\n        cnt[(s[i] - '0') + (s[i + 1] - '0')]++;",
        "    for (i = 1; i < 19; i++)\n        if (cnt[i] > cnt[best])\n            best = i;",
        "    return best;\n}"
       ],
       "explain": "קודם הצהרה ואיפוס, אחר כך הספירה, אחר כך חיפוש המקסימום ורק בסוף החזרה. אם החיפוש היה לפני הספירה, כל המונים עדיין אפס ו-`best` היה נשאר 0.",
       "promptHtml": "הפונקציה מחזירה את הסכום השכיח ביותר של שתי ספרות צמודות במחרוזת, ובתיקו את הסכום הקטן ביותר. סדרו את שורותיה.",
       "explainHtml": "קודם הצהרה ואיפוס, אחר כך הספירה, אחר כך חיפוש המקסימום ורק בסוף החזרה. אם החיפוש היה לפני הספירה, כל המונים עדיין אפס ו-<code class=\"tok\" dir=\"ltr\">best</code> היה נשאר 0.",
       "linesHtml": [
        "int commonSum(char *s) {\n    int cnt[19] = {0}, best = 0, i;",
        "    for (i = 0; s[i + 1] != '\\0'; i++)\n        cnt[(s[i] - '0') + (s[i + 1] - '0')]++;",
        "    for (i = 1; i &lt; 19; i++)\n        if (cnt[i] &gt; cnt[best])\n            best = i;",
        "    return best;\n}"
       ]
      },
      "recap": "קודם סופרים, אחר כך מחפשים מקסימום",
      "recapHtml": "קודם סופרים, אחר כך מחפשים מקסימום"
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה מחזירה את הסכום השכיח ביותר של שתי ספרות צמודות, ובתיקו את הסכום הקטן ביותר. שורה אחת שונתה, ועל `\"1928374\"` היא מחזירה 11 במקום 10. איזו?",
       "code": true,
       "lines": [
        "int commonSum(char *s) {",
        "    int cnt[19] = {0}, best = 0, i;",
        "    for (i = 0; s[i + 1] != '\\0'; i++)",
        "        cnt[(s[i] - '0') + (s[i + 1] - '0')]++;",
        "    for (i = 1; i < 19; i++)",
        "        if (cnt[i] >= cnt[best])",
        "            best = i;",
        "    return best;",
        "}"
       ],
       "bugIndex": 5,
       "explain": "עם `>=` גם מונה שווה מחליף את `best`, ולכן בתיקו נבחר הערך הגדול: 11 במקום 10. כדי לקבל את הקטן צריך `>` ממש.",
       "promptHtml": "הפונקציה מחזירה את הסכום השכיח ביותר של שתי ספרות צמודות, ובתיקו את הסכום הקטן ביותר. שורה אחת שונתה, ועל <code class=\"tok\" dir=\"ltr\">\"1928374\"</code> היא מחזירה 11 במקום 10. איזו?",
       "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&gt;=</code> גם מונה שווה מחליף את <code class=\"tok\" dir=\"ltr\">best</code>, ולכן בתיקו נבחר הערך הגדול: 11 במקום 10. כדי לקבל את הקטן צריך <code class=\"tok\" dir=\"ltr\">&gt;</code> ממש.",
       "linesHtml": [
        "int commonSum(char *s) {",
        "    int cnt[19] = {0}, best = 0, i;",
        "    for (i = 0; s[i + 1] != '\\0'; i++)",
        "        cnt[(s[i] - '0') + (s[i + 1] - '0')]++;",
        "    for (i = 1; i &lt; 19; i++)",
        "        if (cnt[i] &gt;= cnt[best])",
        "            best = i;",
        "    return best;",
        "}"
       ]
      },
      "recap": "בתיקו: > ממש = הקטן, >= = הגדול",
      "recapHtml": "בתיקו: &gt; ממש = הקטן, &gt;= = הגדול"
     },
     {
      "id": "C07-Q5",
      "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"3412\";\nint cnt[100] = {0}, best = 0;\nfor (int i = 0; s[i + 1] != '\\0'; i++)\n    cnt[(s[i] - '0') * 10 + (s[i + 1] - '0')]++;\nfor (int i = 1; i < 100; i++)\n    if (cnt[i] > cnt[best])\n        best = i;\nprintf(\"%d\", best);\n```",
      "options": [
       {
        "id": "a",
        "value": "`34`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">34</code>"
       },
       {
        "id": "b",
        "value": "`41`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">41</code>"
       },
       {
        "id": "c",
        "value": "`0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
       },
       {
        "id": "d",
        "value": "`12`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">12</code>"
       }
      ],
      "correctId": "d",
      "explanation": "הזוגות הם 34, 41 ו-12, וכל אחד מופיע פעם אחת. המעבר על המונים עולה מ-1 ומעלה, והראשון שגדול מ-`cnt[0] = 0` הוא `cnt[12] = 1`, ולכן `best` נהיה 12. המונים של 34 ו-41 הם גם 1, אבל `1 > 1` שקר, ולכן הם לא מחליפים אותו. 0 היה מודפס רק אם לא היה אף זוג.",
      "recap": "תיקו: נשאר הערך הקטן ביותר מבין השכיחים",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"3412\";\nint cnt[100] = {0}, best = 0;\nfor (int i = 0; s[i + 1] != '\\0'; i++)\n    cnt[(s[i] - '0') * 10 + (s[i + 1] - '0')]++;\nfor (int i = 1; i &lt; 100; i++)\n    if (cnt[i] &gt; cnt[best])\n        best = i;\nprintf(\"%d\", best);</code></pre>",
      "explanationHtml": "הזוגות הם 34, 41 ו-12, וכל אחד מופיע פעם אחת. המעבר על המונים עולה מ-1 ומעלה, והראשון שגדול מ-<code class=\"tok\" dir=\"ltr\">cnt[0] = 0</code> הוא <code class=\"tok\" dir=\"ltr\">cnt[12] = 1</code>, ולכן <code class=\"tok\" dir=\"ltr\">best</code> נהיה 12. המונים של 34 ו-41 הם גם 1, אבל <code class=\"tok\" dir=\"ltr\">1 &gt; 1</code> שקר, ולכן הם לא מחליפים אותו. 0 היה מודפס רק אם לא היה אף זוג.",
      "recapHtml": "תיקו: נשאר הערך הקטן ביותר מבין השכיחים"
     },
     {
      "id": "C07-Q6",
      "step": {
       "type": "text",
       "prompt": "מהי סיבוכיות הזמן של `commonSum` כשאורך המחרוזת הוא n? (למשל `O(n)`)",
       "accept": [
        "O(n)"
       ],
       "normalize": "complexity",
       "explain": "הלולאה הראשונה עוברת על n-1 זוגות ועושה עבודה קבועה בכל אחד. השנייה עוברת על 19 תאים קבועים. סך הכל $O(n)$.",
       "promptHtml": "מהי סיבוכיות הזמן של <code class=\"tok\" dir=\"ltr\">commonSum</code> כשאורך המחרוזת הוא n? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
       "explainHtml": "הלולאה הראשונה עוברת על n-1 זוגות ועושה עבודה קבועה בכל אחד. השנייה עוברת על 19 תאים קבועים. סך הכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
      },
      "recap": "מעבר אחד + טווח קבוע = O(n)",
      "recapHtml": "מעבר אחד + טווח קבוע = O(n)"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "✍️",
    "title": "כתיבה במקום: קורא וכותב",
    "goal": "אחרי השלב הזה תוכלו לסנן ולקצר מחרוזת בתוך עצמה, ולסמן תווים שכבר נכתבו.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כשמוחקים או מסננים תווים מהמחרוזת עצמה, בלי מערך חדש, משתמשים בשני אינדקסים שרצים על אותו מערך: <b>קורא</b> <code>i</code> שעובר על כל התווים, ו<b>כותב</b> <code>w</code> שמסמן איפה נכתב התו הבא. הקורא מתקדם תמיד, והכותב מתקדם רק כשתו נשמר.</p>\n<pre>void removeSpaces(char *s) {\n    int i, w = 0;\n    for (i = 0; s[i] != '\\0'; i++) {\n        if (s[i] != ' ') {\n            s[w] = s[i];\n            w++;\n        }\n    }\n    s[w] = '\\0';\n}</pre>\n<div class=\"lesson-rule\">🔑 הכותב לא עוקף את הקורא (<code>w &lt;= i</code>), ולכן כתיבה לעולם לא דורסת תו שעוד לא נקרא.</div>\n<div class=\"lesson-rule\">🔑 אחרי הלולאה חייבים <code>s[w] = '\\0'</code>. המחרוזת החדשה קצרה מהישנה, וה\"זנב\" הישן נשאר בזיכרון. בלי סימן סיום חדש הוא מודפס.</div>\n<div class=\"lesson-ex\">דוגמה: <code>\"a b  c\"</code> (שישה תווים). הכותב כותב <code>a</code>, <code>b</code>, <code>c</code> בתאים 0 עד 2, ואז <code>s[3] = '\\0'</code> עוצר את המחרוזת: <code>\"abc\"</code>. בלי השורה האחרונה המערך הוא <code>a b c _ _ c</code> והדפסה נותנת <code>abc  c</code>.</div>\n<h3>אותה פעולה עם מצביעים</h3>\n<pre>char *r = s, *w = s;\nwhile (*r) {\n    if (*r != ' ')\n        *w++ = *r;\n    r++;\n}\n*w = '\\0';</pre>\n<h3>מחיקת תווים שחוזרים</h3>\n<p>כדי להשאיר רק תו אחד מכל רצף זהה משווים את התו הנוכחי <b>לתו האחרון שנכתב</b>, <code>s[w - 1]</code>. התו הראשון תמיד נשמר (אין עדיין \"אחרון\"): התנאי <code>w == 0 || s[i] != s[w - 1]</code>. הבדיקה <code>w == 0</code> באה ראשונה ומונעת קריאה של <code>s[-1]</code>.</p>\n<h3>שתי סריקות וסימון</h3>\n<p>כשההחלטה תלויה בכמה פעמים אות מופיעה בכל המחרוזת, סורקים פעמיים: בראשונה סופרים, ובשנייה כותבים לפי המונים. כדי לכתוב כל אות רק פעם אחת, <b>מאפסים את המונה</b> שלה מיד אחרי הכתיבה, כך שההופעות הבאות של אותה אות נכשלות בתנאי.</p>\n<div class=\"lesson-ex\">דוגמה: משאירים כל אות שחוזרת (פעמיים או יותר) פעם אחת בסדר ההופעה. ב-<code>\"abcabdd\"</code> התוצאה <code>\"abd\"</code>. אחרי שכתבנו את <code>a</code> מאפסים את <code>cnt['a'-'a']</code>, וה-<code>a</code> השני כבר לא עובר את התנאי <code>cnt &gt; 1</code>.</div>\n<div class=\"lesson-trap\">⚠️ שני אינדקסים שונים: <code>s[w] = s[i]</code> (כותבים ל-<code>w</code>, קוראים מ-<code>i</code>), ו-<code>w++</code> רק בתוך התנאי. וסימן הסיום הוא ב-<code>w</code>, לא ב-<code>i</code>.</div>\n"
    },
    "questions": [
     {
      "id": "C08-Q1",
      "question": "הפונקציה מוחקת רווחים, אבל המתכנת שכח את השורה האחרונה (`s[w] = '\\0'`). מה מדפיס הקוד?\n```c\nchar s[] = \"a b  c\";\nint w = 0;\nfor (int i = 0; s[i] != '\\0'; i++)\n    if (s[i] != ' ')\n        s[w++] = s[i];\nprintf(\"%s\", s);\n```",
      "options": [
       {
        "id": "a",
        "value": "`abc`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abc</code>"
       },
       {
        "id": "b",
        "value": "`a b  c`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a b  c</code>"
       },
       {
        "id": "c",
        "value": "`abc  c`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abc  c</code>"
       },
       {
        "id": "d",
        "value": "`a b c`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a b c</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הכותב כותב `a`, `b`, `c` בתאים 0 עד 2, אבל התאים 3 עד 5 נשארים כפי שהיו: רווח, רווח ו-`c`. בלי `'\\0'` חדש המחרוזת נגמרת רק בסוף המערך המקורי, ולכן מודפס `abc  c` (עם שני רווחים). `abc` היה מתקבל רק עם `s[w] = '\\0'`.",
      "recap": "אחרי סינון חייבים s[w] = '\\0'",
      "questionHtml": "הפונקציה מוחקת רווחים, אבל המתכנת שכח את השורה האחרונה (<code class=\"tok\" dir=\"ltr\">s[w] = '\\0'</code>). מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"a b  c\";\nint w = 0;\nfor (int i = 0; s[i] != '\\0'; i++)\n    if (s[i] != ' ')\n        s[w++] = s[i];\nprintf(\"%s\", s);</code></pre>",
      "explanationHtml": "הכותב כותב <code class=\"tok\" dir=\"ltr\">a</code>, <code class=\"tok\" dir=\"ltr\">b</code>, <code class=\"tok\" dir=\"ltr\">c</code> בתאים 0 עד 2, אבל התאים 3 עד 5 נשארים כפי שהיו: רווח, רווח ו-<code class=\"tok\" dir=\"ltr\">c</code>. בלי <code class=\"tok\" dir=\"ltr\">'\\0'</code> חדש המחרוזת נגמרת רק בסוף המערך המקורי, ולכן מודפס <code class=\"tok\" dir=\"ltr\">abc  c</code> (עם שני רווחים). <code class=\"tok\" dir=\"ltr\">abc</code> היה מתקבל רק עם <code class=\"tok\" dir=\"ltr\">s[w] = '\\0'</code>.",
      "recapHtml": "אחרי סינון חייבים s[w] = '\\0'"
     },
     {
      "id": "C08-Q2",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה שמוחקת רווחים מהמחרוזת.",
       "code": true,
       "lines": [
        "void removeSpaces(char *s) {\n    int i, w = 0;",
        "    for (i = 0; s[i] != '\\0'; i++) {\n        if (s[i] != ' ') {\n            s[w] = s[i];\n            w++;\n        }\n    }",
        "    s[w] = '\\0';\n}"
       ],
       "explain": "הצהרה ואיפוס, הלולאה שמסננת, ובסוף סימון הסיום החדש. אם סימון הסיום היה לפני הלולאה (`w` עדיין 0) המחרוזת הייתה נחתכת לריקה.",
       "promptHtml": "סדרו את שורות הפונקציה שמוחקת רווחים מהמחרוזת.",
       "explainHtml": "הצהרה ואיפוס, הלולאה שמסננת, ובסוף סימון הסיום החדש. אם סימון הסיום היה לפני הלולאה (<code class=\"tok\" dir=\"ltr\">w</code> עדיין 0) המחרוזת הייתה נחתכת לריקה.",
       "linesHtml": [
        "void removeSpaces(char *s) {\n    int i, w = 0;",
        "    for (i = 0; s[i] != '\\0'; i++) {\n        if (s[i] != ' ') {\n            s[w] = s[i];\n            w++;\n        }\n    }",
        "    s[w] = '\\0';\n}"
       ]
      },
      "recap": "קורא וכותב, ובסוף '\\0'",
      "recapHtml": "קורא וכותב, ובסוף '\\0'"
     },
     {
      "id": "C08-Q3",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה למחוק רווחים (`\"a b c\"` נהיה `\"abc\"`), אבל שורה אחת שונתה. איזו?",
       "code": true,
       "lines": [
        "void removeSpaces(char *s) {",
        "    int i, w = 0;",
        "    for (i = 0; s[i] != '\\0'; i++) {",
        "        if (s[i] != ' ') {",
        "            s[i] = s[w];",
        "            w++;",
        "        }",
        "    }",
        "    s[w] = '\\0';",
        "}"
       ],
       "bugIndex": 4,
       "explain": "ההעתקה הפוכה: `s[i] = s[w]` כותבת לתא של הקורא מתוך תא הכותב. במקום להעביר תווים קדימה לאחור, הם נדרסים. צריך `s[w] = s[i]`.",
       "promptHtml": "הפונקציה אמורה למחוק רווחים (<code class=\"tok\" dir=\"ltr\">\"a b c\"</code> נהיה <code class=\"tok\" dir=\"ltr\">\"abc\"</code>), אבל שורה אחת שונתה. איזו?",
       "explainHtml": "ההעתקה הפוכה: <code class=\"tok\" dir=\"ltr\">s[i] = s[w]</code> כותבת לתא של הקורא מתוך תא הכותב. במקום להעביר תווים קדימה לאחור, הם נדרסים. צריך <code class=\"tok\" dir=\"ltr\">s[w] = s[i]</code>.",
       "linesHtml": [
        "void removeSpaces(char *s) {",
        "    int i, w = 0;",
        "    for (i = 0; s[i] != '\\0'; i++) {",
        "        if (s[i] != ' ') {",
        "            s[i] = s[w];",
        "            w++;",
        "        }",
        "    }",
        "    s[w] = '\\0';",
        "}"
       ]
      },
      "recap": "כותבים ל-s[w], קוראים מ-s[i]",
      "recapHtml": "כותבים ל-s[w], קוראים מ-s[i]"
     },
     {
      "id": "C08-Q4",
      "step": {
       "type": "fillblank",
       "prompt": "הפונקציה מקצרת כל רצף של אותו תו לתו אחד (`\"aabccc\"` נהיה `\"abc\"`). מה מחליף את ___?",
       "code": true,
       "lines": [
        "void collapse(char *s) {",
        "    int w = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (___)",
        "            s[w++] = s[i];",
        "    s[w] = '\\0';",
        "}"
       ],
       "blankIndex": 3,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "w == 0 || s[i] == s[w - 1]",
         "html": "w == 0 || s[i] == s[w - 1]"
        },
        {
         "id": "b",
         "type": "text",
         "value": "s[i] != s[w]",
         "html": "s[i] != s[w]"
        },
        {
         "id": "c",
         "type": "text",
         "value": "w == 0 || s[i] != s[0]",
         "html": "w == 0 || s[i] != s[0]"
        },
        {
         "id": "d",
         "type": "text",
         "value": "w == 0 || s[i] != s[w - 1]",
         "html": "w == 0 || s[i] != s[w - 1]"
        }
       ],
       "correctId": "d",
       "explain": "שומרים תו אם זה התו הראשון, או אם הוא שונה מהתו האחרון שנכתב, `s[w - 1]`. `s[i] == s[w - 1]` שומר דווקא את החזרות. `s[i] != s[w]` משווה לתא שעוד לא נכתב, ולכן מאבד תווים. `s[i] != s[0]` משווה רק לתו הראשון: ב-`\"abab\"` הוא מוחק את ה-`a` השני.",
       "promptHtml": "הפונקציה מקצרת כל רצף של אותו תו לתו אחד (<code class=\"tok\" dir=\"ltr\">\"aabccc\"</code> נהיה <code class=\"tok\" dir=\"ltr\">\"abc\"</code>). מה מחליף את ___?",
       "explainHtml": "שומרים תו אם זה התו הראשון, או אם הוא שונה מהתו האחרון שנכתב, <code class=\"tok\" dir=\"ltr\">s[w - 1]</code>. <code class=\"tok\" dir=\"ltr\">s[i] == s[w - 1]</code> שומר דווקא את החזרות. <code class=\"tok\" dir=\"ltr\">s[i] != s[w]</code> משווה לתא שעוד לא נכתב, ולכן מאבד תווים. <code class=\"tok\" dir=\"ltr\">s[i] != s[0]</code> משווה רק לתו הראשון: ב-<code class=\"tok\" dir=\"ltr\">\"abab\"</code> הוא מוחק את ה-<code class=\"tok\" dir=\"ltr\">a</code> השני.",
       "linesHtml": [
        "void collapse(char *s) {",
        "    int w = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (___)",
        "            s[w++] = s[i];",
        "    s[w] = '\\0';",
        "}"
       ]
      },
      "recap": "רצף: משווים ל-s[w - 1], התו האחרון שנכתב",
      "recapHtml": "רצף: משווים ל-s[w - 1], התו האחרון שנכתב"
     },
     {
      "id": "C08-Q5",
      "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"xaxbx\";\nchar *r = s, *w = s;\nwhile (*r) {\n    if (*r != 'x')\n        *w++ = *r;\n    r++;\n}\n*w = '\\0';\nprintf(\"%s\", s);\n```",
      "options": [
       {
        "id": "a",
        "value": "`xaxbx`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xaxbx</code>"
       },
       {
        "id": "b",
        "value": "`abxbx`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abxbx</code>"
       },
       {
        "id": "c",
        "value": "`a`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a</code>"
       },
       {
        "id": "d",
        "value": "`ab`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ab</code>"
       }
      ],
      "correctId": "d",
      "explanation": "הקורא עובר על כל התווים, והכותב כותב רק את `a` ואת `b`: `ab`, ואז `*w = '\\0'` עוצר את המחרוזת. `abxbx` היה מתקבל בלי השורה `*w = '\\0'`. `xaxbx` היה מקורי, ו-`a` מתעלם מה-`b`.",
      "recap": "גרסת מצביעים: *w++ = *r רק כשתו נשמר",
      "questionHtml": "מה מדפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>char s[] = \"xaxbx\";\nchar *r = s, *w = s;\nwhile (*r) {\n    if (*r != 'x')\n        *w++ = *r;\n    r++;\n}\n*w = '\\0';\nprintf(\"%s\", s);</code></pre>",
      "explanationHtml": "הקורא עובר על כל התווים, והכותב כותב רק את <code class=\"tok\" dir=\"ltr\">a</code> ואת <code class=\"tok\" dir=\"ltr\">b</code>: <code class=\"tok\" dir=\"ltr\">ab</code>, ואז <code class=\"tok\" dir=\"ltr\">*w = '\\0'</code> עוצר את המחרוזת. <code class=\"tok\" dir=\"ltr\">abxbx</code> היה מתקבל בלי השורה <code class=\"tok\" dir=\"ltr\">*w = '\\0'</code>. <code class=\"tok\" dir=\"ltr\">xaxbx</code> היה מקורי, ו-<code class=\"tok\" dir=\"ltr\">a</code> מתעלם מה-<code class=\"tok\" dir=\"ltr\">b</code>.",
      "recapHtml": "גרסת מצביעים: *w++ = *r רק כשתו נשמר"
     },
     {
      "id": "C08-Q6",
      "step": {
       "type": "fillblank",
       "prompt": "הפונקציה משאירה כל אות שמופיעה יותר מפעם אחת במחרוזת, פעם אחת, בסדר ההופעה הראשונה (`\"abcabdd\"` נהיה `\"abd\"`). מה מחליף את ___?",
       "code": true,
       "lines": [
        "void keepRepeated(char *s) {",
        "    int cnt[26] = {0}, w = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        cnt[s[i] - 'a']++;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (cnt[s[i] - 'a'] > 1) {",
        "            s[w++] = s[i];",
        "            ___",
        "        }",
        "    s[w] = '\\0';",
        "}"
       ],
       "blankIndex": 7,
       "options": [
        {
         "id": "a",
         "type": "text",
         "value": "cnt[s[i] - 'a']--;",
         "html": "cnt[s[i] - 'a']--;"
        },
        {
         "id": "b",
         "type": "text",
         "value": "cnt[s[i] - 'a'] = 0;",
         "html": "cnt[s[i] - 'a'] = 0;"
        },
        {
         "id": "c",
         "type": "text",
         "value": "cnt[s[i] - 'a']++;",
         "html": "cnt[s[i] - 'a']++;"
        },
        {
         "id": "d",
         "type": "text",
         "value": "cnt[s[i] - 'a'] = 2;",
         "html": "cnt[s[i] - 'a'] = 2;"
        }
       ],
       "correctId": "b",
       "explain": "אחרי כתיבת אות מאפסים את המונה שלה, כך ששאר ההופעות שלה נכשלות ב-`cnt > 1`. `--` מוריד רק באחד: אות שמופיעה שלוש פעמים או יותר (`\"aaabbc\"`) נכתבת שוב. `++` ו-`= 2` משאירים את התנאי אמת, והאות נכתבת בכל הופעה.",
       "promptHtml": "הפונקציה משאירה כל אות שמופיעה יותר מפעם אחת במחרוזת, פעם אחת, בסדר ההופעה הראשונה (<code class=\"tok\" dir=\"ltr\">\"abcabdd\"</code> נהיה <code class=\"tok\" dir=\"ltr\">\"abd\"</code>). מה מחליף את ___?",
       "explainHtml": "אחרי כתיבת אות מאפסים את המונה שלה, כך ששאר ההופעות שלה נכשלות ב-<code class=\"tok\" dir=\"ltr\">cnt &gt; 1</code>. <code class=\"tok\" dir=\"ltr\">--</code> מוריד רק באחד: אות שמופיעה שלוש פעמים או יותר (<code class=\"tok\" dir=\"ltr\">\"aaabbc\"</code>) נכתבת שוב. <code class=\"tok\" dir=\"ltr\">++</code> ו-<code class=\"tok\" dir=\"ltr\">= 2</code> משאירים את התנאי אמת, והאות נכתבת בכל הופעה.",
       "linesHtml": [
        "void keepRepeated(char *s) {",
        "    int cnt[26] = {0}, w = 0;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        cnt[s[i] - 'a']++;",
        "    for (int i = 0; s[i] != '\\0'; i++)",
        "        if (cnt[s[i] - 'a'] &gt; 1) {",
        "            s[w++] = s[i];",
        "            ___",
        "        }",
        "    s[w] = '\\0';",
        "}"
       ]
      },
      "recap": "אחרי כתיבה מאפסים את המונה: סימון 'כבר נכתב'",
      "recapHtml": "אחרי כתיבה מאפסים את המונה: סימון 'כבר נכתב'"
     }
    ]
   },
   {
    "id": "C09",
    "order": 9,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "אחרי השלב הזה תוכלו לזהות איזה כלי מתאים לשאלת מחרוזות במבחן ולפתור אותה.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>בשלב הזה שש שאלות אמיתיות ממבחנים. שאלת מחרוזות במבחן כמעט תמיד דורשת פתרון \"יעיל, בסדר גודל של n\", ובדרך כלל היא נפתרת בכלים שכבר בניתם. הטבלה עוזרת לזהות איזה כלי מתאים.</p>\n<table>\n<thead><tr><th>מה כתוב בשאלה</th><th>הכלי</th><th>שלב</th></tr></thead>\n<tbody>\n<tr><td>אותיות קטנות באנגלית, \"יעיל\", מותר מערך עזר</td><td>מערך מונים של 26</td><td>6</td></tr>\n<tr><td>\"מופיעה בדיוק k פעמים\", \"פעם ראשונה\", \"בכלל לא חוזרת\"</td><td>מעבר ראשון לספירה, ומעבר שני להחלטה</td><td>6, 8</td></tr>\n<tr><td>משאירים או מוחקים תווים במחרוזת עצמה</td><td>קורא וכותב, ו-<code>'\\0'</code> בסוף</td><td>8</td></tr>\n<tr><td>זוגות צמודים, מרחק בין אותיות, מספר דו-ספרתי</td><td>מונים שהאינדקס שלהם נגזר מהזוג</td><td>7</td></tr>\n<tr><td>\"אפשר להרכיב מילה מהאותיות של טקסט\"</td><td>מונים, בלי לשנות את המחרוזות</td><td>6</td></tr>\n<tr><td>\"אם יש כמה, להחזיר את הקטן\"</td><td>חיפוש מקסימום עם <code>&gt;</code> ממש</td><td>6, 7</td></tr>\n</tbody></table>\n<h3>רשימת בדיקה לפני שמגישים</h3>\n<ul>\n<li>מה טווח הערכים, וכמה תאים צריך במערך? האם אותחל ל-0?</li>\n<li>האם הלולאה נעצרת ב-<code>'\\0'</code>, ולא עוברת אותו?</li>\n<li>האם הכותב כותב ל-<code>s[w]</code> וקורא מ-<code>s[i]</code>, ויש <code>s[w] = '\\0'</code> בסוף?</li>\n<li>מקרי קצה: מחרוזת ריקה, תו אחד, תיקו.</li>\n<li>סיבוכיות: מעבר אחד או שניים, ללא לולאה בתוך לולאה.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 אחרי שכתבתם את הפונקציה, הריצו אותה \"ביד\" על הדוגמה מהשאלה. רוב הטעויות (אינדקס, תיקו, סימון סיום) מתגלות בשתי דקות.</div>\n"
    },
    "questions": [
     {
      "bankId": "22A-A-Q3",
      "recap": "מונים לפי אות, וכותבים כל אות בהופעה הראשונה בלבד",
      "recapHtml": "מונים לפי אות, וכותבים כל אות בהופעה הראשונה בלבד"
     },
     {
      "bankId": "22A-B-Q3",
      "recap": "מונים: אין אות שחוזרת, והאותיות רצופות",
      "recapHtml": "מונים: אין אות שחוזרת, והאותיות רצופות"
     },
     {
      "bankId": "23A-A-Q2",
      "recap": "שתי סריקות: ספירה, ואז כתיבה של התווים שמופיעים בדיוק שלוש פעמים, ואיפוס המונה אחרי הכתיבה",
      "recapHtml": "שתי סריקות: ספירה, ואז כתיבה של התווים שמופיעים בדיוק שלוש פעמים, ואיפוס המונה אחרי הכתיבה"
     },
     {
      "bankId": "24A-A-Q2",
      "recap": "המרחק השכיח בין אותיות צמודות: מונים שהאינדקס שלהם הוא ההפרש",
      "recapHtml": "המרחק השכיח בין אותיות צמודות: מונים שהאינדקס שלהם הוא ההפרש"
     },
     {
      "bankId": "24A-B-Q2",
      "recap": "המספר הדו-ספרתי השכיח: מונים בגודל 100, ובתיקו הקטן",
      "recapHtml": "המספר הדו-ספרתי השכיח: מונים בגודל 100, ובתיקו הקטן"
     }
    ]
   }
  ]
 },
 "matrices": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔲",
    "title": "שורה, עמודה, תא",
    "goal": "להצהיר על מערך דו-ממדי, לקרוא תא לפי שורה ועמודה, ולדעת איך המטריצה שמורה בזיכרון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>מערך דו-ממדי</b> (מטריצה) הוא טבלה של מספרים: כמה שורות וכמה עמודות. מצהירים עליו עם שני גדלים: קודם מספר השורות ואחריו מספר העמודות.</p>\n<pre class=\"code-block\">int m[3][4] = {{1, 2, 3, 4},\n               {5, 6, 7, 8},\n               {9, 10, 11, 12}};</pre>\n<p>זו מטריצה עם <b>3 שורות</b> ו-<b>4 עמודות</b>, כלומר 12 תאים. כל סוגריים פנימיים הם שורה אחת.</p>\n<div class=\"lesson-rule\">🔑 <code>m[i][j]</code> היא <b>שורה i, עמודה j</b>. האינדקס הראשון הוא תמיד השורה. הספירה מתחילה מ-0, ולכן בכל מטריצה <code>R x C</code> השורות הן 0 עד <code>R-1</code> והעמודות 0 עד <code>C-1</code>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> במטריצה למעלה <code>m[0][0]</code> הוא 1 (פינה שמאלית עליונה), <code>m[1][2]</code> הוא 7 (שורה שנייה, עמודה שלישית), ו-<code>m[2][3]</code> הוא 12 (התא האחרון).</div>\n<h3>התא האחרון, וחריגה מהגבולות</h3>\n<p>בגלל שהספירה מתחילה מ-0, התא האחרון הוא <code>m[R-1][C-1]</code>. הכתיבה <code>m[R][C]</code> חורגת מהמטריצה: זו שגיאה קלאסית, והתוכנית עלולה לקרוס או לקרוא זבל.</p>\n<h3>איך המטריצה שמורה בזיכרון</h3>\n<p>הזיכרון הוא רצף אחד. המטריצה שמורה <b>שורה אחרי שורה</b>: קודם כל התאים של שורה 0, אחריהם שורה 1, וכן הלאה. במטריצה למעלה הרצף הוא 1, 2, 3, 4, 5, 6, ... , 12. לכן אם <code>p</code> מצביע על <code>m[0][0]</code>, התא <code>p[6]</code> הוא השביעי ברצף, כלומר <code>m[1][2]</code>.</p>\n<div class=\"lesson-trap\">⚠️ מי שחושב שהמטריצה שמורה עמודה אחרי עמודה יקרא את הערך הלא נכון. ב-C זה תמיד שורה אחרי שורה.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "נתונה המטריצה:\n```c\nint m[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};\n```\nמה הערך של `m[1][2]` ?",
      "options": [
       {
        "id": "a",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "b",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "c",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "b",
      "explanation": "האינדקס הראשון הוא השורה: שורה 1 היא `{5, 6, 7, 8}`, ובה העמודה 2 היא **7**. 10 הוא `m[2][1]` (הוחלפו שורה ועמודה). 8 הוא `m[1][3]` (עמודה אחת רחוק מדי). 3 הוא `m[0][2]` (שורה 0 במקום שורה 1).",
      "recap": "m[i][j]: האינדקס הראשון שורה, השני עמודה",
      "questionHtml": "נתונה המטריצה:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int m[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};</code></pre>מה הערך של <code class=\"tok\" dir=\"ltr\">m[1][2]</code> ?",
      "explanationHtml": "האינדקס הראשון הוא השורה: שורה 1 היא <code class=\"tok\" dir=\"ltr\">{5, 6, 7, 8}</code>, ובה העמודה 2 היא <strong>7</strong>. 10 הוא <code class=\"tok\" dir=\"ltr\">m[2][1]</code> (הוחלפו שורה ועמודה). 8 הוא <code class=\"tok\" dir=\"ltr\">m[1][3]</code> (עמודה אחת רחוק מדי). 3 הוא <code class=\"tok\" dir=\"ltr\">m[0][2]</code> (שורה 0 במקום שורה 1).",
      "recapHtml": "m[i][j]: האינדקס הראשון שורה, השני עמודה"
     },
     {
      "id": "C01-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה תאים יש במטריצה שהוצהרה כך: `int a[5][7];` ?",
       "answer": 35,
       "tol": 0,
       "explain": "5 שורות כפול 7 עמודות: $5\\cdot 7=35$ תאים. 12 הוא 5+7, וכפל הוא הדרך הנכונה לספור תאים בטבלה.",
       "promptHtml": "כמה תאים יש במטריצה שהוצהרה כך: <code class=\"tok\" dir=\"ltr\">int a[5][7];</code> ?",
       "explainHtml": "5 שורות כפול 7 עמודות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mn>7</mn><mo>=</mo><mn>35</mn></mrow><annotation encoding=\"application/x-tex\">5\\cdot 7=35</annotation></semantics></math></span> תאים. 12 הוא 5+7, וכפל הוא הדרך הנכונה לספור תאים בטבלה."
      },
      "recap": "מספר התאים = שורות כפול עמודות",
      "recapHtml": "מספר התאים = שורות כפול עמודות"
     },
     {
      "id": "C01-Q3",
      "question": "איזו הצהרה יוצרת מטריצה עם **4 שורות ו-6 עמודות**?",
      "options": [
       {
        "id": "a",
        "value": "`int a[6][4];`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int a[6][4];</code>"
       },
       {
        "id": "b",
        "value": "`int a[4][];`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int a[4][];</code>"
       },
       {
        "id": "c",
        "value": "`int a[4][6];`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int a[4][6];</code>"
       },
       {
        "id": "d",
        "value": "`int a[24];`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int a[24];</code>"
       }
      ],
      "correctId": "c",
      "explanation": "קודם מספר השורות ואחריו מספר העמודות: `int a[4][6];`. `int a[6][4];` יוצרת 6 שורות ו-4 עמודות (התא `a[3][5]` כבר מחוץ לגבולות שלה). `int a[4][];` לא מתקמפלת, כי חייבים לציין את מספר העמודות. `int a[24];` היא מערך חד-ממדי, ולא אפשר לכתוב עליו `a[3][5]`.",
      "recap": "int a[שורות][עמודות];",
      "questionHtml": "איזו הצהרה יוצרת מטריצה עם <strong>4 שורות ו-6 עמודות</strong>?",
      "explanationHtml": "קודם מספר השורות ואחריו מספר העמודות: <code class=\"tok\" dir=\"ltr\">int a[4][6];</code>. <code class=\"tok\" dir=\"ltr\">int a[6][4];</code> יוצרת 6 שורות ו-4 עמודות (התא <code class=\"tok\" dir=\"ltr\">a[3][5]</code> כבר מחוץ לגבולות שלה). <code class=\"tok\" dir=\"ltr\">int a[4][];</code> לא מתקמפלת, כי חייבים לציין את מספר העמודות. <code class=\"tok\" dir=\"ltr\">int a[24];</code> היא מערך חד-ממדי, ולא אפשר לכתוב עליו <code class=\"tok\" dir=\"ltr\">a[3][5]</code>.",
      "recapHtml": "int a[שורות][עמודות];"
     },
     {
      "id": "C01-Q4",
      "question": "במטריצה `int mat[R][C]` (כש-`R` ו-`C` קבועים) איזה תא הוא **התא האחרון**, בשורה האחרונה ובעמודה האחרונה?",
      "options": [
       {
        "id": "a",
        "value": "`mat[R][C]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">mat[R][C]</code>"
       },
       {
        "id": "b",
        "value": "`mat[R-1][C-1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">mat[R-1][C-1]</code>"
       },
       {
        "id": "c",
        "value": "`mat[R-1][C]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">mat[R-1][C]</code>"
       },
       {
        "id": "d",
        "value": "`mat[R][C-1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">mat[R][C-1]</code>"
       }
      ],
      "correctId": "b",
      "explanation": "האינדקסים רצים מ-0 עד `R-1` ומ-0 עד `C-1`, ולכן התא האחרון הוא `mat[R-1][C-1]`. שלוש האפשרויות האחרות חורגות מהגבולות באחד האינדקסים או בשניהם, ובהרצה עם בדיקת גבולות הן קורסות.",
      "recap": "התא האחרון הוא mat[R-1][C-1]",
      "questionHtml": "במטריצה <code class=\"tok\" dir=\"ltr\">int mat[R][C]</code> (כש-<code class=\"tok\" dir=\"ltr\">R</code> ו-<code class=\"tok\" dir=\"ltr\">C</code> קבועים) איזה תא הוא <strong>התא האחרון</strong>, בשורה האחרונה ובעמודה האחרונה?",
      "explanationHtml": "האינדקסים רצים מ-0 עד <code class=\"tok\" dir=\"ltr\">R-1</code> ומ-0 עד <code class=\"tok\" dir=\"ltr\">C-1</code>, ולכן התא האחרון הוא <code class=\"tok\" dir=\"ltr\">mat[R-1][C-1]</code>. שלוש האפשרויות האחרות חורגות מהגבולות באחד האינדקסים או בשניהם, ובהרצה עם בדיקת גבולות הן קורסות.",
      "recapHtml": "התא האחרון הוא mat[R-1][C-1]"
     },
     {
      "id": "C01-Q5",
      "question": "מה ידפיס הקוד?\n```c\nint m[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};\nint *p = &m[0][0];\nprintf(\"%d\", p[6]);\n```",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "d",
        "value": "8",
        "type": "text",
        "html": "8"
       }
      ],
      "correctId": "c",
      "explanation": "המטריצה שמורה שורה אחרי שורה: 1, 2, 3, 4, 5, 6, 7, ... ולכן `p[6]` הוא האיבר ה-7 ברצף, **7** (זה `m[1][2]`). 6 הוא `p[5]`, 8 הוא `p[7]`, ו-3 היה יוצא אילו המטריצה הייתה שמורה עמודה אחרי עמודה (1, 5, 9, 2, 6, 10, 3, ...), וזה לא נכון ב-C.",
      "recap": "ב-C מטריצה שמורה שורה אחרי שורה",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int m[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};\nint *p = &amp;m[0][0];\nprintf(\"%d\", p[6]);</code></pre>",
      "explanationHtml": "המטריצה שמורה שורה אחרי שורה: 1, 2, 3, 4, 5, 6, 7, ... ולכן <code class=\"tok\" dir=\"ltr\">p[6]</code> הוא האיבר ה-7 ברצף, <strong>7</strong> (זה <code class=\"tok\" dir=\"ltr\">m[1][2]</code>). 6 הוא <code class=\"tok\" dir=\"ltr\">p[5]</code>, 8 הוא <code class=\"tok\" dir=\"ltr\">p[7]</code>, ו-3 היה יוצא אילו המטריצה הייתה שמורה עמודה אחרי עמודה (1, 5, 9, 2, 6, 10, 3, ...), וזה לא נכון ב-C.",
      "recapHtml": "ב-C מטריצה שמורה שורה אחרי שורה"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔁",
    "title": "לעבור על כל התאים",
    "goal": "לעבור על כל תאי המטריצה בשתי לולאות מקוננות, ולחשב סכום, ספירה ומקסימום.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כדי לטפל בכל תא במטריצה <code>R x C</code> משתמשים בשתי לולאות מקוננות: החיצונית עוברת על השורות, הפנימית על העמודות.</p>\n<pre class=\"code-block\">for (int i = 0; i &lt; R; i++)\n    for (int j = 0; j &lt; C; j++)\n        /* כאן עובדים עם a[i][j] */</pre>\n<p>הלולאה החיצונית מקבלת ערך אחד של <code>i</code>, והפנימית רצה על כל ה-<code>j</code> שלה. לכן התאים מתקבלים <b>שורה אחרי שורה</b>, והגוף רץ <code>R * C</code> פעמים. אם מחליפים את סדר הלולאות (העמודות בחוץ), הסריקה היא עמודה אחרי עמודה.</p>\n<div class=\"lesson-rule\">🔑 הלולאה על <code>i</code> נעצרת ב-<code>R</code> (שורות) והלולאה על <code>j</code> נעצרת ב-<code>C</code> (עמודות). במטריצה שאינה ריבועית, אם מחליפים ביניהן מפספסים תאים או חורגים מהמטריצה.</div>\n<h3>שלוש תבניות</h3>\n<ul>\n<li><b>סכום:</b> <code>s = 0</code> לפני הלולאות, ובתוכן <code>s += a[i][j]</code>.</li>\n<li><b>ספירה:</b> <code>count = 0</code>, ובתוכן <code>if (תנאי) count++</code>.</li>\n<li><b>מקסימום:</b> מאתחלים <code>max = a[0][0]</code> (תא אמיתי מהמטריצה) ובתוכן <code>if (a[i][j] &gt; max) max = a[i][j]</code>.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> כמה תאים זוגיים יש ב-<code>{{1,2},{3,4}}</code>? הלולאות עוברות על 1, 2, 3, 4. התנאי <code>a[i][j] % 2 == 0</code> נכון ל-2 ול-4, ולכן התוצאה 2.</div>\n<div class=\"lesson-trap\">⚠️ אתחול המקסימום ב-<code>0</code> שגוי כשכל המספרים שליליים: המקסימום יישאר 0, ערך שאינו במטריצה בכלל. מתחילים מתא אמיתי.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nint a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint s = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        s += a[i][j];\nprintf(\"%d\", s);\n```",
       "answer": 46,
       "tol": 0,
       "explain": "מחברים את כל תשעת התאים: $3+8+1+6+2+9+4+7+6=46$.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint s = 0;\nfor (int i = 0; i &lt; 3; i++)\n    for (int j = 0; j &lt; 3; j++)\n        s += a[i][j];\nprintf(\"%d\", s);</code></pre>",
       "explainHtml": "מחברים את כל תשעת התאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>8</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>7</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>46</mn></mrow><annotation encoding=\"application/x-tex\">3+8+1+6+2+9+4+7+6=46</annotation></semantics></math></span>."
      },
      "recap": "סכום: s = 0 ואז s += a[i][j] בתוך שתי הלולאות",
      "recapHtml": "סכום: s = 0 ואז s += a[i][j] בתוך שתי הלולאות"
     },
     {
      "id": "C02-Q2",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nint a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint count = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        if (a[i][j] > 4)\n            count++;\nprintf(\"%d\", count);\n```",
       "answer": 5,
       "tol": 0,
       "explain": "התאים הגדולים מ-4 הם 8, 6, 9, 7, 6, כלומר 5 תאים. הערכים 3, 1, 2 ו-4 אינם גדולים מ-4 (4 עצמו לא, כי התנאי הוא גדול ממש).",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{3, 8, 1}, {6, 2, 9}, {4, 7, 6}};\nint count = 0;\nfor (int i = 0; i &lt; 3; i++)\n    for (int j = 0; j &lt; 3; j++)\n        if (a[i][j] &gt; 4)\n            count++;\nprintf(\"%d\", count);</code></pre>",
       "explainHtml": "התאים הגדולים מ-4 הם 8, 6, 9, 7, 6, כלומר 5 תאים. הערכים 3, 1, 2 ו-4 אינם גדולים מ-4 (4 עצמו לא, כי התנאי הוא גדול ממש)."
      },
      "recap": "ספירה: count++ רק כשהתנאי מתקיים",
      "recapHtml": "ספירה: count++ רק כשהתנאי מתקיים"
     },
     {
      "id": "C02-Q3",
      "question": "מה ידפיס הקוד? (הפלט בלי רווחים)\n```c\nint a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nfor (int j = 0; j < 3; j++)\n    for (int i = 0; i < 2; i++)\n        printf(\"%d\", a[i][j]);\n```",
      "options": [
       {
        "id": "a",
        "value": "123456",
        "type": "text",
        "html": "123456"
       },
       {
        "id": "b",
        "value": "321654",
        "type": "text",
        "html": "321654"
       },
       {
        "id": "c",
        "value": "142536",
        "type": "text",
        "html": "142536"
       },
       {
        "id": "d",
        "value": "1245",
        "type": "text",
        "html": "1245"
       }
      ],
      "correctId": "c",
      "explanation": "כאן הלולאה החיצונית רצה על העמודות, ולכן הסריקה היא עמודה אחרי עמודה: עמודה 0 היא 1 ו-4, עמודה 1 היא 2 ו-5, עמודה 2 היא 3 ו-6, והפלט **142536**. 123456 היה הפלט עם הסדר הרגיל (שורה אחרי שורה). 321654 היה יוצא אילו `j` רץ אחורה. 1245 היה יוצא אילו עברו שורה אחרי שורה אבל רק על שתי העמודות הראשונות.",
      "recap": "עמודות בלולאה החיצונית נותנות סריקה עמודה אחרי עמודה",
      "questionHtml": "מה ידפיס הקוד? (הפלט בלי רווחים)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nfor (int j = 0; j &lt; 3; j++)\n    for (int i = 0; i &lt; 2; i++)\n        printf(\"%d\", a[i][j]);</code></pre>",
      "explanationHtml": "כאן הלולאה החיצונית רצה על העמודות, ולכן הסריקה היא עמודה אחרי עמודה: עמודה 0 היא 1 ו-4, עמודה 1 היא 2 ו-5, עמודה 2 היא 3 ו-6, והפלט <strong>142536</strong>. 123456 היה הפלט עם הסדר הרגיל (שורה אחרי שורה). 321654 היה יוצא אילו <code class=\"tok\" dir=\"ltr\">j</code> רץ אחורה. 1245 היה יוצא אילו עברו שורה אחרי שורה אבל רק על שתי העמודות הראשונות.",
      "recapHtml": "עמודות בלולאה החיצונית נותנות סריקה עמודה אחרי עמודה"
     },
     {
      "id": "C02-Q4",
      "question": "רוצים למצוא את הערך **המקסימלי** במטריצה `a[R][C]`, שיכולה להכיל גם מספרים שליליים בלבד. איזה אתחול של `max` נכון לפני הלולאות?",
      "options": [
       {
        "id": "a",
        "value": "`int max = 0;`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int max = 0;</code>"
       },
       {
        "id": "b",
        "value": "`int max = a[0][0];`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int max = a[0][0];</code>"
       },
       {
        "id": "c",
        "value": "`int max = -1;`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int max = -1;</code>"
       },
       {
        "id": "d",
        "value": "`int max = INT_MAX;`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">int max = INT_MAX;</code>"
       }
      ],
      "correctId": "b",
      "explanation": "מאתחלים בתא אמיתי של המטריצה, `a[0][0]`. עם `0` או `-1` מטריצה כמו `{{-5,-3},{-9,-4}}` מחזירה 0 או -1 במקום -3. עם `INT_MAX` אף תא לא גדול ממנו, והתוצאה תמיד `INT_MAX`.",
      "recap": "מקסימום מאתחלים בתא של המטריצה, לא ב-0",
      "questionHtml": "רוצים למצוא את הערך <strong>המקסימלי</strong> במטריצה <code class=\"tok\" dir=\"ltr\">a[R][C]</code>, שיכולה להכיל גם מספרים שליליים בלבד. איזה אתחול של <code class=\"tok\" dir=\"ltr\">max</code> נכון לפני הלולאות?",
      "explanationHtml": "מאתחלים בתא אמיתי של המטריצה, <code class=\"tok\" dir=\"ltr\">a[0][0]</code>. עם <code class=\"tok\" dir=\"ltr\">0</code> או <code class=\"tok\" dir=\"ltr\">-1</code> מטריצה כמו <code class=\"tok\" dir=\"ltr\">{{-5,-3},{-9,-4}}</code> מחזירה 0 או -1 במקום -3. עם <code class=\"tok\" dir=\"ltr\">INT_MAX</code> אף תא לא גדול ממנו, והתוצאה תמיד <code class=\"tok\" dir=\"ltr\">INT_MAX</code>.",
      "recapHtml": "מקסימום מאתחלים בתא של המטריצה, לא ב-0"
     },
     {
      "id": "C02-Q5",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הפונקציה אמורה לספור כמה תאים חיוביים יש במטריצה `ROWS x COLS`. מצאו את השורה השגויה.",
       "lines": [
        "#define ROWS 2",
        "#define COLS 3",
        "int countPositive(int a[ROWS][COLS]) {",
        "    int count = 0;",
        "    for (int i = 0; i < ROWS; i++)",
        "        for (int j = 0; j < ROWS; j++)",
        "            if (a[i][j] > 0)",
        "                count++;",
        "    return count;",
        "}"
       ],
       "bugIndex": 5,
       "explain": "הלולאה הפנימית צריכה לרוץ על העמודות, `j < COLS`. עם `j < ROWS` היא מפספסת את העמודה האחרונה: על `{{1,2,3},{4,5,6}}` הפונקציה מחזירה 4 במקום 6.",
       "promptHtml": "הפונקציה אמורה לספור כמה תאים חיוביים יש במטריצה <code class=\"tok\" dir=\"ltr\">ROWS x COLS</code>. מצאו את השורה השגויה.",
       "explainHtml": "הלולאה הפנימית צריכה לרוץ על העמודות, <code class=\"tok\" dir=\"ltr\">j &lt; COLS</code>. עם <code class=\"tok\" dir=\"ltr\">j &lt; ROWS</code> היא מפספסת את העמודה האחרונה: על <code class=\"tok\" dir=\"ltr\">{{1,2,3},{4,5,6}}</code> הפונקציה מחזירה 4 במקום 6.",
       "linesHtml": [
        "#define ROWS 2",
        "#define COLS 3",
        "int countPositive(int a[ROWS][COLS]) {",
        "    int count = 0;",
        "    for (int i = 0; i &lt; ROWS; i++)",
        "        for (int j = 0; j &lt; ROWS; j++)",
        "            if (a[i][j] &gt; 0)",
        "                count++;",
        "    return count;",
        "}"
       ]
      },
      "recap": "i עד ROWS, j עד COLS",
      "recapHtml": "i עד ROWS, j עד COLS"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "➡️",
    "title": "סכום שורה וסכום עמודה",
    "goal": "לחשב סכום של שורה אחת או עמודה אחת, ולהשוות בין השורות בעזרת סכום ייחוס.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>לפעמים צריך רק שורה אחת או עמודה אחת, ואז לא צריך שתי לולאות: מקבעים אינדקס אחד ורק השני רץ.</p>\n<div class=\"lesson-formula\">סכום שורה i: <code>a[i][k]</code> עבור k = 0, 1, ...  &nbsp;|&nbsp; סכום עמודה j: <code>a[k][j]</code> עבור k = 0, 1, ...</div>\n<pre class=\"code-block\">int rowSum = 0, colSum = 0;\nfor (int k = 0; k &lt; N; k++) {\n    rowSum += a[i][k];   /* i קבוע, העמודה זזה */\n    colSum += a[k][j];   /* j קבוע, השורה זזה */\n}</pre>\n<div class=\"lesson-rule\">🔑 בשורה האינדקס הראשון קבוע. בעמודה האינדקס השני קבוע. זה האינדקס שזז שמכריע.</div>\n<h3>להשוות בין שורות: סכום ייחוס</h3>\n<p>כדי לבדוק \"האם לכל השורות אותו סכום\" מחשבים את הסכום של שורה 0 פעם אחת, ומשווים אליו כל שורה אחרת. אם אחת שונה מחזירים 0 מיד; אם סיימנו את כל השורות מחזירים 1.</p>\n<pre class=\"code-block\">int equalRows(int a[][N]) {\n    int ref = 0;\n    for (int j = 0; j &lt; N; j++) ref += a[0][j];\n    for (int i = 1; i &lt; N; i++) {\n        int s = 0;\n        for (int j = 0; j &lt; N; j++) s += a[i][j];\n        if (s != ref) return 0;\n    }\n    return 1;\n}</pre>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ב-<code>{{1,2,3},{4,1,1},{0,3,3}}</code> הייחוס הוא 6, שורה 1 נותנת 6, שורה 2 נותנת 6, ולכן התוצאה 1.</div>\n<div class=\"lesson-trap\">⚠️ הסכום <code>s</code> מתאפס <b>בתוך</b> הלולאה החיצונית, בכל שורה מחדש. אם מאפסים אותו מבחוץ הסכומים מצטברים משורה לשורה.</div>\n<h3>סדר גודל</h3>\n<p>הקוד נוגע בכל תא פעם אחת, ולכן הזמן הוא מספר התאים: במטריצה <code>N x N</code> זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>.</p>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nint a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint s = 0;\nfor (int k = 0; k < 3; k++)\n    s += a[k][2];\nprintf(\"%d\", s);\n```",
       "answer": 6,
       "tol": 0,
       "explain": "האינדקס השני קבוע (2), ולכן זו עמודה 2: $2+3+1=6$. שימו לב שהמטריצה אינה סימטרית: סכום שורה 2 הוא 11, ולא 6.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint s = 0;\nfor (int k = 0; k &lt; 3; k++)\n    s += a[k][2];\nprintf(\"%d\", s);</code></pre>",
       "explainHtml": "האינדקס השני קבוע (2), ולכן זו עמודה 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">2+3+1=6</annotation></semantics></math></span>. שימו לב שהמטריצה אינה סימטרית: סכום שורה 2 הוא 11, ולא 6."
      },
      "recap": "עמודה j: a[k][j], כשהשורה k זזה",
      "recapHtml": "עמודה j: a[k][j], כשהשורה k זזה"
     },
     {
      "id": "C03-Q2",
      "step": {
       "type": "fillblank",
       "code": true,
       "prompt": "הפונקציה מחזירה את סכום עמודה `j` של מטריצה `N x N`. מה צריך להיכנס במקום החסר?",
       "lines": [
        "int colSum(int a[][N], int j) {",
        "    int s = 0;",
        "    for (int k = 0; k < N; k++)",
        "        s += ___;",
        "    return s;",
        "}"
       ],
       "blankIndex": 3,
       "options": [
        {
         "id": "a",
         "value": "a[j][k]",
         "type": "text",
         "html": "a[j][k]"
        },
        {
         "id": "b",
         "value": "a[k][j]",
         "type": "text",
         "html": "a[k][j]"
        },
        {
         "id": "c",
         "value": "a[k][k]",
         "type": "text",
         "html": "a[k][k]"
        },
        {
         "id": "d",
         "value": "a[k][0]",
         "type": "text",
         "html": "a[k][0]"
        }
       ],
       "correctId": "b",
       "explain": "בעמודה `j` האינדקס השני קבוע והשורה `k` זזה: `a[k][j]`. `a[j][k]` הוא סכום **שורה** `j`. `a[k][k]` הוא האלכסון. `a[k][0]` הוא תמיד עמודה 0.",
       "promptHtml": "הפונקציה מחזירה את סכום עמודה <code class=\"tok\" dir=\"ltr\">j</code> של מטריצה <code class=\"tok\" dir=\"ltr\">N x N</code>. מה צריך להיכנס במקום החסר?",
       "explainHtml": "בעמודה <code class=\"tok\" dir=\"ltr\">j</code> האינדקס השני קבוע והשורה <code class=\"tok\" dir=\"ltr\">k</code> זזה: <code class=\"tok\" dir=\"ltr\">a[k][j]</code>. <code class=\"tok\" dir=\"ltr\">a[j][k]</code> הוא סכום <strong>שורה</strong> <code class=\"tok\" dir=\"ltr\">j</code>. <code class=\"tok\" dir=\"ltr\">a[k][k]</code> הוא האלכסון. <code class=\"tok\" dir=\"ltr\">a[k][0]</code> הוא תמיד עמודה 0.",
       "linesHtml": [
        "int colSum(int a[][N], int j) {",
        "    int s = 0;",
        "    for (int k = 0; k &lt; N; k++)",
        "        s += ___;",
        "    return s;",
        "}"
       ]
      },
      "recap": "מה שקבוע הוא האינדקס שלא זז",
      "recapHtml": "מה שקבוע הוא האינדקס שלא זז"
     },
     {
      "id": "C03-Q3",
      "question": "מה ידפיס הקוד?\n```c\nint a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint best = 0, bestSum = -1;\nfor (int i = 0; i < 3; i++) {\n    int s = 0;\n    for (int j = 0; j < 3; j++)\n        s += a[i][j];\n    if (s > bestSum) {\n        bestSum = s;\n        best = i;\n    }\n}\nprintf(\"%d\", best);\n```",
      "options": [
       {
        "id": "a",
        "value": "11",
        "type": "text",
        "html": "11"
       },
       {
        "id": "b",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "c",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "d",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "c",
      "explanation": "סכומי השורות הם 7, 9, 11, והגדול ביותר הוא בשורה **2**. הקוד מדפיס את האינדקס של השורה, לא את הסכום: 11 הוא `bestSum`. 0 הוא הערך ההתחלתי של `best`, ו-1 הוא השורה עם הסכום האמצעי 9.",
      "recap": "שומרים גם את הסכום הטוב ביותר וגם את האינדקס שלו",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{1, 4, 2}, {6, 0, 3}, {5, 5, 1}};\nint best = 0, bestSum = -1;\nfor (int i = 0; i &lt; 3; i++) {\n    int s = 0;\n    for (int j = 0; j &lt; 3; j++)\n        s += a[i][j];\n    if (s &gt; bestSum) {\n        bestSum = s;\n        best = i;\n    }\n}\nprintf(\"%d\", best);</code></pre>",
      "explanationHtml": "סכומי השורות הם 7, 9, 11, והגדול ביותר הוא בשורה <strong>2</strong>. הקוד מדפיס את האינדקס של השורה, לא את הסכום: 11 הוא <code class=\"tok\" dir=\"ltr\">bestSum</code>. 0 הוא הערך ההתחלתי של <code class=\"tok\" dir=\"ltr\">best</code>, ו-1 הוא השורה עם הסכום האמצעי 9.",
      "recapHtml": "שומרים גם את הסכום הטוב ביותר וגם את האינדקס שלו"
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הפונקציה אמורה להחזיר 1 אם לכל השורות אותו סכום, ו-0 אחרת. מצאו את השורה השגויה.",
       "lines": [
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
        "}"
       ],
       "bugIndex": 3,
       "explain": "סכום הייחוס צריך להיות סכום **שורה** 0, כלומר `a[0][j]`. השורה `a[j][0]` סוכמת את עמודה 0. על `{{1,2,3},{4,1,1},{0,3,3}}` כל השורות שוות (6), אבל עמודה 0 נותנת 5, ולכן הפונקציה השגויה מחזירה 0 במקום 1.",
       "promptHtml": "הפונקציה אמורה להחזיר 1 אם לכל השורות אותו סכום, ו-0 אחרת. מצאו את השורה השגויה.",
       "explainHtml": "סכום הייחוס צריך להיות סכום <strong>שורה</strong> 0, כלומר <code class=\"tok\" dir=\"ltr\">a[0][j]</code>. השורה <code class=\"tok\" dir=\"ltr\">a[j][0]</code> סוכמת את עמודה 0. על <code class=\"tok\" dir=\"ltr\">{{1,2,3},{4,1,1},{0,3,3}}</code> כל השורות שוות (6), אבל עמודה 0 נותנת 5, ולכן הפונקציה השגויה מחזירה 0 במקום 1.",
       "linesHtml": [
        "int equalRows(int a[][N]) {",
        "    int ref = 0;",
        "    for (int j = 0; j &lt; N; j++)",
        "        ref += a[j][0];",
        "    for (int i = 1; i &lt; N; i++) {",
        "        int s = 0;",
        "        for (int j = 0; j &lt; N; j++)",
        "            s += a[i][j];",
        "        if (s != ref)",
        "            return 0;",
        "    }",
        "    return 1;",
        "}"
       ]
      },
      "recap": "ייחוס = סכום שורה 0, כלומר a[0][j]",
      "recapHtml": "ייחוס = סכום שורה 0, כלומר a[0][j]"
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "text",
       "normalize": "complexity",
       "prompt": "מה סיבוכיות הזמן של `equalRows` על מטריצה `N x N`? (כתבו בצורה `O(...)`)",
       "accept": [
        "O(N^2)",
        "O(N*N)",
        "O(n^2)",
        "O(n*n)"
       ],
       "explain": "הפונקציה נוגעת בכל תא פעם אחת (ובשורה 0 עוד פעם): בערך $N^2$ פעולות, כלומר $O(N^2)$. זה לינארי במספר התאים, אבל ריבועי ב-$N$.",
       "promptHtml": "מה סיבוכיות הזמן של <code class=\"tok\" dir=\"ltr\">equalRows</code> על מטריצה <code class=\"tok\" dir=\"ltr\">N x N</code>? (כתבו בצורה <code class=\"tok\" dir=\"ltr\">O(...)</code>)",
       "explainHtml": "הפונקציה נוגעת בכל תא פעם אחת (ובשורה 0 עוד פעם): בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> פעולות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>. זה לינארי במספר התאים, אבל ריבועי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span>."
      },
      "recap": "מעבר על כל התאים במטריצה N x N: O(N^2)",
      "recapHtml": "מעבר על כל התאים במטריצה N x N: O(N^2)"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "↘️",
    "title": "האלכסון הראשי והמשני",
    "goal": "לגשת לאלכסון הראשי ולמשני בלולאה אחת, ולזהות לפי התנאי אם תא נמצא על אלכסון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>במטריצה ריבועית <code>N x N</code> יש שני אלכסונים:</p>\n<ul>\n<li><b>האלכסון הראשי</b> (מהפינה השמאלית-עליונה לימנית-תחתונה): התאים עם <code>i == j</code>, כלומר <code>a[0][0], a[1][1], ...</code>.</li>\n<li><b>האלכסון המשני</b> (מהפינה הימנית-עליונה לשמאלית-תחתונה): התאים עם <code>i + j == N - 1</code>. בשורה <code>i</code> זה התא <code>a[i][N-1-i]</code>.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 מספיקה לולאה אחת על <code>i</code>: האלכסון הראשי הוא <code>a[i][i]</code> והמשני הוא <code>a[i][N-1-i]</code>.</div>\n<pre class=\"code-block\">int d1 = 0, d2 = 0;\nfor (int i = 0; i &lt; N; i++) {\n    d1 += a[i][i];\n    d2 += a[i][N - 1 - i];\n}</pre>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ב-<code>N = 3</code> האלכסון המשני הוא <code>a[0][2], a[1][1], a[2][0]</code>. בכל תא הסכום <code>i + j</code> הוא 2, שהוא <code>N - 1</code>.</div>\n<div class=\"lesson-trap\">⚠️ <code>N - i</code> במקום <code>N - 1 - i</code>: בשורה 0 זה <code>a[0][N]</code>, תא שכבר מחוץ למטריצה. תמיד מחסירים 1.</div>\n<p>במטריצה בגודל אי-זוגי שני האלכסונים נפגשים בתא האמצעי, והוא נספר בכל אחד מהם.</p>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nint e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i < 4; i++)\n    s += e[i][i];\nprintf(\"%d\", s);\n```",
       "answer": 20,
       "tol": 0,
       "explain": "האלכסון הראשי הוא `e[0][0], e[1][1], e[2][2], e[3][3]`, כלומר $2+4+9+5=20$.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i &lt; 4; i++)\n    s += e[i][i];\nprintf(\"%d\", s);</code></pre>",
       "explainHtml": "האלכסון הראשי הוא <code class=\"tok\" dir=\"ltr\">e[0][0], e[1][1], e[2][2], e[3][3]</code>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>9</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">2+4+9+5=20</annotation></semantics></math></span>."
      },
      "recap": "אלכסון ראשי: a[i][i]",
      "recapHtml": "אלכסון ראשי: a[i][i]"
     },
     {
      "id": "C04-Q2",
      "step": {
       "type": "numeric",
       "prompt": "באותה מטריצה:\n```c\nint e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i < 4; i++)\n    s += e[i][3 - i];\nprintf(\"%d\", s);\n```\nמה יודפס?",
       "answer": 12,
       "tol": 0,
       "explain": "האלכסון המשני הוא `e[0][3], e[1][2], e[2][1], e[3][0]`, כלומר $1+1+2+8=12$.",
       "promptHtml": "באותה מטריצה:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int e[4][4] = {{2, 0, 5, 1}, {3, 4, 1, 7}, {6, 2, 9, 0}, {8, 1, 3, 5}};\nint s = 0;\nfor (int i = 0; i &lt; 4; i++)\n    s += e[i][3 - i];\nprintf(\"%d\", s);</code></pre>מה יודפס?",
       "explainHtml": "האלכסון המשני הוא <code class=\"tok\" dir=\"ltr\">e[0][3], e[1][2], e[2][1], e[3][0]</code>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">1+1+2+8=12</annotation></semantics></math></span>."
      },
      "recap": "אלכסון משני: a[i][N-1-i]",
      "recapHtml": "אלכסון משני: a[i][N-1-i]"
     },
     {
      "id": "C04-Q3",
      "question": "בלולאה אחת שבה `i` רץ מ-0 עד `N-1`, איזה ביטוי ניגש לתא של **האלכסון המשני** בשורה `i` ?",
      "options": [
       {
        "id": "a",
        "value": "`a[i][N-i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a[i][N-i]</code>"
       },
       {
        "id": "b",
        "value": "`a[i][N-1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a[i][N-1]</code>"
       },
       {
        "id": "c",
        "value": "`a[N-1-i][N-1-i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a[N-1-i][N-1-i]</code>"
       },
       {
        "id": "d",
        "value": "`a[i][N-1-i]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a[i][N-1-i]</code>"
       }
      ],
      "correctId": "d",
      "explanation": "בשורה `i` העמודה של האלכסון המשני היא `N-1-i`, כך ש-`i + j = N-1`. `a[i][N-i]` חורג מהמטריצה כבר ב-`i = 0`. `a[i][N-1]` הוא העמודה האחרונה, לא אלכסון. `a[N-1-i][N-1-i]` רץ על האלכסון הראשי (בסדר הפוך).",
      "recap": "j = N-1-i",
      "questionHtml": "בלולאה אחת שבה <code class=\"tok\" dir=\"ltr\">i</code> רץ מ-0 עד <code class=\"tok\" dir=\"ltr\">N-1</code>, איזה ביטוי ניגש לתא של <strong>האלכסון המשני</strong> בשורה <code class=\"tok\" dir=\"ltr\">i</code> ?",
      "explanationHtml": "בשורה <code class=\"tok\" dir=\"ltr\">i</code> העמודה של האלכסון המשני היא <code class=\"tok\" dir=\"ltr\">N-1-i</code>, כך ש-<code class=\"tok\" dir=\"ltr\">i + j = N-1</code>. <code class=\"tok\" dir=\"ltr\">a[i][N-i]</code> חורג מהמטריצה כבר ב-<code class=\"tok\" dir=\"ltr\">i = 0</code>. <code class=\"tok\" dir=\"ltr\">a[i][N-1]</code> הוא העמודה האחרונה, לא אלכסון. <code class=\"tok\" dir=\"ltr\">a[N-1-i][N-1-i]</code> רץ על האלכסון הראשי (בסדר הפוך).",
      "recapHtml": "j = N-1-i"
     },
     {
      "id": "C04-Q4",
      "question": "איזה תנאי נכון לתא `(i, j)` שנמצא על **האלכסון המשני** של מטריצה `N x N` ?",
      "options": [
       {
        "id": "a",
        "value": "`i + j == N`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">i + j == N</code>"
       },
       {
        "id": "b",
        "value": "`i - j == N - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">i - j == N - 1</code>"
       },
       {
        "id": "c",
        "value": "`i * j == N - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">i * j == N - 1</code>"
       },
       {
        "id": "d",
        "value": "`i + j == N - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">i + j == N - 1</code>"
       }
      ],
      "correctId": "d",
      "explanation": "בכל תא של האלכסון המשני סכום האינדקסים קבוע, `N-1`: `(0, N-1)`, `(1, N-2)`, ... `i + j == N` הוא אלכסון שמוסט באחד, ובמטריצה 3x3 הוא תופס את `(1, 2)` ו-`(2, 1)` במקום את האלכסון המשני. `i - j == N - 1` מתקיים רק בפינה השמאלית-תחתונה. `i * j == N - 1` תופס תאים שגויים, למשל ב-`N = 4` את `(1, 3)` ו-`(3, 1)`.",
      "recap": "אלכסון משני: i + j == N - 1",
      "questionHtml": "איזה תנאי נכון לתא <code class=\"tok\" dir=\"ltr\">(i, j)</code> שנמצא על <strong>האלכסון המשני</strong> של מטריצה <code class=\"tok\" dir=\"ltr\">N x N</code> ?",
      "explanationHtml": "בכל תא של האלכסון המשני סכום האינדקסים קבוע, <code class=\"tok\" dir=\"ltr\">N-1</code>: <code class=\"tok\" dir=\"ltr\">(0, N-1)</code>, <code class=\"tok\" dir=\"ltr\">(1, N-2)</code>, ... <code class=\"tok\" dir=\"ltr\">i + j == N</code> הוא אלכסון שמוסט באחד, ובמטריצה 3x3 הוא תופס את <code class=\"tok\" dir=\"ltr\">(1, 2)</code> ו-<code class=\"tok\" dir=\"ltr\">(2, 1)</code> במקום את האלכסון המשני. <code class=\"tok\" dir=\"ltr\">i - j == N - 1</code> מתקיים רק בפינה השמאלית-תחתונה. <code class=\"tok\" dir=\"ltr\">i * j == N - 1</code> תופס תאים שגויים, למשל ב-<code class=\"tok\" dir=\"ltr\">N = 4</code> את <code class=\"tok\" dir=\"ltr\">(1, 3)</code> ו-<code class=\"tok\" dir=\"ltr\">(3, 1)</code>.",
      "recapHtml": "אלכסון משני: i + j == N - 1"
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "fillblank",
       "code": true,
       "prompt": "הפונקציה בודקת אם סכום האלכסון הראשי שווה לסכום המשני. מה צריך להיכנס במקום החסר?",
       "lines": [
        "int sameDiagonals(int a[][N]) {",
        "    int d1 = 0, d2 = 0;",
        "    for (int i = 0; i < N; i++) {",
        "        d1 += a[i][i];",
        "        d2 += a[i][___];",
        "    }",
        "    return d1 == d2;",
        "}"
       ],
       "blankIndex": 4,
       "options": [
        {
         "id": "a",
         "value": "N - i",
         "type": "text",
         "html": "N - i"
        },
        {
         "id": "b",
         "value": "N - 1",
         "type": "text",
         "html": "N - 1"
        },
        {
         "id": "c",
         "value": "i",
         "type": "text",
         "html": "i"
        },
        {
         "id": "d",
         "value": "N - 1 - i",
         "type": "text",
         "html": "N - 1 - i"
        }
       ],
       "correctId": "d",
       "explain": "העמודה של האלכסון המשני בשורה `i` היא `N - 1 - i`. עם `N - i` יש חריגה מהמטריצה בשורה 0. עם `N - 1` מקבלים את העמודה האחרונה. עם `i` שני הסכומים תמיד שווים, והפונקציה מחזירה 1 גם כשהאלכסונים שונים.",
       "promptHtml": "הפונקציה בודקת אם סכום האלכסון הראשי שווה לסכום המשני. מה צריך להיכנס במקום החסר?",
       "explainHtml": "העמודה של האלכסון המשני בשורה <code class=\"tok\" dir=\"ltr\">i</code> היא <code class=\"tok\" dir=\"ltr\">N - 1 - i</code>. עם <code class=\"tok\" dir=\"ltr\">N - i</code> יש חריגה מהמטריצה בשורה 0. עם <code class=\"tok\" dir=\"ltr\">N - 1</code> מקבלים את העמודה האחרונה. עם <code class=\"tok\" dir=\"ltr\">i</code> שני הסכומים תמיד שווים, והפונקציה מחזירה 1 גם כשהאלכסונים שונים.",
       "linesHtml": [
        "int sameDiagonals(int a[][N]) {",
        "    int d1 = 0, d2 = 0;",
        "    for (int i = 0; i &lt; N; i++) {",
        "        d1 += a[i][i];",
        "        d2 += a[i][___];",
        "    }",
        "    return d1 == d2;",
        "}"
       ]
      },
      "recap": "אלכסון משני: a[i][N-1-i]",
      "recapHtml": "אלכסון משני: a[i][N-1-i]"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "📤",
    "title": "מטריצה כפרמטר לפונקציה",
    "goal": "לכתוב חתימה נכונה לפונקציה שמקבלת מטריצה, להבין למה חייבים לציין את מספר העמודות, ולזכור שהפונקציה משנה את המטריצה המקורית.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כשמעבירים מטריצה לפונקציה כותבים את מספר העמודות בחתימה, ואת מספר השורות מעבירים כפרמטר נפרד:</p>\n<pre class=\"code-block\">int sumAll(int m[][7], int rows);   /* מטריצה עם 7 עמודות */\n...\nint g[5][7];\nsumAll(g, 5);</pre>\n<div class=\"lesson-rule\">🔑 את מספר השורות אפשר להשמיט מהחתימה, את מספר העמודות <b>אי אפשר</b>. חתימות כמו <code>int m[][]</code> או <code>int m[5][]</code> לא מתקמפלות.</div>\n<h3>למה חייבים את מספר העמודות</h3>\n<p>המטריצה שמורה שורה אחרי שורה כרצף אחד. כדי למצוא את <code>m[i][j]</code> המחשב מדלג על <code>i</code> שורות שלמות ואז <code>j</code> תאים: המקום ברצף הוא <code>i * COLS + j</code>. בלי <code>COLS</code> אי אפשר לדעת כמה תאים בשורה.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ב-<code>int a[4][5]</code> התא <code>a[2][3]</code> נמצא במקום <code>2 * 5 + 3 = 13</code> ברצף.</div>\n<div class=\"lesson-trap\">⚠️ אם כותבים בחתימה מספר עמודות שונה ממה שבהצהרה, הקוד מתקמפל (לכל היותר עם אזהרה) אבל מחשב כתובות לא נכונות וקורא את התאים הלא נכונים.</div>\n<h3>הפונקציה משנה את המקור</h3>\n<p>מערכים לא מועתקים בהעברה לפונקציה: הפונקציה מקבלת את המטריצה עצמה. לכן כל <code>m[i][j] = ...</code> בתוך הפונקציה משנה את המטריצה של הקורא.</p>\n<h3>מטריצה שאינה ריבועית</h3>\n<p>כשמספר השורות שונה ממספר העמודות חשוב לשמור על ההתאמה: <code>i</code> עד מספר השורות ו-<code>j</code> עד מספר העמודות. אם רוצים סכום לכל עמודה שומרים בתוצאה מערך באורך מספר העמודות ומוסיפים <code>out[j] += a[i][j]</code>.</p>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "מעבירים לפונקציה את המטריצה `int g[5][7];` בקריאה `f(g, 5)`, והפונקציה ניגשת אל `m[1][2]`. איזו חתימה נכונה?",
      "options": [
       {
        "id": "a",
        "value": "`void f(int m[5][], int cols)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">void f(int m[5][], int cols)</code>"
       },
       {
        "id": "b",
        "value": "`void f(int m[][], int rows, int cols)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">void f(int m[][], int rows, int cols)</code>"
       },
       {
        "id": "c",
        "value": "`void f(int m[], int rows, int cols)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">void f(int m[], int rows, int cols)</code>"
       },
       {
        "id": "d",
        "value": "`void f(int m[][7], int rows)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">void f(int m[][7], int rows)</code>"
       }
      ],
      "correctId": "d",
      "explanation": "חייבים לציין את מספר העמודות (7) ואפשר להשמיט את מספר השורות: `int m[][7]`. שלוש האחרות לא מתקמפלות: `m[5][]` ו-`m[][]` חסרות את מספר העמודות, ו-`int m[]` היא מערך חד-ממדי ולכן `m[1][2]` לא חוקי עליה.",
      "recap": "int m[][COLS], int rows",
      "questionHtml": "מעבירים לפונקציה את המטריצה <code class=\"tok\" dir=\"ltr\">int g[5][7];</code> בקריאה <code class=\"tok\" dir=\"ltr\">f(g, 5)</code>, והפונקציה ניגשת אל <code class=\"tok\" dir=\"ltr\">m[1][2]</code>. איזו חתימה נכונה?",
      "explanationHtml": "חייבים לציין את מספר העמודות (7) ואפשר להשמיט את מספר השורות: <code class=\"tok\" dir=\"ltr\">int m[][7]</code>. שלוש האחרות לא מתקמפלות: <code class=\"tok\" dir=\"ltr\">m[5][]</code> ו-<code class=\"tok\" dir=\"ltr\">m[][]</code> חסרות את מספר העמודות, ו-<code class=\"tok\" dir=\"ltr\">int m[]</code> היא מערך חד-ממדי ולכן <code class=\"tok\" dir=\"ltr\">m[1][2]</code> לא חוקי עליה.",
      "recapHtml": "int m[][COLS], int rows"
     },
     {
      "id": "C05-Q2",
      "step": {
       "type": "numeric",
       "prompt": "במטריצה `int a[4][5]`, באיזה מקום (מ-0) ברצף הזיכרון נמצא התא `a[2][3]` ?",
       "answer": 13,
       "tol": 0,
       "explain": "מדלגים על 2 שורות שלמות של 5 תאים (10 תאים) ועוד 3 תאים בשורה: $2\\cdot 5+3=13$.",
       "promptHtml": "במטריצה <code class=\"tok\" dir=\"ltr\">int a[4][5]</code>, באיזה מקום (מ-0) ברצף הזיכרון נמצא התא <code class=\"tok\" dir=\"ltr\">a[2][3]</code> ?",
       "explainHtml": "מדלגים על 2 שורות שלמות של 5 תאים (10 תאים) ועוד 3 תאים בשורה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>5</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>13</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot 5+3=13</annotation></semantics></math></span>."
      },
      "recap": "מקום ברצף = i * COLS + j",
      "recapHtml": "מקום ברצף = i * COLS + j"
     },
     {
      "id": "C05-Q3",
      "question": "מה ידפיס הקוד?\n```c\nvoid clearDiag(int m[][3], int rows) {\n    for (int i = 0; i < rows; i++)\n        m[i][i] = 0;\n}\n\nint main() {\n    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    clearDiag(a, 3);\n    int s = 0;\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 3; j++)\n            s += a[i][j];\n    printf(\"%d\", s);\n    return 0;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "45",
        "type": "text",
        "html": "45"
       },
       {
        "id": "b",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "c",
        "value": "15",
        "type": "text",
        "html": "15"
       },
       {
        "id": "d",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "b",
      "explanation": "הפונקציה מקבלת את המטריצה המקורית ומאפסת את האלכסון הראשי (1, 5, 9). הסכום הכולל היה 45, אחרי האיפוס הוא $45-15=$ **30**. 45 היה הפלט אילו הפונקציה עבדה על עותק. 15 הוא סכום האלכסון שנמחק. 0 היה אילו כל המטריצה מתאפסת.",
      "recap": "פונקציה משנה את המטריצה של הקורא, לא עותק",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void clearDiag(int m[][3], int rows) {\n    for (int i = 0; i &lt; rows; i++)\n        m[i][i] = 0;\n}\n\nint main() {\n    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    clearDiag(a, 3);\n    int s = 0;\n    for (int i = 0; i &lt; 3; i++)\n        for (int j = 0; j &lt; 3; j++)\n            s += a[i][j];\n    printf(\"%d\", s);\n    return 0;\n}</code></pre>",
      "explanationHtml": "הפונקציה מקבלת את המטריצה המקורית ומאפסת את האלכסון הראשי (1, 5, 9). הסכום הכולל היה 45, אחרי האיפוס הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>45</mn><mo>−</mo><mn>15</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">45-15=</annotation></semantics></math></span> <strong>30</strong>. 45 היה הפלט אילו הפונקציה עבדה על עותק. 15 הוא סכום האלכסון שנמחק. 0 היה אילו כל המטריצה מתאפסת.",
      "recapHtml": "פונקציה משנה את המטריצה של הקורא, לא עותק"
     },
     {
      "id": "C05-Q4",
      "step": {
       "type": "fillblank",
       "code": true,
       "prompt": "המטריצה מוצהרת `int g[4][6];` והפונקציה נקראת כך: `countPositive(g, 4)`. מה צריך להיכנס בחתימה במקום החסר?",
       "lines": [
        "int countPositive(int m[][___], int rows) {",
        "    int c = 0;",
        "    for (int i = 0; i < rows; i++)",
        "        for (int j = 0; j < 6; j++)",
        "            if (m[i][j] > 0)",
        "                c++;",
        "    return c;",
        "}"
       ],
       "blankIndex": 0,
       "options": [
        {
         "id": "a",
         "value": "4",
         "type": "text",
         "html": "4"
        },
        {
         "id": "b",
         "value": "6",
         "type": "text",
         "html": "6"
        },
        {
         "id": "c",
         "value": "5",
         "type": "text",
         "html": "5"
        },
        {
         "id": "d",
         "value": "3",
         "type": "text",
         "html": "3"
        }
       ],
       "correctId": "b",
       "explain": "מספר העמודות בחתימה חייב להיות זהה לזה שבהצהרה, 6. כל מספר אחר גורם לחישוב מקום שגוי `i * COLS + j`, והפונקציה סופרת תאים לא נכונים: על מטריצה שבה התוצאה הנכונה שונה, כל אחד מהערכים 4, 5 ו-3 מחזיר מספר אחר.",
       "promptHtml": "המטריצה מוצהרת <code class=\"tok\" dir=\"ltr\">int g[4][6];</code> והפונקציה נקראת כך: <code class=\"tok\" dir=\"ltr\">countPositive(g, 4)</code>. מה צריך להיכנס בחתימה במקום החסר?",
       "explainHtml": "מספר העמודות בחתימה חייב להיות זהה לזה שבהצהרה, 6. כל מספר אחר גורם לחישוב מקום שגוי <code class=\"tok\" dir=\"ltr\">i * COLS + j</code>, והפונקציה סופרת תאים לא נכונים: על מטריצה שבה התוצאה הנכונה שונה, כל אחד מהערכים 4, 5 ו-3 מחזיר מספר אחר.",
       "linesHtml": [
        "int countPositive(int m[][___], int rows) {",
        "    int c = 0;",
        "    for (int i = 0; i &lt; rows; i++)",
        "        for (int j = 0; j &lt; 6; j++)",
        "            if (m[i][j] &gt; 0)",
        "                c++;",
        "    return c;",
        "}"
       ]
      },
      "recap": "COLS בחתימה = COLS בהצהרה",
      "recapHtml": "COLS בחתימה = COLS בהצהרה"
     },
     {
      "id": "C05-Q5",
      "question": "מה ידפיס הקוד?\n```c\nint a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nint out[3] = {0, 0, 0};\nfor (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        out[j] += a[i][j];\nprintf(\"%d %d %d\", out[0], out[1], out[2]);\n```",
      "options": [
       {
        "id": "a",
        "value": "6 15 0",
        "type": "text",
        "html": "6 15 0"
       },
       {
        "id": "b",
        "value": "4 5 6",
        "type": "text",
        "html": "4 5 6"
       },
       {
        "id": "c",
        "value": "5 7 9",
        "type": "text",
        "html": "5 7 9"
       },
       {
        "id": "d",
        "value": "21 0 0",
        "type": "text",
        "html": "21 0 0"
       }
      ],
      "correctId": "c",
      "explanation": "`out[j]` צובר את סכום עמודה `j`: $1+4=5$, $2+5=7$, $3+6=9$, ולכן **5 7 9**. 6 15 0 היה הפלט אילו כתבו `out[i] += a[i][j]` (סכומי שורות). 4 5 6 היה הפלט עם `=` במקום `+=` (נשאר רק הערך של השורה האחרונה). 21 0 0 היה הפלט אילו כל התאים נצברו ב-`out[0]`.",
      "recap": "out[j] += a[i][j] צובר סכומי עמודות",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[2][3] = {{1, 2, 3}, {4, 5, 6}};\nint out[3] = {0, 0, 0};\nfor (int i = 0; i &lt; 2; i++)\n    for (int j = 0; j &lt; 3; j++)\n        out[j] += a[i][j];\nprintf(\"%d %d %d\", out[0], out[1], out[2]);</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">out[j]</code> צובר את סכום עמודה <code class=\"tok\" dir=\"ltr\">j</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">1+4=5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+5=7</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">3+6=9</annotation></semantics></math></span>, ולכן <strong>5 7 9</strong>. 6 15 0 היה הפלט אילו כתבו <code class=\"tok\" dir=\"ltr\">out[i] += a[i][j]</code> (סכומי שורות). 4 5 6 היה הפלט עם <code class=\"tok\" dir=\"ltr\">=</code> במקום <code class=\"tok\" dir=\"ltr\">+=</code> (נשאר רק הערך של השורה האחרונה). 21 0 0 היה הפלט אילו כל התאים נצברו ב-<code class=\"tok\" dir=\"ltr\">out[0]</code>.",
      "recapHtml": "out[j] += a[i][j] צובר סכומי עמודות"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🧭",
    "title": "שכנים וגבולות",
    "goal": "לבדוק תא וגם את שכניו בלי לחרוג מהמטריצה, ולעבור על חלונות 3x3.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>הרבה שאלות משוות תא לשכניו: מימין <code>(i, j+1)</code>, מלמטה <code>(i+1, j)</code>, באלכסון <code>(i+1, j+1)</code> וכן הלאה. בקצה המטריצה השכן לא קיים, ואם ניגשים אליו חורגים מהגבולות.</p>\n<div class=\"lesson-rule\">🔑 קודם בודקים שהשכן קיים, ורק אחר כך קוראים אותו: <code>if (j + 1 &lt; N &amp;&amp; a[i][j] == a[i][j+1])</code>. האופרטור <code>&amp;&amp;</code> מפסיק ברגע שהצד השמאלי שקרי, ולכן הצד הימני לא מתבצע בקצה.</div>\n<div class=\"lesson-trap\">⚠️ אם מחליפים את סדר שני הצדדים (קודם <code>a[i][j+1]</code> ואחר כך <code>j + 1 &lt; N</code>), הקריאה מחוץ למטריצה כבר התבצעה לפני הבדיקה.</div>\n<p>דוגמה: ספירת זוגות סמוכים ושווים בשורה. הלולאה על <code>j</code> רצה עד <code>N - 2</code> (או שבודקים <code>j + 1 &lt; N</code>), כי לתא האחרון בשורה אין שכן מימין. באותו אופן, השוואה לשורה שמתחת דורשת ש-<code>i</code> ירוץ עד <code>N - 2</code>.</p>\n<h3>כל שמונת השכנים</h3>\n<pre class=\"code-block\">for (int di = -1; di &lt;= 1; di++)\n    for (int dj = -1; dj &lt;= 1; dj++)\n        if (di != 0 || dj != 0)\n            s += a[i + di][j + dj];</pre>\n<p>התנאי מדלג על התא עצמו. בתא בקצה צריך להוסיף בדיקה ש-<code>i + di</code> ו-<code>j + dj</code> בתוך המטריצה.</p>\n<h3>חלונות 3x3</h3>\n<p>חלון 3x3 מזוהה לפי הפינה השמאלית-עליונה <code>(r, c)</code>. הוא נכנס במטריצה רק אם <code>r + 2 &lt; R</code> ו-<code>c + 2 &lt; C</code>. לכן במטריצה <code>R x C</code> יש <code>(R-2) * (C-2)</code> חלונות. דוגמה: במטריצה 6x5 יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot 3 = 12</annotation></semantics></math></span> חלונות.</p>\n<p>כדי לבדוק מה יש בחלון משתמשים במערך ספירה: <code>int count[10] = {0};</code> ואז לכל תא <code>count[a[i][j]]++</code> (בהנחה שהערכים 0 עד 9). אחרי הלולאה <code>count[v]</code> הוא כמה פעמים הערך <code>v</code> מופיע.</p>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "step": {
       "type": "numeric",
       "prompt": "כמה חלונות בגודל 3x3 נכנסים כולם בתוך מטריצה בגודל 6 שורות על 5 עמודות?",
       "answer": 12,
       "tol": 0,
       "explain": "הפינה העליונה-שמאלית `(r, c)` של חלון יכולה להיות עם `r` מ-0 עד 3 (4 אפשרויות) ו-`c` מ-0 עד 2 (3 אפשרויות): $4\\cdot 3=12$.",
       "promptHtml": "כמה חלונות בגודל 3x3 נכנסים כולם בתוך מטריצה בגודל 6 שורות על 5 עמודות?",
       "explainHtml": "הפינה העליונה-שמאלית <code class=\"tok\" dir=\"ltr\">(r, c)</code> של חלון יכולה להיות עם <code class=\"tok\" dir=\"ltr\">r</code> מ-0 עד 3 (4 אפשרויות) ו-<code class=\"tok\" dir=\"ltr\">c</code> מ-0 עד 2 (3 אפשרויות): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot 3=12</annotation></semantics></math></span>."
      },
      "recap": "חלונות 3x3: (R-2) * (C-2)",
      "recapHtml": "חלונות 3x3: (R-2) * (C-2)"
     },
     {
      "id": "C06-Q2",
      "question": "איזה תנאי בודק בבטחה אם התא `a[i][j]` שווה לשכן מימין, במטריצה `a[N][N]`?",
      "options": [
       {
        "id": "a",
        "value": "`a[i][j] == a[i][j + 1] && j + 1 < N`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">a[i][j] == a[i][j + 1] &amp;&amp; j + 1 &lt; N</code>"
       },
       {
        "id": "b",
        "value": "`j < N && a[i][j] == a[i][j + 1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j &lt; N &amp;&amp; a[i][j] == a[i][j + 1]</code>"
       },
       {
        "id": "c",
        "value": "`j + 1 < N && a[i][j] == a[i][j + 1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j + 1 &lt; N &amp;&amp; a[i][j] == a[i][j + 1]</code>"
       },
       {
        "id": "d",
        "value": "`j + 1 <= N && a[i][j] == a[i][j + 1]`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j + 1 &lt;= N &amp;&amp; a[i][j] == a[i][j + 1]</code>"
       }
      ],
      "correctId": "c",
      "explanation": "בודקים קודם שהעמודה `j+1` קיימת (`j + 1 < N`) ורק אחר כך קוראים אותה. באפשרות הראשונה הקריאה קורית לפני הבדיקה. ב-`j < N` הבדיקה תמיד נכונה, ולכן בעמודה האחרונה קוראים את `a[i][N]`. ב-`j + 1 <= N` בעמודה האחרונה גם כן מתקיים `j + 1 == N` וקוראים מחוץ למטריצה. שלוש האפשרויות האלה קורסות בהרצה עם בדיקת גבולות.",
      "recap": "קודם בודקים שהשכן קיים, אחר כך קוראים אותו",
      "questionHtml": "איזה תנאי בודק בבטחה אם התא <code class=\"tok\" dir=\"ltr\">a[i][j]</code> שווה לשכן מימין, במטריצה <code class=\"tok\" dir=\"ltr\">a[N][N]</code>?",
      "explanationHtml": "בודקים קודם שהעמודה <code class=\"tok\" dir=\"ltr\">j+1</code> קיימת (<code class=\"tok\" dir=\"ltr\">j + 1 &lt; N</code>) ורק אחר כך קוראים אותה. באפשרות הראשונה הקריאה קורית לפני הבדיקה. ב-<code class=\"tok\" dir=\"ltr\">j &lt; N</code> הבדיקה תמיד נכונה, ולכן בעמודה האחרונה קוראים את <code class=\"tok\" dir=\"ltr\">a[i][N]</code>. ב-<code class=\"tok\" dir=\"ltr\">j + 1 &lt;= N</code> בעמודה האחרונה גם כן מתקיים <code class=\"tok\" dir=\"ltr\">j + 1 == N</code> וקוראים מחוץ למטריצה. שלוש האפשרויות האלה קורסות בהרצה עם בדיקת גבולות.",
      "recapHtml": "קודם בודקים שהשכן קיים, אחר כך קוראים אותו"
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\nint a[3][3] = {{1, 1, 2}, {3, 3, 3}, {2, 1, 1}};\nint count = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 2; j++)\n        if (a[i][j] == a[i][j + 1])\n            count++;\nprintf(\"%d\", count);\n```",
       "answer": 4,
       "tol": 0,
       "explain": "בשורה 0 הזוג `1,1` שווה (1). בשורה 1 שני הזוגות `3,3` ו-`3,3` שווים (2). בשורה 2 הזוג `1,1` שווה (1). בסך הכול 4. הלולאה על `j` נעצרת ב-1 כדי ש-`j + 1` יישאר בתוך השורה.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{1, 1, 2}, {3, 3, 3}, {2, 1, 1}};\nint count = 0;\nfor (int i = 0; i &lt; 3; i++)\n    for (int j = 0; j &lt; 2; j++)\n        if (a[i][j] == a[i][j + 1])\n            count++;\nprintf(\"%d\", count);</code></pre>",
       "explainHtml": "בשורה 0 הזוג <code class=\"tok\" dir=\"ltr\">1,1</code> שווה (1). בשורה 1 שני הזוגות <code class=\"tok\" dir=\"ltr\">3,3</code> ו-<code class=\"tok\" dir=\"ltr\">3,3</code> שווים (2). בשורה 2 הזוג <code class=\"tok\" dir=\"ltr\">1,1</code> שווה (1). בסך הכול 4. הלולאה על <code class=\"tok\" dir=\"ltr\">j</code> נעצרת ב-1 כדי ש-<code class=\"tok\" dir=\"ltr\">j + 1</code> יישאר בתוך השורה."
      },
      "recap": "זוגות סמוכים בשורה: j רץ עד N-2",
      "recapHtml": "זוגות סמוכים בשורה: j רץ עד N-2"
     },
     {
      "id": "C06-Q4",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הפונקציה סופרת כמה תאים שווים לתא שמתחתם. מצאו את השורה השגויה.",
       "lines": [
        "#define N 3",
        "int equalBelow(int a[N][N]) {",
        "    int cnt = 0;",
        "    for (int i = 0; i < N; i++)",
        "        for (int j = 0; j < N; j++)",
        "            if (a[i][j] == a[i + 1][j])",
        "                cnt++;",
        "    return cnt;",
        "}"
       ],
       "bugIndex": 3,
       "explain": "בשורה האחרונה אין שורה מתחת, ו-`a[i + 1][j]` קורא מחוץ למטריצה. הלולאה על `i` צריכה לרוץ עד `N - 2`, כלומר `i < N - 1`.",
       "promptHtml": "הפונקציה סופרת כמה תאים שווים לתא שמתחתם. מצאו את השורה השגויה.",
       "explainHtml": "בשורה האחרונה אין שורה מתחת, ו-<code class=\"tok\" dir=\"ltr\">a[i + 1][j]</code> קורא מחוץ למטריצה. הלולאה על <code class=\"tok\" dir=\"ltr\">i</code> צריכה לרוץ עד <code class=\"tok\" dir=\"ltr\">N - 2</code>, כלומר <code class=\"tok\" dir=\"ltr\">i &lt; N - 1</code>.",
       "linesHtml": [
        "#define N 3",
        "int equalBelow(int a[N][N]) {",
        "    int cnt = 0;",
        "    for (int i = 0; i &lt; N; i++)",
        "        for (int j = 0; j &lt; N; j++)",
        "            if (a[i][j] == a[i + 1][j])",
        "                cnt++;",
        "    return cnt;",
        "}"
       ]
      },
      "recap": "שכן מלמטה: i רץ עד N-2",
      "recapHtml": "שכן מלמטה: i רץ עד N-2"
     },
     {
      "id": "C06-Q5",
      "question": "מה ידפיס הקוד, שמחשב את סכום **שמונת השכנים** של התא האמצעי?\n```c\nint a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint s = 0;\nfor (int di = -1; di <= 1; di++)\n    for (int dj = -1; dj <= 1; dj++)\n        if (di != 0 || dj != 0)\n            s += a[1 + di][1 + dj];\nprintf(\"%d\", s);\n```",
      "options": [
       {
        "id": "a",
        "value": "45",
        "type": "text",
        "html": "45"
       },
       {
        "id": "b",
        "value": "40",
        "type": "text",
        "html": "40"
       },
       {
        "id": "c",
        "value": "25",
        "type": "text",
        "html": "25"
       },
       {
        "id": "d",
        "value": "23",
        "type": "text",
        "html": "23"
       }
      ],
      "correctId": "b",
      "explanation": "הלולאות עוברות על כל תשעת התאים וה-`if` מדלג על התא האמצעי (5): $45-5=$ **40**. 45 היה הפלט בלי ה-`if`. 25 היה הפלט עם התנאי `di == 0 || dj == 0`, שסוכם רק את הצלב ואת התא עצמו (2+4+5+6+8). 23 היה הפלט אילו `di` ו-`dj` רצים רק מ-0 עד 1.",
      "recap": "שמונה שכנים: di ו-dj רצים על -1, 0, 1, בלי הזוג (0,0)",
      "questionHtml": "מה ידפיס הקוד, שמחשב את סכום <strong>שמונת השכנים</strong> של התא האמצעי?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint s = 0;\nfor (int di = -1; di &lt;= 1; di++)\n    for (int dj = -1; dj &lt;= 1; dj++)\n        if (di != 0 || dj != 0)\n            s += a[1 + di][1 + dj];\nprintf(\"%d\", s);</code></pre>",
      "explanationHtml": "הלולאות עוברות על כל תשעת התאים וה-<code class=\"tok\" dir=\"ltr\">if</code> מדלג על התא האמצעי (5): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>45</mn><mo>−</mo><mn>5</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">45-5=</annotation></semantics></math></span> <strong>40</strong>. 45 היה הפלט בלי ה-<code class=\"tok\" dir=\"ltr\">if</code>. 25 היה הפלט עם התנאי <code class=\"tok\" dir=\"ltr\">di == 0 || dj == 0</code>, שסוכם רק את הצלב ואת התא עצמו (2+4+5+6+8). 23 היה הפלט אילו <code class=\"tok\" dir=\"ltr\">di</code> ו-<code class=\"tok\" dir=\"ltr\">dj</code> רצים רק מ-0 עד 1.",
      "recapHtml": "שמונה שכנים: di ו-dj רצים על -1, 0, 1, בלי הזוג (0,0)"
     },
     {
      "id": "C06-Q6",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד? (הערכים הם 0 עד 9)\n```c\nint a[3][3] = {{9, 1, 9}, {2, 9, 3}, {4, 5, 6}};\nint count[10] = {0};\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 3; j++)\n        count[a[i][j]]++;\nprintf(\"%d\", count[9]);\n```",
       "answer": 3,
       "tol": 0,
       "explain": "`count[v]` סופר כמה פעמים הערך `v` מופיע בחלון. הערך 9 מופיע שלוש פעמים: `a[0][0]`, `a[0][2]` ו-`a[1][1]`.",
       "promptHtml": "מה ידפיס הקוד? (הערכים הם 0 עד 9)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{9, 1, 9}, {2, 9, 3}, {4, 5, 6}};\nint count[10] = {0};\nfor (int i = 0; i &lt; 3; i++)\n    for (int j = 0; j &lt; 3; j++)\n        count[a[i][j]]++;\nprintf(\"%d\", count[9]);</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">count[v]</code> סופר כמה פעמים הערך <code class=\"tok\" dir=\"ltr\">v</code> מופיע בחלון. הערך 9 מופיע שלוש פעמים: <code class=\"tok\" dir=\"ltr\">a[0][0]</code>, <code class=\"tok\" dir=\"ltr\">a[0][2]</code> ו-<code class=\"tok\" dir=\"ltr\">a[1][1]</code>."
      },
      "recap": "count[a[i][j]]++ סופר הופעות של כל ערך",
      "recapHtml": "count[a[i][j]]++ סופר הופעות של כל ערך"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🔄",
    "title": "הזזה, סימטריה וחיפוש",
    "goal": "להזיז ולהחליף שורות בלי לדרוס ערכים, לבדוק סימטריה בלי לספור פעמיים, ולחפש במטריצה ממוינת מהפינה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<h3>הזזה מחזורית של שורה ימינה</h3>\n<p>כל איבר זז צעד אחד ימינה, והאחרון חוזר להתחלה. הסדר חשוב: קודם שומרים את האיבר האחרון (הוא יידרס), אחר כך מזיזים מהסוף להתחלה, ובסוף מחזירים אותו לתא הראשון.</p>\n<pre class=\"code-block\">int last = m[r][N - 1];\nfor (int c = N - 1; c &gt; 0; c--)\n    m[r][c] = m[r][c - 1];\nm[r][0] = last;</pre>\n<div class=\"lesson-ex\"><b>דוגמה:</b> השורה <code>1 2 3 4</code> הופכת ל-<code>4 1 2 3</code>.</div>\n<div class=\"lesson-trap\">⚠️ אם מזיזים מההתחלה לסוף (<code>c</code> עולה) כל איבר דורס את הבא אחריו, והשורה מתמלאת בעותקים של האיבר הראשון.</div>\n<h3>החלפת שתי שורות</h3>\n<p>מחליפים איבר איבר בעזרת משתנה זמני: <code>t = m[r1][j]; m[r1][j] = m[r2][j]; m[r2][j] = t;</code> לכל <code>j</code>. בלי הזמני, העתקה אחת דורסת את הערך של השנייה.</p>\n<h3>סימטריה לפי שורות</h3>\n<p>מטריצה סימטרית לפי שורות אם שורה <code>i</code> זהה לשורה <code>N-1-i</code>. כל זוג מספיק לבדוק פעם אחת, ולכן <code>i</code> רץ רק עד <code>N/2</code> (לא עד <code>N</code>, אחרת כל זוג נבדק פעמיים וההפרות נספרות כפול):</p>\n<pre class=\"code-block\">for (int i = 0; i &lt; N / 2; i++)\n    for (int j = 0; j &lt; N; j++)\n        if (m[i][j] != m[N - 1 - i][j])\n            violations++;</pre>\n<p>סימטריה לפי עמודות היא אותו דבר עם העמודות: עמודה <code>j</code> מול עמודה <code>N-1-j</code>, כלומר <code>m[i][j]</code> מול <code>m[i][N-1-j]</code>, עם <code>j</code> עד <code>N/2</code>.</p>\n<h3>חיפוש מהפינה במטריצה ממוינת</h3>\n<p>אם כל שורה עולה משמאל לימין וכל עמודה עולה מלמעלה למטה, מתחילים מהפינה הימנית-עליונה: אם התא גדול מהמפתח זזים שמאלה (הערכים מימין אפילו גדולים יותר), אם קטן זזים למטה. בכל צעד נפסל שורה או עמודה שלמה, ולכן הזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>R</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(R+C)</annotation></semantics></math></span>.</p>\n<pre class=\"code-block\">int i = 0, j = C - 1;\nwhile (i &lt; R &amp;&amp; j &gt;= 0) {\n    if (a[i][j] == key) return 1;\n    if (a[i][j] &gt; key) j--; else i++;\n}\nreturn 0;</pre>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "מה ידפיס הקוד?\n```c\nint m[2][4] = {{9, 9, 9, 9}, {1, 2, 3, 4}};\nint r = 1;\nint last = m[r][3];\nfor (int c = 3; c > 0; c--)\n    m[r][c] = m[r][c - 1];\nm[r][0] = last;\nfor (int c = 0; c < 4; c++)\n    printf(\"%d \", m[r][c]);\n```",
      "options": [
       {
        "id": "a",
        "value": "2 3 4 1",
        "type": "text",
        "html": "2 3 4 1"
       },
       {
        "id": "b",
        "value": "4 1 1 1",
        "type": "text",
        "html": "4 1 1 1"
       },
       {
        "id": "c",
        "value": "4 1 2 3",
        "type": "text",
        "html": "4 1 2 3"
       },
       {
        "id": "d",
        "value": "1 1 2 3",
        "type": "text",
        "html": "1 1 2 3"
       }
      ],
      "correctId": "c",
      "explanation": "שומרים את 4, מזיזים כל איבר צעד ימינה (מהסוף להתחלה) ומחזירים את 4 להתחלה: **4 1 2 3**. 2 3 4 1 היא הזזה שמאלה. 4 1 1 1 היה הפלט אילו הלולאה הייתה עולה (כל איבר דורס את הבא). 1 1 2 3 היה הפלט בלי השורה האחרונה `m[r][0] = last`.",
      "recap": "שומרים את האחרון, מזיזים מהסוף להתחלה, מחזירים להתחלה",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int m[2][4] = {{9, 9, 9, 9}, {1, 2, 3, 4}};\nint r = 1;\nint last = m[r][3];\nfor (int c = 3; c &gt; 0; c--)\n    m[r][c] = m[r][c - 1];\nm[r][0] = last;\nfor (int c = 0; c &lt; 4; c++)\n    printf(\"%d \", m[r][c]);</code></pre>",
      "explanationHtml": "שומרים את 4, מזיזים כל איבר צעד ימינה (מהסוף להתחלה) ומחזירים את 4 להתחלה: <strong>4 1 2 3</strong>. 2 3 4 1 היא הזזה שמאלה. 4 1 1 1 היה הפלט אילו הלולאה הייתה עולה (כל איבר דורס את הבא). 1 1 2 3 היה הפלט בלי השורה האחרונה <code class=\"tok\" dir=\"ltr\">m[r][0] = last</code>.",
      "recapHtml": "שומרים את האחרון, מזיזים מהסוף להתחלה, מחזירים להתחלה"
     },
     {
      "id": "C07-Q2",
      "step": {
       "type": "order",
       "code": true,
       "prompt": "סדרו את הפונקציה שמזיזה את שורה `r` צעד ימינה בצורה מחזורית.",
       "lines": [
        "int last = m[r][N - 1];",
        "for (int c = N - 1; c > 0; c--)",
        "    m[r][c] = m[r][c - 1];",
        "m[r][0] = last;"
       ],
       "explain": "קודם שומרים את האיבר האחרון לפני שנדרס, אחר כך הלולאה מזיזה (שורת הכותרת לפני הגוף), ורק בסוף מכניסים את הערך השמור לתא הראשון. כל סדר אחר דורס ערך או לא מתקמפל.",
       "promptHtml": "סדרו את הפונקציה שמזיזה את שורה <code class=\"tok\" dir=\"ltr\">r</code> צעד ימינה בצורה מחזורית.",
       "explainHtml": "קודם שומרים את האיבר האחרון לפני שנדרס, אחר כך הלולאה מזיזה (שורת הכותרת לפני הגוף), ורק בסוף מכניסים את הערך השמור לתא הראשון. כל סדר אחר דורס ערך או לא מתקמפל.",
       "linesHtml": [
        "int last = m[r][N - 1];",
        "for (int c = N - 1; c &gt; 0; c--)",
        "    m[r][c] = m[r][c - 1];",
        "m[r][0] = last;"
       ]
      },
      "recap": "שמירה, הזזה, החזרה",
      "recapHtml": "שמירה, הזזה, החזרה"
     },
     {
      "id": "C07-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מה ידפיס הקוד?\n```c\n#define N 4\nint m[N][N] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {5, 6, 0, 8}, {1, 2, 3, 9}};\nint violations = 0;\nfor (int i = 0; i < N / 2; i++)\n    for (int j = 0; j < N; j++)\n        if (m[i][j] != m[N - 1 - i][j])\n            violations++;\nprintf(\"%d\", violations);\n```",
       "answer": 2,
       "tol": 0,
       "explain": "שורה 0 מושווית לשורה 3: ההבדל היחיד הוא `4` מול `9`. שורה 1 מושווית לשורה 2: ההבדל היחיד הוא `7` מול `0`. בסך הכול 2 הפרות.",
       "promptHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>#define N 4\nint m[N][N] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {5, 6, 0, 8}, {1, 2, 3, 9}};\nint violations = 0;\nfor (int i = 0; i &lt; N / 2; i++)\n    for (int j = 0; j &lt; N; j++)\n        if (m[i][j] != m[N - 1 - i][j])\n            violations++;\nprintf(\"%d\", violations);</code></pre>",
       "explainHtml": "שורה 0 מושווית לשורה 3: ההבדל היחיד הוא <code class=\"tok\" dir=\"ltr\">4</code> מול <code class=\"tok\" dir=\"ltr\">9</code>. שורה 1 מושווית לשורה 2: ההבדל היחיד הוא <code class=\"tok\" dir=\"ltr\">7</code> מול <code class=\"tok\" dir=\"ltr\">0</code>. בסך הכול 2 הפרות."
      },
      "recap": "משווים שורה i לשורה N-1-i, i עד N/2",
      "recapHtml": "משווים שורה i לשורה N-1-i, i עד N/2"
     },
     {
      "id": "C07-Q4",
      "question": "מה ידפיס הקוד?\n```c\n#define N 4\nint m[N][N] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {5, 6, 0, 8}, {1, 2, 3, 9}};\nint violations = 0;\nfor (int i = 0; i < N; i++)\n    for (int j = 0; j < N; j++)\n        if (m[i][j] != m[N - 1 - i][j])\n            violations++;\nprintf(\"%d\", violations);\n```",
      "options": [
       {
        "id": "a",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "b",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "4",
        "type": "text",
        "html": "4"
       }
      ],
      "correctId": "d",
      "explanation": "עכשיו כל זוג שורות נבדק פעמיים (שורה 0 מול 3 ושורה 3 מול 0, שורה 1 מול 2 ושורה 2 מול 1), וכל הפרה נספרת כפול: $2\\cdot 2=$ **4**. 2 הוא הערך הנכון עם `N/2`. 3 היה יוצא עם `i < N - 1`, ו-1 עם `i < N/2 - 1`.",
      "recap": "i עד N, לא N/2: כל זוג נספר פעמיים",
      "questionHtml": "מה ידפיס הקוד?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>#define N 4\nint m[N][N] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {5, 6, 0, 8}, {1, 2, 3, 9}};\nint violations = 0;\nfor (int i = 0; i &lt; N; i++)\n    for (int j = 0; j &lt; N; j++)\n        if (m[i][j] != m[N - 1 - i][j])\n            violations++;\nprintf(\"%d\", violations);</code></pre>",
      "explanationHtml": "עכשיו כל זוג שורות נבדק פעמיים (שורה 0 מול 3 ושורה 3 מול 0, שורה 1 מול 2 ושורה 2 מול 1), וכל הפרה נספרת כפול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">2\\cdot 2=</annotation></semantics></math></span> <strong>4</strong>. 2 הוא הערך הנכון עם <code class=\"tok\" dir=\"ltr\">N/2</code>. 3 היה יוצא עם <code class=\"tok\" dir=\"ltr\">i &lt; N - 1</code>, ו-1 עם <code class=\"tok\" dir=\"ltr\">i &lt; N/2 - 1</code>.",
      "recapHtml": "i עד N, לא N/2: כל זוג נספר פעמיים"
     },
     {
      "id": "C07-Q5",
      "step": {
       "type": "findbug",
       "code": true,
       "prompt": "הלולאה אמורה להחליף בין שורה `r1` לשורה `r2`. מצאו את השורה השגויה.",
       "lines": [
        "for (int j = 0; j < N; j++) {",
        "    int t = m[r1][j];",
        "    m[r1][j] = m[r2][j];",
        "    m[r2][j] = m[r1][j];",
        "}"
       ],
       "bugIndex": 3,
       "explain": "בשורה השלישית כבר דרסנו את `m[r1][j]`, ולכן הערך המקורי נמצא רק ב-`t`. צריך `m[r2][j] = t;`. עם השורה השגויה שתי השורות מקבלות את הערכים של `r2`.",
       "promptHtml": "הלולאה אמורה להחליף בין שורה <code class=\"tok\" dir=\"ltr\">r1</code> לשורה <code class=\"tok\" dir=\"ltr\">r2</code>. מצאו את השורה השגויה.",
       "explainHtml": "בשורה השלישית כבר דרסנו את <code class=\"tok\" dir=\"ltr\">m[r1][j]</code>, ולכן הערך המקורי נמצא רק ב-<code class=\"tok\" dir=\"ltr\">t</code>. צריך <code class=\"tok\" dir=\"ltr\">m[r2][j] = t;</code>. עם השורה השגויה שתי השורות מקבלות את הערכים של <code class=\"tok\" dir=\"ltr\">r2</code>.",
       "linesHtml": [
        "for (int j = 0; j &lt; N; j++) {",
        "    int t = m[r1][j];",
        "    m[r1][j] = m[r2][j];",
        "    m[r2][j] = m[r1][j];",
        "}"
       ]
      },
      "recap": "הערך שנדרס נשמר ב-t, ומשם מחזירים אותו",
      "recapHtml": "הערך שנדרס נשמר ב-t, ומשם מחזירים אותו"
     },
     {
      "id": "C07-Q6",
      "step": {
       "type": "numeric",
       "prompt": "המטריצה ממוינת בשורות ובעמודות. כמה תאים נבדקים עד שהחיפוש של `6` מסתיים?\n```c\nint a[3][3] = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}};\nint key = 6, i = 0, j = 2, steps = 0;\nwhile (i < 3 && j >= 0) {\n    steps++;\n    if (a[i][j] == key) break;\n    if (a[i][j] > key) j--; else i++;\n}\nprintf(\"%d\", steps);\n```",
       "answer": 4,
       "tol": 0,
       "explain": "בודקים 7 (גדול מ-6, זזים שמאלה), 4 (קטן, זזים למטה), 5 (קטן, זזים למטה), 6 (נמצא). זה 4 תאים.",
       "promptHtml": "המטריצה ממוינת בשורות ובעמודות. כמה תאים נבדקים עד שהחיפוש של <code class=\"tok\" dir=\"ltr\">6</code> מסתיים?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int a[3][3] = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}};\nint key = 6, i = 0, j = 2, steps = 0;\nwhile (i &lt; 3 &amp;&amp; j &gt;= 0) {\n    steps++;\n    if (a[i][j] == key) break;\n    if (a[i][j] &gt; key) j--; else i++;\n}\nprintf(\"%d\", steps);</code></pre>",
       "explainHtml": "בודקים 7 (גדול מ-6, זזים שמאלה), 4 (קטן, זזים למטה), 5 (קטן, זזים למטה), 6 (נמצא). זה 4 תאים."
      },
      "recap": "מהפינה: גדול זזים שמאלה, קטן זזים למטה",
      "recapHtml": "מהפינה: גדול זזים שמאלה, קטן זזים למטה"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "מבחן גמר: מטריצות",
    "goal": "לפתור שאלות מטריצות אמיתיות מהמבחנים: סכומי שורה ועמודה ביחס לאלכסון, חלונות 3x3 וסימטריה.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>זה מבחן הגמר של הקורס: חמש שאלות אמיתיות מהמבחנים, כולל הצעדים המודרכים שלהן.</p>\n<ul>\n<li><b>סכום שורה ועמודה מול האלכסון</b> (רמה 3 ו-4): סוכמים שורה אחת או עמודה אחת ומשווים לתא האלכסון.</li>\n<li><b>חלונות 3x3 וספירה</b> (רמה 6): הפינה <code>(rows, cols)</code> רצה עד <code>R-3</code> ו-<code>C-3</code>, ומערך ספירה בודק מה יש בחלון.</li>\n<li><b>סימטריה</b> (רמה 7): משווים שורה לשורה המקבילה ועמודה לעמודה המקבילה, כל זוג פעם אחת.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 לפני שכותבים קוד: מה האינדקס שקבוע, מה האינדקס שזז, ועד איפה כל לולאה רצה.</div>"
    },
    "questions": [
     {
      "bankId": "22A-B-Q1a",
      "recap": "סכום שורה i פחות התא האלכסוני שווה לתא האלכסוני: בודקים לכל שורה",
      "recapHtml": "סכום שורה i פחות התא האלכסוני שווה לתא האלכסוני: בודקים לכל שורה"
     },
     {
      "bankId": "22A-B-Q1b",
      "recap": "אותו רעיון עם עמודות: האינדקס השני קבוע",
      "recapHtml": "אותו רעיון עם עמודות: האינדקס השני קבוע"
     },
     {
      "bankId": "20A-A-Q5a",
      "recap": "TestCount: כל ערך מ-1 עד 9 מופיע בדיוק פעם אחת",
      "recapHtml": "TestCount: כל ערך מ-1 עד 9 מופיע בדיוק פעם אחת"
     },
     {
      "bankId": "20A-A-Q5b",
      "recap": "חלונות 3x3: הפינה רצה עד R-3 ו-C-3, ומערך ספירה לכל חלון",
      "recapHtml": "חלונות 3x3: הפינה רצה עד R-3 ו-C-3, ומערך ספירה לכל חלון"
     },
     {
      "bankId": "25A-A-Q4",
      "recap": "סימטריה: משווים שורה i לשורה N-1-i, i עד N/2",
      "recapHtml": "סימטריה: משווים שורה i לשורה N-1-i, i עד N/2"
     }
    ]
   }
  ]
 },
 "recursion": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔁",
    "title": "קריאה, בסיס וצעד",
    "goal": "לזהות מקרה בסיס וצעד רקורסיבי, ולחשב מה מחזירה פונקציה רקורסיבית קטנה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>פונקציה רקורסיבית היא פונקציה שקוראת <b>לעצמה</b> על בעיה קטנה יותר. כל פונקציה רקורסיבית בנויה משני חלקים:</p>\n<ul><li><b>מקרה בסיס</b>: מצב כל כך קטן שעונים עליו ישר, בלי קריאה נוספת. הוא מה שעוצר את הרקורסיה.</li>\n<li><b>צעד רקורסיבי</b>: קוראים לאותה פונקציה עם קלט <b>קטן יותר</b>, ומשתמשים בתשובה שחזרה.</li></ul>\n<pre><code>int sumTo(int n) {\n    if (n == 0) return 0;          /* בסיס */\n    return n + sumTo(n - 1);       /* צעד */\n}</code></pre>\n<div class=\"lesson-ex\">דוגמה: <code>sumTo(3)</code> קוראת ל-<code>sumTo(2)</code>, זו ל-<code>sumTo(1)</code>, וזו ל-<code>sumTo(0)</code> שמחזירה 0. בחזרה: <code>sumTo(1) = 1 + 0 = 1</code>, אחר כך <code>sumTo(2) = 2 + 1 = 3</code>, ולבסוף <code>sumTo(3) = 3 + 3 = 6</code>.</div>\n<div class=\"lesson-rule\">🔑 כל קריאה היא כרטיס חדש במחסנית, עם עותק משלה של הפרמטרים. הקריאות יורדות עד מקרה הבסיס, והערכים חוזרים למעלה בסדר הפוך.</div>\n<div class=\"lesson-trap\">⚠️ בלי מקרה בסיס שמושג, הקריאות לא נגמרות והתוכנית קורסת (גלישת מחסנית).</div>"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מה מחזירה `f(4)`?\n```c\nint f(int n) {\n    if (n == 1) return 1;\n    return n * f(n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4</code>"
       },
       {
        "id": "b",
        "value": "`10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10</code>"
       },
       {
        "id": "c",
        "value": "`24`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">24</code>"
       },
       {
        "id": "d",
        "value": "`1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הקריאות יורדות: `f(4)` תלויה ב-`f(3)`, ואז `f(2)`, ואז `f(1)` שמחזירה 1. בחזרה מכפילים: `2*1=2`, `3*2=6`, `4*6=24`. התשובה 10 היא סכום (כמו `sumTo`) ולא מכפלה. התשובה 1 היא רק ערך מקרה הבסיס, ו-4 היא הקלט.",
      "recap": "בעקיבה יורדים עד הבסיס ואז מחשבים בחזרה למעלה",
      "questionHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(4)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    if (n == 1) return 1;\n    return n * f(n - 1);\n}</code></pre>",
      "explanationHtml": "הקריאות יורדות: <code class=\"tok\" dir=\"ltr\">f(4)</code> תלויה ב-<code class=\"tok\" dir=\"ltr\">f(3)</code>, ואז <code class=\"tok\" dir=\"ltr\">f(2)</code>, ואז <code class=\"tok\" dir=\"ltr\">f(1)</code> שמחזירה 1. בחזרה מכפילים: <code class=\"tok\" dir=\"ltr\">2*1=2</code>, <code class=\"tok\" dir=\"ltr\">3*2=6</code>, <code class=\"tok\" dir=\"ltr\">4*6=24</code>. התשובה 10 היא סכום (כמו <code class=\"tok\" dir=\"ltr\">sumTo</code>) ולא מכפלה. התשובה 1 היא רק ערך מקרה הבסיס, ו-4 היא הקלט.",
      "recapHtml": "בעקיבה יורדים עד הבסיס ואז מחשבים בחזרה למעלה"
     },
     {
      "id": "C01-Q2",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `h(3)`?\n```c\nint h(int n) {\n    if (n == 0) return 5;\n    return h(n - 1) + 2;\n}\n```",
       "answer": 11,
       "tol": 0,
       "explain": "מקרה הבסיס מחזיר 5 (לא 0!). `h(1)=5+2=7`, `h(2)=7+2=9`, `h(3)=9+2=11`.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">h(3)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int h(int n) {\n    if (n == 0) return 5;\n    return h(n - 1) + 2;\n}</code></pre>",
       "explainHtml": "מקרה הבסיס מחזיר 5 (לא 0!). <code class=\"tok\" dir=\"ltr\">h(1)=5+2=7</code>, <code class=\"tok\" dir=\"ltr\">h(2)=7+2=9</code>, <code class=\"tok\" dir=\"ltr\">h(3)=9+2=11</code>."
      },
      "recap": "ערך מקרה הבסיס לא חייב להיות 0",
      "recapHtml": "ערך מקרה הבסיס לא חייב להיות 0"
     },
     {
      "id": "C01-Q3",
      "step": {
       "type": "numeric",
       "prompt": "אחרי הרצת `f(4)`, מה ערך המשתנה הגלובלי `calls`? (הוא מונה כמה פעמים נכנסו לפונקציה)\n```c\nint calls = 0;\nint f(int n) {\n    calls++;\n    if (n == 0) return 0;\n    return 1 + f(n - 1);\n}\n```",
       "answer": 5,
       "tol": 0,
       "explain": "הקריאות הן `f(4)`, `f(3)`, `f(2)`, `f(1)`, `f(0)`: חמש קריאות, כולל זו של מקרה הבסיס.",
       "promptHtml": "אחרי הרצת <code class=\"tok\" dir=\"ltr\">f(4)</code>, מה ערך המשתנה הגלובלי <code class=\"tok\" dir=\"ltr\">calls</code>? (הוא מונה כמה פעמים נכנסו לפונקציה)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int calls = 0;\nint f(int n) {\n    calls++;\n    if (n == 0) return 0;\n    return 1 + f(n - 1);\n}</code></pre>",
       "explainHtml": "הקריאות הן <code class=\"tok\" dir=\"ltr\">f(4)</code>, <code class=\"tok\" dir=\"ltr\">f(3)</code>, <code class=\"tok\" dir=\"ltr\">f(2)</code>, <code class=\"tok\" dir=\"ltr\">f(1)</code>, <code class=\"tok\" dir=\"ltr\">f(0)</code>: חמש קריאות, כולל זו של מקרה הבסיס."
      },
      "recap": "מספר הקריאות לקלט n הוא n+1 כשכל קריאה מקטינה ב-1 עד 0",
      "recapHtml": "מספר הקריאות לקלט n הוא n+1 כשכל קריאה מקטינה ב-1 עד 0"
     },
     {
      "id": "C01-Q4",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה, שמחזירה $2^n$ (חזקה של 2) בלי לולאה.",
       "lines": [
        "int pow2(int n) {",
        "if (n == 0) return 1;",
        "return 2 * pow2(n - 1);",
        "}"
       ],
       "code": true,
       "explain": "החתימה פותחת, אחריה מקרה הבסיס, ואחריו הצעד הרקורסיבי, והסוגר סוגר. אם הצעד קודם לבסיס, הקריאות אף פעם לא נעצרות.",
       "promptHtml": "סדרו את שורות הפונקציה, שמחזירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span> (חזקה של 2) בלי לולאה.",
       "explainHtml": "החתימה פותחת, אחריה מקרה הבסיס, ואחריו הצעד הרקורסיבי, והסוגר סוגר. אם הצעד קודם לבסיס, הקריאות אף פעם לא נעצרות.",
       "linesHtml": [
        "int pow2(int n) {",
        "if (n == 0) return 1;",
        "return 2 * pow2(n - 1);",
        "}"
       ]
      },
      "recap": "בסיס לפני צעד",
      "recapHtml": "בסיס לפני צעד"
     },
     {
      "id": "C01-Q5",
      "question": "מה קורה כשמריצים `f(3)`?\n```c\nint f(int n) {\n    return n + f(n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "היא מחזירה `6`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">6</code>"
       },
       {
        "id": "b",
        "value": "היא מחזירה `0`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>"
       },
       {
        "id": "c",
        "value": "היא קורסת: אין מקרה בסיס, והקריאות לא נעצרות",
        "type": "text",
        "html": "היא קורסת: אין מקרה בסיס, והקריאות לא נעצרות"
       },
       {
        "id": "d",
        "value": "היא מחזירה `3`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">3</code>"
       }
      ],
      "correctId": "c",
      "explanation": "אין שום תנאי עצירה: `f(3)` קוראת ל-`f(2)`, זו ל-`f(1)`, `f(0)`, `f(-1)` וכן הלאה, עד שהמחסנית מתמלאת והתוכנית קורסת. 6 היה התוצאה אילו הייתה בסיס `n == 0` שמחזיר 0, אבל אין.",
      "recap": "בלי בסיס שמושג התוכנית קורסת",
      "questionHtml": "מה קורה כשמריצים <code class=\"tok\" dir=\"ltr\">f(3)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    return n + f(n - 1);\n}</code></pre>",
      "explanationHtml": "אין שום תנאי עצירה: <code class=\"tok\" dir=\"ltr\">f(3)</code> קוראת ל-<code class=\"tok\" dir=\"ltr\">f(2)</code>, זו ל-<code class=\"tok\" dir=\"ltr\">f(1)</code>, <code class=\"tok\" dir=\"ltr\">f(0)</code>, <code class=\"tok\" dir=\"ltr\">f(-1)</code> וכן הלאה, עד שהמחסנית מתמלאת והתוכנית קורסת. 6 היה התוצאה אילו הייתה בסיס <code class=\"tok\" dir=\"ltr\">n == 0</code> שמחזיר 0, אבל אין.",
      "recapHtml": "בלי בסיס שמושג התוכנית קורסת"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "📋",
    "title": "עוקבים אחרי ערכים מוחזרים",
    "goal": "לעקוב אחרי רקורסיה בטבלה, ולהבין מה פונקציה רקורסיבית מחשבת בכלל.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>לעקוב אחרי רקורסיה עושים בשני שלבים: קודם <b>יורדים</b> וכותבים את הקריאות עד מקרה הבסיס, ואז <b>עולים</b> וממלאים את הערך שכל קריאה מחזירה.</p>\n<pre><code>int t(int n) {\n    if (n == 0) return 1;\n    return t(n - 1) + n;\n}</code></pre>\n<table><thead><tr><th>קריאה</th><th>תלויה ב-</th><th>מחזירה</th></tr></thead><tbody>\n<tr><td><code>t(0)</code></td><td>בסיס</td><td>1</td></tr>\n<tr><td><code>t(1)</code></td><td><code>t(0) + 1</code></td><td>2</td></tr>\n<tr><td><code>t(2)</code></td><td><code>t(1) + 2</code></td><td>4</td></tr>\n<tr><td><code>t(3)</code></td><td><code>t(2) + 3</code></td><td>7</td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 ממלאים את הטבלה מהשורה של הבסיס כלפי מעלה. כל שורה משתמשת רק בשורה שמתחתיה.</div>\n<p>כדי להבין <b>מה</b> הפונקציה מחשבת, מציבים כמה ערכים קטנים ומחפשים את הכלל, ואז בודקים אותו על ערך נוסף.</p>\n<div class=\"lesson-trap\">⚠️ בסיס יכול להיות <code>n &lt;= 0</code> ולא רק <code>n == 0</code>. כשהצעד מקטין ב-2, הקריאות יכולות לדלג מעל 0, ולכן צריך לבדוק איך מקרה הבסיס מושג.</div>"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `f(3, 4)`?\n```c\nint f(int a, int b) {\n    if (b == 0) return 0;\n    return a + f(a, b - 1);\n}\n```",
       "answer": 12,
       "tol": 0,
       "explain": "`f(3,0)=0`, `f(3,1)=3+0=3`, `f(3,2)=3+3=6`, `f(3,3)=9`, `f(3,4)=12`.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(3, 4)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int a, int b) {\n    if (b == 0) return 0;\n    return a + f(a, b - 1);\n}</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">f(3,0)=0</code>, <code class=\"tok\" dir=\"ltr\">f(3,1)=3+0=3</code>, <code class=\"tok\" dir=\"ltr\">f(3,2)=3+3=6</code>, <code class=\"tok\" dir=\"ltr\">f(3,3)=9</code>, <code class=\"tok\" dir=\"ltr\">f(3,4)=12</code>."
      },
      "recap": "ממלאים את הטבלה מהבסיס למעלה",
      "recapHtml": "ממלאים את הטבלה מהבסיס למעלה"
     },
     {
      "id": "C02-Q2",
      "question": "מה הפונקציה `s` מחשבת עבור כל $n \\ge 1$ ?\n```c\nint s(int n) {\n    if (n == 1) return 1;\n    return s(n - 1) + 2 * n - 1;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`n + n - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n + n - 1</code>"
       },
       {
        "id": "b",
        "value": "`n * (n + 1) / 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n * (n + 1) / 2</code>"
       },
       {
        "id": "c",
        "value": "`n * n`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n * n</code>"
       },
       {
        "id": "d",
        "value": "`2 * n - 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 * n - 1</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הערכים: `s(1)=1`, `s(2)=1+3=4`, `s(3)=4+5=9`, `s(4)=9+7=16`. אלה ריבועים: $n^2$. הנוסחה `n*(n+1)/2` נותנת 1, 3, 6 כבר בקריאה השנייה. `2n-1` הוא רק המחובר האחרון ולא הסכום, ו-`n+n-1` שווה לו.",
      "recap": "מציבים כמה ערכים ומחפשים כלל, ואז בודקים אותו",
      "questionHtml": "מה הפונקציה <code class=\"tok\" dir=\"ltr\">s</code> מחשבת עבור כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 1</annotation></semantics></math></span> ?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int s(int n) {\n    if (n == 1) return 1;\n    return s(n - 1) + 2 * n - 1;\n}</code></pre>",
      "explanationHtml": "הערכים: <code class=\"tok\" dir=\"ltr\">s(1)=1</code>, <code class=\"tok\" dir=\"ltr\">s(2)=1+3=4</code>, <code class=\"tok\" dir=\"ltr\">s(3)=4+5=9</code>, <code class=\"tok\" dir=\"ltr\">s(4)=9+7=16</code>. אלה ריבועים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>. הנוסחה <code class=\"tok\" dir=\"ltr\">n*(n+1)/2</code> נותנת 1, 3, 6 כבר בקריאה השנייה. <code class=\"tok\" dir=\"ltr\">2n-1</code> הוא רק המחובר האחרון ולא הסכום, ו-<code class=\"tok\" dir=\"ltr\">n+n-1</code> שווה לו.",
      "recapHtml": "מציבים כמה ערכים ומחפשים כלל, ואז בודקים אותו"
     },
     {
      "id": "C02-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `g(4)`?\n```c\nint g(int n) {\n    if (n == 0) return 1;\n    return 2 * g(n - 1) + 1;\n}\n```",
       "answer": 31,
       "tol": 0,
       "explain": "`g(0)=1`, `g(1)=3`, `g(2)=7`, `g(3)=15`, `g(4)=31`. כל ערך הוא פעמיים הקודם ועוד 1.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">g(4)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int g(int n) {\n    if (n == 0) return 1;\n    return 2 * g(n - 1) + 1;\n}</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">g(0)=1</code>, <code class=\"tok\" dir=\"ltr\">g(1)=3</code>, <code class=\"tok\" dir=\"ltr\">g(2)=7</code>, <code class=\"tok\" dir=\"ltr\">g(3)=15</code>, <code class=\"tok\" dir=\"ltr\">g(4)=31</code>. כל ערך הוא פעמיים הקודם ועוד 1."
      },
      "recap": "כל שורה בטבלה משתמשת בשורה שמתחתיה",
      "recapHtml": "כל שורה בטבלה משתמשת בשורה שמתחתיה"
     },
     {
      "id": "C02-Q4",
      "question": "מה מחזירה `r(7)`?\n```c\nint r(int n) {\n    if (n <= 0) return 0;\n    return r(n - 2) + n;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`28`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">28</code>"
       },
       {
        "id": "b",
        "value": "`12`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">12</code>"
       },
       {
        "id": "c",
        "value": "`16`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">16</code>"
       },
       {
        "id": "d",
        "value": "`7`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">7</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הקריאות: 7, 5, 3, 1, ואז `r(-1)` שעוצרת (כי $-1 \\le 0$) ומחזירה 0. הסכום: $7+5+3+1=16$. התשובה 12 עוצרת מוקדם מדי (7+5), והתשובה 28 היא סכום כל המספרים מ-1 עד 7, אבל הצעד המקטין ב-2 לא עובר על כולם.",
      "recap": "כשהצעד מקטין ב-2, רק כל מספר שני נספר",
      "questionHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">r(7)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int r(int n) {\n    if (n &lt;= 0) return 0;\n    return r(n - 2) + n;\n}</code></pre>",
      "explanationHtml": "הקריאות: 7, 5, 3, 1, ואז <code class=\"tok\" dir=\"ltr\">r(-1)</code> שעוצרת (כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>1</mn><mo>≤</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-1 \\le 0</annotation></semantics></math></span>) ומחזירה 0. הסכום: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">7+5+3+1=16</annotation></semantics></math></span>. התשובה 12 עוצרת מוקדם מדי (7+5), והתשובה 28 היא סכום כל המספרים מ-1 עד 7, אבל הצעד המקטין ב-2 לא עובר על כולם.",
      "recapHtml": "כשהצעד מקטין ב-2, רק כל מספר שני נספר"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🖨️",
    "title": "לפני או אחרי הקריאה: סדר ההדפסה",
    "goal": "לקבוע באיזה סדר פונקציה רקורסיבית מדפיסה, לפי המקום של ה-printf ביחס לקריאה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>כשיש <code>printf</code> בתוך פונקציה רקורסיבית, חשוב <b>איפה</b> הוא נמצא ביחס לקריאה:</p>\n<pre><code>void down(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    down(n - 1);\n}</code></pre><pre><code>void up(int n) {\n    if (n == 0) return;\n    up(n - 1);\n    printf(\"%d \", n);\n}</code></pre>\n<ul><li><b>לפני</b> הקריאה (<code>down</code>): מדפיסים בסדר הכניסה. <code>down(3)</code> מדפיסה <code>3 2 1</code>.</li>\n<li><b>אחרי</b> הקריאה (<code>up</code>): ההדפסה מחכה עד שהקריאה הפנימית חוזרת, ולכן הסדר הפוך. <code>up(3)</code> מדפיסה <code>1 2 3</code>.</li></ul>\n<div class=\"lesson-rule\">🔑 הדפסה לפני הקריאה = סדר הכניסה. הדפסה אחרי הקריאה = סדר היציאה (הפוך). אם יש שתיהן, כל קריאה מדפיסה פעמיים: פעם בדרך למטה ופעם בדרך חזרה.</div>\n<div class=\"lesson-trap\">⚠️ מקרה הבסיס שחוזר בלי להדפיס לא מוסיף שום פלט. אם הוא כן מדפיס (למשל <code>0</code>), הוא מופיע פעם אחת, באמצע.</div>"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "מה מדפיסה `f(4)`?\n```c\nvoid f(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n * 2);\n    f(n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`2 4 6 8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 4 6 8</code>"
       },
       {
        "id": "b",
        "value": "`4 3 2 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4 3 2 1</code>"
       },
       {
        "id": "c",
        "value": "`8 6 4 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">8 6 4 2</code>"
       },
       {
        "id": "d",
        "value": "`8 6 4 2 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">8 6 4 2 0</code>"
       }
      ],
      "correctId": "c",
      "explanation": "ההדפסה לפני הקריאה, ולכן בסדר הכניסה: `n=4` מדפיס 8, אחר כך `n=3` מדפיס 6, 4 ו-2. כשמגיעים ל-`n=0` חוזרים בלי להדפיס, ולכן אין `0`. `2 4 6 8` היה הפלט אילו ההדפסה אחרי הקריאה. `4 3 2 1` שוכח להכפיל ב-2.",
      "recap": "printf לפני הקריאה: סדר הכניסה",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">f(4)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void f(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n * 2);\n    f(n - 1);\n}</code></pre>",
      "explanationHtml": "ההדפסה לפני הקריאה, ולכן בסדר הכניסה: <code class=\"tok\" dir=\"ltr\">n=4</code> מדפיס 8, אחר כך <code class=\"tok\" dir=\"ltr\">n=3</code> מדפיס 6, 4 ו-2. כשמגיעים ל-<code class=\"tok\" dir=\"ltr\">n=0</code> חוזרים בלי להדפיס, ולכן אין <code class=\"tok\" dir=\"ltr\">0</code>. <code class=\"tok\" dir=\"ltr\">2 4 6 8</code> היה הפלט אילו ההדפסה אחרי הקריאה. <code class=\"tok\" dir=\"ltr\">4 3 2 1</code> שוכח להכפיל ב-2.",
      "recapHtml": "printf לפני הקריאה: סדר הכניסה"
     },
     {
      "id": "C03-Q2",
      "question": "מה מדפיסה `g(4)`?\n```c\nvoid g(int n) {\n    if (n == 0) return;\n    g(n - 1);\n    printf(\"%d \", n * 2);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`8 6 4 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">8 6 4 2</code>"
       },
       {
        "id": "b",
        "value": "`2 4 6 8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 4 6 8</code>"
       },
       {
        "id": "c",
        "value": "`1 2 3 4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2 3 4</code>"
       },
       {
        "id": "d",
        "value": "`2 4 6 8 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2 4 6 8 0</code>"
       }
      ],
      "correctId": "b",
      "explanation": "ההדפסה אחרי הקריאה, ולכן בסדר היציאה: הקריאה העמוקה ביותר (`n=1`) מדפיסה ראשונה 2, אחריה `n=2` מדפיסה 4, ואז 6 ו-8. `8 6 4 2` היה הפלט אילו ההדפסה לפני הקריאה.",
      "recap": "printf אחרי הקריאה: הסדר ההפוך",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">g(4)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void g(int n) {\n    if (n == 0) return;\n    g(n - 1);\n    printf(\"%d \", n * 2);\n}</code></pre>",
      "explanationHtml": "ההדפסה אחרי הקריאה, ולכן בסדר היציאה: הקריאה העמוקה ביותר (<code class=\"tok\" dir=\"ltr\">n=1</code>) מדפיסה ראשונה 2, אחריה <code class=\"tok\" dir=\"ltr\">n=2</code> מדפיסה 4, ואז 6 ו-8. <code class=\"tok\" dir=\"ltr\">8 6 4 2</code> היה הפלט אילו ההדפסה לפני הקריאה.",
      "recapHtml": "printf אחרי הקריאה: הסדר ההפוך"
     },
     {
      "id": "C03-Q3",
      "question": "מה מדפיסה `h(3)`?\n```c\nvoid h(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    h(n - 1);\n    printf(\"%d \", n * 10);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`3 2 1 10 20 30`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 2 1 10 20 30</code>"
       },
       {
        "id": "b",
        "value": "`3 2 1 30 20 10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 2 1 30 20 10</code>"
       },
       {
        "id": "c",
        "value": "`3 30 2 20 1 10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 30 2 20 1 10</code>"
       },
       {
        "id": "d",
        "value": "`1 2 3 10 20 30`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2 3 10 20 30</code>"
       }
      ],
      "correctId": "a",
      "explanation": "בדרך למטה מודפסים 3, 2, 1 (לפני הקריאה). אחרי שמקרה הבסיס חוזר, כל קריאה מדפיסה את החלק השני בדרך חזרה, מהעמוקה לשטחית: `n=1` מדפיסה 10, `n=2` מדפיסה 20, `n=3` מדפיסה 30. `3 30 2 20 1 10` היה הפלט אילו ההדפסות באו זו אחר זו בלי קריאה ביניהן.",
      "recap": "פלט כפול: כניסה בסדר יורד, ואז יציאה בסדר הפוך",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">h(3)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void h(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    h(n - 1);\n    printf(\"%d \", n * 10);\n}</code></pre>",
      "explanationHtml": "בדרך למטה מודפסים 3, 2, 1 (לפני הקריאה). אחרי שמקרה הבסיס חוזר, כל קריאה מדפיסה את החלק השני בדרך חזרה, מהעמוקה לשטחית: <code class=\"tok\" dir=\"ltr\">n=1</code> מדפיסה 10, <code class=\"tok\" dir=\"ltr\">n=2</code> מדפיסה 20, <code class=\"tok\" dir=\"ltr\">n=3</code> מדפיסה 30. <code class=\"tok\" dir=\"ltr\">3 30 2 20 1 10</code> היה הפלט אילו ההדפסות באו זו אחר זו בלי קריאה ביניהן.",
      "recapHtml": "פלט כפול: כניסה בסדר יורד, ואז יציאה בסדר הפוך"
     },
     {
      "id": "C03-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה מספרים מדפיסה `k(3)` בסך הכול?\n```c\nvoid k(int n) {\n    if (n == 0) {\n        printf(\"0 \");\n        return;\n    }\n    printf(\"%d \", n);\n    k(n - 1);\n    printf(\"%d \", n);\n}\n```",
       "answer": 7,
       "tol": 0,
       "explain": "הפלט הוא `3 2 1 0 1 2 3`: שלושה מספרים בדרך למטה, `0` אחד ממקרה הבסיס, ושלושה בדרך חזרה: 7.",
       "promptHtml": "כמה מספרים מדפיסה <code class=\"tok\" dir=\"ltr\">k(3)</code> בסך הכול?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void k(int n) {\n    if (n == 0) {\n        printf(\"0 \");\n        return;\n    }\n    printf(\"%d \", n);\n    k(n - 1);\n    printf(\"%d \", n);\n}</code></pre>",
       "explainHtml": "הפלט הוא <code class=\"tok\" dir=\"ltr\">3 2 1 0 1 2 3</code>: שלושה מספרים בדרך למטה, <code class=\"tok\" dir=\"ltr\">0</code> אחד ממקרה הבסיס, ושלושה בדרך חזרה: 7."
      },
      "recap": "מקרה בסיס שמדפיס מופיע פעם אחת באמצע",
      "recapHtml": "מקרה בסיס שמדפיס מופיע פעם אחת באמצע"
     },
     {
      "id": "C03-Q5",
      "step": {
       "type": "fillblank",
       "prompt": "השלימו את השורה כך ש-`up(3)` תדפיס `1 2 3`.",
       "lines": [
        "void up(int n) {",
        "if (n == 0) return;",
        "___",
        "printf(\"%d \", n);",
        "}"
       ],
       "blankIndex": 2,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "up(n - 1);",
         "type": "text",
         "html": "up(n - 1);"
        },
        {
         "id": "b",
         "value": "up(n + 1);",
         "type": "text",
         "html": "up(n + 1);"
        },
        {
         "id": "c",
         "value": "up(n);",
         "type": "text",
         "html": "up(n);"
        },
        {
         "id": "d",
         "value": "printf(\"%d \", n - 1);",
         "type": "text",
         "html": "printf(\"%d \", n - 1);"
        }
       ],
       "correctId": "a",
       "explain": "הקריאה הרקורסיבית חייבת להקטין את `n` כדי להגיע ל-0, וההדפסה אחריה. `up(n+1)` מגדילה, ו-`up(n)` לא משנה: בשתיהן אין עצירה והתוכנית קורסת. הפקודה `printf` עם `n - 1` לא קוראת רקורסיבית, ולכן `up(3)` מדפיסה רק `2 3`.",
       "promptHtml": "השלימו את השורה כך ש-<code class=\"tok\" dir=\"ltr\">up(3)</code> תדפיס <code class=\"tok\" dir=\"ltr\">1 2 3</code>.",
       "explainHtml": "הקריאה הרקורסיבית חייבת להקטין את <code class=\"tok\" dir=\"ltr\">n</code> כדי להגיע ל-0, וההדפסה אחריה. <code class=\"tok\" dir=\"ltr\">up(n+1)</code> מגדילה, ו-<code class=\"tok\" dir=\"ltr\">up(n)</code> לא משנה: בשתיהן אין עצירה והתוכנית קורסת. הפקודה <code class=\"tok\" dir=\"ltr\">printf</code> עם <code class=\"tok\" dir=\"ltr\">n - 1</code> לא קוראת רקורסיבית, ולכן <code class=\"tok\" dir=\"ltr\">up(3)</code> מדפיסה רק <code class=\"tok\" dir=\"ltr\">2 3</code>.",
       "linesHtml": [
        "void up(int n) {",
        "if (n == 0) return;",
        "___",
        "printf(\"%d \", n);",
        "}"
       ]
      },
      "recap": "הקריאה מקטינה את הפרמטר לעבר הבסיס",
      "recapHtml": "הקריאה מקטינה את הפרמטר לעבר הבסיס"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔢",
    "title": "ספרות של מספר",
    "goal": "לפרק מספר לספרות ברקורסיה עם `n % 10` ו-`n / 10`, ולבחור מקרה בסיס נכון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>רקורסיה על מספר מפרקת אותו לשניים: הספרה האחרונה ושאר המספר.</p>\n<table><thead><tr><th>ביטוי</th><th>משמעות</th><th>עבור 4527</th></tr></thead><tbody>\n<tr><td><code>n % 10</code></td><td>הספרה האחרונה</td><td>7</td></tr>\n<tr><td><code>n / 10</code></td><td>שאר המספר (חילוק שלמים)</td><td>452</td></tr></tbody></table>\n<pre><code>int digitCount(int n) {\n    if (n &lt; 10) return 1;                /* ספרה אחת */\n    return 1 + digitCount(n / 10);       /* מורידים ספרה */\n}</code></pre>\n<div class=\"lesson-ex\">דוגמה: <code>digitCount(305)</code> קוראת ל-<code>digitCount(30)</code> שקוראת ל-<code>digitCount(3)</code>, שמחזירה 1. לכן התוצאה 3.</div>\n<div class=\"lesson-rule\">🔑 הצעד מחליף את <code>n</code> ב-<code>n / 10</code>, והבסיס הוא <code>n == 0</code> (אין ספרות) או <code>n &lt; 10</code> (ספרה אחת). תמיד בודקים מה הבסיס מחזיר.</div>\n<div class=\"lesson-trap\">⚠️ הספרה <code>0</code> היא ספרה לכל דבר. בסיס <code>n == 0</code> סופר 305 בתור 3 ספרות, אבל נותן 0 ל-<code>0</code> עצמו.</div>\n<div class=\"lesson-trap\">⚠️ הפרמטר שמועבר הלאה הוא <code>n / 10</code>, לא <code>n % 10</code>. עם <code>n % 10</code> לא מורידים ספרות.</div>"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "מה מחזירה `f(4527)`?\n```c\nint f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`7`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">7</code>"
       },
       {
        "id": "b",
        "value": "`4527`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4527</code>"
       },
       {
        "id": "c",
        "value": "`18`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">18</code>"
       },
       {
        "id": "d",
        "value": "`4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הפונקציה מחברת את הספרות: $7+2+5+4=18$. כל קריאה מוסיפה את הספרה האחרונה ומעבירה את השאר. 7 הוא רק הספרה האחרונה, 4 הוא הספרה הראשונה.",
      "recap": "n % 10 מוסיפים, n / 10 ממשיכים",
      "questionHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(4527)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    if (n == 0) return 0;\n    return n % 10 + f(n / 10);\n}</code></pre>",
      "explanationHtml": "הפונקציה מחברת את הספרות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">7+2+5+4=18</annotation></semantics></math></span>. כל קריאה מוסיפה את הספרה האחרונה ומעבירה את השאר. 7 הוא רק הספרה האחרונה, 4 הוא הספרה הראשונה.",
      "recapHtml": "n % 10 מוסיפים, n / 10 ממשיכים"
     },
     {
      "id": "C04-Q2",
      "question": "מה מדפיסה `p(1230)`?\n```c\nvoid p(int n) {\n    if (n == 0) return;\n    printf(\"%d\", n % 10);\n    p(n / 10);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`1230`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1230</code>"
       },
       {
        "id": "b",
        "value": "`321`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">321</code>"
       },
       {
        "id": "c",
        "value": "`0321`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0321</code>"
       },
       {
        "id": "d",
        "value": "`123`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">123</code>"
       }
      ],
      "correctId": "c",
      "explanation": "ההדפסה לפני הקריאה, אז הספרות יוצאות מהסוף להתחלה: 0, 3, 2, 1. הספרה 0 נדפסת כי `1230 % 10` הוא 0. `321` מפספס אותה, ו-`1230` היה הפלט אילו ההדפסה אחרי הקריאה.",
      "recap": "מדפיסים n % 10 לפני הקריאה: הספרות בסדר הפוך",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">p(1230)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void p(int n) {\n    if (n == 0) return;\n    printf(\"%d\", n % 10);\n    p(n / 10);\n}</code></pre>",
      "explanationHtml": "ההדפסה לפני הקריאה, אז הספרות יוצאות מהסוף להתחלה: 0, 3, 2, 1. הספרה 0 נדפסת כי <code class=\"tok\" dir=\"ltr\">1230 % 10</code> הוא 0. <code class=\"tok\" dir=\"ltr\">321</code> מפספס אותה, ו-<code class=\"tok\" dir=\"ltr\">1230</code> היה הפלט אילו ההדפסה אחרי הקריאה.",
      "recapHtml": "מדפיסים n % 10 לפני הקריאה: הספרות בסדר הפוך"
     },
     {
      "id": "C04-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `f(7177)`?\n```c\nint f(int n) {\n    if (n == 0) return 0;\n    return (n % 10 == 7) + f(n / 10);\n}\n```",
       "answer": 3,
       "tol": 0,
       "explain": "הביטוי `(n % 10 == 7)` הוא 1 כשהספרה האחרונה 7, אחרת 0. בספרות 7, 1, 7, 7 יש שלוש שבעיות: 3.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(7177)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    if (n == 0) return 0;\n    return (n % 10 == 7) + f(n / 10);\n}</code></pre>",
       "explainHtml": "הביטוי <code class=\"tok\" dir=\"ltr\">(n % 10 == 7)</code> הוא 1 כשהספרה האחרונה 7, אחרת 0. בספרות 7, 1, 7, 7 יש שלוש שבעיות: 3."
      },
      "recap": "תנאי ב-C שווה 1 או 0, ואפשר לחבר אותו",
      "recapHtml": "תנאי ב-C שווה 1 או 0, ואפשר לחבר אותו"
     },
     {
      "id": "C04-Q4",
      "step": {
       "type": "fillblank",
       "prompt": "השלימו את השורה כך ש-`sumDigits` תחזיר את סכום הספרות של $n$ (למשל 123 נותן 6).",
       "lines": [
        "int sumDigits(int n) {",
        "if (n == 0) return 0;",
        "return ___;",
        "}"
       ],
       "blankIndex": 2,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "n % 10 + sumDigits(n / 10)",
         "type": "text",
         "html": "n % 10 + sumDigits(n / 10)"
        },
        {
         "id": "b",
         "value": "n / 10 + sumDigits(n % 10)",
         "type": "text",
         "html": "n / 10 + sumDigits(n % 10)"
        },
        {
         "id": "c",
         "value": "n % 10 * sumDigits(n / 10)",
         "type": "text",
         "html": "n % 10 * sumDigits(n / 10)"
        },
        {
         "id": "d",
         "value": "sumDigits(n / 10)",
         "type": "text",
         "html": "sumDigits(n / 10)"
        }
       ],
       "correctId": "a",
       "explain": "הספרה האחרונה `n % 10` נוספת לסכום של שאר המספר `sumDigits(n / 10)`. בגרסה השנייה התפקידים הפוכים וההתקדמות נתקעת: `sumDigits(2)` קוראת ל-`sumDigits(2)` שוב ושוב. בגרסה השלישית כפל במקום חיבור, והתוצאה תמיד 0 כי בסוף מגיעים ל-`sumDigits(0)`. הרביעית זורקת את הספרה ומחזירה תמיד 0.",
       "promptHtml": "השלימו את השורה כך ש-<code class=\"tok\" dir=\"ltr\">sumDigits</code> תחזיר את סכום הספרות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> (למשל 123 נותן 6).",
       "explainHtml": "הספרה האחרונה <code class=\"tok\" dir=\"ltr\">n % 10</code> נוספת לסכום של שאר המספר <code class=\"tok\" dir=\"ltr\">sumDigits(n / 10)</code>. בגרסה השנייה התפקידים הפוכים וההתקדמות נתקעת: <code class=\"tok\" dir=\"ltr\">sumDigits(2)</code> קוראת ל-<code class=\"tok\" dir=\"ltr\">sumDigits(2)</code> שוב ושוב. בגרסה השלישית כפל במקום חיבור, והתוצאה תמיד 0 כי בסוף מגיעים ל-<code class=\"tok\" dir=\"ltr\">sumDigits(0)</code>. הרביעית זורקת את הספרה ומחזירה תמיד 0.",
       "linesHtml": [
        "int sumDigits(int n) {",
        "if (n == 0) return 0;",
        "return ___;",
        "}"
       ]
      },
      "recap": "ספרה אחרונה + קריאה על השאר",
      "recapHtml": "ספרה אחרונה + קריאה על השאר"
     },
     {
      "id": "C04-Q5",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר את מספר הספרות של $n$, אבל יש בה שורה אחת שגויה. איזו?",
       "lines": [
        "int digitCount(int n) {",
        "if (n < 10) return 1;",
        "return 1 + digitCount(n % 10);",
        "}"
       ],
       "bugIndex": 2,
       "code": true,
       "explain": "הקריאה הרקורסיבית צריכה להעביר `n / 10` (שאר המספר). עם `n % 10` מעבירים רק את הספרה האחרונה, ותמיד מקבלים 2 עבור כל מספר מ-10 ומעלה.",
       "promptHtml": "הפונקציה אמורה להחזיר את מספר הספרות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, אבל יש בה שורה אחת שגויה. איזו?",
       "explainHtml": "הקריאה הרקורסיבית צריכה להעביר <code class=\"tok\" dir=\"ltr\">n / 10</code> (שאר המספר). עם <code class=\"tok\" dir=\"ltr\">n % 10</code> מעבירים רק את הספרה האחרונה, ותמיד מקבלים 2 עבור כל מספר מ-10 ומעלה.",
       "linesHtml": [
        "int digitCount(int n) {",
        "if (n &lt; 10) return 1;",
        "return 1 + digitCount(n % 10);",
        "}"
       ]
      },
      "recap": "מורידים ספרה עם n / 10",
      "recapHtml": "מורידים ספרה עם n / 10"
     },
     {
      "id": "C04-Q6",
      "question": "מה מחזירות `c(0)` ו-`c(305)`, לפי הסדר?\n```c\nint c(int n) {\n    if (n == 0) return 0;\n    return 1 + c(n / 10);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`1 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 3</code>"
       },
       {
        "id": "b",
        "value": "`0 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0 3</code>"
       },
       {
        "id": "c",
        "value": "`0 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0 2</code>"
       },
       {
        "id": "d",
        "value": "`1 2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`c(0)` נעצרת מיד ומחזירה 0 (למרות ש-0 הוא מספר עם ספרה אחת). `c(305)` עוברת על 305, 30, 3 ואז 0: שלוש קריאות שמוסיפות 1, כלומר 3. הספרה 0 שבאמצע נספרת.",
      "recap": "בסיס n == 0 נותן 0 ל-0, אבל סופר ספרות אפס שבאמצע",
      "questionHtml": "מה מחזירות <code class=\"tok\" dir=\"ltr\">c(0)</code> ו-<code class=\"tok\" dir=\"ltr\">c(305)</code>, לפי הסדר?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int c(int n) {\n    if (n == 0) return 0;\n    return 1 + c(n / 10);\n}</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">c(0)</code> נעצרת מיד ומחזירה 0 (למרות ש-0 הוא מספר עם ספרה אחת). <code class=\"tok\" dir=\"ltr\">c(305)</code> עוברת על 305, 30, 3 ואז 0: שלוש קריאות שמוסיפות 1, כלומר 3. הספרה 0 שבאמצע נספרת.",
      "recapHtml": "בסיס n == 0 נותן 0 ל-0, אבל סופר ספרות אפס שבאמצע"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "📚",
    "title": "מערכים ברקורסיה",
    "goal": "לעבור על מערך ברקורסיה עם אינדקס או עם `arr + 1`, ולבחור נכון את הבסיס.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>במערך מקטינים את הבעיה בשתי דרכים מקובלות. בשתיהן מעבירים את <b>הגודל</b> ומקטינים אותו בכל קריאה.</p>\n<pre><code>/* דרך 1: מסתכלים על האיבר האחרון, a[n-1] */\nint sum1(int* a, int n) {\n    if (n == 0) return 0;\n    return a[n - 1] + sum1(a, n - 1);\n}\n/* דרך 2: מסתכלים על הראשון ומזיזים את המצביע */\nint sum2(int* a, int n) {\n    if (n == 0) return 0;\n    return a[0] + sum2(a + 1, n - 1);\n}</code></pre>\n<ul><li><code>a + 1</code> הוא מצביע לאיבר השני: לקריאה הבאה המערך \"מתחיל\" מאיבר אחד קדימה.</li>\n<li>בסיס <code>n == 0</code> מתאים לפעולות כמו סכום. כשצריך להשוות <code>a[0]</code> ל-<code>a[1]</code> או להחזיר <code>a[0]</code> אחרי ש\"נשאר איבר אחד\", הבסיס הוא <code>n &lt;= 1</code> או <code>n == 1</code>.</li></ul>\n<div class=\"lesson-rule\">🔑 בכל קריאה גודל הבעיה קטן באחד. עם <code>a + 1</code> חייבים להקטין גם את <code>n</code> (<code>n - 1</code>), אחרת הקריאה הבאה מסתכלת מעבר לסוף המערך.</div>\n<div class=\"lesson-trap\">⚠️ פעולה שמשווה <code>a[0]</code> ל-<code>a[1]</code> לא תקינה כש-<code>n == 1</code>: אין <code>a[1]</code>. לכן הבסיס הוא <code>n &lt;= 1</code>.</div>\n<div class=\"lesson-trap\">⚠️ קריאה שלא מקדמת את המערך ולא מקטינה את <code>n</code> אף פעם לא מתקדמת.</div>"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה הקריאה `f(a, 6)` עבור `a = {5, 1, 4, 3, 9, 2}` ?\n```c\nint f(int* a, int n) {\n    if (n == 0) return 0;\n    return (a[n - 1] > 3) + f(a, n - 1);\n}\n```",
       "answer": 3,
       "tol": 0,
       "explain": "הפונקציה סופרת איברים גדולים מ-3 בתוך `n` האיברים הראשונים. הגדולים מ-3 הם 5, 4 ו-9: שלושה.",
       "promptHtml": "מה מחזירה הקריאה <code class=\"tok\" dir=\"ltr\">f(a, 6)</code> עבור <code class=\"tok\" dir=\"ltr\">a = {5, 1, 4, 3, 9, 2}</code> ?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int* a, int n) {\n    if (n == 0) return 0;\n    return (a[n - 1] &gt; 3) + f(a, n - 1);\n}</code></pre>",
       "explainHtml": "הפונקציה סופרת איברים גדולים מ-3 בתוך <code class=\"tok\" dir=\"ltr\">n</code> האיברים הראשונים. הגדולים מ-3 הם 5, 4 ו-9: שלושה."
      },
      "recap": "בודקים את a[n-1] ומקטינים את n",
      "recapHtml": "בודקים את a[n-1] ומקטינים את n"
     },
     {
      "id": "C05-Q2",
      "question": "מה מחזירה `f(a, 2)` עבור `a = {2, 4, 6, 8}` ?\n```c\nint f(int* a, int n) {\n    if (n == 0) return 0;\n    return a[0] + f(a + 1, n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`20`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">20</code>"
       },
       {
        "id": "b",
        "value": "`6`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">6</code>"
       },
       {
        "id": "c",
        "value": "`4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4</code>"
       },
       {
        "id": "d",
        "value": "`12`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">12</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`n=2` אומר שעוברים רק על שני איברים: `a[0]=2` ואחריו `a[1]=4`, ואז `n=0` עוצר. הסכום 6. התשובה 20 היא סכום כל המערך, אבל הפרמטר `n` מגביל ל-2 איברים. 12 הוא סכום שלושה איברים, ו-4 הוא רק האיבר השני.",
      "recap": "הפרמטר n קובע כמה איברים עוברים, לא אורך המערך",
      "questionHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(a, 2)</code> עבור <code class=\"tok\" dir=\"ltr\">a = {2, 4, 6, 8}</code> ?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int* a, int n) {\n    if (n == 0) return 0;\n    return a[0] + f(a + 1, n - 1);\n}</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">n=2</code> אומר שעוברים רק על שני איברים: <code class=\"tok\" dir=\"ltr\">a[0]=2</code> ואחריו <code class=\"tok\" dir=\"ltr\">a[1]=4</code>, ואז <code class=\"tok\" dir=\"ltr\">n=0</code> עוצר. הסכום 6. התשובה 20 היא סכום כל המערך, אבל הפרמטר <code class=\"tok\" dir=\"ltr\">n</code> מגביל ל-2 איברים. 12 הוא סכום שלושה איברים, ו-4 הוא רק האיבר השני.",
      "recapHtml": "הפרמטר n קובע כמה איברים עוברים, לא אורך המערך"
     },
     {
      "id": "C05-Q3",
      "step": {
       "type": "fillblank",
       "prompt": "השלימו את הקריאה הרקורסיבית כך שהפונקציה תחזיר `1` אם המערך ממוין בסדר עולה (לא יורד), אחרת `0`.",
       "lines": [
        "int isAscending(int* arr, int size) {",
        "if (size <= 1) return 1;",
        "if (arr[0] > arr[1]) return 0;",
        "return ___;",
        "}"
       ],
       "blankIndex": 3,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "isAscending(arr + 1, size - 1)",
         "type": "text",
         "html": "isAscending(arr + 1, size - 1)"
        },
        {
         "id": "b",
         "value": "isAscending(arr, size - 1)",
         "type": "text",
         "html": "isAscending(arr, size - 1)"
        },
        {
         "id": "c",
         "value": "isAscending(arr + 1, size - 2)",
         "type": "text",
         "html": "isAscending(arr + 1, size - 2)"
        },
        {
         "id": "d",
         "value": "arr[0] <= arr[1]",
         "type": "text",
         "html": "arr[0] &lt;= arr[1]"
        }
       ],
       "correctId": "a",
       "explain": "אחרי שהזוג הראשון תקין, ממשיכים עם המערך שמתחיל באיבר הבא ובגודל קטן באחד. בגרסה השנייה המצביע לא זז, ולכן תמיד משווים שוב את הזוג הראשון: `{1,2,3,1}` נראה ממוין. בשלישית מדלגים על זוג: ב-`{1,2,3,2}` הירידה מ-3 ל-2 לא נבדקת. הרביעית לא ממשיכה ברקורסיה בכלל.",
       "promptHtml": "השלימו את הקריאה הרקורסיבית כך שהפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם המערך ממוין בסדר עולה (לא יורד), אחרת <code class=\"tok\" dir=\"ltr\">0</code>.",
       "explainHtml": "אחרי שהזוג הראשון תקין, ממשיכים עם המערך שמתחיל באיבר הבא ובגודל קטן באחד. בגרסה השנייה המצביע לא זז, ולכן תמיד משווים שוב את הזוג הראשון: <code class=\"tok\" dir=\"ltr\">{1,2,3,1}</code> נראה ממוין. בשלישית מדלגים על זוג: ב-<code class=\"tok\" dir=\"ltr\">{1,2,3,2}</code> הירידה מ-3 ל-2 לא נבדקת. הרביעית לא ממשיכה ברקורסיה בכלל.",
       "linesHtml": [
        "int isAscending(int* arr, int size) {",
        "if (size &lt;= 1) return 1;",
        "if (arr[0] &gt; arr[1]) return 0;",
        "return ___;",
        "}"
       ]
      },
      "recap": "arr + 1 ו-size - 1 ביחד",
      "recapHtml": "arr + 1 ו-size - 1 ביחד"
     },
     {
      "id": "C05-Q4",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה שמחזירה את האיבר הגדול ביותר במערך (גודל $n \\ge 1$).",
       "lines": [
        "int maxArr(int* a, int n) {",
        "if (n == 1) return a[0];",
        "int m = maxArr(a + 1, n - 1);",
        "return a[0] > m ? a[0] : m;",
        "}"
       ],
       "code": true,
       "explain": "קודם הבסיס (מערך של איבר אחד), אחר כך מחשבים את המקסימום של השאר, ורק אז משווים אותו ל-`a[0]`. אם השורה של `m` באה לפני הבסיס, `maxArr` נקראת גם עם `n=0` ואז עם מספרים שליליים, והקריאות לא נעצרות. אם ההשוואה באה לפני `m`, הערך `m` עוד לא מחושב.",
       "promptHtml": "סדרו את שורות הפונקציה שמחזירה את האיבר הגדול ביותר במערך (גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 1</annotation></semantics></math></span>).",
       "explainHtml": "קודם הבסיס (מערך של איבר אחד), אחר כך מחשבים את המקסימום של השאר, ורק אז משווים אותו ל-<code class=\"tok\" dir=\"ltr\">a[0]</code>. אם השורה של <code class=\"tok\" dir=\"ltr\">m</code> באה לפני הבסיס, <code class=\"tok\" dir=\"ltr\">maxArr</code> נקראת גם עם <code class=\"tok\" dir=\"ltr\">n=0</code> ואז עם מספרים שליליים, והקריאות לא נעצרות. אם ההשוואה באה לפני <code class=\"tok\" dir=\"ltr\">m</code>, הערך <code class=\"tok\" dir=\"ltr\">m</code> עוד לא מחושב.",
       "linesHtml": [
        "int maxArr(int* a, int n) {",
        "if (n == 1) return a[0];",
        "int m = maxArr(a + 1, n - 1);",
        "return a[0] &gt; m ? a[0] : m;",
        "}"
       ]
      },
      "recap": "בסיס, אחר כך קריאה, ואז שימוש בתוצאה",
      "recapHtml": "בסיס, אחר כך קריאה, ואז שימוש בתוצאה"
     },
     {
      "id": "C05-Q5",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר `1` אם כל איברי המערך חיוביים. יש בה שורה אחת שגויה. איזו?",
       "lines": [
        "int allPositive(int* a, int n) {",
        "if (n == 0) return 1;",
        "if (a[0] <= 0) return 0;",
        "return allPositive(a, n - 1);",
        "}"
       ],
       "bugIndex": 3,
       "code": true,
       "explain": "הקריאה מקטינה את `n` אבל לא מזיזה את המצביע, ולכן `a[0]` נבדק שוב ושוב. מערך כמו `{1, -2}` נראה חיובי. התיקון: `allPositive(a + 1, n - 1)`.",
       "promptHtml": "הפונקציה אמורה להחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם כל איברי המערך חיוביים. יש בה שורה אחת שגויה. איזו?",
       "explainHtml": "הקריאה מקטינה את <code class=\"tok\" dir=\"ltr\">n</code> אבל לא מזיזה את המצביע, ולכן <code class=\"tok\" dir=\"ltr\">a[0]</code> נבדק שוב ושוב. מערך כמו <code class=\"tok\" dir=\"ltr\">{1, -2}</code> נראה חיובי. התיקון: <code class=\"tok\" dir=\"ltr\">allPositive(a + 1, n - 1)</code>.",
       "linesHtml": [
        "int allPositive(int* a, int n) {",
        "if (n == 0) return 1;",
        "if (a[0] &lt;= 0) return 0;",
        "return allPositive(a, n - 1);",
        "}"
       ]
      },
      "recap": "אם מסתכלים על a[0], חייבים גם לקדם את a",
      "recapHtml": "אם מסתכלים על a[0], חייבים גם לקדם את a"
     },
     {
      "bankId": "20A-A-Q1a",
      "recap": "עוקבים אחרי fun_rec מלמטה למעלה: כל ערך משתמש בקודם",
      "recapHtml": "עוקבים אחרי fun_rec מלמטה למעלה: כל ערך משתמש בקודם"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🔤",
    "title": "מחרוזות ברקורסיה",
    "goal": "לעבור על מחרוזת עם `*s` ו-`s + 1` ולעצור בסוף המחרוזת.",
    "source": "ai-verified",
    "boss": false,
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
        "value": "`6`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">6</code>"
       },
       {
        "id": "b",
        "value": "`2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">2</code>"
       },
       {
        "id": "c",
        "value": "`1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
       },
       {
        "id": "d",
        "value": "`3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3</code>"
       }
      ],
      "correctId": "d",
      "explanation": "הפונקציה סופרת כמה פעמים `c` מופיע. ב-banana יש שלוש `a`: במקומות 1, 3, 5. התשובה 6 היא אורך המחרוזת, ו-2 סופר רק `n`.",
      "recap": "(*s == c) הוא 1 או 0 ומצטבר",
      "questionHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">cnt(\"banana\", 'a')</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int cnt(char* s, char c) {\n    if (*s == '\\0') return 0;\n    return (*s == c) + cnt(s + 1, c);\n}</code></pre>",
      "explanationHtml": "הפונקציה סופרת כמה פעמים <code class=\"tok\" dir=\"ltr\">c</code> מופיע. ב-banana יש שלוש <code class=\"tok\" dir=\"ltr\">a</code>: במקומות 1, 3, 5. התשובה 6 היא אורך המחרוזת, ו-2 סופר רק <code class=\"tok\" dir=\"ltr\">n</code>.",
      "recapHtml": "(*s == c) הוא 1 או 0 ומצטבר"
     },
     {
      "id": "C06-Q2",
      "question": "מה מדפיסה `rev(\"abc\")`?\n```c\nvoid rev(char* s) {\n    if (*s == '\\0') return;\n    rev(s + 1);\n    putchar(*s);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`abc`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">abc</code>"
       },
       {
        "id": "b",
        "value": "`cba`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">cba</code>"
       },
       {
        "id": "c",
        "value": "`cb`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">cb</code>"
       },
       {
        "id": "d",
        "value": "`bca`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">bca</code>"
       }
      ],
      "correctId": "b",
      "explanation": "ההדפסה אחרי הקריאה: קודם יורדים עד הסוף, ואז `c` מודפס, אחריו `b`, ואחריו `a`. `abc` היה הפלט אילו `putchar` לפני `rev(s+1)`.",
      "recap": "הדפסה אחרי הקריאה הופכת את הסדר",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">rev(\"abc\")</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void rev(char* s) {\n    if (*s == '\\0') return;\n    rev(s + 1);\n    putchar(*s);\n}</code></pre>",
      "explanationHtml": "ההדפסה אחרי הקריאה: קודם יורדים עד הסוף, ואז <code class=\"tok\" dir=\"ltr\">c</code> מודפס, אחריו <code class=\"tok\" dir=\"ltr\">b</code>, ואחריו <code class=\"tok\" dir=\"ltr\">a</code>. <code class=\"tok\" dir=\"ltr\">abc</code> היה הפלט אילו <code class=\"tok\" dir=\"ltr\">putchar</code> לפני <code class=\"tok\" dir=\"ltr\">rev(s+1)</code>.",
      "recapHtml": "הדפסה אחרי הקריאה הופכת את הסדר"
     },
     {
      "id": "C06-Q3",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `f(\"hello world\")` ? (הרווח נספר כתו רגיל)\n```c\nint f(char* s) {\n    if (*s == '\\0') return 0;\n    return (*s >= 'a' && *s <= 'm') + f(s + 1);\n}\n```",
       "answer": 6,
       "tol": 0,
       "explain": "הפונקציה סופרת אותיות בטווח `a` עד `m`. בתוך hello world: h, e, l, l, l, d (שישה). האותיות o, w, o, r אינן בטווח, והרווח גם לא.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(\"hello world\")</code> ? (הרווח נספר כתו רגיל)<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(char* s) {\n    if (*s == '\\0') return 0;\n    return (*s &gt;= 'a' &amp;&amp; *s &lt;= 'm') + f(s + 1);\n}</code></pre>",
       "explainHtml": "הפונקציה סופרת אותיות בטווח <code class=\"tok\" dir=\"ltr\">a</code> עד <code class=\"tok\" dir=\"ltr\">m</code>. בתוך hello world: h, e, l, l, l, d (שישה). האותיות o, w, o, r אינן בטווח, והרווח גם לא."
      },
      "recap": "תנאי מורכב ב-C הוא 1 או 0",
      "recapHtml": "תנאי מורכב ב-C הוא 1 או 0"
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
         "value": "hasChar(s + 1, c)",
         "type": "text",
         "html": "hasChar(s + 1, c)"
        },
        {
         "id": "b",
         "value": "hasChar(s, c)",
         "type": "text",
         "html": "hasChar(s, c)"
        },
        {
         "id": "c",
         "value": "hasChar(s + 1, c) + 1",
         "type": "text",
         "html": "hasChar(s + 1, c) + 1"
        },
        {
         "id": "d",
         "value": "0",
         "type": "text",
         "html": "0"
        }
       ],
       "correctId": "a",
       "explain": "אם התו הנוכחי לא `c`, ממשיכים לחפש בשאר המחרוזת. `hasChar(s, c)` לא מקדמת את המצביע ולכן קורסת. `hasChar(s+1, c) + 1` מחזירה מספר חיובי גם כשהתו לא נמצא. `0` מוותרת על המשך החיפוש, ולכן לא מוצאת תו שבא אחרי המקום הראשון.",
       "promptHtml": "השלימו כך ש-<code class=\"tok\" dir=\"ltr\">hasChar</code> תחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם התו <code class=\"tok\" dir=\"ltr\">c</code> מופיע במחרוזת, אחרת <code class=\"tok\" dir=\"ltr\">0</code>.",
       "explainHtml": "אם התו הנוכחי לא <code class=\"tok\" dir=\"ltr\">c</code>, ממשיכים לחפש בשאר המחרוזת. <code class=\"tok\" dir=\"ltr\">hasChar(s, c)</code> לא מקדמת את המצביע ולכן קורסת. <code class=\"tok\" dir=\"ltr\">hasChar(s+1, c) + 1</code> מחזירה מספר חיובי גם כשהתו לא נמצא. <code class=\"tok\" dir=\"ltr\">0</code> מוותרת על המשך החיפוש, ולכן לא מוצאת תו שבא אחרי המקום הראשון.",
       "linesHtml": [
        "int hasChar(char* s, char c) {",
        "if (*s == '\\0') return 0;",
        "if (*s == c) return 1;",
        "return ___;",
        "}"
       ]
      },
      "recap": "לא מצאנו כאן: ממשיכים לחפש בשאר המחרוזת",
      "recapHtml": "לא מצאנו כאן: ממשיכים לחפש בשאר המחרוזת"
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
       "explain": "אחרי החתימה בא הבסיס. אחר כך `rev(s + 1)` לפני `putchar`, כדי שההדפסה תתבצע בחזרה. אם `putchar` קודם, המחרוזת מודפסת מההתחלה לסוף. אם הבסיס אחרי הקריאה, הקריאות לא נעצרות.",
       "promptHtml": "סדרו את שורות הפונקציה שמדפיסה מחרוזת מהסוף להתחלה.",
       "explainHtml": "אחרי החתימה בא הבסיס. אחר כך <code class=\"tok\" dir=\"ltr\">rev(s + 1)</code> לפני <code class=\"tok\" dir=\"ltr\">putchar</code>, כדי שההדפסה תתבצע בחזרה. אם <code class=\"tok\" dir=\"ltr\">putchar</code> קודם, המחרוזת מודפסת מההתחלה לסוף. אם הבסיס אחרי הקריאה, הקריאות לא נעצרות.",
       "linesHtml": [
        "void rev(char* s) {",
        "if (*s == '\\0') return;",
        "rev(s + 1);",
        "putchar(*s);",
        "}"
       ]
      },
      "recap": "הקריאה לפני ההדפסה = סדר הפוך",
      "recapHtml": "הקריאה לפני ההדפסה = סדר הפוך"
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
       "explain": "כשהתו הנוכחי לא `c`, חייבים לעבור לתו הבא: `cnt(s + 1, c)`. הגרסה השגויה קוראת לעצמה עם אותו `s`, ולכן אם התו הראשון אינו `c` הקריאות לא נעצרות.",
       "promptHtml": "הפונקציה אמורה לספור כמה פעמים התו <code class=\"tok\" dir=\"ltr\">c</code> מופיע במחרוזת. יש בה שורה אחת שגויה. איזו?",
       "explainHtml": "כשהתו הנוכחי לא <code class=\"tok\" dir=\"ltr\">c</code>, חייבים לעבור לתו הבא: <code class=\"tok\" dir=\"ltr\">cnt(s + 1, c)</code>. הגרסה השגויה קוראת לעצמה עם אותו <code class=\"tok\" dir=\"ltr\">s</code>, ולכן אם התו הראשון אינו <code class=\"tok\" dir=\"ltr\">c</code> הקריאות לא נעצרות.",
       "linesHtml": [
        "int cnt(char* s, char c) {",
        "if (*s == '\\0') return 0;",
        "if (*s == c) return 1 + cnt(s + 1, c);",
        "return cnt(s, c);",
        "}"
       ]
      },
      "recap": "בכל ענף מקדמים את המצביע",
      "recapHtml": "בכל ענף מקדמים את המצביע"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🌳",
    "title": "שתי קריאות: עץ קריאות",
    "goal": "לעקוב אחרי פונקציה שקוראת לעצמה פעמיים, לספור קריאות ולהבין למה הזמן מעריכי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>כשפונקציה קוראת לעצמה <b>פעמיים</b> (כמו פיבונאצ'י), הקריאות יוצרות עץ ולא שרשרת.</p>\n<pre><code>int fib(int n) {\n    if (n &lt;= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}</code></pre>\n<div class=\"lesson-ex\">דוגמה: <code>fib(4) = fib(3) + fib(2)</code>. הקריאה <code>fib(3)</code> מתפצלת ל-<code>fib(2)</code> ול-<code>fib(1)</code>, וכן הלאה. הערכים של <code>fib(0..6)</code> הם 0, 1, 1, 2, 3, 5, 8.</div>\n<ul><li>מבצעים את הקריאה הראשונה <b>עד הסוף</b> (כולל כל התת-עץ שלה), ורק אחר כך את השנייה.</li>\n<li>אם יש <code>printf</code> בין שתי הקריאות, הוא מודפס בין שני התת-עצים.</li>\n<li>כשכל קריאה יוצרת שתי קריאות וגודל הבעיה יורד רק ב-1 או 2, מספר הקריאות כמעט מוכפל בכל צעד: סדר גודל <b>מעריכי</b>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(2^n)</annotation></semantics></math></span>.</li></ul>\n<div class=\"lesson-rule\">🔑 לספור קריאות: מציירים את העץ או מונים בעזרת משתנה גלובלי. כל קריאה, כולל קריאות מקרה הבסיס, נספרת.</div>\n<div class=\"lesson-trap\">⚠️ לא כל פונקציה עם שתי קריאות מעריכית אם הן על חצאים נפרדים, אבל כאן הקלט קטן רק ב-1, ולכן כן.</div>"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `w(5)`?\n```c\nint w(int n) {\n    if (n == 0) return 1;\n    if (n == 1) return 2;\n    return w(n - 1) + w(n - 2);\n}\n```",
       "answer": 13,
       "tol": 0,
       "explain": "`w(0)=1`, `w(1)=2`, `w(2)=3`, `w(3)=5`, `w(4)=8`, `w(5)=13`. כל ערך הוא סכום שני הקודמים.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">w(5)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int w(int n) {\n    if (n == 0) return 1;\n    if (n == 1) return 2;\n    return w(n - 1) + w(n - 2);\n}</code></pre>",
       "explainHtml": "<code class=\"tok\" dir=\"ltr\">w(0)=1</code>, <code class=\"tok\" dir=\"ltr\">w(1)=2</code>, <code class=\"tok\" dir=\"ltr\">w(2)=3</code>, <code class=\"tok\" dir=\"ltr\">w(3)=5</code>, <code class=\"tok\" dir=\"ltr\">w(4)=8</code>, <code class=\"tok\" dir=\"ltr\">w(5)=13</code>. כל ערך הוא סכום שני הקודמים."
      },
      "recap": "ממלאים טבלה מהבסיסים כלפי מעלה",
      "recapHtml": "ממלאים טבלה מהבסיסים כלפי מעלה"
     },
     {
      "id": "C07-Q2",
      "step": {
       "type": "numeric",
       "prompt": "כמה קריאות ל-`fib` מתבצעות בסך הכול בהרצת `fib(5)`, כולל הקריאה הראשונה?\n```c\nint calls = 0;\nint fib(int n) {\n    calls++;\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\n```",
       "answer": 15,
       "tol": 0,
       "explain": "מספר הקריאות C(n) מקיים $C(n)=1+C(n-1)+C(n-2)$ כש-$C(0)=C(1)=1$: 1, 1, 3, 5, 9, 15. לכן ל-`fib(5)` יש 15 קריאות.",
       "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">fib</code> מתבצעות בסך הכול בהרצת <code class=\"tok\" dir=\"ltr\">fib(5)</code>, כולל הקריאה הראשונה?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int calls = 0;\nint fib(int n) {\n    calls++;\n    if (n &lt;= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}</code></pre>",
       "explainHtml": "מספר הקריאות C(n) מקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(n)=1+C(n-1)+C(n-2)</annotation></semantics></math></span> כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C(0)=C(1)=1</annotation></semantics></math></span>: 1, 1, 3, 5, 9, 15. לכן ל-<code class=\"tok\" dir=\"ltr\">fib(5)</code> יש 15 קריאות."
      },
      "recap": "קריאות של fib(n) = 1 + קריאות של שני הילדים",
      "recapHtml": "קריאות של fib(n) = 1 + קריאות של שני הילדים"
     },
     {
      "id": "C07-Q3",
      "question": "מה מדפיסה `f(3)`?\n```c\nvoid f(int n) {\n    if (n == 0) return;\n    f(n - 1);\n    printf(\"%d \", n);\n    f(n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`3 2 1 1 2 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 2 1 1 2 3</code>"
       },
       {
        "id": "b",
        "value": "`1 2 3 1 2 3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2 3 1 2 3</code>"
       },
       {
        "id": "c",
        "value": "`1 2 1 3 1 2 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1 2 1 3 1 2 1</code>"
       },
       {
        "id": "d",
        "value": "`3 2 1 3 2 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3 2 1 3 2 1</code>"
       }
      ],
      "correctId": "c",
      "explanation": "ההדפסה בין שתי הקריאות, אז `f(3)` מדפיסה: את כל הפלט של `f(2)`, אחר כך 3, ואחר כך שוב את כל הפלט של `f(2)`. הפלט של `f(2)` הוא `1 2 1` (כי `f(1)` מדפיסה רק 1). התוצאה: `1 2 1 3 1 2 1`.",
      "recap": "פלט f(n) = פלט f(n-1), אחר כך n, אחר כך פלט f(n-1)",
      "questionHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">f(3)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void f(int n) {\n    if (n == 0) return;\n    f(n - 1);\n    printf(\"%d \", n);\n    f(n - 1);\n}</code></pre>",
      "explanationHtml": "ההדפסה בין שתי הקריאות, אז <code class=\"tok\" dir=\"ltr\">f(3)</code> מדפיסה: את כל הפלט של <code class=\"tok\" dir=\"ltr\">f(2)</code>, אחר כך 3, ואחר כך שוב את כל הפלט של <code class=\"tok\" dir=\"ltr\">f(2)</code>. הפלט של <code class=\"tok\" dir=\"ltr\">f(2)</code> הוא <code class=\"tok\" dir=\"ltr\">1 2 1</code> (כי <code class=\"tok\" dir=\"ltr\">f(1)</code> מדפיסה רק 1). התוצאה: <code class=\"tok\" dir=\"ltr\">1 2 1 3 1 2 1</code>.",
      "recapHtml": "פלט f(n) = פלט f(n-1), אחר כך n, אחר כך פלט f(n-1)"
     },
     {
      "id": "C07-Q4",
      "step": {
       "type": "numeric",
       "prompt": "כמה קריאות ל-`f` מתבצעות בהרצת `f(4)`, כולל הראשונה וקריאות מקרה הבסיס?\n```c\nint calls = 0;\nvoid f(int n) {\n    calls++;\n    if (n == 0) return;\n    f(n - 1);\n    f(n - 1);\n}\n```",
       "answer": 31,
       "tol": 0,
       "explain": "אחת בקריאה עצמה ועוד שתיים של `f(3)`: $C(n)=1+2C(n-1)$ עם $C(0)=1$ נותן 1, 3, 7, 15, 31. כלומר $2^{n+1}-1$.",
       "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">f</code> מתבצעות בהרצת <code class=\"tok\" dir=\"ltr\">f(4)</code>, כולל הראשונה וקריאות מקרה הבסיס?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int calls = 0;\nvoid f(int n) {\n    calls++;\n    if (n == 0) return;\n    f(n - 1);\n    f(n - 1);\n}</code></pre>",
       "explainHtml": "אחת בקריאה עצמה ועוד שתיים של <code class=\"tok\" dir=\"ltr\">f(3)</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>C</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">C(n)=1+2C(n-1)</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C(0)=1</annotation></semantics></math></span> נותן 1, 3, 7, 15, 31. כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{n+1}-1</annotation></semantics></math></span>."
      },
      "recap": "כל קריאה יוצרת שתיים: מספר הקריאות מוכפל בכל שלב",
      "recapHtml": "כל קריאה יוצרת שתיים: מספר הקריאות מוכפל בכל שלב"
     },
     {
      "id": "C07-Q5",
      "question": "מה סדר הגודל של זמן הריצה של `f(n)` מהשאלה הקודמת?",
      "options": [
       {
        "id": "a",
        "value": "$O(n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$O(n^2)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$O(2^n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(2^n)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$O(\\log n)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "בכל רמה יש פי שניים יותר קריאות מהרמה שמעליה, ויש $n$ רמות. סך הקריאות $2^{n+1}-1$: מעריכי. ב-$O(n)$ או $O(n^2)$ הקריאות היו גדלות לאט הרבה יותר (לדוגמה, ל-$n=20$ יש יותר ממיליון קריאות). ב-$O(\\log n)$ היה צריך לחצות את הקלט.",
      "recap": "שתי קריאות על n-1 = סדר גודל מעריכי",
      "questionHtml": "מה סדר הגודל של זמן הריצה של <code class=\"tok\" dir=\"ltr\">f(n)</code> מהשאלה הקודמת?",
      "explanationHtml": "בכל רמה יש פי שניים יותר קריאות מהרמה שמעליה, ויש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> רמות. סך הקריאות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{n+1}-1</annotation></semantics></math></span>: מעריכי. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> הקריאות היו גדלות לאט הרבה יותר (לדוגמה, ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">n=20</annotation></semantics></math></span> יש יותר ממיליון קריאות). ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span> היה צריך לחצות את הקלט.",
      "recapHtml": "שתי קריאות על n-1 = סדר גודל מעריכי"
     },
     {
      "id": "C07-Q6",
      "step": {
       "type": "fillblank",
       "prompt": "השלימו את שורת ההחזרה כך ש-`fib` תחזיר את איבר מספר $n$ של סדרת פיבונאצ'י ($0, 1, 1, 2, 3, 5, \\ldots$).",
       "lines": [
        "int fib(int n) {",
        "if (n <= 1) return n;",
        "return ___;",
        "}"
       ],
       "blankIndex": 2,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "fib(n - 1) + fib(n - 1)",
         "type": "text",
         "html": "fib(n - 1) + fib(n - 1)"
        },
        {
         "id": "b",
         "value": "fib(n - 1) * fib(n - 2)",
         "type": "text",
         "html": "fib(n - 1) * fib(n - 2)"
        },
        {
         "id": "c",
         "value": "fib(n - 1) + fib(n - 2)",
         "type": "text",
         "html": "fib(n - 1) + fib(n - 2)"
        },
        {
         "id": "d",
         "value": "fib(n - 2) + fib(n - 3)",
         "type": "text",
         "html": "fib(n - 2) + fib(n - 3)"
        }
       ],
       "correctId": "c",
       "explain": "כל איבר הוא סכום שני הקודמים. הגרסה הראשונה נותנת $2^{n-1}$ ל-$n \\ge 1$ (למשל 4 במקום 2 ב-`fib(3)`). המכפלה נותנת 0 כבר ב-`fib(2)`. הגרסה האחרונה נותנת $-1$ ב-`fib(2)` כי `fib(-1)` מחזירה $-1$.",
       "promptHtml": "השלימו את שורת ההחזרה כך ש-<code class=\"tok\" dir=\"ltr\">fib</code> תחזיר את איבר מספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> של סדרת פיבונאצ'י (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">0, 1, 1, 2, 3, 5, \\ldots</annotation></semantics></math></span>).",
       "explainHtml": "כל איבר הוא סכום שני הקודמים. הגרסה הראשונה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{n-1}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 1</annotation></semantics></math></span> (למשל 4 במקום 2 ב-<code class=\"tok\" dir=\"ltr\">fib(3)</code>). המכפלה נותנת 0 כבר ב-<code class=\"tok\" dir=\"ltr\">fib(2)</code>. הגרסה האחרונה נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">-1</annotation></semantics></math></span> ב-<code class=\"tok\" dir=\"ltr\">fib(2)</code> כי <code class=\"tok\" dir=\"ltr\">fib(-1)</code> מחזירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">-1</annotation></semantics></math></span>.",
       "linesHtml": [
        "int fib(int n) {",
        "if (n &lt;= 1) return n;",
        "return ___;",
        "}"
       ]
      },
      "recap": "פיבונאצ'י: סכום שני הקודמים",
      "recapHtml": "פיבונאצ'י: סכום שני הקודמים"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🪤",
    "title": "מלכודות: בסיס שלא מושג ועוד",
    "goal": "לזהות רקורסיה אינסופית, בסיס שהצעד מדלג מעליו, ומשתנים שנשמרים בין קריאות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>רוב הטעויות ברקורסיה הן ארבע:</p>\n<ul><li><b>בסיס חסר או שלא מושג</b>: הקריאות לא נעצרות והתוכנית קורסת.</li>\n<li><b>צעד שמדלג מעל הבסיס</b>: אם מקטינים ב-2 ובסיס הוא <code>n == 0</code>, הקלט האי-זוגי עובר ל-1, -1, -3 ולא עוצר אף פעם. הפתרון הוא בסיס רחב יותר, כמו <code>n &lt;= 0</code>.</li>\n<li><b>החזרה חסרה או ערך שנזרק</b>: קוראים רקורסיבית אבל לא משתמשים בתוצאה.</li>\n<li><b>משתנה גלובלי או <code>static</code></b>: הוא נשמר בין הקריאות, גם בין שתי קריאות נפרדות לפונקציה. פרמטר רגיל לא.</li></ul>\n<pre><code>int f(int n) {\n    if (n &lt;= 0) return 0;          /* בסיס רחב: עוצר גם כש-n קופץ מעל 0 */\n    return 1 + f(n - 2);\n}</code></pre>\n<div class=\"lesson-rule\">🔑 שאלו תמיד: האם כל הקריאות מגיעות בסוף לבסיס, לכל קלט חוקי? נסו קלט זוגי, אי-זוגי, 0 וקטן.</div>"
    },
    "questions": [
     {
      "id": "C08-Q1",
      "question": "מה קורה בהרצת `f(5)`?\n```c\nint f(int n) {\n    if (n == 0) return 0;\n    return n + f(n - 2);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "היא מחזירה `9`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">9</code>"
       },
       {
        "id": "b",
        "value": "היא מחזירה `0`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>"
       },
       {
        "id": "c",
        "value": "היא מחזירה `5`",
        "type": "text",
        "html": "היא מחזירה <code class=\"tok\" dir=\"ltr\">5</code>"
       },
       {
        "id": "d",
        "value": "היא קורסת: ערכי n הם 5, 3, 1, -1, ... ולא מגיעים ל-0",
        "type": "text",
        "html": "היא קורסת: ערכי n הם 5, 3, 1, -1, ... ולא מגיעים ל-0"
       }
      ],
      "correctId": "d",
      "explanation": "ב-5 מתחילים ויורדים ב-2: 5, 3, 1, -1, -3, ... הערך 0 לעולם לא מושג, ולכן הקריאות לא נגמרות והתוכנית קורסת. לעומת זאת `f(6)` תקינה ומחזירה 12 (6, 4, 2, 0). 9 הוא הסכום 5+3+1 אילו הבסיס היה `n <= 0`.",
      "recap": "בסיס n == 0 לא מושג כשהצעד מקטין ב-2 מקלט אי-זוגי",
      "questionHtml": "מה קורה בהרצת <code class=\"tok\" dir=\"ltr\">f(5)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    if (n == 0) return 0;\n    return n + f(n - 2);\n}</code></pre>",
      "explanationHtml": "ב-5 מתחילים ויורדים ב-2: 5, 3, 1, -1, -3, ... הערך 0 לעולם לא מושג, ולכן הקריאות לא נגמרות והתוכנית קורסת. לעומת זאת <code class=\"tok\" dir=\"ltr\">f(6)</code> תקינה ומחזירה 12 (6, 4, 2, 0). 9 הוא הסכום 5+3+1 אילו הבסיס היה <code class=\"tok\" dir=\"ltr\">n &lt;= 0</code>.",
      "recapHtml": "בסיס n == 0 לא מושג כשהצעד מקטין ב-2 מקלט אי-זוגי"
     },
     {
      "id": "C08-Q2",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `f(10)`?\n```c\nint f(int n) {\n    if (n <= 0) return 0;\n    return 1 + f(n - 3);\n}\n```",
       "answer": 4,
       "tol": 0,
       "explain": "הקריאות: 10, 7, 4, 1, ואז `f(-2)` שעוצרת (כי $-2 \\le 0$). ארבע הקריאות הראשונות מוסיפות 1 כל אחת: 4.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f(10)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    if (n &lt;= 0) return 0;\n    return 1 + f(n - 3);\n}</code></pre>",
       "explainHtml": "הקריאות: 10, 7, 4, 1, ואז <code class=\"tok\" dir=\"ltr\">f(-2)</code> שעוצרת (כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>2</mn><mo>≤</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-2 \\le 0</annotation></semantics></math></span>). ארבע הקריאות הראשונות מוסיפות 1 כל אחת: 4."
      },
      "recap": "בסיס n <= 0 תופס גם קפיצה מעל 0",
      "recapHtml": "בסיס n &lt;= 0 תופס גם קפיצה מעל 0"
     },
     {
      "id": "C08-Q3",
      "step": {
       "type": "fillblank",
       "prompt": "הפונקציה אמורה לספור כמה מהמספרים $n, n-2, n-4, \\ldots$ הם חיוביים (לכל $n \\ge 0$). איזה תנאי בסיס מתאים?",
       "lines": [
        "int f(int n) {",
        "if (___) return 0;",
        "return 1 + f(n - 2);",
        "}"
       ],
       "blankIndex": 1,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "n <= 0",
         "type": "text",
         "html": "n &lt;= 0"
        },
        {
         "id": "b",
         "value": "n < 0",
         "type": "text",
         "html": "n &lt; 0"
        },
        {
         "id": "c",
         "value": "n == 0",
         "type": "text",
         "html": "n == 0"
        },
        {
         "id": "d",
         "value": "n == 1",
         "type": "text",
         "html": "n == 1"
        }
       ],
       "correctId": "a",
       "explain": "הבסיס חייב לתפוס כל ערך שהצעד יכול להגיע אליו. `n == 0` לא עוצר מקלט אי-זוגי (3, 1, -1, ...), `n == 1` לא עוצר מקלט זוגי, ו-`n < 0` עוצר אבל סופר גם את 0 כאילו הוא חיובי: `f(4)` מחזירה 3 במקום 2.",
       "promptHtml": "הפונקציה אמורה לספור כמה מהמספרים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo separator=\"true\">,</mo><mi>n</mi><mo>−</mo><mn>4</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">n, n-2, n-4, \\ldots</annotation></semantics></math></span> הם חיוביים (לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 0</annotation></semantics></math></span>). איזה תנאי בסיס מתאים?",
       "explainHtml": "הבסיס חייב לתפוס כל ערך שהצעד יכול להגיע אליו. <code class=\"tok\" dir=\"ltr\">n == 0</code> לא עוצר מקלט אי-זוגי (3, 1, -1, ...), <code class=\"tok\" dir=\"ltr\">n == 1</code> לא עוצר מקלט זוגי, ו-<code class=\"tok\" dir=\"ltr\">n &lt; 0</code> עוצר אבל סופר גם את 0 כאילו הוא חיובי: <code class=\"tok\" dir=\"ltr\">f(4)</code> מחזירה 3 במקום 2.",
       "linesHtml": [
        "int f(int n) {",
        "if (___) return 0;",
        "return 1 + f(n - 2);",
        "}"
       ]
      },
      "recap": "הבסיס צריך לכסות את כל הערכים שהצעד מגיע אליהם",
      "recapHtml": "הבסיס צריך לכסות את כל הערכים שהצעד מגיע אליהם"
     },
     {
      "id": "C08-Q4",
      "question": "קוראים `f(3)` ואחר כך (בנפרד) מדפיסים מה ש-`f(2)` מחזירה. מה מודפס?\n```c\nint f(int n) {\n    static int c = 0;\n    c++;\n    if (n == 0) return c;\n    return f(n - 1);\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">3</code>"
       },
       {
        "id": "b",
        "value": "`4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">4</code>"
       },
       {
        "id": "c",
        "value": "`7`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">7</code>"
       },
       {
        "id": "d",
        "value": "`8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">8</code>"
       }
      ],
      "correctId": "c",
      "explanation": "המשתנה `static` נשאר בין הקריאות. הקריאה `f(3)` מבצעת 4 כניסות (n=3,2,1,0), אז `c` הוא 4. אחר כך `f(2)` מוסיפה עוד 3 כניסות (n=2,1,0) ומחזירה 7. התשובה 3 היא מה שהיה אם `c` היה מתאפס, 4 הוא הערך אחרי הקריאה הראשונה בלבד.",
      "recap": "static נשמר גם בין קריאות נפרדות",
      "questionHtml": "קוראים <code class=\"tok\" dir=\"ltr\">f(3)</code> ואחר כך (בנפרד) מדפיסים מה ש-<code class=\"tok\" dir=\"ltr\">f(2)</code> מחזירה. מה מודפס?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f(int n) {\n    static int c = 0;\n    c++;\n    if (n == 0) return c;\n    return f(n - 1);\n}</code></pre>",
      "explanationHtml": "המשתנה <code class=\"tok\" dir=\"ltr\">static</code> נשאר בין הקריאות. הקריאה <code class=\"tok\" dir=\"ltr\">f(3)</code> מבצעת 4 כניסות (n=3,2,1,0), אז <code class=\"tok\" dir=\"ltr\">c</code> הוא 4. אחר כך <code class=\"tok\" dir=\"ltr\">f(2)</code> מוסיפה עוד 3 כניסות (n=2,1,0) ומחזירה 7. התשובה 3 היא מה שהיה אם <code class=\"tok\" dir=\"ltr\">c</code> היה מתאפס, 4 הוא הערך אחרי הקריאה הראשונה בלבד.",
      "recapHtml": "static נשמר גם בין קריאות נפרדות"
     },
     {
      "id": "C08-Q5",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר את סכום המספרים מ-1 עד $n$. יש בה שורה אחת שגויה. איזו?",
       "lines": [
        "int sumTo(int n) {",
        "if (n == 0) return 0;",
        "return sumTo(n - 1);",
        "}"
       ],
       "bugIndex": 2,
       "code": true,
       "explain": "הקריאה הרקורסיבית מחזירה את הסכום של השאר, אבל השורה לא מוסיפה את `n` עצמו. התוצאה תמיד 0. התיקון: `return n + sumTo(n - 1);`.",
       "promptHtml": "הפונקציה אמורה להחזיר את סכום המספרים מ-1 עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. יש בה שורה אחת שגויה. איזו?",
       "explainHtml": "הקריאה הרקורסיבית מחזירה את הסכום של השאר, אבל השורה לא מוסיפה את <code class=\"tok\" dir=\"ltr\">n</code> עצמו. התוצאה תמיד 0. התיקון: <code class=\"tok\" dir=\"ltr\">return n + sumTo(n - 1);</code>.",
       "linesHtml": [
        "int sumTo(int n) {",
        "if (n == 0) return 0;",
        "return sumTo(n - 1);",
        "}"
       ]
      },
      "recap": "משתמשים בערך שהקריאה מחזירה ומוסיפים את החלק הנוכחי",
      "recapHtml": "משתמשים בערך שהקריאה מחזירה ומוסיפים את החלק הנוכחי"
     }
    ]
   },
   {
    "id": "C09",
    "order": 9,
    "icon": "✍️",
    "title": "לכתוב פונקציה רקורסיבית",
    "goal": "לכתוב פונקציה רקורסיבית מאפס לפי שלוש שאלות: בסיס, צעד, וחיבור.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>כשצריך <b>לכתוב</b> פונקציה רקורסיבית, שואלים שלוש שאלות לפי הסדר:</p>\n<ol><li><b>בסיס</b>: מהו הקלט הקטן ביותר, ומה התשובה עליו? (מספר 0 או ספרה אחת, מערך קטן מ-2 איברים, מחרוזת ריקה.)</li>\n<li><b>צעד</b>: איך מקטינים את הקלט? (<code>n / 10</code>, <code>n - 1</code>, <code>a + 1</code> עם <code>n - 1</code>, <code>s + 1</code>.)</li>\n<li><b>חיבור</b>: איך משלבים את תשובת הקריאה עם החלק שהסרתי? (חיבור, כפל, השוואה.)</li></ol>\n<div class=\"lesson-ex\">דוגמה: מספר האחדות בייצוג בינארי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. בסיס: <code>n == 0</code> נותן 0. צעד: <code>n / 2</code>. חיבור: הביט האחרון <code>n % 2</code> ועוד התשובה לשאר.</div>\n<pre><code>int bitOnes(int n) {\n    if (n == 0) return 0;\n    return n % 2 + bitOnes(n / 2);\n}</code></pre>\n<p>אפשר גם להקטין בחצי, ולא רק ב-1: <code>power(x, n)</code> עם <code>n / 2</code> מבצעת הרבה פחות קריאות.</p>\n<div class=\"lesson-rule\">🔑 בדקו את הפונקציה על שלושה קלטים: הקטן ביותר (בסיס), קלט קטן אחד מעליו, וקלט רגיל.</div>\n<div class=\"lesson-trap\">⚠️ במבחן לעתים אסור להשתמש בלולאה או בפונקציית עזר. הרקורסיה צריכה לעשות את כל העבודה.</div>"
    },
    "questions": [
     {
      "id": "C09-Q1",
      "step": {
       "type": "order",
       "prompt": "סדרו את שורות הפונקציה, שמחזירה כמה ביטים 1 יש בייצוג הבינארי של $n \\ge 0$.",
       "lines": [
        "int onesBin(int n) {",
        "if (n == 0) return 0;",
        "return n % 2 + onesBin(n / 2);",
        "}"
       ],
       "code": true,
       "explain": "הבסיס `n == 0` קודם, כדי שהקריאות ייעצרו. בצעד מוסיפים את הביט האחרון (`n % 2`) ועוברים ל-`n / 2`. אם הצעד קודם לבסיס, `onesBin(0)` ממשיכה בלי סוף.",
       "promptHtml": "סדרו את שורות הפונקציה, שמחזירה כמה ביטים 1 יש בייצוג הבינארי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 0</annotation></semantics></math></span>.",
       "explainHtml": "הבסיס <code class=\"tok\" dir=\"ltr\">n == 0</code> קודם, כדי שהקריאות ייעצרו. בצעד מוסיפים את הביט האחרון (<code class=\"tok\" dir=\"ltr\">n % 2</code>) ועוברים ל-<code class=\"tok\" dir=\"ltr\">n / 2</code>. אם הצעד קודם לבסיס, <code class=\"tok\" dir=\"ltr\">onesBin(0)</code> ממשיכה בלי סוף.",
       "linesHtml": [
        "int onesBin(int n) {",
        "if (n == 0) return 0;",
        "return n % 2 + onesBin(n / 2);",
        "}"
       ]
      },
      "recap": "בסיס, אחר כך ביט אחרון + קריאה על n/2",
      "recapHtml": "בסיס, אחר כך ביט אחרון + קריאה על n/2"
     },
     {
      "id": "C09-Q2",
      "step": {
       "type": "fillblank",
       "prompt": "השלימו כך שהפונקציה תחזיר `1` אם המערך פלינדרום (נקרא אותו דבר משני הכיוונים), אחרת `0`.",
       "lines": [
        "int isPal(int* arr, int n) {",
        "if (n <= 1) return 1;",
        "if (arr[0] != arr[n - 1]) return 0;",
        "return isPal(arr + 1, ___);",
        "}"
       ],
       "blankIndex": 3,
       "code": true,
       "options": [
        {
         "id": "a",
         "value": "n - 1",
         "type": "text",
         "html": "n - 1"
        },
        {
         "id": "b",
         "value": "n - 2",
         "type": "text",
         "html": "n - 2"
        },
        {
         "id": "c",
         "value": "n - 3",
         "type": "text",
         "html": "n - 3"
        },
        {
         "id": "d",
         "value": "n / 2",
         "type": "text",
         "html": "n / 2"
        }
       ],
       "correctId": "b",
       "explain": "משווים את הראשון לאחרון, ואז ממשיכים על הקטע הפנימי: מדלגים על הראשון (`arr + 1`) ועל האחרון, כלומר הגודל קטן ב-2. עם `n - 1` הקטע הפנימי כולל גם את האחרון, ואז `{1,2,2,1}` נכשל. עם `n - 3` מדלגים על אחד מהאיברים הפנימיים וחוזרים 1 בטעות על `{1,2,3,1}`. עם `n / 2` הגודל הפנימי שגוי: `{1,2,3,3,2,1}` נכשל.",
       "promptHtml": "השלימו כך שהפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם המערך פלינדרום (נקרא אותו דבר משני הכיוונים), אחרת <code class=\"tok\" dir=\"ltr\">0</code>.",
       "explainHtml": "משווים את הראשון לאחרון, ואז ממשיכים על הקטע הפנימי: מדלגים על הראשון (<code class=\"tok\" dir=\"ltr\">arr + 1</code>) ועל האחרון, כלומר הגודל קטן ב-2. עם <code class=\"tok\" dir=\"ltr\">n - 1</code> הקטע הפנימי כולל גם את האחרון, ואז <code class=\"tok\" dir=\"ltr\">{1,2,2,1}</code> נכשל. עם <code class=\"tok\" dir=\"ltr\">n - 3</code> מדלגים על אחד מהאיברים הפנימיים וחוזרים 1 בטעות על <code class=\"tok\" dir=\"ltr\">{1,2,3,1}</code>. עם <code class=\"tok\" dir=\"ltr\">n / 2</code> הגודל הפנימי שגוי: <code class=\"tok\" dir=\"ltr\">{1,2,3,3,2,1}</code> נכשל.",
       "linesHtml": [
        "int isPal(int* arr, int n) {",
        "if (n &lt;= 1) return 1;",
        "if (arr[0] != arr[n - 1]) return 0;",
        "return isPal(arr + 1, ___);",
        "}"
       ]
      },
      "recap": "בפנים: arr + 1 ו-n - 2",
      "recapHtml": "בפנים: arr + 1 ו-n - 2"
     },
     {
      "id": "C09-Q3",
      "step": {
       "type": "findbug",
       "prompt": "הפונקציה אמורה להחזיר $x^n$ ($n \\ge 0$). יש בה שורה אחת שגויה. איזו?",
       "lines": [
        "int power(int x, int n) {",
        "if (n == 0) return 1;",
        "return x + power(x, n - 1);",
        "}"
       ],
       "bugIndex": 2,
       "code": true,
       "explain": "חזקה היא כפל חוזר: $x^n = x \\cdot x^{n-1}$. השורה השגויה מחברת במקום לכפול, ולכן נותנת $x \\cdot n + 1$ ולא $x^n$.",
       "promptHtml": "הפונקציה אמורה להחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">x^n</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 0</annotation></semantics></math></span>). יש בה שורה אחת שגויה. איזו?",
       "explainHtml": "חזקה היא כפל חוזר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mi>x</mi><mo>⋅</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">x^n = x \\cdot x^{n-1}</annotation></semantics></math></span>. השורה השגויה מחברת במקום לכפול, ולכן נותנת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>⋅</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x \\cdot n + 1</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">x^n</annotation></semantics></math></span>.",
       "linesHtml": [
        "int power(int x, int n) {",
        "if (n == 0) return 1;",
        "return x + power(x, n - 1);",
        "}"
       ]
      },
      "recap": "חזקה = כפל, והבסיס x^0 = 1",
      "recapHtml": "חזקה = כפל, והבסיס x^0 = 1"
     },
     {
      "id": "C09-Q4",
      "question": "השלימו את השורה החסרה כך ש-`prodDigits(n)` תחזיר את מכפלת הספרות של $n \\ge 1$ (למשל 234 נותן 24).\n```c\nint prodDigits(int n) {\n    if (n < 10) return n;\n    return ___;\n}\n```",
      "options": [
       {
        "id": "a",
        "value": "`n % 10 + prodDigits(n / 10)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n % 10 + prodDigits(n / 10)</code>"
       },
       {
        "id": "b",
        "value": "`n / 10 * prodDigits(n % 10)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n / 10 * prodDigits(n % 10)</code>"
       },
       {
        "id": "c",
        "value": "`n % 10 * prodDigits(n / 10)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">n % 10 * prodDigits(n / 10)</code>"
       },
       {
        "id": "d",
        "value": "`prodDigits(n / 10)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">prodDigits(n / 10)</code>"
       }
      ],
      "correctId": "c",
      "explanation": "הספרה האחרונה `n % 10` כפול המכפלה של שאר הספרות. החיבור נותן סכום. `n / 10 * prodDigits(n % 10)` מכפיל את כל השאר (לא את הספרות שלו) בספרה האחרונה: עבור 234 מקבלים $23 \\cdot 4 = 92$ ולא 24. והרביעית פשוט זורקת את הספרה האחרונה.",
      "recap": "בסיס ספרה אחת, צעד: ספרה אחרונה כפול השאר",
      "questionHtml": "השלימו את השורה החסרה כך ש-<code class=\"tok\" dir=\"ltr\">prodDigits(n)</code> תחזיר את מכפלת הספרות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n \\ge 1</annotation></semantics></math></span> (למשל 234 נותן 24).<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int prodDigits(int n) {\n    if (n &lt; 10) return n;\n    return ___;\n}</code></pre>",
      "explanationHtml": "הספרה האחרונה <code class=\"tok\" dir=\"ltr\">n % 10</code> כפול המכפלה של שאר הספרות. החיבור נותן סכום. <code class=\"tok\" dir=\"ltr\">n / 10 * prodDigits(n % 10)</code> מכפיל את כל השאר (לא את הספרות שלו) בספרה האחרונה: עבור 234 מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>23</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>92</mn></mrow><annotation encoding=\"application/x-tex\">23 \\cdot 4 = 92</annotation></semantics></math></span> ולא 24. והרביעית פשוט זורקת את הספרה האחרונה.",
      "recapHtml": "בסיס ספרה אחת, צעד: ספרה אחרונה כפול השאר"
     },
     {
      "id": "C09-Q5",
      "step": {
       "type": "numeric",
       "prompt": "מה מחזירה `g(3, 5)`?\n```c\nint g(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 == 0) {\n        int h = g(x, n / 2);\n        return h * h;\n    }\n    return x * g(x, n - 1);\n}\n```",
       "answer": 243,
       "tol": 0,
       "explain": "הפונקציה מחשבת $x^n$ בחצי מהקריאות: `g(3,5) = 3 * g(3,4)`, `g(3,4) = g(3,2)^2`, `g(3,2) = g(3,1)^2`, `g(3,1) = 3 * g(3,0) = 3`. לכן `g(3,2)=9`, `g(3,4)=81`, `g(3,5)=243`, כלומר $3^5$.",
       "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">g(3, 5)</code>?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int g(int x, int n) {\n    if (n == 0) return 1;\n    if (n % 2 == 0) {\n        int h = g(x, n / 2);\n        return h * h;\n    }\n    return x * g(x, n - 1);\n}</code></pre>",
       "explainHtml": "הפונקציה מחשבת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>x</mi><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">x^n</annotation></semantics></math></span> בחצי מהקריאות: <code class=\"tok\" dir=\"ltr\">g(3,5) = 3 * g(3,4)</code>, <code class=\"tok\" dir=\"ltr\">g(3,4) = g(3,2)^2</code>, <code class=\"tok\" dir=\"ltr\">g(3,2) = g(3,1)^2</code>, <code class=\"tok\" dir=\"ltr\">g(3,1) = 3 * g(3,0) = 3</code>. לכן <code class=\"tok\" dir=\"ltr\">g(3,2)=9</code>, <code class=\"tok\" dir=\"ltr\">g(3,4)=81</code>, <code class=\"tok\" dir=\"ltr\">g(3,5)=243</code>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>3</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">3^5</annotation></semantics></math></span>."
      },
      "recap": "אם n זוגי מעלים בריבוע את התוצאה על n/2",
      "recapHtml": "אם n זוגי מעלים בריבוע את התוצאה על n/2"
     },
     {
      "bankId": "19A-A-Q2",
      "recap": "פלינדרום: משווים ראשון לאחרון, ממשיכים עם arr + 1 ו-n - 2",
      "recapHtml": "פלינדרום: משווים ראשון לאחרון, ממשיכים עם arr + 1 ו-n - 2"
     }
    ]
   },
   {
    "id": "C10",
    "order": 10,
    "icon": "🏆",
    "title": "מבחן גמר: שאלות אמיתיות",
    "goal": "לפתור שאלות רקורסיה אמיתיות מהמבחנים, בלי רמזים.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "<p>זה מבחן הגמר של הקורס: שש שאלות אמיתיות מהמאגר. חלקן \"מה מחזירה הפונקציה\" וחלקן \"כתבו פונקציה רקורסיבית\".</p>\n<div class=\"lesson-rule\">🔑 עקיבה: טבלת קריאות ואז ערכים מוחזרים מלמטה למעלה. כתיבה: בסיס, צעד, חיבור, ובדיקה על הקלט הקטן ביותר.</div>\n<div class=\"lesson-trap\">⚠️ בשאלות כתיבה בודקים תמיד את הבסיס (מערך ריק או באורך 1, מחרוזת ריקה, מספר 0 או ספרה אחת) ואת היעילות שנדרשת.</div>"
    },
    "questions": [
     {
      "bankId": "19A-A-Q1",
      "recap": "הפונקציה מחברת את x פעמים y: מכפלה",
      "recapHtml": "הפונקציה מחברת את x פעמים y: מכפלה"
     },
     {
      "bankId": "24A-A-Q3",
      "recap": "ביט אחרון num % 2 + קריאה על num / 2",
      "recapHtml": "ביט אחרון num % 2 + קריאה על num / 2"
     },
     {
      "bankId": "22A-A-Q2",
      "recap": "1 + קריאה על a + 1 כל עוד a[0] < a[1], אחרת 1",
      "recapHtml": "1 + קריאה על a + 1 כל עוד a[0] &lt; a[1], אחרת 1"
     },
     {
      "bankId": "25A-A-Q3",
      "recap": "בסיס סוף מחרוזת; 1 + קריאה כשהתו שווה",
      "recapHtml": "בסיס סוף מחרוזת; 1 + קריאה כשהתו שווה"
     },
     {
      "bankId": "22A-B-Q2",
      "recap": "שני מצביעים: i ו-j מתקרבים, סכום גדול מ-k מקטין את j",
      "recapHtml": "שני מצביעים: i ו-j מתקרבים, סכום גדול מ-k מקטין את j"
     },
     {
      "bankId": "20A-A-Q2",
      "recap": "גימטרייה: gematria[*str - 'a'] + קריאה על str + 1",
      "recapHtml": "גימטרייה: gematria[*str - 'a'] + קריאה על str + 1"
     }
    ]
   }
  ]
 }
};
