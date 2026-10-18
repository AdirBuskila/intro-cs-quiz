/* c_strings course, level C04 - פונקציות string.h והעתקה */
COURSE_LEVEL("c_strings", {
  "id": "C04",
  "order": 4,
  "icon": "📋",
  "title": "פונקציות string.h והעתקה",
  "goal": "אחרי השלב הזה תדעו להשוות, להעתיק ולהקצות מחרוזות נכון, ומה בדיוק עושות strcpy, strcat ו-strcmp.",
  "source": "ai-verified",
  lesson: { html: String.raw`
<p>הספרייה <code>string.h</code> כוללת פונקציות מוכנות על מחרוזות. כל אחת מהן היא בעצם לולאה כמו אלה שכבר כתבתם, והן כולן סומכות על ה-<code>'\0'</code>.</p>
<table>
<thead><tr><th>פונקציה</th><th>מה היא עושה</th></tr></thead>
<tbody>
<tr><td><code>strlen(s)</code></td><td>מספר התווים לפני ה-<code>'\0'</code></td></tr>
<tr><td><code>strcpy(dst, src)</code></td><td>מעתיקה את <code>src</code> אל <code>dst</code>, כולל ה-<code>'\0'</code>, ודורסת מה שהיה שם</td></tr>
<tr><td><code>strcat(dst, src)</code></td><td>מוסיפה את <code>src</code> אחרי הסוף הנוכחי של <code>dst</code></td></tr>
<tr><td><code>strcmp(a, b)</code></td><td>0 אם התוכן שווה, שלילי אם <code>a</code> קטנה (לפי סדר המילון), חיובי אם גדולה</td></tr>
</tbody></table>
<pre>char s[20] = "ab";
strcat(s, "cd");     /* s is "abcd" */
strcpy(s, "xyz");    /* s is "xyz"  */
if (strcmp(s, "xyz") == 0) { /* equal */ }</pre>
<div class="lesson-rule">🔑 <code>strcpy</code> ו-<code>strcat</code> לא בודקות גבולות. היעד חייב להיות מערך גדול מספיק, כולל מקום ל-<code>'\0'</code>.</div>
<h3>השוואה והעתקה</h3>
<p>מחרוזת היא כתובת של מערך. לכן <code>a == b</code> משווה <b>כתובות</b>, לא תוכן: שני מערכים נפרדים עם אותן אותיות הם לא "שווים" בהשוואה כזו. תוכן משווים עם <code>strcmp(a, b) == 0</code>. ובאותו אופן <code>c = s</code> לא מעתיק מחרוזת, הוא רק גורם ל-<code>c</code> להצביע על אותו מערך.</p>
<h3>מחרוזת חדשה בזיכרון דינמי</h3>
<p>כדי ליצור עותק אמיתי מקצים מקום חדש. מחרוזת באורך n צריכה n+1 בתים, כי <code>strlen</code> לא סופרת את ה-<code>'\0'</code>:</p>
<pre>char *dup(char *s) {
    char *c = (char*)malloc(strlen(s) + 1);
    strcpy(c, s);
    return c;
}</pre>
<div class="lesson-ex">דוגמה: אם <code>s</code> היא <code>"hello"</code>, <code>strlen(s)</code> הוא 5 ויש להקצות 6 בתים. עם <code>malloc(strlen(s))</code> ההעתקה כותבת את ה-<code>'\0'</code> בבית אחד אחרי סוף הזיכרון שהוקצה, כלומר מחוץ לו.</div>
<h3>מערך או מצביע</h3>
<p><code>char s[] = "hi";</code> יוצר מערך משלכם ואפשר לשנות אותו (<code>s[0] = 'H'</code>). <code>char *p = "hi";</code> מצביע על טקסט קבוע של התוכנית, ושינוי שלו קורס בזמן ריצה. המילה <code>const</code> לפני סוג הנתונים (<code>const char s[]</code>, <code>const char *p</code>) אומרת שאסור לשנות את התווים, והקומפיילר דוחה כל כתיבה אליהם כבר בקומפילציה.</p>
<div class="lesson-trap">⚠️ <code>malloc(strlen(s))</code> חסר בית אחד. <code>sizeof(s)</code> כשהמשתנה הוא מצביע נותן את גודל המצביע ולא את אורך המחרוזת.</div>
` },
  questions: [
  {
    "id": "C04-Q1",
    "question": "a ו-b הן מחרוזות. איזה ביטוי הוא אמת (שונה מ-0) בדיוק כשהתוכן שלהן שווה?",
    "options": [
      {
        "id": "a",
        "value": "`a == b`"
      },
      {
        "id": "b",
        "value": "`strlen(a) == strlen(b)`"
      },
      {
        "id": "c",
        "value": "`strcmp(a, b)`"
      },
      {
        "id": "d",
        "value": "`strcmp(a, b) == 0`"
      }
    ],
    "correctId": "d",
    "explanation": "`strcmp` מחזירה 0 כשהתוכן שווה, ולכן ההשוואה `== 0` היא הבדיקה הנכונה. `a == b` משווה כתובות, ושני מערכים נפרדים עם אותו תוכן יתנו שקר. `strlen(a) == strlen(b)` בודקת רק אורך: `\"abc\"` ו-`\"abd\"` יתנו אמת. `strcmp(a, b)` לבדה היא 0, כלומר שקר, בדיוק כשהמחרוזות שוות.",
    "recap": "תוכן = strcmp(a, b) == 0"
  },
  {
    "id": "C04-Q2",
    "question": "מה מדפיס הקוד?\n```c\nchar s[20] = \"ab\";\nstrcpy(s, \"xyz\");\nstrcat(s, \"!\");\nprintf(\"%s %d\", s, (int)strlen(s));\n```",
    "options": [
      {
        "id": "a",
        "value": "`xyz 3`"
      },
      {
        "id": "b",
        "value": "`abxyz! 6`"
      },
      {
        "id": "c",
        "value": "`xyz! 4`"
      },
      {
        "id": "d",
        "value": "`xyz! 20`"
      }
    ],
    "correctId": "c",
    "explanation": "`strcpy` דורסת את `ab` ומשאירה `xyz`. `strcat` מוסיפה `!` מיד אחרי ה-`'\\0'` שהיה ב-`xyz`, והמחרוזת נהיית `xyz!` באורך 4. `abxyz! 6` מניחה ש-`strcpy` מוסיפה, `xyz 3` מדלגת על `strcat`, ו-`xyz! 20` מבלבלת עם גודל המערך.",
    "recap": "strcpy דורסת, strcat מוסיפה בסוף"
  },
  {
    "id": "C04-Q3",
    "question": "הפונקציה אמורה להחזיר עותק של המחרוזת בזיכרון דינמי. מה צריך להיות במקום ___?\n```c\nchar *copy(char *s) {\n    char *c = (char*)malloc(___);\n    strcpy(c, s);\n    return c;\n}\n```",
    "options": [
      {
        "id": "a",
        "value": "`strlen(s)`"
      },
      {
        "id": "b",
        "value": "`sizeof(s)`"
      },
      {
        "id": "c",
        "value": "`strlen(s) + 1`"
      },
      {
        "id": "d",
        "value": "`strlen(s) - 1`"
      }
    ],
    "correctId": "c",
    "explanation": "צריך מקום לכל התווים ועוד בית אחד ל-`'\\0'`: `strlen(s) + 1`. עם `strlen(s)` ו-`strlen(s) - 1` ההעתקה כותבת מעבר לגבול ההקצאה. `sizeof(s)` הוא גודל המצביע (כמה בתים תופס משתנה מצביע), ולא אורך המחרוזת: למחרוזות ארוכות מכך ההעתקה גולשת.",
    "recap": "עותק של מחרוזת: malloc(strlen(s) + 1)"
  },
  {
    "id": "C04-Q4",
    "question": "אחרי ההצהרה על `s` הקוד מבצע `s[0] = 'H';`. באיזו הצהרה השינוי מצליח?",
    "options": [
      {
        "id": "a",
        "value": "`char s[] = \"hi\";`"
      },
      {
        "id": "b",
        "value": "`char *s = \"hi\";`"
      },
      {
        "id": "c",
        "value": "`const char s[] = \"hi\";`"
      },
      {
        "id": "d",
        "value": "`const char *s = \"hi\";`"
      }
    ],
    "correctId": "a",
    "explanation": "`char s[] = \"hi\"` יוצר מערך של שלושה תאים בזיכרון שלכם, ואפשר לשנות אותו. `char *s = \"hi\"` מצביע על טקסט קבוע, והכתיבה קורסת בזמן הריצה. בשתי ההצהרות עם `const` הקומפיילר דוחה את הכתיבה כבר בקומפילציה.",
    "recap": "מערך אפשר לשנות; מצביע למחרוזת קבועה לא"
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
      "explain": "מקצים מקום, מעתיקים אליו, ורק אז מחזירים את הכתובת. `strcpy` לפני ההקצאה משתמשת במשתנה שעוד לא הוגדר, והחזרה לפני ההעתקה מחזירה זיכרון ריק."
    },
    "recap": "הקצאה, העתקה, החזרה"
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
      "explain": "השורה `c = s;` מעתיקה רק את הכתובת. `c` מצביע על המקור, ולכן שינוי של `c[0]` משנה גם את `s`, וההקצאה נזרקת. ההעתקה האמיתית היא `strcpy(c, s);`."
    },
    "recap": "השמה של מצביע לא מעתיקה מחרוזת"
  }
],
});
