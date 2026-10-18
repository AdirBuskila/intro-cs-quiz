/* c_strings course, level C06 - מערך עזר של 26 מונים */
COURSE_LEVEL("c_strings", {
  "id": "C06",
  "order": 6,
  "icon": "🧮",
  "title": "מערך עזר של 26 מונים",
  "goal": "אחרי השלב הזה תוכלו לספור אותיות במעבר אחד ולפתור אנגרמה, אות שכיחה ואות יחידה בזמן ליניארי.",
  "source": "ai-verified",
  lesson: { html: String.raw`
<p>כשצריך לדעת <b>כמה פעמים</b> כל אות מופיעה, לא בודקים כל אות מול כל המחרוזת. מחזיקים <b>מערך מונים</b> עם תא אחד לכל אות, ועוברים על המחרוזת פעם אחת.</p>
<pre>int cnt[26] = {0};                 /* a counter per letter, all zero */
for (int i = 0; s[i] != '\0'; i++)
    cnt[s[i] - 'a']++;              /* the letter's index is c - 'a' */</pre>
<p>אחרי הלולאה <code>cnt[0]</code> הוא מספר ה-<code>'a'</code>, <code>cnt[1]</code> מספר ה-<code>'b'</code>, וכן הלאה. האינדקס של אות הוא <code>c - 'a'</code> (שלב 3).</p>
<div class="lesson-ex">דוגמה: <code>"banana"</code>. אחרי הספירה: <code>cnt['a'-'a'] = 3</code>, <code>cnt['b'-'a'] = 1</code>, <code>cnt['n'-'a'] = 2</code>, וכל שאר התאים 0.</div>
<div class="lesson-rule">🔑 סיבוכיות: מעבר אחד על המחרוזת ועוד לכל היותר 26 צעדים. המערך קבוע (26 תאים), ולכן זמן הריצה הוא $O(n)$ וזיכרון העזר $O(1)$. התנאי: המחרוזת מכילה רק אותיות קטנות.</div>
<h3>מה עושים עם המונים</h3>
<ul>
<li><b>האות השכיחה ביותר:</b> מחפשים את האינדקס עם המונה הגדול. עם <code>cnt[i] &gt; cnt[best]</code> (גדול ממש) בתיקו נשארת האות הקטנה יותר.</li>
<li><b>אות ראשונה שלא חוזרת:</b> עוברים על המחרוזת עצמה (כדי לשמור על הסדר) ובודקים אצל כל תו אם המונה שלו 1.</li>
<li><b>אנגרמה:</b> שתי מחרוזות הן אנגרמות אם יש להן אותם מונים: מעלים לפי הראשונה, מורידים לפי השנייה, ובודקים שכל המונים חזרו ל-0.</li>
</ul>
<pre>int isAnagram(char *a, char *b) {
    int cnt[26] = {0}, i;
    for (i = 0; a[i] != '\0'; i++) cnt[a[i] - 'a']++;
    for (i = 0; b[i] != '\0'; i++) cnt[b[i] - 'a']--;
    for (i = 0; i &lt; 26; i++)
        if (cnt[i] != 0) return 0;
    return 1;
}</pre>
<div class="lesson-trap">⚠️ האינדקס הוא <code>s[i] - 'a'</code> ולא <code>s[i]</code> ולא <code>i</code>. ולא לשכוח <code>= {0}</code>: מערך מקומי בלי איפוס מכיל זבל.</div>
` },
  questions: [
  {
    "id": "C06-Q1",
    "step": {
      "type": "numeric",
      "prompt": "מה ידפיס הקוד?\n```c\nchar s[] = \"abracadabra\";\nint cnt[26] = {0};\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nprintf(\"%d\", cnt['a' - 'a']);\n```",
      "answer": 5,
      "tol": 0,
      "explain": "במחרוזת `abracadabra` האות `a` מופיעה בעמדות 0, 3, 5, 7 ו-10: חמש פעמים."
    },
    "recap": "cnt[c - 'a'] = כמה פעמים c הופיעה"
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
      "explain": "קודם מגדירים ומאפסים את המונים, אחר כך סופרים לפי שתי המחרוזות, אחר כך בודקים שכולם חזרו ל-0, ורק בסוף מחזירים 1. בדיקה לפני הספירה הייתה עוברת תמיד (הכול 0)."
    },
    "recap": "אנגרמה: ++ לפי a, -- לפי b, ובדיקה שהכול 0"
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
      "explain": "במקום להוריד את המונים לפי המחרוזת השנייה (`--`), השורה מעלה אותם (`++`). בסוף כל מונה הוא כפול ממה שהיה, והבדיקה `cnt[i] != 0` נכשלת תמיד."
    },
    "recap": "לפי המחרוזת השנייה מורידים"
  },
  {
    "id": "C06-Q4",
    "question": "מה מדפיס הקוד?\n```c\nchar s[] = \"bbaa\";\nint cnt[26] = {0}, best = 0;\nfor (int i = 0; s[i] != '\\0'; i++)\n    cnt[s[i] - 'a']++;\nfor (int i = 1; i < 26; i++)\n    if (cnt[i] > cnt[best])\n        best = i;\nprintf(\"%c\", 'a' + best);\n```",
    "options": [
      {
        "id": "a",
        "value": "`b`"
      },
      {
        "id": "b",
        "value": "`ab`"
      },
      {
        "id": "c",
        "value": "`a`"
      },
      {
        "id": "d",
        "value": "`2`"
      }
    ],
    "correctId": "c",
    "explanation": "שתי האותיות `a` ו-`b` מופיעות פעמיים כל אחת. `best` מתחיל ב-0 (האות `a`), ו-`cnt[1] > cnt[0]` הוא `2 > 2`, שקר, ולכן `best` נשאר 0 ומודפס `a`. עם `>=` היה מודפס `b`. הלולאה מדפיסה תו אחד, לא `ab`, ו-`%c` מדפיס אות ולא את המונה.",
    "recap": "בתיקו, > ממש משאיר את האות הקטנה"
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
          "value": "cnt[s[i] - 'a'] > 1"
        },
        {
          "id": "b",
          "type": "text",
          "value": "cnt[i] == 1"
        },
        {
          "id": "c",
          "type": "text",
          "value": "cnt[s[i] - 'a'] == 1"
        },
        {
          "id": "d",
          "type": "text",
          "value": "cnt[s[i] - 'a'] == 0"
        }
      ],
      "correctId": "c",
      "explain": "עוברים על המחרוזת עצמה (לא על המונים) כדי לשמור על סדר ההופעה, ובודקים אם המונה של התו הנוכחי הוא 1. `> 1` מחזירה דווקא תו שחוזר. `cnt[i]` משתמש במקום של התו בטקסט כאילו היה אות. `== 0` לא קורה אף פעם לתו שקיים במחרוזת."
    },
    "recap": "תו יחיד: מעבר על המחרוזת ובדיקת cnt[c - 'a'] == 1"
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
      "explain": "שני מעברים על המחרוזות, כל אחד בזמן ליניארי באורך שלו, ועוד לולאה של 26 צעדים קבועים: $O(n)$."
    },
    "recap": "מערך מונים בגודל קבוע = O(n) זמן ו-O(1) זיכרון"
  }
],
});
