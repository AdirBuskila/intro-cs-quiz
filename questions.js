window.OPEN_BANK = {
 "meta": {
  "course": {
   "slug": "intro-cs",
   "title": "מבוא למדעי המחשב",
   "description": "תרגול מבחנים - מבוא למדעי המחשב",
   "accent": "#4ade80",
   "accent2": "#7c3aed",
   "storePrefix": "intro-cs",
   "needHelp": [
    {
     "id": "recursion",
     "titleHe": "רקורסיה",
     "icon": "🔁",
     "topic": "recursion",
     "entryLabelHe": "צריך עזרה ברקורסיה?"
    },
    {
     "id": "c_strings",
     "titleHe": "מחרוזות ב-C",
     "icon": "🔤",
     "topic": "strings",
     "entryLabelHe": "צריך עזרה במחרוזות?"
    },
    {
     "id": "matrices",
     "titleHe": "מטריצות ומערכים דו-ממדיים",
     "icon": "🔲",
     "topic": "matrices",
     "entryLabelHe": "צריך עזרה במטריצות?"
    },
    {
     "id": "array_algos",
     "titleHe": "אלגוריתמי מערכים יעילים וסדר גודל",
     "icon": "⚡",
     "topic": "arrays",
     "entryLabelHe": "צריך עזרה באלגוריתמים יעילים על מערכים?"
    }
   ]
  },
  "topics": [
   {
    "key": "basics_io",
    "label": "משתנים, קלט/פלט וביטויים"
   },
   {
    "key": "conditionals_loops",
    "label": "תנאים ולולאות"
   },
   {
    "key": "functions",
    "label": "פונקציות"
   },
   {
    "key": "recursion",
    "label": "רקורסיה"
   },
   {
    "key": "arrays",
    "label": "מערכים ויעילות"
   },
   {
    "key": "pointers_memory",
    "label": "מצביעים וזיכרון דינמי"
   },
   {
    "key": "strings",
    "label": "מחרוזות"
   },
   {
    "key": "binary_search",
    "label": "חיפוש בינארי"
   },
   {
    "key": "sorting_merge",
    "label": "מיון ומיזוג"
   },
   {
    "key": "matrices",
    "label": "מטריצות"
   },
   {
    "key": "number_theory",
    "label": "gcd, lcm ומחלקים"
   },
   {
    "key": "complexity",
    "label": "סדר גודל"
   },
   {
    "key": "structs",
    "label": "מבנים"
   }
  ],
  "kinds": [
   "code"
  ],
  "built": "2026-10-17T13:28:53Z",
  "exams": [
   {
    "examCode": "25A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
    "year": 2025,
    "source": "exam",
    "examDate": "5.02.2025"
   }
  ],
  "counts": {
   "total": 4,
   "contexts": 1,
   "math": 10,
   "steps": 20
  }
 },
 "contexts": {
  "25A-A-c4": {
   "kind": "code",
   "title": "שאלה 4: דוגמאות וחתימה",
   "code": "// perfectly symmetric matrix\nint perfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 9, 8, 9, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 1}\n};\n\n// not perfectly symmetric: row 3 has 7 != 6 and the last row has 4 != 1\nint notPerfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 6, 8, 7, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 4}\n};\n\n// signature\nint countSymmetricViolations(int matrix[N][N]);",
   "id": "25A-A-c4",
   "codeHtml": "// perfectly symmetric matrix\nint perfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 9, 8, 9, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 1}\n};\n\n// not perfectly symmetric: row 3 has 7 != 6 and the last row has 4 != 1\nint notPerfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 6, 8, 7, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 4}\n};\n\n// signature\nint countSymmetricViolations(int matrix[N][N]);",
   "titleHtml": "שאלה 4: דוגמאות וחתימה"
  }
 },
 "questions": [
  {
   "num": 1,
   "kind": "code",
   "topic": "arrays",
   "question": "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים ואת גודלו.\nהפונקציה בודקת אם קיים אינדקס `i` במערך כך שסכום כל האיברים עד `i` כולל `i` שווה לסכום כל האיברים מהאיבר ה-`i+1` ועד הסוף.\nבמידה וקיים אינדקס כזה הפונקציה מחזירה את האינדקס הקטן ביותר שמקיים את התנאי. במידה ולא קיים הפונקציה מחזירה `-1`.\nלדוגמא:\nעבור המערך `{5, -4, -2, 8, 10, -3}` הפונקציה תחזיר `3` (`5-4-2+8=7` וגם `10-3=7`).\nעבור המערך `{5, -4, -2, 8, 10, -2}` הפונקציה תחזיר `-1`.\nחתימת הפונקציה היא:\n`int index_half(int* arr, int size);`\nעל הפונקציה לרוץ בסדר גודל של $n$.",
   "solution": "**פתרון רשמי** (25A-A עמ' 2):\n```c\nint index_half(int* arr, int size)\n{\n   int i, half_sum, sum=0;\n   for (i = 0; i < size; i++)\n      sum += arr[i];\n   if (sum % 2)\n      return -1;\n   half_sum = sum / 2;\n   sum = 0;\n   for (i = 0; i < size - 1; i++)\n   {\n      sum += arr[i];\n      if (sum == half_sum)\n         return i;\n   }\n   return -1;\n}\n```\nאם סכום כל האיברים אי-זוגי, אי אפשר לחלק את המערך לשני חלקים עם סכום זהה ומחזירים `-1`. אחרת מחשבים את חצי הסכום וסורקים פעם נוספת עם סכום חלקי; האינדקס הראשון שבו הסכום החלקי שווה לחצי הסכום מוחזר. שתי סריקות לינאריות, כלומר $O(n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "חישוב סכום כל המערך בסריקה אחת, והחזרת `-1` כשהסכום אי-זוגי",
     "points": 6,
     "html": "חישוב סכום כל המערך בסריקה אחת, והחזרת <code class=\"tok\" dir=\"ltr\">-1</code> כשהסכום אי-זוגי"
    },
    {
     "text": "חישוב חצי הסכום (`sum / 2`) ואיפוס הסכום החלקי לפני הסריקה השנייה",
     "points": 6,
     "html": "חישוב חצי הסכום (<code class=\"tok\" dir=\"ltr\">sum / 2</code>) ואיפוס הסכום החלקי לפני הסריקה השנייה"
    },
    {
     "text": "סריקה שנייה עם סכום חלקי רץ, והחזרת האינדקס הראשון (הקטן ביותר) שבו הוא שווה לחצי הסכום",
     "points": 8,
     "html": "סריקה שנייה עם סכום חלקי רץ, והחזרת האינדקס הראשון (הקטן ביותר) שבו הוא שווה לחצי הסכום"
    },
    {
     "text": "טיפול נכון בקצה: האינדקס האחרון לא נבדק (`i < size - 1`), ואם לא נמצא מחזירים `-1`",
     "points": 3,
     "html": "טיפול נכון בקצה: האינדקס האחרון לא נבדק (<code class=\"tok\" dir=\"ltr\">i &lt; size - 1</code>), ואם לא נמצא מחזירים <code class=\"tok\" dir=\"ltr\">-1</code>"
    },
    {
     "text": "יעילות: שתי סריקות לינאריות בלבד, כלומר $O(n)$ ללא לולאות מקוננות",
     "points": 3,
     "html": "יעילות: שתי סריקות לינאריות בלבד, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ללא לולאות מקוננות"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "פתרון בכוח גס: לכל `i` לחשב מחדש את הסכום משמאל ומימין (שתי לולאות מקוננות), וזה $O(n^2)$ ולא עומד בדרישת היעילות.",
    "לא לבדוק קודם שהסכום זוגי: חילוק שלם מעגל כלפי מטה, וסכום אי-זוגי עלול לתת התאמה שגויה.",
    "לשכוח לאפס את `sum` לפני הסריקה השנייה, או להחזיר אינדקס שאינו הקטן ביותר."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `index_half` עבור המערך `{1, 2, 3}` (גודל 3)?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`2`",
       "html": "<code class=\"tok\" dir=\"ltr\">2</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`-1`",
       "html": "<code class=\"tok\" dir=\"ltr\">-1</code>"
      }
     ],
     "correctId": "a",
     "explain": "הסכום 6, חצי הסכום 3. אחרי `i=0` הסכום החלקי 1, אחרי `i=1` הוא 3 ושווה לחצי הסכום, לכן מחזירים 1 (ריצה אמיתית: 1).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">index_half</code> עבור המערך <code class=\"tok\" dir=\"ltr\">{1, 2, 3}</code> (גודל 3)?",
     "explainHtml": "הסכום 6, חצי הסכום 3. אחרי <code class=\"tok\" dir=\"ltr\">i=0</code> הסכום החלקי 1, אחרי <code class=\"tok\" dir=\"ltr\">i=1</code> הוא 3 ושווה לחצי הסכום, לכן מחזירים 1 (ריצה אמיתית: 1)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה `index_half` עבור `{7, 0, 0, 0}` ועבור `{0, 5, -5}`, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`-1` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">-1</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`0` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`-1` ואז `-1`",
       "html": "<code class=\"tok\" dir=\"ltr\">-1</code> ואז <code class=\"tok\" dir=\"ltr\">-1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0` ואז `-1`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">-1</code>"
      }
     ],
     "correctId": "a",
     "explain": "בראשון הסכום 7 אי-זוגי ולכן `-1`. בשני הסכום 0, חצי הסכום 0 ו-`arr[0]=0` נותן סכום חלקי 0 כבר באינדקס 0 (ריצה אמיתית: -1 ו-0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">index_half</code> עבור <code class=\"tok\" dir=\"ltr\">{7, 0, 0, 0}</code> ועבור <code class=\"tok\" dir=\"ltr\">{0, 5, -5}</code>, לפי הסדר?",
     "explainHtml": "בראשון הסכום 7 אי-זוגי ולכן <code class=\"tok\" dir=\"ltr\">-1</code>. בשני הסכום 0, חצי הסכום 0 ו-<code class=\"tok\" dir=\"ltr\">arr[0]=0</code> נותן סכום חלקי 0 כבר באינדקס 0 (ריצה אמיתית: -1 ו-0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i < size; i++)",
      "      sum += arr[i];",
      "___",
      "      return -1;",
      "   half_sum = sum / 2;",
      "   sum = 0;",
      "   for (i = 0; i < size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (sum % 2)",
       "html": "if (sum % 2)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (sum % 2 == 0)",
       "html": "if (sum % 2 == 0)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (sum > 0)",
       "html": "if (sum &gt; 0)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (sum == half_sum)",
       "html": "if (sum == half_sum)"
      }
     ],
     "correctId": "a",
     "explain": "סכום אי-זוגי לא ניתן לחלוקה לשני חלקים שווים, ולכן יוצאים עם `-1` לפני הסריקה השנייה.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "סכום אי-זוגי לא ניתן לחלוקה לשני חלקים שווים, ולכן יוצאים עם <code class=\"tok\" dir=\"ltr\">-1</code> לפני הסריקה השנייה.",
     "linesHtml": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i &lt; size; i++)",
      "      sum += arr[i];",
      "___",
      "      return -1;",
      "   half_sum = sum / 2;",
      "   sum = 0;",
      "   for (i = 0; i &lt; size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `index_half`.",
     "code": true,
     "lines": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i < size; i++)",
      "      sum += arr[i];",
      "   if (sum % 2)",
      "      return -1;",
      "   half_sum = sum / 2;",
      "   sum = 0;",
      "   for (i = 0; i < size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ],
     "explain": "סריקה ראשונה לסכום, בדיקת זוגיות, חצי סכום ואיפוס, סריקה שנייה, ובסוף `-1`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">index_half</code>.",
     "explainHtml": "סריקה ראשונה לסכום, בדיקת זוגיות, חצי סכום ואיפוס, סריקה שנייה, ובסוף <code class=\"tok\" dir=\"ltr\">-1</code>.",
     "linesHtml": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i &lt; size; i++)",
      "      sum += arr[i];",
      "   if (sum % 2)",
      "      return -1;",
      "   half_sum = sum / 2;",
      "   sum = 0;",
      "   for (i = 0; i &lt; size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה נכשלת. מצאו אותה.",
     "code": true,
     "lines": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i < size; i++)",
      "      sum += arr[i];",
      "   if (sum % 2)",
      "      return -1;",
      "   half_sum = sum;",
      "   sum = 0;",
      "   for (i = 0; i < size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ],
     "bugIndex": 7,
     "explain": "`half_sum = sum;` במקום `sum / 2`: מחפשים סכום חלקי השווה לכל הסכום ולא לחציו.",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה נכשלת. מצאו אותה.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">half_sum = sum;</code> במקום <code class=\"tok\" dir=\"ltr\">sum / 2</code>: מחפשים סכום חלקי השווה לכל הסכום ולא לחציו.",
     "linesHtml": [
      "int index_half(int* arr, int size)",
      "{",
      "   int i, half_sum, sum=0;",
      "   for (i = 0; i &lt; size; i++)",
      "      sum += arr[i];",
      "   if (sum % 2)",
      "      return -1;",
      "   half_sum = sum;",
      "   sum = 0;",
      "   for (i = 0; i &lt; size - 1; i++)",
      "   {",
      "      sum += arr[i];",
      "      if (sum == half_sum)",
      "         return i;",
      "   }",
      "   return -1;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-A-Q1",
   "partKey": "",
   "examCode": "25A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים ואת גודלו.<br>הפונקציה בודקת אם קיים אינדקס <code class=\"tok\" dir=\"ltr\">i</code> במערך כך שסכום כל האיברים עד <code class=\"tok\" dir=\"ltr\">i</code> כולל <code class=\"tok\" dir=\"ltr\">i</code> שווה לסכום כל האיברים מהאיבר ה-<code class=\"tok\" dir=\"ltr\">i+1</code> ועד הסוף.<br>במידה וקיים אינדקס כזה הפונקציה מחזירה את האינדקס הקטן ביותר שמקיים את התנאי. במידה ולא קיים הפונקציה מחזירה <code class=\"tok\" dir=\"ltr\">-1</code>.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">{5, -4, -2, 8, 10, -3}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">3</code> (<code class=\"tok\" dir=\"ltr\">5-4-2+8=7</code> וגם <code class=\"tok\" dir=\"ltr\">10-3=7</code>).<br>עבור המערך <code class=\"tok\" dir=\"ltr\">{5, -4, -2, 8, 10, -2}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">-1</code>.<br>חתימת הפונקציה היא:<br><code class=\"tok\" dir=\"ltr\">int index_half(int* arr, int size);</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (25A-A עמ' 2):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int index_half(int* arr, int size)\n{\n   int i, half_sum, sum=0;\n   for (i = 0; i &lt; size; i++)\n      sum += arr[i];\n   if (sum % 2)\n      return -1;\n   half_sum = sum / 2;\n   sum = 0;\n   for (i = 0; i &lt; size - 1; i++)\n   {\n      sum += arr[i];\n      if (sum == half_sum)\n         return i;\n   }\n   return -1;\n}</code></pre>אם סכום כל האיברים אי-זוגי, אי אפשר לחלק את המערך לשני חלקים עם סכום זהה ומחזירים <code class=\"tok\" dir=\"ltr\">-1</code>. אחרת מחשבים את חצי הסכום וסורקים פעם נוספת עם סכום חלקי; האינדקס הראשון שבו הסכום החלקי שווה לחצי הסכום מוחזר. שתי סריקות לינאריות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "פתרון בכוח גס: לכל <code class=\"tok\" dir=\"ltr\">i</code> לחשב מחדש את הסכום משמאל ומימין (שתי לולאות מקוננות), וזה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא עומד בדרישת היעילות.",
    "לא לבדוק קודם שהסכום זוגי: חילוק שלם מעגל כלפי מטה, וסכום אי-זוגי עלול לתת התאמה שגויה.",
    "לשכוח לאפס את <code class=\"tok\" dir=\"ltr\">sum</code> לפני הסריקה השנייה, או להחזיר אינדקס שאינו הקטן ביותר."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "binary_search",
   "question": "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים `arr`, גודלו `size` ומספר נוסף **שלילי** `k`.\nעל הפונקציה להחזיר את מיקומו של `k` במערך אם הוא נמצא בו, או `-1` אם הוא איננו.\nידוע שהמערך מקיים תכונה מיוחדת:\nכל המספרים השליליים במערך נמצאים בתחילת המערך וממוינים בסדר יורד, וכל המספרים החיוביים במערך ממוינים בסדר עולה.\nלדוגמא:\n`-1, -5, -13, -15, -21, 2, 5, 12, 23`\nיש לכתוב לפונקציה שחתימתה היא:\n`int search_in_array(int* arr, int size, int k);`\nעל הפונקציה לרוץ בסדר גודל של $\\log n$.",
   "solution": "**פתרון רשמי** (25A-A עמ' 3), הועתק כלשונו:\n```c\nint search_in_array(int* arr, int size, int key) {\n   int left = 0, right = size - 1;\n   while (left <= right) {\n      int mid = (left + right) / 2;\n      if (arr[mid] == key)\n         return mid;\n      else\n         if ((key < arr[mid]) && (arr[mid] < 0))\n            left = mid + 1;\n         else\n            right = mid - 1;\n   }\n   return -1;\n}\n```\nחיפוש בינארי עם תנאי כיוון: אם `arr[mid]` שלילי והמפתח קטן ממנו, ממשיכים ימינה (`left = mid + 1`), אחרת שמאלה (`right = mid - 1`). זמן ריצה $O(\\log n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "הגדרת גבולות `left`, `right` ולולאת `while (left <= right)` עם `mid` אמצעי",
     "points": 6,
     "html": "הגדרת גבולות <code class=\"tok\" dir=\"ltr\">left</code>, <code class=\"tok\" dir=\"ltr\">right</code> ולולאת <code class=\"tok\" dir=\"ltr\">while (left &lt;= right)</code> עם <code class=\"tok\" dir=\"ltr\">mid</code> אמצעי"
    },
    {
     "text": "החזרת `mid` כשנמצא `arr[mid] == key`, ו-`-1` בסוף כשלא נמצא",
     "points": 5,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">mid</code> כשנמצא <code class=\"tok\" dir=\"ltr\">arr[mid] == key</code>, ו-<code class=\"tok\" dir=\"ltr\">-1</code> בסוף כשלא נמצא"
    },
    {
     "text": "כיוון נכון בתחום השלילי היורד: אם `key < arr[mid]` ו-`arr[mid]` שלילי עוברים ימינה (`left = mid + 1`)",
     "points": 8,
     "html": "כיוון נכון בתחום השלילי היורד: אם <code class=\"tok\" dir=\"ltr\">key &lt; arr[mid]</code> ו-<code class=\"tok\" dir=\"ltr\">arr[mid]</code> שלילי עוברים ימינה (<code class=\"tok\" dir=\"ltr\">left = mid + 1</code>)"
    },
    {
     "text": "בכל מקרה אחר עוברים שמאלה (`right = mid - 1`), כולל כש-`arr[mid]` חיובי",
     "points": 4,
     "html": "בכל מקרה אחר עוברים שמאלה (<code class=\"tok\" dir=\"ltr\">right = mid - 1</code>), כולל כש-<code class=\"tok\" dir=\"ltr\">arr[mid]</code> חיובי"
    },
    {
     "text": "זמן ריצה $O(\\log n)$ כי כל איטרציה חוצה את התחום לחצי",
     "points": 3,
     "html": "זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span> כי כל איטרציה חוצה את התחום לחצי"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לכתוב חיפוש בינארי רגיל לסדר עולה ולשכוח שהשליליים ממוינים בסדר יורד, כך שכיוון ההשוואה הפוך.",
    "לא להתחשב בחלק החיובי: כש-`arr[mid]` חיובי והמפתח שלילי חייבים ללכת שמאלה, ובדיקה של `key < arr[mid]` בלבד שולחת ימינה בטעות.",
    "חיפוש לינארי: נכון אבל $O(n)$ ולא מקבל את נקודות היעילות."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "במערך `{-1, -5, -13, -15, -21, 2, 5, 12, 23}` (גודל 9) מחפשים את `-15`. איזה ערך `arr[mid]` נבדק באיטרציה הראשונה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`-21`",
       "html": "<code class=\"tok\" dir=\"ltr\">-21</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`-15`",
       "html": "<code class=\"tok\" dir=\"ltr\">-15</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`-13`",
       "html": "<code class=\"tok\" dir=\"ltr\">-13</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`-5`",
       "html": "<code class=\"tok\" dir=\"ltr\">-5</code>"
      }
     ],
     "correctId": "a",
     "explain": "`mid = (0+8)/2 = 4` ו-`arr[4] = -21` (ריצה אמיתית). `-15 < -21` שקר, לכן `right = 3`.",
     "promptHtml": "במערך <code class=\"tok\" dir=\"ltr\">{-1, -5, -13, -15, -21, 2, 5, 12, 23}</code> (גודל 9) מחפשים את <code class=\"tok\" dir=\"ltr\">-15</code>. איזה ערך <code class=\"tok\" dir=\"ltr\">arr[mid]</code> נבדק באיטרציה הראשונה?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">mid = (0+8)/2 = 4</code> ו-<code class=\"tok\" dir=\"ltr\">arr[4] = -21</code> (ריצה אמיתית). <code class=\"tok\" dir=\"ltr\">-15 &lt; -21</code> שקר, לכן <code class=\"tok\" dir=\"ltr\">right = 3</code>."
    },
    {
     "type": "numeric",
     "prompt": "באותו חיפוש של `-15`: איזה אינדקס מוחזר בסוף?",
     "answer": 3,
     "tol": 0,
     "explain": "האיטרציות בודקות mid=4 (`-21`), mid=1 (`-5`), mid=2 (`-13`), mid=3 (`-15`) ומחזירות 3 (ריצה אמיתית).",
     "promptHtml": "באותו חיפוש של <code class=\"tok\" dir=\"ltr\">-15</code>: איזה אינדקס מוחזר בסוף?",
     "explainHtml": "האיטרציות בודקות mid=4 (<code class=\"tok\" dir=\"ltr\">-21</code>), mid=1 (<code class=\"tok\" dir=\"ltr\">-5</code>), mid=2 (<code class=\"tok\" dir=\"ltr\">-13</code>), mid=3 (<code class=\"tok\" dir=\"ltr\">-15</code>) ומחזירות 3 (ריצה אמיתית)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה: כשהמפתח קטן מ-`arr[mid]` השלילי, לאן ממשיכים?",
     "code": true,
     "lines": [
      "int search_in_array(int* arr, int size, int key) {",
      "   int left = 0, right = size - 1;",
      "   while (left <= right) {",
      "      int mid = (left + right) / 2;",
      "      if (arr[mid] == key)",
      "         return mid;",
      "      else",
      "         if ((key < arr[mid]) && (arr[mid] < 0))",
      "___",
      "         else",
      "            right = mid - 1;",
      "   }",
      "   return -1;",
      "}"
     ],
     "blankIndex": 8,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "left = mid + 1;",
       "html": "left = mid + 1;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "left = mid;",
       "html": "left = mid;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "right = mid + 1;",
       "html": "right = mid + 1;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "right = mid - 1;",
       "html": "right = mid - 1;"
      }
     ],
     "correctId": "a",
     "explain": "בתחום השלילי הערכים יורדים: מפתח קטן יותר נמצא מימין ל-`mid`, ולכן `left = mid + 1`.",
     "promptHtml": "השלימו את השורה החסרה: כשהמפתח קטן מ-<code class=\"tok\" dir=\"ltr\">arr[mid]</code> השלילי, לאן ממשיכים?",
     "explainHtml": "בתחום השלילי הערכים יורדים: מפתח קטן יותר נמצא מימין ל-<code class=\"tok\" dir=\"ltr\">mid</code>, ולכן <code class=\"tok\" dir=\"ltr\">left = mid + 1</code>.",
     "linesHtml": [
      "int search_in_array(int* arr, int size, int key) {",
      "   int left = 0, right = size - 1;",
      "   while (left &lt;= right) {",
      "      int mid = (left + right) / 2;",
      "      if (arr[mid] == key)",
      "         return mid;",
      "      else",
      "         if ((key &lt; arr[mid]) &amp;&amp; (arr[mid] &lt; 0))",
      "___",
      "         else",
      "            right = mid - 1;",
      "   }",
      "   return -1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `search_in_array`.",
     "code": true,
     "lines": [
      "int search_in_array(int* arr, int size, int key) {",
      "   int left = 0, right = size - 1;",
      "   while (left <= right) {",
      "      int mid = (left + right) / 2;",
      "      if (arr[mid] == key)",
      "         return mid;",
      "      else",
      "         if ((key < arr[mid]) && (arr[mid] < 0))",
      "            left = mid + 1;",
      "         else",
      "            right = mid - 1;",
      "   }",
      "   return -1;",
      "}"
     ],
     "explain": "אתחול, לולאה, חישוב `mid`, השוואת שוויון, תנאי הכיוון, ובסוף `-1`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">search_in_array</code>.",
     "explainHtml": "אתחול, לולאה, חישוב <code class=\"tok\" dir=\"ltr\">mid</code>, השוואת שוויון, תנאי הכיוון, ובסוף <code class=\"tok\" dir=\"ltr\">-1</code>.",
     "linesHtml": [
      "int search_in_array(int* arr, int size, int key) {",
      "   int left = 0, right = size - 1;",
      "   while (left &lt;= right) {",
      "      int mid = (left + right) / 2;",
      "      if (arr[mid] == key)",
      "         return mid;",
      "      else",
      "         if ((key &lt; arr[mid]) &amp;&amp; (arr[mid] &lt; 0))",
      "            left = mid + 1;",
      "         else",
      "            right = mid - 1;",
      "   }",
      "   return -1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות הזמן של הפתרון? (למשל `O(n)`)",
     "accept": [
      "O(log n)",
      "O(logn)",
      "O(lg n)"
     ],
     "normalize": "complexity",
     "explain": "כל איטרציה חוצה את התחום, לכן $O(\\log n)$.",
     "promptHtml": "מהי סיבוכיות הזמן של הפתרון? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "כל איטרציה חוצה את התחום, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-A-Q2",
   "partKey": "",
   "examCode": "25A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "כתבו פונקציה יעילה שמקבלת מערך של מספרים שלמים <code class=\"tok\" dir=\"ltr\">arr</code>, גודלו <code class=\"tok\" dir=\"ltr\">size</code> ומספר נוסף <strong>שלילי</strong> <code class=\"tok\" dir=\"ltr\">k</code>.<br>על הפונקציה להחזיר את מיקומו של <code class=\"tok\" dir=\"ltr\">k</code> במערך אם הוא נמצא בו, או <code class=\"tok\" dir=\"ltr\">-1</code> אם הוא איננו.<br>ידוע שהמערך מקיים תכונה מיוחדת:<br>כל המספרים השליליים במערך נמצאים בתחילת המערך וממוינים בסדר יורד, וכל המספרים החיוביים במערך ממוינים בסדר עולה.<br>לדוגמא:<br><code class=\"tok\" dir=\"ltr\">-1, -5, -13, -15, -21, 2, 5, 12, 23</code><br>יש לכתוב לפונקציה שחתימתה היא:<br><code class=\"tok\" dir=\"ltr\">int search_in_array(int* arr, int size, int k);</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (25A-A עמ' 3), הועתק כלשונו:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int search_in_array(int* arr, int size, int key) {\n   int left = 0, right = size - 1;\n   while (left &lt;= right) {\n      int mid = (left + right) / 2;\n      if (arr[mid] == key)\n         return mid;\n      else\n         if ((key &lt; arr[mid]) &amp;&amp; (arr[mid] &lt; 0))\n            left = mid + 1;\n         else\n            right = mid - 1;\n   }\n   return -1;\n}</code></pre>חיפוש בינארי עם תנאי כיוון: אם <code class=\"tok\" dir=\"ltr\">arr[mid]</code> שלילי והמפתח קטן ממנו, ממשיכים ימינה (<code class=\"tok\" dir=\"ltr\">left = mid + 1</code>), אחרת שמאלה (<code class=\"tok\" dir=\"ltr\">right = mid - 1</code>). זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לכתוב חיפוש בינארי רגיל לסדר עולה ולשכוח שהשליליים ממוינים בסדר יורד, כך שכיוון ההשוואה הפוך.",
    "לא להתחשב בחלק החיובי: כש-<code class=\"tok\" dir=\"ltr\">arr[mid]</code> חיובי והמפתח שלילי חייבים ללכת שמאלה, ובדיקה של <code class=\"tok\" dir=\"ltr\">key &lt; arr[mid]</code> בלבד שולחת ימינה בטעות.",
    "חיפוש לינארי: נכון אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ולא מקבל את נקודות היעילות."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** `int sum_chars(char* str, char ch)` המקבלת מחרוזת `str` ותו `ch`, ומחזירה את מספר הפעמים שבהן התו מופיע במחרוזת.\nלדוגמא: עבור `str=\"street\"` ו-`ch='t'` הפונקציה תחזיר `2`.",
   "solution": "**פתרון רשמי** (25A-A עמ' 4):\n```c\nint sum_chars(char* str, char ch)\n{\n   if (*str == '\\0')\n      return 0;\n   if (*str == ch)\n      return 1 + sum_chars(str + 1, ch);\n   return sum_chars(str + 1, ch);\n}\n```\nמקרה בסיס: סוף המחרוזת מחזיר $0$. אם התו הנוכחי שווה ל-`ch` מוסיפים $1$ לספירה של שאר המחרוזת, אחרת ממשיכים בלי להוסיף.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "מקרה בסיס: `*str == '\\0'` מחזיר `0`",
     "points": 8,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">*str == '\\0'</code> מחזיר <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "כשהתו הנוכחי שווה ל-`ch` מחזירים `1 +` קריאה רקורסיבית על `str + 1`",
     "points": 8,
     "html": "כשהתו הנוכחי שווה ל-<code class=\"tok\" dir=\"ltr\">ch</code> מחזירים <code class=\"tok\" dir=\"ltr\">1 +</code> קריאה רקורסיבית על <code class=\"tok\" dir=\"ltr\">str + 1</code>"
    },
    {
     "text": "אחרת מחזירים את הקריאה הרקורסיבית על `str + 1` בלי להוסיף",
     "points": 7,
     "html": "אחרת מחזירים את הקריאה הרקורסיבית על <code class=\"tok\" dir=\"ltr\">str + 1</code> בלי להוסיף"
    },
    {
     "text": "התקדמות בכל קריאה (`str + 1`) כך שהרקורסיה מסתיימת, ושימוש ב-`ch` כפרמטר ולא בלולאה",
     "points": 3,
     "html": "התקדמות בכל קריאה (<code class=\"tok\" dir=\"ltr\">str + 1</code>) כך שהרקורסיה מסתיימת, ושימוש ב-<code class=\"tok\" dir=\"ltr\">ch</code> כפרמטר ולא בלולאה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח את מקרה הבסיס של סוף המחרוזת, ולכן הרקורסיה קוראת מעבר ל-`'\\0'`.",
    "להשתמש בלולאה או במשתנה גלובלי/סטטי במקום ברקורסיה, שהוראות השאלה דורשות.",
    "להחזיר `1` בלבד כשיש התאמה (בלי להמשיך), או לשכוח `+ 1` ולהחזיר רק את הספירה של השאר."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `sum_chars(\"aXa\", 'a')`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`2`",
       "html": "<code class=\"tok\" dir=\"ltr\">2</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`3`",
       "html": "<code class=\"tok\" dir=\"ltr\">3</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      }
     ],
     "correctId": "a",
     "explain": "התו הראשון והאחרון שווים ל-`'a'`: 1 + 0 + 1 = 2 (ריצה אמיתית: 2).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">sum_chars(\"aXa\", 'a')</code>?",
     "explainHtml": "התו הראשון והאחרון שווים ל-<code class=\"tok\" dir=\"ltr\">'a'</code>: 1 + 0 + 1 = 2 (ריצה אמיתית: 2)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה `sum_chars(\"street\", 'z')` ומה מחזירה `sum_chars(\"street\", 'e')`, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0` ואז `2`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">2</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`0` ואז `1`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`-1` ואז `2`",
       "html": "<code class=\"tok\" dir=\"ltr\">-1</code> ואז <code class=\"tok\" dir=\"ltr\">2</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`1` ואז `2`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">2</code>"
      }
     ],
     "correctId": "a",
     "explain": "אין `z` ולכן 0, ו-`e` מופיע פעמיים ב-`street` ולכן 2 (ריצה אמיתית: 0 ו-2).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">sum_chars(\"street\", 'z')</code> ומה מחזירה <code class=\"tok\" dir=\"ltr\">sum_chars(\"street\", 'e')</code>, לפי הסדר?",
     "explainHtml": "אין <code class=\"tok\" dir=\"ltr\">z</code> ולכן 0, ו-<code class=\"tok\" dir=\"ltr\">e</code> מופיע פעמיים ב-<code class=\"tok\" dir=\"ltr\">street</code> ולכן 2 (ריצה אמיתית: 0 ו-2)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "___",
      "   return sum_chars(str + 1, ch);",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return 1 + sum_chars(str + 1, ch);",
       "html": "return 1 + sum_chars(str + 1, ch);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return 1;",
       "html": "return 1;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return sum_chars(str + 1, ch) - 1;",
       "html": "return sum_chars(str + 1, ch) - 1;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return 1 + sum_chars(str, ch);",
       "html": "return 1 + sum_chars(str, ch);"
      }
     ],
     "correctId": "a",
     "explain": "מוסיפים 1 על ההתאמה הנוכחית וממשיכים עם שאר המחרוזת (`str + 1`).",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "מוסיפים 1 על ההתאמה הנוכחית וממשיכים עם שאר המחרוזת (<code class=\"tok\" dir=\"ltr\">str + 1</code>).",
     "linesHtml": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "___",
      "   return sum_chars(str + 1, ch);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `sum_chars`.",
     "code": true,
     "lines": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "      return 1 + sum_chars(str + 1, ch);",
      "   return sum_chars(str + 1, ch);",
      "}"
     ],
     "explain": "קודם מקרה הבסיס, אחר כך מקרה ההתאמה, ובסוף ההמשך בלי התאמה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">sum_chars</code>.",
     "explainHtml": "קודם מקרה הבסיס, אחר כך מקרה ההתאמה, ובסוף ההמשך בלי התאמה.",
     "linesHtml": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "      return 1 + sum_chars(str + 1, ch);",
      "   return sum_chars(str + 1, ch);",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה בגרסה הבאה. איזו?",
     "code": true,
     "lines": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "      return 1;",
      "   return sum_chars(str + 1, ch);",
      "}"
     ],
     "bugIndex": 5,
     "explain": "`return 1;` עוצר את הספירה בהתאמה הראשונה, ולכן `\"aaaa\"` ייתן 1 במקום 4.",
     "promptHtml": "שורה אחת שונתה בגרסה הבאה. איזו?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">return 1;</code> עוצר את הספירה בהתאמה הראשונה, ולכן <code class=\"tok\" dir=\"ltr\">\"aaaa\"</code> ייתן 1 במקום 4.",
     "linesHtml": [
      "int sum_chars(char* str, char ch)",
      "{",
      "   if (*str == '\\0')",
      "      return 0;",
      "   if (*str == ch)",
      "      return 1;",
      "   return sum_chars(str + 1, ch);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-A-Q3",
   "partKey": "",
   "examCode": "25A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> <code class=\"tok\" dir=\"ltr\">int sum_chars(char* str, char ch)</code> המקבלת מחרוזת <code class=\"tok\" dir=\"ltr\">str</code> ותו <code class=\"tok\" dir=\"ltr\">ch</code>, ומחזירה את מספר הפעמים שבהן התו מופיע במחרוזת.<br>לדוגמא: עבור <code class=\"tok\" dir=\"ltr\">str=\"street\"</code> ו-<code class=\"tok\" dir=\"ltr\">ch='t'</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">2</code>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (25A-A עמ' 4):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int sum_chars(char* str, char ch)\n{\n   if (*str == '\\0')\n      return 0;\n   if (*str == ch)\n      return 1 + sum_chars(str + 1, ch);\n   return sum_chars(str + 1, ch);\n}</code></pre>מקרה בסיס: סוף המחרוזת מחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>. אם התו הנוכחי שווה ל-<code class=\"tok\" dir=\"ltr\">ch</code> מוסיפים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> לספירה של שאר המחרוזת, אחרת ממשיכים בלי להוסיף.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לשכוח את מקרה הבסיס של סוף המחרוזת, ולכן הרקורסיה קוראת מעבר ל-<code class=\"tok\" dir=\"ltr\">'\\0'</code>.",
    "להשתמש בלולאה או במשתנה גלובלי/סטטי במקום ברקורסיה, שהוראות השאלה דורשות.",
    "להחזיר <code class=\"tok\" dir=\"ltr\">1</code> בלבד כשיש התאמה (בלי להמשיך), או לשכוח <code class=\"tok\" dir=\"ltr\">+ 1</code> ולהחזיר רק את הספירה של השאר."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "matrices",
   "question": "נתון מערך דו-ממדי בגודל $N\\times N$. נגדיר מערך כ\"**סימטרי מושלם**\" אם הוא סימטרי ביחס לשורות והן ביחס לעמודות. כלומר:\n1. השורה הראשונה זהה לשורה האחרונה, השורה השנייה זהה לשורה לפני אחרונה, וכן הלאה.\n2. העמודה הראשונה זהה לעמודה האחרונה, העמודה השנייה זהה לעמודה לפני אחרונה, וכן הלאה.\nבקוד למטה מופיעים דוגמה למערך דו-ממדי סימטרי מושלם ודוגמה למערך שאינו סימטרי מושלם (יש לו שלוש הפרות: בשורה שלישית `7≠6`, בשורה אחרונה `4` שונה מ-`1` של שורה ראשונה וגם של תחילת שורה אחרונה).\nעליכם לממש את הפונקציה הבאה: `countSymmetricViolations` הסופרת כמה הפרות יש במערך דו-ממדי אם אינו סימטרי מושלם (אם יש 0 הפרות זה מערך סימטרי מושלם).\nיש לבדוק סימטריה באופן יעיל (לא לגשת לכל ערך במטריצה יותר מפעמיים).\nהפונקציה מחזירה מספר הפרות.",
   "solution": "**פתרון רשמי** (25A-A עמ' 6):\n```c\nint countSymmetricViolations(int matrix[N][N])\n{\n   int violations = 0;\n\n   // rows\n   for (int i = 0; i < N / 2; i++) {\n      for (int j = 0; j < N; j++) {\n         if (matrix[i][j] != matrix[N - 1 - i][j]) {\n            violations++;\n         }\n      }\n   }\n\n   // columns\n   for (int i = 0; i < N; i++) {\n      for (int j = 0; j < N / 2; j++) {\n         if (matrix[i][j] != matrix[i][N - 1 - j]) {\n            violations++;\n         }\n      }\n   }\n   return violations;\n}\n```\nבודקים שורות: משווים את שורה $i$ לשורה $N-1-i$ רק עבור חצי העליון של השורות, ועמודות באופן דומה עבור חצי השמאלי של העמודות. כל תא נבדק לכל היותר פעמיים.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 27,
   "contextId": "25A-A-c4",
   "rubric": [
    {
     "text": "לולאת השורות: `i` רץ רק עד `N / 2` ו-`j` על כל העמודות",
     "points": 6,
     "html": "לולאת השורות: <code class=\"tok\" dir=\"ltr\">i</code> רץ רק עד <code class=\"tok\" dir=\"ltr\">N / 2</code> ו-<code class=\"tok\" dir=\"ltr\">j</code> על כל העמודות"
    },
    {
     "text": "השוואה נכונה של `matrix[i][j]` ל-`matrix[N - 1 - i][j]` וספירת הפרה",
     "points": 7,
     "html": "השוואה נכונה של <code class=\"tok\" dir=\"ltr\">matrix[i][j]</code> ל-<code class=\"tok\" dir=\"ltr\">matrix[N - 1 - i][j]</code> וספירת הפרה"
    },
    {
     "text": "לולאת העמודות: `j` רץ עד `N / 2`, והשוואה ל-`matrix[i][N - 1 - j]`",
     "points": 7,
     "html": "לולאת העמודות: <code class=\"tok\" dir=\"ltr\">j</code> רץ עד <code class=\"tok\" dir=\"ltr\">N / 2</code>, והשוואה ל-<code class=\"tok\" dir=\"ltr\">matrix[i][N - 1 - j]</code>"
    },
    {
     "text": "אתחול מונה `violations`, הגדלה בכל הפרה והחזרתו בסוף",
     "points": 3,
     "html": "אתחול מונה <code class=\"tok\" dir=\"ltr\">violations</code>, הגדלה בכל הפרה והחזרתו בסוף"
    },
    {
     "text": "יעילות: כל תא נבדק לכל היותר פעמיים (חצי מטריצה בכל לולאה)",
     "points": 4,
     "html": "יעילות: כל תא נבדק לכל היותר פעמיים (חצי מטריצה בכל לולאה)"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לרוץ על כל השורות (`i < N`) ולספור כל זוג פעמיים, כך שכל הפרה נספרת כפול ושוברים את דרישת היעילות.",
    "לבדוק רק סימטריה אחת (שורות או עמודות) ולשכוח את השנייה.",
    "טעות באינדקס ההשתקפות: `N - i` במקום `N - 1 - i` יוצאת מגבולות המערך."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "עבור `notPerfect`, כמה הפרות סופרת לולאת השורות בלבד (`i < N / 2`, השוואה ל-`matrix[N - 1 - i][j]`)?",
     "answer": 1,
     "tol": 0,
     "explain": "רק התא בפינה (עמודה 4: 1 בשורה 0 מול 4 בשורה 4) נבדל (ריצה אמיתית: 1).",
     "promptHtml": "עבור <code class=\"tok\" dir=\"ltr\">notPerfect</code>, כמה הפרות סופרת לולאת השורות בלבד (<code class=\"tok\" dir=\"ltr\">i &lt; N / 2</code>, השוואה ל-<code class=\"tok\" dir=\"ltr\">matrix[N - 1 - i][j]</code>)?",
     "explainHtml": "רק התא בפינה (עמודה 4: 1 בשורה 0 מול 4 בשורה 4) נבדל (ריצה אמיתית: 1)."
    },
    {
     "type": "numeric",
     "prompt": "וכמה הפרות סופרת לולאת העמודות באותה מטריצה?",
     "answer": 2,
     "tol": 0,
     "explain": "בשורה 2 הערכים 6 ו-7 שונים, ובשורה 4 הערכים 1 ו-4 שונים: 2 הפרות (ריצה אמיתית: 2, ובסך הכול 3).",
     "promptHtml": "וכמה הפרות סופרת לולאת העמודות באותה מטריצה?",
     "explainHtml": "בשורה 2 הערכים 6 ו-7 שונים, ובשורה 4 הערכים 1 ו-4 שונים: 2 הפרות (ריצה אמיתית: 2, ובסך הכול 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את כותרת הלולאה החיצונית של בדיקת השורות.",
     "code": true,
     "lines": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "___",
      "      for (int j = 0; j < N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i < N; i++) {",
      "      for (int j = 0; j < N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "for (int i = 0; i < N / 2; i++) {",
       "html": "for (int i = 0; i &lt; N / 2; i++) {"
      },
      {
       "id": "b",
       "type": "text",
       "value": "for (int i = 0; i < N; i++) {",
       "html": "for (int i = 0; i &lt; N; i++) {"
      },
      {
       "id": "c",
       "type": "text",
       "value": "for (int i = 1; i < N / 2; i++) {",
       "html": "for (int i = 1; i &lt; N / 2; i++) {"
      },
      {
       "id": "d",
       "type": "text",
       "value": "for (int i = 0; i < N - 1; i++) {",
       "html": "for (int i = 0; i &lt; N - 1; i++) {"
      }
     ],
     "correctId": "a",
     "explain": "די לרוץ על חצי השורות: כל שורה מושווית לשורת ההשתקפות שלה, ולכן אין צורך בחצי השני.",
     "promptHtml": "השלימו את כותרת הלולאה החיצונית של בדיקת השורות.",
     "explainHtml": "די לרוץ על חצי השורות: כל שורה מושווית לשורת ההשתקפות שלה, ולכן אין צורך בחצי השני.",
     "linesHtml": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "___",
      "      for (int j = 0; j &lt; N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i &lt; N; i++) {",
      "      for (int j = 0; j &lt; N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `countSymmetricViolations`.",
     "code": true,
     "lines": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "   for (int i = 0; i < N / 2; i++) {",
      "      for (int j = 0; j < N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i < N; i++) {",
      "      for (int j = 0; j < N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ],
     "explain": "אתחול, בדיקת שורות, בדיקת עמודות, והחזרת המונה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">countSymmetricViolations</code>.",
     "explainHtml": "אתחול, בדיקת שורות, בדיקת עמודות, והחזרת המונה.",
     "linesHtml": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "   for (int i = 0; i &lt; N / 2; i++) {",
      "      for (int j = 0; j &lt; N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i &lt; N; i++) {",
      "      for (int j = 0; j &lt; N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. איזו, ומה קורה בגללה?",
     "code": true,
     "lines": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "   for (int i = 0; i < N; i++) {",
      "      for (int j = 0; j < N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i < N; i++) {",
      "      for (int j = 0; j < N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ],
     "bugIndex": 4,
     "explain": "`i < N` בלולאת השורות סופר כל זוג פעמיים: עבור `notPerfect` מתקבל 4 במקום 3 (ריצה אמיתית: 4).",
     "promptHtml": "שורה אחת שונתה. איזו, ומה קורה בגללה?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">i &lt; N</code> בלולאת השורות סופר כל זוג פעמיים: עבור <code class=\"tok\" dir=\"ltr\">notPerfect</code> מתקבל 4 במקום 3 (ריצה אמיתית: 4).",
     "linesHtml": [
      "int countSymmetricViolations(int matrix[N][N])",
      "{",
      "   int violations = 0;",
      "   // rows",
      "   for (int i = 0; i &lt; N; i++) {",
      "      for (int j = 0; j &lt; N; j++) {",
      "         if (matrix[i][j] != matrix[N - 1 - i][j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   // columns",
      "   for (int i = 0; i &lt; N; i++) {",
      "      for (int j = 0; j &lt; N / 2; j++) {",
      "         if (matrix[i][j] != matrix[i][N - 1 - j]) {",
      "            violations++;",
      "         }",
      "      }",
      "   }",
      "   return violations;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-A-Q4",
   "partKey": "",
   "examCode": "25A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "נתון מערך דו-ממדי בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>×</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N\\times N</annotation></semantics></math></span>. נגדיר מערך כ\"<strong>סימטרי מושלם</strong>\" אם הוא סימטרי ביחס לשורות והן ביחס לעמודות. כלומר:<br>1. השורה הראשונה זהה לשורה האחרונה, השורה השנייה זהה לשורה לפני אחרונה, וכן הלאה.<br>2. העמודה הראשונה זהה לעמודה האחרונה, העמודה השנייה זהה לעמודה לפני אחרונה, וכן הלאה.<br>בקוד למטה מופיעים דוגמה למערך דו-ממדי סימטרי מושלם ודוגמה למערך שאינו סימטרי מושלם (יש לו שלוש הפרות: בשורה שלישית <code class=\"tok\" dir=\"ltr\">7≠6</code>, בשורה אחרונה <code class=\"tok\" dir=\"ltr\">4</code> שונה מ-<code class=\"tok\" dir=\"ltr\">1</code> של שורה ראשונה וגם של תחילת שורה אחרונה).<br>עליכם לממש את הפונקציה הבאה: <code class=\"tok\" dir=\"ltr\">countSymmetricViolations</code> הסופרת כמה הפרות יש במערך דו-ממדי אם אינו סימטרי מושלם (אם יש 0 הפרות זה מערך סימטרי מושלם).<br>יש לבדוק סימטריה באופן יעיל (לא לגשת לכל ערך במטריצה יותר מפעמיים).<br>הפונקציה מחזירה מספר הפרות.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (25A-A עמ' 6):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int countSymmetricViolations(int matrix[N][N])\n{\n   int violations = 0;\n\n   // rows\n   for (int i = 0; i &lt; N / 2; i++) {\n      for (int j = 0; j &lt; N; j++) {\n         if (matrix[i][j] != matrix[N - 1 - i][j]) {\n            violations++;\n         }\n      }\n   }\n\n   // columns\n   for (int i = 0; i &lt; N; i++) {\n      for (int j = 0; j &lt; N / 2; j++) {\n         if (matrix[i][j] != matrix[i][N - 1 - j]) {\n            violations++;\n         }\n      }\n   }\n   return violations;\n}</code></pre>בודקים שורות: משווים את שורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">i</annotation></semantics></math></span> לשורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>−</mo><mn>1</mn><mo>−</mo><mi>i</mi></mrow><annotation encoding=\"application/x-tex\">N-1-i</annotation></semantics></math></span> רק עבור חצי העליון של השורות, ועמודות באופן דומה עבור חצי השמאלי של העמודות. כל תא נבדק לכל היותר פעמיים.",
   "pointsTotal": 27,
   "pitfallsHtml": [
    "לרוץ על כל השורות (<code class=\"tok\" dir=\"ltr\">i &lt; N</code>) ולספור כל זוג פעמיים, כך שכל הפרה נספרת כפול ושוברים את דרישת היעילות.",
    "לבדוק רק סימטריה אחת (שורות או עמודות) ולשכוח את השנייה.",
    "טעות באינדקס ההשתקפות: <code class=\"tok\" dir=\"ltr\">N - i</code> במקום <code class=\"tok\" dir=\"ltr\">N - 1 - i</code> יוצאת מגבולות המערך."
   ]
  }
 ]
};
