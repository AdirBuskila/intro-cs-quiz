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
   "computation",
   "proof",
   "code"
  ],
  "built": "2026-10-18T18:13:27Z",
  "exams": [
   {
    "examCode": "19A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
    "year": 2019,
    "source": "exam",
    "examDate": "19.2.2019"
   },
   {
    "examCode": "19A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
    "year": 2019,
    "source": "exam",
    "examDate": "18.3.2019"
   },
   {
    "examCode": "20A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
    "year": 2020,
    "source": "exam",
    "examDate": "11.02.2020"
   },
   {
    "examCode": "22A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
    "year": 2022,
    "source": "exam",
    "examDate": "2022"
   },
   {
    "examCode": "22A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
    "year": 2022,
    "source": "exam",
    "examDate": "2022"
   },
   {
    "examCode": "23A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
    "year": 2023,
    "source": "exam",
    "examDate": "26.01.2023"
   },
   {
    "examCode": "24A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
    "year": 2024,
    "source": "exam",
    "examDate": "14.03.2024"
   },
   {
    "examCode": "24A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
    "year": 2024,
    "source": "exam",
    "examDate": "8.04.2024"
   },
   {
    "examCode": "25A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד א (5.02.2025)",
    "year": 2025,
    "source": "exam",
    "examDate": "5.02.2025"
   },
   {
    "examCode": "25A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
    "year": 2025,
    "source": "exam",
    "examDate": "4.03.2025"
   }
  ],
  "counts": {
   "total": 53,
   "contexts": 8,
   "math": 131,
   "steps": 247
  }
 },
 "contexts": {
  "20A-A-c1": {
   "kind": "code",
   "title": "שאלה 1: הפונקציה הנתונה (מקבלת מערך וגודלו)",
   "code": "double fun_rec(double *a, int n)\n{\n        if (n == 1) return a[0];\n\n        return a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n;\n}",
   "id": "20A-A-c1",
   "codeHtml": "double fun_rec(double *a, int n)\n{\n        if (n == 1) return a[0];\n\n        return a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n;\n}",
   "titleHtml": "שאלה 1: הפונקציה הנתונה (מקבלת מערך וגודלו)"
  },
  "20A-A-c3": {
   "kind": "code",
   "title": "שאלה 3: השלמת הפונקציה partition_B",
   "code": "void partition_B(int* A, int n, int* B, int m)\n{\n        int i=0, k = 0, last = -1;\n\n        while (______________________________)\n        {\n                if (B[ i ] == A[ k ])\n                {\n                        ______________________________\n\n                        ______________________________\n                }\n                else\n                        if (B[ i ] > A[ k ])\n\n                                ____________________________\n                        else\n\n                                ____________________________\n        }\n}",
   "id": "20A-A-c3",
   "codeHtml": "void partition_B(int* A, int n, int* B, int m)\n{\n        int i=0, k = 0, last = -1;\n\n        while (______________________________)\n        {\n                if (B[ i ] == A[ k ])\n                {\n                        ______________________________\n\n                        ______________________________\n                }\n                else\n                        if (B[ i ] &gt; A[ k ])\n\n                                ____________________________\n                        else\n\n                                ____________________________\n        }\n}",
   "titleHtml": "שאלה 3: השלמת הפונקציה partition_B"
  },
  "20A-A-c5": {
   "kind": "code",
   "title": "שאלה 5: הגדרות ופונקציית העזר initializeCountArray",
   "code": "#define R 6\n#define C 5\n\nvoid initializeCountArray(int *count)\n{\n        int i;\n        for (i = 0; i < 10; i++) count[i] = 0;\n}",
   "id": "20A-A-c5",
   "codeHtml": "#define R 6\n#define C 5\n\nvoid initializeCountArray(int *count)\n{\n        int i;\n        for (i = 0; i &lt; 10; i++) count[i] = 0;\n}",
   "titleHtml": "שאלה 5: הגדרות ופונקציית העזר initializeCountArray"
  },
  "22A-B-c1a": {
   "kind": "code",
   "title": "שאלה 1 סעיף א: מטריצות לדוגמה",
   "code": "// example 1 -- the function returns 1\nint M1[4][4] = {\n    {10,  2,  7,  1},\n    { 2,  7, -1,  6},\n    { 1, -2, -6, -5},\n    {-2,  4,  7,  9}\n};\n// 2+7+1 = 10, 2+(-1)+6 = 7, 1+(-2)+(-5) = -6, (-2)+4+7 = 9\n\n// example 2 -- the function returns 0\nint M2[4][4] = {\n    {10,  2,  7,  1},\n    { 2,  7, -1,  5},\n    { 1, -2, -6, -5},\n    {-2,  4,  7,  9}\n};\n// second row: 2+(-1)+5 != 7",
   "id": "22A-B-c1a",
   "codeHtml": "// example 1 -- the function returns 1\nint M1[4][4] = {\n    {10,  2,  7,  1},\n    { 2,  7, -1,  6},\n    { 1, -2, -6, -5},\n    {-2,  4,  7,  9}\n};\n// 2+7+1 = 10, 2+(-1)+6 = 7, 1+(-2)+(-5) = -6, (-2)+4+7 = 9\n\n// example 2 -- the function returns 0\nint M2[4][4] = {\n    {10,  2,  7,  1},\n    { 2,  7, -1,  5},\n    { 1, -2, -6, -5},\n    {-2,  4,  7,  9}\n};\n// second row: 2+(-1)+5 != 7",
   "titleHtml": "שאלה 1 סעיף א: מטריצות לדוגמה"
  },
  "22A-B-c1b": {
   "kind": "code",
   "title": "שאלה 1 סעיף ב: מטריצות לדוגמה",
   "code": "// example 1 -- the function returns 1\nint M1[4][4] = {\n    {10,  2,   7, -1},\n    { 2,  7, -20,  4},\n    { 9, -2,  -6,  6},\n    {-1,  7,   7,  9}\n};\n// 2+9+(-1) = 10, 2+(-2)+7 = 7, 7+(-20)+7 = -6, (-1)+4+6 = 9\n\n// example 2 -- the function returns 0\nint M2[4][4] = {\n    {10,  2,   7,  1},\n    { 2,  7, -20,  4},\n    { 9, -2,  -6,  6},\n    {-1,  4,   7,  9}\n};\n// second column: 2+(-2)+4 != 7",
   "id": "22A-B-c1b",
   "codeHtml": "// example 1 -- the function returns 1\nint M1[4][4] = {\n    {10,  2,   7, -1},\n    { 2,  7, -20,  4},\n    { 9, -2,  -6,  6},\n    {-1,  7,   7,  9}\n};\n// 2+9+(-1) = 10, 2+(-2)+7 = 7, 7+(-20)+7 = -6, (-1)+4+6 = 9\n\n// example 2 -- the function returns 0\nint M2[4][4] = {\n    {10,  2,   7,  1},\n    { 2,  7, -20,  4},\n    { 9, -2,  -6,  6},\n    {-1,  4,   7,  9}\n};\n// second column: 2+(-2)+4 != 7",
   "titleHtml": "שאלה 1 סעיף ב: מטריצות לדוגמה"
  },
  "23A-A-c4": {
   "kind": "image",
   "title": "שאלה 4: דוגמה לעמק",
   "image": "images/exams/23A-A-c4.png",
   "caption": "מטריצת גבהים של עמק (255 = החומה)",
   "id": "23A-A-c4",
   "captionHtml": "מטריצת גבהים של עמק (255 = החומה)",
   "titleHtml": "שאלה 4: דוגמה לעמק"
  },
  "25A-A-c4": {
   "kind": "code",
   "title": "שאלה 4: דוגמאות וחתימה",
   "code": "// perfectly symmetric matrix\nint perfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 9, 8, 9, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 1}\n};\n\n// not perfectly symmetric: row 3 has 7 != 6 and the last row has 4 != 1\nint notPerfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 6, 8, 7, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 4}\n};\n\n// signature\nint countSymmetricViolations(int matrix[N][N]);",
   "id": "25A-A-c4",
   "codeHtml": "// perfectly symmetric matrix\nint perfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 9, 8, 9, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 1}\n};\n\n// not perfectly symmetric: row 3 has 7 != 6 and the last row has 4 != 1\nint notPerfect[5][5] = {\n   {1, 2, 8, 2, 1},\n   {7, 4, 6, 4, 7},\n   {5, 6, 8, 7, 5},\n   {7, 4, 6, 4, 7},\n   {1, 2, 8, 2, 4}\n};\n\n// signature\nint countSymmetricViolations(int matrix[N][N]);",
   "titleHtml": "שאלה 4: דוגמאות וחתימה"
  },
  "25A-B-c4": {
   "kind": "code",
   "title": "שאלה 4: מערך לדוגמה",
   "code": "int image[6][6] = {\n   {0, 0, 1, 0, 1, 1},\n   {1, 1, 1, 1, 1, 1},\n   {1, 1, 1, 1, 1, 0},\n   {1, 1, 1, 1, 1, 1},\n   {1, 1, 0, 1, 1, 1},\n   {1, 1, 1, 1, 1, 1}\n};",
   "id": "25A-B-c4",
   "codeHtml": "int image[6][6] = {\n   {0, 0, 1, 0, 1, 1},\n   {1, 1, 1, 1, 1, 1},\n   {1, 1, 1, 1, 1, 0},\n   {1, 1, 1, 1, 1, 1},\n   {1, 1, 0, 1, 1, 1},\n   {1, 1, 1, 1, 1, 1}\n};",
   "titleHtml": "שאלה 4: מערך לדוגמה"
  }
 },
 "questions": [
  {
   "num": 1,
   "kind": "computation",
   "topic": "recursion",
   "question": "נתונה הפונקציה הבאה.\n```c\nint fun (int x, int y)\n{\n        if (y<0)\n        {\n                y = -y;\n                x = -x;\n        }\n        if(y==1)\n                return x;\n        return fun(x,y-1)+x;\n}\n```\nמה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:\na. סכום x ו-y\nb. מכפלת x ו-y\nc. x עם סימן הפוך\nd. y עם סימן הפוך\ne. אף אחת מהתשובות לעיל לא נכונה",
   "solution": "**פתרון רשמי** (19A-A עמ' 1-2): תשובה **b**, מכפלת x ו-y.\nהפונקציה סוכמת y פעמים את x, כלומר מחשבת מכפלת $xy$.\nאם y שלילי, הפונקציה סוכמת $(-y)$ פעמים את $-x$, כלומר גם כן מכפלת $xy$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 15,
   "rubric": [
    {
     "text": "בחירת התשובה הנכונה, b: הפונקציה מחזירה את מכפלת x ו-y",
     "points": 5,
     "html": "בחירת התשובה הנכונה, b: הפונקציה מחזירה את מכפלת x ו-y"
    },
    {
     "text": "נימוק: כל קריאה מוסיפה את x ובסיס הרקורסיה y==1 מחזיר x, ולכן x מסוכם y פעמים",
     "points": 5,
     "html": "נימוק: כל קריאה מוסיפה את x ובסיס הרקורסיה y==1 מחזיר x, ולכן x מסוכם y פעמים"
    },
    {
     "text": "טיפול ב-y שלילי: הופכים את הסימן של x וגם של y לפני הרקורסיה, והתוצאה נשארת $xy$",
     "points": 5,
     "html": "טיפול ב-y שלילי: הופכים את הסימן של x וגם של y לפני הרקורסיה, והתוצאה נשארת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">xy</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבחור a (סכום x ו-y): כל קריאה רקורסיבית מוסיפה רק את x, ולא את y.",
    "להתעלם מ-y שלילי: הפונקציה הופכת את הסימן של x וגם של y, ולכן התוצאה נשארת $xy$ ולא $-xy$.",
    "לטעות בבסיס הרקורסיה: הוא `y==1` ומחזיר `x`, לא `y==0` שמחזיר 0."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun(3, 4)`?",
     "answer": 12,
     "tol": 0,
     "explain": "הפונקציה סוכמת y פעמים את x: $3+3+3+3=12$ (ריצה אמיתית: 12).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun(3, 4)</code>?",
     "explainHtml": "הפונקציה סוכמת y פעמים את x: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">3+3+3+3=12</annotation></semantics></math></span> (ריצה אמיתית: 12)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun(5, -3)`?",
     "answer": -15,
     "tol": 0,
     "explain": "y שלילי, לכן y הופך ל-3 ו-x הופך ל-$-5$: סוכמים שלוש פעמים את $-5$ ומקבלים $-15$, כלומר $5\\cdot(-3)$ (ריצה אמיתית: -15).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun(5, -3)</code>?",
     "explainHtml": "y שלילי, לכן y הופך ל-3 ו-x הופך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">-5</annotation></semantics></math></span>: סוכמים שלוש פעמים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">-5</annotation></semantics></math></span> ומקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">-15</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">5\\cdot(-3)</annotation></semantics></math></span> (ריצה אמיתית: -15)."
    },
    {
     "type": "numeric",
     "prompt": "כמה קריאות לפונקציה `fun` מתבצעות בסך הכול (כולל הקריאה הראשונה) עבור `fun(3, 4)`?",
     "answer": 4,
     "tol": 0,
     "explain": "הערך y יורד מ-4 ל-1 ובכל קריאה פוחת ב-1: ארבע קריאות, כלומר y קריאות (ריצה אמיתית: 4).",
     "promptHtml": "כמה קריאות לפונקציה <code class=\"tok\" dir=\"ltr\">fun</code> מתבצעות בסך הכול (כולל הקריאה הראשונה) עבור <code class=\"tok\" dir=\"ltr\">fun(3, 4)</code>?",
     "explainHtml": "הערך y יורד מ-4 ל-1 ובכל קריאה פוחת ב-1: ארבע קריאות, כלומר y קריאות (ריצה אמיתית: 4)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q1",
   "partKey": "",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "נתונה הפונקציה הבאה.<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int fun (int x, int y)\n{\n        if (y&lt;0)\n        {\n                y = -y;\n                x = -x;\n        }\n        if(y==1)\n                return x;\n        return fun(x,y-1)+x;\n}</code></pre>מה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:<br>a. סכום x ו-y<br>b. מכפלת x ו-y<br>c. x עם סימן הפוך<br>d. y עם סימן הפוך<br>e. אף אחת מהתשובות לעיל לא נכונה",
   "solutionHtml": "<strong>פתרון רשמי</strong> (19A-A עמ' 1-2): תשובה <strong>b</strong>, מכפלת x ו-y.<br>הפונקציה סוכמת y פעמים את x, כלומר מחשבת מכפלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">xy</annotation></semantics></math></span>.<br>אם y שלילי, הפונקציה סוכמת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>−</mo><mi>y</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(-y)</annotation></semantics></math></span> פעמים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">-x</annotation></semantics></math></span>, כלומר גם כן מכפלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">xy</annotation></semantics></math></span>.",
   "pointsTotal": 15,
   "pitfallsHtml": [
    "לבחור a (סכום x ו-y): כל קריאה רקורסיבית מוסיפה רק את x, ולא את y.",
    "להתעלם מ-y שלילי: הפונקציה הופכת את הסימן של x וגם של y, ולכן התוצאה נשארת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">xy</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mi>x</mi><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">-xy</annotation></semantics></math></span>.",
    "לטעות בבסיס הרקורסיה: הוא <code class=\"tok\" dir=\"ltr\">y==1</code> ומחזיר <code class=\"tok\" dir=\"ltr\">x</code>, לא <code class=\"tok\" dir=\"ltr\">y==0</code> שמחזיר 0."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** שמקבלת מערך $a$ וגודלו $n$. הפונקציה בודקת ומחזירה `1` אם המערך הוא **פלינדרום**, אחרת היא מחזירה `0`.\nלדוגמא:\nעבור מערך `a = {1,3,2,3,1}` ו-`n = 5`, הפונקציה תחזיר `1`.\nעבור מערך `a = {1,3,2,2,3,1}` ו-`n = 6`, הפונקציה תחזיר `1`.\nעבור מערך `a = {1,3,2,2,1}` ו-`n = 5`, הפונקציה תחזיר `0`.",
   "solution": "**פתרון רשמי** (19A-A עמ' 2):\n```c\nint isPalindromeRec(int *arr, int n)\n{\n      if (n <= 1)  // !!\n            return 1;\n      return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);\n}\n```\nמקרה בסיס: מערך באורך 0 או 1 הוא פלינדרום. אחרת משווים את האיבר הראשון לאחרון, ואם הם שווים ממשיכים ברקורסיה על הקטע הפנימי (`arr + 1`, `n - 2`).",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 20,
   "rubric": [
    {
     "text": "מקרה בסיס: `n <= 1` מחזיר `1`",
     "points": 5,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">n &lt;= 1</code> מחזיר <code class=\"tok\" dir=\"ltr\">1</code>"
    },
    {
     "text": "השוואת האיבר הראשון לאחרון, `arr[0]` מול `arr[n - 1]`, והחזרת `0` אם הם שונים",
     "points": 6,
     "html": "השוואת האיבר הראשון לאחרון, <code class=\"tok\" dir=\"ltr\">arr[0]</code> מול <code class=\"tok\" dir=\"ltr\">arr[n - 1]</code>, והחזרת <code class=\"tok\" dir=\"ltr\">0</code> אם הם שונים"
    },
    {
     "text": "קריאה רקורסיבית על הקטע הפנימי: `arr + 1` ו-`n - 2`",
     "points": 6,
     "html": "קריאה רקורסיבית על הקטע הפנימי: <code class=\"tok\" dir=\"ltr\">arr + 1</code> ו-<code class=\"tok\" dir=\"ltr\">n - 2</code>"
    },
    {
     "text": "רקורסיה בלבד, בלי לולאה, והחזרת תוצאת הקריאה",
     "points": 3,
     "html": "רקורסיה בלבד, בלי לולאה, והחזרת תוצאת הקריאה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "בסיס `n == 0` בלבד: במערך באורך אי-זוגי מגיעים ל-`n = 1` ואז ל-`n = -1`, והרקורסיה לא נעצרת.",
    "קריאה רקורסיבית עם `n - 1` במקום `n - 2`: מסירים רק קצה אחד, והקצה השני נשאר.",
    "השוואת איברים סמוכים במקום הראשון מול האחרון."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה קריאות ל-`isPalindromeRec` מתבצעות בסך הכול (כולל הראשונה) עבור `{1,3,2,2,3,1}` ו-`n = 6`?",
     "answer": 4,
     "tol": 0,
     "explain": "הערכים של `n` לאורך הקריאות: 6, 4, 2, 0. בכל קריאה מסירים שני איברים, ובקריאה עם $n=0$ מחזירים 1 (ריצה אמיתית: 4).",
     "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">isPalindromeRec</code> מתבצעות בסך הכול (כולל הראשונה) עבור <code class=\"tok\" dir=\"ltr\">{1,3,2,2,3,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code>?",
     "explainHtml": "הערכים של <code class=\"tok\" dir=\"ltr\">n</code> לאורך הקריאות: 6, 4, 2, 0. בכל קריאה מסירים שני איברים, ובקריאה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">n=0</annotation></semantics></math></span> מחזירים 1 (ריצה אמיתית: 4)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה: איך ממשיכים אחרי שהאיבר הראשון והאחרון שווים?",
     "code": true,
     "lines": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n <= 1) return 1;",
      "___",
      "}"
     ],
     "blankIndex": 3,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
       "html": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 1);",
       "html": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 1);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr, n - 2);",
       "html": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr, n - 2);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 2, n - 2);",
       "html": "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 2, n - 2);"
      }
     ],
     "correctId": "a",
     "explain": "מזיזים את תחילת המערך ב-1 ומקטינים את `n` ב-2, כך שרק הקטע הפנימי נבדק. `n - 1` משאיר קצה אחד, ובשתי האפשרויות האחרות הקטע שנבדק אינו הפנים (ריצה אמיתית: הן נכשלות על הדוגמאות).",
     "promptHtml": "השלימו את השורה החסרה: איך ממשיכים אחרי שהאיבר הראשון והאחרון שווים?",
     "explainHtml": "מזיזים את תחילת המערך ב-1 ומקטינים את <code class=\"tok\" dir=\"ltr\">n</code> ב-2, כך שרק הקטע הפנימי נבדק. <code class=\"tok\" dir=\"ltr\">n - 1</code> משאיר קצה אחד, ובשתי האפשרויות האחרות הקטע שנבדק אינו הפנים (ריצה אמיתית: הן נכשלות על הדוגמאות).",
     "linesHtml": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n &lt;= 1) return 1;",
      "___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `isPalindromeRec`.",
     "code": true,
     "lines": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n <= 1) return 1;",
      "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
      "}"
     ],
     "explain": "כותרת וסוגריים, מקרה הבסיס לפני הקריאה הרקורסיבית, ולבסוף ההשוואה והקריאה (ריצה אמיתית: כל החלפה של שתי שורות משנה את הפלט).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">isPalindromeRec</code>.",
     "explainHtml": "כותרת וסוגריים, מקרה הבסיס לפני הקריאה הרקורסיבית, ולבסוף ההשוואה והקריאה (ריצה אמיתית: כל החלפה של שתי שורות משנה את הפלט).",
     "linesHtml": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n &lt;= 1) return 1;",
      "   return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה אינה מזהה פלינדרום. מצאו אותה.",
     "code": true,
     "lines": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n <= 1) return 1;",
      "   return arr[0] == arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
      "}"
     ],
     "bugIndex": 3,
     "explain": "`==` במקום `!=` מחזיר 0 כשהקצוות שווים. עבור `{1,3,2,3,1}` מתקבל 0 במקום 1 (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה אינה מזהה פלינדרום. מצאו אותה.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">==</code> במקום <code class=\"tok\" dir=\"ltr\">!=</code> מחזיר 0 כשהקצוות שווים. עבור <code class=\"tok\" dir=\"ltr\">{1,3,2,3,1}</code> מתקבל 0 במקום 1 (ריצה אמיתית).",
     "linesHtml": [
      "int isPalindromeRec(int *arr, int n)",
      "{",
      "   if (n &lt;= 1) return 1;",
      "   return arr[0] == arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q2",
   "partKey": "",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> שמקבלת מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. הפונקציה בודקת ומחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם המערך הוא <strong>פלינדרום</strong>, אחרת היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא:<br>עבור מערך <code class=\"tok\" dir=\"ltr\">a = {1,3,2,3,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 5</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>.<br>עבור מערך <code class=\"tok\" dir=\"ltr\">a = {1,3,2,2,3,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>.<br>עבור מערך <code class=\"tok\" dir=\"ltr\">a = {1,3,2,2,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 5</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (19A-A עמ' 2):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int isPalindromeRec(int *arr, int n)\n{\n      if (n &lt;= 1)  // !!\n            return 1;\n      return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);\n}</code></pre>מקרה בסיס: מערך באורך 0 או 1 הוא פלינדרום. אחרת משווים את האיבר הראשון לאחרון, ואם הם שווים ממשיכים ברקורסיה על הקטע הפנימי (<code class=\"tok\" dir=\"ltr\">arr + 1</code>, <code class=\"tok\" dir=\"ltr\">n - 2</code>).",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "בסיס <code class=\"tok\" dir=\"ltr\">n == 0</code> בלבד: במערך באורך אי-זוגי מגיעים ל-<code class=\"tok\" dir=\"ltr\">n = 1</code> ואז ל-<code class=\"tok\" dir=\"ltr\">n = -1</code>, והרקורסיה לא נעצרת.",
    "קריאה רקורסיבית עם <code class=\"tok\" dir=\"ltr\">n - 1</code> במקום <code class=\"tok\" dir=\"ltr\">n - 2</code>: מסירים רק קצה אחד, והקצה השני נשאר.",
    "השוואת איברים סמוכים במקום הראשון מול האחרון."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "arrays",
   "question": "נאמר שמערך הוא **תמורה של פלינדרום**, אם המערך הוא פלינדרום או אם קיים סידור מחדש של איברי המערך כך שהמערך המסודר מחדש הוא פלינדרום.\nכתבו פונקציה **יעילה** שמקבלת מערך $a$ וגודלו $n$, כאשר כל איברי המערך הם מספרים שלמים בתחום בין `0` ל-`n-1`. הפונקציה בודקת ומחזירה `1` אם המערך הוא **תמורה של פלינדרום**, אחרת היא מחזירה `0`.\nלדוגמא:\nעבור `n = 7` ו-`a = {1,1,5,0,1,1,0}`, הפונקציה תחזיר `1`, כי אפשר לסדר את המערך מחדש כך שהוא יהיה פלינדרום: `a = {1,0,1,5,1,0,1}`.\nעל הפונקציה לרוץ בסדר גודל $n$.\nניתן להשתמש במערך עזר.",
   "solution": "**פתרון רשמי** (19A-A עמ' 2-3):\n```c\nint is_permutation_of_palindrom(int *a, int n)\n{\n      int i, count = 0;\n      int * temp = (int*)calloc(n, sizeof(int));\n      for (i = 0; i<n; i++)\n            temp[a[i]]++;\n      for (i = 0; i < n; i++)\n      {\n            if (temp[i] % 2==1)\n                  count++;\n      }\n      free(temp);\n      return count<2;\n}\n```\nאם מערך הוא פלינדרום, אז כל ערך מופיע מספר זוגי של פעמים, פרט למספר אחד שמופיע באמצע פלינדרום במקרה שהמערך הוא בגודל אי-זוגי. לכן כדי לבדוק האם מערך הוא תמורה של פלינדרום מספיק לספור כמות שערכים שמופיעים מספר אי-זוגי של פעמים. אם הכמות היא 0 או 1 המערך הוא תמורה של פלינדרום, אם הכמות גדולה מ-1 אין אפשרות לסדר את המערך כך שהוא יהיה פלינדרום.\nהערה: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, אז המערך אוטומטי בגודל אי-זוגי ואפשר להפוך אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, אז המערך הוא בגודל זוגי והוא תמורה של פלינדרום. לכן אין צורך לבדוק שני מקרים.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "א",
   "points": 25,
   "rubric": [
    {
     "text": "שימוש במערך עזר `temp` בגודל `n` כמערך מונים, כי הערכים בתחום 0 עד `n-1`",
     "points": 5,
     "html": "שימוש במערך עזר <code class=\"tok\" dir=\"ltr\">temp</code> בגודל <code class=\"tok\" dir=\"ltr\">n</code> כמערך מונים, כי הערכים בתחום 0 עד <code class=\"tok\" dir=\"ltr\">n-1</code>"
    },
    {
     "text": "ספירת מופעי כל ערך בסריקה אחת: `temp[a[i]]++`",
     "points": 6,
     "html": "ספירת מופעי כל ערך בסריקה אחת: <code class=\"tok\" dir=\"ltr\">temp[a[i]]++</code>"
    },
    {
     "text": "ספירת הערכים שמספר המופעים שלהם אי-זוגי",
     "points": 6,
     "html": "ספירת הערכים שמספר המופעים שלהם אי-זוגי"
    },
    {
     "text": "התנאי: מחזירים `1` כשיש לכל היותר ערך אי-זוגי אחד (`count < 2`)",
     "points": 5,
     "html": "התנאי: מחזירים <code class=\"tok\" dir=\"ltr\">1</code> כשיש לכל היותר ערך אי-זוגי אחד (<code class=\"tok\" dir=\"ltr\">count &lt; 2</code>)"
    },
    {
     "text": "סדר גודל $O(n)$ ושחרור המערך שהוקצה",
     "points": 3,
     "html": "סדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ושחרור המערך שהוקצה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק את כל הסידורים האפשריים של המערך: זמן עצום ולא $O(n)$.",
    "לדרוש `count == 0`: מערך באורך אי-זוגי, עם ערך אמצעי אחד, היה נפסל בטעות.",
    "למיין את המערך לפני הספירה: זמן $O(n\\log n)$ ולא $O(n)$ כנדרש."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בקריאה עם `a = {1,1,5,0,1,1,0}` ו-`n = 7`: כמה ערכים מופיעים במערך מספר אי-זוגי של פעמים?",
     "answer": 1,
     "tol": 0,
     "explain": "הערך 1 מופיע 4 פעמים, הערך 0 פעמיים והערך 5 פעם אחת, ולכן רק 5 אי-זוגי (ריצה אמיתית: `count = 1`).",
     "promptHtml": "בקריאה עם <code class=\"tok\" dir=\"ltr\">a = {1,1,5,0,1,1,0}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 7</code>: כמה ערכים מופיעים במערך מספר אי-זוגי של פעמים?",
     "explainHtml": "הערך 1 מופיע 4 פעמים, הערך 0 פעמיים והערך 5 פעם אחת, ולכן רק 5 אי-זוגי (ריצה אמיתית: <code class=\"tok\" dir=\"ltr\">count = 1</code>)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה הפונקציה עבור `a = {0,1,2}` ו-`n = 3`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      }
     ],
     "correctId": "a",
     "explain": "שלושה ערכים מופיעים פעם אחת כל אחד, כלומר `count = 3`, ואי אפשר לסדר פלינדרום (ריצה אמיתית: 0).",
     "promptHtml": "מה מחזירה הפונקציה עבור <code class=\"tok\" dir=\"ltr\">a = {0,1,2}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 3</code>?",
     "explainHtml": "שלושה ערכים מופיעים פעם אחת כל אחד, כלומר <code class=\"tok\" dir=\"ltr\">count = 3</code>, ואי אפשר לסדר פלינדרום (ריצה אמיתית: 0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את שורת ההחזרה.",
     "code": true,
     "lines": [
      "int is_permutation_of_palindrom(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) temp[a[i]]++;",
      "   for (i = 0; i < n; i++) if (temp[i] % 2 == 1) count++;",
      "   free(temp);",
      "   ___",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return count < 2;",
       "html": "return count &lt; 2;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return count == 0;",
       "html": "return count == 0;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return count == 1;",
       "html": "return count == 1;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return count < 3;",
       "html": "return count &lt; 3;"
      }
     ],
     "correctId": "a",
     "explain": "אפס ערכים אי-זוגיים (אורך זוגי) או אחד (אורך אי-זוגי) מאפשרים פלינדרום. `count == 0` פוסל את `{1,1,5,0,1,1,0}`, `count == 1` פוסל את `{0,0}`, ו-`count < 3` מקבל את `{0,1}` בטעות (ריצה אמיתית).",
     "promptHtml": "השלימו את שורת ההחזרה.",
     "explainHtml": "אפס ערכים אי-זוגיים (אורך זוגי) או אחד (אורך אי-זוגי) מאפשרים פלינדרום. <code class=\"tok\" dir=\"ltr\">count == 0</code> פוסל את <code class=\"tok\" dir=\"ltr\">{1,1,5,0,1,1,0}</code>, <code class=\"tok\" dir=\"ltr\">count == 1</code> פוסל את <code class=\"tok\" dir=\"ltr\">{0,0}</code>, ו-<code class=\"tok\" dir=\"ltr\">count &lt; 3</code> מקבל את <code class=\"tok\" dir=\"ltr\">{0,1}</code> בטעות (ריצה אמיתית).",
     "linesHtml": [
      "int is_permutation_of_palindrom(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) temp[a[i]]++;",
      "   for (i = 0; i &lt; n; i++) if (temp[i] % 2 == 1) count++;",
      "   free(temp);",
      "   ___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `is_permutation_of_palindrom`.",
     "code": true,
     "lines": [
      "int is_permutation_of_palindrom(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) temp[a[i]]++;",
      "   for (i = 0; i < n; i++) if (temp[i] % 2 == 1) count++;",
      "   free(temp); return count < 2;",
      "}"
     ],
     "explain": "הקצאת מערך המונים, ספירה, ספירת הערכים האי-זוגיים, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">is_permutation_of_palindrom</code>.",
     "explainHtml": "הקצאת מערך המונים, ספירה, ספירת הערכים האי-זוגיים, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int is_permutation_of_palindrom(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) temp[a[i]]++;",
      "   for (i = 0; i &lt; n; i++) if (temp[i] % 2 == 1) count++;",
      "   free(temp); return count &lt; 2;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות לינאריות, של $n$ איברים ושל מערך העזר: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות לינאריות, של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים ושל מערך העזר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q3a",
   "partKey": "a",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "נאמר שמערך הוא <strong>תמורה של פלינדרום</strong>, אם המערך הוא פלינדרום או אם קיים סידור מחדש של איברי המערך כך שהמערך המסודר מחדש הוא פלינדרום.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, כאשר כל איברי המערך הם מספרים שלמים בתחום בין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n-1</code>. הפונקציה בודקת ומחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם המערך הוא <strong>תמורה של פלינדרום</strong>, אחרת היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">n = 7</code> ו-<code class=\"tok\" dir=\"ltr\">a = {1,1,5,0,1,1,0}</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>, כי אפשר לסדר את המערך מחדש כך שהוא יהיה פלינדרום: <code class=\"tok\" dir=\"ltr\">a = {1,0,1,5,1,0,1}</code>.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (19A-A עמ' 2-3):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int is_permutation_of_palindrom(int *a, int n)\n{\n      int i, count = 0;\n      int * temp = (int*)calloc(n, sizeof(int));\n      for (i = 0; i&lt;n; i++)\n            temp[a[i]]++;\n      for (i = 0; i &lt; n; i++)\n      {\n            if (temp[i] % 2==1)\n                  count++;\n      }\n      free(temp);\n      return count&lt;2;\n}</code></pre>אם מערך הוא פלינדרום, אז כל ערך מופיע מספר זוגי של פעמים, פרט למספר אחד שמופיע באמצע פלינדרום במקרה שהמערך הוא בגודל אי-זוגי. לכן כדי לבדוק האם מערך הוא תמורה של פלינדרום מספיק לספור כמות שערכים שמופיעים מספר אי-זוגי של פעמים. אם הכמות היא 0 או 1 המערך הוא תמורה של פלינדרום, אם הכמות גדולה מ-1 אין אפשרות לסדר את המערך כך שהוא יהיה פלינדרום.<br>הערה: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, אז המערך אוטומטי בגודל אי-זוגי ואפשר להפוך אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, אז המערך הוא בגודל זוגי והוא תמורה של פלינדרום. לכן אין צורך לבדוק שני מקרים.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "לבדוק את כל הסידורים האפשריים של המערך: זמן עצום ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "לדרוש <code class=\"tok\" dir=\"ltr\">count == 0</code>: מערך באורך אי-זוגי, עם ערך אמצעי אחד, היה נפסל בטעות.",
    "למיין את המערך לפני הספירה: זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> כנדרש."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "arrays",
   "question": "**בונוס** (10 נקודות)\nכתבו פונקציה **יעילה** שמקבלת מערך $a$ וגודלו $n$, כאשר כל איברי המערך הם מספרים שלמים בתחום בין `0` ל-`n-1`. הפונקציה בודקת ומחזירה את כמות האיברים המינימלית שצריך להוסיף למערך כדי להפוך אותו לתמורה של פלינדרום.\nלדוגמא:\nעבור `n = 5` ו-`a = {1,1,4,3,1}`, הפונקציה תחזיר `2`, כי אפשר להוסיף `1` ו-`5` כך שנקבל פלינדרום: `a = {1,1,4,3,4,1,1}`.\nעל הפונקציה לרוץ בסדר גודל $n$.\nניתן להשתמש במערך עזר.",
   "solution": "**פתרון רשמי** (19A-A עמ' 3):\n```c\nint bonus(int*a, int n)\n{\n      int i, count = 0;\n      int * temp = (int*)calloc(n, sizeof(int));\n      for (i = 0; i<n; i++)\n            temp[a[i]]++;\n      for (i = 0; i < n; i++)\n      {\n            if (temp[i] % 2)\n                  count++;\n      }\n      free(temp);\n      if (count > 1)\n            return count - 1;\n      else\n            return 0;\n}\n```\nההערה הרשמית בפתרון: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, המערך אוטומטי בגודל אי-זוגי ואפשר להפוך אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, המערך הוא בגודל זוגי והוא תמורה של פלינדרום. לכן אין צורך לבדוק שני מקרים.\nהערת תמלול: בשאלה המודפסת כתוב \"להוסיף 1 ו-5\", אבל הפלינדרום המודפס `{1,1,4,3,4,1,1}` מתקבל מהוספת `4` ו-`1`.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ב",
   "points": 10,
   "rubric": [
    {
     "text": "חישוב כמות הערכים שמספר המופעים שלהם אי-זוגי, באותה שיטה של מערך מונים",
     "points": 4,
     "html": "חישוב כמות הערכים שמספר המופעים שלהם אי-זוגי, באותה שיטה של מערך מונים"
    },
    {
     "text": "אם `count > 1` מחזירים `count - 1`: ערך אי-זוגי אחד יכול להישאר באמצע הפלינדרום",
     "points": 4,
     "html": "אם <code class=\"tok\" dir=\"ltr\">count &gt; 1</code> מחזירים <code class=\"tok\" dir=\"ltr\">count - 1</code>: ערך אי-זוגי אחד יכול להישאר באמצע הפלינדרום"
    },
    {
     "text": "אחרת מחזירים `0`, ובזמן $O(n)$",
     "points": 2,
     "html": "אחרת מחזירים <code class=\"tok\" dir=\"ltr\">0</code>, ובזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להחזיר `count` במקום `count - 1`: ערך אי-זוגי אחד לא דורש תוספת, כי הוא יכול לשבת באמצע.",
    "לא לטפל ב-`count == 0`: אין מה להוסיף, ולכן מחזירים `0`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בקריאה עם `a = {1,1,4,3,1}` ו-`n = 5`: כמה ערכים מופיעים מספר אי-זוגי של פעמים (`count`)?",
     "answer": 3,
     "tol": 0,
     "explain": "הערך 1 מופיע שלוש פעמים, והערכים 4 ו-3 פעם אחת כל אחד: `count = 3`. מוסיפים `count - 1 = 2` איברים (ריצה אמיתית: 3).",
     "promptHtml": "בקריאה עם <code class=\"tok\" dir=\"ltr\">a = {1,1,4,3,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 5</code>: כמה ערכים מופיעים מספר אי-זוגי של פעמים (<code class=\"tok\" dir=\"ltr\">count</code>)?",
     "explainHtml": "הערך 1 מופיע שלוש פעמים, והערכים 4 ו-3 פעם אחת כל אחד: <code class=\"tok\" dir=\"ltr\">count = 3</code>. מוסיפים <code class=\"tok\" dir=\"ltr\">count - 1 = 2</code> איברים (ריצה אמיתית: 3)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `bonus` עבור `a = {0,1,2,3}` ו-`n = 4`?",
     "answer": 3,
     "tol": 0,
     "explain": "ארבעה ערכים שונים, `count = 4`. אחד נשאר באמצע והשאר דורשים זוג: מחזירים $4-1=3$ (ריצה אמיתית: 3).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">bonus</code> עבור <code class=\"tok\" dir=\"ltr\">a = {0,1,2,3}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 4</code>?",
     "explainHtml": "ארבעה ערכים שונים, <code class=\"tok\" dir=\"ltr\">count = 4</code>. אחד נשאר באמצע והשאר דורשים זוג: מחזירים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">4-1=3</annotation></semantics></math></span> (ריצה אמיתית: 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הערך המוחזר כש-`count > 1`.",
     "code": true,
     "lines": [
      "int bonus(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) temp[a[i]]++;",
      "   for (i = 0; i < n; i++) if (temp[i] % 2) count++;",
      "   free(temp);",
      "   if (count > 1) return ___; else return 0;",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "count - 1",
       "html": "count - 1"
      },
      {
       "id": "b",
       "type": "text",
       "value": "count",
       "html": "count"
      },
      {
       "id": "c",
       "type": "text",
       "value": "count / 2",
       "html": "count / 2"
      },
      {
       "id": "d",
       "type": "text",
       "value": "count + 1",
       "html": "count + 1"
      }
     ],
     "correctId": "a",
     "explain": "כל ערך אי-זוגי חוץ מאחד דורש איבר נוסף שיצמיד אותו לזוג: `count - 1`. השאר מחזירים ערכים שגויים, למשל `count / 2` נותן 2 ולא 3 עבור `{0,1,2,3}` (ריצה אמיתית).",
     "promptHtml": "השלימו את הערך המוחזר כש-<code class=\"tok\" dir=\"ltr\">count &gt; 1</code>.",
     "explainHtml": "כל ערך אי-זוגי חוץ מאחד דורש איבר נוסף שיצמיד אותו לזוג: <code class=\"tok\" dir=\"ltr\">count - 1</code>. השאר מחזירים ערכים שגויים, למשל <code class=\"tok\" dir=\"ltr\">count / 2</code> נותן 2 ולא 3 עבור <code class=\"tok\" dir=\"ltr\">{0,1,2,3}</code> (ריצה אמיתית).",
     "linesHtml": [
      "int bonus(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) temp[a[i]]++;",
      "   for (i = 0; i &lt; n; i++) if (temp[i] % 2) count++;",
      "   free(temp);",
      "   if (count &gt; 1) return ___; else return 0;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `bonus`.",
     "code": true,
     "lines": [
      "int bonus(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) temp[a[i]]++;",
      "   for (i = 0; i < n; i++) if (temp[i] % 2) count++;",
      "   free(temp); if (count > 1) return count - 1; else return 0;",
      "}"
     ],
     "explain": "הקצאה, ספירה, ספירת הערכים האי-זוגיים, ואז שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">bonus</code>.",
     "explainHtml": "הקצאה, ספירה, ספירת הערכים האי-זוגיים, ואז שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int bonus(int *a, int n)",
      "{",
      "   int i, count = 0, *temp = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) temp[a[i]]++;",
      "   for (i = 0; i &lt; n; i++) if (temp[i] % 2) count++;",
      "   free(temp); if (count &gt; 1) return count - 1; else return 0;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות לינאריות: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות לינאריות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q3b",
   "partKey": "b",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "<strong>בונוס</strong> (10 נקודות)<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, כאשר כל איברי המערך הם מספרים שלמים בתחום בין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n-1</code>. הפונקציה בודקת ומחזירה את כמות האיברים המינימלית שצריך להוסיף למערך כדי להפוך אותו לתמורה של פלינדרום.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">n = 5</code> ו-<code class=\"tok\" dir=\"ltr\">a = {1,1,4,3,1}</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">2</code>, כי אפשר להוסיף <code class=\"tok\" dir=\"ltr\">1</code> ו-<code class=\"tok\" dir=\"ltr\">5</code> כך שנקבל פלינדרום: <code class=\"tok\" dir=\"ltr\">a = {1,1,4,3,4,1,1}</code>.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (19A-A עמ' 3):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int bonus(int*a, int n)\n{\n      int i, count = 0;\n      int * temp = (int*)calloc(n, sizeof(int));\n      for (i = 0; i&lt;n; i++)\n            temp[a[i]]++;\n      for (i = 0; i &lt; n; i++)\n      {\n            if (temp[i] % 2)\n                  count++;\n      }\n      free(temp);\n      if (count &gt; 1)\n            return count - 1;\n      else\n            return 0;\n}</code></pre>ההערה הרשמית בפתרון: אם יש רק ערך אחד שמופיע מספר אי-זוגי של פעמים, המערך אוטומטי בגודל אי-זוגי ואפשר להפוך אותו לפלינדרום. אם כל הערכים מופיעים מספר זוגי של פעמים, המערך הוא בגודל זוגי והוא תמורה של פלינדרום. לכן אין צורך לבדוק שני מקרים.<br>הערת תמלול: בשאלה המודפסת כתוב \"להוסיף 1 ו-5\", אבל הפלינדרום המודפס <code class=\"tok\" dir=\"ltr\">{1,1,4,3,4,1,1}</code> מתקבל מהוספת <code class=\"tok\" dir=\"ltr\">4</code> ו-<code class=\"tok\" dir=\"ltr\">1</code>.",
   "pointsTotal": 10,
   "pitfallsHtml": [
    "להחזיר <code class=\"tok\" dir=\"ltr\">count</code> במקום <code class=\"tok\" dir=\"ltr\">count - 1</code>: ערך אי-זוגי אחד לא דורש תוספת, כי הוא יכול לשבת באמצע.",
    "לא לטפל ב-<code class=\"tok\" dir=\"ltr\">count == 0</code>: אין מה להוסיף, ולכן מחזירים <code class=\"tok\" dir=\"ltr\">0</code>."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "arrays",
   "question": "נתונים שני מערכים $a$ ו-$b$ בגודל $n$ כל אחד. המערכים מכילים מספרים שלמים.\nהמערך $a$ ממוין בסדר עולה ממש ו-$b$ ממוין בסדר יורד ממש.\nכתבו פונקציה **יעילה** שמקבלת שני מערכים $a$ ו-$b$ וגודלם $n$. הפונקציה בודקת ומחזירה `1` אם כל האיברים בשני המערכים שונים זה מזה, אחרת היא מחזירה `0`.\nעל הפונקציה לרוץ בסדר גודל $n$.",
   "solution": "**פתרון רשמי** (19A-A עמ' 3):\n```c\nint check_if_different_elements(int *a, int *b, int n)\n{\n   int ia=0, ib=n-1;\n\n   while( ia < n  &&  ib >=0 )\n{\n        if (a[ia] == b[ib])\n            return 0;\n        if (a[ia] < b[ib])\n            ia++;\n        else\n            ib--;\n    }\n     return 1;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 20,
   "rubric": [
    {
     "text": "ניצול הכיוונים: `a` עולה ממש ו-`b` יורד ממש, ולכן מספיקה סריקה אחת בשני אינדקסים",
     "points": 5,
     "html": "ניצול הכיוונים: <code class=\"tok\" dir=\"ltr\">a</code> עולה ממש ו-<code class=\"tok\" dir=\"ltr\">b</code> יורד ממש, ולכן מספיקה סריקה אחת בשני אינדקסים"
    },
    {
     "text": "אתחול שני אינדקסים: `ia = 0` ב-`a` ו-`ib = n - 1` ב-`b`",
     "points": 5,
     "html": "אתחול שני אינדקסים: <code class=\"tok\" dir=\"ltr\">ia = 0</code> ב-<code class=\"tok\" dir=\"ltr\">a</code> ו-<code class=\"tok\" dir=\"ltr\">ib = n - 1</code> ב-<code class=\"tok\" dir=\"ltr\">b</code>"
    },
    {
     "text": "אם `a[ia] == b[ib]` מחזירים `0`; אם `a[ia] < b[ib]` מקדמים `ia`, אחרת מקטינים את `ib`",
     "points": 7,
     "html": "אם <code class=\"tok\" dir=\"ltr\">a[ia] == b[ib]</code> מחזירים <code class=\"tok\" dir=\"ltr\">0</code>; אם <code class=\"tok\" dir=\"ltr\">a[ia] &lt; b[ib]</code> מקדמים <code class=\"tok\" dir=\"ltr\">ia</code>, אחרת מקטינים את <code class=\"tok\" dir=\"ltr\">ib</code>"
    },
    {
     "text": "תנאי עצירה `ia < n && ib >= 0`, החזרת `1`, וזמן $O(n)$",
     "points": 3,
     "html": "תנאי עצירה <code class=\"tok\" dir=\"ltr\">ia &lt; n &amp;&amp; ib &gt;= 0</code>, החזרת <code class=\"tok\" dir=\"ltr\">1</code>, וזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "שתי לולאות מקוננות על כל הזוגות: $O(n^2)$ ולא עומד בדרישת היעילות.",
    "לקדם את האינדקס הלא נכון: כש-`a[ia]` קטן מ-`b[ib]` מקדמים את `ia`, ולא מקטינים את `ib`.",
    "להתחיל את `ib` ב-0: `b` יורד, ולכן הצד הקטן שלו נמצא בסוף."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה איטרציות מבצעת לולאת ה-`while` עבור `a = {1,2,3}`, `b = {9,8,7}` ו-`n = 3`?",
     "answer": 3,
     "tol": 0,
     "explain": "בכל איטרציה `a[ia]` קטן מ-`b[2] = 7`, ולכן `ia` עולה עד 3 והלולאה מסתיימת (ריצה אמיתית: 3, והפונקציה מחזירה 1).",
     "promptHtml": "כמה איטרציות מבצעת לולאת ה-<code class=\"tok\" dir=\"ltr\">while</code> עבור <code class=\"tok\" dir=\"ltr\">a = {1,2,3}</code>, <code class=\"tok\" dir=\"ltr\">b = {9,8,7}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 3</code>?",
     "explainHtml": "בכל איטרציה <code class=\"tok\" dir=\"ltr\">a[ia]</code> קטן מ-<code class=\"tok\" dir=\"ltr\">b[2] = 7</code>, ולכן <code class=\"tok\" dir=\"ltr\">ia</code> עולה עד 3 והלולאה מסתיימת (ריצה אמיתית: 3, והפונקציה מחזירה 1)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה הפונקציה עבור `a = {1,3,5}`, `b = {9,6,3}` ו-`n = 3`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      }
     ],
     "correctId": "a",
     "explain": "`1 < 3` מקדם את `ia`, ואז `a[1] == b[2] == 3` ומחזירים 0 (ריצה אמיתית: 0).",
     "promptHtml": "מה מחזירה הפונקציה עבור <code class=\"tok\" dir=\"ltr\">a = {1,3,5}</code>, <code class=\"tok\" dir=\"ltr\">b = {9,6,3}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 3</code>?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">1 &lt; 3</code> מקדם את <code class=\"tok\" dir=\"ltr\">ia</code>, ואז <code class=\"tok\" dir=\"ltr\">a[1] == b[2] == 3</code> ומחזירים 0 (ריצה אמיתית: 0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי שקובע איזה אינדקס מקדמים.",
     "code": true,
     "lines": [
      "int check_if_different_elements(int *a, int *b, int n)",
      "{",
      "   int ia = 0, ib = n - 1;",
      "   while (ia < n && ib >= 0)",
      "   {",
      "      if (a[ia] == b[ib]) return 0;",
      "      ___",
      "         ia++;",
      "      else",
      "         ib--;",
      "   }",
      "   return 1;",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (a[ia] < b[ib])",
       "html": "if (a[ia] &lt; b[ib])"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (a[ia] > b[ib])",
       "html": "if (a[ia] &gt; b[ib])"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (ia < ib)",
       "html": "if (ia &lt; ib)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (a[ia] + 1 < b[ib])",
       "html": "if (a[ia] + 1 &lt; b[ib])"
      }
     ],
     "correctId": "a",
     "explain": "כש-`a[ia]` קטן מ-`b[ib]` הוא קטן מכל איברי `b` שנותרו, ולכן מקדמים את `ia`. שאר התנאים משמיטים התאמות או מחליפים כיוון (ריצה אמיתית: הם נכשלים על מערכים אקראיים).",
     "promptHtml": "השלימו את התנאי שקובע איזה אינדקס מקדמים.",
     "explainHtml": "כש-<code class=\"tok\" dir=\"ltr\">a[ia]</code> קטן מ-<code class=\"tok\" dir=\"ltr\">b[ib]</code> הוא קטן מכל איברי <code class=\"tok\" dir=\"ltr\">b</code> שנותרו, ולכן מקדמים את <code class=\"tok\" dir=\"ltr\">ia</code>. שאר התנאים משמיטים התאמות או מחליפים כיוון (ריצה אמיתית: הם נכשלים על מערכים אקראיים).",
     "linesHtml": [
      "int check_if_different_elements(int *a, int *b, int n)",
      "{",
      "   int ia = 0, ib = n - 1;",
      "   while (ia &lt; n &amp;&amp; ib &gt;= 0)",
      "   {",
      "      if (a[ia] == b[ib]) return 0;",
      "      ___",
      "         ia++;",
      "      else",
      "         ib--;",
      "   }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `check_if_different_elements`.",
     "code": true,
     "lines": [
      "int check_if_different_elements(int *a, int *b, int n)",
      "{",
      "   int ia = 0, ib = n - 1;",
      "   while (ia < n && ib >= 0) { if (a[ia] == b[ib]) return 0; if (a[ia] < b[ib]) ia++; else ib--; }",
      "   return 1;",
      "}"
     ],
     "explain": "הגדרת האינדקסים, הלולאה, ובסוף `return 1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">check_if_different_elements</code>.",
     "explainHtml": "הגדרת האינדקסים, הלולאה, ובסוף <code class=\"tok\" dir=\"ltr\">return 1</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int check_if_different_elements(int *a, int *b, int n)",
      "{",
      "   int ia = 0, ib = n - 1;",
      "   while (ia &lt; n &amp;&amp; ib &gt;= 0) { if (a[ia] == b[ib]) return 0; if (a[ia] &lt; b[ib]) ia++; else ib--; }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "בכל איטרציה אחד האינדקסים מתקדם, לכל היותר $2n$ איטרציות: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "בכל איטרציה אחד האינדקסים מתקדם, לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span> איטרציות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q4",
   "partKey": "",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "נתונים שני מערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כל אחד. המערכים מכילים מספרים שלמים.<br>המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ממוין בסדר עולה ממש ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> ממוין בסדר יורד ממש.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת שני מערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> וגודלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. הפונקציה בודקת ומחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם כל האיברים בשני המערכים שונים זה מזה, אחרת היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (19A-A עמ' 3):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int check_if_different_elements(int *a, int *b, int n)\n{\n   int ia=0, ib=n-1;\n\n   while( ia &lt; n  &amp;&amp;  ib &gt;=0 )\n{\n        if (a[ia] == b[ib])\n            return 0;\n        if (a[ia] &lt; b[ib])\n            ia++;\n        else\n            ib--;\n    }\n     return 1;\n}</code></pre>",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "שתי לולאות מקוננות על כל הזוגות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא עומד בדרישת היעילות.",
    "לקדם את האינדקס הלא נכון: כש-<code class=\"tok\" dir=\"ltr\">a[ia]</code> קטן מ-<code class=\"tok\" dir=\"ltr\">b[ib]</code> מקדמים את <code class=\"tok\" dir=\"ltr\">ia</code>, ולא מקטינים את <code class=\"tok\" dir=\"ltr\">ib</code>.",
    "להתחיל את <code class=\"tok\" dir=\"ltr\">ib</code> ב-0: <code class=\"tok\" dir=\"ltr\">b</code> יורד, ולכן הצד הקטן שלו נמצא בסוף."
   ]
  },
  {
   "num": 5,
   "kind": "code",
   "topic": "binary_search",
   "question": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\nנתונים שני מערכים $a$ ו-$b$ בגודל $n$ כל אחד. המערכים מכילים מספרים שלמים.\nכתבו פונקציה **יעילה** שמקבלת את שני המערכים ומספר שלם $d$, ומחזירה `1` אם קיים מספר $x$ במערך $a$ ומספר $y$ במערך $b$ כך ש-$x+y=d$. אחרת על הפונקציה להחזיר `0`.\nלדוגמא, עבור המערכים הבאים:\n`a = {12,2,14,2}`, `b = {15,11,2,8}`\nהפונקציה תחזיר `1` אם `d=23` (`12+11=23`) ותחזיר `0` אם `d=5`.\nעל הפונקציה לרוץ בסדר גודל של $n\\log n$.\nניתן להשתמש במערך עזר.\nמותר לפונקציה שאתם כותבים לשנות את הסדר שבו מופיעים האיברים בכל אחד ממערכי הקלט.\n(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, `binary_search_right`, `swap`, `partition`, `merge_arrays`.)",
   "solution": "הפתרון הרשמי עם תיקון שגיאת הקלדה: בחתימה המודפסת `is_sum (int* a, int* b, int n)` חסר הפרמטר `d` שהגוף משתמש בו, ולכן נוסף `int d` כפרמטר רביעי. שאר הקוד כפי שהודפס (19A-A עמ' 4).\n```c\nint is_sum (int* a, int* b, int n, int d)\n{\n  int i;\n  merge_sort(b, 0, n-1);\n  for(i=0; i<n; i++)\n  {\n    if(binary_search(b, n, d-a[i]) >=0 )\n     return 1;\n  }\n  return 0;\n}\n```\nממיינים את `b` עם `merge_sort` בזמן $O(n\\log n)$. לכל `a[i]` מחפשים ב-`b` הממוין את `d-a[i]` בחיפוש בינארי, $O(\\log n)$ לכל חיפוש ו-$O(n\\log n)$ לכל $n$ החיפושים. אם נמצא, אז `a[i]+b[j]==d` ומחזירים `1`.\nסה\"כ $O(n\\log n)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "points": 20,
   "rubric": [
    {
     "text": "מיון אחד המערכים (`b`) עם `merge_sort` בזמן $O(n\\log n)$",
     "points": 5,
     "html": "מיון אחד המערכים (<code class=\"tok\" dir=\"ltr\">b</code>) עם <code class=\"tok\" dir=\"ltr\">merge_sort</code> בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>"
    },
    {
     "text": "לולאה על כל `a[i]` וחיפוש `d - a[i]` ב-`b`",
     "points": 6,
     "html": "לולאה על כל <code class=\"tok\" dir=\"ltr\">a[i]</code> וחיפוש <code class=\"tok\" dir=\"ltr\">d - a[i]</code> ב-<code class=\"tok\" dir=\"ltr\">b</code>"
    },
    {
     "text": "שימוש בחיפוש בינארי והחזרת `1` כשהתוצאה אי-שלילית (`>= 0`)",
     "points": 5,
     "html": "שימוש בחיפוש בינארי והחזרת <code class=\"tok\" dir=\"ltr\">1</code> כשהתוצאה אי-שלילית (<code class=\"tok\" dir=\"ltr\">&gt;= 0</code>)"
    },
    {
     "text": "החזרת `0` אחרי הלולאה, וניתוח זמן $O(n\\log n)$",
     "points": 4,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> אחרי הלולאה, וניתוח זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "שתי לולאות מקוננות על כל הזוגות: $O(n^2)$ ולא $O(n\\log n)$.",
    "חיפוש בינארי במערך שלא מוין: צריך למיין את `b` לפני הלולאה.",
    "לחפש את `a[i]` או את `d + a[i]` במקום `d - a[i]`, או לבדוק `> 0` ולפספס את האינדקס 0."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "אחרי `merge_sort(b, 0, n-1)` עבור `b = {15,11,2,8}`: באיזה אינדקס נמצא הערך `11`?",
     "answer": 2,
     "tol": 0,
     "explain": "המערך הממוין הוא `{2,8,11,15}`, והערך 11 באינדקס 2 (ריצה אמיתית: 2). עבור `d = 23` ו-`a[0] = 12` זה הערך `d - a[0]` שמחפשים.",
     "promptHtml": "אחרי <code class=\"tok\" dir=\"ltr\">merge_sort(b, 0, n-1)</code> עבור <code class=\"tok\" dir=\"ltr\">b = {15,11,2,8}</code>: באיזה אינדקס נמצא הערך <code class=\"tok\" dir=\"ltr\">11</code>?",
     "explainHtml": "המערך הממוין הוא <code class=\"tok\" dir=\"ltr\">{2,8,11,15}</code>, והערך 11 באינדקס 2 (ריצה אמיתית: 2). עבור <code class=\"tok\" dir=\"ltr\">d = 23</code> ו-<code class=\"tok\" dir=\"ltr\">a[0] = 12</code> זה הערך <code class=\"tok\" dir=\"ltr\">d - a[0]</code> שמחפשים."
    },
    {
     "type": "numeric",
     "prompt": "עבור `a = {12,2,14,2}`, `b = {15,11,2,8}` ו-`d = 5`: כמה חיפושים בינאריים מתבצעים עד שהפונקציה מחזירה?",
     "answer": 4,
     "tol": 0,
     "explain": "אף ערך `5 - a[i]` אינו ב-`b`, ולכן מתבצעים כל $n=4$ החיפושים והפונקציה מחזירה 0 (ריצה אמיתית: 4).",
     "promptHtml": "עבור <code class=\"tok\" dir=\"ltr\">a = {12,2,14,2}</code>, <code class=\"tok\" dir=\"ltr\">b = {15,11,2,8}</code> ו-<code class=\"tok\" dir=\"ltr\">d = 5</code>: כמה חיפושים בינאריים מתבצעים עד שהפונקציה מחזירה?",
     "explainHtml": "אף ערך <code class=\"tok\" dir=\"ltr\">5 - a[i]</code> אינו ב-<code class=\"tok\" dir=\"ltr\">b</code>, ולכן מתבצעים כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n=4</annotation></semantics></math></span> החיפושים והפונקציה מחזירה 0 (ריצה אמיתית: 4)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי של ה-`if`.",
     "code": true,
     "lines": [
      "int is_sum(int* a, int* b, int n, int d)",
      "{",
      "   int i;",
      "   merge_sort(b, 0, n - 1);",
      "   for (i = 0; i < n; i++)",
      "      if (___)",
      "         return 1;",
      "   return 0;",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "binary_search(b, n, d - a[i]) >= 0",
       "html": "binary_search(b, n, d - a[i]) &gt;= 0"
      },
      {
       "id": "b",
       "type": "text",
       "value": "binary_search(b, n, d - a[i]) > 0",
       "html": "binary_search(b, n, d - a[i]) &gt; 0"
      },
      {
       "id": "c",
       "type": "text",
       "value": "binary_search(b, n, a[i]) >= 0",
       "html": "binary_search(b, n, a[i]) &gt;= 0"
      },
      {
       "id": "d",
       "type": "text",
       "value": "binary_search(b, n, d + a[i]) >= 0",
       "html": "binary_search(b, n, d + a[i]) &gt;= 0"
      }
     ],
     "correctId": "a",
     "explain": "מחפשים את המשלים `d - a[i]` והתוצאה אי-שלילית פירושה שנמצא. `> 0` מפספס את האינדקס 0, ובשני האחרונים מחפשים ערך שגוי (ריצה אמיתית: הם נכשלים על מערכים אקראיים).",
     "promptHtml": "השלימו את התנאי של ה-<code class=\"tok\" dir=\"ltr\">if</code>.",
     "explainHtml": "מחפשים את המשלים <code class=\"tok\" dir=\"ltr\">d - a[i]</code> והתוצאה אי-שלילית פירושה שנמצא. <code class=\"tok\" dir=\"ltr\">&gt; 0</code> מפספס את האינדקס 0, ובשני האחרונים מחפשים ערך שגוי (ריצה אמיתית: הם נכשלים על מערכים אקראיים).",
     "linesHtml": [
      "int is_sum(int* a, int* b, int n, int d)",
      "{",
      "   int i;",
      "   merge_sort(b, 0, n - 1);",
      "   for (i = 0; i &lt; n; i++)",
      "      if (___)",
      "         return 1;",
      "   return 0;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `is_sum`.",
     "code": true,
     "lines": [
      "int is_sum(int* a, int* b, int n, int d)",
      "{",
      "   int i; merge_sort(b, 0, n - 1);",
      "   for (i = 0; i < n; i++) if (binary_search(b, n, d - a[i]) >= 0) return 1;",
      "   return 0;",
      "}"
     ],
     "explain": "קודם מיון `b`, אחר כך לולאת החיפוש, ובסוף `return 0` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">is_sum</code>.",
     "explainHtml": "קודם מיון <code class=\"tok\" dir=\"ltr\">b</code>, אחר כך לולאת החיפוש, ובסוף <code class=\"tok\" dir=\"ltr\">return 0</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int is_sum(int* a, int* b, int n, int d)",
      "{",
      "   int i; merge_sort(b, 0, n - 1);",
      "   for (i = 0; i &lt; n; i++) if (binary_search(b, n, d - a[i]) &gt;= 0) return 1;",
      "   return 0;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n log n)",
      "O(nlogn)"
     ],
     "normalize": "complexity",
     "explain": "מיון $O(n\\log n)$ ועוד $n$ חיפושים בינאריים של $O(\\log n)$ כל אחד: $O(n\\log n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "מיון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span> ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> חיפושים בינאריים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span> כל אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q5",
   "partKey": "",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)<br>נתונים שני מערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כל אחד. המערכים מכילים מספרים שלמים.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת את שני המערכים ומספר שלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>, ומחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם קיים מספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> במערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ומספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> במערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">x+y=d</annotation></semantics></math></span>. אחרת על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא, עבור המערכים הבאים:<br><code class=\"tok\" dir=\"ltr\">a = {12,2,14,2}</code>, <code class=\"tok\" dir=\"ltr\">b = {15,11,2,8}</code><br>הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם <code class=\"tok\" dir=\"ltr\">d=23</code> (<code class=\"tok\" dir=\"ltr\">12+11=23</code>) ותחזיר <code class=\"tok\" dir=\"ltr\">0</code> אם <code class=\"tok\" dir=\"ltr\">d=5</code>.<br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n\\log n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.<br>מותר לפונקציה שאתם כותבים לשנות את הסדר שבו מופיעים האיברים בכל אחד ממערכי הקלט.<br>(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: <code class=\"tok\" dir=\"ltr\">merge_sort</code>, <code class=\"tok\" dir=\"ltr\">quick_sort</code>, <code class=\"tok\" dir=\"ltr\">binary_search</code>, <code class=\"tok\" dir=\"ltr\">binary_search_right</code>, <code class=\"tok\" dir=\"ltr\">swap</code>, <code class=\"tok\" dir=\"ltr\">partition</code>, <code class=\"tok\" dir=\"ltr\">merge_arrays</code>.)",
   "solutionHtml": "הפתרון הרשמי עם תיקון שגיאת הקלדה: בחתימה המודפסת <code class=\"tok\" dir=\"ltr\">is_sum (int* a, int* b, int n)</code> חסר הפרמטר <code class=\"tok\" dir=\"ltr\">d</code> שהגוף משתמש בו, ולכן נוסף <code class=\"tok\" dir=\"ltr\">int d</code> כפרמטר רביעי. שאר הקוד כפי שהודפס (19A-A עמ' 4).<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int is_sum (int* a, int* b, int n, int d)\n{\n  int i;\n  merge_sort(b, 0, n-1);\n  for(i=0; i&lt;n; i++)\n  {\n    if(binary_search(b, n, d-a[i]) &gt;=0 )\n     return 1;\n  }\n  return 0;\n}</code></pre>ממיינים את <code class=\"tok\" dir=\"ltr\">b</code> עם <code class=\"tok\" dir=\"ltr\">merge_sort</code> בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>. לכל <code class=\"tok\" dir=\"ltr\">a[i]</code> מחפשים ב-<code class=\"tok\" dir=\"ltr\">b</code> הממוין את <code class=\"tok\" dir=\"ltr\">d-a[i]</code> בחיפוש בינארי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span> לכל חיפוש ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span> לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> החיפושים. אם נמצא, אז <code class=\"tok\" dir=\"ltr\">a[i]+b[j]==d</code> ומחזירים <code class=\"tok\" dir=\"ltr\">1</code>.<br>סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "שתי לולאות מקוננות על כל הזוגות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>.",
    "חיפוש בינארי במערך שלא מוין: צריך למיין את <code class=\"tok\" dir=\"ltr\">b</code> לפני הלולאה.",
    "לחפש את <code class=\"tok\" dir=\"ltr\">a[i]</code> או את <code class=\"tok\" dir=\"ltr\">d + a[i]</code> במקום <code class=\"tok\" dir=\"ltr\">d - a[i]</code>, או לבדוק <code class=\"tok\" dir=\"ltr\">&gt; 0</code> ולפספס את האינדקס 0."
   ]
  },
  {
   "num": 6,
   "kind": "code",
   "topic": "matrices",
   "question": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\nנאמר שמטריצה ריבועית היא **כמעט ריבוע קסם** אם היא מכילה מספרים שלמים כך שסכום האיברים בכל שורה, בכל עמודה ובשני האלכסונים הוא זהה.\nלדוגמא:\n```\n12 19 14\n17 15 13\n16 11 18\n```\nכתבו פונקציה **יעילה** שמקבלת מטריצה ריבועית $A$ בגודל $N\\times N$ של מספרים שלמים.\nעל הפונקציה להחזיר `1` כאשר מטריצה היא \"כמעט ריבוע קסם\" ו-`0` אחרת.\nהחישוב חייב להיות בזמן שסדר הגודל שלו $N^2$.\n(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, `binary_search_right`, `swap`, `partition`, `merge_arrays`.)",
   "solution": "הפתרון הרשמי עם תיקון שגיאת הקלדה: בלולאה הפנימית של בדיקת העמודות הודפס `for (i=0; i<N; j++)`, כך ש-`i` לא מתקדם והלולאה לא נעצרת; תוקן ל-`for (i=0; i<N; i++)`. שאר הקוד כפי שהודפס (19A-A עמ' 5).\n```c\nint CheckMagic(int A[N][N])\n{\n      int i, j, sum=0, curr_sum;\n      //first row\n      for (j=0; j<N; j++)\n            sum += A[0][j];\n      //check rows\n      for (i=1; i<N; i++)\n      {\n            curr_sum = 0;\n            for (j=0; j<N; j++)\n                  curr_sum += A[i][j];\n            if (curr_sum != sum)\n                  return 0;\n      }\n      //check columns\n      for (j=0; j<N; j++)\n      {\n            curr_sum = 0;\n            for (i=0; i<N; i++)\n                  curr_sum += A[i][j];\n            if (curr_sum != sum)\n                  return 0;\n      }\n      //check main diagonal\n      curr_sum = 0;\n      for (i=0; i<N; i++)\n            curr_sum += A[i][i];\n      if (curr_sum != sum)\n            return 0;\n      //check secondary diagonal\n      curr_sum = 0;\n      for (i=0; i<N; i++)\n            curr_sum += A[i][N-i-1];\n      if (curr_sum != sum)\n            return 0;\n\n      return 1;\n}\n```\nמחשבים את סכום השורה הראשונה, ומשווים אליו את סכום כל שורה, כל עמודה ושני האלכסונים. בהפרש הראשון מחזירים `0`.\nבדיקת השורות והעמודות עוברת על $N^2$ תאים כל אחת, והאלכסונים על $N$ תאים כל אחד: סה\"כ $O(N^2)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "points": 20,
   "rubric": [
    {
     "text": "חישוב סכום השורה הראשונה, `sum`, שאליו משווים את כל הסכומים",
     "points": 4,
     "html": "חישוב סכום השורה הראשונה, <code class=\"tok\" dir=\"ltr\">sum</code>, שאליו משווים את כל הסכומים"
    },
    {
     "text": "בדיקת סכום כל שורה",
     "points": 4,
     "html": "בדיקת סכום כל שורה"
    },
    {
     "text": "בדיקת סכום כל עמודה",
     "points": 4,
     "html": "בדיקת סכום כל עמודה"
    },
    {
     "text": "בדיקת שני האלכסונים: הראשי `A[i][i]` והמשני `A[i][N-i-1]`",
     "points": 5,
     "html": "בדיקת שני האלכסונים: הראשי <code class=\"tok\" dir=\"ltr\">A[i][i]</code> והמשני <code class=\"tok\" dir=\"ltr\">A[i][N-i-1]</code>"
    },
    {
     "text": "החזרת `0` בהפרה הראשונה ו-`1` בסוף, וזמן $O(N^2)$",
     "points": 3,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> בהפרה הראשונה ו-<code class=\"tok\" dir=\"ltr\">1</code> בסוף, וזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק שורות ועמודות ולשכוח את האלכסונים (או אלכסון אחד).",
    "לשכוח לאפס את `curr_sum` בין שורה לשורה ובין עמודה לעמודה.",
    "אינדקס האלכסון המשני: `A[i][N-i]` יוצא מהמטריצה, והנכון `A[i][N-i-1]`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "עבור המטריצה בדוגמה (השורה הראשונה `12 19 14`): מהו `sum`, סכום השורה הראשונה?",
     "answer": 45,
     "tol": 0,
     "explain": "$12+19+14=45$, וגם כל שורה, עמודה ואלכסון במטריצה מסתכמים ל-45 (ריצה אמיתית: 45).",
     "promptHtml": "עבור המטריצה בדוגמה (השורה הראשונה <code class=\"tok\" dir=\"ltr\">12 19 14</code>): מהו <code class=\"tok\" dir=\"ltr\">sum</code>, סכום השורה הראשונה?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12</mn><mo>+</mo><mn>19</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>45</mn></mrow><annotation encoding=\"application/x-tex\">12+19+14=45</annotation></semantics></math></span>, וגם כל שורה, עמודה ואלכסון במטריצה מסתכמים ל-45 (ריצה אמיתית: 45)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה `CheckMagic` עבור המטריצה הבאה?\n```\n1 2 3\n2 3 1\n3 1 2\n```",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      }
     ],
     "correctId": "a",
     "explain": "כל שורה וכל עמודה מסתכמת ל-6 והאלכסון הראשי $1+3+2=6$, אבל האלכסון המשני $3+3+3=9$, ולכן מחזירים 0 (ריצה אמיתית: 0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">CheckMagic</code> עבור המטריצה הבאה?<pre class=\"code-block\" dir=\"ltr\"><code>1 2 3\n2 3 1\n3 1 2</code></pre>",
     "explainHtml": "כל שורה וכל עמודה מסתכמת ל-6 והאלכסון הראשי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">1+3+2=6</annotation></semantics></math></span>, אבל האלכסון המשני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">3+3+3=9</annotation></semantics></math></span>, ולכן מחזירים 0 (ריצה אמיתית: 0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה שמסכמת את האלכסון המשני.",
     "code": true,
     "lines": [
      "int CheckMagic(int A[N][N])",
      "{",
      "      int i, j, sum=0, curr_sum;",
      "      for (j=0; j<N; j++)",
      "            sum += A[0][j];",
      "      for (i=1; i<N; i++)",
      "      {",
      "            curr_sum = 0;",
      "            for (j=0; j<N; j++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      for (j=0; j<N; j++)",
      "      {",
      "            curr_sum = 0;",
      "            for (i=0; i<N; i++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      curr_sum = 0;",
      "      for (i=0; i<N; i++)",
      "            curr_sum += A[i][i];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      curr_sum = 0;",
      "      for (i=0; i<N; i++)",
      "            ___",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      return 1;",
      "}"
     ],
     "blankIndex": 28,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "curr_sum += A[i][N-i-1];",
       "html": "curr_sum += A[i][N-i-1];"
      },
      {
       "id": "b",
       "type": "text",
       "value": "curr_sum += A[i][i];",
       "html": "curr_sum += A[i][i];"
      },
      {
       "id": "c",
       "type": "text",
       "value": "curr_sum += A[0][i];",
       "html": "curr_sum += A[0][i];"
      },
      {
       "id": "d",
       "type": "text",
       "value": "curr_sum += A[i][N-1];",
       "html": "curr_sum += A[i][N-1];"
      }
     ],
     "correctId": "a",
     "explain": "האלכסון המשני מורכב מהתאים `(i, N-i-1)`. האפשרויות האחרות מסכמות את האלכסון הראשי, את השורה הראשונה או את העמודה האחרונה, ולכן מתקבל 1 במטריצה שלמעלה (ריצה אמיתית).",
     "promptHtml": "השלימו את השורה שמסכמת את האלכסון המשני.",
     "explainHtml": "האלכסון המשני מורכב מהתאים <code class=\"tok\" dir=\"ltr\">(i, N-i-1)</code>. האפשרויות האחרות מסכמות את האלכסון הראשי, את השורה הראשונה או את העמודה האחרונה, ולכן מתקבל 1 במטריצה שלמעלה (ריצה אמיתית).",
     "linesHtml": [
      "int CheckMagic(int A[N][N])",
      "{",
      "      int i, j, sum=0, curr_sum;",
      "      for (j=0; j&lt;N; j++)",
      "            sum += A[0][j];",
      "      for (i=1; i&lt;N; i++)",
      "      {",
      "            curr_sum = 0;",
      "            for (j=0; j&lt;N; j++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      for (j=0; j&lt;N; j++)",
      "      {",
      "            curr_sum = 0;",
      "            for (i=0; i&lt;N; i++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      curr_sum = 0;",
      "      for (i=0; i&lt;N; i++)",
      "            curr_sum += A[i][i];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      curr_sum = 0;",
      "      for (i=0; i&lt;N; i++)",
      "            ___",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה מקבלת מטריצות שאינן ריבוע קסם. מצאו אותה.",
     "code": true,
     "lines": [
      "int CheckMagic(int A[N][N])",
      "{",
      "      int i, j, sum=0, curr_sum;",
      "      for (j=0; j<N; j++)",
      "            sum += A[0][j];",
      "      for (i=1; i<N; i++)",
      "      {",
      "            curr_sum = 0;",
      "            for (j=0; j<N; j++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      for (j=0; j<N; j++)",
      "      {",
      "            curr_sum = 0;",
      "            for (i=0; i<N; i++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      curr_sum = 0;",
      "      for (i=0; i<N; i++)",
      "            curr_sum += A[0][i];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      curr_sum = 0;",
      "      for (i=0; i<N; i++)",
      "            curr_sum += A[i][N-i-1];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      return 1;",
      "}"
     ],
     "bugIndex": 23,
     "explain": "`A[0][i]` מסכם שוב את השורה הראשונה במקום את האלכסון הראשי, ולכן הסכום תמיד שווה ל-`sum`. במטריצה `{{1,2,3},{3,1,2},{2,3,1}}` (אלכסון ראשי 3, אלכסון משני 6) מתקבל 1 במקום 0 (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה מקבלת מטריצות שאינן ריבוע קסם. מצאו אותה.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">A[0][i]</code> מסכם שוב את השורה הראשונה במקום את האלכסון הראשי, ולכן הסכום תמיד שווה ל-<code class=\"tok\" dir=\"ltr\">sum</code>. במטריצה <code class=\"tok\" dir=\"ltr\">{{1,2,3},{3,1,2},{2,3,1}}</code> (אלכסון ראשי 3, אלכסון משני 6) מתקבל 1 במקום 0 (ריצה אמיתית).",
     "linesHtml": [
      "int CheckMagic(int A[N][N])",
      "{",
      "      int i, j, sum=0, curr_sum;",
      "      for (j=0; j&lt;N; j++)",
      "            sum += A[0][j];",
      "      for (i=1; i&lt;N; i++)",
      "      {",
      "            curr_sum = 0;",
      "            for (j=0; j&lt;N; j++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      for (j=0; j&lt;N; j++)",
      "      {",
      "            curr_sum = 0;",
      "            for (i=0; i&lt;N; i++)",
      "                  curr_sum += A[i][j];",
      "            if (curr_sum != sum)",
      "                  return 0;",
      "      }",
      "      curr_sum = 0;",
      "      for (i=0; i&lt;N; i++)",
      "            curr_sum += A[0][i];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      curr_sum = 0;",
      "      for (i=0; i&lt;N; i++)",
      "            curr_sum += A[i][N-i-1];",
      "      if (curr_sum != sum)",
      "            return 0;",
      "      return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)",
     "accept": [
      "O(N²)",
      "O(N^2)"
     ],
     "normalize": "complexity",
     "explain": "כל שורה, עמודה ואלכסון נסרקים בלולאה של $N$ צעדים לכל היותר, והבדיקות על $N^2$ תאים: $O(N^2)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה כתלות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span>? (למשל <code class=\"tok\" dir=\"ltr\">O(N)</code>)",
     "explainHtml": "כל שורה, עמודה ואלכסון נסרקים בלולאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> צעדים לכל היותר, והבדיקות על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> תאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-A-Q6",
   "partKey": "",
   "examCode": "19A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד א (19.2.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)<br>נאמר שמטריצה ריבועית היא <strong>כמעט ריבוע קסם</strong> אם היא מכילה מספרים שלמים כך שסכום האיברים בכל שורה, בכל עמודה ובשני האלכסונים הוא זהה.<br>לדוגמא:<pre class=\"code-block\" dir=\"ltr\"><code>12 19 14\n17 15 13\n16 11 18</code></pre>כתבו פונקציה <strong>יעילה</strong> שמקבלת מטריצה ריבועית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>×</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N\\times N</annotation></semantics></math></span> של מספרים שלמים.<br>על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">1</code> כאשר מטריצה היא \"כמעט ריבוע קסם\" ו-<code class=\"tok\" dir=\"ltr\">0</code> אחרת.<br>החישוב חייב להיות בזמן שסדר הגודל שלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span>.<br>(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: <code class=\"tok\" dir=\"ltr\">merge_sort</code>, <code class=\"tok\" dir=\"ltr\">quick_sort</code>, <code class=\"tok\" dir=\"ltr\">binary_search</code>, <code class=\"tok\" dir=\"ltr\">binary_search_right</code>, <code class=\"tok\" dir=\"ltr\">swap</code>, <code class=\"tok\" dir=\"ltr\">partition</code>, <code class=\"tok\" dir=\"ltr\">merge_arrays</code>.)",
   "solutionHtml": "הפתרון הרשמי עם תיקון שגיאת הקלדה: בלולאה הפנימית של בדיקת העמודות הודפס <code class=\"tok\" dir=\"ltr\">for (i=0; i&lt;N; j++)</code>, כך ש-<code class=\"tok\" dir=\"ltr\">i</code> לא מתקדם והלולאה לא נעצרת; תוקן ל-<code class=\"tok\" dir=\"ltr\">for (i=0; i&lt;N; i++)</code>. שאר הקוד כפי שהודפס (19A-A עמ' 5).<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int CheckMagic(int A[N][N])\n{\n      int i, j, sum=0, curr_sum;\n      //first row\n      for (j=0; j&lt;N; j++)\n            sum += A[0][j];\n      //check rows\n      for (i=1; i&lt;N; i++)\n      {\n            curr_sum = 0;\n            for (j=0; j&lt;N; j++)\n                  curr_sum += A[i][j];\n            if (curr_sum != sum)\n                  return 0;\n      }\n      //check columns\n      for (j=0; j&lt;N; j++)\n      {\n            curr_sum = 0;\n            for (i=0; i&lt;N; i++)\n                  curr_sum += A[i][j];\n            if (curr_sum != sum)\n                  return 0;\n      }\n      //check main diagonal\n      curr_sum = 0;\n      for (i=0; i&lt;N; i++)\n            curr_sum += A[i][i];\n      if (curr_sum != sum)\n            return 0;\n      //check secondary diagonal\n      curr_sum = 0;\n      for (i=0; i&lt;N; i++)\n            curr_sum += A[i][N-i-1];\n      if (curr_sum != sum)\n            return 0;\n\n      return 1;\n}</code></pre>מחשבים את סכום השורה הראשונה, ומשווים אליו את סכום כל שורה, כל עמודה ושני האלכסונים. בהפרש הראשון מחזירים <code class=\"tok\" dir=\"ltr\">0</code>.<br>בדיקת השורות והעמודות עוברת על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> תאים כל אחת, והאלכסונים על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> תאים כל אחד: סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "לבדוק רק שורות ועמודות ולשכוח את האלכסונים (או אלכסון אחד).",
    "לשכוח לאפס את <code class=\"tok\" dir=\"ltr\">curr_sum</code> בין שורה לשורה ובין עמודה לעמודה.",
    "אינדקס האלכסון המשני: <code class=\"tok\" dir=\"ltr\">A[i][N-i]</code> יוצא מהמטריצה, והנכון <code class=\"tok\" dir=\"ltr\">A[i][N-i-1]</code>."
   ]
  },
  {
   "num": 1,
   "kind": "computation",
   "topic": "recursion",
   "question": "נתונה הפונקציה הבאה.\n```c\nint fn (int x, int y)\n{\n        If (y==0)\n                return x;\n        if (y<0)\n                return fn(x, y+1) - 1;\n        return fn(x, y-1) + 1;\n}\n```\nמה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:\na. הפרש בין x ל-y\nb. הפרש בין y ל-x\nc. סכום x ו-y\nd. מכפלת x ו-y+1\ne. מכפלת x ו-y-1\nf. אף אחת מהתשובות לעיל לא נכונה",
   "points": 15,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה): תשובה **c**, סכום x ו-y.\nבקוד המודפס כתוב `If` באות גדולה; זו שגיאת הקלדה, והכוונה ל-`if`.\nאם `y==0` מוחזר `x`. אם $y>0$, כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, כך שאחרי y קריאות מקבלים $x+y$.\nאם $y<0$, כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, כך שאחרי $|y|$ קריאות מקבלים $x-|y|=x+y$.\nלכן בכל מקרה מוחזר $x+y$. למשל `fn(5,3)` מחזירה 8 ו-`fn(5,-3)` מחזירה 2.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "בחירת התשובה הנכונה, c: הפונקציה מחזירה את סכום x ו-y",
     "points": 5,
     "html": "בחירת התשובה הנכונה, c: הפונקציה מחזירה את סכום x ו-y"
    },
    {
     "text": "עבור $y>0$: כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, ולכן מקבלים $x+y$",
     "points": 5,
     "html": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&gt;0</annotation></semantics></math></span>: כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, ולכן מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x+y</annotation></semantics></math></span>"
    },
    {
     "text": "עבור $y<0$: כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, ולכן מקבלים $x-|y|=x+y$",
     "points": 5,
     "html": "עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&lt;0</annotation></semantics></math></span>: כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, ולכן מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>y</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x-|y|=x+y</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבחור a (הפרש): במקרה $y<0$ הפונקציה מחסירה, אבל התוצאה היא $x+y$ ולא $x-y$.",
    "לשכוח את המקרה $y<0$ ולנמק רק עבור $y>0$.",
    "לטעות בבסיס הרקורסיה: הוא `y==0` ומחזיר `x`, ולא מוסיף איבר."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fn(5, 3)`?",
     "answer": 8,
     "tol": 0,
     "explain": "y חיובי, ולכן בכל קריאה מוסיפים 1 לתוצאה: $5+3=8$ (ריצה אמיתית: 8).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fn(5, 3)</code>?",
     "explainHtml": "y חיובי, ולכן בכל קריאה מוסיפים 1 לתוצאה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">5+3=8</annotation></semantics></math></span> (ריצה אמיתית: 8)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fn(5, -3)`?",
     "answer": 2,
     "tol": 0,
     "explain": "y שלילי, ולכן בכל קריאה מחסירים 1: $5-3=2$, כלומר $x+y$ (ריצה אמיתית: 2).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fn(5, -3)</code>?",
     "explainHtml": "y שלילי, ולכן בכל קריאה מחסירים 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">5-3=2</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x+y</annotation></semantics></math></span> (ריצה אמיתית: 2)."
    },
    {
     "type": "numeric",
     "prompt": "כמה קריאות ל-`fn` מתבצעות בסך הכול (כולל הראשונה) עבור `fn(5, -3)`?",
     "answer": 4,
     "tol": 0,
     "explain": "הערכים של y: $-3,-2,-1,0$, ובקריאה האחרונה `y==0` מחזיר `x` (ריצה אמיתית: 4).",
     "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">fn</code> מתבצעות בסך הכול (כולל הראשונה) עבור <code class=\"tok\" dir=\"ltr\">fn(5, -3)</code>?",
     "explainHtml": "הערכים של y: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>3</mn><mo separator=\"true\">,</mo><mo>−</mo><mn>2</mn><mo separator=\"true\">,</mo><mo>−</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-3,-2,-1,0</annotation></semantics></math></span>, ובקריאה האחרונה <code class=\"tok\" dir=\"ltr\">y==0</code> מחזיר <code class=\"tok\" dir=\"ltr\">x</code> (ריצה אמיתית: 4)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q1",
   "partKey": "",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "נתונה הפונקציה הבאה.<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int fn (int x, int y)\n{\n        If (y==0)\n                return x;\n        if (y&lt;0)\n                return fn(x, y+1) - 1;\n        return fn(x, y-1) + 1;\n}</code></pre>מה מחזירה הפונקציה? כתבו במחברת את התשובה המתאימה מהרשימה הבאה ונמקו את תשובתכם בקצרה:<br>a. הפרש בין x ל-y<br>b. הפרש בין y ל-x<br>c. סכום x ו-y<br>d. מכפלת x ו-y+1<br>e. מכפלת x ו-y-1<br>f. אף אחת מהתשובות לעיל לא נכונה",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה): תשובה <strong>c</strong>, סכום x ו-y.<br>בקוד המודפס כתוב <code class=\"tok\" dir=\"ltr\">If</code> באות גדולה; זו שגיאת הקלדה, והכוונה ל-<code class=\"tok\" dir=\"ltr\">if</code>.<br>אם <code class=\"tok\" dir=\"ltr\">y==0</code> מוחזר <code class=\"tok\" dir=\"ltr\">x</code>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&gt;0</annotation></semantics></math></span>, כל קריאה מקטינה את y ב-1 ומוסיפה 1 לתוצאה, כך שאחרי y קריאות מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x+y</annotation></semantics></math></span>.<br>אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&lt;0</annotation></semantics></math></span>, כל קריאה מגדילה את y ב-1 ומחסירה 1 מהתוצאה, כך שאחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>y</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|y|</annotation></semantics></math></span> קריאות מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>−</mo><mi mathvariant=\"normal\">∣</mi><mi>y</mi><mi mathvariant=\"normal\">∣</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x-|y|=x+y</annotation></semantics></math></span>.<br>לכן בכל מקרה מוחזר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x+y</annotation></semantics></math></span>. למשל <code class=\"tok\" dir=\"ltr\">fn(5,3)</code> מחזירה 8 ו-<code class=\"tok\" dir=\"ltr\">fn(5,-3)</code> מחזירה 2.",
   "pointsTotal": 15,
   "pitfallsHtml": [
    "לבחור a (הפרש): במקרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&lt;0</annotation></semantics></math></span> הפונקציה מחסירה, אבל התוצאה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x+y</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">x-y</annotation></semantics></math></span>.",
    "לשכוח את המקרה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&lt;0</annotation></semantics></math></span> ולנמק רק עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">y&gt;0</annotation></semantics></math></span>.",
    "לטעות בבסיס הרקורסיה: הוא <code class=\"tok\" dir=\"ltr\">y==0</code> ומחזיר <code class=\"tok\" dir=\"ltr\">x</code>, ולא מוסיף איבר."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** המקבלת מספר טבעי, $n$.\nהפונקציה תחזיר `1` אם כל ספרה במיקום זוגי היא זוגית, וכל ספרה במיקום אי-זוגי היא אי-זוגית, אחרת הפונקציה תחזיר `0`. מספור המיקומים מתחיל מ-0 ומימין לשמאל.\nלדוגמא:\nעבור `n = 43418` הפונקציה תחזיר `1`\nעבור `n = 343518` הפונקציה תחזיר `0` (במיקום ה-2 נמצאת הספרה 5, מיקום זוגי וערך אי-זוגי)",
   "points": 20,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint digits_parity(int n)\n{\n   if (n == 0)\n      return 1;\n   if (n % 10 % 2 != 0)        // even position (0, 2, ...) must hold an even digit\n      return 0;\n   n = n / 10;\n   if (n == 0)\n      return 1;\n   if (n % 10 % 2 == 0)        // odd position (1, 3, ...) must hold an odd digit\n      return 0;\n   return digits_parity(n / 10);\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `digits_parity` נבחר כאן.)\nמקרה בסיס: `n==0`, לא נשארו ספרות, מחזירים `1`. בכל קריאה הספרה האחרונה (`n%10`) נמצאת במקום זוגי וחייבת להיות זוגית. אחרי שמורידים אותה, הספרה הבאה נמצאת במקום אי-זוגי וחייבת להיות אי-זוגית.\nאחרי שתי ספרות ממשיכים רקורסיבית עם המספר בלי שתיהן, ושוב הספרה האחרונה נמצאת במקום זוגי. מספר הקריאות הוא בערך חצי ממספר הספרות.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מקרה בסיס: `n==0` מחזיר `1`",
     "points": 4,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">n==0</code> מחזיר <code class=\"tok\" dir=\"ltr\">1</code>"
    },
    {
     "text": "בדיקת הספרה האחרונה `n%10` שבמקום זוגי: חייבת להיות זוגית",
     "points": 5,
     "html": "בדיקת הספרה האחרונה <code class=\"tok\" dir=\"ltr\">n%10</code> שבמקום זוגי: חייבת להיות זוגית"
    },
    {
     "text": "הסרת ספרה ובדיקת הספרה הבאה, במקום אי-זוגי: חייבת להיות אי-זוגית, ובסיס נוסף כש-`n` נגמר",
     "points": 5,
     "html": "הסרת ספרה ובדיקת הספרה הבאה, במקום אי-זוגי: חייבת להיות אי-זוגית, ובסיס נוסף כש-<code class=\"tok\" dir=\"ltr\">n</code> נגמר"
    },
    {
     "text": "קריאה רקורסיבית על המספר בלי שתי הספרות (`n / 10` אחרי ההסרה הראשונה)",
     "points": 4,
     "html": "קריאה רקורסיבית על המספר בלי שתי הספרות (<code class=\"tok\" dir=\"ltr\">n / 10</code> אחרי ההסרה הראשונה)"
    },
    {
     "text": "החזרת `0` בהפרה הראשונה",
     "points": 2,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> בהפרה הראשונה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק זוגיות של כל ספרה ולשכוח שבמקום אי-זוגי הספרה צריכה להיות אי-זוגית.",
    "לספור מקומות משמאל: המספור מימין לשמאל, והספרה `n%10` נמצאת במקום 0.",
    "לשכוח את בדיקת הסיום אחרי הספרה הראשונה: עבור מספר בעל ספרה אחת `n` הופך ל-0, והספרה 0 זוגית ולכן תחזיר 0 בטעות."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה קריאות ל-`digits_parity` מתבצעות בסך הכול (כולל הראשונה) עבור `n = 43418`?",
     "answer": 3,
     "tol": 0,
     "explain": "כל קריאה מסירה שתי ספרות: 43418, אחר כך 434, אחר כך 4, ושם `n` נהיה 0 ומחזירים 1 (ריצה אמיתית: 3).",
     "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">digits_parity</code> מתבצעות בסך הכול (כולל הראשונה) עבור <code class=\"tok\" dir=\"ltr\">n = 43418</code>?",
     "explainHtml": "כל קריאה מסירה שתי ספרות: 43418, אחר כך 434, אחר כך 4, ושם <code class=\"tok\" dir=\"ltr\">n</code> נהיה 0 ומחזירים 1 (ריצה אמיתית: 3)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה `digits_parity(12)` ומה מחזירה `digits_parity(21)`, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`1, 0`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`0, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">0, 1</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`1, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0, 0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0, 0</code>"
      }
     ],
     "correctId": "a",
     "explain": "ב-12 הספרה 2 במקום 0 (זוגית) והספרה 1 במקום 1 (אי-זוגית): 1. ב-21 הספרה 1 במקום 0 אי-זוגית: 0 (ריצה אמיתית: 1, 0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">digits_parity(12)</code> ומה מחזירה <code class=\"tok\" dir=\"ltr\">digits_parity(21)</code>, לפי הסדר?",
     "explainHtml": "ב-12 הספרה 2 במקום 0 (זוגית) והספרה 1 במקום 1 (אי-זוגית): 1. ב-21 הספרה 1 במקום 0 אי-זוגית: 0 (ריצה אמיתית: 1, 0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה האחרונה של הפונקציה.",
     "code": true,
     "lines": [
      "int digits_parity(int n)",
      "{",
      "   if (n == 0) return 1; if (n % 10 % 2 != 0) return 0;",
      "   n = n / 10; if (n == 0) return 1;",
      "   if (n % 10 % 2 == 0) return 0;",
      "___",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return digits_parity(n / 10);",
       "html": "return digits_parity(n / 10);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return digits_parity(n);",
       "html": "return digits_parity(n);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return digits_parity(n / 100);",
       "html": "return digits_parity(n / 100);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return digits_parity(n / 10) + 1;",
       "html": "return digits_parity(n / 10) + 1;"
      }
     ],
     "correctId": "a",
     "explain": "אחרי שהוסרה ספרה אחת, מסירים את השנייה בעזרת `n / 10` וממשיכים עם המקום הזוגי הבא. `n` לבדו בודק שוב את אותה ספרה, `n / 100` מדלג על ספרה, ו-`+ 1` מחזיר ערך שאינו 0 או 1 (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את השורה האחרונה של הפונקציה.",
     "explainHtml": "אחרי שהוסרה ספרה אחת, מסירים את השנייה בעזרת <code class=\"tok\" dir=\"ltr\">n / 10</code> וממשיכים עם המקום הזוגי הבא. <code class=\"tok\" dir=\"ltr\">n</code> לבדו בודק שוב את אותה ספרה, <code class=\"tok\" dir=\"ltr\">n / 100</code> מדלג על ספרה, ו-<code class=\"tok\" dir=\"ltr\">+ 1</code> מחזיר ערך שאינו 0 או 1 (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int digits_parity(int n)",
      "{",
      "   if (n == 0) return 1; if (n % 10 % 2 != 0) return 0;",
      "   n = n / 10; if (n == 0) return 1;",
      "   if (n % 10 % 2 == 0) return 0;",
      "___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `digits_parity`.",
     "code": true,
     "lines": [
      "int digits_parity(int n)",
      "{",
      "   if (n == 0) return 1; if (n % 10 % 2 != 0) return 0;",
      "   n = n / 10; if (n == 0) return 1;",
      "   if (n % 10 % 2 == 0) return 0;",
      "   return digits_parity(n / 10);",
      "}"
     ],
     "explain": "בסיס ובדיקת מקום זוגי, הסרת ספרה ובסיס שני, בדיקת מקום אי-זוגי, ובסוף הרקורסיה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">digits_parity</code>.",
     "explainHtml": "בסיס ובדיקת מקום זוגי, הסרת ספרה ובסיס שני, בדיקת מקום אי-זוגי, ובסוף הרקורסיה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int digits_parity(int n)",
      "{",
      "   if (n == 0) return 1; if (n % 10 % 2 != 0) return 0;",
      "   n = n / 10; if (n == 0) return 1;",
      "   if (n % 10 % 2 == 0) return 0;",
      "   return digits_parity(n / 10);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q2",
   "partKey": "",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> המקבלת מספר טבעי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם כל ספרה במיקום זוגי היא זוגית, וכל ספרה במיקום אי-זוגי היא אי-זוגית, אחרת הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>. מספור המיקומים מתחיל מ-0 ומימין לשמאל.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">n = 43418</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code><br>עבור <code class=\"tok\" dir=\"ltr\">n = 343518</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code> (במיקום ה-2 נמצאת הספרה 5, מיקום זוגי וערך אי-זוגי)",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int digits_parity(int n)\n{\n   if (n == 0)\n      return 1;\n   if (n % 10 % 2 != 0)        // even position (0, 2, ...) must hold an even digit\n      return 0;\n   n = n / 10;\n   if (n == 0)\n      return 1;\n   if (n % 10 % 2 == 0)        // odd position (1, 3, ...) must hold an odd digit\n      return 0;\n   return digits_parity(n / 10);\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">digits_parity</code> נבחר כאן.)<br>מקרה בסיס: <code class=\"tok\" dir=\"ltr\">n==0</code>, לא נשארו ספרות, מחזירים <code class=\"tok\" dir=\"ltr\">1</code>. בכל קריאה הספרה האחרונה (<code class=\"tok\" dir=\"ltr\">n%10</code>) נמצאת במקום זוגי וחייבת להיות זוגית. אחרי שמורידים אותה, הספרה הבאה נמצאת במקום אי-זוגי וחייבת להיות אי-זוגית.<br>אחרי שתי ספרות ממשיכים רקורסיבית עם המספר בלי שתיהן, ושוב הספרה האחרונה נמצאת במקום זוגי. מספר הקריאות הוא בערך חצי ממספר הספרות.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "לבדוק רק זוגיות של כל ספרה ולשכוח שבמקום אי-זוגי הספרה צריכה להיות אי-זוגית.",
    "לספור מקומות משמאל: המספור מימין לשמאל, והספרה <code class=\"tok\" dir=\"ltr\">n%10</code> נמצאת במקום 0.",
    "לשכוח את בדיקת הסיום אחרי הספרה הראשונה: עבור מספר בעל ספרה אחת <code class=\"tok\" dir=\"ltr\">n</code> הופך ל-0, והספרה 0 זוגית ולכן תחזיר 0 בטעות."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "arrays",
   "question": "כתבו פונקציה **יעילה** שמקבלת מערך של שלמים $a$ וגודלו $n$. הפונקציה בודקת ומחזירה **את כמות הערכים השונים** בתחום שבין `0` ל-`n-1` המופיעים במערך.\nלדוגמא:\nעבור `n = 7` ו-`a = {1,1,5,0,9999,123456,0}`, הפונקציה תחזיר `3`, כי במערך מופיעים 3 ערכים שונים מהתחום מ-0 עד 6 - 0,1,5.\nעל הפונקציה לרוץ בסדר גודל $n$.\nניתן להשתמש במערך עזר.",
   "points": 20,
   "part": "א",
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint count_in_range(int *a, int n)\n{\n   int i, count = 0;\n   int *seen = (int*)calloc(n, sizeof(int));\n   for (i = 0; i < n; i++)\n   {\n      if (a[i] >= 0 && a[i] < n && !seen[a[i]])\n      {\n         seen[a[i]] = 1;\n         count++;\n      }\n   }\n   free(seen);\n   return count;\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `count_in_range` נבחר כאן.)\nמערך עזר `seen` בגודל `n` מסמן אילו ערכים בתחום `0` עד `n-1` כבר נספרו; ערכים מחוץ לתחום (כמו `9999`) מדלגים עליהם. כל ערך נספר רק בפעם הראשונה שהוא מופיע.\nסריקה אחת של המערך: $O(n)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מערך עזר `seen` בגודל `n`, כי הערכים בתחום 0 עד `n-1`",
     "points": 4,
     "html": "מערך עזר <code class=\"tok\" dir=\"ltr\">seen</code> בגודל <code class=\"tok\" dir=\"ltr\">n</code>, כי הערכים בתחום 0 עד <code class=\"tok\" dir=\"ltr\">n-1</code>"
    },
    {
     "text": "דילוג על ערכים מחוץ לתחום (`a[i] >= 0 && a[i] < n`)",
     "points": 5,
     "html": "דילוג על ערכים מחוץ לתחום (<code class=\"tok\" dir=\"ltr\">a[i] &gt;= 0 &amp;&amp; a[i] &lt; n</code>)"
    },
    {
     "text": "ספירת כל ערך שונה פעם אחת בלבד, בעזרת `seen`",
     "points": 5,
     "html": "ספירת כל ערך שונה פעם אחת בלבד, בעזרת <code class=\"tok\" dir=\"ltr\">seen</code>"
    },
    {
     "text": "החזרת `count` ושחרור הזיכרון",
     "points": 3,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">count</code> ושחרור הזיכרון"
    },
    {
     "text": "סריקה אחת, כלומר $O(n)$",
     "points": 3,
     "html": "סריקה אחת, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור כל מופע במקום כל ערך שונה: במערך `{1,1}` מתקבל 2 במקום 1.",
    "לא לדלג על ערכים מחוץ לתחום: `seen[9999]` יוצא מגבולות המערך.",
    "בדיקת כל ערך מול כל הערכים שלפניו בלולאה מקוננת: $O(n^2)$ ולא $O(n)$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `count_in_range` עבור `a = {3,3,-1,0,7,0}` ו-`n = 6`?",
     "answer": 2,
     "tol": 0,
     "explain": "בתחום $0..5$ מופיעים רק הערכים 3 ו-0 (כל אחד פעמיים), וההשאר `-1` ו-`7` מחוץ לתחום: 2 ערכים שונים (ריצה אמיתית: 2).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">count_in_range</code> עבור <code class=\"tok\" dir=\"ltr\">a = {3,3,-1,0,7,0}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code>?",
     "explainHtml": "בתחום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0..5</mn></mrow><annotation encoding=\"application/x-tex\">0..5</annotation></semantics></math></span> מופיעים רק הערכים 3 ו-0 (כל אחד פעמיים), וההשאר <code class=\"tok\" dir=\"ltr\">-1</code> ו-<code class=\"tok\" dir=\"ltr\">7</code> מחוץ לתחום: 2 ערכים שונים (ריצה אמיתית: 2)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי ה-`if`.",
     "code": true,
     "lines": [
      "int count_in_range(int *a, int n)",
      "{",
      "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++)",
      "      if (___)",
      "      {",
      "         seen[a[i]] = 1;",
      "         count++;",
      "      }",
      "   free(seen);",
      "   return count;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "a[i] >= 0 && a[i] < n && !seen[a[i]]",
       "html": "a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; !seen[a[i]]"
      },
      {
       "id": "b",
       "type": "text",
       "value": "a[i] >= 0 && a[i] < n",
       "html": "a[i] &gt;= 0 &amp;&amp; a[i] &lt; n"
      },
      {
       "id": "c",
       "type": "text",
       "value": "a[i] >= 0 && a[i] < n && seen[a[i]]",
       "html": "a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]]"
      },
      {
       "id": "d",
       "type": "text",
       "value": "a[i] > 0 && a[i] < n && !seen[a[i]]",
       "html": "a[i] &gt; 0 &amp;&amp; a[i] &lt; n &amp;&amp; !seen[a[i]]"
      }
     ],
     "correctId": "a",
     "explain": "סופרים ערך רק אם הוא בתחום ועוד לא נראה. בלי `!seen` מתקבלות ספירות כפולות, עם `seen` בלי שלילה לא סופרים אף ערך, ו-`> 0` מפספס את הערך 0 (ריצה אמיתית: כולן נכשלות על מערכים אקראיים).",
     "promptHtml": "השלימו את תנאי ה-<code class=\"tok\" dir=\"ltr\">if</code>.",
     "explainHtml": "סופרים ערך רק אם הוא בתחום ועוד לא נראה. בלי <code class=\"tok\" dir=\"ltr\">!seen</code> מתקבלות ספירות כפולות, עם <code class=\"tok\" dir=\"ltr\">seen</code> בלי שלילה לא סופרים אף ערך, ו-<code class=\"tok\" dir=\"ltr\">&gt; 0</code> מפספס את הערך 0 (ריצה אמיתית: כולן נכשלות על מערכים אקראיים).",
     "linesHtml": [
      "int count_in_range(int *a, int n)",
      "{",
      "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++)",
      "      if (___)",
      "      {",
      "         seen[a[i]] = 1;",
      "         count++;",
      "      }",
      "   free(seen);",
      "   return count;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `count_in_range`.",
     "code": true,
     "lines": [
      "int count_in_range(int *a, int n)",
      "{",
      "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && !seen[a[i]]) { seen[a[i]] = 1; count++; }",
      "   free(seen); return count;",
      "}"
     ],
     "explain": "הקצאת `seen`, הסריקה, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">count_in_range</code>.",
     "explainHtml": "הקצאת <code class=\"tok\" dir=\"ltr\">seen</code>, הסריקה, ובסוף שחרור והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int count_in_range(int *a, int n)",
      "{",
      "   int i, count = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; !seen[a[i]]) { seen[a[i]] = 1; count++; }",
      "   free(seen); return count;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת של המערך עם עבודה קבועה בכל איבר: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת של המערך עם עבודה קבועה בכל איבר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q3a",
   "partKey": "a",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "כתבו פונקציה <strong>יעילה</strong> שמקבלת מערך של שלמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. הפונקציה בודקת ומחזירה <strong>את כמות הערכים השונים</strong> בתחום שבין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n-1</code> המופיעים במערך.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">n = 7</code> ו-<code class=\"tok\" dir=\"ltr\">a = {1,1,5,0,9999,123456,0}</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">3</code>, כי במערך מופיעים 3 ערכים שונים מהתחום מ-0 עד 6 - 0,1,5.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int count_in_range(int *a, int n)\n{\n   int i, count = 0;\n   int *seen = (int*)calloc(n, sizeof(int));\n   for (i = 0; i &lt; n; i++)\n   {\n      if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; !seen[a[i]])\n      {\n         seen[a[i]] = 1;\n         count++;\n      }\n   }\n   free(seen);\n   return count;\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">count_in_range</code> נבחר כאן.)<br>מערך עזר <code class=\"tok\" dir=\"ltr\">seen</code> בגודל <code class=\"tok\" dir=\"ltr\">n</code> מסמן אילו ערכים בתחום <code class=\"tok\" dir=\"ltr\">0</code> עד <code class=\"tok\" dir=\"ltr\">n-1</code> כבר נספרו; ערכים מחוץ לתחום (כמו <code class=\"tok\" dir=\"ltr\">9999</code>) מדלגים עליהם. כל ערך נספר רק בפעם הראשונה שהוא מופיע.<br>סריקה אחת של המערך: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "לספור כל מופע במקום כל ערך שונה: במערך <code class=\"tok\" dir=\"ltr\">{1,1}</code> מתקבל 2 במקום 1.",
    "לא לדלג על ערכים מחוץ לתחום: <code class=\"tok\" dir=\"ltr\">seen[9999]</code> יוצא מגבולות המערך.",
    "בדיקת כל ערך מול כל הערכים שלפניו בלולאה מקוננת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "arrays",
   "question": "**בונוס** (10 נקודות)\nכתבו פונקציה **יעילה** שמקבלת מערך של שלמים $a$ וגודלו $n$.\nהפונקציה בודקת ומחזירה את האינדקס המינימלי `i`, כך שכל הערכים השונים שיש במערך בתחום שבין `0` ל-`n-1` מופיעים בחלקו הראשון של המערך, באינדקסים שבין 0 עד `i` (כולל).\nלדוגמא:\nעבור `n = 6` ו-`a = {1,9999,1,4,2,1}`, הפונקציה תחזיר `4`, כי עד איבר `a[4]` מופיעים כל הערכים השונים שיש במערך בתחום מ-0 עד 5.\nעבור `n = 5` ו-`a = {2,8888,2,5,2}`, הפונקציה תחזיר `0`, כי במערך יש רק ערך אחד בתחום מ-0 עד 4.\nעל הפונקציה לרוץ בסדר גודל $n$.\nניתן להשתמש במערך עזר.",
   "points": 10,
   "part": "ב",
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint min_prefix_index(int *a, int n)\n{\n   int i, total = 0, found = 0;\n   int *seen = (int*)calloc(n, sizeof(int));\n   for (i = 0; i < n; i++)              // pass 1: how many distinct values in 0..n-1\n      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0)\n      {\n         seen[a[i]] = 1;\n         total++;\n      }\n   for (i = 0; i < n; i++)              // pass 2: first index where all of them were seen\n   {\n      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1)\n      {\n         seen[a[i]] = 2;\n         found++;\n      }\n      if (found == total)\n      {\n         free(seen);\n         return i;\n      }\n   }\n   free(seen);\n   return -1;                           // only when n == 0\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `min_prefix_index` נבחר כאן.)\nסריקה ראשונה (כמו בסעיף הראשי) סופרת כמה ערכים שונים בתחום יש במערך, `total`, ומסמנת אותם ב-1. סריקה שנייה עוברת מההתחלה ומסמנת ב-2 כל ערך בתחום שנראה בה לראשונה; האינדקס הראשון שבו נראו כל `total` הערכים הוא התשובה.\nאם אין במערך אף ערך בתחום, `total` הוא 0 ומוחזר `0` (התנאי מתקיים כבר בקידומת `a[0]`); השאלה לא מגדירה את המקרה הזה.\nשתי סריקות: $O(n)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "סריקה ראשונה: ספירת הערכים השונים שבתחום, `total`, וסימונם ב-`seen`",
     "points": 3,
     "html": "סריקה ראשונה: ספירת הערכים השונים שבתחום, <code class=\"tok\" dir=\"ltr\">total</code>, וסימונם ב-<code class=\"tok\" dir=\"ltr\">seen</code>"
    },
    {
     "text": "סריקה שנייה: סימון המופע הראשון של כל ערך בתחום (`seen` ל-2) וספירתו ב-`found`",
     "points": 3,
     "html": "סריקה שנייה: סימון המופע הראשון של כל ערך בתחום (<code class=\"tok\" dir=\"ltr\">seen</code> ל-2) וספירתו ב-<code class=\"tok\" dir=\"ltr\">found</code>"
    },
    {
     "text": "החזרת `i` כאשר `found == total`",
     "points": 2,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">i</code> כאשר <code class=\"tok\" dir=\"ltr\">found == total</code>"
    },
    {
     "text": "זמן $O(n)$ ושחרור המערך",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ושחרור המערך"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור גם ערכים מחוץ לתחום, כמו `9999`, כחלק מ-`total`.",
    "להגדיל את `found` בכל מופע של ערך ולא רק במופע הראשון שלו: לכן מסמנים ב-2.",
    "לבדוק את `found == total` רק אחרי הלולאה ולהחזיר את האינדקס האחרון במקום הקטן ביותר."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "אחרי הסריקה הראשונה עבור `a = {1,9999,1,4,2,1}` ו-`n = 6`: מהו `total`?",
     "answer": 3,
     "tol": 0,
     "explain": "בתחום $0..5$ מופיעים 1, 4 ו-2, והערך 9999 מחוץ לתחום: `total = 3` (ריצה אמיתית: 3).",
     "promptHtml": "אחרי הסריקה הראשונה עבור <code class=\"tok\" dir=\"ltr\">a = {1,9999,1,4,2,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code>: מהו <code class=\"tok\" dir=\"ltr\">total</code>?",
     "explainHtml": "בתחום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0..5</mn></mrow><annotation encoding=\"application/x-tex\">0..5</annotation></semantics></math></span> מופיעים 1, 4 ו-2, והערך 9999 מחוץ לתחום: <code class=\"tok\" dir=\"ltr\">total = 3</code> (ריצה אמיתית: 3)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `min_prefix_index` עבור `a = {0,0,0,1,1}` ו-`n = 5`?",
     "answer": 3,
     "tol": 0,
     "explain": "יש שני ערכים בתחום (0 ו-1), והערך 1 מופיע לראשונה באינדקס 3, שבו `found` מגיע ל-`total` (ריצה אמיתית: 3).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">min_prefix_index</code> עבור <code class=\"tok\" dir=\"ltr\">a = {0,0,0,1,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 5</code>?",
     "explainHtml": "יש שני ערכים בתחום (0 ו-1), והערך 1 מופיע לראשונה באינדקס 3, שבו <code class=\"tok\" dir=\"ltr\">found</code> מגיע ל-<code class=\"tok\" dir=\"ltr\">total</code> (ריצה אמיתית: 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי העצירה בסריקה השנייה.",
     "code": true,
     "lines": [
      "int min_prefix_index(int *a, int n)",
      "{",
      "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
      "   for (i = 0; i < n; i++)",
      "   {",
      "      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1) { seen[a[i]] = 2; found++; }",
      "      if (___) { free(seen); return i; }",
      "   }",
      "   free(seen);",
      "   return -1;",
      "}"
     ],
     "blankIndex": 7,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "found == total",
       "html": "found == total"
      },
      {
       "id": "b",
       "type": "text",
       "value": "found == n",
       "html": "found == n"
      },
      {
       "id": "c",
       "type": "text",
       "value": "found > total",
       "html": "found &gt; total"
      },
      {
       "id": "d",
       "type": "text",
       "value": "found == total - 1",
       "html": "found == total - 1"
      }
     ],
     "correctId": "a",
     "explain": "עוצרים כשכל הערכים השונים כבר נראו. האפשרויות האחרות לא מתקיימות לעולם או מתקיימות מוקדם מדי (ריצה אמיתית: כולן נכשלות על הדוגמאות).",
     "promptHtml": "השלימו את תנאי העצירה בסריקה השנייה.",
     "explainHtml": "עוצרים כשכל הערכים השונים כבר נראו. האפשרויות האחרות לא מתקיימות לעולם או מתקיימות מוקדם מדי (ריצה אמיתית: כולן נכשלות על הדוגמאות).",
     "linesHtml": [
      "int min_prefix_index(int *a, int n)",
      "{",
      "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
      "   for (i = 0; i &lt; n; i++)",
      "   {",
      "      if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 1) { seen[a[i]] = 2; found++; }",
      "      if (___) { free(seen); return i; }",
      "   }",
      "   free(seen);",
      "   return -1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `min_prefix_index`.",
     "code": true,
     "lines": [
      "int min_prefix_index(int *a, int n)",
      "{",
      "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i < n; i++) if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
      "   for (i = 0; i < n; i++) { if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1) { seen[a[i]] = 2; found++; } if (found == total) { free(seen); return i; } }",
      "   free(seen); return -1;",
      "}"
     ],
     "explain": "הקצאה, סריקה ראשונה לספירה, סריקה שנייה שעוצרת, ושחרור והחזרת `-1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">min_prefix_index</code>.",
     "explainHtml": "הקצאה, סריקה ראשונה לספירה, סריקה שנייה שעוצרת, ושחרור והחזרת <code class=\"tok\" dir=\"ltr\">-1</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int min_prefix_index(int *a, int n)",
      "{",
      "   int i, total = 0, found = 0, *seen = (int*)calloc(n, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 0) { seen[a[i]] = 1; total++; }",
      "   for (i = 0; i &lt; n; i++) { if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 1) { seen[a[i]] = 2; found++; } if (found == total) { free(seen); return i; } }",
      "   free(seen); return -1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות לינאריות: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות לינאריות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q3b",
   "partKey": "b",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "<strong>בונוס</strong> (10 נקודות)<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת מערך של שלמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>הפונקציה בודקת ומחזירה את האינדקס המינימלי <code class=\"tok\" dir=\"ltr\">i</code>, כך שכל הערכים השונים שיש במערך בתחום שבין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n-1</code> מופיעים בחלקו הראשון של המערך, באינדקסים שבין 0 עד <code class=\"tok\" dir=\"ltr\">i</code> (כולל).<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">n = 6</code> ו-<code class=\"tok\" dir=\"ltr\">a = {1,9999,1,4,2,1}</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">4</code>, כי עד איבר <code class=\"tok\" dir=\"ltr\">a[4]</code> מופיעים כל הערכים השונים שיש במערך בתחום מ-0 עד 5.<br>עבור <code class=\"tok\" dir=\"ltr\">n = 5</code> ו-<code class=\"tok\" dir=\"ltr\">a = {2,8888,2,5,2}</code>, הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>, כי במערך יש רק ערך אחד בתחום מ-0 עד 4.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int min_prefix_index(int *a, int n)\n{\n   int i, total = 0, found = 0;\n   int *seen = (int*)calloc(n, sizeof(int));\n   for (i = 0; i &lt; n; i++)              // pass 1: how many distinct values in 0..n-1\n      if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 0)\n      {\n         seen[a[i]] = 1;\n         total++;\n      }\n   for (i = 0; i &lt; n; i++)              // pass 2: first index where all of them were seen\n   {\n      if (a[i] &gt;= 0 &amp;&amp; a[i] &lt; n &amp;&amp; seen[a[i]] == 1)\n      {\n         seen[a[i]] = 2;\n         found++;\n      }\n      if (found == total)\n      {\n         free(seen);\n         return i;\n      }\n   }\n   free(seen);\n   return -1;                           // only when n == 0\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">min_prefix_index</code> נבחר כאן.)<br>סריקה ראשונה (כמו בסעיף הראשי) סופרת כמה ערכים שונים בתחום יש במערך, <code class=\"tok\" dir=\"ltr\">total</code>, ומסמנת אותם ב-1. סריקה שנייה עוברת מההתחלה ומסמנת ב-2 כל ערך בתחום שנראה בה לראשונה; האינדקס הראשון שבו נראו כל <code class=\"tok\" dir=\"ltr\">total</code> הערכים הוא התשובה.<br>אם אין במערך אף ערך בתחום, <code class=\"tok\" dir=\"ltr\">total</code> הוא 0 ומוחזר <code class=\"tok\" dir=\"ltr\">0</code> (התנאי מתקיים כבר בקידומת <code class=\"tok\" dir=\"ltr\">a[0]</code>); השאלה לא מגדירה את המקרה הזה.<br>שתי סריקות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 10,
   "pitfallsHtml": [
    "לספור גם ערכים מחוץ לתחום, כמו <code class=\"tok\" dir=\"ltr\">9999</code>, כחלק מ-<code class=\"tok\" dir=\"ltr\">total</code>.",
    "להגדיל את <code class=\"tok\" dir=\"ltr\">found</code> בכל מופע של ערך ולא רק במופע הראשון שלו: לכן מסמנים ב-2.",
    "לבדוק את <code class=\"tok\" dir=\"ltr\">found == total</code> רק אחרי הלולאה ולהחזיר את האינדקס האחרון במקום הקטן ביותר."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "arrays",
   "question": "בהינתן מערך $a=\\{a_0,a_1,\\ldots,a_{n-1}\\}$ המערכים הבאים $\\{a_{n-1},a_0,\\ldots,a_{n-2}\\}$, $\\{a_{n-2},a_{n-1},\\ldots,a_{n-3}\\}$ וכו' הם תוצר של **סיבובים ציקלי ימינה** של המערך $a$.\nכתבו פונקציה **יעילה** שמקבלת שני מערכים $a$ ו-$b$ באותו הגודל, ואת גודלם $n$. המערכים מכילים מספרים שלמים. כל המספרים בתוך מערך $a$ שונים זה מזה, ובנוסף, כל המספרים בתוך מערך $b$ שונים זה מזה. הפונקציה בודקת ומחזירה `1` אם מערך $b$ הוא סיבוב ציקלי ימינה של מערך $a$, אחרת היא מחזירה `0`.\nלדוגמא:\nעבור `a = {5,2,8,4,1}` ו-`b = {4,1,5,2,8}` הפונקציה תחזיר `1` (כי $b$ הוא סיבוב ציקלי ב-2 תאים ימינה של מערך $a$).\nעל הפונקציה לרוץ בסדר גודל $n$.",
   "points": 25,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint is_rotation(int *a, int *b, int n)\n{\n   int i, k = -1;\n   if (n == 0)\n      return 1;\n   for (i = 0; i < n; i++)          // where did a[0] move to? (values are distinct)\n      if (b[i] == a[0])\n         k = i;\n   if (k == -1)\n      return 0;\n   for (i = 0; i < n; i++)          // a rotation by k cells puts a[i] at b[(i+k)%n]\n      if (b[(i + k) % n] != a[i])\n         return 0;\n   return 1;\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `is_rotation` נבחר כאן.)\nכל הערכים ב-`b` שונים, ולכן `a[0]` מופיע ב-`b` לכל היותר פעם אחת, והמקום שלו `k` קובע את גודל הסיבוב: סיבוב ב-`k` תאים ימינה מעביר את `a[i]` למקום `(i+k)%n`.\nסריקה אחת מוצאת את `k` (אם `a[0]` לא נמצא ב-`b` מחזירים `0`), וסריקה שנייה בודקת את כל המקומות. בדוגמה `a[0]=5` נמצא ב-`b[2]`, כלומר סיבוב ב-2.\nשתי סריקות: $O(n)$. (מערך `b` זהה ל-`a`, כלומר סיבוב ב-0 או ב-`n` תאים, נחשב כאן סיבוב.)",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מציאת המקום `k` של `a[0]` בתוך `b` (הערכים שונים, ולכן `k` יחיד), ו-`0` אם `a[0]` לא נמצא",
     "points": 6,
     "html": "מציאת המקום <code class=\"tok\" dir=\"ltr\">k</code> של <code class=\"tok\" dir=\"ltr\">a[0]</code> בתוך <code class=\"tok\" dir=\"ltr\">b</code> (הערכים שונים, ולכן <code class=\"tok\" dir=\"ltr\">k</code> יחיד), ו-<code class=\"tok\" dir=\"ltr\">0</code> אם <code class=\"tok\" dir=\"ltr\">a[0]</code> לא נמצא"
    },
    {
     "text": "טיפול ב-`n == 0`: מחזירים `1`",
     "points": 4,
     "html": "טיפול ב-<code class=\"tok\" dir=\"ltr\">n == 0</code>: מחזירים <code class=\"tok\" dir=\"ltr\">1</code>"
    },
    {
     "text": "בדיקת כל התאים: `a[i]` חייב להופיע ב-`b[(i + k) % n]`",
     "points": 9,
     "html": "בדיקת כל התאים: <code class=\"tok\" dir=\"ltr\">a[i]</code> חייב להופיע ב-<code class=\"tok\" dir=\"ltr\">b[(i + k) % n]</code>"
    },
    {
     "text": "החזרת `0` בהפרה הראשונה ו-`1` בסוף",
     "points": 3,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> בהפרה הראשונה ו-<code class=\"tok\" dir=\"ltr\">1</code> בסוף"
    },
    {
     "text": "שתי סריקות לינאריות, כלומר $O(n)$",
     "points": 3,
     "html": "שתי סריקות לינאריות, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לנסות את כל $n$ הסיבובים ולהשוות כל אחד: $O(n^2)$ ולא $O(n)$.",
    "לשכוח את `% n`: `i + k` יוצא מגבולות `b`.",
    "לא לנצל שהערכים שונים: רק בגללו המקום של `a[0]` יחיד וקובע את גודל הסיבוב."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "עבור `a = {5,2,8,4,1}` ו-`b = {4,1,5,2,8}`: מהו `k`, האינדקס של `a[0]` בתוך `b`?",
     "answer": 2,
     "tol": 0,
     "explain": "`b[2] = 5 = a[0]`, כלומר סיבוב ב-2 תאים ימינה (ריצה אמיתית: 2).",
     "promptHtml": "עבור <code class=\"tok\" dir=\"ltr\">a = {5,2,8,4,1}</code> ו-<code class=\"tok\" dir=\"ltr\">b = {4,1,5,2,8}</code>: מהו <code class=\"tok\" dir=\"ltr\">k</code>, האינדקס של <code class=\"tok\" dir=\"ltr\">a[0]</code> בתוך <code class=\"tok\" dir=\"ltr\">b</code>?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">b[2] = 5 = a[0]</code>, כלומר סיבוב ב-2 תאים ימינה (ריצה אמיתית: 2)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה הפונקציה עבור `a = {1,2,3}` ו-`b = {3,2,1}`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
      }
     ],
     "correctId": "a",
     "explain": "`a[0] = 1` נמצא ב-`b[2]`, ולכן `k = 2`. אבל `b[(1+2)%3] = b[0] = 3` שונה מ-`a[1] = 2`: מחזירים 0 (ריצה אמיתית: 0). הפיכת סדר אינה סיבוב.",
     "promptHtml": "מה מחזירה הפונקציה עבור <code class=\"tok\" dir=\"ltr\">a = {1,2,3}</code> ו-<code class=\"tok\" dir=\"ltr\">b = {3,2,1}</code>?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">a[0] = 1</code> נמצא ב-<code class=\"tok\" dir=\"ltr\">b[2]</code>, ולכן <code class=\"tok\" dir=\"ltr\">k = 2</code>. אבל <code class=\"tok\" dir=\"ltr\">b[(1+2)%3] = b[0] = 3</code> שונה מ-<code class=\"tok\" dir=\"ltr\">a[1] = 2</code>: מחזירים 0 (ריצה אמיתית: 0). הפיכת סדר אינה סיבוב."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי שבודק כל תא.",
     "code": true,
     "lines": [
      "int is_rotation(int *a, int *b, int n)",
      "{",
      "   int i, k = -1;",
      "   if (n == 0) return 1;",
      "   for (i = 0; i < n; i++)",
      "      if (b[i] == a[0]) k = i;",
      "   if (k == -1) return 0;",
      "   for (i = 0; i < n; i++)",
      "      if (___) return 0;",
      "   return 1;",
      "}"
     ],
     "blankIndex": 8,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "b[(i + k) % n] != a[i]",
       "html": "b[(i + k) % n] != a[i]"
      },
      {
       "id": "b",
       "type": "text",
       "value": "b[(i + k + 1) % n] != a[i]",
       "html": "b[(i + k + 1) % n] != a[i]"
      },
      {
       "id": "c",
       "type": "text",
       "value": "b[i] != a[i]",
       "html": "b[i] != a[i]"
      },
      {
       "id": "d",
       "type": "text",
       "value": "b[(k - i + n) % n] != a[i]",
       "html": "b[(k - i + n) % n] != a[i]"
      }
     ],
     "correctId": "a",
     "explain": "סיבוב ב-`k` תאים ימינה מעביר את `a[i]` למקום `(i + k) % n`. האחרות בודקות היסט שגוי, בלי היסט, או סדר הפוך (ריצה אמיתית: כולן נכשלות על סיבובים אמיתיים).",
     "promptHtml": "השלימו את התנאי שבודק כל תא.",
     "explainHtml": "סיבוב ב-<code class=\"tok\" dir=\"ltr\">k</code> תאים ימינה מעביר את <code class=\"tok\" dir=\"ltr\">a[i]</code> למקום <code class=\"tok\" dir=\"ltr\">(i + k) % n</code>. האחרות בודקות היסט שגוי, בלי היסט, או סדר הפוך (ריצה אמיתית: כולן נכשלות על סיבובים אמיתיים).",
     "linesHtml": [
      "int is_rotation(int *a, int *b, int n)",
      "{",
      "   int i, k = -1;",
      "   if (n == 0) return 1;",
      "   for (i = 0; i &lt; n; i++)",
      "      if (b[i] == a[0]) k = i;",
      "   if (k == -1) return 0;",
      "   for (i = 0; i &lt; n; i++)",
      "      if (___) return 0;",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `is_rotation`.",
     "code": true,
     "lines": [
      "int is_rotation(int *a, int *b, int n)",
      "{",
      "   int i, k = -1; if (n == 0) return 1;",
      "   for (i = 0; i < n; i++) { if (b[i] == a[0]) k = i; } if (k == -1) return 0;",
      "   for (i = 0; i < n; i++) if (b[(i + k) % n] != a[i]) return 0;",
      "   return 1;",
      "}"
     ],
     "explain": "הכנה וטיפול ב-`n == 0`, איתור `k`, בדיקת כל התאים, ו-`return 1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">is_rotation</code>.",
     "explainHtml": "הכנה וטיפול ב-<code class=\"tok\" dir=\"ltr\">n == 0</code>, איתור <code class=\"tok\" dir=\"ltr\">k</code>, בדיקת כל התאים, ו-<code class=\"tok\" dir=\"ltr\">return 1</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int is_rotation(int *a, int *b, int n)",
      "{",
      "   int i, k = -1; if (n == 0) return 1;",
      "   for (i = 0; i &lt; n; i++) { if (b[i] == a[0]) k = i; } if (k == -1) return 0;",
      "   for (i = 0; i &lt; n; i++) if (b[(i + k) % n] != a[i]) return 0;",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות לינאריות: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות לינאריות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q4",
   "partKey": "",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "בהינתן מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\">{</mo><msub><mi>a</mi><mn>0</mn></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">a=\\{a_0,a_1,\\ldots,a_{n-1}\\}</annotation></semantics></math></span> המערכים הבאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mn>0</mn></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a_{n-1},a_0,\\ldots,a_{n-2}\\}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">{</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo separator=\"true\">,</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow></msub><mo stretchy=\"false\">}</mo></mrow><annotation encoding=\"application/x-tex\">\\{a_{n-2},a_{n-1},\\ldots,a_{n-3}\\}</annotation></semantics></math></span> וכו' הם תוצר של <strong>סיבובים ציקלי ימינה</strong> של המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת שני מערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> באותו הגודל, ואת גודלם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>. המערכים מכילים מספרים שלמים. כל המספרים בתוך מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> שונים זה מזה, ובנוסף, כל המספרים בתוך מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> שונים זה מזה. הפונקציה בודקת ומחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> הוא סיבוב ציקלי ימינה של מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>, אחרת היא מחזירה <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">a = {5,2,8,4,1}</code> ו-<code class=\"tok\" dir=\"ltr\">b = {4,1,5,2,8}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code> (כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span> הוא סיבוב ציקלי ב-2 תאים ימינה של מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>).<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int is_rotation(int *a, int *b, int n)\n{\n   int i, k = -1;\n   if (n == 0)\n      return 1;\n   for (i = 0; i &lt; n; i++)          // where did a[0] move to? (values are distinct)\n      if (b[i] == a[0])\n         k = i;\n   if (k == -1)\n      return 0;\n   for (i = 0; i &lt; n; i++)          // a rotation by k cells puts a[i] at b[(i+k)%n]\n      if (b[(i + k) % n] != a[i])\n         return 0;\n   return 1;\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">is_rotation</code> נבחר כאן.)<br>כל הערכים ב-<code class=\"tok\" dir=\"ltr\">b</code> שונים, ולכן <code class=\"tok\" dir=\"ltr\">a[0]</code> מופיע ב-<code class=\"tok\" dir=\"ltr\">b</code> לכל היותר פעם אחת, והמקום שלו <code class=\"tok\" dir=\"ltr\">k</code> קובע את גודל הסיבוב: סיבוב ב-<code class=\"tok\" dir=\"ltr\">k</code> תאים ימינה מעביר את <code class=\"tok\" dir=\"ltr\">a[i]</code> למקום <code class=\"tok\" dir=\"ltr\">(i+k)%n</code>.<br>סריקה אחת מוצאת את <code class=\"tok\" dir=\"ltr\">k</code> (אם <code class=\"tok\" dir=\"ltr\">a[0]</code> לא נמצא ב-<code class=\"tok\" dir=\"ltr\">b</code> מחזירים <code class=\"tok\" dir=\"ltr\">0</code>), וסריקה שנייה בודקת את כל המקומות. בדוגמה <code class=\"tok\" dir=\"ltr\">a[0]=5</code> נמצא ב-<code class=\"tok\" dir=\"ltr\">b[2]</code>, כלומר סיבוב ב-2.<br>שתי סריקות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>. (מערך <code class=\"tok\" dir=\"ltr\">b</code> זהה ל-<code class=\"tok\" dir=\"ltr\">a</code>, כלומר סיבוב ב-0 או ב-<code class=\"tok\" dir=\"ltr\">n</code> תאים, נחשב כאן סיבוב.)",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "לנסות את כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הסיבובים ולהשוות כל אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "לשכוח את <code class=\"tok\" dir=\"ltr\">% n</code>: <code class=\"tok\" dir=\"ltr\">i + k</code> יוצא מגבולות <code class=\"tok\" dir=\"ltr\">b</code>.",
    "לא לנצל שהערכים שונים: רק בגללו המקום של <code class=\"tok\" dir=\"ltr\">a[0]</code> יחיד וקובע את גודל הסיבוב."
   ]
  },
  {
   "num": 5,
   "kind": "code",
   "topic": "sorting_merge",
   "question": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\nנתון מערך $a$ של מספרים שלמים וגודלו $n$, כאשר ידוע כי החלק הראשון (השמאלי) של המערך ממוין בסדר עולה, וגם החלק השני (הימני) של המערך ממוין בסדר עולה. אין חפיפה בין החלקים, וביחד הם מהווים את המערך כולו.\nכתבו פונקציה **יעילה** שמקבלת את המערך $a$ וממיינת אותו.\nלדוגמא: עבור המערך `a = {1,1,4,8,-2,3}` (החלק הראשון מכיל את האיברים אשר נמצאו במקומות מ-0 עד 3, והחלק השני מכיל את האיברים שנמצאים במקומות 4,5) הפונקציה תסדר את המערך מחדש: `a = {-2,1,1,3,4,8}`.\nעל הפונקציה לרוץ בסדר גודל של $n$.\nניתן להשתמש במערך עזר.\n(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, `swap`, `partition`, `merge_arrays`.)",
   "points": 20,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nvoid sort_two_parts(int *a, int n)\n{\n   int i, j, k, mid = 1;\n   int *temp;\n   while (mid < n && a[mid - 1] <= a[mid])   // the second part starts at the first descent\n      mid++;\n   if (mid >= n)                             // no descent: already sorted\n      return;\n   temp = (int*)malloc(n * sizeof(int));\n   i = 0; j = mid; k = 0;\n   while (i < mid && j < n)                  // merge the two sorted parts\n   {\n      if (a[i] <= a[j])\n         temp[k++] = a[i++];\n      else\n         temp[k++] = a[j++];\n   }\n   while (i < mid)\n      temp[k++] = a[i++];\n   while (j < n)\n      temp[k++] = a[j++];\n   for (i = 0; i < n; i++)\n      a[i] = temp[i];\n   free(temp);\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `sort_two_parts` נבחר כאן.)\nקודם מוצאים את תחילת החלק השני: המקום הראשון `mid` שבו `a[mid-1] > a[mid]`. בתוך כל חלק אין ירידה, ולכן הירידה הראשונה היא בדיוק הגבול בין החלקים; אם אין ירידה בכלל, המערך כבר ממוין.\nאחר כך ממזגים את שני החלקים הממוינים למערך עזר, כמו שלב המיזוג במיון מיזוג, ומעתיקים חזרה.\nכל איבר נבדק ומועתק מספר קבוע של פעמים: $O(n)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "איתור תחילת החלק השני: המקום הראשון `mid` שבו `a[mid-1] > a[mid]`, ו-`return` כשאין ירידה",
     "points": 5,
     "html": "איתור תחילת החלק השני: המקום הראשון <code class=\"tok\" dir=\"ltr\">mid</code> שבו <code class=\"tok\" dir=\"ltr\">a[mid-1] &gt; a[mid]</code>, ו-<code class=\"tok\" dir=\"ltr\">return</code> כשאין ירידה"
    },
    {
     "text": "מיזוג שני החלקים הממוינים למערך עזר בעזרת שני מצביעים `i`, `j`",
     "points": 7,
     "html": "מיזוג שני החלקים הממוינים למערך עזר בעזרת שני מצביעים <code class=\"tok\" dir=\"ltr\">i</code>, <code class=\"tok\" dir=\"ltr\">j</code>"
    },
    {
     "text": "העתקת השארית של החלק שלא נגמר",
     "points": 3,
     "html": "העתקת השארית של החלק שלא נגמר"
    },
    {
     "text": "העתקה חזרה ל-`a` ושחרור מערך העזר",
     "points": 3,
     "html": "העתקה חזרה ל-<code class=\"tok\" dir=\"ltr\">a</code> ושחרור מערך העזר"
    },
    {
     "text": "זמן $O(n)$",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "למיין את כל המערך מחדש ($O(n\\log n)$) במקום לנצל את שני החלקים הממוינים.",
    "לשכוח להעתיק את שארית החלק שנותר אחרי שהאחר נגמר.",
    "לא להעתיק חזרה למערך `a`: הפונקציה אמורה למיין אותו במקום."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו `mid`, תחילת החלק השני, עבור `a = {1,1,4,8,-2,3}`?",
     "answer": 4,
     "tol": 0,
     "explain": "הירידה הראשונה היא `8 > -2` באינדקסים 3 ו-4, ולכן `mid = 4` (ריצה אמיתית: 4).",
     "promptHtml": "מהו <code class=\"tok\" dir=\"ltr\">mid</code>, תחילת החלק השני, עבור <code class=\"tok\" dir=\"ltr\">a = {1,1,4,8,-2,3}</code>?",
     "explainHtml": "הירידה הראשונה היא <code class=\"tok\" dir=\"ltr\">8 &gt; -2</code> באינדקסים 3 ו-4, ולכן <code class=\"tok\" dir=\"ltr\">mid = 4</code> (ריצה אמיתית: 4)."
    },
    {
     "type": "numeric",
     "prompt": "מהו `mid` עבור `a = {5,6,7,1,2}`?",
     "answer": 3,
     "tol": 0,
     "explain": "הירידה הראשונה היא `7 > 1`, ולכן `mid = 3` (ריצה אמיתית: 3).",
     "promptHtml": "מהו <code class=\"tok\" dir=\"ltr\">mid</code> עבור <code class=\"tok\" dir=\"ltr\">a = {5,6,7,1,2}</code>?",
     "explainHtml": "הירידה הראשונה היא <code class=\"tok\" dir=\"ltr\">7 &gt; 1</code>, ולכן <code class=\"tok\" dir=\"ltr\">mid = 3</code> (ריצה אמיתית: 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי המיזוג.",
     "code": true,
     "lines": [
      "void sort_two_parts(int *a, int n)",
      "{",
      "   int i, j, k, mid = 1, *temp;",
      "   while (mid < n && a[mid - 1] <= a[mid]) mid++;",
      "   if (mid >= n) return;",
      "   temp = (int*)malloc(n * sizeof(int));",
      "   i = 0; j = mid; k = 0;",
      "   while (i < mid && j < n)",
      "      if (___) temp[k++] = a[i++];",
      "      else temp[k++] = a[j++];",
      "   while (i < mid) temp[k++] = a[i++];",
      "   while (j < n) temp[k++] = a[j++];",
      "   for (i = 0; i < n; i++) a[i] = temp[i];",
      "   free(temp);",
      "}"
     ],
     "blankIndex": 8,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "a[i] <= a[j]",
       "html": "a[i] &lt;= a[j]"
      },
      {
       "id": "b",
       "type": "text",
       "value": "a[i] >= a[j]",
       "html": "a[i] &gt;= a[j]"
      },
      {
       "id": "c",
       "type": "text",
       "value": "a[i] == a[j]",
       "html": "a[i] == a[j]"
      },
      {
       "id": "d",
       "type": "text",
       "value": "a[i] > 0",
       "html": "a[i] &gt; 0"
      }
     ],
     "correctId": "a",
     "explain": "מעתיקים תחילה את האיבר הקטן מבין שני ראשי החלקים. האחרות מעתיקות בסדר הפוך או לפי תנאי שאינו קשור (ריצה אמיתית: כולן נכשלות על מערכים אקראיים).",
     "promptHtml": "השלימו את תנאי המיזוג.",
     "explainHtml": "מעתיקים תחילה את האיבר הקטן מבין שני ראשי החלקים. האחרות מעתיקות בסדר הפוך או לפי תנאי שאינו קשור (ריצה אמיתית: כולן נכשלות על מערכים אקראיים).",
     "linesHtml": [
      "void sort_two_parts(int *a, int n)",
      "{",
      "   int i, j, k, mid = 1, *temp;",
      "   while (mid &lt; n &amp;&amp; a[mid - 1] &lt;= a[mid]) mid++;",
      "   if (mid &gt;= n) return;",
      "   temp = (int*)malloc(n * sizeof(int));",
      "   i = 0; j = mid; k = 0;",
      "   while (i &lt; mid &amp;&amp; j &lt; n)",
      "      if (___) temp[k++] = a[i++];",
      "      else temp[k++] = a[j++];",
      "   while (i &lt; mid) temp[k++] = a[i++];",
      "   while (j &lt; n) temp[k++] = a[j++];",
      "   for (i = 0; i &lt; n; i++) a[i] = temp[i];",
      "   free(temp);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `sort_two_parts`.",
     "code": true,
     "lines": [
      "void sort_two_parts(int *a, int n)",
      "{",
      "   int i, j, k, mid = 1, *temp;",
      "   while (mid < n && a[mid - 1] <= a[mid]) mid++;",
      "   if (mid >= n) return; temp = (int*)malloc(n * sizeof(int)); i = 0; j = mid; k = 0;",
      "   while (i < mid && j < n) { if (a[i] <= a[j]) temp[k++] = a[i++]; else temp[k++] = a[j++]; }",
      "   while (i < mid) temp[k++] = a[i++]; while (j < n) temp[k++] = a[j++];",
      "   for (i = 0; i < n; i++) a[i] = temp[i]; free(temp);",
      "}"
     ],
     "explain": "הגדרות, איתור `mid`, הכנת מערך העזר, מיזוג, שארית, והעתקה חזרה עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">sort_two_parts</code>.",
     "explainHtml": "הגדרות, איתור <code class=\"tok\" dir=\"ltr\">mid</code>, הכנת מערך העזר, מיזוג, שארית, והעתקה חזרה עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "void sort_two_parts(int *a, int n)",
      "{",
      "   int i, j, k, mid = 1, *temp;",
      "   while (mid &lt; n &amp;&amp; a[mid - 1] &lt;= a[mid]) mid++;",
      "   if (mid &gt;= n) return; temp = (int*)malloc(n * sizeof(int)); i = 0; j = mid; k = 0;",
      "   while (i &lt; mid &amp;&amp; j &lt; n) { if (a[i] &lt;= a[j]) temp[k++] = a[i++]; else temp[k++] = a[j++]; }",
      "   while (i &lt; mid) temp[k++] = a[i++]; while (j &lt; n) temp[k++] = a[j++];",
      "   for (i = 0; i &lt; n; i++) a[i] = temp[i]; free(temp);",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "כל איבר נבדק ומועתק מספר קבוע של פעמים: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "כל איבר נבדק ומועתק מספר קבוע של פעמים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q5",
   "partKey": "",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מיון ומיזוג",
   "questionHtml": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)<br>נתון מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> של מספרים שלמים וגודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, כאשר ידוע כי החלק הראשון (השמאלי) של המערך ממוין בסדר עולה, וגם החלק השני (הימני) של המערך ממוין בסדר עולה. אין חפיפה בין החלקים, וביחד הם מהווים את המערך כולו.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת את המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> וממיינת אותו.<br>לדוגמא: עבור המערך <code class=\"tok\" dir=\"ltr\">a = {1,1,4,8,-2,3}</code> (החלק הראשון מכיל את האיברים אשר נמצאו במקומות מ-0 עד 3, והחלק השני מכיל את האיברים שנמצאים במקומות 4,5) הפונקציה תסדר את המערך מחדש: <code class=\"tok\" dir=\"ltr\">a = {-2,1,1,3,4,8}</code>.<br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.<br>ניתן להשתמש במערך עזר.<br>(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: <code class=\"tok\" dir=\"ltr\">merge_sort</code>, <code class=\"tok\" dir=\"ltr\">quick_sort</code>, <code class=\"tok\" dir=\"ltr\">binary_search</code>, <code class=\"tok\" dir=\"ltr\">swap</code>, <code class=\"tok\" dir=\"ltr\">partition</code>, <code class=\"tok\" dir=\"ltr\">merge_arrays</code>.)",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void sort_two_parts(int *a, int n)\n{\n   int i, j, k, mid = 1;\n   int *temp;\n   while (mid &lt; n &amp;&amp; a[mid - 1] &lt;= a[mid])   // the second part starts at the first descent\n      mid++;\n   if (mid &gt;= n)                             // no descent: already sorted\n      return;\n   temp = (int*)malloc(n * sizeof(int));\n   i = 0; j = mid; k = 0;\n   while (i &lt; mid &amp;&amp; j &lt; n)                  // merge the two sorted parts\n   {\n      if (a[i] &lt;= a[j])\n         temp[k++] = a[i++];\n      else\n         temp[k++] = a[j++];\n   }\n   while (i &lt; mid)\n      temp[k++] = a[i++];\n   while (j &lt; n)\n      temp[k++] = a[j++];\n   for (i = 0; i &lt; n; i++)\n      a[i] = temp[i];\n   free(temp);\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">sort_two_parts</code> נבחר כאן.)<br>קודם מוצאים את תחילת החלק השני: המקום הראשון <code class=\"tok\" dir=\"ltr\">mid</code> שבו <code class=\"tok\" dir=\"ltr\">a[mid-1] &gt; a[mid]</code>. בתוך כל חלק אין ירידה, ולכן הירידה הראשונה היא בדיוק הגבול בין החלקים; אם אין ירידה בכלל, המערך כבר ממוין.<br>אחר כך ממזגים את שני החלקים הממוינים למערך עזר, כמו שלב המיזוג במיון מיזוג, ומעתיקים חזרה.<br>כל איבר נבדק ומועתק מספר קבוע של פעמים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "למיין את כל המערך מחדש (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>) במקום לנצל את שני החלקים הממוינים.",
    "לשכוח להעתיק את שארית החלק שנותר אחרי שהאחר נגמר.",
    "לא להעתיק חזרה למערך <code class=\"tok\" dir=\"ltr\">a</code>: הפונקציה אמורה למיין אותו במקום."
   ]
  },
  {
   "num": 6,
   "kind": "code",
   "topic": "matrices",
   "question": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)\nנאמר ששני איברים שונים במטריצה בעלי אינדקסים $(i,j)$ ו-$(k,m)$ הינם **שכנים** אם $|i-k|\\le 1$ וגם $|j-m|\\le 1$.\nמכאן שלכל איבר במטריצה יש לכל היותר שמונה שכנים: שניים באותה השורה, שניים באותה העמודה וארבעה באלכסונים.\nכתבו פונקציה **יעילה** שמקבלת מטריצה ריבועית $A$ בגודל $N\\times N$ של מספרים שלמים.\nהפונקציה צריכה להחזיר `1` אם כל שני איברים שכנים במטריצה $A$ הינם שונים זה מזה, ואפס אחרת.\nלדוגמא:\n```\n11 10 11\n17 -5 13\n10 11 10\n```\nהפונקציה תחזיר `1`. (לשם אילוסטרציה, השכנים של `-5` במטריצה הראשונה סומנו בקו תחתון.)\n```\n11 33 11\n33 15 13\n10 11 10\n```\nהפונקציה תחזיר `0`.\n(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: `merge_sort`, `quick_sort`, `binary_search`, `swap`, `partition`, `merge_arrays`.)",
   "points": 20,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint neighbors_differ(int A[N][N])\n{\n   int i, j;\n   for (i = 0; i < N; i++)\n      for (j = 0; j < N; j++)\n      {\n         if (j + 1 < N && A[i][j] == A[i][j + 1])                  // right\n            return 0;\n         if (i + 1 < N && A[i][j] == A[i + 1][j])                  // down\n            return 0;\n         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j + 1]) // down-right\n            return 0;\n         if (i + 1 < N && j > 0 && A[i][j] == A[i + 1][j - 1])     // down-left\n            return 0;\n      }\n   return 1;\n}\n```\n(השאלה לא נותנת שם לפונקציה; השם `neighbors_differ` נבחר כאן.)\n`N` מוגדר ב-`#define`. כל זוג שכנים נבדק פעם אחת: כל תא מושווה רק לשכן מימין, מלמטה, מלמטה-ימינה ומלמטה-שמאלה. השכנים שמעליו ומשמאלו כבר הושוו אליו כשעברנו עליהם.\nהתנאים `i+1<N`, `j+1<N` ו-`j>0` מונעים יציאה מגבולות המטריצה.\nלכל היותר ארבע השוואות לכל תא: $O(N^2)$, וזה אופטימלי כי צריך לקרוא כל תא.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מעבר על כל תא ובדיקה מול השכן מימין",
     "points": 4,
     "html": "מעבר על כל תא ובדיקה מול השכן מימין"
    },
    {
     "text": "בדיקה מול השכן מלמטה",
     "points": 4,
     "html": "בדיקה מול השכן מלמטה"
    },
    {
     "text": "בדיקה מול שני השכנים באלכסונים למטה: ימינה ושמאלה",
     "points": 6,
     "html": "בדיקה מול שני השכנים באלכסונים למטה: ימינה ושמאלה"
    },
    {
     "text": "הגנה על הגבולות (`j + 1 < N`, `i + 1 < N`, `j > 0`)",
     "points": 3,
     "html": "הגנה על הגבולות (<code class=\"tok\" dir=\"ltr\">j + 1 &lt; N</code>, <code class=\"tok\" dir=\"ltr\">i + 1 &lt; N</code>, <code class=\"tok\" dir=\"ltr\">j &gt; 0</code>)"
    },
    {
     "text": "החזרת `0` בשכנים שווים ו-`1` בסוף",
     "points": 1,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> בשכנים שווים ו-<code class=\"tok\" dir=\"ltr\">1</code> בסוף"
    },
    {
     "text": "זמן $O(N^2)$",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק שכנים באותה שורה ובאותה עמודה ולשכוח את האלכסונים.",
    "לא להגן על הגבולות: `A[i+1][j-1]` בלי `i+1<N` ו-`j>0` יוצא מהמטריצה.",
    "להשוות כל תא לתא הבא אחריו ברצף בלבד (`A[i][j]` מול `A[i][j+1]`) ולהסיק שאין שכנים שווים, בלי לבדוק את השורה שמתחת."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `neighbors_differ` עבור המטריצה הבאה?\n```\n1 2 1\n3 4 3\n1 2 1\n```",
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
      }
     ],
     "correctId": "a",
     "explain": "הערכים השווים (1 בפינות, 3 בצדדים ו-2 למעלה ולמטה) רחוקים זה מזה בשתי שורות או עמודות, ולכן אינם שכנים: מחזירים 1 (ריצה אמיתית: 1).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">neighbors_differ</code> עבור המטריצה הבאה?<pre class=\"code-block\" dir=\"ltr\"><code>1 2 1\n3 4 3\n1 2 1</code></pre>",
     "explainHtml": "הערכים השווים (1 בפינות, 3 בצדדים ו-2 למעלה ולמטה) רחוקים זה מזה בשתי שורות או עמודות, ולכן אינם שכנים: מחזירים 1 (ריצה אמיתית: 1)."
    },
    {
     "type": "numeric",
     "prompt": "במטריצה $3\\times 3$ שכל ערכיה שונים: כמה השוואות בין תאים מתבצעות בסך הכול?",
     "answer": 20,
     "tol": 0,
     "explain": "זוגות שכנים: 6 אופקיים, 6 אנכיים, 4 באלכסון ימינה-למטה ו-4 באלכסון שמאלה-למטה, כלומר 20 (ריצה אמיתית: 20).",
     "promptHtml": "במטריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> שכל ערכיה שונים: כמה השוואות בין תאים מתבצעות בסך הכול?",
     "explainHtml": "זוגות שכנים: 6 אופקיים, 6 אנכיים, 4 באלכסון ימינה-למטה ו-4 באלכסון שמאלה-למטה, כלומר 20 (ריצה אמיתית: 20)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הגנת הגבול בבדיקת השכן שלמטה-שמאלה.",
     "code": true,
     "lines": [
      "int neighbors_differ(int A[N][N])",
      "{",
      "   int i, j;",
      "   for (i = 0; i < N; i++)",
      "      for (j = 0; j < N; j++)",
      "      {",
      "         if (j + 1 < N && A[i][j] == A[i][j + 1])",
      "            return 0;",
      "         if (i + 1 < N && A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j + 1])",
      "            return 0;",
      "         if (i + 1 < N && ___ && A[i][j] == A[i + 1][j - 1])",
      "            return 0;",
      "      }",
      "   return 1;",
      "}"
     ],
     "blankIndex": 12,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "j > 0",
       "html": "j &gt; 0"
      },
      {
       "id": "b",
       "type": "text",
       "value": "j > 1",
       "html": "j &gt; 1"
      },
      {
       "id": "c",
       "type": "text",
       "value": "j + 1 < N",
       "html": "j + 1 &lt; N"
      },
      {
       "id": "d",
       "type": "text",
       "value": "j > 2",
       "html": "j &gt; 2"
      }
     ],
     "correctId": "a",
     "explain": "השכן שמאלה-למטה קיים רק כאשר `j > 0`. האחרות מדלגות על עמודות (ריצה אמיתית: הן נכשלות על מטריצות אקראיות).",
     "promptHtml": "השלימו את הגנת הגבול בבדיקת השכן שלמטה-שמאלה.",
     "explainHtml": "השכן שמאלה-למטה קיים רק כאשר <code class=\"tok\" dir=\"ltr\">j &gt; 0</code>. האחרות מדלגות על עמודות (ריצה אמיתית: הן נכשלות על מטריצות אקראיות).",
     "linesHtml": [
      "int neighbors_differ(int A[N][N])",
      "{",
      "   int i, j;",
      "   for (i = 0; i &lt; N; i++)",
      "      for (j = 0; j &lt; N; j++)",
      "      {",
      "         if (j + 1 &lt; N &amp;&amp; A[i][j] == A[i][j + 1])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; j + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j + 1])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; ___ &amp;&amp; A[i][j] == A[i + 1][j - 1])",
      "            return 0;",
      "      }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה מפספסת שכנים. מצאו אותה.",
     "code": true,
     "lines": [
      "int neighbors_differ(int A[N][N])",
      "{",
      "   int i, j;",
      "   for (i = 0; i < N; i++)",
      "      for (j = 0; j < N; j++)",
      "      {",
      "         if (j + 1 < N && A[i][j] == A[i][j + 1])",
      "            return 0;",
      "         if (i + 1 < N && A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 < N && j > 0 && A[i][j] == A[i + 1][j - 1])",
      "            return 0;",
      "      }",
      "   return 1;",
      "}"
     ],
     "bugIndex": 10,
     "explain": "השורה בודקת את השכן מלמטה פעמיים ולא את האלכסון ימינה-למטה, ולכן במטריצה `{{1,2,3},{4,1,5},{6,7,8}}` (שני 1 באלכסון) מתקבל 1 במקום 0 (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה מפספסת שכנים. מצאו אותה.",
     "explainHtml": "השורה בודקת את השכן מלמטה פעמיים ולא את האלכסון ימינה-למטה, ולכן במטריצה <code class=\"tok\" dir=\"ltr\">{{1,2,3},{4,1,5},{6,7,8}}</code> (שני 1 באלכסון) מתקבל 1 במקום 0 (ריצה אמיתית).",
     "linesHtml": [
      "int neighbors_differ(int A[N][N])",
      "{",
      "   int i, j;",
      "   for (i = 0; i &lt; N; i++)",
      "      for (j = 0; j &lt; N; j++)",
      "      {",
      "         if (j + 1 &lt; N &amp;&amp; A[i][j] == A[i][j + 1])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; j + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j])",
      "            return 0;",
      "         if (i + 1 &lt; N &amp;&amp; j &gt; 0 &amp;&amp; A[i][j] == A[i + 1][j - 1])",
      "            return 0;",
      "      }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)",
     "accept": [
      "O(N²)",
      "O(N^2)"
     ],
     "normalize": "complexity",
     "explain": "מבקרים בכל אחד מ-$N^2$ התאים ובודקים לכל היותר ארבעה שכנים: $O(N^2)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה כתלות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span>? (למשל <code class=\"tok\" dir=\"ltr\">O(N)</code>)",
     "explainHtml": "מבקרים בכל אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> התאים ובודקים לכל היותר ארבעה שכנים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "19A-B-Q6",
   "partKey": "",
   "examCode": "19A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשע\"ט, מועד ב (18.3.19)",
   "year": 2019,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "(חלק 2: יש לענות רק על שאלה אחת, 5 או 6.)<br>נאמר ששני איברים שונים במטריצה בעלי אינדקסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>i</mi><mo separator=\"true\">,</mo><mi>j</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(i,j)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>k</mi><mo separator=\"true\">,</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(k,m)</annotation></semantics></math></span> הינם <strong>שכנים</strong> אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>i</mi><mo>−</mo><mi>k</mi><mi mathvariant=\"normal\">∣</mi><mo>≤</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|i-k|\\le 1</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>j</mi><mo>−</mo><mi>m</mi><mi mathvariant=\"normal\">∣</mi><mo>≤</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">|j-m|\\le 1</annotation></semantics></math></span>.<br>מכאן שלכל איבר במטריצה יש לכל היותר שמונה שכנים: שניים באותה השורה, שניים באותה העמודה וארבעה באלכסונים.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת מטריצה ריבועית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>×</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N\\times N</annotation></semantics></math></span> של מספרים שלמים.<br>הפונקציה צריכה להחזיר <code class=\"tok\" dir=\"ltr\">1</code> אם כל שני איברים שכנים במטריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הינם שונים זה מזה, ואפס אחרת.<br>לדוגמא:<pre class=\"code-block\" dir=\"ltr\"><code>11 10 11\n17 -5 13\n10 11 10</code></pre>הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>. (לשם אילוסטרציה, השכנים של <code class=\"tok\" dir=\"ltr\">-5</code> במטריצה הראשונה סומנו בקו תחתון.)<pre class=\"code-block\" dir=\"ltr\"><code>11 33 11\n33 15 13\n10 11 10</code></pre>הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>.<br>(במבחן אפשר להיעזר בפונקציות הבאות כקופסה שחורה: <code class=\"tok\" dir=\"ltr\">merge_sort</code>, <code class=\"tok\" dir=\"ltr\">quick_sort</code>, <code class=\"tok\" dir=\"ltr\">binary_search</code>, <code class=\"tok\" dir=\"ltr\">swap</code>, <code class=\"tok\" dir=\"ltr\">partition</code>, <code class=\"tok\" dir=\"ltr\">merge_arrays</code>.)",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int neighbors_differ(int A[N][N])\n{\n   int i, j;\n   for (i = 0; i &lt; N; i++)\n      for (j = 0; j &lt; N; j++)\n      {\n         if (j + 1 &lt; N &amp;&amp; A[i][j] == A[i][j + 1])                  // right\n            return 0;\n         if (i + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j])                  // down\n            return 0;\n         if (i + 1 &lt; N &amp;&amp; j + 1 &lt; N &amp;&amp; A[i][j] == A[i + 1][j + 1]) // down-right\n            return 0;\n         if (i + 1 &lt; N &amp;&amp; j &gt; 0 &amp;&amp; A[i][j] == A[i + 1][j - 1])     // down-left\n            return 0;\n      }\n   return 1;\n}</code></pre>(השאלה לא נותנת שם לפונקציה; השם <code class=\"tok\" dir=\"ltr\">neighbors_differ</code> נבחר כאן.)<br><code class=\"tok\" dir=\"ltr\">N</code> מוגדר ב-<code class=\"tok\" dir=\"ltr\">#define</code>. כל זוג שכנים נבדק פעם אחת: כל תא מושווה רק לשכן מימין, מלמטה, מלמטה-ימינה ומלמטה-שמאלה. השכנים שמעליו ומשמאלו כבר הושוו אליו כשעברנו עליהם.<br>התנאים <code class=\"tok\" dir=\"ltr\">i+1&lt;N</code>, <code class=\"tok\" dir=\"ltr\">j+1&lt;N</code> ו-<code class=\"tok\" dir=\"ltr\">j&gt;0</code> מונעים יציאה מגבולות המטריצה.<br>לכל היותר ארבע השוואות לכל תא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>, וזה אופטימלי כי צריך לקרוא כל תא.",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "לבדוק רק שכנים באותה שורה ובאותה עמודה ולשכוח את האלכסונים.",
    "לא להגן על הגבולות: <code class=\"tok\" dir=\"ltr\">A[i+1][j-1]</code> בלי <code class=\"tok\" dir=\"ltr\">i+1&lt;N</code> ו-<code class=\"tok\" dir=\"ltr\">j&gt;0</code> יוצא מהמטריצה.",
    "להשוות כל תא לתא הבא אחריו ברצף בלבד (<code class=\"tok\" dir=\"ltr\">A[i][j]</code> מול <code class=\"tok\" dir=\"ltr\">A[i][j+1]</code>) ולהסיק שאין שכנים שווים, בלי לבדוק את השורה שמתחת."
   ]
  },
  {
   "num": 1,
   "part": "א",
   "kind": "computation",
   "topic": "recursion",
   "question": "מה תחזיר הפונקציה עבור המערך `a = {-3, 6, 7, -2, 12}` ו-`n = 5`?",
   "solution": "**פתרון רשמי** (20A-A עמ' 2): `4.0`.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c1",
   "rubric": [
    {
     "text": "הצבה נכונה בנוסחת הנסיגה `a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n` ופירוק עד מקרה הבסיס `n == 1`",
     "points": 2,
     "html": "הצבה נכונה בנוסחת הנסיגה <code class=\"tok\" dir=\"ltr\">a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n</code> ופירוק עד מקרה הבסיס <code class=\"tok\" dir=\"ltr\">n == 1</code>"
    },
    {
     "text": "חישוב הערכים הביניים לפי הסדר: מקרה הבסיס, אחר כך הרמות העוקבות",
     "points": 1,
     "html": "חישוב הערכים הביניים לפי הסדר: מקרה הבסיס, אחר כך הרמות העוקבות"
    },
    {
     "text": "תוצאה סופית `4.0`",
     "points": 1,
     "html": "תוצאה סופית <code class=\"tok\" dir=\"ltr\">4.0</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח את הגורם `(n-1)/n` בקריאה הרקורסיבית ולחבר פשוט את `a[n-1] / n`.",
    "חילוק שלם: כל המשתנים כאן `double`, ולכן `a[n-1] / n` אינו מעוגל."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec(a, 2)` עבור `a = {-3, 6, 7, -2, 12}`?",
     "answer": 1.5,
     "tol": 0,
     "explain": "$\\frac{6}{2}+(-3)\\cdot\\frac{1}{2}=1.5$ (ריצה אמיתית: 1.5).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 2)</code> עבור <code class=\"tok\" dir=\"ltr\">a = {-3, 6, 7, -2, 12}</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>6</mn><mn>2</mn></mfrac><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>3</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mn>1.5</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{6}{2}+(-3)\\cdot\\frac{1}{2}=1.5</annotation></semantics></math></span> (ריצה אמיתית: 1.5)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec(a, 3)`? (עגלו לשתי ספרות אחרי הנקודה)",
     "answer": 3.33,
     "tol": 0.01,
     "explain": "$\\frac{7}{3}+1.5\\cdot\\frac{2}{3}=\\frac{10}{3}$ (ריצה אמיתית: 3.333333).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 3)</code>? (עגלו לשתי ספרות אחרי הנקודה)",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>7</mn><mn>3</mn></mfrac><mo>+</mo><mn>1.5</mn><mo>⋅</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>10</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{7}{3}+1.5\\cdot\\frac{2}{3}=\\frac{10}{3}</annotation></semantics></math></span> (ריצה אמיתית: 3.333333)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec(a, 4)`?",
     "answer": 2,
     "tol": 0,
     "explain": "$\\frac{-2}{4}+\\frac{10}{3}\\cdot\\frac{3}{4}=-0.5+2.5=2$ (ריצה אמיתית: 2.0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 4)</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mo>−</mo><mn>2</mn></mrow><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>10</mn><mn>3</mn></mfrac><mo>⋅</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo><mo>−</mo><mn>0.5</mn><mo>+</mo><mn>2.5</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{-2}{4}+\\frac{10}{3}\\cdot\\frac{3}{4}=-0.5+2.5=2</annotation></semantics></math></span> (ריצה אמיתית: 2.0)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec(a, 5)`, כלומר התשובה לסעיף?",
     "answer": 4,
     "tol": 0,
     "explain": "$\\frac{12}{5}+2\\cdot\\frac{4}{5}=2.4+1.6=4$ (ריצה אמיתית: 4.0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 5)</code>, כלומר התשובה לסעיף?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>12</mn><mn>5</mn></mfrac><mo>+</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mo>=</mo><mn>2.4</mn><mo>+</mo><mn>1.6</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{12}{5}+2\\cdot\\frac{4}{5}=2.4+1.6=4</annotation></semantics></math></span> (ריצה אמיתית: 4.0)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q1a",
   "partKey": "a",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "מה תחזיר הפונקציה עבור המערך <code class=\"tok\" dir=\"ltr\">a = {-3, 6, 7, -2, 12}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 5</code>?",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 2): <code class=\"tok\" dir=\"ltr\">4.0</code>.",
   "pointsTotal": 4,
   "pitfallsHtml": [
    "לשכוח את הגורם <code class=\"tok\" dir=\"ltr\">(n-1)/n</code> בקריאה הרקורסיבית ולחבר פשוט את <code class=\"tok\" dir=\"ltr\">a[n-1] / n</code>.",
    "חילוק שלם: כל המשתנים כאן <code class=\"tok\" dir=\"ltr\">double</code>, ולכן <code class=\"tok\" dir=\"ltr\">a[n-1] / n</code> אינו מעוגל."
   ]
  },
  {
   "num": 1,
   "part": "ב",
   "kind": "computation",
   "topic": "recursion",
   "question": "מה תחזיר הפונקציה עבור אותו מערך ו-`n = 4`?",
   "solution": "**פתרון רשמי** (20A-A עמ' 2): `2.0`.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c1",
   "rubric": [
    {
     "text": "פירוק הקריאה `n = 4` לאיבר `a[3] / 4` ולקריאה `fun_rec(a, 3)` שמוכפלת ב-`3/4`",
     "points": 2,
     "html": "פירוק הקריאה <code class=\"tok\" dir=\"ltr\">n = 4</code> לאיבר <code class=\"tok\" dir=\"ltr\">a[3] / 4</code> ולקריאה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 3)</code> שמוכפלת ב-<code class=\"tok\" dir=\"ltr\">3/4</code>"
    },
    {
     "text": "חישוב `fun_rec(a, 3)` כממוצע שלושת האיברים הראשונים",
     "points": 1,
     "html": "חישוב <code class=\"tok\" dir=\"ltr\">fun_rec(a, 3)</code> כממוצע שלושת האיברים הראשונים"
    },
    {
     "text": "תוצאה סופית `2.0`",
     "points": 1,
     "html": "תוצאה סופית <code class=\"tok\" dir=\"ltr\">2.0</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש ב-`n = 5` או במערך המלא במקום באיבר ה-4 הראשונים בלבד.",
    "להפעיל את `fun_rec(a, 3)` בלי להכפיל ב-`(n-1)/n = 3/4`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהו הביטוי `a[n-1] / n` כש-`n = 4`?",
     "answer": -0.5,
     "tol": 0,
     "explain": "`a[3] = -2`, ו-$\\frac{-2}{4}=-0.5$ (ריצה אמיתית: -0.5).",
     "promptHtml": "מהו הביטוי <code class=\"tok\" dir=\"ltr\">a[n-1] / n</code> כש-<code class=\"tok\" dir=\"ltr\">n = 4</code>?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">a[3] = -2</code>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mo>−</mo><mn>2</mn></mrow><mn>4</mn></mfrac><mo>=</mo><mo>−</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{-2}{4}=-0.5</annotation></semantics></math></span> (ריצה אמיתית: -0.5)."
    },
    {
     "type": "numeric",
     "prompt": "מהו `fun_rec(a, 3)*3/4`? (עגלו לשתי ספרות אחרי הנקודה)",
     "answer": 2.5,
     "tol": 0.01,
     "explain": "$\\frac{10}{3}\\cdot\\frac{3}{4}=2.5$ (ריצה אמיתית: 2.5).",
     "promptHtml": "מהו <code class=\"tok\" dir=\"ltr\">fun_rec(a, 3)*3/4</code>? (עגלו לשתי ספרות אחרי הנקודה)",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>10</mn><mn>3</mn></mfrac><mo>⋅</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>=</mo><mn>2.5</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{10}{3}\\cdot\\frac{3}{4}=2.5</annotation></semantics></math></span> (ריצה אמיתית: 2.5)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec(a, 4)`?",
     "answer": 2,
     "tol": 0,
     "explain": "$-0.5+2.5=2$ (ריצה אמיתית: 2.0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec(a, 4)</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>0.5</mn><mo>+</mo><mn>2.5</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">-0.5+2.5=2</annotation></semantics></math></span> (ריצה אמיתית: 2.0)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q1b",
   "partKey": "b",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "מה תחזיר הפונקציה עבור אותו מערך ו-<code class=\"tok\" dir=\"ltr\">n = 4</code>?",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 2): <code class=\"tok\" dir=\"ltr\">2.0</code>.",
   "pointsTotal": 4,
   "pitfallsHtml": [
    "להשתמש ב-<code class=\"tok\" dir=\"ltr\">n = 5</code> או במערך המלא במקום באיבר ה-4 הראשונים בלבד.",
    "להפעיל את <code class=\"tok\" dir=\"ltr\">fun_rec(a, 3)</code> בלי להכפיל ב-<code class=\"tok\" dir=\"ltr\">(n-1)/n = 3/4</code>."
   ]
  },
  {
   "num": 1,
   "part": "ג",
   "kind": "computation",
   "topic": "recursion",
   "question": "מה מחשבת הפונקציה `fun_rec` עבור מערך של מספרים ממשיים שאורכו $n$? תנו הגדרה כללית ונמקו את תשובתכם.",
   "solution": "**פתרון רשמי** (20A-A עמ' 2): הפונקציה מחשבת **ממוצע** של $n$ איברים במערך `a`.\n**נימוק:** על פי נוסחת נסיגה, מחלקים את האיבר הנוכחי בגודל המערך ומוסיפים את ממוצע שאר האיברים עד האיבר הנוכחי.\nבהנחה שהפונקציה `fun_rec(a, n-1)` מחזירה ממוצע של $n-1$ האיברים הראשונים נקבל:\n$$\\text{fun\\_rec}(a,n)=\\frac{a[n-1]}{n}+\\frac{a[0]+\\cdots+a[n-2]}{n-1}\\cdot\\frac{n-1}{n}=\\frac{a[0]+a[1]+\\cdots+a[n-2]+a[n-1]}{n}$$",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c1",
   "rubric": [
    {
     "text": "זיהוי שהפונקציה מחשבת את הממוצע של $n$ האיברים הראשונים",
     "points": 3,
     "html": "זיהוי שהפונקציה מחשבת את הממוצע של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים הראשונים"
    },
    {
     "text": "הנחת האינדוקציה: `fun_rec(a, n-1)` היא ממוצע $n-1$ האיברים הראשונים",
     "points": 2,
     "html": "הנחת האינדוקציה: <code class=\"tok\" dir=\"ltr\">fun_rec(a, n-1)</code> היא ממוצע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים"
    },
    {
     "text": "הכפלה ב-$\\frac{n-1}{n}$ הופכת את הממוצע לסכום חלקי $n$, ולכן יחד עם $\\frac{a[n-1]}{n}$ מתקבל הסכום חלקי $n$",
     "points": 2,
     "html": "הכפלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n-1}{n}</annotation></semantics></math></span> הופכת את הממוצע לסכום חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ולכן יחד עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><mi>n</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{a[n-1]}{n}</annotation></semantics></math></span> מתקבל הסכום חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לענות \"סכום\" או \"המקסימום\" רק מתוך הדוגמה, בלי להוכיח לכל $n$.",
    "לא לנמק מדוע הגורם $\\frac{n-1}{n}$ נדרש: הוא הופך ממוצע של $n-1$ איברים לסכומם חלקי $n$."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחשבת `fun_rec(a, n)` עבור מערך של מספרים ממשיים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "ממוצע $n$ האיברים הראשונים",
       "html": "ממוצע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים הראשונים"
      },
      {
       "id": "b",
       "type": "text",
       "value": "סכום $n$ האיברים הראשונים",
       "html": "סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים הראשונים"
      },
      {
       "id": "c",
       "type": "text",
       "value": "האיבר האחרון חלקי $n$",
       "html": "האיבר האחרון חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "המקסימום מבין $n$ האיברים הראשונים",
       "html": "המקסימום מבין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים הראשונים"
      }
     ],
     "correctId": "a",
     "explain": "על `{2, 4, 6, 8}` ו-`n = 4` מתקבל 5, הממוצע (ריצה אמיתית: 5.0), וכך גם על 10000 מערכים אקראיים.",
     "promptHtml": "מה מחשבת <code class=\"tok\" dir=\"ltr\">fun_rec(a, n)</code> עבור מערך של מספרים ממשיים?",
     "explainHtml": "על <code class=\"tok\" dir=\"ltr\">{2, 4, 6, 8}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 4</code> מתקבל 5, הממוצע (ריצה אמיתית: 5.0), וכך גם על 10000 מערכים אקראיים."
    },
    {
     "type": "choice",
     "prompt": "אם `fun_rec(a, n-1)` הוא ממוצע $n-1$ האיברים הראשונים, מה שווה `fun_rec(a, n-1)*(n-1)/n`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "סכום $n-1$ האיברים הראשונים חלקי $n$",
       "html": "סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "סכום $n-1$ האיברים הראשונים חלקי $n-1$",
       "html": "סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "סכום $n$ האיברים חלקי $n-1$",
       "html": "סכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> האיברים חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "הממוצע של $n-1$ האיברים הראשונים",
       "html": "הממוצע של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים"
      }
     ],
     "correctId": "a",
     "explain": "ממוצע כפול $(n-1)$ נותן את הסכום, וחילוק ב-$n$ משאיר סכום חלקי $n$.",
     "promptHtml": "אם <code class=\"tok\" dir=\"ltr\">fun_rec(a, n-1)</code> הוא ממוצע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים, מה שווה <code class=\"tok\" dir=\"ltr\">fun_rec(a, n-1)*(n-1)/n</code>?",
     "explainHtml": "ממוצע כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(n-1)</annotation></semantics></math></span> נותן את הסכום, וחילוק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> משאיר סכום חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `fun_rec` על `{2, 4, 6, 8}` עם `n = 4`?",
     "answer": 5,
     "tol": 0,
     "explain": "הממוצע של 2, 4, 6, 8 הוא 5 (ריצה אמיתית: 5.0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">fun_rec</code> על <code class=\"tok\" dir=\"ltr\">{2, 4, 6, 8}</code> עם <code class=\"tok\" dir=\"ltr\">n = 4</code>?",
     "explainHtml": "הממוצע של 2, 4, 6, 8 הוא 5 (ריצה אמיתית: 5.0)."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q1c",
   "partKey": "c",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "מה מחשבת הפונקציה <code class=\"tok\" dir=\"ltr\">fun_rec</code> עבור מערך של מספרים ממשיים שאורכו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>? תנו הגדרה כללית ונמקו את תשובתכם.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 2): הפונקציה מחשבת <strong>ממוצע</strong> של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> איברים במערך <code class=\"tok\" dir=\"ltr\">a</code>.<br><strong>נימוק:</strong> על פי נוסחת נסיגה, מחלקים את האיבר הנוכחי בגודל המערך ומוסיפים את ממוצע שאר האיברים עד האיבר הנוכחי.<br>בהנחה שהפונקציה <code class=\"tok\" dir=\"ltr\">fun_rec(a, n-1)</code> מחזירה ממוצע של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> האיברים הראשונים נקבל:<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mtext>fun_rec</mtext><mo stretchy=\"false\">(</mo><mi>a</mi><mo separator=\"true\">,</mo><mi>n</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mfrac><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><mi>n</mi></mfrac><mo>+</mo><mfrac><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo><mo>+</mo><mo>⋯</mo><mo>+</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">]</mo></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>=</mo><mfrac><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mn>0</mn><mo stretchy=\"false\">]</mo><mo>+</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mn>1</mn><mo stretchy=\"false\">]</mo><mo>+</mo><mo>⋯</mo><mo>+</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">]</mo><mo>+</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">]</mo></mrow><mi>n</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\text{fun\\_rec}(a,n)=\\frac{a[n-1]}{n}+\\frac{a[0]+\\cdots+a[n-2]}{n-1}\\cdot\\frac{n-1}{n}=\\frac{a[0]+a[1]+\\cdots+a[n-2]+a[n-1]}{n}</annotation></semantics></math></span>",
   "pointsTotal": 7,
   "pitfallsHtml": [
    "לענות \"סכום\" או \"המקסימום\" רק מתוך הדוגמה, בלי להוכיח לכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>.",
    "לא לנמק מדוע הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{n-1}{n}</annotation></semantics></math></span> נדרש: הוא הופך ממוצע של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n-1</annotation></semantics></math></span> איברים לסכומם חלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "recursion",
   "question": "נגדיר גימטרייה לאותיות לועזיות באופן הבא:\n`a=1, b=2,..., i=9, j=10, k=20,..., r=90, s=100, t=200,..., z=800`\nנשמור את הערכים במערך גימטרייה `int gematria[26]`, כך שהגימטרייה של האות `a` נשמרה ב-`gematria[0]`, הגימטרייה של האות `b` נשמרה ב-`gematria[1]` וכו'.\nכתבו פונקציה **רקורסיבית** יעילה שמקבלת שני פרמטרים - מחרוזת של אותיות לועזיות קטנות והמערך `gematria` ומחזירה את הגימטרייה של המחרוזת, ששווה לסכום הגימטריות של כל האותיות במחרוזת.\nלדוגמא:\nהגימטרייה של המחרוזת \"exam\" היא `5+600+1+40=646`",
   "solution": "**פתרון רשמי** (20A-A עמ' 3):\n```c\nint CalGimatria ( char * str , int * gematria )\n{\n\n    if (*str == '\\0')\n    {\n        return 0;\n    }\n    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "rubric": [
    {
     "text": "מקרה בסיס: `*str == '\\0'` מחזיר `0`",
     "points": 4,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">*str == '\\0'</code> מחזיר <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "שימוש נכון בטבלה: האינדקס `*str - 'a'` ב-`gematria`",
     "points": 6,
     "html": "שימוש נכון בטבלה: האינדקס <code class=\"tok\" dir=\"ltr\">*str - 'a'</code> ב-<code class=\"tok\" dir=\"ltr\">gematria</code>"
    },
    {
     "text": "חיבור הערך של התו הנוכחי לקריאה הרקורסיבית על `str + 1`",
     "points": 7,
     "html": "חיבור הערך של התו הנוכחי לקריאה הרקורסיבית על <code class=\"tok\" dir=\"ltr\">str + 1</code>"
    },
    {
     "text": "רקורסיה אחת לכל תו, כלומר זמן לינארי בלי העתקת המחרוזת",
     "points": 3,
     "html": "רקורסיה אחת לכל תו, כלומר זמן לינארי בלי העתקת המחרוזת"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח את מקרה הבסיס של סוף המחרוזת ולהמשיך מעבר ל-`'\\0'`.",
    "לגשת ל-`gematria[*str]` בלי להחסיר `'a'` ולצאת מגבולות המערך.",
    "לקרוא רקורסיבית עם `str` במקום `str + 1`, ולא להתקדם."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `CalGimatria(\"exam\", gematria)`?",
     "answer": 646,
     "tol": 0,
     "explain": "$5+600+1+40=646$ (ריצה אמיתית: 646).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">CalGimatria(\"exam\", gematria)</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>600</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>40</mn><mo>=</mo><mn>646</mn></mrow><annotation encoding=\"application/x-tex\">5+600+1+40=646</annotation></semantics></math></span> (ריצה אמיתית: 646)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה הקריאה על המחרוזת `\"zz\"`?",
     "answer": 1600,
     "tol": 0,
     "explain": "כל `z` שווה 800: $800+800=1600$ (ריצה אמיתית: 1600).",
     "promptHtml": "מה מחזירה הקריאה על המחרוזת <code class=\"tok\" dir=\"ltr\">\"zz\"</code>?",
     "explainHtml": "כל <code class=\"tok\" dir=\"ltr\">z</code> שווה 800: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>800</mn><mo>+</mo><mn>800</mn><mo>=</mo><mn>1600</mn></mrow><annotation encoding=\"application/x-tex\">800+800=1600</annotation></semantics></math></span> (ריצה אמיתית: 1600)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את שורת ההחזרה הרקורסיבית.",
     "code": true,
     "lines": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "___",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);",
       "html": "return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return gematria [*str - 'a'] + CalGimatria (str, gematria);",
       "html": "return gematria [*str - 'a'] + CalGimatria (str, gematria);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return gematria [*str] + CalGimatria (str + 1, gematria);",
       "html": "return gematria [*str] + CalGimatria (str + 1, gematria);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return gematria [*str - 'a'];",
       "html": "return gematria [*str - 'a'];"
      }
     ],
     "correctId": "a",
     "explain": "מוסיפים את גימטריית התו הנוכחי ועוברים לתו הבא (`str + 1`); האינדקס הוא מרחק האות מ-`'a'`.",
     "promptHtml": "השלימו את שורת ההחזרה הרקורסיבית.",
     "explainHtml": "מוסיפים את גימטריית התו הנוכחי ועוברים לתו הבא (<code class=\"tok\" dir=\"ltr\">str + 1</code>); האינדקס הוא מרחק האות מ-<code class=\"tok\" dir=\"ltr\">'a'</code>.",
     "linesHtml": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `CalGimatria`.",
     "code": true,
     "lines": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);",
      "}"
     ],
     "explain": "קודם בדיקת סוף המחרוזת, ואחר כך הערך של התו הנוכחי ועוד שאר המחרוזת.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">CalGimatria</code>.",
     "explainHtml": "קודם בדיקת סוף המחרוזת, ואחר כך הערך של התו הנוכחי ועוד שאר המחרוזת.",
     "linesHtml": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "    return gematria [*str - 'a'] * CalGimatria (str + 1, gematria);",
      "}"
     ],
     "bugIndex": 6,
     "explain": "כפל במקום חיבור: מקרה הבסיס מחזיר 0, ולכן הכול מוכפל ב-0 ו-\"exam\" מחזירה 0 (ריצה אמיתית: 0).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "כפל במקום חיבור: מקרה הבסיס מחזיר 0, ולכן הכול מוכפל ב-0 ו-\"exam\" מחזירה 0 (ריצה אמיתית: 0).",
     "linesHtml": [
      "int CalGimatria ( char * str , int * gematria )",
      "{",
      "    if (*str == '\\0')",
      "    {",
      "        return 0;",
      "    }",
      "    return gematria [*str - 'a'] * CalGimatria (str + 1, gematria);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q2",
   "partKey": "",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "נגדיר גימטרייה לאותיות לועזיות באופן הבא:<br><code class=\"tok\" dir=\"ltr\">a=1, b=2,..., i=9, j=10, k=20,..., r=90, s=100, t=200,..., z=800</code><br>נשמור את הערכים במערך גימטרייה <code class=\"tok\" dir=\"ltr\">int gematria[26]</code>, כך שהגימטרייה של האות <code class=\"tok\" dir=\"ltr\">a</code> נשמרה ב-<code class=\"tok\" dir=\"ltr\">gematria[0]</code>, הגימטרייה של האות <code class=\"tok\" dir=\"ltr\">b</code> נשמרה ב-<code class=\"tok\" dir=\"ltr\">gematria[1]</code> וכו'.<br>כתבו פונקציה <strong>רקורסיבית</strong> יעילה שמקבלת שני פרמטרים - מחרוזת של אותיות לועזיות קטנות והמערך <code class=\"tok\" dir=\"ltr\">gematria</code> ומחזירה את הגימטרייה של המחרוזת, ששווה לסכום הגימטריות של כל האותיות במחרוזת.<br>לדוגמא:<br>הגימטרייה של המחרוזת \"exam\" היא <code class=\"tok\" dir=\"ltr\">5+600+1+40=646</code>",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 3):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int CalGimatria ( char * str , int * gematria )\n{\n\n    if (*str == '\\0')\n    {\n        return 0;\n    }\n    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);\n}</code></pre>",
   "pointsTotal": 20,
   "pitfallsHtml": [
    "לשכוח את מקרה הבסיס של סוף המחרוזת ולהמשיך מעבר ל-<code class=\"tok\" dir=\"ltr\">'\\0'</code>.",
    "לגשת ל-<code class=\"tok\" dir=\"ltr\">gematria[*str]</code> בלי להחסיר <code class=\"tok\" dir=\"ltr\">'a'</code> ולצאת מגבולות המערך.",
    "לקרוא רקורסיבית עם <code class=\"tok\" dir=\"ltr\">str</code> במקום <code class=\"tok\" dir=\"ltr\">str + 1</code>, ולא להתקדם."
   ]
  },
  {
   "num": 3,
   "part": "א",
   "kind": "code",
   "topic": "sorting_merge",
   "question": "נתונים שני מערכים **ממוינים**: מערך $A$ בגודל $n$, ומערך $B$ בגודל $m$.\nהשלימו את הפונקציה שמקבלת את שני המערכים האלה וגודלם ומסדרת מחדש את איברי המערך $B$ כך שבתחילת המערך $B$ יופיעו האיברים **המשותפים** עם $A$, ובסוף המערך יופיעו האיברים שלא שייכים ל-$A$. הסדר שבו מופיעים האיברים **בתוך** שני החלקים של $B$ לא חשוב.\nאפשר להיעזר בפונקציה `swap`.\nלדוגמא:\nעבור `A={ -1, 0, 5, 6, 8, 8, 10 }`, `B={-2,5,5,7,8,10,11,12}`\nהפונקציה תסדר את המערך $B$ מחדש: `B={5,8,10,7,-2,5,11,12}`",
   "solution": "**פתרון רשמי** (20A-A עמ' 4, ההשלמות מוקלדות בתיבות):\nתנאי הלולאה: `i < m && k < n`\nבהתאמה: `swap (B + (++last) , B + (i ++ ));` (כלומר `last ++; swap (&B[last], &B[i]); i++;`) ואחריו `k ++ ;`\nכש-`B[i] > A[k]`: `k++;`, אחרת: `i++ ;`\n```c\nvoid partition_B(int* A, int n, int* B, int m)\n{\n    int i=0, k = 0, last = -1;\n\n    while (i < m && k < n)\n    {\n        if (B[ i ] == A[ k ])\n        {\n            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;\n            k ++ ;\n        }\n        else\n            if (B[ i ] > A[ k ])\n                k++;\n            else\n                i++ ;\n    }\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c3",
   "rubric": [
    {
     "text": "תנאי הלולאה `i < m && k < n`: עוצרים כשאחד המערכים נגמר",
     "points": 4,
     "html": "תנאי הלולאה <code class=\"tok\" dir=\"ltr\">i &lt; m &amp;&amp; k &lt; n</code>: עוצרים כשאחד המערכים נגמר"
    },
    {
     "text": "כששני האיברים שווים: `swap` של `B[i]` עם התא הבא בבלוק הקדמי (`++last`) והגדלת `i`, ואז `k++`",
     "points": 5,
     "html": "כששני האיברים שווים: <code class=\"tok\" dir=\"ltr\">swap</code> של <code class=\"tok\" dir=\"ltr\">B[i]</code> עם התא הבא בבלוק הקדמי (<code class=\"tok\" dir=\"ltr\">++last</code>) והגדלת <code class=\"tok\" dir=\"ltr\">i</code>, ואז <code class=\"tok\" dir=\"ltr\">k++</code>"
    },
    {
     "text": "כש-`B[i] > A[k]` מקדמים את `k`",
     "points": 3,
     "html": "כש-<code class=\"tok\" dir=\"ltr\">B[i] &gt; A[k]</code> מקדמים את <code class=\"tok\" dir=\"ltr\">k</code>"
    },
    {
     "text": "אחרת (`B[i] < A[k]`) מקדמים את `i`",
     "points": 2,
     "html": "אחרת (<code class=\"tok\" dir=\"ltr\">B[i] &lt; A[k]</code>) מקדמים את <code class=\"tok\" dir=\"ltr\">i</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "תנאי עם `||` במקום `&&`: הלולאה ממשיכה אחרי שמערך נגמר וקוראת מחוץ לגבולות.",
    "לקדם את המצביע הלא נכון בהשוואה: במערך ממוין מקדמים את המצביע של האיבר הקטן יותר.",
    "לא להגדיל את `last` לפני ה-`swap` ולדרוס איבר בבלוק הקדמי."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בדוגמה (`A={-1,0,5,6,8,8,10}`, `B={-2,5,5,7,8,10,11,12}`): כמה איברים יש בבלוק הקדמי של $B$ אחרי הריצה?",
     "answer": 3,
     "tol": 0,
     "explain": "$B$ הופך ל-`5 8 10 7 -2 5 11 12`: הבלוק הקדמי הוא `5 8 10` (ריצה אמיתית).",
     "promptHtml": "בדוגמה (<code class=\"tok\" dir=\"ltr\">A={-1,0,5,6,8,8,10}</code>, <code class=\"tok\" dir=\"ltr\">B={-2,5,5,7,8,10,11,12}</code>): כמה איברים יש בבלוק הקדמי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> אחרי הריצה?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> הופך ל-<code class=\"tok\" dir=\"ltr\">5 8 10 7 -2 5 11 12</code>: הבלוק הקדמי הוא <code class=\"tok\" dir=\"ltr\">5 8 10</code> (ריצה אמיתית)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי הלולאה.",
     "code": true,
     "lines": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "___",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] > A[ k ])",
      "                k++;",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ],
     "blankIndex": 3,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "while (i < m && k < n)",
       "html": "while (i &lt; m &amp;&amp; k &lt; n)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "while (i < m || k < n)",
       "html": "while (i &lt; m || k &lt; n)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "while (i < m - 1 && k < n)",
       "html": "while (i &lt; m - 1 &amp;&amp; k &lt; n)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "while (i < n && k < m)",
       "html": "while (i &lt; n &amp;&amp; k &lt; m)"
      }
     ],
     "correctId": "a",
     "explain": "הלולאה נעצרת כשאחד המערכים נגמר; `||` קורא מחוץ לגבולות, ו-`i < m - 1` מפספס את האיבר האחרון של $B$ (נכשל ב-3648 מ-20000 קלטים אקראיים).",
     "promptHtml": "השלימו את תנאי הלולאה.",
     "explainHtml": "הלולאה נעצרת כשאחד המערכים נגמר; <code class=\"tok\" dir=\"ltr\">||</code> קורא מחוץ לגבולות, ו-<code class=\"tok\" dir=\"ltr\">i &lt; m - 1</code> מפספס את האיבר האחרון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> (נכשל ב-3648 מ-20000 קלטים אקראיים).",
     "linesHtml": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "___",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&amp;B[last], &amp;B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] &gt; A[ k ])",
      "                k++;",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ]
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הפקודה בענף `B[i] > A[k]`.",
     "code": true,
     "lines": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "    while (i < m && k < n)",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] > A[ k ])",
      "___",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ],
     "blankIndex": 12,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "k++;",
       "html": "k++;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "i++;",
       "html": "i++;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "last++;",
       "html": "last++;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "k--;",
       "html": "k--;"
      }
     ],
     "correctId": "a",
     "explain": "`B[i]` גדול מ-`A[k]`, ולכן ההתאמה עבור `B[i]` יכולה להימצא רק בהמשך $A$: מקדמים את `k`.",
     "promptHtml": "השלימו את הפקודה בענף <code class=\"tok\" dir=\"ltr\">B[i] &gt; A[k]</code>.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">B[i]</code> גדול מ-<code class=\"tok\" dir=\"ltr\">A[k]</code>, ולכן ההתאמה עבור <code class=\"tok\" dir=\"ltr\">B[i]</code> יכולה להימצא רק בהמשך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>: מקדמים את <code class=\"tok\" dir=\"ltr\">k</code>.",
     "linesHtml": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "    while (i &lt; m &amp;&amp; k &lt; n)",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&amp;B[last], &amp;B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] &gt; A[ k ])",
      "___",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `partition_B`.",
     "code": true,
     "lines": [
      "void partition_B(int* A, int n, int* B, int m)\n{\n    int i=0, k = 0, last = -1;",
      "    while (i < m && k < n)\n    {",
      "        if (B[ i ] == A[ k ])\n        {\n            swap (B + (++last) , B + (i ++ ));\n            k ++ ;\n        }",
      "        else\n            if (B[ i ] > A[ k ])\n                k++;\n            else\n                i++ ;",
      "    }\n}"
     ],
     "explain": "אתחול, כותרת הלולאה, ענף השוויון (`swap` ו-`k++` יחד), ענפי ההשוואה, וסגירה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">partition_B</code>.",
     "explainHtml": "אתחול, כותרת הלולאה, ענף השוויון (<code class=\"tok\" dir=\"ltr\">swap</code> ו-<code class=\"tok\" dir=\"ltr\">k++</code> יחד), ענפי ההשוואה, וסגירה.",
     "linesHtml": [
      "void partition_B(int* A, int n, int* B, int m)\n{\n    int i=0, k = 0, last = -1;",
      "    while (i &lt; m &amp;&amp; k &lt; n)\n    {",
      "        if (B[ i ] == A[ k ])\n        {\n            swap (B + (++last) , B + (i ++ ));\n            k ++ ;\n        }",
      "        else\n            if (B[ i ] &gt; A[ k ])\n                k++;\n            else\n                i++ ;",
      "    }\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה והפונקציה כבר אינה מסדרת את הבלוק הקדמי. מצאו אותה.",
     "code": true,
     "lines": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "    while (i < m && k < n)",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] < A[ k ])",
      "                k++;",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ],
     "bugIndex": 11,
     "explain": "עם `<` הענפים מתחלפים; בדוגמה $B$ נשאר `-2 5 5 7 8 10 11 12` ללא הבלוק הקדמי (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה והפונקציה כבר אינה מסדרת את הבלוק הקדמי. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&lt;</code> הענפים מתחלפים; בדוגמה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> נשאר <code class=\"tok\" dir=\"ltr\">-2 5 5 7 8 10 11 12</code> ללא הבלוק הקדמי (ריצה אמיתית).",
     "linesHtml": [
      "void partition_B(int* A, int n, int* B, int m)",
      "{",
      "    int i=0, k = 0, last = -1;",
      "    while (i &lt; m &amp;&amp; k &lt; n)",
      "    {",
      "        if (B[ i ] == A[ k ])",
      "        {",
      "            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&amp;B[last], &amp;B[i] ) ; i++;",
      "            k ++ ;",
      "        }",
      "        else",
      "            if (B[ i ] &lt; A[ k ])",
      "                k++;",
      "            else",
      "                i++ ;",
      "    }",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q3a",
   "partKey": "a",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "מיון ומיזוג",
   "questionHtml": "נתונים שני מערכים <strong>ממוינים</strong>: מערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, ומערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span>.<br>השלימו את הפונקציה שמקבלת את שני המערכים האלה וגודלם ומסדרת מחדש את איברי המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> כך שבתחילת המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> יופיעו האיברים <strong>המשותפים</strong> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>, ובסוף המערך יופיעו האיברים שלא שייכים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>. הסדר שבו מופיעים האיברים <strong>בתוך</strong> שני החלקים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> לא חשוב.<br>אפשר להיעזר בפונקציה <code class=\"tok\" dir=\"ltr\">swap</code>.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">A={ -1, 0, 5, 6, 8, 8, 10 }</code>, <code class=\"tok\" dir=\"ltr\">B={-2,5,5,7,8,10,11,12}</code><br>הפונקציה תסדר את המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> מחדש: <code class=\"tok\" dir=\"ltr\">B={5,8,10,7,-2,5,11,12}</code>",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 4, ההשלמות מוקלדות בתיבות):<br>תנאי הלולאה: <code class=\"tok\" dir=\"ltr\">i &lt; m &amp;&amp; k &lt; n</code><br>בהתאמה: <code class=\"tok\" dir=\"ltr\">swap (B + (++last) , B + (i ++ ));</code> (כלומר <code class=\"tok\" dir=\"ltr\">last ++; swap (&amp;B[last], &amp;B[i]); i++;</code>) ואחריו <code class=\"tok\" dir=\"ltr\">k ++ ;</code><br>כש-<code class=\"tok\" dir=\"ltr\">B[i] &gt; A[k]</code>: <code class=\"tok\" dir=\"ltr\">k++;</code>, אחרת: <code class=\"tok\" dir=\"ltr\">i++ ;</code><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void partition_B(int* A, int n, int* B, int m)\n{\n    int i=0, k = 0, last = -1;\n\n    while (i &lt; m &amp;&amp; k &lt; n)\n    {\n        if (B[ i ] == A[ k ])\n        {\n            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&amp;B[last], &amp;B[i] ) ; i++;\n            k ++ ;\n        }\n        else\n            if (B[ i ] &gt; A[ k ])\n                k++;\n            else\n                i++ ;\n    }\n}</code></pre>",
   "pointsTotal": 14,
   "pitfallsHtml": [
    "תנאי עם <code class=\"tok\" dir=\"ltr\">||</code> במקום <code class=\"tok\" dir=\"ltr\">&amp;&amp;</code>: הלולאה ממשיכה אחרי שמערך נגמר וקוראת מחוץ לגבולות.",
    "לקדם את המצביע הלא נכון בהשוואה: במערך ממוין מקדמים את המצביע של האיבר הקטן יותר.",
    "לא להגדיל את <code class=\"tok\" dir=\"ltr\">last</code> לפני ה-<code class=\"tok\" dir=\"ltr\">swap</code> ולדרוס איבר בבלוק הקדמי."
   ]
  },
  {
   "num": 3,
   "part": "ב",
   "kind": "computation",
   "topic": "complexity",
   "question": "מה סדר גודל של זמן ריצת הפונקציה כתלות ב-$m$ ו-$n$? תנו **נימוק** קצר.",
   "solution": "**פתרון רשמי** (20A-A עמ' 4): הפונקציה רצה בסדר גודל של $m+n$.\nהפונקציה עוברת פעם אחת על כל אחד מהמערכים, ומבצעת `swap` עד $n$ פעמים.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c3",
   "rubric": [
    {
     "text": "זמן הריצה הוא $O(m+n)$",
     "points": 3,
     "html": "זמן הריצה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(m+n)</annotation></semantics></math></span>"
    },
    {
     "text": "נימוק: בכל איטרציה `i` או `k` (או שניהם) גדלים, ולכן לכל היותר $m+n$ איטרציות",
     "points": 2,
     "html": "נימוק: בכל איטרציה <code class=\"tok\" dir=\"ltr\">i</code> או <code class=\"tok\" dir=\"ltr\">k</code> (או שניהם) גדלים, ולכן לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span> איטרציות"
    },
    {
     "text": "ה-`swap` מתבצע רק בשוויון ולכן לכל היותר $n$ פעמים ואינו משנה את הסדר הגדול",
     "points": 1,
     "html": "ה-<code class=\"tok\" dir=\"ltr\">swap</code> מתבצע רק בשוויון ולכן לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים ואינו משנה את הסדר הגדול"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לענות $O(n\\cdot m)$ בגלל הלולאה: אין לולאה מקוננת, כל מצביע רק מתקדם.",
    "לספור רק את האיטרציות עם שוויון (עד $n$) ולענות $O(n)$: גם איטרציות בלי שוויון מתקדמות, ו-$B$ יכול להיות גדול בהרבה מ-$A$."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "בדוגמה ($n=7$, $m=8$): כמה איטרציות מבצעת הלולאה?",
     "answer": 10,
     "tol": 0,
     "explain": "ספירה בריצה אמיתית: 10 איטרציות, פחות מ-$m+n=15$.",
     "promptHtml": "בדוגמה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">n=7</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">m=8</annotation></semantics></math></span>): כמה איטרציות מבצעת הלולאה?",
     "explainHtml": "ספירה בריצה אמיתית: 10 איטרציות, פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi><mo>=</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">m+n=15</annotation></semantics></math></span>."
    },
    {
     "type": "choice",
     "prompt": "מדוע מספר האיטרציות חסום על ידי $m+n$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "בכל איטרציה לפחות אחד המצביעים `i`, `k` גדל, והם לא חוזרים אחורה",
       "html": "בכל איטרציה לפחות אחד המצביעים <code class=\"tok\" dir=\"ltr\">i</code>, <code class=\"tok\" dir=\"ltr\">k</code> גדל, והם לא חוזרים אחורה"
      },
      {
       "id": "b",
       "type": "text",
       "value": "הלולאה החיצונית רצה $n$ פעמים והפנימית $m$ פעמים",
       "html": "הלולאה החיצונית רצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים והפנימית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> פעמים"
      },
      {
       "id": "c",
       "type": "text",
       "value": "ה-`swap` מסדר מחדש את כל $B$",
       "html": "ה-<code class=\"tok\" dir=\"ltr\">swap</code> מסדר מחדש את כל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "הפונקציה מבצעת חיפוש בינארי",
       "html": "הפונקציה מבצעת חיפוש בינארי"
      }
     ],
     "correctId": "a",
     "explain": "אין לולאה מקוננת. ב-100000 זוגות ממוינים אקראיים לא נמצאה ריצה עם יותר מ-$m+n$ איטרציות.",
     "promptHtml": "מדוע מספר האיטרציות חסום על ידי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span>?",
     "explainHtml": "אין לולאה מקוננת. ב-100000 זוגות ממוינים אקראיים לא נמצאה ריצה עם יותר מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span> איטרציות."
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$m$ וב-$n$? (למשל `O(n)`)",
     "accept": [
      "O(m+n)",
      "O(n+m)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת של כל אחד מהמערכים: $O(m+n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה כתלות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת של כל אחד מהמערכים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(m+n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q3b",
   "partKey": "b",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "סדר גודל",
   "questionHtml": "מה סדר גודל של זמן ריצת הפונקציה כתלות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">m</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>? תנו <strong>נימוק</strong> קצר.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 4): הפונקציה רצה בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">m+n</annotation></semantics></math></span>.<br>הפונקציה עוברת פעם אחת על כל אחד מהמערכים, ומבצעת <code class=\"tok\" dir=\"ltr\">swap</code> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> פעמים.",
   "pointsTotal": 6,
   "pitfallsHtml": [
    "לענות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>⋅</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\cdot m)</annotation></semantics></math></span> בגלל הלולאה: אין לולאה מקוננת, כל מצביע רק מתקדם.",
    "לספור רק את האיטרציות עם שוויון (עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>) ולענות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>: גם איטרציות בלי שוויון מתקדמות, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> יכול להיות גדול בהרבה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>."
   ]
  },
  {
   "num": 4,
   "part": "א",
   "kind": "code",
   "topic": "binary_search",
   "question": "נתון מערך **ממוין** בסדר עולה של מספרים שלמים. ידוע שכל איבר במערך **גדול ב-1** מהאיבר שלפניו, למעט איבר אחד ששווה לקודמו.\nכתבו פונקציה **יעילה** שמקבלת את המערך וגודלו ומחזירה את הערך של האיבר שמופיע פעמיים במערך.\nלדוגמא:\nעבור המערך `a = {-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9}` הפונקציה תחזיר `3`.\nעל הפונקציה לרוץ בסדר גודל של $\\log n$.",
   "solution": "**פתרון רשמי** (20A-A עמ' 5, שני פתרונות שונים בתיבה; ההנחה המסומנת בפתרון: המערך מכיל לפחות שני איברים):\nפתרון ראשון:\n```c\nint FindDouble(int* a ,  int n)\n{\n    int low = 0, high = n - 1, mid;\n    while (low < high)\n    {\n        mid = (high-low)/2+low;\n        if (a[mid] == a[mid + 1])\n            return a[mid];\n\n        if(a[mid] - a[low] == mid - low)\n\n            low = mid + 1;\n        else\n            high = mid;\n    }\n}\n```\nפתרון שני:\n```c\nint findDoubleNum(int *a, int n)\n{\n    int low = 0, high = n - 1, mid;\n    /*if (n == 2)\n        return a[0];*/\n\n    while (low <= high)\n    {\n        mid = (high - low) / 2 + low;\n        if (a[mid] == a[0]+mid)\n            low = mid + 1;\n        else\n            high = mid-1;\n    }\n    return a[mid];\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "rubric": [
    {
     "text": "שימוש בחיפוש בינארי עם `low`, `high` ו-`mid` כדי להגיע ל-$O(\\log n)$",
     "points": 4,
     "html": "שימוש בחיפוש בינארי עם <code class=\"tok\" dir=\"ltr\">low</code>, <code class=\"tok\" dir=\"ltr\">high</code> ו-<code class=\"tok\" dir=\"ltr\">mid</code> כדי להגיע ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
    },
    {
     "text": "החזרת `a[mid]` כשמתקיים `a[mid] == a[mid + 1]`",
     "points": 4,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">a[mid]</code> כשמתקיים <code class=\"tok\" dir=\"ltr\">a[mid] == a[mid + 1]</code>"
    },
    {
     "text": "בדיקת `a[mid] - a[low] == mid - low`: אם מתקיים אין כפול בקטע `low..mid`, ולכן `low = mid + 1`",
     "points": 5,
     "html": "בדיקת <code class=\"tok\" dir=\"ltr\">a[mid] - a[low] == mid - low</code>: אם מתקיים אין כפול בקטע <code class=\"tok\" dir=\"ltr\">low..mid</code>, ולכן <code class=\"tok\" dir=\"ltr\">low = mid + 1</code>"
    },
    {
     "text": "אחרת הכפול בקטע השמאלי ולכן `high = mid`",
     "points": 4,
     "html": "אחרת הכפול בקטע השמאלי ולכן <code class=\"tok\" dir=\"ltr\">high = mid</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "חיפוש לינארי על כל המערך: נכון אבל $O(n)$ ולא $O(\\log n)$.",
    "לבדוק את `a[mid]` מול `mid` בלבד (בלי `low`) כשהמערך אינו מתחיל ב-0.",
    "`high = mid - 1` במקום `high = mid`: מאבדים את `mid` שיכול להיות חלק מהזוג הכפול."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "במערך הדוגמה (14 איברים, `low = 0`, `high = 13`): מהו `mid` באיטרציה הראשונה?",
     "answer": 6,
     "tol": 0,
     "explain": "`mid = (13-0)/2+0 = 6`, ו-`a[6] == a[7] == 3`, ולכן מוחזר 3 (ריצה אמיתית: 3).",
     "promptHtml": "במערך הדוגמה (14 איברים, <code class=\"tok\" dir=\"ltr\">low = 0</code>, <code class=\"tok\" dir=\"ltr\">high = 13</code>): מהו <code class=\"tok\" dir=\"ltr\">mid</code> באיטרציה הראשונה?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">mid = (13-0)/2+0 = 6</code>, ו-<code class=\"tok\" dir=\"ltr\">a[6] == a[7] == 3</code>, ולכן מוחזר 3 (ריצה אמיתית: 3)."
    },
    {
     "type": "choice",
     "prompt": "במערך `{1,2,3,4,4,5,6,7,8}` (9 איברים) באיטרציה הראשונה `mid = 4`, `a[mid]-a[low] = 3` ו-`mid-low = 4`. מה קורה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`high = mid`: הכפול נמצא בקטע `low..mid`",
       "html": "<code class=\"tok\" dir=\"ltr\">high = mid</code>: הכפול נמצא בקטע <code class=\"tok\" dir=\"ltr\">low..mid</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`low = mid + 1`: הכפול בצד ימין",
       "html": "<code class=\"tok\" dir=\"ltr\">low = mid + 1</code>: הכפול בצד ימין"
      },
      {
       "id": "c",
       "type": "text",
       "value": "הפונקציה מחזירה `a[mid]` מיד",
       "html": "הפונקציה מחזירה <code class=\"tok\" dir=\"ltr\">a[mid]</code> מיד"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`high = mid - 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">high = mid - 1</code>"
      }
     ],
     "correctId": "a",
     "explain": "ההפרש בערכים (3) קטן מהפרש האינדקסים (4), ולכן יש כפול בקטע השמאלי (כולל `mid`).",
     "promptHtml": "במערך <code class=\"tok\" dir=\"ltr\">{1,2,3,4,4,5,6,7,8}</code> (9 איברים) באיטרציה הראשונה <code class=\"tok\" dir=\"ltr\">mid = 4</code>, <code class=\"tok\" dir=\"ltr\">a[mid]-a[low] = 3</code> ו-<code class=\"tok\" dir=\"ltr\">mid-low = 4</code>. מה קורה?",
     "explainHtml": "ההפרש בערכים (3) קטן מהפרש האינדקסים (4), ולכן יש כפול בקטע השמאלי (כולל <code class=\"tok\" dir=\"ltr\">mid</code>)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הפקודה בענף ה-`else`.",
     "code": true,
     "lines": [
      "int FindDouble(int* a ,  int n)",
      "{",
      "    int low = 0, high = n - 1, mid;",
      "    while (low < high)",
      "    {",
      "        mid = (high-low)/2+low;",
      "        if (a[mid] == a[mid + 1])",
      "            return a[mid];",
      "        if(a[mid] - a[low] == mid - low)",
      "            low = mid + 1;",
      "        else",
      "___",
      "    }",
      "}"
     ],
     "blankIndex": 11,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "high = mid;",
       "html": "high = mid;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "high = mid - 1;",
       "html": "high = mid - 1;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "low = mid;",
       "html": "low = mid;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "low = mid + 1;",
       "html": "low = mid + 1;"
      }
     ],
     "correctId": "a",
     "explain": "`mid` עצמו עדיין יכול להיות אחד משני הכפולים, ולכן `high = mid` ולא `mid - 1`.",
     "promptHtml": "השלימו את הפקודה בענף ה-<code class=\"tok\" dir=\"ltr\">else</code>.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">mid</code> עצמו עדיין יכול להיות אחד משני הכפולים, ולכן <code class=\"tok\" dir=\"ltr\">high = mid</code> ולא <code class=\"tok\" dir=\"ltr\">mid - 1</code>.",
     "linesHtml": [
      "int FindDouble(int* a ,  int n)",
      "{",
      "    int low = 0, high = n - 1, mid;",
      "    while (low &lt; high)",
      "    {",
      "        mid = (high-low)/2+low;",
      "        if (a[mid] == a[mid + 1])",
      "            return a[mid];",
      "        if(a[mid] - a[low] == mid - low)",
      "            low = mid + 1;",
      "        else",
      "___",
      "    }",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `FindDouble`.",
     "code": true,
     "lines": [
      "int FindDouble(int* a ,  int n)\n{\n    int low = 0, high = n - 1, mid;",
      "    while (low < high)\n    {",
      "        mid = (high-low)/2+low;\n        if (a[mid] == a[mid + 1])\n            return a[mid];\n        if(a[mid] - a[low] == mid - low)\n            low = mid + 1;\n        else\n            high = mid;",
      "    }\n}"
     ],
     "explain": "אתחול, כותרת הלולאה, גוף הלולאה (חישוב `mid` ושתי הבדיקות עם הבחירה בצד), וסגירה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">FindDouble</code>.",
     "explainHtml": "אתחול, כותרת הלולאה, גוף הלולאה (חישוב <code class=\"tok\" dir=\"ltr\">mid</code> ושתי הבדיקות עם הבחירה בצד), וסגירה.",
     "linesHtml": [
      "int FindDouble(int* a ,  int n)\n{\n    int low = 0, high = n - 1, mid;",
      "    while (low &lt; high)\n    {",
      "        mid = (high-low)/2+low;\n        if (a[mid] == a[mid + 1])\n            return a[mid];\n        if(a[mid] - a[low] == mid - low)\n            low = mid + 1;\n        else\n            high = mid;",
      "    }\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה והפונקציה נכשלת על חלק מהקלטים. מצאו אותה.",
     "code": true,
     "lines": [
      "int FindDouble(int* a ,  int n)",
      "{",
      "    int low = 0, high = n - 1, mid;",
      "    while (low < high)",
      "    {",
      "        mid = (high-low)/2+low;",
      "        if (a[mid] == a[mid + 1])",
      "            return a[mid];",
      "        if(a[mid] - a[low] == mid - low)",
      "            low = mid + 1;",
      "        else",
      "            high = mid - 1;",
      "    }",
      "}"
     ],
     "bugIndex": 11,
     "explain": "עם `high = mid - 1` נאבד את `mid`: למשל על `{-4,-4,-3}` הלולאה מסתיימת בלי להחזיר ערך. בבדיקה על 594 מערכים תקינים הגרסה הרשמית נכונה תמיד והגרסה השבורה נכשלת ב-216.",
     "promptHtml": "שורה אחת שונתה והפונקציה נכשלת על חלק מהקלטים. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">high = mid - 1</code> נאבד את <code class=\"tok\" dir=\"ltr\">mid</code>: למשל על <code class=\"tok\" dir=\"ltr\">{-4,-4,-3}</code> הלולאה מסתיימת בלי להחזיר ערך. בבדיקה על 594 מערכים תקינים הגרסה הרשמית נכונה תמיד והגרסה השבורה נכשלת ב-216.",
     "linesHtml": [
      "int FindDouble(int* a ,  int n)",
      "{",
      "    int low = 0, high = n - 1, mid;",
      "    while (low &lt; high)",
      "    {",
      "        mid = (high-low)/2+low;",
      "        if (a[mid] == a[mid + 1])",
      "            return a[mid];",
      "        if(a[mid] - a[low] == mid - low)",
      "            low = mid + 1;",
      "        else",
      "            high = mid - 1;",
      "    }",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q4a",
   "partKey": "a",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "נתון מערך <strong>ממוין</strong> בסדר עולה של מספרים שלמים. ידוע שכל איבר במערך <strong>גדול ב-1</strong> מהאיבר שלפניו, למעט איבר אחד ששווה לקודמו.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת את המערך וגודלו ומחזירה את הערך של האיבר שמופיע פעמיים במערך.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">a = {-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">3</code>.<br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 5, שני פתרונות שונים בתיבה; ההנחה המסומנת בפתרון: המערך מכיל לפחות שני איברים):<br>פתרון ראשון:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int FindDouble(int* a ,  int n)\n{\n    int low = 0, high = n - 1, mid;\n    while (low &lt; high)\n    {\n        mid = (high-low)/2+low;\n        if (a[mid] == a[mid + 1])\n            return a[mid];\n\n        if(a[mid] - a[low] == mid - low)\n\n            low = mid + 1;\n        else\n            high = mid;\n    }\n}</code></pre>פתרון שני:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int findDoubleNum(int *a, int n)\n{\n    int low = 0, high = n - 1, mid;\n    /*if (n == 2)\n        return a[0];*/\n\n    while (low &lt;= high)\n    {\n        mid = (high - low) / 2 + low;\n        if (a[mid] == a[0]+mid)\n            low = mid + 1;\n        else\n            high = mid-1;\n    }\n    return a[mid];\n}</code></pre>",
   "pointsTotal": 17,
   "pitfallsHtml": [
    "חיפוש לינארי על כל המערך: נכון אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.",
    "לבדוק את <code class=\"tok\" dir=\"ltr\">a[mid]</code> מול <code class=\"tok\" dir=\"ltr\">mid</code> בלבד (בלי <code class=\"tok\" dir=\"ltr\">low</code>) כשהמערך אינו מתחיל ב-0.",
    "<code class=\"tok\" dir=\"ltr\">high = mid - 1</code> במקום <code class=\"tok\" dir=\"ltr\">high = mid</code>: מאבדים את <code class=\"tok\" dir=\"ltr\">mid</code> שיכול להיות חלק מהזוג הכפול."
   ]
  },
  {
   "num": 4,
   "part": "ב",
   "kind": "proof",
   "topic": "binary_search",
   "question": "תנו **נימוק** קצר לנכונות הפונקציה.",
   "solution": "**פתרון רשמי** (20A-A עמ' 6, נימוק לפתרון הראשון `FindDouble`): מאחר וכל איבר במערך **גדול ב-1** מהאיבר הקודם, ההפרש בין האינדקסים חייב להיות שווה להפרש בין האיברים.\nלכן על ידי בדיקת התנאי `if(a[mid] - a[low] == mid - low)` ניתן לדעת האם הערך הכפול במערך הוא בחלק הימני של `mid` או בחלק השמאלי.\nבמידה והתשובה היא כן - הקטע `(low,mid)` אינו מכיל את האיבר הכפול שאנחנו מחפשים, ונמשיך חיפוש בינארי בחלק הימני `(mid+1,high)`.\nבמידה ולא - נתמקד בחיפוש בינארי בקטע `(low,mid)` של המערך.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "rubric": [
    {
     "text": "הבחנה שהפרש הערכים בין שני תאים שווה להפרש האינדקסים כל עוד אין כפול ביניהם",
     "points": 4,
     "html": "הבחנה שהפרש הערכים בין שני תאים שווה להפרש האינדקסים כל עוד אין כפול ביניהם"
    },
    {
     "text": "הבדיקה `a[mid] - a[low] == mid - low` מכריעה אם הכפול בקטע השמאלי או הימני",
     "points": 3,
     "html": "הבדיקה <code class=\"tok\" dir=\"ltr\">a[mid] - a[low] == mid - low</code> מכריעה אם הכפול בקטע השמאלי או הימני"
    },
    {
     "text": "שתי התוצאות מובילות לצמצום התחום ל-`(mid+1,high)` או ל-`(low,mid)`",
     "points": 1,
     "html": "שתי התוצאות מובילות לצמצום התחום ל-<code class=\"tok\" dir=\"ltr\">(mid+1,high)</code> או ל-<code class=\"tok\" dir=\"ltr\">(low,mid)</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לנמק רק \"חיפוש בינארי\" בלי להסביר איך ההשוואה מראה לאיזה צד ללכת.",
    "לבלבל בין שני הצדדים: שוויון ההפרשים אומר שהכפול בצד **ימין**."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מהי התכונה שבה משתמש הנימוק?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "בקטע בלי כפול ההפרש בין שני ערכים שווה להפרש האינדקסים שלהם",
       "html": "בקטע בלי כפול ההפרש בין שני ערכים שווה להפרש האינדקסים שלהם"
      },
      {
       "id": "b",
       "type": "text",
       "value": "המערך ממוין ולכן אפשר לחפש את הערך הכפול ישירות",
       "html": "המערך ממוין ולכן אפשר לחפש את הערך הכפול ישירות"
      },
      {
       "id": "c",
       "type": "text",
       "value": "הערך הכפול הוא תמיד באמצע המערך",
       "html": "הערך הכפול הוא תמיד באמצע המערך"
      },
      {
       "id": "d",
       "type": "text",
       "value": "סכום האיברים ידוע מראש",
       "html": "סכום האיברים ידוע מראש"
      }
     ],
     "correctId": "a",
     "explain": "כל איבר גדול ב-1 מקודמו, ולכן $a[mid]-a[low]=mid-low$ בדיוק כשאין כפול ב-`low..mid`.",
     "promptHtml": "מהי התכונה שבה משתמש הנימוק?",
     "explainHtml": "כל איבר גדול ב-1 מקודמו, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo stretchy=\"false\">[</mo><mi>m</mi><mi>i</mi><mi>d</mi><mo stretchy=\"false\">]</mo><mo>−</mo><mi>a</mi><mo stretchy=\"false\">[</mo><mi>l</mi><mi>o</mi><mi>w</mi><mo stretchy=\"false\">]</mo><mo>=</mo><mi>m</mi><mi>i</mi><mi>d</mi><mo>−</mo><mi>l</mi><mi>o</mi><mi>w</mi></mrow><annotation encoding=\"application/x-tex\">a[mid]-a[low]=mid-low</annotation></semantics></math></span> בדיוק כשאין כפול ב-<code class=\"tok\" dir=\"ltr\">low..mid</code>."
    },
    {
     "type": "order",
     "prompt": "סדרו את שלבי הנימוק.",
     "lines": [
      "כל איבר במערך גדול ב-1 מהאיבר הקודם, ולכן ההפרש בין האינדקסים שווה להפרש בין הערכים.",
      "לכן הבדיקה `a[mid] - a[low] == mid - low` קובעת אם הערך הכפול נמצא בחלק הימני של `mid` או בחלק השמאלי.",
      "אם התשובה היא כן, הקטע `(low,mid)` אינו מכיל את האיבר הכפול. במקרה כזה ממשיכים בחיפוש בינארי בחלק הימני `(mid+1,high)`. אם התשובה היא לא, מתמקדים בחיפוש בינארי בקטע `(low,mid)` של המערך."
     ],
     "explain": "קודם התכונה, אחר כך הבדיקה, ואז שני המקרים (הסדר ביניהם חופשי).",
     "promptHtml": "סדרו את שלבי הנימוק.",
     "explainHtml": "קודם התכונה, אחר כך הבדיקה, ואז שני המקרים (הסדר ביניהם חופשי).",
     "linesHtml": [
      "כל איבר במערך גדול ב-1 מהאיבר הקודם, ולכן ההפרש בין האינדקסים שווה להפרש בין הערכים.",
      "לכן הבדיקה <code class=\"tok\" dir=\"ltr\">a[mid] - a[low] == mid - low</code> קובעת אם הערך הכפול נמצא בחלק הימני של <code class=\"tok\" dir=\"ltr\">mid</code> או בחלק השמאלי.",
      "אם התשובה היא כן, הקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> אינו מכיל את האיבר הכפול. במקרה כזה ממשיכים בחיפוש בינארי בחלק הימני <code class=\"tok\" dir=\"ltr\">(mid+1,high)</code>. אם התשובה היא לא, מתמקדים בחיפוש בינארי בקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> של המערך."
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה של הנימוק משפט אחד שגוי. איזה?",
     "lines": [
      "כל איבר במערך גדול ב-1 מהאיבר הקודם, ולכן ההפרש בין האינדקסים שווה להפרש בין הערכים.",
      "לכן הבדיקה `a[mid] - a[low] == mid - low` קובעת אם הערך הכפול נמצא בחלק הימני של `mid` או בחלק השמאלי.",
      "אם התשובה היא כן, הקטע `(low,mid)` אינו מכיל את האיבר הכפול.",
      "במקרה כזה ממשיכים בחיפוש בינארי בחלק השמאלי `(low,mid)`.",
      "אם התשובה היא לא, מתמקדים בחיפוש בינארי בקטע `(low,mid)` של המערך."
     ],
     "bugIndex": 3,
     "explain": "אם הקטע `(low,mid)` ללא כפול, ממשיכים ימינה, בקטע `(mid+1,high)`, ולא שמאלה.",
     "promptHtml": "בגרסה הבאה של הנימוק משפט אחד שגוי. איזה?",
     "explainHtml": "אם הקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> ללא כפול, ממשיכים ימינה, בקטע <code class=\"tok\" dir=\"ltr\">(mid+1,high)</code>, ולא שמאלה.",
     "linesHtml": [
      "כל איבר במערך גדול ב-1 מהאיבר הקודם, ולכן ההפרש בין האינדקסים שווה להפרש בין הערכים.",
      "לכן הבדיקה <code class=\"tok\" dir=\"ltr\">a[mid] - a[low] == mid - low</code> קובעת אם הערך הכפול נמצא בחלק הימני של <code class=\"tok\" dir=\"ltr\">mid</code> או בחלק השמאלי.",
      "אם התשובה היא כן, הקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> אינו מכיל את האיבר הכפול.",
      "במקרה כזה ממשיכים בחיפוש בינארי בחלק השמאלי <code class=\"tok\" dir=\"ltr\">(low,mid)</code>.",
      "אם התשובה היא לא, מתמקדים בחיפוש בינארי בקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> של המערך."
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q4b",
   "partKey": "b",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "תנו <strong>נימוק</strong> קצר לנכונות הפונקציה.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 6, נימוק לפתרון הראשון <code class=\"tok\" dir=\"ltr\">FindDouble</code>): מאחר וכל איבר במערך <strong>גדול ב-1</strong> מהאיבר הקודם, ההפרש בין האינדקסים חייב להיות שווה להפרש בין האיברים.<br>לכן על ידי בדיקת התנאי <code class=\"tok\" dir=\"ltr\">if(a[mid] - a[low] == mid - low)</code> ניתן לדעת האם הערך הכפול במערך הוא בחלק הימני של <code class=\"tok\" dir=\"ltr\">mid</code> או בחלק השמאלי.<br>במידה והתשובה היא כן - הקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> אינו מכיל את האיבר הכפול שאנחנו מחפשים, ונמשיך חיפוש בינארי בחלק הימני <code class=\"tok\" dir=\"ltr\">(mid+1,high)</code>.<br>במידה ולא - נתמקד בחיפוש בינארי בקטע <code class=\"tok\" dir=\"ltr\">(low,mid)</code> של המערך.",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לנמק רק \"חיפוש בינארי\" בלי להסביר איך ההשוואה מראה לאיזה צד ללכת.",
    "לבלבל בין שני הצדדים: שוויון ההפרשים אומר שהכפול בצד <strong>ימין</strong>."
   ]
  },
  {
   "num": 5,
   "part": "א",
   "kind": "code",
   "topic": "matrices",
   "question": "**השלימו** את הפונקציה `Sudoku` אשר מקבלת מטריצה $A$ בגודל $R\\times C$ ובודקת האם קיימת בתוך $A$ תת-מטריצה בגודל 3x3 המקיימת את חוקי משחק הסודוקו. משחק הסודוקו דורש שתת-מטריצה בגודל 3x3 תכיל את כל המספרים בין 1 ל-9, ללא חזרות.\nלדוגמא:\n```\n1  12  8  11\n17  1  2   3\n2   8  7   6\n4   4  5   9\n```\n(תת-המטריצה המקיימת את החוקים מסומנת באפור בדוגמה המודפסת: `1 2 3 / 8 7 6 / 4 5 9`, שורות 1-3 ועמודות 1-3.)\nאם מטריצה $A$ מכילה תת-מטריצה המקיימת את חוקי הסודוקו על הפונקציה להחזיר `1`, אחרת - הפונקציה תחזיר `0`.\nהפונקציה `Sudoku` משתמשת במערך מונים `count` ובשתי פונקציות עזר: פונקציה `initializeCountArray` מאפסת את המערך `count`, והפונקציה `TestCount` בודקת איברים במערך `count` כדי לדעת האם תת-המטריצה מכילה את כל המספרים בין 1 ל-9, ללא חזרות.\nא. השלימו את הפונקציה `TestCount`:\n```c\nint TestCount(int *count)\n{\n        int i;\n        for (i = 1; i < 10; i++)\n\n                if (_____________________)\n\n                        ______________________;\n        return 0;\n}\n```",
   "solution": "**פתרון רשמי** (20A-A עמ' 7): התנאי `count[i] != 1`, ההוראה `return 0`, והפונקציה מסתיימת ב-`return 1;` (בעמוד הפתרון).\n```c\nint TestCount(int *count)\n{\n        int i;\n        for (i = 1; i < 10; i++)\n                if (count[i] != 1)\n                        return 0;\n        return 1;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c5",
   "rubric": [
    {
     "text": "לולאה על `i` מ-1 עד 9 (לא כוללת את 0)",
     "points": 2,
     "html": "לולאה על <code class=\"tok\" dir=\"ltr\">i</code> מ-1 עד 9 (לא כוללת את 0)"
    },
    {
     "text": "תנאי הכישלון `count[i] != 1`: ספרה חסרה או חוזרת",
     "points": 3,
     "html": "תנאי הכישלון <code class=\"tok\" dir=\"ltr\">count[i] != 1</code>: ספרה חסרה או חוזרת"
    },
    {
     "text": "`return 0` מיד כשהתנאי מתקיים",
     "points": 1,
     "html": "<code class=\"tok\" dir=\"ltr\">return 0</code> מיד כשהתנאי מתקיים"
    },
    {
     "text": "`return 1` בסוף כשכל הספרות 1..9 מופיעות בדיוק פעם אחת",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">return 1</code> בסוף כשכל הספרות 1..9 מופיעות בדיוק פעם אחת"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק גם את `count[0]`: חלון חוקי אינו מכיל 0.",
    "להסתפק בבדיקת `count[i] > 1`: חלון עם 0 ובלי 9 עובר בטעות.",
    "לשכוח את `return 1` בסוף הפונקציה."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `TestCount` כש-`count[1..9]` שווים כולם ל-1?",
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
       "value": "`9`",
       "html": "<code class=\"tok\" dir=\"ltr\">9</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "אינה מוגדרת",
       "html": "אינה מוגדרת"
      }
     ],
     "correctId": "a",
     "explain": "אף `count[i]` אינו שונה מ-1, והפונקציה מגיעה ל-`return 1` (ריצה אמיתית: 1).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">TestCount</code> כש-<code class=\"tok\" dir=\"ltr\">count[1..9]</code> שווים כולם ל-1?",
     "explainHtml": "אף <code class=\"tok\" dir=\"ltr\">count[i]</code> אינו שונה מ-1, והפונקציה מגיעה ל-<code class=\"tok\" dir=\"ltr\">return 1</code> (ריצה אמיתית: 1)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `TestCount` כש-`count[5] = 2` ו-`count[9] = 0` (והשאר 1)?",
     "answer": 0,
     "tol": 0,
     "explain": "כבר `count[5] != 1` מחזיר 0 (ריצה אמיתית: 0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">TestCount</code> כש-<code class=\"tok\" dir=\"ltr\">count[5] = 2</code> ו-<code class=\"tok\" dir=\"ltr\">count[9] = 0</code> (והשאר 1)?",
     "explainHtml": "כבר <code class=\"tok\" dir=\"ltr\">count[5] != 1</code> מחזיר 0 (ריצה אמיתית: 0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי.",
     "code": true,
     "lines": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i < 10; i++)",
      "___",
      "                        return 0;",
      "        return 1;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (count[i] != 1)",
       "html": "if (count[i] != 1)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (count[i] == 1)",
       "html": "if (count[i] == 1)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (count[i] > 1)",
       "html": "if (count[i] &gt; 1)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (i != 1)",
       "html": "if (i != 1)"
      }
     ],
     "correctId": "a",
     "explain": "ספרה שמופיעה אפס פעמים או יותר מפעם אחת פוסלת את החלון. `> 1` בלבד אינו מספיק: חלון עם 0 ובלי 9 עובר (ריצה אמיתית).",
     "promptHtml": "השלימו את התנאי.",
     "explainHtml": "ספרה שמופיעה אפס פעמים או יותר מפעם אחת פוסלת את החלון. <code class=\"tok\" dir=\"ltr\">&gt; 1</code> בלבד אינו מספיק: חלון עם 0 ובלי 9 עובר (ריצה אמיתית).",
     "linesHtml": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i &lt; 10; i++)",
      "___",
      "                        return 0;",
      "        return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות `TestCount`.",
     "code": true,
     "lines": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i < 10; i++)",
      "                if (count[i] != 1)",
      "                        return 0;",
      "        return 1;",
      "}"
     ],
     "explain": "לולאה על הספרות, פסילה בכישלון, ו-`return 1` בסוף.",
     "promptHtml": "סדרו את שורות <code class=\"tok\" dir=\"ltr\">TestCount</code>.",
     "explainHtml": "לולאה על הספרות, פסילה בכישלון, ו-<code class=\"tok\" dir=\"ltr\">return 1</code> בסוף.",
     "linesHtml": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i &lt; 10; i++)",
      "                if (count[i] != 1)",
      "                        return 0;",
      "        return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i < 10; i++)",
      "                if (count[i] == 1)",
      "                        return 0;",
      "        return 1;",
      "}"
     ],
     "bugIndex": 4,
     "explain": "עם `== 1` חלון חוקי נפסל מיד (`count` של כל 1 מחזיר 0, ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">== 1</code> חלון חוקי נפסל מיד (<code class=\"tok\" dir=\"ltr\">count</code> של כל 1 מחזיר 0, ריצה אמיתית).",
     "linesHtml": [
      "int TestCount(int *count)",
      "{",
      "        int i;",
      "        for (i = 1; i &lt; 10; i++)",
      "                if (count[i] == 1)",
      "                        return 0;",
      "        return 1;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q5a",
   "partKey": "a",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "<strong>השלימו</strong> את הפונקציה <code class=\"tok\" dir=\"ltr\">Sudoku</code> אשר מקבלת מטריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>×</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">R\\times C</annotation></semantics></math></span> ובודקת האם קיימת בתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> תת-מטריצה בגודל 3x3 המקיימת את חוקי משחק הסודוקו. משחק הסודוקו דורש שתת-מטריצה בגודל 3x3 תכיל את כל המספרים בין 1 ל-9, ללא חזרות.<br>לדוגמא:<pre class=\"code-block\" dir=\"ltr\"><code>1  12  8  11\n17  1  2   3\n2   8  7   6\n4   4  5   9</code></pre>(תת-המטריצה המקיימת את החוקים מסומנת באפור בדוגמה המודפסת: <code class=\"tok\" dir=\"ltr\">1 2 3 / 8 7 6 / 4 5 9</code>, שורות 1-3 ועמודות 1-3.)<br>אם מטריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מכילה תת-מטריצה המקיימת את חוקי הסודוקו על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">1</code>, אחרת - הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>.<br>הפונקציה <code class=\"tok\" dir=\"ltr\">Sudoku</code> משתמשת במערך מונים <code class=\"tok\" dir=\"ltr\">count</code> ובשתי פונקציות עזר: פונקציה <code class=\"tok\" dir=\"ltr\">initializeCountArray</code> מאפסת את המערך <code class=\"tok\" dir=\"ltr\">count</code>, והפונקציה <code class=\"tok\" dir=\"ltr\">TestCount</code> בודקת איברים במערך <code class=\"tok\" dir=\"ltr\">count</code> כדי לדעת האם תת-המטריצה מכילה את כל המספרים בין 1 ל-9, ללא חזרות.<br>א. השלימו את הפונקציה <code class=\"tok\" dir=\"ltr\">TestCount</code>:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int TestCount(int *count)\n{\n        int i;\n        for (i = 1; i &lt; 10; i++)\n\n                if (_____________________)\n\n                        ______________________;\n        return 0;\n}</code></pre>",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 7): התנאי <code class=\"tok\" dir=\"ltr\">count[i] != 1</code>, ההוראה <code class=\"tok\" dir=\"ltr\">return 0</code>, והפונקציה מסתיימת ב-<code class=\"tok\" dir=\"ltr\">return 1;</code> (בעמוד הפתרון).<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int TestCount(int *count)\n{\n        int i;\n        for (i = 1; i &lt; 10; i++)\n                if (count[i] != 1)\n                        return 0;\n        return 1;\n}</code></pre>",
   "pointsTotal": 8,
   "pitfallsHtml": [
    "לבדוק גם את <code class=\"tok\" dir=\"ltr\">count[0]</code>: חלון חוקי אינו מכיל 0.",
    "להסתפק בבדיקת <code class=\"tok\" dir=\"ltr\">count[i] &gt; 1</code>: חלון עם 0 ובלי 9 עובר בטעות.",
    "לשכוח את <code class=\"tok\" dir=\"ltr\">return 1</code> בסוף הפונקציה."
   ]
  },
  {
   "num": 5,
   "part": "ב",
   "kind": "code",
   "topic": "matrices",
   "question": "השלימו את הפונקציה `Sudoku` המשתמשת בשתי פונקציות העזר המוגדרות למעלה:\n```c\nint Sudoku(int mat[______][______])\n{\n        int count[10] = { 0 };\n        int rows,cols,i,j;\n\n        for(rows=0; rows<_______; rows++)\n        {\n                for (cols = 0; cols<________; cols++)\n                {\n                        ____________________________\n\n                        for (i = rows; i <= __________; i++)\n                        {\n                                for (j = cols; j <= _________; j++)\n                                {\n                                        count[_______________________] ++;\n                                }\n                        }\n                        if (__________________________________)\n\n                                ____________________;\n                }\n        }\n        return _________________;\n}\n```",
   "solution": "**פתרון רשמי** (20A-A עמ' 8): הפתרון מניח שכל האיברים בתוך המטריצה הם בטווח בין 0 ל-9.\nהכותרת יכולה להיות `int Sudoku(int mat[R][C])` או `int Sudoku(int mat[][C])`.\n```c\nint Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])\n{\n        int count[10] = { 0 };\n        int rows,cols,i,j;\n\n        for(rows=0; rows<R-2; rows++)\n        {\n                for (cols = 0; cols<C-2; cols++)\n                {\n                        initializeCountArray (count);\n                        for (i = rows; i <= rows + 2; i++)\n                        {\n                                for (j = cols; j <= cols + 2; j++)\n                                {\n                                        count[ mat[i][j] ] ++;\n                                }\n                        }\n                        if (TestCount(count))\n                                return 1;\n                }\n        }\n        return 0;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "contextId": "20A-A-c5",
   "rubric": [
    {
     "text": "גבולות הלולאות: `rows < R-2` ו-`cols < C-2` כך שחלון 3x3 נשאר בתוך המטריצה",
     "points": 6,
     "html": "גבולות הלולאות: <code class=\"tok\" dir=\"ltr\">rows &lt; R-2</code> ו-<code class=\"tok\" dir=\"ltr\">cols &lt; C-2</code> כך שחלון 3x3 נשאר בתוך המטריצה"
    },
    {
     "text": "איפוס `count` בכל חלון (`initializeCountArray`)",
     "points": 3,
     "html": "איפוס <code class=\"tok\" dir=\"ltr\">count</code> בכל חלון (<code class=\"tok\" dir=\"ltr\">initializeCountArray</code>)"
    },
    {
     "text": "ספירת 9 התאים של החלון: `i` מ-`rows` עד `rows + 2`, `j` מ-`cols` עד `cols + 2`, ו-`count[mat[i][j]]++`",
     "points": 6,
     "html": "ספירת 9 התאים של החלון: <code class=\"tok\" dir=\"ltr\">i</code> מ-<code class=\"tok\" dir=\"ltr\">rows</code> עד <code class=\"tok\" dir=\"ltr\">rows + 2</code>, <code class=\"tok\" dir=\"ltr\">j</code> מ-<code class=\"tok\" dir=\"ltr\">cols</code> עד <code class=\"tok\" dir=\"ltr\">cols + 2</code>, ו-<code class=\"tok\" dir=\"ltr\">count[mat[i][j]]++</code>"
    },
    {
     "text": "החזרת 1 כש-`TestCount` מצליחה, ו-0 אחרי שכל החלונות נבדקו",
     "points": 2,
     "html": "החזרת 1 כש-<code class=\"tok\" dir=\"ltr\">TestCount</code> מצליחה, ו-0 אחרי שכל החלונות נבדקו"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "גבול `R` במקום `R-2`: החלון יוצא מהמטריצה.",
    "לא לאפס את `count` בין חלונות, ולצבור ספירות מחלונות קודמים.",
    "להחזיר 0 מיד אחרי החלון הראשון הלא חוקי במקום להמשיך לחלון הבא."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "במטריצה עם $R=6$, $C=5$: כמה חלונות 3x3 הפונקציה בודקת?",
     "answer": 12,
     "tol": 0,
     "explain": "$(R-2)(C-2)=4\\cdot3=12$ (ריצה אמיתית: 12).",
     "promptHtml": "במטריצה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">R=6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">C=5</annotation></semantics></math></span>: כמה חלונות 3x3 הפונקציה בודקת?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>R</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>C</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">(R-2)(C-2)=4\\cdot3=12</annotation></semantics></math></span> (ריצה אמיתית: 12)."
    },
    {
     "type": "numeric",
     "prompt": "בחלון `1 2 3 / 8 7 6 / 4 5 5`: מהו `count[5]` אחרי הספירה?",
     "answer": 2,
     "tol": 0,
     "explain": "הספרה 5 מופיעה פעמיים (`count[9] = 0`), ולכן `TestCount` מחזירה 0 (ריצה אמיתית: 2 ו-0).",
     "promptHtml": "בחלון <code class=\"tok\" dir=\"ltr\">1 2 3 / 8 7 6 / 4 5 5</code>: מהו <code class=\"tok\" dir=\"ltr\">count[5]</code> אחרי הספירה?",
     "explainHtml": "הספרה 5 מופיעה פעמיים (<code class=\"tok\" dir=\"ltr\">count[9] = 0</code>), ולכן <code class=\"tok\" dir=\"ltr\">TestCount</code> מחזירה 0 (ריצה אמיתית: 2 ו-0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את כותרת הלולאה החיצונית.",
     "code": true,
     "lines": [
      "int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])",
      "{",
      "        int count[10] = { 0 };",
      "        int rows,cols,i,j;",
      "___",
      "        {",
      "                for (cols = 0; cols<C-2; cols++)",
      "                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i <= rows + 2; i++)",
      "                        {",
      "                                for (j = cols; j <= cols + 2; j++)",
      "                                {",
      "                                        count[ mat[i][j] ] ++;",
      "                                }",
      "                        }",
      "                        if (TestCount(count))",
      "                                return 1;",
      "                }",
      "        }",
      "        return 0;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "for(rows=0; rows<R-2; rows++)",
       "html": "for(rows=0; rows&lt;R-2; rows++)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "for(rows=0; rows<R-3; rows++)",
       "html": "for(rows=0; rows&lt;R-3; rows++)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "for(rows=0; rows<R-4; rows++)",
       "html": "for(rows=0; rows&lt;R-4; rows++)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "for(rows=0; rows<R/2; rows++)",
       "html": "for(rows=0; rows&lt;R/2; rows++)"
      }
     ],
     "correctId": "a",
     "explain": "חלון מתחיל בשורה `rows` ומסתיים ב-`rows + 2`, ולכן `rows` עד `R-3` כולל. כל אחד מהגבולות האחרים (`R-3`, `R-4`, `R/2`) מדלג על שורות התחלה אחרונות ומפספס חלון חוקי (ריצה אמיתית).",
     "promptHtml": "השלימו את כותרת הלולאה החיצונית.",
     "explainHtml": "חלון מתחיל בשורה <code class=\"tok\" dir=\"ltr\">rows</code> ומסתיים ב-<code class=\"tok\" dir=\"ltr\">rows + 2</code>, ולכן <code class=\"tok\" dir=\"ltr\">rows</code> עד <code class=\"tok\" dir=\"ltr\">R-3</code> כולל. כל אחד מהגבולות האחרים (<code class=\"tok\" dir=\"ltr\">R-3</code>, <code class=\"tok\" dir=\"ltr\">R-4</code>, <code class=\"tok\" dir=\"ltr\">R/2</code>) מדלג על שורות התחלה אחרונות ומפספס חלון חוקי (ריצה אמיתית).",
     "linesHtml": [
      "int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])",
      "{",
      "        int count[10] = { 0 };",
      "        int rows,cols,i,j;",
      "___",
      "        {",
      "                for (cols = 0; cols&lt;C-2; cols++)",
      "                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i &lt;= rows + 2; i++)",
      "                        {",
      "                                for (j = cols; j &lt;= cols + 2; j++)",
      "                                {",
      "                                        count[ mat[i][j] ] ++;",
      "                                }",
      "                        }",
      "                        if (TestCount(count))",
      "                                return 1;",
      "                }",
      "        }",
      "        return 0;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `Sudoku`.",
     "code": true,
     "lines": [
      "int Sudoku(int mat[R][C])\n{\n        int count[10] = { 0 }, rows, cols, i, j;",
      "        for(rows=0; rows<R-2; rows++)\n        {\n                for (cols = 0; cols<C-2; cols++)\n                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i <= rows + 2; i++)\n                        {\n                                for (j = cols; j <= cols + 2; j++)\n                                {\n                                        count[ mat[i][j] ] ++;\n                                }\n                        }",
      "                        if (TestCount(count))\n                                return 1;",
      "                }\n        }",
      "        return 0;\n}"
     ],
     "explain": "הצהרות, לולאות על פינת החלון, איפוס, ספירה, בדיקה, סגירת הלולאות, ובסוף `return 0`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">Sudoku</code>.",
     "explainHtml": "הצהרות, לולאות על פינת החלון, איפוס, ספירה, בדיקה, סגירת הלולאות, ובסוף <code class=\"tok\" dir=\"ltr\">return 0</code>.",
     "linesHtml": [
      "int Sudoku(int mat[R][C])\n{\n        int count[10] = { 0 }, rows, cols, i, j;",
      "        for(rows=0; rows&lt;R-2; rows++)\n        {\n                for (cols = 0; cols&lt;C-2; cols++)\n                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i &lt;= rows + 2; i++)\n                        {\n                                for (j = cols; j &lt;= cols + 2; j++)\n                                {\n                                        count[ mat[i][j] ] ++;\n                                }\n                        }",
      "                        if (TestCount(count))\n                                return 1;",
      "                }\n        }",
      "        return 0;\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])",
      "{",
      "        int count[10] = { 0 };",
      "        int rows,cols,i,j;",
      "        for(rows=0; rows<R-2; rows++)",
      "        {",
      "                for (cols = 0; cols<C-2; cols++)",
      "                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i <= rows + 1; i++)",
      "                        {",
      "                                for (j = cols; j <= cols + 2; j++)",
      "                                {",
      "                                        count[ mat[i][j] ] ++;",
      "                                }",
      "                        }",
      "                        if (TestCount(count))",
      "                                return 1;",
      "                }",
      "        }",
      "        return 0;",
      "}"
     ],
     "bugIndex": 9,
     "explain": "עם `rows + 1` נספרות רק שתי שורות (6 תאים), ו-`TestCount` לעולם לא מצליחה: על חלון חוקי מוחזר 0 (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">rows + 1</code> נספרות רק שתי שורות (6 תאים), ו-<code class=\"tok\" dir=\"ltr\">TestCount</code> לעולם לא מצליחה: על חלון חוקי מוחזר 0 (ריצה אמיתית).",
     "linesHtml": [
      "int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])",
      "{",
      "        int count[10] = { 0 };",
      "        int rows,cols,i,j;",
      "        for(rows=0; rows&lt;R-2; rows++)",
      "        {",
      "                for (cols = 0; cols&lt;C-2; cols++)",
      "                {",
      "                        initializeCountArray (count);",
      "                        for (i = rows; i &lt;= rows + 1; i++)",
      "                        {",
      "                                for (j = cols; j &lt;= cols + 2; j++)",
      "                                {",
      "                                        count[ mat[i][j] ] ++;",
      "                                }",
      "                        }",
      "                        if (TestCount(count))",
      "                                return 1;",
      "                }",
      "        }",
      "        return 0;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "20A-A-Q5b",
   "partKey": "b",
   "examCode": "20A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
   "year": 2020,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "השלימו את הפונקציה <code class=\"tok\" dir=\"ltr\">Sudoku</code> המשתמשת בשתי פונקציות העזר המוגדרות למעלה:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int Sudoku(int mat[______][______])\n{\n        int count[10] = { 0 };\n        int rows,cols,i,j;\n\n        for(rows=0; rows&lt;_______; rows++)\n        {\n                for (cols = 0; cols&lt;________; cols++)\n                {\n                        ____________________________\n\n                        for (i = rows; i &lt;= __________; i++)\n                        {\n                                for (j = cols; j &lt;= _________; j++)\n                                {\n                                        count[_______________________] ++;\n                                }\n                        }\n                        if (__________________________________)\n\n                                ____________________;\n                }\n        }\n        return _________________;\n}</code></pre>",
   "solutionHtml": "<strong>פתרון רשמי</strong> (20A-A עמ' 8): הפתרון מניח שכל האיברים בתוך המטריצה הם בטווח בין 0 ל-9.<br>הכותרת יכולה להיות <code class=\"tok\" dir=\"ltr\">int Sudoku(int mat[R][C])</code> או <code class=\"tok\" dir=\"ltr\">int Sudoku(int mat[][C])</code>.<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])\n{\n        int count[10] = { 0 };\n        int rows,cols,i,j;\n\n        for(rows=0; rows&lt;R-2; rows++)\n        {\n                for (cols = 0; cols&lt;C-2; cols++)\n                {\n                        initializeCountArray (count);\n                        for (i = rows; i &lt;= rows + 2; i++)\n                        {\n                                for (j = cols; j &lt;= cols + 2; j++)\n                                {\n                                        count[ mat[i][j] ] ++;\n                                }\n                        }\n                        if (TestCount(count))\n                                return 1;\n                }\n        }\n        return 0;\n}</code></pre>",
   "pointsTotal": 17,
   "pitfallsHtml": [
    "גבול <code class=\"tok\" dir=\"ltr\">R</code> במקום <code class=\"tok\" dir=\"ltr\">R-2</code>: החלון יוצא מהמטריצה.",
    "לא לאפס את <code class=\"tok\" dir=\"ltr\">count</code> בין חלונות, ולצבור ספירות מחלונות קודמים.",
    "להחזיר 0 מיד אחרי החלון הראשון הלא חוקי במקום להמשיך לחלון הבא."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "structs",
   "question": "נגדיר **מבנה** המכיל \"מספר מעורב\" כלומר מספר שלם שאחריו שבר (שערכו קטן מ-1).\nהמבנה יהיה בעל שלושה שדות: מספר (`num`), מונה (`numerator`), ומכנה (`denominator`).\n```c\ntypedef struct {\n    int num, numerator, denominator;\n}Fraction;\n```\nכך לדוגמא המספר $3\\frac{2}{3}$ ירשם 3 בשדה המספר, 2 בשדה המונה ו-3 בשדה המכנה.\nהמספר $\\frac{3}{5}$ ירשם 0 בשדה המספר, 3 בשדה המונה ו-5 בשדה המכנה.\nעליכם לכתוב את הפונקציה המקבלת מערך של מספרים מעורבים (מבנים) **לא שליליים** וגודלו.\nהפונקציה תחזיר מספר מעורב (מבנה) שהוא המספר המעורב **הגדול ביותר** במערך.\nלדוגמא אם המערך מכיל את האיברים הבאים $[2\\frac{3}{4}, 5\\frac{3}{4}, 3\\frac{1}{5}, 2\\frac{7}{8}, 5\\frac{1}{2}]$ הפונקציה תחזיר $5\\frac{3}{4}$ כמספר מעורב (מבנה).\nחישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא גודל המערך.",
   "solution": "**פתרון רשמי** (22A-A עמ' 1):\n```c\nFraction findBiggest(Fraction *pSArray, int size)\n{\n    int i;\n    Fraction max_result = pSArray[0];\n\n    for (i = 1; i < size; i++)\n    {\n        if (pSArray[i].num > max_result.num)\n            max_result = pSArray[i];\n        else if (pSArray[i].num == max_result.num)\n        {\n            //if (((double)pSArray[i].numerator / pSArray[i].mechane) >\n            //((double)res.numerator / res.mechane)) - גרסה שנייה\n    if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)\n                max_result = pSArray[i];\n        }\n    }\n\n    return max_result;\n}\n```\nסורקים פעם אחת ושומרים את המקסימום עד כה. קודם משווים את החלק השלם; כשהחלקים השלמים שווים משווים את השברים בכפל צולב כדי להימנע משברים עשרוניים. סריקה אחת, כלומר $O(n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "rubric": [
    {
     "text": "אתחול המקסימום באיבר הראשון וסריקה אחת מהאיבר השני עד הסוף",
     "points": 6,
     "html": "אתחול המקסימום באיבר הראשון וסריקה אחת מהאיבר השני עד הסוף"
    },
    {
     "text": "השוואת החלק השלם `num`: איבר עם חלק שלם גדול יותר הופך למקסימום",
     "points": 6,
     "html": "השוואת החלק השלם <code class=\"tok\" dir=\"ltr\">num</code>: איבר עם חלק שלם גדול יותר הופך למקסימום"
    },
    {
     "text": "כשהחלקים השלמים שווים: השוואת השברים בכפל צולב `numerator * denominator` בלי חילוק",
     "points": 8,
     "html": "כשהחלקים השלמים שווים: השוואת השברים בכפל צולב <code class=\"tok\" dir=\"ltr\">numerator * denominator</code> בלי חילוק"
    },
    {
     "text": "החזרת המבנה המקסימלי; סריקה אחת בלבד, כלומר $O(n)$",
     "points": 5,
     "html": "החזרת המבנה המקסימלי; סריקה אחת בלבד, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשוות רק את `num` ולהתעלם משברים כשהחלק השלם שווה.",
    "להשוות מונים בלבד (`numerator`) או מכפלות `numerator * denominator`: שתי ההשוואות שגויות בין מכנים שונים.",
    "לחשב שברים עשרוניים עם חילוק שלם (`numerator / denominator` נותן 0)."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה הפונקציה על המערך $[2\\frac{3}{4},5\\frac{3}{4},3\\frac{1}{5},2\\frac{7}{8},5\\frac{1}{2}]$?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`5 3/4`",
       "html": "<code class=\"tok\" dir=\"ltr\">5 3/4</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`5 1/2`",
       "html": "<code class=\"tok\" dir=\"ltr\">5 1/2</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`3 1/5`",
       "html": "<code class=\"tok\" dir=\"ltr\">3 1/5</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`2 7/8`",
       "html": "<code class=\"tok\" dir=\"ltr\">2 7/8</code>"
      }
     ],
     "correctId": "a",
     "explain": "שני האיברים עם החלק השלם 5 מושווים בכפל צולב: $3\\cdot2>1\\cdot4$, ולכן $5\\frac{3}{4}$ (ריצה אמיתית: 5 3/4).",
     "promptHtml": "מה מחזירה הפונקציה על המערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>2</mn><mfrac><mn>3</mn><mn>4</mn></mfrac><mo separator=\"true\">,</mo><mn>5</mn><mfrac><mn>3</mn><mn>4</mn></mfrac><mo separator=\"true\">,</mo><mn>3</mn><mfrac><mn>1</mn><mn>5</mn></mfrac><mo separator=\"true\">,</mo><mn>2</mn><mfrac><mn>7</mn><mn>8</mn></mfrac><mo separator=\"true\">,</mo><mn>5</mn><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[2\\frac{3}{4},5\\frac{3}{4},3\\frac{1}{5},2\\frac{7}{8},5\\frac{1}{2}]</annotation></semantics></math></span>?",
     "explainHtml": "שני האיברים עם החלק השלם 5 מושווים בכפל צולב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>&gt;</mo><mn>1</mn><mo>⋅</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot2&gt;1\\cdot4</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">5\\frac{3}{4}</annotation></semantics></math></span> (ריצה אמיתית: 5 3/4)."
    },
    {
     "type": "numeric",
     "prompt": "משווים $1\\frac{2}{3}$ (`pSArray[i]`) מול $1\\frac{1}{2}$ (המקסימום הנוכחי). מהו `pSArray[i].numerator * max_result.denominator`?",
     "answer": 4,
     "tol": 0,
     "explain": "$2\\cdot2=4$ מול $1\\cdot3=3$ בצד השני, ולכן $1\\frac{2}{3}$ גדול יותר (ריצה אמיתית: 1 2/3 נבחר).",
     "promptHtml": "משווים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">1\\frac{2}{3}</annotation></semantics></math></span> (<code class=\"tok\" dir=\"ltr\">pSArray[i]</code>) מול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">1\\frac{1}{2}</annotation></semantics></math></span> (המקסימום הנוכחי). מהו <code class=\"tok\" dir=\"ltr\">pSArray[i].numerator * max_result.denominator</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot2=4</annotation></semantics></math></span> מול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1\\cdot3=3</annotation></semantics></math></span> בצד השני, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">1\\frac{2}{3}</annotation></semantics></math></span> גדול יותר (ריצה אמיתית: 1 2/3 נבחר)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי ההשוואה בין שני מספרים עם אותו חלק שלם.",
     "code": true,
     "lines": [
      "Fraction findBiggest(Fraction *pSArray, int size)",
      "{",
      "    int i;",
      "    Fraction max_result = pSArray[0];",
      "    for (i = 1; i < size; i++)",
      "    {",
      "        if (pSArray[i].num > max_result.num)",
      "            max_result = pSArray[i];",
      "        else if (pSArray[i].num == max_result.num)",
      "        {",
      "___",
      "                max_result = pSArray[i];",
      "        }",
      "    }",
      "    return max_result;",
      "}"
     ],
     "blankIndex": 10,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)",
       "html": "if(pSArray[i].numerator * max_result.denominator&gt;max_result.numerator*pSArray[i].denominator)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if(pSArray[i].numerator * max_result.denominator<max_result.numerator*pSArray[i].denominator)",
       "html": "if(pSArray[i].numerator * max_result.denominator&lt;max_result.numerator*pSArray[i].denominator)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if(pSArray[i].numerator>max_result.numerator)",
       "html": "if(pSArray[i].numerator&gt;max_result.numerator)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if(pSArray[i].numerator * pSArray[i].denominator>max_result.numerator*max_result.denominator)",
       "html": "if(pSArray[i].numerator * pSArray[i].denominator&gt;max_result.numerator*max_result.denominator)"
      }
     ],
     "correctId": "a",
     "explain": "כפל צולב משווה שברים. `<` בוחר את הקטן יותר (שגוי ב-8830 מ-20000 זוגות אקראיים), מונים בלבד שגוי כשהמכנים שונים (950), ומכפלת מונה כפול מכנה שגויה (1533).",
     "promptHtml": "השלימו את תנאי ההשוואה בין שני מספרים עם אותו חלק שלם.",
     "explainHtml": "כפל צולב משווה שברים. <code class=\"tok\" dir=\"ltr\">&lt;</code> בוחר את הקטן יותר (שגוי ב-8830 מ-20000 זוגות אקראיים), מונים בלבד שגוי כשהמכנים שונים (950), ומכפלת מונה כפול מכנה שגויה (1533).",
     "linesHtml": [
      "Fraction findBiggest(Fraction *pSArray, int size)",
      "{",
      "    int i;",
      "    Fraction max_result = pSArray[0];",
      "    for (i = 1; i &lt; size; i++)",
      "    {",
      "        if (pSArray[i].num &gt; max_result.num)",
      "            max_result = pSArray[i];",
      "        else if (pSArray[i].num == max_result.num)",
      "        {",
      "___",
      "                max_result = pSArray[i];",
      "        }",
      "    }",
      "    return max_result;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `findBiggest` (בלי שורות ההערה).",
     "code": true,
     "lines": [
      "Fraction findBiggest(Fraction *pSArray, int size)\n{\n    int i;\n    Fraction max_result = pSArray[0];",
      "    for (i = 1; i < size; i++)\n    {",
      "        if (pSArray[i].num > max_result.num)\n            max_result = pSArray[i];\n        else if (pSArray[i].num == max_result.num)\n        {\n    if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)\n                max_result = pSArray[i];\n        }",
      "    }\n    return max_result;\n}"
     ],
     "explain": "אתחול (שתי ההצהרות יחד), כותרת הלולאה, שרשרת ההשוואות (חלק שלם ואז כפל צולב), וסגירה עם ההחזרה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">findBiggest</code> (בלי שורות ההערה).",
     "explainHtml": "אתחול (שתי ההצהרות יחד), כותרת הלולאה, שרשרת ההשוואות (חלק שלם ואז כפל צולב), וסגירה עם ההחזרה.",
     "linesHtml": [
      "Fraction findBiggest(Fraction *pSArray, int size)\n{\n    int i;\n    Fraction max_result = pSArray[0];",
      "    for (i = 1; i &lt; size; i++)\n    {",
      "        if (pSArray[i].num &gt; max_result.num)\n            max_result = pSArray[i];\n        else if (pSArray[i].num == max_result.num)\n        {\n    if(pSArray[i].numerator * max_result.denominator&gt;max_result.numerator*pSArray[i].denominator)\n                max_result = pSArray[i];\n        }",
      "    }\n    return max_result;\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "Fraction findBiggest(Fraction *pSArray, int size)",
      "{",
      "    int i;",
      "    Fraction max_result = pSArray[0];",
      "    for (i = 1; i < size; i++)",
      "    {",
      "        if (pSArray[i].num < max_result.num)",
      "            max_result = pSArray[i];",
      "        else if (pSArray[i].num == max_result.num)",
      "        {",
      "    if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)",
      "                max_result = pSArray[i];",
      "        }",
      "    }",
      "    return max_result;",
      "}"
     ],
     "bugIndex": 6,
     "explain": "עם `<` נבחר החלק השלם הקטן יותר: על מערך הדוגמה מוחזר $2\\frac{7}{8}$ במקום $5\\frac{3}{4}$ (ריצה אמיתית: 2 7/8).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&lt;</code> נבחר החלק השלם הקטן יותר: על מערך הדוגמה מוחזר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mfrac><mn>7</mn><mn>8</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">2\\frac{7}{8}</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">5\\frac{3}{4}</annotation></semantics></math></span> (ריצה אמיתית: 2 7/8).",
     "linesHtml": [
      "Fraction findBiggest(Fraction *pSArray, int size)",
      "{",
      "    int i;",
      "    Fraction max_result = pSArray[0];",
      "    for (i = 1; i &lt; size; i++)",
      "    {",
      "        if (pSArray[i].num &lt; max_result.num)",
      "            max_result = pSArray[i];",
      "        else if (pSArray[i].num == max_result.num)",
      "        {",
      "    if(pSArray[i].numerator * max_result.denominator&gt;max_result.numerator*pSArray[i].denominator)",
      "                max_result = pSArray[i];",
      "        }",
      "    }",
      "    return max_result;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-A-Q1",
   "partKey": "",
   "examCode": "22A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מבנים",
   "questionHtml": "נגדיר <strong>מבנה</strong> המכיל \"מספר מעורב\" כלומר מספר שלם שאחריו שבר (שערכו קטן מ-1).<br>המבנה יהיה בעל שלושה שדות: מספר (<code class=\"tok\" dir=\"ltr\">num</code>), מונה (<code class=\"tok\" dir=\"ltr\">numerator</code>), ומכנה (<code class=\"tok\" dir=\"ltr\">denominator</code>).<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>typedef struct {\n    int num, numerator, denominator;\n}Fraction;</code></pre>כך לדוגמא המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">3\\frac{2}{3}</annotation></semantics></math></span> ירשם 3 בשדה המספר, 2 בשדה המונה ו-3 בשדה המכנה.<br>המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{3}{5}</annotation></semantics></math></span> ירשם 0 בשדה המספר, 3 בשדה המונה ו-5 בשדה המכנה.<br>עליכם לכתוב את הפונקציה המקבלת מערך של מספרים מעורבים (מבנים) <strong>לא שליליים</strong> וגודלו.<br>הפונקציה תחזיר מספר מעורב (מבנה) שהוא המספר המעורב <strong>הגדול ביותר</strong> במערך.<br>לדוגמא אם המערך מכיל את האיברים הבאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>2</mn><mfrac><mn>3</mn><mn>4</mn></mfrac><mo separator=\"true\">,</mo><mn>5</mn><mfrac><mn>3</mn><mn>4</mn></mfrac><mo separator=\"true\">,</mo><mn>3</mn><mfrac><mn>1</mn><mn>5</mn></mfrac><mo separator=\"true\">,</mo><mn>2</mn><mfrac><mn>7</mn><mn>8</mn></mfrac><mo separator=\"true\">,</mo><mn>5</mn><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[2\\frac{3}{4}, 5\\frac{3}{4}, 3\\frac{1}{5}, 2\\frac{7}{8}, 5\\frac{1}{2}]</annotation></semantics></math></span> הפונקציה תחזיר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">5\\frac{3}{4}</annotation></semantics></math></span> כמספר מעורב (מבנה).<br>חישוב הפונקציה צריך להתבצע <strong>בסדר גודל של n</strong>, כאשר n הוא גודל המערך.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-A עמ' 1):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>Fraction findBiggest(Fraction *pSArray, int size)\n{\n    int i;\n    Fraction max_result = pSArray[0];\n\n    for (i = 1; i &lt; size; i++)\n    {\n        if (pSArray[i].num &gt; max_result.num)\n            max_result = pSArray[i];\n        else if (pSArray[i].num == max_result.num)\n        {\n            //if (((double)pSArray[i].numerator / pSArray[i].mechane) &gt;\n            //((double)res.numerator / res.mechane)) - גרסה שנייה\n    if(pSArray[i].numerator * max_result.denominator&gt;max_result.numerator*pSArray[i].denominator)\n                max_result = pSArray[i];\n        }\n    }\n\n    return max_result;\n}</code></pre>סורקים פעם אחת ושומרים את המקסימום עד כה. קודם משווים את החלק השלם; כשהחלקים השלמים שווים משווים את השברים בכפל צולב כדי להימנע משברים עשרוניים. סריקה אחת, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "להשוות רק את <code class=\"tok\" dir=\"ltr\">num</code> ולהתעלם משברים כשהחלק השלם שווה.",
    "להשוות מונים בלבד (<code class=\"tok\" dir=\"ltr\">numerator</code>) או מכפלות <code class=\"tok\" dir=\"ltr\">numerator * denominator</code>: שתי ההשוואות שגויות בין מכנים שונים.",
    "לחשב שברים עשרוניים עם חילוק שלם (<code class=\"tok\" dir=\"ltr\">numerator / denominator</code> נותן 0)."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** שמקבלת מערך `a` של מספרים שלמים וגודלו `n`.\nעל הפונקציה להחזיר את הגודל של תת-הסדרה רציפה **עולה ממש** ($a_i < a_{i+1}$) הכי ארוכה שמתחילה במקום הראשון במערך (מ-$a_0$).\nעבור מערך בגודל 1 על הפונקציה להחזיר 1.\nלדוגמא:\nעבור המערך `-5,-2,12,12,25,34,40` על הפונקציה להחזיר 3 (3 האיברים הראשונים הם תת-סדרה רציפה עולה ממש הכי ארוכה שמתחילה ב-`-5`).\nעבור המערך `-5,-5,12,10,25,34,40` על הפונקציה להחזיר 1 (כי `-5 = -5`).\nעבור המערך `12,10,25,34,40` על הפונקציה להחזיר 1.",
   "solution": "**פתרון רשמי** (22A-A עמ' 2):\n```c\nint incr_subarray(int * a, int n)\n{\n    if (n == 1)\n        return 1;\n    if (a[0] < a[1])\n        return 1 + incr_subarray(a + 1, n - 1);\n    else\n        return 1;\n}\n```\nמקרה בסיס: מערך בגודל 1 מחזיר 1. אם `a[0] < a[1]` הרצף ממשיך ומוסיפים 1 לתשובה של שאר המערך (`a + 1`, `n - 1`); אחרת הרצף נעצר ומחזירים 1.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "rubric": [
    {
     "text": "מקרה בסיס: `n == 1` מחזיר `1`",
     "points": 5,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">n == 1</code> מחזיר <code class=\"tok\" dir=\"ltr\">1</code>"
    },
    {
     "text": "השוואה ממש בין שני האיברים הראשונים: `a[0] < a[1]`",
     "points": 8,
     "html": "השוואה ממש בין שני האיברים הראשונים: <code class=\"tok\" dir=\"ltr\">a[0] &lt; a[1]</code>"
    },
    {
     "text": "כשהרצף ממשיך: `1 + incr_subarray(a + 1, n - 1)`",
     "points": 8,
     "html": "כשהרצף ממשיך: <code class=\"tok\" dir=\"ltr\">1 + incr_subarray(a + 1, n - 1)</code>"
    },
    {
     "text": "אחרת הרצף נעצר ומחזירים `1`",
     "points": 4,
     "html": "אחרת הרצף נעצר ומחזירים <code class=\"tok\" dir=\"ltr\">1</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש ב-`<=` במקום `<`: הרצף חייב להיות עולה **ממש**.",
    "לשכוח את מקרה הבסיס ולגשת ל-`a[1]` מעבר לסוף המערך.",
    "להחזיר את הקריאה הרקורסיבית בלי `1 +`, או לקרוא עם `a` במקום `a + 1`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `incr_subarray` על `-5,-2,12,12,25,34,40` (`n = 7`)?",
     "answer": 3,
     "tol": 0,
     "explain": "`-5 < -2 < 12`, ואז `12 < 12` שקר: אורך 3 (ריצה אמיתית: 3).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">incr_subarray</code> על <code class=\"tok\" dir=\"ltr\">-5,-2,12,12,25,34,40</code> (<code class=\"tok\" dir=\"ltr\">n = 7</code>)?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">-5 &lt; -2 &lt; 12</code>, ואז <code class=\"tok\" dir=\"ltr\">12 &lt; 12</code> שקר: אורך 3 (ריצה אמיתית: 3)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה על `1,2,3,4,5,5` (`n = 6`)?",
     "answer": 5,
     "tol": 0,
     "explain": "חמש הצעדים הראשונים עולים ממש, והזוג `5,5` עוצר את הרצף (ריצה אמיתית: 5).",
     "promptHtml": "מה מחזירה על <code class=\"tok\" dir=\"ltr\">1,2,3,4,5,5</code> (<code class=\"tok\" dir=\"ltr\">n = 6</code>)?",
     "explainHtml": "חמש הצעדים הראשונים עולים ממש, והזוג <code class=\"tok\" dir=\"ltr\">5,5</code> עוצר את הרצף (ריצה אמיתית: 5)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הענף שבו הרצף ממשיך.",
     "code": true,
     "lines": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] < a[1])",
      "___",
      "    else",
      "        return 1;",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return 1 + incr_subarray(a + 1, n - 1);",
       "html": "return 1 + incr_subarray(a + 1, n - 1);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return incr_subarray(a + 1, n - 1);",
       "html": "return incr_subarray(a + 1, n - 1);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return 1 + incr_subarray(a, n - 1);",
       "html": "return 1 + incr_subarray(a, n - 1);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return 2 + incr_subarray(a + 1, n - 1);",
       "html": "return 2 + incr_subarray(a + 1, n - 1);"
      }
     ],
     "correctId": "a",
     "explain": "מוסיפים 1 על האיבר הנוכחי וממשיכים מהאיבר הבא עם מערך קצר באחד.",
     "promptHtml": "השלימו את הענף שבו הרצף ממשיך.",
     "explainHtml": "מוסיפים 1 על האיבר הנוכחי וממשיכים מהאיבר הבא עם מערך קצר באחד.",
     "linesHtml": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] &lt; a[1])",
      "___",
      "    else",
      "        return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `incr_subarray`.",
     "code": true,
     "lines": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] < a[1])",
      "        return 1 + incr_subarray(a + 1, n - 1);",
      "    else",
      "        return 1;",
      "}"
     ],
     "explain": "מקרה בסיס, בדיקת העלייה, המשך הרצף ואחרת עצירה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">incr_subarray</code>.",
     "explainHtml": "מקרה בסיס, בדיקת העלייה, המשך הרצף ואחרת עצירה.",
     "linesHtml": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] &lt; a[1])",
      "        return 1 + incr_subarray(a + 1, n - 1);",
      "    else",
      "        return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] <= a[1])",
      "        return 1 + incr_subarray(a + 1, n - 1);",
      "    else",
      "        return 1;",
      "}"
     ],
     "bugIndex": 4,
     "explain": "עם `<=` זוג שווה נחשב כעלייה: על `-5,-5,12,10,...` מוחזר 3 במקום 1 (ריצה אמיתית: 3).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&lt;=</code> זוג שווה נחשב כעלייה: על <code class=\"tok\" dir=\"ltr\">-5,-5,12,10,...</code> מוחזר 3 במקום 1 (ריצה אמיתית: 3).",
     "linesHtml": [
      "int incr_subarray(int * a, int n)",
      "{",
      "    if (n == 1)",
      "        return 1;",
      "    if (a[0] &lt;= a[1])",
      "        return 1 + incr_subarray(a + 1, n - 1);",
      "    else",
      "        return 1;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-A-Q2",
   "partKey": "",
   "examCode": "22A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> שמקבלת מערך <code class=\"tok\" dir=\"ltr\">a</code> של מספרים שלמים וגודלו <code class=\"tok\" dir=\"ltr\">n</code>.<br>על הפונקציה להחזיר את הגודל של תת-הסדרה רציפה <strong>עולה ממש</strong> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mi>i</mi></msub><mo>&lt;</mo><msub><mi>a</mi><mrow><mi>i</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><annotation encoding=\"application/x-tex\">a_i &lt; a_{i+1}</annotation></semantics></math></span>) הכי ארוכה שמתחילה במקום הראשון במערך (מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>a</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">a_0</annotation></semantics></math></span>).<br>עבור מערך בגודל 1 על הפונקציה להחזיר 1.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">-5,-2,12,12,25,34,40</code> על הפונקציה להחזיר 3 (3 האיברים הראשונים הם תת-סדרה רציפה עולה ממש הכי ארוכה שמתחילה ב-<code class=\"tok\" dir=\"ltr\">-5</code>).<br>עבור המערך <code class=\"tok\" dir=\"ltr\">-5,-5,12,10,25,34,40</code> על הפונקציה להחזיר 1 (כי <code class=\"tok\" dir=\"ltr\">-5 = -5</code>).<br>עבור המערך <code class=\"tok\" dir=\"ltr\">12,10,25,34,40</code> על הפונקציה להחזיר 1.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-A עמ' 2):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int incr_subarray(int * a, int n)\n{\n    if (n == 1)\n        return 1;\n    if (a[0] &lt; a[1])\n        return 1 + incr_subarray(a + 1, n - 1);\n    else\n        return 1;\n}</code></pre>מקרה בסיס: מערך בגודל 1 מחזיר 1. אם <code class=\"tok\" dir=\"ltr\">a[0] &lt; a[1]</code> הרצף ממשיך ומוסיפים 1 לתשובה של שאר המערך (<code class=\"tok\" dir=\"ltr\">a + 1</code>, <code class=\"tok\" dir=\"ltr\">n - 1</code>); אחרת הרצף נעצר ומחזירים 1.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "להשתמש ב-<code class=\"tok\" dir=\"ltr\">&lt;=</code> במקום <code class=\"tok\" dir=\"ltr\">&lt;</code>: הרצף חייב להיות עולה <strong>ממש</strong>.",
    "לשכוח את מקרה הבסיס ולגשת ל-<code class=\"tok\" dir=\"ltr\">a[1]</code> מעבר לסוף המערך.",
    "להחזיר את הקריאה הרקורסיבית בלי <code class=\"tok\" dir=\"ltr\">1 +</code>, או לקרוא עם <code class=\"tok\" dir=\"ltr\">a</code> במקום <code class=\"tok\" dir=\"ltr\">a + 1</code>."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "strings",
   "question": "כתבו פונקציה `void removeDuplicates (char *str)` שמקבלת מחרוזת של אותיות קטנות באנגלית בשם `str`.\nהפונקציה צריכה להשאיר במחרוזת את כל האותיות שמופיעות בה בפעם הראשונה, ולמחוק את כל האותיות שחוזרות על עצמן (להוציא אותן מהמחרוזת).\nהניחו שהקלט תקין.\nלדוגמא, הפונקציה הופכת את המחרוזת \"**bla**blab**h**\" למחרוזת \"**blah**\".\nחישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא אורך המחרוזת.\nהפונקציה יכולה להשתמש במערך עזר.",
   "solution": "**פתרון רשמי** (22A-A עמ' 3), גרסה ראשונה:\n```c\nvoid removeDuplicates(char *str) {\n\n    char *last=str;\n\n    int count[26] = { 0 };\n\n    while (*str)\n    {\n        if (count[(*str) - 'a'] == 0)\n        {\n            count[(*str) - 'a']=1;\n            *last = *str;\n            last++;\n        }\n        str++;\n    }\n\n    *last = '\\0';\n}\n```\n**גרסה שנייה** (כפי שמופיעה בפתרון הרשמי):\n```c\nvoid removeDuplicates(char *s) {\n\n    int i, newLast;\n\n    int count[26] = { 0 };\n\n    for (i = 0, newLast = 0; s[i]; i++)\n        if (count[s[i] - 'A']++ == 0)\n            s[newLast++] = s[i];\n\n    s[newLast] = '\\0';\n}\n```\nמערך עזר של 26 מונים מסמן אילו אותיות כבר נראו. סורקים את המחרוזת פעם אחת וכותבים לאחור רק אות שנראית לראשונה, ובסוף שמים `'\\0'`. סריקה אחת, כלומר $O(n)$.\n**הערה:** בגרסה השנייה האינדקס הוא `s[i] - 'A'` ולא `s[i] - 'a'`; עבור אותיות קטנות זה אינדקס 32 ומעלה במערך בגודל 26, כלומר גישה מחוץ לגבולות. הגרסה הראשונה תקינה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "rubric": [
    {
     "text": "מערך עזר של 26 מונים שמסמן אילו אותיות כבר נראו",
     "points": 5,
     "html": "מערך עזר של 26 מונים שמסמן אילו אותיות כבר נראו"
    },
    {
     "text": "סריקה אחת של המחרוזת ובדיקה `count[...] == 0` לפני הכתיבה",
     "points": 7,
     "html": "סריקה אחת של המחרוזת ובדיקה <code class=\"tok\" dir=\"ltr\">count[...] == 0</code> לפני הכתיבה"
    },
    {
     "text": "כתיבה לאחור עם מצביע `last` שמתקדם רק כשנשמרת אות, ועדכון המונה",
     "points": 7,
     "html": "כתיבה לאחור עם מצביע <code class=\"tok\" dir=\"ltr\">last</code> שמתקדם רק כשנשמרת אות, ועדכון המונה"
    },
    {
     "text": "סגירת המחרוזת עם `'\\0'` בסוף",
     "points": 4,
     "html": "סגירת המחרוזת עם <code class=\"tok\" dir=\"ltr\">'\\0'</code> בסוף"
    },
    {
     "text": "זמן $O(n)$ וללא מערך נוסף בגודל המחרוזת",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> וללא מערך נוסף בגודל המחרוזת"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "חיפוש האות בכל פעם במחרוזת שנבנתה עד כה: זמן $O(n^2)$ ולא $O(n)$.",
    "לשכוח את `'\\0'` בסוף ולהשאיר זנב של אותיות ישנות.",
    "אינדקס `*str - 'A'` עבור אותיות קטנות יוצא מגבולות המערך בגודל 26."
   ],
   "steps": [
    {
     "type": "text",
     "prompt": "מה תהיה המחרוזת אחרי `removeDuplicates` על `\"aabbcab\"`?",
     "accept": [
      "abc"
     ],
     "normalize": "none",
     "explain": "נשמרות ההופעות הראשונות של `a`, `b`, `c` (ריצה אמיתית: abc).",
     "promptHtml": "מה תהיה המחרוזת אחרי <code class=\"tok\" dir=\"ltr\">removeDuplicates</code> על <code class=\"tok\" dir=\"ltr\">\"aabbcab\"</code>?",
     "explainHtml": "נשמרות ההופעות הראשונות של <code class=\"tok\" dir=\"ltr\">a</code>, <code class=\"tok\" dir=\"ltr\">b</code>, <code class=\"tok\" dir=\"ltr\">c</code> (ריצה אמיתית: abc)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי לשמירת אות.",
     "code": true,
     "lines": [
      "void removeDuplicates(char *str) {",
      "    char *last=str;",
      "    int count[26] = { 0 };",
      "    while (*str)",
      "    {",
      "___",
      "        {",
      "            count[(*str) - 'a']=1;",
      "            *last = *str;",
      "            last++;",
      "        }",
      "        str++;",
      "    }",
      "    *last = '\\0';",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (count[(*str) - 'a'] == 0)",
       "html": "if (count[(*str) - 'a'] == 0)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (count[(*str) - 'a'] == 1)",
       "html": "if (count[(*str) - 'a'] == 1)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (count[(*str) - 'a'] != 0)",
       "html": "if (count[(*str) - 'a'] != 0)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (count[(*str) - 'a'] > 1)",
       "html": "if (count[(*str) - 'a'] &gt; 1)"
      }
     ],
     "correctId": "a",
     "explain": "שומרים אות רק כשהיא טרם נראתה, כלומר המונה שלה 0.",
     "promptHtml": "השלימו את התנאי לשמירת אות.",
     "explainHtml": "שומרים אות רק כשהיא טרם נראתה, כלומר המונה שלה 0.",
     "linesHtml": [
      "void removeDuplicates(char *str) {",
      "    char *last=str;",
      "    int count[26] = { 0 };",
      "    while (*str)",
      "    {",
      "___",
      "        {",
      "            count[(*str) - 'a']=1;",
      "            *last = *str;",
      "            last++;",
      "        }",
      "        str++;",
      "    }",
      "    *last = '\\0';",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `removeDuplicates`.",
     "code": true,
     "lines": [
      "void removeDuplicates(char *str) {\n    char *last=str;\n    int count[26] = { 0 };",
      "    while (*str)\n    {",
      "        if (count[(*str) - 'a'] == 0)\n        {\n            count[(*str) - 'a']=1;\n            *last = *str;\n            last++;\n        }",
      "        str++;\n    }",
      "    *last = '\\0';\n}"
     ],
     "explain": "הצהרות, כותרת הלולאה, בלוק ה-`if` (סימון וכתיבה), `str++` וסגירה, ובסוף סימון סוף המחרוזת.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">removeDuplicates</code>.",
     "explainHtml": "הצהרות, כותרת הלולאה, בלוק ה-<code class=\"tok\" dir=\"ltr\">if</code> (סימון וכתיבה), <code class=\"tok\" dir=\"ltr\">str++</code> וסגירה, ובסוף סימון סוף המחרוזת.",
     "linesHtml": [
      "void removeDuplicates(char *str) {\n    char *last=str;\n    int count[26] = { 0 };",
      "    while (*str)\n    {",
      "        if (count[(*str) - 'a'] == 0)\n        {\n            count[(*str) - 'a']=1;\n            *last = *str;\n            last++;\n        }",
      "        str++;\n    }",
      "    *last = '\\0';\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "void removeDuplicates(char *str) {",
      "    char *last=str;",
      "    int count[26] = { 0 };",
      "    while (*str)",
      "    {",
      "        if (count[(*str) - 'a'] == 0)",
      "        {",
      "            count[(*str) - 'a']=0;",
      "            *last = *str;",
      "            last++;",
      "        }",
      "        str++;",
      "    }",
      "    *last = '\\0';",
      "}"
     ],
     "bugIndex": 7,
     "explain": "אם המונה נשאר 0 האות לא מסומנת כנראית: `\"aa\"` נשארת `\"aa\"` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "אם המונה נשאר 0 האות לא מסומנת כנראית: <code class=\"tok\" dir=\"ltr\">\"aa\"</code> נשארת <code class=\"tok\" dir=\"ltr\">\"aa\"</code> (ריצה אמיתית).",
     "linesHtml": [
      "void removeDuplicates(char *str) {",
      "    char *last=str;",
      "    int count[26] = { 0 };",
      "    while (*str)",
      "    {",
      "        if (count[(*str) - 'a'] == 0)",
      "        {",
      "            count[(*str) - 'a']=0;",
      "            *last = *str;",
      "            last++;",
      "        }",
      "        str++;",
      "    }",
      "    *last = '\\0';",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת עם עבודה קבועה לכל תו: $O(n)$.",
     "promptHtml": "מהי סיבוכיות הזמן? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת עם עבודה קבועה לכל תו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-A-Q3",
   "partKey": "",
   "examCode": "22A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "כתבו פונקציה <code class=\"tok\" dir=\"ltr\">void removeDuplicates (char *str)</code> שמקבלת מחרוזת של אותיות קטנות באנגלית בשם <code class=\"tok\" dir=\"ltr\">str</code>.<br>הפונקציה צריכה להשאיר במחרוזת את כל האותיות שמופיעות בה בפעם הראשונה, ולמחוק את כל האותיות שחוזרות על עצמן (להוציא אותן מהמחרוזת).<br>הניחו שהקלט תקין.<br>לדוגמא, הפונקציה הופכת את המחרוזת \"<strong>bla</strong>blab<strong>h</strong>\" למחרוזת \"<strong>blah</strong>\".<br>חישוב הפונקציה צריך להתבצע <strong>בסדר גודל של n</strong>, כאשר n הוא אורך המחרוזת.<br>הפונקציה יכולה להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-A עמ' 3), גרסה ראשונה:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void removeDuplicates(char *str) {\n\n    char *last=str;\n\n    int count[26] = { 0 };\n\n    while (*str)\n    {\n        if (count[(*str) - 'a'] == 0)\n        {\n            count[(*str) - 'a']=1;\n            *last = *str;\n            last++;\n        }\n        str++;\n    }\n\n    *last = '\\0';\n}</code></pre><strong>גרסה שנייה</strong> (כפי שמופיעה בפתרון הרשמי):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void removeDuplicates(char *s) {\n\n    int i, newLast;\n\n    int count[26] = { 0 };\n\n    for (i = 0, newLast = 0; s[i]; i++)\n        if (count[s[i] - 'A']++ == 0)\n            s[newLast++] = s[i];\n\n    s[newLast] = '\\0';\n}</code></pre>מערך עזר של 26 מונים מסמן אילו אותיות כבר נראו. סורקים את המחרוזת פעם אחת וכותבים לאחור רק אות שנראית לראשונה, ובסוף שמים <code class=\"tok\" dir=\"ltr\">'\\0'</code>. סריקה אחת, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.<br><strong>הערה:</strong> בגרסה השנייה האינדקס הוא <code class=\"tok\" dir=\"ltr\">s[i] - 'A'</code> ולא <code class=\"tok\" dir=\"ltr\">s[i] - 'a'</code>; עבור אותיות קטנות זה אינדקס 32 ומעלה במערך בגודל 26, כלומר גישה מחוץ לגבולות. הגרסה הראשונה תקינה.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "חיפוש האות בכל פעם במחרוזת שנבנתה עד כה: זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "לשכוח את <code class=\"tok\" dir=\"ltr\">'\\0'</code> בסוף ולהשאיר זנב של אותיות ישנות.",
    "אינדקס <code class=\"tok\" dir=\"ltr\">*str - 'A'</code> עבור אותיות קטנות יוצא מגבולות המערך בגודל 26."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "binary_search",
   "question": "נתון מערך `a` - מערך **ממוין** בסדר עולה של מספרים שלמים ונתון הממוצע שלהם `k` שהוא מספר מסוג **double**.\nכתבו פונקציה **יעילה** שמקבלת את המערך הממוין `a`, גודלו `n` וממוצע `k`, ומחזירה את המספר הקטן ביותר במערך שגדול או שווה לממוצע.\nלדוגמא:\nעבור המערך `a = {-5, -2, -1, 0, 2, 4, 4, 9}` הפונקציה תחזיר **2** (הממוצע הוא 1.375)\nעל הפונקציה לרוץ בסדר גודל של $\\log n$.",
   "solution": "**פתרון רשמי** (22A-A עמ' 4), שתי פונקציות כפי שהן מופיעות:\n```c\nint question4_version1(int arr[], int n, double x) {\n    int low = 0, high = n - 1, mid, max=arr[0];\n    while (low <= high) {\n        mid = (low + high) / 2;\n        if (arr[mid] <= x) {\n            max = arr[mid];\n            low = mid + 1;\n        }\n        else\n            high = mid - 1;\n    }\n    return max;\n}\n```\n```c\nint question4_version2(int a[], int n, double k) {\n    int low = 0, high = n - 1, mid, min = a[n-1];\n    while (low <= high) {\n        mid = (low + high) / 2;\n        if (a[mid] >= k) {\n            min = a[mid];\n            high = mid - 1;\n\n        }\n        else\n            low = mid + 1;\n    }\n    return min;\n}\n```\n`question4_version2` היא חיפוש בינארי על הערך הקטן ביותר שגדול או שווה ל-`k`: כשנמצא `a[mid] >= k` שומרים אותו וממשיכים שמאלה, אחרת ימינה. זמן ריצה $O(\\log n)$.\n**הערה:** `question4_version1` מחזירה את הערך הגדול ביותר שקטן או שווה ל-`x` (בדוגמה של השאלה היא מחזירה 0 ולא 2), ולכן אינה פותרת את השאלה הזו; `question4_version2` תואמת לשאלה ולדוגמה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "med",
   "points": 30,
   "rubric": [
    {
     "text": "חיפוש בינארי עם `low`, `high`, `mid` ולולאה `while (low <= high)`",
     "points": 8,
     "html": "חיפוש בינארי עם <code class=\"tok\" dir=\"ltr\">low</code>, <code class=\"tok\" dir=\"ltr\">high</code>, <code class=\"tok\" dir=\"ltr\">mid</code> ולולאה <code class=\"tok\" dir=\"ltr\">while (low &lt;= high)</code>"
    },
    {
     "text": "כש-`a[mid] >= k`: שומרים אותו כמועמד וממשיכים שמאלה (`high = mid - 1`)",
     "points": 10,
     "html": "כש-<code class=\"tok\" dir=\"ltr\">a[mid] &gt;= k</code>: שומרים אותו כמועמד וממשיכים שמאלה (<code class=\"tok\" dir=\"ltr\">high = mid - 1</code>)"
    },
    {
     "text": "אחרת ממשיכים ימינה (`low = mid + 1`)",
     "points": 6,
     "html": "אחרת ממשיכים ימינה (<code class=\"tok\" dir=\"ltr\">low = mid + 1</code>)"
    },
    {
     "text": "אתחול `min` (למשל `a[n-1]`) והחזרת `min`",
     "points": 3,
     "html": "אתחול <code class=\"tok\" dir=\"ltr\">min</code> (למשל <code class=\"tok\" dir=\"ltr\">a[n-1]</code>) והחזרת <code class=\"tok\" dir=\"ltr\">min</code>"
    },
    {
     "text": "זמן ריצה $O(\\log n)$",
     "points": 3,
     "html": "זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לעבור על המערך בלולאה לינארית: $O(n)$ ולא $O(\\log n)$.",
    "להחזיר את הערך הגדול ביותר שקטן או שווה ל-`k` במקום הקטן ביותר שגדול או שווה ל-`k`.",
    "לא לשמור את המועמד לפני שממשיכים שמאלה ולאבד אותו."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "על `a = {-5,-2,-1,0,2,4,4,9}` (`n = 8`) והממוצע $k=1.375$: מהו `mid` באיטרציה הראשונה?",
     "answer": 3,
     "tol": 0,
     "explain": "`mid = (0+7)/2 = 3` ו-`a[3] = 0` (ריצה אמיתית).",
     "promptHtml": "על <code class=\"tok\" dir=\"ltr\">a = {-5,-2,-1,0,2,4,4,9}</code> (<code class=\"tok\" dir=\"ltr\">n = 8</code>) והממוצע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>1.375</mn></mrow><annotation encoding=\"application/x-tex\">k=1.375</annotation></semantics></math></span>: מהו <code class=\"tok\" dir=\"ltr\">mid</code> באיטרציה הראשונה?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">mid = (0+7)/2 = 3</code> ו-<code class=\"tok\" dir=\"ltr\">a[3] = 0</code> (ריצה אמיתית)."
    },
    {
     "type": "choice",
     "prompt": "בהמשך: `a[3] = 0 < 1.375`. מה הפונקציה עושה?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`low = mid + 1`: הולכת ימינה",
       "html": "<code class=\"tok\" dir=\"ltr\">low = mid + 1</code>: הולכת ימינה"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`high = mid - 1`: הולכת שמאלה",
       "html": "<code class=\"tok\" dir=\"ltr\">high = mid - 1</code>: הולכת שמאלה"
      },
      {
       "id": "c",
       "type": "text",
       "value": "מחזירה `0`",
       "html": "מחזירה <code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "מעדכנת `min = a[mid]`",
       "html": "מעדכנת <code class=\"tok\" dir=\"ltr\">min = a[mid]</code>"
      }
     ],
     "correctId": "a",
     "explain": "אין טעם להסתכל באיברים הקטנים מ-`k`; ממשיכים ימינה. סך הכול 3 איטרציות והתוצאה 2 (ריצה אמיתית).",
     "promptHtml": "בהמשך: <code class=\"tok\" dir=\"ltr\">a[3] = 0 &lt; 1.375</code>. מה הפונקציה עושה?",
     "explainHtml": "אין טעם להסתכל באיברים הקטנים מ-<code class=\"tok\" dir=\"ltr\">k</code>; ממשיכים ימינה. סך הכול 3 איטרציות והתוצאה 2 (ריצה אמיתית)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הפקודה אחרי ששמרנו מועמד.",
     "code": true,
     "lines": [
      "int question4_version2(int a[], int n, double k) {",
      "    int low = 0, high = n - 1, mid, min = a[n-1];",
      "    while (low <= high) {",
      "        mid = (low + high) / 2;",
      "        if (a[mid] >= k) {",
      "            min = a[mid];",
      "___",
      "        }",
      "        else",
      "            low = mid + 1;",
      "    }",
      "    return min;",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "high = mid - 1;",
       "html": "high = mid - 1;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "high = mid;",
       "html": "high = mid;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "low = mid + 1;",
       "html": "low = mid + 1;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "low = mid;",
       "html": "low = mid;"
      }
     ],
     "correctId": "a",
     "explain": "המועמד נשמר ב-`min`, וכדי למצוא קטן ממנו שעדיין גדול או שווה ל-`k` מחפשים משמאלו.",
     "promptHtml": "השלימו את הפקודה אחרי ששמרנו מועמד.",
     "explainHtml": "המועמד נשמר ב-<code class=\"tok\" dir=\"ltr\">min</code>, וכדי למצוא קטן ממנו שעדיין גדול או שווה ל-<code class=\"tok\" dir=\"ltr\">k</code> מחפשים משמאלו.",
     "linesHtml": [
      "int question4_version2(int a[], int n, double k) {",
      "    int low = 0, high = n - 1, mid, min = a[n-1];",
      "    while (low &lt;= high) {",
      "        mid = (low + high) / 2;",
      "        if (a[mid] &gt;= k) {",
      "            min = a[mid];",
      "___",
      "        }",
      "        else",
      "            low = mid + 1;",
      "    }",
      "    return min;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `question4_version2`.",
     "code": true,
     "lines": [
      "int question4_version2(int a[], int n, double k) {\n    int low = 0, high = n - 1, mid, min = a[n-1];",
      "    while (low <= high) {\n        mid = (low + high) / 2;",
      "        if (a[mid] >= k) {\n            min = a[mid];\n            high = mid - 1;\n        }",
      "        else\n            low = mid + 1;\n    }",
      "    return min;\n}"
     ],
     "explain": "אתחול, כותרת הלולאה, חישוב `mid`, הענף של המועמד (שמירה והזזת `high`), הענף השני עם הסגירה, ובסוף `min`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">question4_version2</code>.",
     "explainHtml": "אתחול, כותרת הלולאה, חישוב <code class=\"tok\" dir=\"ltr\">mid</code>, הענף של המועמד (שמירה והזזת <code class=\"tok\" dir=\"ltr\">high</code>), הענף השני עם הסגירה, ובסוף <code class=\"tok\" dir=\"ltr\">min</code>.",
     "linesHtml": [
      "int question4_version2(int a[], int n, double k) {\n    int low = 0, high = n - 1, mid, min = a[n-1];",
      "    while (low &lt;= high) {\n        mid = (low + high) / 2;",
      "        if (a[mid] &gt;= k) {\n            min = a[mid];\n            high = mid - 1;\n        }",
      "        else\n            low = mid + 1;\n    }",
      "    return min;\n}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)",
     "accept": [
      "O(log n)"
     ],
     "normalize": "complexity",
     "explain": "כל איטרציה חוצה את התחום: $O(\\log n)$.",
     "promptHtml": "מהי סיבוכיות הזמן? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "כל איטרציה חוצה את התחום: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-A-Q4",
   "partKey": "",
   "examCode": "22A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "נתון מערך <code class=\"tok\" dir=\"ltr\">a</code> - מערך <strong>ממוין</strong> בסדר עולה של מספרים שלמים ונתון הממוצע שלהם <code class=\"tok\" dir=\"ltr\">k</code> שהוא מספר מסוג <strong>double</strong>.<br>כתבו פונקציה <strong>יעילה</strong> שמקבלת את המערך הממוין <code class=\"tok\" dir=\"ltr\">a</code>, גודלו <code class=\"tok\" dir=\"ltr\">n</code> וממוצע <code class=\"tok\" dir=\"ltr\">k</code>, ומחזירה את המספר הקטן ביותר במערך שגדול או שווה לממוצע.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">a = {-5, -2, -1, 0, 2, 4, 4, 9}</code> הפונקציה תחזיר <strong>2</strong> (הממוצע הוא 1.375)<br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">\\log n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-A עמ' 4), שתי פונקציות כפי שהן מופיעות:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int question4_version1(int arr[], int n, double x) {\n    int low = 0, high = n - 1, mid, max=arr[0];\n    while (low &lt;= high) {\n        mid = (low + high) / 2;\n        if (arr[mid] &lt;= x) {\n            max = arr[mid];\n            low = mid + 1;\n        }\n        else\n            high = mid - 1;\n    }\n    return max;\n}</code></pre><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int question4_version2(int a[], int n, double k) {\n    int low = 0, high = n - 1, mid, min = a[n-1];\n    while (low &lt;= high) {\n        mid = (low + high) / 2;\n        if (a[mid] &gt;= k) {\n            min = a[mid];\n            high = mid - 1;\n\n        }\n        else\n            low = mid + 1;\n    }\n    return min;\n}</code></pre><code class=\"tok\" dir=\"ltr\">question4_version2</code> היא חיפוש בינארי על הערך הקטן ביותר שגדול או שווה ל-<code class=\"tok\" dir=\"ltr\">k</code>: כשנמצא <code class=\"tok\" dir=\"ltr\">a[mid] &gt;= k</code> שומרים אותו וממשיכים שמאלה, אחרת ימינה. זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.<br><strong>הערה:</strong> <code class=\"tok\" dir=\"ltr\">question4_version1</code> מחזירה את הערך הגדול ביותר שקטן או שווה ל-<code class=\"tok\" dir=\"ltr\">x</code> (בדוגמה של השאלה היא מחזירה 0 ולא 2), ולכן אינה פותרת את השאלה הזו; <code class=\"tok\" dir=\"ltr\">question4_version2</code> תואמת לשאלה ולדוגמה.",
   "pointsTotal": 30,
   "pitfallsHtml": [
    "לעבור על המערך בלולאה לינארית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>.",
    "להחזיר את הערך הגדול ביותר שקטן או שווה ל-<code class=\"tok\" dir=\"ltr\">k</code> במקום הקטן ביותר שגדול או שווה ל-<code class=\"tok\" dir=\"ltr\">k</code>.",
    "לא לשמור את המועמד לפני שממשיכים שמאלה ולאבד אותו."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "matrices",
   "question": "כתבו פונקציה **יעילה** המקבלת מערך דו-ממדי `M` (מטריצה) בגודל NxN (N מוגדר על ידי `#define`) של מספרים שלמים, בודקת ומחזירה **1** אם סכום איברים בכל שורה `i` ($0 \\le i \\le N-1$) של המטריצה ללא הערך שנמצא באלכסון הראשי של אותה שורה (`M[i][i]`) שווה ל-`M[i][i]`, אחרת הפונקציה מחזירה **0**.\n**לדוגמה**: עבור המטריצה הבאה הפונקציה תחזיר 1: (בשורה הראשונה 2+7+1 = 10, בשנייה 2+(-1)+6 = 7, בשלישית 1+(-2)+(-5) = -6, ברביעית (-2)+4+7 = 9)\nועבור המטריצה השנייה הפונקציה תחזיר 0: עבור השורה השנייה $2+(-1)+5 \\ne 7$.",
   "solution": "**פתרון רשמי** (22A-B עמ' 1):\n```c\nint f_1(int M[][N]) {\n    int i, j, sum;\n    for (i = 0; i < N; i++) {\n        sum = 0;\n        for (j = 0; j < N; j++) {\n            sum += M[i][j];\n        }\n        if (sum - M[i][i] != M[i][i]) return 0;\n    }\n    return 1;\n}\n```\nלכל שורה מחשבים את סכום כל איבריה, ומחסירים את איבר האלכסון: אם הסכום ללא האלכסון שונה מהאיבר עצמו מחזירים 0. כל תא נקרא פעם אחת, כלומר $O(N^2)$ ביחס למספר התאים.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "א",
   "contextId": "22A-B-c1a",
   "rubric": [
    {
     "text": "לולאה חיצונית על השורות `i`, ולולאה פנימית שמסכמת את כל השורה",
     "points": 5,
     "html": "לולאה חיצונית על השורות <code class=\"tok\" dir=\"ltr\">i</code>, ולולאה פנימית שמסכמת את כל השורה"
    },
    {
     "text": "איפוס `sum = 0` בתחילת כל שורה",
     "points": 2,
     "html": "איפוס <code class=\"tok\" dir=\"ltr\">sum = 0</code> בתחילת כל שורה"
    },
    {
     "text": "הבדיקה `sum - M[i][i] != M[i][i]` והחזרת `0` בכישלון",
     "points": 4,
     "html": "הבדיקה <code class=\"tok\" dir=\"ltr\">sum - M[i][i] != M[i][i]</code> והחזרת <code class=\"tok\" dir=\"ltr\">0</code> בכישלון"
    },
    {
     "text": "`return 1` אחרי שכל השורות עברו, וקריאה של כל תא פעם אחת בלבד",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">return 1</code> אחרי שכל השורות עברו, וקריאה של כל תא פעם אחת בלבד"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשוות את `sum` ל-`M[i][i]` בלי להחסיר את איבר האלכסון מהסכום.",
    "לשכוח לאפס את `sum` בין שורות, ולצבור סכומים מכל השורות.",
    "להחזיר `1` או `0` בתוך הלולאה אחרי השורה הראשונה במקום לבדוק את כולן."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "במטריצה הראשונה (שמחזירה 1): מהו סכום השורה השנייה (`i = 1`) ללא איבר האלכסון?",
     "answer": 7,
     "tol": 0,
     "explain": "$2+(-1)+6=7$, ושווה ל-`M[1][1] = 7` (ריצה אמיתית: 7).",
     "promptHtml": "במטריצה הראשונה (שמחזירה 1): מהו סכום השורה השנייה (<code class=\"tok\" dir=\"ltr\">i = 1</code>) ללא איבר האלכסון?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>6</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-1)+6=7</annotation></semantics></math></span>, ושווה ל-<code class=\"tok\" dir=\"ltr\">M[1][1] = 7</code> (ריצה אמיתית: 7)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה הפונקציה על המטריצה הראשונה ועל המטריצה השנייה, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`1` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
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
       "value": "`1` ואז `1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      }
     ],
     "correctId": "a",
     "explain": "במטריצה השנייה בשורה 2 מתקבל $2+(-1)+5=6\\ne7$ (ריצה אמיתית: 1 ו-0).",
     "promptHtml": "מה מחזירה הפונקציה על המטריצה הראשונה ועל המטריצה השנייה, לפי הסדר?",
     "explainHtml": "במטריצה השנייה בשורה 2 מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>5</mn><mo>=</mo><mn>6</mn><mo mathvariant=\"normal\">≠</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-1)+5=6\\ne7</annotation></semantics></math></span> (ריצה אמיתית: 1 ו-0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הבדיקה בסוף כל שורה.",
     "code": true,
     "lines": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i < N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j < N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "___",
      "    }",
      "    return 1;",
      "}"
     ],
     "blankIndex": 7,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (sum - M[i][i] != M[i][i]) return 0;",
       "html": "if (sum - M[i][i] != M[i][i]) return 0;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (sum != M[i][i]) return 0;",
       "html": "if (sum != M[i][i]) return 0;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (sum - M[i][i] == M[i][i]) return 0;",
       "html": "if (sum - M[i][i] == M[i][i]) return 0;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (sum + M[i][i] != M[i][i]) return 0;",
       "html": "if (sum + M[i][i] != M[i][i]) return 0;"
      }
     ],
     "correctId": "a",
     "explain": "הסכום כולל את האלכסון, ולכן מחסירים אותו לפני ההשוואה. שלוש האפשרויות האחרות מחזירות 0 גם על המטריצה החוקית (ריצה אמיתית).",
     "promptHtml": "השלימו את הבדיקה בסוף כל שורה.",
     "explainHtml": "הסכום כולל את האלכסון, ולכן מחסירים אותו לפני ההשוואה. שלוש האפשרויות האחרות מחזירות 0 גם על המטריצה החוקית (ריצה אמיתית).",
     "linesHtml": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i &lt; N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j &lt; N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "___",
      "    }",
      "    return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `f_1`.",
     "code": true,
     "lines": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i < N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j < N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[i][i] != M[i][i]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ],
     "explain": "לכל שורה: איפוס, סכום, בדיקה; ובסוף `return 1`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">f_1</code>.",
     "explainHtml": "לכל שורה: איפוס, סכום, בדיקה; ובסוף <code class=\"tok\" dir=\"ltr\">return 1</code>.",
     "linesHtml": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i &lt; N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j &lt; N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[i][i] != M[i][i]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i < N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j < N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[i][i] == M[i][i]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ],
     "bugIndex": 7,
     "explain": "עם `==` מטריצה חוקית נפסלת: על המטריצה הראשונה מוחזר 0 במקום 1 (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">==</code> מטריצה חוקית נפסלת: על המטריצה הראשונה מוחזר 0 במקום 1 (ריצה אמיתית).",
     "linesHtml": [
      "int f_1(int M[][N]) {",
      "    int i, j, sum;",
      "    for (i = 0; i &lt; N; i++) {",
      "        sum = 0;",
      "        for (j = 0; j &lt; N; j++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[i][i] == M[i][i]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-B-Q1a",
   "partKey": "a",
   "examCode": "22A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "כתבו פונקציה <strong>יעילה</strong> המקבלת מערך דו-ממדי <code class=\"tok\" dir=\"ltr\">M</code> (מטריצה) בגודל NxN (N מוגדר על ידי <code class=\"tok\" dir=\"ltr\">#define</code>) של מספרים שלמים, בודקת ומחזירה <strong>1</strong> אם סכום איברים בכל שורה <code class=\"tok\" dir=\"ltr\">i</code> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>≤</mo><mi>i</mi><mo>≤</mo><mi>N</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0 \\le i \\le N-1</annotation></semantics></math></span>) של המטריצה ללא הערך שנמצא באלכסון הראשי של אותה שורה (<code class=\"tok\" dir=\"ltr\">M[i][i]</code>) שווה ל-<code class=\"tok\" dir=\"ltr\">M[i][i]</code>, אחרת הפונקציה מחזירה <strong>0</strong>.<br><strong>לדוגמה</strong>: עבור המטריצה הבאה הפונקציה תחזיר 1: (בשורה הראשונה 2+7+1 = 10, בשנייה 2+(-1)+6 = 7, בשלישית 1+(-2)+(-5) = -6, ברביעית (-2)+4+7 = 9)<br>ועבור המטריצה השנייה הפונקציה תחזיר 0: עבור השורה השנייה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>5</mn><mo mathvariant=\"normal\">≠</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-1)+5 \\ne 7</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-B עמ' 1):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f_1(int M[][N]) {\n    int i, j, sum;\n    for (i = 0; i &lt; N; i++) {\n        sum = 0;\n        for (j = 0; j &lt; N; j++) {\n            sum += M[i][j];\n        }\n        if (sum - M[i][i] != M[i][i]) return 0;\n    }\n    return 1;\n}</code></pre>לכל שורה מחשבים את סכום כל איבריה, ומחסירים את איבר האלכסון: אם הסכום ללא האלכסון שונה מהאיבר עצמו מחזירים 0. כל תא נקרא פעם אחת, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span> ביחס למספר התאים.",
   "pointsTotal": 13,
   "pitfallsHtml": [
    "להשוות את <code class=\"tok\" dir=\"ltr\">sum</code> ל-<code class=\"tok\" dir=\"ltr\">M[i][i]</code> בלי להחסיר את איבר האלכסון מהסכום.",
    "לשכוח לאפס את <code class=\"tok\" dir=\"ltr\">sum</code> בין שורות, ולצבור סכומים מכל השורות.",
    "להחזיר <code class=\"tok\" dir=\"ltr\">1</code> או <code class=\"tok\" dir=\"ltr\">0</code> בתוך הלולאה אחרי השורה הראשונה במקום לבדוק את כולן."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "matrices",
   "question": "כתבו פונקציה **יעילה** המקבלת מערך דו-ממדי `M` (מטריצה) בגודל NxN (N מוגדר על ידי `#define`) של מספרים שלמים, בודקת ומחזירה **1** אם סכום איברים בכל עמודה `j` ($0 \\le j \\le N-1$) של המטריצה ללא הערך שנמצא באלכסון הראשי של אותה עמודה (`M[j][j]`) שווה ל-`M[j][j]`, אחרת הפונקציה מחזירה **0**.\n**לדוגמה**: עבור המטריצה הבאה הפונקציה תחזיר 1: (בעמודה הראשונה 2+9+(-1) = 10, בשנייה 2+(-2)+7 = 7, בשלישית 7+(-20)+7 = -6, ברביעית (-1)+4+6 = 9)\nועבור המטריצה השנייה הפונקציה תחזיר 0: עבור העמודה השנייה $2+(-2)+4 \\ne 7$.",
   "solution": "**פתרון רשמי** (22A-B עמ' 1-2):\n```c\nint f_11(int M[][N]) {\n    int i, j, sum;\n    for (j = 0; j < N; j++) {\n        sum = 0;\n        for (i = 0; i < N; i++) {\n            sum += M[i][j];\n        }\n        if (sum - M[j][j] != M[j][j]) return 0;\n    }\n    return 1;\n}\n```\nאותו רעיון כמו בסעיף א, כשהלולאה החיצונית רצה על העמודות והפנימית על השורות.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "part": "ב",
   "contextId": "22A-B-c1b",
   "rubric": [
    {
     "text": "לולאה חיצונית על העמודות `j` ופנימית על השורות `i` שמסכמת את העמודה",
     "points": 4,
     "html": "לולאה חיצונית על העמודות <code class=\"tok\" dir=\"ltr\">j</code> ופנימית על השורות <code class=\"tok\" dir=\"ltr\">i</code> שמסכמת את העמודה"
    },
    {
     "text": "איפוס `sum = 0` בתחילת כל עמודה",
     "points": 2,
     "html": "איפוס <code class=\"tok\" dir=\"ltr\">sum = 0</code> בתחילת כל עמודה"
    },
    {
     "text": "הבדיקה `sum - M[j][j] != M[j][j]` והחזרת `0` בכישלון",
     "points": 4,
     "html": "הבדיקה <code class=\"tok\" dir=\"ltr\">sum - M[j][j] != M[j][j]</code> והחזרת <code class=\"tok\" dir=\"ltr\">0</code> בכישלון"
    },
    {
     "text": "`return 1` בסוף וקריאה של כל תא פעם אחת",
     "points": 2,
     "html": "<code class=\"tok\" dir=\"ltr\">return 1</code> בסוף וקריאה של כל תא פעם אחת"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להפוך את האינדקסים ולסכם שורה במקום עמודה (`M[j][i]`).",
    "לשכוח לאפס את `sum` בין עמודות.",
    "להשוות את הסכום לאיבר אחר במקום ל-`M[j][j]`, האלכסון של אותה עמודה."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "במטריצה הראשונה של סעיף ב: מהו סכום העמודה השנייה (`j = 1`) ללא איבר האלכסון?",
     "answer": 7,
     "tol": 0,
     "explain": "$2+(-2)+7=7$, ושווה ל-`M[1][1] = 7` (ריצה אמיתית: 7).",
     "promptHtml": "במטריצה הראשונה של סעיף ב: מהו סכום העמודה השנייה (<code class=\"tok\" dir=\"ltr\">j = 1</code>) ללא איבר האלכסון?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>7</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-2)+7=7</annotation></semantics></math></span>, ושווה ל-<code class=\"tok\" dir=\"ltr\">M[1][1] = 7</code> (ריצה אמיתית: 7)."
    },
    {
     "type": "choice",
     "prompt": "מה מחזירה `f_11` על המטריצה הראשונה ועל השנייה, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`1` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
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
       "value": "`1` ואז `1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      }
     ],
     "correctId": "a",
     "explain": "בשנייה בעמודה 2 מתקבל $2+(-2)+4=4\\ne7$ (ריצה אמיתית: 1 ו-0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f_11</code> על המטריצה הראשונה ועל השנייה, לפי הסדר?",
     "explainHtml": "בשנייה בעמודה 2 מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>4</mn><mo>=</mo><mn>4</mn><mo mathvariant=\"normal\">≠</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-2)+4=4\\ne7</annotation></semantics></math></span> (ריצה אמיתית: 1 ו-0)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הסכימה בלולאה הפנימית.",
     "code": true,
     "lines": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j < N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i < N; i++) {",
      "___",
      "        }",
      "        if (sum - M[j][j] != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "sum += M[i][j];",
       "html": "sum += M[i][j];"
      },
      {
       "id": "b",
       "type": "text",
       "value": "sum += M[j][i];",
       "html": "sum += M[j][i];"
      },
      {
       "id": "c",
       "type": "text",
       "value": "sum += M[i][i];",
       "html": "sum += M[i][i];"
      }
     ],
     "correctId": "a",
     "explain": "העמודה `j` קבועה והשורה `i` רצה: `M[i][j]`. `M[j][i]` מסכם שורה ו-`M[i][i]` את האלכסון; שתיהן נכשלות על המטריצה החוקית (ריצה אמיתית).",
     "promptHtml": "השלימו את הסכימה בלולאה הפנימית.",
     "explainHtml": "העמודה <code class=\"tok\" dir=\"ltr\">j</code> קבועה והשורה <code class=\"tok\" dir=\"ltr\">i</code> רצה: <code class=\"tok\" dir=\"ltr\">M[i][j]</code>. <code class=\"tok\" dir=\"ltr\">M[j][i]</code> מסכם שורה ו-<code class=\"tok\" dir=\"ltr\">M[i][i]</code> את האלכסון; שתיהן נכשלות על המטריצה החוקית (ריצה אמיתית).",
     "linesHtml": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j &lt; N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i &lt; N; i++) {",
      "___",
      "        }",
      "        if (sum - M[j][j] != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `f_11`.",
     "code": true,
     "lines": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j < N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i < N; i++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[j][j] != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ],
     "explain": "לכל עמודה: איפוס, סכום, בדיקה; ובסוף `return 1`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">f_11</code>.",
     "explainHtml": "לכל עמודה: איפוס, סכום, בדיקה; ובסוף <code class=\"tok\" dir=\"ltr\">return 1</code>.",
     "linesHtml": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j &lt; N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i &lt; N; i++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum - M[j][j] != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j < N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i < N; i++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ],
     "bugIndex": 7,
     "explain": "בלי להחסיר את האלכסון, המטריצה החוקית נפסלת (מוחזר 0 במקום 1, ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "בלי להחסיר את האלכסון, המטריצה החוקית נפסלת (מוחזר 0 במקום 1, ריצה אמיתית).",
     "linesHtml": [
      "int f_11(int M[][N]) {",
      "    int i, j, sum;",
      "    for (j = 0; j &lt; N; j++) {",
      "        sum = 0;",
      "        for (i = 0; i &lt; N; i++) {",
      "            sum += M[i][j];",
      "        }",
      "        if (sum != M[j][j]) return 0;",
      "    }",
      "    return 1;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-B-Q1b",
   "partKey": "b",
   "examCode": "22A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "כתבו פונקציה <strong>יעילה</strong> המקבלת מערך דו-ממדי <code class=\"tok\" dir=\"ltr\">M</code> (מטריצה) בגודל NxN (N מוגדר על ידי <code class=\"tok\" dir=\"ltr\">#define</code>) של מספרים שלמים, בודקת ומחזירה <strong>1</strong> אם סכום איברים בכל עמודה <code class=\"tok\" dir=\"ltr\">j</code> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>≤</mo><mi>j</mi><mo>≤</mo><mi>N</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0 \\le j \\le N-1</annotation></semantics></math></span>) של המטריצה ללא הערך שנמצא באלכסון הראשי של אותה עמודה (<code class=\"tok\" dir=\"ltr\">M[j][j]</code>) שווה ל-<code class=\"tok\" dir=\"ltr\">M[j][j]</code>, אחרת הפונקציה מחזירה <strong>0</strong>.<br><strong>לדוגמה</strong>: עבור המטריצה הבאה הפונקציה תחזיר 1: (בעמודה הראשונה 2+9+(-1) = 10, בשנייה 2+(-2)+7 = 7, בשלישית 7+(-20)+7 = -6, ברביעית (-1)+4+6 = 9)<br>ועבור המטריצה השנייה הפונקציה תחזיר 0: עבור העמודה השנייה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>4</mn><mo mathvariant=\"normal\">≠</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">2+(-2)+4 \\ne 7</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-B עמ' 1-2):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f_11(int M[][N]) {\n    int i, j, sum;\n    for (j = 0; j &lt; N; j++) {\n        sum = 0;\n        for (i = 0; i &lt; N; i++) {\n            sum += M[i][j];\n        }\n        if (sum - M[j][j] != M[j][j]) return 0;\n    }\n    return 1;\n}</code></pre>אותו רעיון כמו בסעיף א, כשהלולאה החיצונית רצה על העמודות והפנימית על השורות.",
   "pointsTotal": 12,
   "pitfallsHtml": [
    "להפוך את האינדקסים ולסכם שורה במקום עמודה (<code class=\"tok\" dir=\"ltr\">M[j][i]</code>).",
    "לשכוח לאפס את <code class=\"tok\" dir=\"ltr\">sum</code> בין עמודות.",
    "להשוות את הסכום לאיבר אחר במקום ל-<code class=\"tok\" dir=\"ltr\">M[j][j]</code>, האלכסון של אותה עמודה."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית יעילה** שמקבלת מערך **ממוין** `c` של מספרים שלמים, מספר `k` ושני אינדקסים במערך `i, j` כך ש-`i<j`.\nהפונקציה בודקת האם בתחום של המערך בין האיבר שבאינדקס `i` לבין האיבר שבאינדקס `j` ישנם שני מספרים שנמצאים במקומות שונים במערך שסכומם שווה ל-`k` - במידה וכן הפונקציה מחזירה את האינדקס של האיבר השמאלי (ימני, או 1 - גרסאות שונות) מבין זוג המספרים, במידה ולא הפונקציה מחזירה `-1`.\nלדוגמא:\nעבור המערך `-5,-2,12,25,34,40`, `k=23`, `i=0`, `j=4` על הפונקציה להחזיר 1.\nעבור המערך `-5,-2,12,25,34,40`, `k=23`, `i=2`, `j=4` על הפונקציה להחזיר -1.\nהניחו שהקלט תקין.",
   "solution": "**פתרון רשמי** (22A-B עמ' 2):\n```c\nint f_2(int *c, int k, int i, int j) {\n    if (i == j)\n        return -1;\n    if (c[i] + c[j] == k) return i;\n    if (c[i] + c[j] > k)\n        return f_2(c, k, i, j - 1);\n    return f_2(c, k, i + 1, j);\n}\n```\nשני מצביעים משני קצות התחום: אם הסכום שווה ל-`k` מחזירים `i`; אם הסכום גדול מדי מקטינים את `j`, אחרת מגדילים את `i`. כשהמצביעים נפגשים (`i == j`) אין זוג ומחזירים `-1`. כל קריאה מצמצמת את התחום באחד, כלומר $O(n)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "rubric": [
    {
     "text": "מקרה בסיס: `i == j` (נגמרו הזוגות) מחזיר `-1`",
     "points": 6,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">i == j</code> (נגמרו הזוגות) מחזיר <code class=\"tok\" dir=\"ltr\">-1</code>"
    },
    {
     "text": "כשהסכום שווה ל-`k` מחזירים `i`",
     "points": 5,
     "html": "כשהסכום שווה ל-<code class=\"tok\" dir=\"ltr\">k</code> מחזירים <code class=\"tok\" dir=\"ltr\">i</code>"
    },
    {
     "text": "כשהסכום גדול מ-`k` מקטינים את `j` (קריאה עם `j - 1`)",
     "points": 7,
     "html": "כשהסכום גדול מ-<code class=\"tok\" dir=\"ltr\">k</code> מקטינים את <code class=\"tok\" dir=\"ltr\">j</code> (קריאה עם <code class=\"tok\" dir=\"ltr\">j - 1</code>)"
    },
    {
     "text": "אחרת מגדילים את `i` (קריאה עם `i + 1`)",
     "points": 5,
     "html": "אחרת מגדילים את <code class=\"tok\" dir=\"ltr\">i</code> (קריאה עם <code class=\"tok\" dir=\"ltr\">i + 1</code>)"
    },
    {
     "text": "כל קריאה מצמצמת את התחום באחד, כלומר זמן $O(n)$",
     "points": 2,
     "html": "כל קריאה מצמצמת את התחום באחד, כלומר זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק את כל הזוגות בשתי לולאות: לא רקורסיבי ו-$O(n^2)$.",
    "להזיז את המצביע הלא נכון: אם הסכום גדול מדי צריך להקטין את `j`, לא להגדיל את `i`.",
    "להשתמש במקרה בסיס `i > j` ולבדוק איבר מול עצמו."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "על `-5,-2,12,25,34,40`, `k=23`, `i=0`, `j=4`: כמה קריאות (כולל הראשונה) מבוצעות עד שמוחזר ערך?",
     "answer": 3,
     "tol": 0,
     "explain": "(0,4): $-5+34=29>23$; (0,3): $-5+25=20<23$; (1,3): $-2+25=23$, מחזירים 1 (ריצה אמיתית: 3 קריאות).",
     "promptHtml": "על <code class=\"tok\" dir=\"ltr\">-5,-2,12,25,34,40</code>, <code class=\"tok\" dir=\"ltr\">k=23</code>, <code class=\"tok\" dir=\"ltr\">i=0</code>, <code class=\"tok\" dir=\"ltr\">j=4</code>: כמה קריאות (כולל הראשונה) מבוצעות עד שמוחזר ערך?",
     "explainHtml": "(0,4): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>5</mn><mo>+</mo><mn>34</mn><mo>=</mo><mn>29</mn><mo>&gt;</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">-5+34=29&gt;23</annotation></semantics></math></span>; (0,3): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>5</mn><mo>+</mo><mn>25</mn><mo>=</mo><mn>20</mn><mo>&lt;</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">-5+25=20&lt;23</annotation></semantics></math></span>; (1,3): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>2</mn><mo>+</mo><mn>25</mn><mo>=</mo><mn>23</mn></mrow><annotation encoding=\"application/x-tex\">-2+25=23</annotation></semantics></math></span>, מחזירים 1 (ריצה אמיתית: 3 קריאות)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הענף שבו הסכום גדול מ-`k`.",
     "code": true,
     "lines": [
      "int f_2(int *c, int k, int i, int j) {",
      "    if (i == j)",
      "        return -1;",
      "    if (c[i] + c[j] == k) return i;",
      "    if (c[i] + c[j] > k)",
      "___",
      "    return f_2(c, k, i + 1, j);",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return f_2(c, k, i, j - 1);",
       "html": "return f_2(c, k, i, j - 1);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return f_2(c, k, i + 1, j);",
       "html": "return f_2(c, k, i + 1, j);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return f_2(c, k, i, j - 2);",
       "html": "return f_2(c, k, i, j - 2);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return f_2(c, k, i + 1, j - 1);",
       "html": "return f_2(c, k, i + 1, j - 1);"
      }
     ],
     "correctId": "a",
     "explain": "המערך ממוין: כדי להקטין סכום גדול מדי מקטינים את האיבר הימני. `j - 2` ו-`i + 1, j - 1` מדלגים על זוגות: `j - 2` מחזירה -1 בדוגמה הראשונה במקום 1, ו-`i + 1, j - 1` מחזירה -1 על `k=10` באותו מערך במקום 1 (ריצה אמיתית).",
     "promptHtml": "השלימו את הענף שבו הסכום גדול מ-<code class=\"tok\" dir=\"ltr\">k</code>.",
     "explainHtml": "המערך ממוין: כדי להקטין סכום גדול מדי מקטינים את האיבר הימני. <code class=\"tok\" dir=\"ltr\">j - 2</code> ו-<code class=\"tok\" dir=\"ltr\">i + 1, j - 1</code> מדלגים על זוגות: <code class=\"tok\" dir=\"ltr\">j - 2</code> מחזירה -1 בדוגמה הראשונה במקום 1, ו-<code class=\"tok\" dir=\"ltr\">i + 1, j - 1</code> מחזירה -1 על <code class=\"tok\" dir=\"ltr\">k=10</code> באותו מערך במקום 1 (ריצה אמיתית).",
     "linesHtml": [
      "int f_2(int *c, int k, int i, int j) {",
      "    if (i == j)",
      "        return -1;",
      "    if (c[i] + c[j] == k) return i;",
      "    if (c[i] + c[j] &gt; k)",
      "___",
      "    return f_2(c, k, i + 1, j);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `f_2`.",
     "code": true,
     "lines": [
      "int f_2(int *c, int k, int i, int j) {\n    if (i == j)\n        return -1;",
      "    if (c[i] + c[j] == k) return i;\n    if (c[i] + c[j] > k)\n        return f_2(c, k, i, j - 1);",
      "    return f_2(c, k, i + 1, j);\n}"
     ],
     "explain": "מקרה בסיס, בלוק שתי הבדיקות (שוויון וסכום גדול מדי, זרות זו לזו), ובסוף סכום קטן מדי.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">f_2</code>.",
     "explainHtml": "מקרה בסיס, בלוק שתי הבדיקות (שוויון וסכום גדול מדי, זרות זו לזו), ובסוף סכום קטן מדי.",
     "linesHtml": [
      "int f_2(int *c, int k, int i, int j) {\n    if (i == j)\n        return -1;",
      "    if (c[i] + c[j] == k) return i;\n    if (c[i] + c[j] &gt; k)\n        return f_2(c, k, i, j - 1);",
      "    return f_2(c, k, i + 1, j);\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int f_2(int *c, int k, int i, int j) {",
      "    if (i == j)",
      "        return -1;",
      "    if (c[i] + c[j] == k) return i;",
      "    if (c[i] + c[j] < k)",
      "        return f_2(c, k, i, j - 1);",
      "    return f_2(c, k, i + 1, j);",
      "}"
     ],
     "bugIndex": 4,
     "explain": "עם `<` המצביעים זזים לכיוון הלא נכון: בדוגמה הראשונה מוחזר -1 במקום 1 (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&lt;</code> המצביעים זזים לכיוון הלא נכון: בדוגמה הראשונה מוחזר -1 במקום 1 (ריצה אמיתית).",
     "linesHtml": [
      "int f_2(int *c, int k, int i, int j) {",
      "    if (i == j)",
      "        return -1;",
      "    if (c[i] + c[j] == k) return i;",
      "    if (c[i] + c[j] &lt; k)",
      "        return f_2(c, k, i, j - 1);",
      "    return f_2(c, k, i + 1, j);",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "כל קריאה מצמצמת את התחום באחד: $O(n)$.",
     "promptHtml": "מהי סיבוכיות הזמן? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "כל קריאה מצמצמת את התחום באחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-B-Q2",
   "partKey": "",
   "examCode": "22A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית יעילה</strong> שמקבלת מערך <strong>ממוין</strong> <code class=\"tok\" dir=\"ltr\">c</code> של מספרים שלמים, מספר <code class=\"tok\" dir=\"ltr\">k</code> ושני אינדקסים במערך <code class=\"tok\" dir=\"ltr\">i, j</code> כך ש-<code class=\"tok\" dir=\"ltr\">i&lt;j</code>.<br>הפונקציה בודקת האם בתחום של המערך בין האיבר שבאינדקס <code class=\"tok\" dir=\"ltr\">i</code> לבין האיבר שבאינדקס <code class=\"tok\" dir=\"ltr\">j</code> ישנם שני מספרים שנמצאים במקומות שונים במערך שסכומם שווה ל-<code class=\"tok\" dir=\"ltr\">k</code> - במידה וכן הפונקציה מחזירה את האינדקס של האיבר השמאלי (ימני, או 1 - גרסאות שונות) מבין זוג המספרים, במידה ולא הפונקציה מחזירה <code class=\"tok\" dir=\"ltr\">-1</code>.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">-5,-2,12,25,34,40</code>, <code class=\"tok\" dir=\"ltr\">k=23</code>, <code class=\"tok\" dir=\"ltr\">i=0</code>, <code class=\"tok\" dir=\"ltr\">j=4</code> על הפונקציה להחזיר 1.<br>עבור המערך <code class=\"tok\" dir=\"ltr\">-5,-2,12,25,34,40</code>, <code class=\"tok\" dir=\"ltr\">k=23</code>, <code class=\"tok\" dir=\"ltr\">i=2</code>, <code class=\"tok\" dir=\"ltr\">j=4</code> על הפונקציה להחזיר -1.<br>הניחו שהקלט תקין.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-B עמ' 2):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f_2(int *c, int k, int i, int j) {\n    if (i == j)\n        return -1;\n    if (c[i] + c[j] == k) return i;\n    if (c[i] + c[j] &gt; k)\n        return f_2(c, k, i, j - 1);\n    return f_2(c, k, i + 1, j);\n}</code></pre>שני מצביעים משני קצות התחום: אם הסכום שווה ל-<code class=\"tok\" dir=\"ltr\">k</code> מחזירים <code class=\"tok\" dir=\"ltr\">i</code>; אם הסכום גדול מדי מקטינים את <code class=\"tok\" dir=\"ltr\">j</code>, אחרת מגדילים את <code class=\"tok\" dir=\"ltr\">i</code>. כשהמצביעים נפגשים (<code class=\"tok\" dir=\"ltr\">i == j</code>) אין זוג ומחזירים <code class=\"tok\" dir=\"ltr\">-1</code>. כל קריאה מצמצמת את התחום באחד, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "לבדוק את כל הזוגות בשתי לולאות: לא רקורסיבי ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>.",
    "להזיז את המצביע הלא נכון: אם הסכום גדול מדי צריך להקטין את <code class=\"tok\" dir=\"ltr\">j</code>, לא להגדיל את <code class=\"tok\" dir=\"ltr\">i</code>.",
    "להשתמש במקרה בסיס <code class=\"tok\" dir=\"ltr\">i &gt; j</code> ולבדוק איבר מול עצמו."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "strings",
   "question": "כתבו פונקציה **יעילה** שמקבלת מחרוזת של אותיות קטנות באנגלית בשם `str`. הפונקציה תחזיר 1 אם כל האותיות במחרוזת הן אותיות עוקבות ללא חזרות, אחרת תחזיר 0.\nשימו לב שאין חשיבות לסדר האותיות.\nהניחו שהקלט תקין.\n**לדוגמא**, עבור הקלט \"cbed\" יוחזר 1 כיוון שהמחרוזת מכילה את כל האותיות העוקבות בין `b` ל-`e` ללא חזרות.\nעבור הקלט \"dcbd\" יוחזר 0 כיוון שהאות `d` מופיעה פעמיים.\nעבור הקלט \"dbcj\" יוחזר 0 כיוון שהמחרוזת לא מכילה את כל האותיות העוקבות בין `b` לבין `j`.\nחישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא אורך המחרוזת.\nמותר להשתמש במערך עזר.",
   "solution": "**פתרון רשמי** (22A-B עמ' 3), הפונקציה הראשונה:\n```c\nint f_3(char* str) {\n      int a[26] = { 0 };\n      int i = 0;\n      while (*str) {\n            a[*str - 'a']++;\n            if (a[*str - 'a'] > 1) return 0;\n            str++;\n      }\n      while ((i<26) && (a[i] == 0))\n            i++;\n\n      while ((i < 26) && (a[i] == 1))\n            i++;\n\n      while (i < 26) {\n            if (a[i] != 0) return 0;\n            i++;\n      }\n      return 1;\n}\n```\n**או** (גרסה שנייה כפי שמופיעה בפתרון הרשמי, עמ' 3-4):\n```c\nint f_33(char* str) {\n      int count[26] = { 0 };\n      int i = 0,j;\n      char min='z', max='a';\n      while (*str) {\n            count[*str - 'a']++;\n            if (count[*str - 'a'] > 1) return 0;\n            if (min > *str)\n                  min = *str;\n            else\n                  if (max < *str)\n                        max = *str;\n            str++;\n      }\n\n      i = min - 'a';\n      j= max - 'a';\n      while (i <= j) {\n            if (count[i] != 1) return 0;\n            i++;\n      }\n      return 1;\n}\n```\nהגרסה הראשונה סופרת הופעות של כל אות (חזרה מחזירה 0), ואז בודקת שהאותיות שנספרו יוצרות בלוק רציף אחד: מדלגים על אפסים, על אחדים, ואחרי זה כל התאים חייבים להיות 0. סריקה אחת ועוד 26 תאים, כלומר $O(n)$.\n**הערה:** בגרסה השנייה המשתנה `max` מתעדכן רק כשהאות אינה מינימום חדש, ולכן למשל עבור \"ca\" היא מחזירה 1 (`max` נשאר `'a'`) אף שהאות `b` חסרה והתשובה הנכונה 0. הגרסה הראשונה תקינה.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 25,
   "rubric": [
    {
     "text": "מערך מונים בגודל 26 וספירת כל אות במחרוזת",
     "points": 5,
     "html": "מערך מונים בגודל 26 וספירת כל אות במחרוזת"
    },
    {
     "text": "הופעה שנייה של אות (`> 1`) מחזירה `0` מיד",
     "points": 6,
     "html": "הופעה שנייה של אות (<code class=\"tok\" dir=\"ltr\">&gt; 1</code>) מחזירה <code class=\"tok\" dir=\"ltr\">0</code> מיד"
    },
    {
     "text": "דילוג על האפסים עד האות הראשונה",
     "points": 4,
     "html": "דילוג על האפסים עד האות הראשונה"
    },
    {
     "text": "מעבר על רצף האחדים",
     "points": 5,
     "html": "מעבר על רצף האחדים"
    },
    {
     "text": "אחרי הרצף כל המונים חייבים להיות 0 (אחרת `0`), ואחרת `1`",
     "points": 5,
     "html": "אחרי הרצף כל המונים חייבים להיות 0 (אחרת <code class=\"tok\" dir=\"ltr\">0</code>), ואחרת <code class=\"tok\" dir=\"ltr\">1</code>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק שאין חזרות ולשכוח לבדוק שהאותיות רצופות.",
    "לדרוש שהאותיות יופיעו במחרוזת בסדר עולה (כל אות גדולה ב-1 מקודמתה): `\"cbed\"` חוקית אף שאינה ממוינת, ולכן רק הרצף של הספירות קובע.",
    "מעקב מקסימום ומינימום עם `if`/`else if`: אות שהיא מינימום חדש לא נבדקת כמקסימום (הגרסה השנייה)."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `f_3` על `\"ca\"` ועל `\"cab\"`, לפי הסדר?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0` ואז `1`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1` ואז `1`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">1</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`0` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">0</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`1` ואז `0`",
       "html": "<code class=\"tok\" dir=\"ltr\">1</code> ואז <code class=\"tok\" dir=\"ltr\">0</code>"
      }
     ],
     "correctId": "a",
     "explain": "ב-`\"ca\"` חסרה `b` בין `a` ל-`c`; ב-`\"cab\"` שלוש אותיות רצופות (ריצה אמיתית: 0 ו-1).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">f_3</code> על <code class=\"tok\" dir=\"ltr\">\"ca\"</code> ועל <code class=\"tok\" dir=\"ltr\">\"cab\"</code>, לפי הסדר?",
     "explainHtml": "ב-<code class=\"tok\" dir=\"ltr\">\"ca\"</code> חסרה <code class=\"tok\" dir=\"ltr\">b</code> בין <code class=\"tok\" dir=\"ltr\">a</code> ל-<code class=\"tok\" dir=\"ltr\">c</code>; ב-<code class=\"tok\" dir=\"ltr\">\"cab\"</code> שלוש אותיות רצופות (ריצה אמיתית: 0 ו-1)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הלולאה שעוברת על רצף האותיות שהופיעו.",
     "code": true,
     "lines": [
      "int f_3(char* str) {",
      "      int a[26] = { 0 };",
      "      int i = 0;",
      "      while (*str) {",
      "            a[*str - 'a']++;",
      "            if (a[*str - 'a'] > 1) return 0;",
      "            str++;",
      "      }",
      "      while ((i<26) && (a[i] == 0))",
      "            i++;",
      "___",
      "            i++;",
      "      while (i < 26) {",
      "            if (a[i] != 0) return 0;",
      "            i++;",
      "      }",
      "      return 1;",
      "}"
     ],
     "blankIndex": 10,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "while ((i < 26) && (a[i] == 1))",
       "html": "while ((i &lt; 26) &amp;&amp; (a[i] == 1))"
      },
      {
       "id": "b",
       "type": "text",
       "value": "while ((i < 26) && (a[i] == 0))",
       "html": "while ((i &lt; 26) &amp;&amp; (a[i] == 0))"
      },
      {
       "id": "c",
       "type": "text",
       "value": "while ((i < 26) && (a[i] > 1))",
       "html": "while ((i &lt; 26) &amp;&amp; (a[i] &gt; 1))"
      },
      {
       "id": "d",
       "type": "text",
       "value": "while (i < 26)",
       "html": "while (i &lt; 26)"
      }
     ],
     "correctId": "a",
     "explain": "עוברים על האחדים; אחריהם כל המונים צריכים להיות 0. כל אחת משלוש האפשרויות האחרות שגויה (בבדיקה מלאה על מחרוזות מעל a..e באורך עד 4: 79, 79 ו-126 תוצאות שגויות).",
     "promptHtml": "השלימו את הלולאה שעוברת על רצף האותיות שהופיעו.",
     "explainHtml": "עוברים על האחדים; אחריהם כל המונים צריכים להיות 0. כל אחת משלוש האפשרויות האחרות שגויה (בבדיקה מלאה על מחרוזות מעל a..e באורך עד 4: 79, 79 ו-126 תוצאות שגויות).",
     "linesHtml": [
      "int f_3(char* str) {",
      "      int a[26] = { 0 };",
      "      int i = 0;",
      "      while (*str) {",
      "            a[*str - 'a']++;",
      "            if (a[*str - 'a'] &gt; 1) return 0;",
      "            str++;",
      "      }",
      "      while ((i&lt;26) &amp;&amp; (a[i] == 0))",
      "            i++;",
      "___",
      "            i++;",
      "      while (i &lt; 26) {",
      "            if (a[i] != 0) return 0;",
      "            i++;",
      "      }",
      "      return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `f_3`.",
     "code": true,
     "lines": [
      "int f_3(char* str) {\n      int a[26] = { 0 }, i = 0;",
      "      while (*str) {\n            a[*str - 'a']++;\n            if (a[*str - 'a'] > 1) return 0;\n            str++;\n      }",
      "      while ((i<26) && (a[i] == 0))\n            i++;",
      "      while ((i < 26) && (a[i] == 1))\n            i++;",
      "      while (i < 26) {\n            if (a[i] != 0) return 0;\n            i++;\n      }",
      "      return 1;\n}"
     ],
     "explain": "הצהרות, לולאת הספירה, דילוג על אפסים, מעבר על אחדים, ובדיקה שהשאר אפס.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">f_3</code>.",
     "explainHtml": "הצהרות, לולאת הספירה, דילוג על אפסים, מעבר על אחדים, ובדיקה שהשאר אפס.",
     "linesHtml": [
      "int f_3(char* str) {\n      int a[26] = { 0 }, i = 0;",
      "      while (*str) {\n            a[*str - 'a']++;\n            if (a[*str - 'a'] &gt; 1) return 0;\n            str++;\n      }",
      "      while ((i&lt;26) &amp;&amp; (a[i] == 0))\n            i++;",
      "      while ((i &lt; 26) &amp;&amp; (a[i] == 1))\n            i++;",
      "      while (i &lt; 26) {\n            if (a[i] != 0) return 0;\n            i++;\n      }",
      "      return 1;\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int f_3(char* str) {",
      "      int a[26] = { 0 };",
      "      int i = 0;",
      "      while (*str) {",
      "            a[*str - 'a']++;",
      "            if (a[*str - 'a'] >= 1) return 0;",
      "            str++;",
      "      }",
      "      while ((i<26) && (a[i] == 0))",
      "            i++;",
      "      while ((i < 26) && (a[i] == 1))",
      "            i++;",
      "      while (i < 26) {",
      "            if (a[i] != 0) return 0;",
      "            i++;",
      "      }",
      "      return 1;",
      "}"
     ],
     "bugIndex": 5,
     "explain": "עם `>= 1` כל אות נחשבת חזרה: אפילו `\"b\"` מחזירה 0 (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&gt;= 1</code> כל אות נחשבת חזרה: אפילו <code class=\"tok\" dir=\"ltr\">\"b\"</code> מחזירה 0 (ריצה אמיתית).",
     "linesHtml": [
      "int f_3(char* str) {",
      "      int a[26] = { 0 };",
      "      int i = 0;",
      "      while (*str) {",
      "            a[*str - 'a']++;",
      "            if (a[*str - 'a'] &gt;= 1) return 0;",
      "            str++;",
      "      }",
      "      while ((i&lt;26) &amp;&amp; (a[i] == 0))",
      "            i++;",
      "      while ((i &lt; 26) &amp;&amp; (a[i] == 1))",
      "            i++;",
      "      while (i &lt; 26) {",
      "            if (a[i] != 0) return 0;",
      "            i++;",
      "      }",
      "      return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת של המחרוזת ועוד 26 תאים: $O(n)$.",
     "promptHtml": "מהי סיבוכיות הזמן? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת של המחרוזת ועוד 26 תאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-B-Q3",
   "partKey": "",
   "examCode": "22A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "כתבו פונקציה <strong>יעילה</strong> שמקבלת מחרוזת של אותיות קטנות באנגלית בשם <code class=\"tok\" dir=\"ltr\">str</code>. הפונקציה תחזיר 1 אם כל האותיות במחרוזת הן אותיות עוקבות ללא חזרות, אחרת תחזיר 0.<br>שימו לב שאין חשיבות לסדר האותיות.<br>הניחו שהקלט תקין.<br><strong>לדוגמא</strong>, עבור הקלט \"cbed\" יוחזר 1 כיוון שהמחרוזת מכילה את כל האותיות העוקבות בין <code class=\"tok\" dir=\"ltr\">b</code> ל-<code class=\"tok\" dir=\"ltr\">e</code> ללא חזרות.<br>עבור הקלט \"dcbd\" יוחזר 0 כיוון שהאות <code class=\"tok\" dir=\"ltr\">d</code> מופיעה פעמיים.<br>עבור הקלט \"dbcj\" יוחזר 0 כיוון שהמחרוזת לא מכילה את כל האותיות העוקבות בין <code class=\"tok\" dir=\"ltr\">b</code> לבין <code class=\"tok\" dir=\"ltr\">j</code>.<br>חישוב הפונקציה צריך להתבצע <strong>בסדר גודל של n</strong>, כאשר n הוא אורך המחרוזת.<br>מותר להשתמש במערך עזר.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-B עמ' 3), הפונקציה הראשונה:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f_3(char* str) {\n      int a[26] = { 0 };\n      int i = 0;\n      while (*str) {\n            a[*str - 'a']++;\n            if (a[*str - 'a'] &gt; 1) return 0;\n            str++;\n      }\n      while ((i&lt;26) &amp;&amp; (a[i] == 0))\n            i++;\n\n      while ((i &lt; 26) &amp;&amp; (a[i] == 1))\n            i++;\n\n      while (i &lt; 26) {\n            if (a[i] != 0) return 0;\n            i++;\n      }\n      return 1;\n}</code></pre><strong>או</strong> (גרסה שנייה כפי שמופיעה בפתרון הרשמי, עמ' 3-4):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int f_33(char* str) {\n      int count[26] = { 0 };\n      int i = 0,j;\n      char min='z', max='a';\n      while (*str) {\n            count[*str - 'a']++;\n            if (count[*str - 'a'] &gt; 1) return 0;\n            if (min &gt; *str)\n                  min = *str;\n            else\n                  if (max &lt; *str)\n                        max = *str;\n            str++;\n      }\n\n      i = min - 'a';\n      j= max - 'a';\n      while (i &lt;= j) {\n            if (count[i] != 1) return 0;\n            i++;\n      }\n      return 1;\n}</code></pre>הגרסה הראשונה סופרת הופעות של כל אות (חזרה מחזירה 0), ואז בודקת שהאותיות שנספרו יוצרות בלוק רציף אחד: מדלגים על אפסים, על אחדים, ואחרי זה כל התאים חייבים להיות 0. סריקה אחת ועוד 26 תאים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.<br><strong>הערה:</strong> בגרסה השנייה המשתנה <code class=\"tok\" dir=\"ltr\">max</code> מתעדכן רק כשהאות אינה מינימום חדש, ולכן למשל עבור \"ca\" היא מחזירה 1 (<code class=\"tok\" dir=\"ltr\">max</code> נשאר <code class=\"tok\" dir=\"ltr\">'a'</code>) אף שהאות <code class=\"tok\" dir=\"ltr\">b</code> חסרה והתשובה הנכונה 0. הגרסה הראשונה תקינה.",
   "pointsTotal": 25,
   "pitfallsHtml": [
    "לבדוק רק שאין חזרות ולשכוח לבדוק שהאותיות רצופות.",
    "לדרוש שהאותיות יופיעו במחרוזת בסדר עולה (כל אות גדולה ב-1 מקודמתה): <code class=\"tok\" dir=\"ltr\">\"cbed\"</code> חוקית אף שאינה ממוינת, ולכן רק הרצף של הספירות קובע.",
    "מעקב מקסימום ומינימום עם <code class=\"tok\" dir=\"ltr\">if</code>/<code class=\"tok\" dir=\"ltr\">else if</code>: אות שהיא מינימום חדש לא נבדקת כמקסימום (הגרסה השנייה)."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "basics_io",
   "question": "כתבו פונקציה **יעילה** `int maxmax (int n)` שקולטת (על ידי פונקציה `scanf`) סדרת מספרים שלמים בגודל `n` ומדפיסה כל מספר (לא כולל המספר הראשון בסדרה) **שגדול ממש** מכל המספרים שנקלטו לפניו.\nדוגמה: עבור הקלט: `2,6,3,4,7,5`\nהפונקציה תדפיס: `6,7`.\nעל הפונקציה לרוץ בסדר גודל של **n**.\nאין להשתמש במערך לפתרון השאלה.",
   "solution": "**פתרון רשמי** (22A-B עמ' 4):\n```c\nint  maxmax(int n) {\n    int max, i, num;\n    scanf(\"%d\", &max);\n    for (i = 0; i < n - 1; i++) {\n        scanf(\"%d\", &num);\n        if (num > max) {\n            printf(\"%d\", num);\n            max = num;\n        }\n    }\n}\n```\nשומרים רק את המקסימום עד כה. הראשון נקלט בנפרד, וכל מספר נוסף שגדול ממנו מודפס והופך למקסימום החדש. קריאה אחת לכל מספר וללא מערך, כלומר $O(n)$ וזיכרון $O(1)$.",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 30,
   "rubric": [
    {
     "text": "קליטת המספר הראשון ל-`max` בנפרד, בלי להדפיס אותו",
     "points": 8,
     "html": "קליטת המספר הראשון ל-<code class=\"tok\" dir=\"ltr\">max</code> בנפרד, בלי להדפיס אותו"
    },
    {
     "text": "לולאה שקולטת עוד `n - 1` מספרים",
     "points": 8,
     "html": "לולאה שקולטת עוד <code class=\"tok\" dir=\"ltr\">n - 1</code> מספרים"
    },
    {
     "text": "הדפסה רק כש-`num > max` (גדול **ממש**)",
     "points": 10,
     "html": "הדפסה רק כש-<code class=\"tok\" dir=\"ltr\">num &gt; max</code> (גדול <strong>ממש</strong>)"
    },
    {
     "text": "עדכון `max = num` אחרי ההדפסה, בלי מערך (זיכרון $O(1)$ וזמן $O(n)$)",
     "points": 4,
     "html": "עדכון <code class=\"tok\" dir=\"ltr\">max = num</code> אחרי ההדפסה, בלי מערך (זיכרון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span> וזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>)"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "שמירת כל המספרים במערך: הנחיית השאלה אוסרת.",
    "`>=` במקום `>`: מדפיס גם מספר ששווה למקסימום הקודם.",
    "להדפיס את המספר הראשון או לא לעדכן את `max` אחרי ההדפסה."
   ],
   "steps": [
    {
     "type": "text",
     "prompt": "מה מדפיסה `maxmax(6)` על הקלט `2 6 3 4 7 5`? (הקוד מדפיס `%d` בלי מפרידים)",
     "accept": [
      "67"
     ],
     "normalize": "none",
     "explain": "מודפסים 6 ו-7 בלבד, צמודים (ריצה אמיתית: 67).",
     "promptHtml": "מה מדפיסה <code class=\"tok\" dir=\"ltr\">maxmax(6)</code> על הקלט <code class=\"tok\" dir=\"ltr\">2 6 3 4 7 5</code>? (הקוד מדפיס <code class=\"tok\" dir=\"ltr\">%d</code> בלי מפרידים)",
     "explainHtml": "מודפסים 6 ו-7 בלבד, צמודים (ריצה אמיתית: 67)."
    },
    {
     "type": "numeric",
     "prompt": "כמה מספרים מודפסים באותה ריצה?",
     "answer": 2,
     "tol": 0,
     "explain": "6 גדול מ-2 ו-7 גדול מ-6; 3, 4 ו-5 אינם גדולים מהמקסימום (ריצה אמיתית: 2).",
     "promptHtml": "כמה מספרים מודפסים באותה ריצה?",
     "explainHtml": "6 גדול מ-2 ו-7 גדול מ-6; 3, 4 ו-5 אינם גדולים מהמקסימום (ריצה אמיתית: 2)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את תנאי ההדפסה.",
     "code": true,
     "lines": [
      "int  maxmax(int n) {",
      "    int max, i, num;",
      "    scanf(\"%d\", &max);",
      "    for (i = 0; i < n - 1; i++) {",
      "        scanf(\"%d\", &num);",
      "___",
      "            printf(\"%d\", num);",
      "            max = num;",
      "        }",
      "    }",
      "}"
     ],
     "blankIndex": 5,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (num > max) {",
       "html": "if (num &gt; max) {"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (num >= max) {",
       "html": "if (num &gt;= max) {"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (num < max) {",
       "html": "if (num &lt; max) {"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (num != max) {",
       "html": "if (num != max) {"
      }
     ],
     "correctId": "a",
     "explain": "מדפיסים רק מספר גדול ממש מכל קודמיו, כלומר מהמקסימום עד כה.",
     "promptHtml": "השלימו את תנאי ההדפסה.",
     "explainHtml": "מדפיסים רק מספר גדול ממש מכל קודמיו, כלומר מהמקסימום עד כה.",
     "linesHtml": [
      "int  maxmax(int n) {",
      "    int max, i, num;",
      "    scanf(\"%d\", &amp;max);",
      "    for (i = 0; i &lt; n - 1; i++) {",
      "        scanf(\"%d\", &amp;num);",
      "___",
      "            printf(\"%d\", num);",
      "            max = num;",
      "        }",
      "    }",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `maxmax`.",
     "code": true,
     "lines": [
      "int  maxmax(int n) {\n    int max, i, num;",
      "    scanf(\"%d\", &max);",
      "    for (i = 0; i < n - 1; i++) {\n        scanf(\"%d\", &num);",
      "        if (num > max) {\n            printf(\"%d\", num);\n            max = num;\n        }",
      "    }\n}"
     ],
     "explain": "הצהרות, קליטת הראשון, כותרת הלולאה עם קליטה, בלוק התנאי (הדפסה ועדכון), וסגירה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">maxmax</code>.",
     "explainHtml": "הצהרות, קליטת הראשון, כותרת הלולאה עם קליטה, בלוק התנאי (הדפסה ועדכון), וסגירה.",
     "linesHtml": [
      "int  maxmax(int n) {\n    int max, i, num;",
      "    scanf(\"%d\", &amp;max);",
      "    for (i = 0; i &lt; n - 1; i++) {\n        scanf(\"%d\", &amp;num);",
      "        if (num &gt; max) {\n            printf(\"%d\", num);\n            max = num;\n        }",
      "    }\n}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int  maxmax(int n) {",
      "    int max, i, num;",
      "    scanf(\"%d\", &max);",
      "    for (i = 0; i < n - 1; i++) {",
      "        scanf(\"%d\", &num);",
      "        if (num >= max) {",
      "            printf(\"%d\", num);",
      "            max = num;",
      "        }",
      "    }",
      "}"
     ],
     "bugIndex": 5,
     "explain": "עם `>=` על הקלט `2 2 3` מודפס 23 במקום 3 (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&gt;=</code> על הקלט <code class=\"tok\" dir=\"ltr\">2 2 3</code> מודפס 23 במקום 3 (ריצה אמיתית).",
     "linesHtml": [
      "int  maxmax(int n) {",
      "    int max, i, num;",
      "    scanf(\"%d\", &amp;max);",
      "    for (i = 0; i &lt; n - 1; i++) {",
      "        scanf(\"%d\", &amp;num);",
      "        if (num &gt;= max) {",
      "            printf(\"%d\", num);",
      "            max = num;",
      "        }",
      "    }",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "22A-B-Q4",
   "partKey": "",
   "examCode": "22A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד ב (2022)",
   "year": 2022,
   "source": "exam",
   "topicLabel": "משתנים, קלט/פלט וביטויים",
   "questionHtml": "כתבו פונקציה <strong>יעילה</strong> <code class=\"tok\" dir=\"ltr\">int maxmax (int n)</code> שקולטת (על ידי פונקציה <code class=\"tok\" dir=\"ltr\">scanf</code>) סדרת מספרים שלמים בגודל <code class=\"tok\" dir=\"ltr\">n</code> ומדפיסה כל מספר (לא כולל המספר הראשון בסדרה) <strong>שגדול ממש</strong> מכל המספרים שנקלטו לפניו.<br>דוגמה: עבור הקלט: <code class=\"tok\" dir=\"ltr\">2,6,3,4,7,5</code><br>הפונקציה תדפיס: <code class=\"tok\" dir=\"ltr\">6,7</code>.<br>על הפונקציה לרוץ בסדר גודל של <strong>n</strong>.<br>אין להשתמש במערך לפתרון השאלה.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (22A-B עמ' 4):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int  maxmax(int n) {\n    int max, i, num;\n    scanf(\"%d\", &amp;max);\n    for (i = 0; i &lt; n - 1; i++) {\n        scanf(\"%d\", &amp;num);\n        if (num &gt; max) {\n            printf(\"%d\", num);\n            max = num;\n        }\n    }\n}</code></pre>שומרים רק את המקסימום עד כה. הראשון נקלט בנפרד, וכל מספר נוסף שגדול ממנו מודפס והופך למקסימום החדש. קריאה אחת לכל מספר וללא מערך, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> וזיכרון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(1)</annotation></semantics></math></span>.",
   "pointsTotal": 30,
   "pitfallsHtml": [
    "שמירת כל המספרים במערך: הנחיית השאלה אוסרת.",
    "<code class=\"tok\" dir=\"ltr\">&gt;=</code> במקום <code class=\"tok\" dir=\"ltr\">&gt;</code>: מדפיס גם מספר ששווה למקסימום הקודם.",
    "להדפיס את המספר הראשון או לא לעדכן את <code class=\"tok\" dir=\"ltr\">max</code> אחרי ההדפסה."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "arrays",
   "question": "נתון מערך **ממוין** בסדר עולה בגודל `2n` של מספרים שלמים. ידוע שבמערך ישנם `n` זוגות של איברים כך שסכום האיברים בכל הזוגות שווה זה לזה.\nלמשל, בהינתן `n=3`, מערך לדוגמא שיעמוד בתנאי השאלה הוא המערך `1,2,3,7,8,9` שמכיל שלושה זוגות שסכום כל זוג שווה ל-10: `(1,9),(2,8),(3,7)`.\nיש לכתוב את הפונקציה `void sortpairs(int* a, int size)` שמסדרת איברים במערך כך שהמערך יכיל לזוגות של מספרים עם אותו סכום זה אחר זה. אין חשיבות לסדר של הזוגות או האברים בזוגות.\nלמשל, הפונקציה `sortpairs` עבור המערך בדוגמא לעיל, יכולה לשנות את המערך למערך הבא: `1,9,2,8,3,7` או לחלופין למערך `2,8,7,3,1,9` או למערך `3,7,1,9,2,8` וכו.\nאין להשתמש במערך עזר.\nעל הפונקציה לרוץ בסדר גודל של **n**.\nכתבו את הקוד של הפונקציה **ונמקו בקצרה** את נכונות הפתרון.",
   "solution": "**פתרון רשמי** (23A-A עמ' 2). הנימוק:\nידוע שהמערך בגודל זוגי ממוין ובו כל האיברים אפשר לחלק לזוגות כך שסכום האיברים בכל הזוגות שווה זה לזה. מזה נובע שהזוגות האלה תופסים מקומות 0 ו-`size-1`, 1 ו-`size-2`, וכללי: כל זוג תופס מקומות `(i, size-1-i)`. לכן אם נחליף בין מקום 1 ו-`size-1` נקבל כבר **שני** זוגות מסודרים בקצוות של המערך: בשני מקומות ראשונים ובשני מקומות אחרונים. לכן אחרי ההחלפה הראשונה נשאר לסדר מערך ממקום 2 עד `size-3`. כך על ידי `size/4` החלפות נסדר כל המערך.\n**פתרון:**\n```c\nvoid sortpairs(int* a, int size)\n{\n    int i;\n    for (i = 1; i < size/2 ; i += 2)\n        swap(a + i, a + size - i);\n}\n```\n**אותו רעיון בצורה אחרת:**\n```c\nvoid sortpairs(int* a, int size)\n{\n    int low = 1, high = size - 1;\n    while (low < high-1 ) {\n        swap(a + low, a + high);\n        low += 2;\n        high -= 2;\n    }\n}\n```\n**רעיון אחר:**\n```c\nvoid sortpairs_2(int* a, int size)\n{\n    int i,sum=a[0]+a[size-1];\n    for (i = 0; i < size-1; i += 2) {\n        a[i + 1] = sum-a[i];\n    }\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "הנימוק: הזוגות תופסים מקומות `(i, size-1-i)`, ולכן החלפה אחת בין מקום 1 לסוף מסדרת שני זוגות בקצוות",
     "points": 6,
     "html": "הנימוק: הזוגות תופסים מקומות <code class=\"tok\" dir=\"ltr\">(i, size-1-i)</code>, ולכן החלפה אחת בין מקום 1 לסוף מסדרת שני זוגות בקצוות"
    },
    {
     "text": "לולאה על אינדקסים אי-זוגיים (`i = 1, 3, ...` עד `size/2`) עם `swap(a + i, a + size - i)`",
     "points": 10,
     "html": "לולאה על אינדקסים אי-זוגיים (<code class=\"tok\" dir=\"ltr\">i = 1, 3, ...</code> עד <code class=\"tok\" dir=\"ltr\">size/2</code>) עם <code class=\"tok\" dir=\"ltr\">swap(a + i, a + size - i)</code>"
    },
    {
     "text": "עבודה במקום באמצעות `swap`, בלי מערך עזר",
     "points": 4,
     "html": "עבודה במקום באמצעות <code class=\"tok\" dir=\"ltr\">swap</code>, בלי מערך עזר"
    },
    {
     "text": "סידור כל המערך ב-`size/4` החלפות בלבד, כלומר זמן ריצה $O(n)$",
     "points": 6,
     "html": "סידור כל המערך ב-<code class=\"tok\" dir=\"ltr\">size/4</code> החלפות בלבד, כלומר זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש במערך עזר או למיין מחדש ($O(n \\log n)$), בניגוד להוראות השאלה.",
    "להחליף את `a[i]` עם `a[size-1-i]` לכל `i < size/2`: זה הופך את סדר המערך (`9,8,7,3,2,1` עבור הדוגמה) ואינו מצמיד זוגות שסכומם שווה.",
    "לרוץ על כל האינדקסים (`i < size`) ולהחליף כל זוג פעמיים, כך שההחלפות מבטלות זו את זו."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה תוכן המערך `{1, 2, 3, 7, 8, 9}` אחרי הרצת `sortpairs` (הפתרון הרשמי)?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`1, 9, 3, 7, 8, 2`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 9, 3, 7, 8, 2</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1, 2, 3, 7, 8, 9`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 2, 3, 7, 8, 9</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`1, 9, 2, 8, 3, 7`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 9, 2, 8, 3, 7</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`9, 1, 8, 2, 7, 3`",
       "html": "<code class=\"tok\" dir=\"ltr\">9, 1, 8, 2, 7, 3</code>"
      }
     ],
     "correctId": "a",
     "explain": "ב-`size=6` הלולאה רצה רק עבור `i=1` ומחליפה בין `a[1]` ל-`a[5]`, כך שמתקבל `1, 9, 3, 7, 8, 2` (ריצה אמיתית). הזוגות `(1,9)`, `(3,7)`, `(8,2)` סכומם 10.",
     "promptHtml": "מה תוכן המערך <code class=\"tok\" dir=\"ltr\">{1, 2, 3, 7, 8, 9}</code> אחרי הרצת <code class=\"tok\" dir=\"ltr\">sortpairs</code> (הפתרון הרשמי)?",
     "explainHtml": "ב-<code class=\"tok\" dir=\"ltr\">size=6</code> הלולאה רצה רק עבור <code class=\"tok\" dir=\"ltr\">i=1</code> ומחליפה בין <code class=\"tok\" dir=\"ltr\">a[1]</code> ל-<code class=\"tok\" dir=\"ltr\">a[5]</code>, כך שמתקבל <code class=\"tok\" dir=\"ltr\">1, 9, 3, 7, 8, 2</code> (ריצה אמיתית). הזוגות <code class=\"tok\" dir=\"ltr\">(1,9)</code>, <code class=\"tok\" dir=\"ltr\">(3,7)</code>, <code class=\"tok\" dir=\"ltr\">(8,2)</code> סכומם 10."
    },
    {
     "type": "numeric",
     "prompt": "כמה פעמים נקראת `swap` עבור מערך בגודל `12` שעומד בתנאי השאלה?",
     "answer": 3,
     "tol": 0,
     "explain": "האינדקסים `i = 1, 3, 5` מקיימים `i < 6`, כלומר שלוש החלפות, שהן `size/4` (ריצה אמיתית: 3).",
     "promptHtml": "כמה פעמים נקראת <code class=\"tok\" dir=\"ltr\">swap</code> עבור מערך בגודל <code class=\"tok\" dir=\"ltr\">12</code> שעומד בתנאי השאלה?",
     "explainHtml": "האינדקסים <code class=\"tok\" dir=\"ltr\">i = 1, 3, 5</code> מקיימים <code class=\"tok\" dir=\"ltr\">i &lt; 6</code>, כלומר שלוש החלפות, שהן <code class=\"tok\" dir=\"ltr\">size/4</code> (ריצה אמיתית: 3)."
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `sortpairs`.",
     "code": true,
     "lines": [
      "void sortpairs(int* a, int size)",
      "{",
      "    int i;",
      "    for (i = 1; i < size/2 ; i += 2)",
      "        swap(a + i, a + size - i);",
      "}"
     ],
     "explain": "כותרת, הגדרת `i`, לולאה שרצה על אינדקסים אי-זוגיים, ההחלפה, וסגירה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">sortpairs</code>.",
     "explainHtml": "כותרת, הגדרת <code class=\"tok\" dir=\"ltr\">i</code>, לולאה שרצה על אינדקסים אי-זוגיים, ההחלפה, וסגירה.",
     "linesHtml": [
      "void sortpairs(int* a, int size)",
      "{",
      "    int i;",
      "    for (i = 1; i &lt; size/2 ; i += 2)",
      "        swap(a + i, a + size - i);",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה אינה מצמידה זוגות. מצאו אותה.",
     "code": true,
     "lines": [
      "void sortpairs(int* a, int size)",
      "{",
      "    int i;",
      "    for (i = 1; i < size ; i += 2)",
      "        swap(a + i, a + size - i);",
      "}"
     ],
     "bugIndex": 3,
     "explain": "`i < size` גורם לכל החלפה להתבצע פעמיים (`i=1` ואחר כך `i=5`), והמערך חוזר למצבו ההתחלתי: `1, 2, 3, 7, 8, 9` (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה אינה מצמידה זוגות. מצאו אותה.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">i &lt; size</code> גורם לכל החלפה להתבצע פעמיים (<code class=\"tok\" dir=\"ltr\">i=1</code> ואחר כך <code class=\"tok\" dir=\"ltr\">i=5</code>), והמערך חוזר למצבו ההתחלתי: <code class=\"tok\" dir=\"ltr\">1, 2, 3, 7, 8, 9</code> (ריצה אמיתית).",
     "linesHtml": [
      "void sortpairs(int* a, int size)",
      "{",
      "    int i;",
      "    for (i = 1; i &lt; size ; i += 2)",
      "        swap(a + i, a + size - i);",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "מספר ההחלפות הוא `size/4` וכל אחת עולה זמן קבוע, ולכן $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "מספר ההחלפות הוא <code class=\"tok\" dir=\"ltr\">size/4</code> וכל אחת עולה זמן קבוע, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "23A-A-Q1",
   "partKey": "",
   "examCode": "23A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
   "year": 2023,
   "source": "exam",
   "topicLabel": "מערכים ויעילות",
   "questionHtml": "נתון מערך <strong>ממוין</strong> בסדר עולה בגודל <code class=\"tok\" dir=\"ltr\">2n</code> של מספרים שלמים. ידוע שבמערך ישנם <code class=\"tok\" dir=\"ltr\">n</code> זוגות של איברים כך שסכום האיברים בכל הזוגות שווה זה לזה.<br>למשל, בהינתן <code class=\"tok\" dir=\"ltr\">n=3</code>, מערך לדוגמא שיעמוד בתנאי השאלה הוא המערך <code class=\"tok\" dir=\"ltr\">1,2,3,7,8,9</code> שמכיל שלושה זוגות שסכום כל זוג שווה ל-10: <code class=\"tok\" dir=\"ltr\">(1,9),(2,8),(3,7)</code>.<br>יש לכתוב את הפונקציה <code class=\"tok\" dir=\"ltr\">void sortpairs(int* a, int size)</code> שמסדרת איברים במערך כך שהמערך יכיל לזוגות של מספרים עם אותו סכום זה אחר זה. אין חשיבות לסדר של הזוגות או האברים בזוגות.<br>למשל, הפונקציה <code class=\"tok\" dir=\"ltr\">sortpairs</code> עבור המערך בדוגמא לעיל, יכולה לשנות את המערך למערך הבא: <code class=\"tok\" dir=\"ltr\">1,9,2,8,3,7</code> או לחלופין למערך <code class=\"tok\" dir=\"ltr\">2,8,7,3,1,9</code> או למערך <code class=\"tok\" dir=\"ltr\">3,7,1,9,2,8</code> וכו.<br>אין להשתמש במערך עזר.<br>על הפונקציה לרוץ בסדר גודל של <strong>n</strong>.<br>כתבו את הקוד של הפונקציה <strong>ונמקו בקצרה</strong> את נכונות הפתרון.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (23A-A עמ' 2). הנימוק:<br>ידוע שהמערך בגודל זוגי ממוין ובו כל האיברים אפשר לחלק לזוגות כך שסכום האיברים בכל הזוגות שווה זה לזה. מזה נובע שהזוגות האלה תופסים מקומות 0 ו-<code class=\"tok\" dir=\"ltr\">size-1</code>, 1 ו-<code class=\"tok\" dir=\"ltr\">size-2</code>, וכללי: כל זוג תופס מקומות <code class=\"tok\" dir=\"ltr\">(i, size-1-i)</code>. לכן אם נחליף בין מקום 1 ו-<code class=\"tok\" dir=\"ltr\">size-1</code> נקבל כבר <strong>שני</strong> זוגות מסודרים בקצוות של המערך: בשני מקומות ראשונים ובשני מקומות אחרונים. לכן אחרי ההחלפה הראשונה נשאר לסדר מערך ממקום 2 עד <code class=\"tok\" dir=\"ltr\">size-3</code>. כך על ידי <code class=\"tok\" dir=\"ltr\">size/4</code> החלפות נסדר כל המערך.<br><strong>פתרון:</strong><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void sortpairs(int* a, int size)\n{\n    int i;\n    for (i = 1; i &lt; size/2 ; i += 2)\n        swap(a + i, a + size - i);\n}</code></pre><strong>אותו רעיון בצורה אחרת:</strong><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void sortpairs(int* a, int size)\n{\n    int low = 1, high = size - 1;\n    while (low &lt; high-1 ) {\n        swap(a + low, a + high);\n        low += 2;\n        high -= 2;\n    }\n}</code></pre><strong>רעיון אחר:</strong><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void sortpairs_2(int* a, int size)\n{\n    int i,sum=a[0]+a[size-1];\n    for (i = 0; i &lt; size-1; i += 2) {\n        a[i + 1] = sum-a[i];\n    }\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "להשתמש במערך עזר או למיין מחדש (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log n)</annotation></semantics></math></span>), בניגוד להוראות השאלה.",
    "להחליף את <code class=\"tok\" dir=\"ltr\">a[i]</code> עם <code class=\"tok\" dir=\"ltr\">a[size-1-i]</code> לכל <code class=\"tok\" dir=\"ltr\">i &lt; size/2</code>: זה הופך את סדר המערך (<code class=\"tok\" dir=\"ltr\">9,8,7,3,2,1</code> עבור הדוגמה) ואינו מצמיד זוגות שסכומם שווה.",
    "לרוץ על כל האינדקסים (<code class=\"tok\" dir=\"ltr\">i &lt; size</code>) ולהחליף כל זוג פעמיים, כך שההחלפות מבטלות זו את זו."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "strings",
   "question": "כתבו את הפונקציה `void squeeze (char *str)` המקבלת כפרמטר מחרוזת של אותיות קטנות באנגלית ומשנה את המחרוזת כך שתכיל את כל התווים המופיעים בדיוק **שלוש פעמים** במחרוזת המקורית.\nעל המחרוזת שמתקבלת להכיל מופע אחד בלבד של התווים הללו (המופיעים בדיוק שלוש פעמים) ועל סדר התווים במחרוזת שמתקבלת להיות לפי סדר המופע הראשון של כל תו במחרוזת המקורית.\nמותר להשתמש במערך עזר אחד לכל היותר.\nעל זמן הריצה של הפונקציה להיות בסדר גודל של **n**, כאשר n מייצג את מספר האותיות במחרוזת המקורית.\nלדוגמא:\nהמחרוזת `dbcabafacbcbdd` תשתנה על ידי הפונקציה למחרוזת `dca`\nשימו לב שהפונקציה מכניסה תו סוף מחרוזת (`'\\0'`) מימין לסדרת התווים `dca` ואין חשיבות לתווים שנמצאים מימין לתו סוף המחרוזת.",
   "solution": "**פתרון רשמי** (23A-A עמ' 3), עם אינדקסים:\n```c\nvoid squeeze(char* str)\n{\n    int i, pos = 0;\n    int count[26] = { 0 };\n    int len = strlen(str);\n    for (i = 0; i < len; ++i)\n        count[str[i] - 'a']++;\n    for (i = 0; i < len; ++i){\n        if (count[str[i] - 'a'] == 3)\n        {\n            str[pos++] = str[i];\n            count[str[i] - 'a'] = 0;\n        }\n    }\n    str[pos] = '\\0';\n}\n```\n**פתרון עם מצביעים:**\n```c\nvoid squeeze(char* str)\n{\n    int count[26] = { 0 };\n    char* temp = str;\n    while (*temp)\n        count[*temp++ - 'a']++;\n    temp = str;\n    while (*temp)\n        if (count[*temp++ - 'a'] == 3)\n        {\n            *str = *(temp - 1);\n            count[*str++ - 'a'] = 0;\n        }\n    *str = '\\0';\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "מערך מונים בגודל 26 ומילויו בסריקה אחת של המחרוזת",
     "points": 7,
     "html": "מערך מונים בגודל 26 ומילויו בסריקה אחת של המחרוזת"
    },
    {
     "text": "סריקה שנייה שמעתיקה למקום `pos` רק תווים שמונה שלהם בדיוק `3`, לפי סדר המופע הראשון",
     "points": 8,
     "html": "סריקה שנייה שמעתיקה למקום <code class=\"tok\" dir=\"ltr\">pos</code> רק תווים שמונה שלהם בדיוק <code class=\"tok\" dir=\"ltr\">3</code>, לפי סדר המופע הראשון"
    },
    {
     "text": "איפוס המונה אחרי ההעתקה, כדי שהתו יופיע פעם אחת בלבד",
     "points": 6,
     "html": "איפוס המונה אחרי ההעתקה, כדי שהתו יופיע פעם אחת בלבד"
    },
    {
     "text": "סיום המחרוזת ב-`'\\0'` במקום `pos`",
     "points": 3,
     "html": "סיום המחרוזת ב-<code class=\"tok\" dir=\"ltr\">'\\0'</code> במקום <code class=\"tok\" dir=\"ltr\">pos</code>"
    },
    {
     "text": "שתי סריקות לינאריות ומערך עזר אחד בלבד, כלומר $O(n)$",
     "points": 2,
     "html": "שתי סריקות לינאריות ומערך עזר אחד בלבד, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להעתיק תו בכל פעם שהמונה שלו 3 בלי לאפס אותו, כך שהוא יופיע שלוש פעמים בתוצאה.",
    "לשכוח לכתוב `'\\0'` בסוף, והמחרוזת נשארת עם תווים ישנים מימין.",
    "לספור ולבדוק באותה סריקה: המונה עדיין לא סופי כשמגיעים למופע הראשון."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מכילה המחרוזת `\"dbcabafacbcbdd\"` אחרי `squeeze`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`dca`",
       "html": "<code class=\"tok\" dir=\"ltr\">dca</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`dcab`",
       "html": "<code class=\"tok\" dir=\"ltr\">dcab</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`dbca`",
       "html": "<code class=\"tok\" dir=\"ltr\">dbca</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`acd`",
       "html": "<code class=\"tok\" dir=\"ltr\">acd</code>"
      }
     ],
     "correctId": "a",
     "explain": "התווים `d`, `c`, `a` מופיעים בדיוק שלוש פעמים כל אחד (`b` מופיע ארבע פעמים ו-`f` פעם אחת), והסדר לפי המופע הראשון הוא `dca` (ריצה אמיתית).",
     "promptHtml": "מה מכילה המחרוזת <code class=\"tok\" dir=\"ltr\">\"dbcabafacbcbdd\"</code> אחרי <code class=\"tok\" dir=\"ltr\">squeeze</code>?",
     "explainHtml": "התווים <code class=\"tok\" dir=\"ltr\">d</code>, <code class=\"tok\" dir=\"ltr\">c</code>, <code class=\"tok\" dir=\"ltr\">a</code> מופיעים בדיוק שלוש פעמים כל אחד (<code class=\"tok\" dir=\"ltr\">b</code> מופיע ארבע פעמים ו-<code class=\"tok\" dir=\"ltr\">f</code> פעם אחת), והסדר לפי המופע הראשון הוא <code class=\"tok\" dir=\"ltr\">dca</code> (ריצה אמיתית)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0;",
      "    int count[26] = { 0 };",
      "    int len = strlen(str);",
      "    for (i = 0; i < len; ++i)",
      "        count[str[i] - 'a']++;",
      "    for (i = 0; i < len; ++i){",
      "        if (count[str[i] - 'a'] == 3)",
      "        {",
      "            str[pos++] = str[i];",
      "___",
      "        }",
      "    }",
      "    str[pos] = '\\0';",
      "}"
     ],
     "blankIndex": 11,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "count[str[i] - 'a'] = 0;",
       "html": "count[str[i] - 'a'] = 0;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "count[str[i] - 'a'] = pos;",
       "html": "count[str[i] - 'a'] = pos;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "count[str[i] - 'a'] = 3;",
       "html": "count[str[i] - 'a'] = 3;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "pos++;",
       "html": "pos++;"
      }
     ],
     "correctId": "a",
     "explain": "אחרי העתקת התו מאפסים את המונה שלו כדי שמופעיו הבאים לא יועתקו שוב.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "אחרי העתקת התו מאפסים את המונה שלו כדי שמופעיו הבאים לא יועתקו שוב.",
     "linesHtml": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0;",
      "    int count[26] = { 0 };",
      "    int len = strlen(str);",
      "    for (i = 0; i &lt; len; ++i)",
      "        count[str[i] - 'a']++;",
      "    for (i = 0; i &lt; len; ++i){",
      "        if (count[str[i] - 'a'] == 3)",
      "        {",
      "            str[pos++] = str[i];",
      "___",
      "        }",
      "    }",
      "    str[pos] = '\\0';",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `squeeze` (הפתרון הרשמי עם אינדקסים).",
     "code": true,
     "lines": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0, count[26] = { 0 }, len = strlen(str);",
      "    for (i = 0; i < len; ++i) count[str[i] - 'a']++;",
      "    for (i = 0; i < len; ++i) if (count[str[i] - 'a'] == 3) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; }",
      "    str[pos] = '\\0';",
      "}"
     ],
     "explain": "הגדרות, ספירה, סריקה שנייה שמעתיקה ומאפסת, ובסוף `'\\0'`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">squeeze</code> (הפתרון הרשמי עם אינדקסים).",
     "explainHtml": "הגדרות, ספירה, סריקה שנייה שמעתיקה ומאפסת, ובסוף <code class=\"tok\" dir=\"ltr\">'\\0'</code>.",
     "linesHtml": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0, count[26] = { 0 }, len = strlen(str);",
      "    for (i = 0; i &lt; len; ++i) count[str[i] - 'a']++;",
      "    for (i = 0; i &lt; len; ++i) if (count[str[i] - 'a'] == 3) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; }",
      "    str[pos] = '\\0';",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה בגרסה הבאה. איזו?",
     "code": true,
     "lines": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0;",
      "    int count[26] = { 0 };",
      "    int len = strlen(str);",
      "    for (i = 0; i < len; ++i)",
      "        count[str[i] - 'a']++;",
      "    for (i = 0; i < len; ++i){",
      "        if (count[str[i] - 'a'] == 2)",
      "        {",
      "            str[pos++] = str[i];",
      "            count[str[i] - 'a'] = 0;",
      "        }",
      "    }",
      "    str[pos] = '\\0';",
      "}"
     ],
     "bugIndex": 8,
     "explain": "התנאי `== 2` בוחר תווים שמופיעים פעמיים: עבור `\"dbcabafacbcbdd\"` אין כאלה והתוצאה ריקה (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה בגרסה הבאה. איזו?",
     "explainHtml": "התנאי <code class=\"tok\" dir=\"ltr\">== 2</code> בוחר תווים שמופיעים פעמיים: עבור <code class=\"tok\" dir=\"ltr\">\"dbcabafacbcbdd\"</code> אין כאלה והתוצאה ריקה (ריצה אמיתית).",
     "linesHtml": [
      "void squeeze(char* str)",
      "{",
      "    int i, pos = 0;",
      "    int count[26] = { 0 };",
      "    int len = strlen(str);",
      "    for (i = 0; i &lt; len; ++i)",
      "        count[str[i] - 'a']++;",
      "    for (i = 0; i &lt; len; ++i){",
      "        if (count[str[i] - 'a'] == 2)",
      "        {",
      "            str[pos++] = str[i];",
      "            count[str[i] - 'a'] = 0;",
      "        }",
      "    }",
      "    str[pos] = '\\0';",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות של המחרוזת ומערך מונים בגודל קבוע, ולכן $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות של המחרוזת ומערך מונים בגודל קבוע, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "23A-A-Q2",
   "partKey": "",
   "examCode": "23A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
   "year": 2023,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "כתבו את הפונקציה <code class=\"tok\" dir=\"ltr\">void squeeze (char *str)</code> המקבלת כפרמטר מחרוזת של אותיות קטנות באנגלית ומשנה את המחרוזת כך שתכיל את כל התווים המופיעים בדיוק <strong>שלוש פעמים</strong> במחרוזת המקורית.<br>על המחרוזת שמתקבלת להכיל מופע אחד בלבד של התווים הללו (המופיעים בדיוק שלוש פעמים) ועל סדר התווים במחרוזת שמתקבלת להיות לפי סדר המופע הראשון של כל תו במחרוזת המקורית.<br>מותר להשתמש במערך עזר אחד לכל היותר.<br>על זמן הריצה של הפונקציה להיות בסדר גודל של <strong>n</strong>, כאשר n מייצג את מספר האותיות במחרוזת המקורית.<br>לדוגמא:<br>המחרוזת <code class=\"tok\" dir=\"ltr\">dbcabafacbcbdd</code> תשתנה על ידי הפונקציה למחרוזת <code class=\"tok\" dir=\"ltr\">dca</code><br>שימו לב שהפונקציה מכניסה תו סוף מחרוזת (<code class=\"tok\" dir=\"ltr\">'\\0'</code>) מימין לסדרת התווים <code class=\"tok\" dir=\"ltr\">dca</code> ואין חשיבות לתווים שנמצאים מימין לתו סוף המחרוזת.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (23A-A עמ' 3), עם אינדקסים:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void squeeze(char* str)\n{\n    int i, pos = 0;\n    int count[26] = { 0 };\n    int len = strlen(str);\n    for (i = 0; i &lt; len; ++i)\n        count[str[i] - 'a']++;\n    for (i = 0; i &lt; len; ++i){\n        if (count[str[i] - 'a'] == 3)\n        {\n            str[pos++] = str[i];\n            count[str[i] - 'a'] = 0;\n        }\n    }\n    str[pos] = '\\0';\n}</code></pre><strong>פתרון עם מצביעים:</strong><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void squeeze(char* str)\n{\n    int count[26] = { 0 };\n    char* temp = str;\n    while (*temp)\n        count[*temp++ - 'a']++;\n    temp = str;\n    while (*temp)\n        if (count[*temp++ - 'a'] == 3)\n        {\n            *str = *(temp - 1);\n            count[*str++ - 'a'] = 0;\n        }\n    *str = '\\0';\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "להעתיק תו בכל פעם שהמונה שלו 3 בלי לאפס אותו, כך שהוא יופיע שלוש פעמים בתוצאה.",
    "לשכוח לכתוב <code class=\"tok\" dir=\"ltr\">'\\0'</code> בסוף, והמחרוזת נשארת עם תווים ישנים מימין.",
    "לספור ולבדוק באותה סריקה: המונה עדיין לא סופי כשמגיעים למופע הראשון."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "sorting_merge",
   "question": "נתון מערך **ממוין** בסדר עולה של מספרים שלמים, גודלו ומספר הנמצא במערך.\nיש לכתוב את הפונקציה `int* distsort(int* a, int n, int num)` המחזירה מערך ממוין **חדש** בו המספרים ממוינים לפי המרחק שלהם מהמספר `num` הנתון במערך.\nאם ישנם שני מספרים במרחק זהה מהמספר הנתון, הקטן מבניהם יופיע ראשון.\nמרחק בין שני מספרים x,y מוגדר כערך מוחלט של ההפרש ביניהם: $|x-y|$.\nדוגמאות:\nעבור המערך הממוין `1,2,5,7,10` והערך 5 התוצאה תהיה `5,7,2,1,10`.\nעבור המערך הממוין `1,2,5,7,10` והערך 7 התוצאה תהיה `7,5,10,2,1`.\nעבור המערך `1,2,3` והערך 2 התוצאה תהיה `2,1,3`.\nאין להשתמש במערך עזר נוסף מלבד המערך החדש שהפונקציה יוצרת ומחזירה.\nעל זמן הריצה של הפונקציה להיות בסדר גודל של **n**.",
   "solution": "**פתרון רשמי** (23A-A עמ' 4-5), פתרון רגיל (הפונקציה `binary_search` היא פונקציית עזר שמחזירה את האינדקס של `num` במערך):\n```c\nint* distsort_2(int* a, int n, int num)\n{\n    int idx_num = binary_search(a, n, num);\n    int idx_smaller = idx_num - 1, idx_larger = idx_num + 1, new_pos = 1;\n    int* new_sort = (int*)malloc(n * sizeof(int));\n    assert(new_sort);\n    new_sort[0] = num;\n    while (0 <= idx_smaller && idx_larger < n) {\n        if (a[idx_larger] - num < num - a[idx_smaller]) {\n            new_sort[new_pos++] = a[idx_larger++];\n        }\n        else\n            new_sort[new_pos++] = a[idx_smaller--];\n    }\n    while (0 <= idx_smaller) {\n        new_sort[new_pos++] = a[idx_smaller--];\n    }\n    while (idx_larger < n) {\n        new_sort[new_pos++] = a[idx_larger++];\n    }\n    return new_sort;\n}\n```\n**פתרון יותר יעיל ואלגנטי** (אין צורך בחיפוש מקום של `num` במערך, מתחיל למלא מערך חדש מהסוף):\n```c\nint* distsort(int* a, int n, int num)\n{\n    int first = 0, last = n - 1, new_position = n - 1;\n    int* new_sort = (int*)malloc(n * sizeof(int));\n    assert(new_sort);\n    while (first <= last) {\n        if (a[last] - num >= num - a[first]) {\n            new_sort[new_position--] = a[last--];\n        }\n        else\n            new_sort[new_position--] = a[first++];\n    }\n    return new_sort;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 27,
   "rubric": [
    {
     "text": "הקצאת מערך חדש בגודל `n`, בדיקת ההקצאה והחזרתו",
     "points": 3,
     "html": "הקצאת מערך חדש בגודל <code class=\"tok\" dir=\"ltr\">n</code>, בדיקת ההקצאה והחזרתו"
    },
    {
     "text": "שני מצביעים `first` ו-`last` ומילוי המערך החדש מהסוף (`new_position = n - 1`)",
     "points": 7,
     "html": "שני מצביעים <code class=\"tok\" dir=\"ltr\">first</code> ו-<code class=\"tok\" dir=\"ltr\">last</code> ומילוי המערך החדש מהסוף (<code class=\"tok\" dir=\"ltr\">new_position = n - 1</code>)"
    },
    {
     "text": "השוואת המרחקים `a[last] - num >= num - a[first]`: במרחק שווה הגדול נכנס ראשון לסוף, כדי שהקטן יופיע לפניו בתוצאה",
     "points": 9,
     "html": "השוואת המרחקים <code class=\"tok\" dir=\"ltr\">a[last] - num &gt;= num - a[first]</code>: במרחק שווה הגדול נכנס ראשון לסוף, כדי שהקטן יופיע לפניו בתוצאה"
    },
    {
     "text": "הצבת האיבר הרחוק יותר והתקדמות המצביע המתאים (`last--` או `first++`)",
     "points": 6,
     "html": "הצבת האיבר הרחוק יותר והתקדמות המצביע המתאים (<code class=\"tok\" dir=\"ltr\">last--</code> או <code class=\"tok\" dir=\"ltr\">first++</code>)"
    },
    {
     "text": "מעבר יחיד על המערך, כלומר $O(n)$",
     "points": 2,
     "html": "מעבר יחיד על המערך, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "למיין לפי מרחק (`qsort`) ולקבל $O(n \\log n)$ במקום $O(n)$.",
    "להשתמש ב-`>` במקום ב-`>=`: במרחק שווה האיבר הקטן ייכנס לסוף והסדר ההפוך יתקבל.",
    "להתחיל מהמיקום של `num` ולמזג החוצה (נכון), אך לשכוח לרוקן את הצד שנשאר אחרי שהצד השני נגמר."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה מחזירה `distsort` עבור המערך `{1, 2, 5, 7, 10}` והערך `7`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`7, 5, 10, 2, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">7, 5, 10, 2, 1</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`7, 5, 2, 10, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">7, 5, 2, 10, 1</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`7, 10, 5, 2, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">7, 10, 5, 2, 1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`5, 7, 10, 2, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">5, 7, 10, 2, 1</code>"
      }
     ],
     "correctId": "a",
     "explain": "המרחקים מ-7 הם 0, 2, 3, 5, 6 עבור 7, 5, 10, 2, 1 (ריצה אמיתית: `7 5 10 2 1`).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">distsort</code> עבור המערך <code class=\"tok\" dir=\"ltr\">{1, 2, 5, 7, 10}</code> והערך <code class=\"tok\" dir=\"ltr\">7</code>?",
     "explainHtml": "המרחקים מ-7 הם 0, 2, 3, 5, 6 עבור 7, 5, 10, 2, 1 (ריצה אמיתית: <code class=\"tok\" dir=\"ltr\">7 5 10 2 1</code>)."
    },
    {
     "type": "numeric",
     "prompt": "עבור `{1, 2, 3}` והערך `2` (מרחק שווה לשני הצדדים): מהו האיבר במקום `1` (השני, מ-0) בתוצאה?",
     "answer": 1,
     "tol": 0,
     "explain": "התוצאה היא `2, 1, 3` (ריצה אמיתית): במרחק שווה הקטן יותר, `1`, מופיע ראשון.",
     "promptHtml": "עבור <code class=\"tok\" dir=\"ltr\">{1, 2, 3}</code> והערך <code class=\"tok\" dir=\"ltr\">2</code> (מרחק שווה לשני הצדדים): מהו האיבר במקום <code class=\"tok\" dir=\"ltr\">1</code> (השני, מ-0) בתוצאה?",
     "explainHtml": "התוצאה היא <code class=\"tok\" dir=\"ltr\">2, 1, 3</code> (ריצה אמיתית): במרחק שווה הקטן יותר, <code class=\"tok\" dir=\"ltr\">1</code>, מופיע ראשון."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1;",
      "    int* new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first <= last) {",
      "        if (a[last] - num >= num - a[first]) {",
      "___",
      "        }",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    }",
      "    return new_sort;",
      "}"
     ],
     "blankIndex": 7,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "new_sort[new_position--] = a[last--];",
       "html": "new_sort[new_position--] = a[last--];"
      },
      {
       "id": "b",
       "type": "text",
       "value": "new_sort[new_position++] = a[last--];",
       "html": "new_sort[new_position++] = a[last--];"
      },
      {
       "id": "c",
       "type": "text",
       "value": "new_sort[new_position--] = a[first++];",
       "html": "new_sort[new_position--] = a[first++];"
      },
      {
       "id": "d",
       "type": "text",
       "value": "new_sort[0] = a[last--];",
       "html": "new_sort[0] = a[last--];"
      }
     ],
     "correctId": "a",
     "explain": "כאשר האיבר הימני רחוק יותר או שווה, הוא נכנס לסוף המערך החדש והמצביע `last` זז שמאלה.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "כאשר האיבר הימני רחוק יותר או שווה, הוא נכנס לסוף המערך החדש והמצביע <code class=\"tok\" dir=\"ltr\">last</code> זז שמאלה.",
     "linesHtml": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1;",
      "    int* new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first &lt;= last) {",
      "        if (a[last] - num &gt;= num - a[first]) {",
      "___",
      "        }",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    }",
      "    return new_sort;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `distsort`.",
     "code": true,
     "lines": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1, *new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first <= last)",
      "        if (a[last] - num >= num - a[first])",
      "            new_sort[new_position--] = a[last--];",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    return new_sort;",
      "}"
     ],
     "explain": "אתחול מצביעים והקצאה, לולאה, תנאי ההשוואה, ההצבה בכל ענף, והחזרת המערך.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">distsort</code>.",
     "explainHtml": "אתחול מצביעים והקצאה, לולאה, תנאי ההשוואה, ההצבה בכל ענף, והחזרת המערך.",
     "linesHtml": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1, *new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first &lt;= last)",
      "        if (a[last] - num &gt;= num - a[first])",
      "            new_sort[new_position--] = a[last--];",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    return new_sort;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה בגרסה הבאה והסדר במרחק שווה התהפך. מצאו אותה.",
     "code": true,
     "lines": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1;",
      "    int* new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first <= last) {",
      "        if (a[last] - num > num - a[first]) {",
      "            new_sort[new_position--] = a[last--];",
      "        }",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    }",
      "    return new_sort;",
      "}"
     ],
     "bugIndex": 6,
     "explain": "עם `>` האיבר השמאלי נכנס לסוף כשהמרחקים שווים, ועבור `{1,2,3}` והערך `2` מתקבל `2, 3, 1` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה בגרסה הבאה והסדר במרחק שווה התהפך. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&gt;</code> האיבר השמאלי נכנס לסוף כשהמרחקים שווים, ועבור <code class=\"tok\" dir=\"ltr\">{1,2,3}</code> והערך <code class=\"tok\" dir=\"ltr\">2</code> מתקבל <code class=\"tok\" dir=\"ltr\">2, 3, 1</code> (ריצה אמיתית).",
     "linesHtml": [
      "int* distsort(int* a, int n, int num)",
      "{",
      "    int first = 0, last = n - 1, new_position = n - 1;",
      "    int* new_sort = (int*)malloc(n * sizeof(int));",
      "    assert(new_sort);",
      "    while (first &lt;= last) {",
      "        if (a[last] - num &gt; num - a[first]) {",
      "            new_sort[new_position--] = a[last--];",
      "        }",
      "        else",
      "            new_sort[new_position--] = a[first++];",
      "    }",
      "    return new_sort;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "23A-A-Q3",
   "partKey": "",
   "examCode": "23A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
   "year": 2023,
   "source": "exam",
   "topicLabel": "מיון ומיזוג",
   "questionHtml": "נתון מערך <strong>ממוין</strong> בסדר עולה של מספרים שלמים, גודלו ומספר הנמצא במערך.<br>יש לכתוב את הפונקציה <code class=\"tok\" dir=\"ltr\">int* distsort(int* a, int n, int num)</code> המחזירה מערך ממוין <strong>חדש</strong> בו המספרים ממוינים לפי המרחק שלהם מהמספר <code class=\"tok\" dir=\"ltr\">num</code> הנתון במערך.<br>אם ישנם שני מספרים במרחק זהה מהמספר הנתון, הקטן מבניהם יופיע ראשון.<br>מרחק בין שני מספרים x,y מוגדר כערך מוחלט של ההפרש ביניהם: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∣</mi><mi>x</mi><mo>−</mo><mi>y</mi><mi mathvariant=\"normal\">∣</mi></mrow><annotation encoding=\"application/x-tex\">|x-y|</annotation></semantics></math></span>.<br>דוגמאות:<br>עבור המערך הממוין <code class=\"tok\" dir=\"ltr\">1,2,5,7,10</code> והערך 5 התוצאה תהיה <code class=\"tok\" dir=\"ltr\">5,7,2,1,10</code>.<br>עבור המערך הממוין <code class=\"tok\" dir=\"ltr\">1,2,5,7,10</code> והערך 7 התוצאה תהיה <code class=\"tok\" dir=\"ltr\">7,5,10,2,1</code>.<br>עבור המערך <code class=\"tok\" dir=\"ltr\">1,2,3</code> והערך 2 התוצאה תהיה <code class=\"tok\" dir=\"ltr\">2,1,3</code>.<br>אין להשתמש במערך עזר נוסף מלבד המערך החדש שהפונקציה יוצרת ומחזירה.<br>על זמן הריצה של הפונקציה להיות בסדר גודל של <strong>n</strong>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (23A-A עמ' 4-5), פתרון רגיל (הפונקציה <code class=\"tok\" dir=\"ltr\">binary_search</code> היא פונקציית עזר שמחזירה את האינדקס של <code class=\"tok\" dir=\"ltr\">num</code> במערך):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int* distsort_2(int* a, int n, int num)\n{\n    int idx_num = binary_search(a, n, num);\n    int idx_smaller = idx_num - 1, idx_larger = idx_num + 1, new_pos = 1;\n    int* new_sort = (int*)malloc(n * sizeof(int));\n    assert(new_sort);\n    new_sort[0] = num;\n    while (0 &lt;= idx_smaller &amp;&amp; idx_larger &lt; n) {\n        if (a[idx_larger] - num &lt; num - a[idx_smaller]) {\n            new_sort[new_pos++] = a[idx_larger++];\n        }\n        else\n            new_sort[new_pos++] = a[idx_smaller--];\n    }\n    while (0 &lt;= idx_smaller) {\n        new_sort[new_pos++] = a[idx_smaller--];\n    }\n    while (idx_larger &lt; n) {\n        new_sort[new_pos++] = a[idx_larger++];\n    }\n    return new_sort;\n}</code></pre><strong>פתרון יותר יעיל ואלגנטי</strong> (אין צורך בחיפוש מקום של <code class=\"tok\" dir=\"ltr\">num</code> במערך, מתחיל למלא מערך חדש מהסוף):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int* distsort(int* a, int n, int num)\n{\n    int first = 0, last = n - 1, new_position = n - 1;\n    int* new_sort = (int*)malloc(n * sizeof(int));\n    assert(new_sort);\n    while (first &lt;= last) {\n        if (a[last] - num &gt;= num - a[first]) {\n            new_sort[new_position--] = a[last--];\n        }\n        else\n            new_sort[new_position--] = a[first++];\n    }\n    return new_sort;\n}</code></pre>",
   "pointsTotal": 27,
   "pitfallsHtml": [
    "למיין לפי מרחק (<code class=\"tok\" dir=\"ltr\">qsort</code>) ולקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log n)</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "להשתמש ב-<code class=\"tok\" dir=\"ltr\">&gt;</code> במקום ב-<code class=\"tok\" dir=\"ltr\">&gt;=</code>: במרחק שווה האיבר הקטן ייכנס לסוף והסדר ההפוך יתקבל.",
    "להתחיל מהמיקום של <code class=\"tok\" dir=\"ltr\">num</code> ולמזג החוצה (נכון), אך לשכוח לרוקן את הצד שנשאר אחרי שהצד השני נגמר."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "recursion",
   "question": "העמק הקסום מורכב מאזורים רבועים בגבהים שונים, הגבהים הם מספרים בטווח 1-100 והעמק כולו מוקף בחומה בגובה 255 מטרים. העמק הקסום מיוצג על ידי מטריצה של גבהים וכל אזור מיוצג כתא במטריצה.\nלדוגמא: (הטבלה בתמונה)\nלעיתים מגיע ענן ומתמקם בנקודה מסוימת בעמק מעל אחד האזורים.\nיום אחד, הגיע הענן לנקודה מסוימת בעמק (מעל אזור מסוים) והחיל להוריד גשם מגובה נתון `h`, הגשם מציף את כל האזורים שנמוכים מהענן ושאליהם המים יכולים לזרום עד הגובה של הענן. המים יכולים לזרום מאזור לאזור אחר רק אם יש להם צלע משותפת (לא באלכסון) וגובהו של האזור האחר נמוך מגובהו של הענן.\nהשאלה היא, כמה מים ימטיר הענן עד להצפה מלאה של החלק הניתן להצפה.\nכתבו פונקציה **רקורסיבית** `int waterfill(int Valley[R][C], int CloudR, int CloudC, int CloudH)` המחשבת את כמות המים שיתקבלו עד הצפה מלאה.\n`R,C` מוגדרים על ידי `#define`.\nמספר הנחיות:\n1. העננים אף פעם לא מגיעים לקצות העמק.\n2. אם ענן נמוך מגיע לאזור שלא נמוך ממנו התשובה תהיה 0.\n3. העננים מגיעים בגבהים שלמים בין 1-150 בלבד.",
   "solution": "**פתרון רשמי** (23A-A עמ' 6):\n```c\nint waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {\n    if (cloudH <= valley[cloudR][cloudC])\n        return 0;\n    int fill = cloudH - valley[cloudR][cloudC];\n    valley[cloudR][cloudC] = 255; //Mark not to return\n    return fill +\n        waterfill(valley, cloudR - 1, cloudC, cloudH) +\n        waterfill(valley, cloudR + 1, cloudC, cloudH) +\n        waterfill(valley, cloudR, cloudC - 1, cloudH) +\n        waterfill(valley, cloudR, cloudC + 1, cloudH);\n}\n```\n**פתרון מתוחכם ללא משתנה עזר:**\n```c\nint waterfill2(int valley[R][C], int cloudR, int cloudC, int cloudH) {\n    if (cloudH <= valley[cloudR][cloudC])\n        return 0;\n    valley[cloudR][cloudC] += 255; //Mark not to return\n\n    return 255 + cloudH - valley[cloudR][cloudC] +\n        waterfill2(valley, cloudR - 1, cloudC, cloudH) +\n        waterfill2(valley, cloudR + 1, cloudC, cloudH) +\n        waterfill2(valley, cloudR, cloudC - 1, cloudH) +\n        waterfill2(valley, cloudR, cloudC + 1, cloudH);\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "contextId": "23A-A-c4",
   "rubric": [
    {
     "text": "תנאי עצירה: אם `cloudH <= valley[cloudR][cloudC]` מחזירים `0`",
     "points": 6,
     "html": "תנאי עצירה: אם <code class=\"tok\" dir=\"ltr\">cloudH &lt;= valley[cloudR][cloudC]</code> מחזירים <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "חישוב כמות המים באזור `fill = cloudH - valley[cloudR][cloudC]`",
     "points": 5,
     "html": "חישוב כמות המים באזור <code class=\"tok\" dir=\"ltr\">fill = cloudH - valley[cloudR][cloudC]</code>"
    },
    {
     "text": "סימון האזור ב-`255` כדי שלא ייספר פעם נוספת (ושהרקורסיה תסתיים)",
     "points": 7,
     "html": "סימון האזור ב-<code class=\"tok\" dir=\"ltr\">255</code> כדי שלא ייספר פעם נוספת (ושהרקורסיה תסתיים)"
    },
    {
     "text": "קריאות רקורסיביות לארבעת השכנים (בלי אלכסונים)",
     "points": 6,
     "html": "קריאות רקורסיביות לארבעת השכנים (בלי אלכסונים)"
    },
    {
     "text": "החזרת `fill` ועוד סכום הקריאות",
     "points": 2,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">fill</code> ועוד סכום הקריאות"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לשכוח לסמן את האזור, כך שהרקורסיה חוזרת ללא סוף בין שני אזורים שכנים.",
    "לבדוק `cloudH < valley[...]` במקום `<=`: אזור בגובה הענן עצמו אינו מוצף.",
    "לכלול שכנים באלכסון, בניגוד לכלל שמים זורמים רק דרך צלע משותפת."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "נתון העמק הבא (הענן מעל התא בשורה `1`, עמודה `1`):\n```c\n#define R 4\n#define C 4\nint valley[R][C] = {\n    {255, 255, 255, 255},\n    {255,   3,   5, 255},\n    {255,   4,   9, 255},\n    {255, 255, 255, 255}\n};\n```\nכמה מים מחזירה `waterfill(valley, 1, 1, 6)`?",
     "answer": 6,
     "tol": 0,
     "explain": "התא `3` מקבל 3, התא `5` מקבל 1, התא `4` מקבל 2, והתא `9` גבוה מהענן (6) ולכן לא מוצף: 3+1+2=6 (ריצה אמיתית: 6).",
     "promptHtml": "נתון העמק הבא (הענן מעל התא בשורה <code class=\"tok\" dir=\"ltr\">1</code>, עמודה <code class=\"tok\" dir=\"ltr\">1</code>):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>#define R 4\n#define C 4\nint valley[R][C] = {\n    {255, 255, 255, 255},\n    {255,   3,   5, 255},\n    {255,   4,   9, 255},\n    {255, 255, 255, 255}\n};</code></pre>כמה מים מחזירה <code class=\"tok\" dir=\"ltr\">waterfill(valley, 1, 1, 6)</code>?",
     "explainHtml": "התא <code class=\"tok\" dir=\"ltr\">3</code> מקבל 3, התא <code class=\"tok\" dir=\"ltr\">5</code> מקבל 1, התא <code class=\"tok\" dir=\"ltr\">4</code> מקבל 2, והתא <code class=\"tok\" dir=\"ltr\">9</code> גבוה מהענן (6) ולכן לא מוצף: 3+1+2=6 (ריצה אמיתית: 6)."
    },
    {
     "type": "numeric",
     "prompt": "באותו עמק, כמה מים מחזירה `waterfill(valley, 1, 1, 10)`?",
     "answer": 19,
     "tol": 0,
     "explain": "כעת גם התא `9` מוצף: 7+5+6+1=19 (ריצה אמיתית: 19).",
     "promptHtml": "באותו עמק, כמה מים מחזירה <code class=\"tok\" dir=\"ltr\">waterfill(valley, 1, 1, 10)</code>?",
     "explainHtml": "כעת גם התא <code class=\"tok\" dir=\"ltr\">9</code> מוצף: 7+5+6+1=19 (ריצה אמיתית: 19)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "___",
      "        return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC];",
      "    valley[cloudR][cloudC] = 255; //Mark not to return",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR + 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH) +",
      "        waterfill(valley, cloudR, cloudC + 1, cloudH);",
      "}"
     ],
     "blankIndex": 1,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (cloudH <= valley[cloudR][cloudC])",
       "html": "if (cloudH &lt;= valley[cloudR][cloudC])"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (cloudH < valley[cloudR][cloudC])",
       "html": "if (cloudH &lt; valley[cloudR][cloudC])"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (cloudH >= valley[cloudR][cloudC])",
       "html": "if (cloudH &gt;= valley[cloudR][cloudC])"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (valley[cloudR][cloudC] == 255)",
       "html": "if (valley[cloudR][cloudC] == 255)"
      }
     ],
     "correctId": "a",
     "explain": "אזור שגובהו לפחות גובה הענן (כולל החומה `255` והאזורים שכבר סומנו) אינו מוצף ונותן `0`.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "אזור שגובהו לפחות גובה הענן (כולל החומה <code class=\"tok\" dir=\"ltr\">255</code> והאזורים שכבר סומנו) אינו מוצף ונותן <code class=\"tok\" dir=\"ltr\">0</code>.",
     "linesHtml": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "___",
      "        return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC];",
      "    valley[cloudR][cloudC] = 255; //Mark not to return",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR + 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH) +",
      "        waterfill(valley, cloudR, cloudC + 1, cloudH);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `waterfill` (הפתרון הרשמי).",
     "code": true,
     "lines": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "    if (cloudH <= valley[cloudR][cloudC]) return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC]; valley[cloudR][cloudC] = 255;",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) + waterfill(valley, cloudR + 1, cloudC, cloudH) + waterfill(valley, cloudR, cloudC - 1, cloudH) + waterfill(valley, cloudR, cloudC + 1, cloudH);",
      "}"
     ],
     "explain": "תנאי עצירה, חישוב `fill`, סימון, ואז סכום ארבע הקריאות לשכנים.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">waterfill</code> (הפתרון הרשמי).",
     "explainHtml": "תנאי עצירה, חישוב <code class=\"tok\" dir=\"ltr\">fill</code>, סימון, ואז סכום ארבע הקריאות לשכנים.",
     "linesHtml": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "    if (cloudH &lt;= valley[cloudR][cloudC]) return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC]; valley[cloudR][cloudC] = 255;",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) + waterfill(valley, cloudR + 1, cloudC, cloudH) + waterfill(valley, cloudR, cloudC - 1, cloudH) + waterfill(valley, cloudR, cloudC + 1, cloudH);",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "    if (cloudH <= valley[cloudR][cloudC])",
      "        return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC];",
      "    valley[cloudR][cloudC] = 255; //Mark not to return",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR + 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH);",
      "}"
     ],
     "bugIndex": 9,
     "explain": "הקריאה האחרונה פונה שמאלה במקום ימינה, כך שהמים אינם מגיעים לשכן הימני: בעמק הדוגמה עם ענן בגובה 6 מתקבל 5 במקום 6 (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "הקריאה האחרונה פונה שמאלה במקום ימינה, כך שהמים אינם מגיעים לשכן הימני: בעמק הדוגמה עם ענן בגובה 6 מתקבל 5 במקום 6 (ריצה אמיתית).",
     "linesHtml": [
      "int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
      "    if (cloudH &lt;= valley[cloudR][cloudC])",
      "        return 0;",
      "    int fill = cloudH - valley[cloudR][cloudC];",
      "    valley[cloudR][cloudC] = 255; //Mark not to return",
      "    return fill +",
      "        waterfill(valley, cloudR - 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR + 1, cloudC, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH) +",
      "        waterfill(valley, cloudR, cloudC - 1, cloudH);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "23A-A-Q4",
   "partKey": "",
   "examCode": "23A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
   "year": 2023,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "העמק הקסום מורכב מאזורים רבועים בגבהים שונים, הגבהים הם מספרים בטווח 1-100 והעמק כולו מוקף בחומה בגובה 255 מטרים. העמק הקסום מיוצג על ידי מטריצה של גבהים וכל אזור מיוצג כתא במטריצה.<br>לדוגמא: (הטבלה בתמונה)<br>לעיתים מגיע ענן ומתמקם בנקודה מסוימת בעמק מעל אחד האזורים.<br>יום אחד, הגיע הענן לנקודה מסוימת בעמק (מעל אזור מסוים) והחיל להוריד גשם מגובה נתון <code class=\"tok\" dir=\"ltr\">h</code>, הגשם מציף את כל האזורים שנמוכים מהענן ושאליהם המים יכולים לזרום עד הגובה של הענן. המים יכולים לזרום מאזור לאזור אחר רק אם יש להם צלע משותפת (לא באלכסון) וגובהו של האזור האחר נמוך מגובהו של הענן.<br>השאלה היא, כמה מים ימטיר הענן עד להצפה מלאה של החלק הניתן להצפה.<br>כתבו פונקציה <strong>רקורסיבית</strong> <code class=\"tok\" dir=\"ltr\">int waterfill(int Valley[R][C], int CloudR, int CloudC, int CloudH)</code> המחשבת את כמות המים שיתקבלו עד הצפה מלאה.<br><code class=\"tok\" dir=\"ltr\">R,C</code> מוגדרים על ידי <code class=\"tok\" dir=\"ltr\">#define</code>.<br>מספר הנחיות:<br>1. העננים אף פעם לא מגיעים לקצות העמק.<br>2. אם ענן נמוך מגיע לאזור שלא נמוך ממנו התשובה תהיה 0.<br>3. העננים מגיעים בגבהים שלמים בין 1-150 בלבד.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (23A-A עמ' 6):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {\n    if (cloudH &lt;= valley[cloudR][cloudC])\n        return 0;\n    int fill = cloudH - valley[cloudR][cloudC];\n    valley[cloudR][cloudC] = 255; //Mark not to return\n    return fill +\n        waterfill(valley, cloudR - 1, cloudC, cloudH) +\n        waterfill(valley, cloudR + 1, cloudC, cloudH) +\n        waterfill(valley, cloudR, cloudC - 1, cloudH) +\n        waterfill(valley, cloudR, cloudC + 1, cloudH);\n}</code></pre><strong>פתרון מתוחכם ללא משתנה עזר:</strong><pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int waterfill2(int valley[R][C], int cloudR, int cloudC, int cloudH) {\n    if (cloudH &lt;= valley[cloudR][cloudC])\n        return 0;\n    valley[cloudR][cloudC] += 255; //Mark not to return\n\n    return 255 + cloudH - valley[cloudR][cloudC] +\n        waterfill2(valley, cloudR - 1, cloudC, cloudH) +\n        waterfill2(valley, cloudR + 1, cloudC, cloudH) +\n        waterfill2(valley, cloudR, cloudC - 1, cloudH) +\n        waterfill2(valley, cloudR, cloudC + 1, cloudH);\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לשכוח לסמן את האזור, כך שהרקורסיה חוזרת ללא סוף בין שני אזורים שכנים.",
    "לבדוק <code class=\"tok\" dir=\"ltr\">cloudH &lt; valley[...]</code> במקום <code class=\"tok\" dir=\"ltr\">&lt;=</code>: אזור בגובה הענן עצמו אינו מוצף.",
    "לכלול שכנים באלכסון, בניגוד לכלל שמים זורמים רק דרך צלע משותפת."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "number_theory",
   "question": "כפולה משותפת מינימלית (LCM - least common multiple) של שני מספרים שלמים השונים מ-0 היא המספר השלם **החיובי** הקטן ביותר שמתחלק בשני המספרים ללא שארית.\nלדוגמא: עבור המספרים `4` ו-`6` הכפולה המשותפת המינימלית היא `12` (הכפולות של 4 הן 4, 8, 12, ... והכפולות של 6 הן 6, 12, ...). עבור המספרים `-4` ו-`6` הכפולה המשותפת המינימלית היא גם `12`.\nכתבו פונקציה המקבלת שני מספרים שלמים, ששונים מ-0 ומחזירה את הכפולה המשותפת המינימלית ביניהם.\n**רמז:** ניתן להשתמש בפונקציית עזר `gcd` כקופסה שחורה למציאת המחלק המשותף הגדול ביותר: `int gcd(int,int)`\nכתבו את הקוד של הפונקציה LCM **והסבירו בקצרה** את נכונות הפתרון.",
   "solution": "**פתרון רשמי** (24A-A, קובץ הפתרון עמ' 1). ההערה הרשמית: שאלה מתרגילי הבית, הפתרון הוא פשוט:\n```c\nint lcm(int a,int b) {\n   return abs(a*b/gcd(a,b));\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 27,
   "rubric": [
    {
     "text": "שימוש ב-`gcd`: הכפולה המשותפת המינימלית היא `a*b/gcd(a,b)`",
     "points": 14,
     "html": "שימוש ב-<code class=\"tok\" dir=\"ltr\">gcd</code>: הכפולה המשותפת המינימלית היא <code class=\"tok\" dir=\"ltr\">a*b/gcd(a,b)</code>"
    },
    {
     "text": "טיפול בסימן באמצעות `abs`, כדי שהתוצאה תהיה חיובית גם כשאחד המספרים שלילי",
     "points": 8,
     "html": "טיפול בסימן באמצעות <code class=\"tok\" dir=\"ltr\">abs</code>, כדי שהתוצאה תהיה חיובית גם כשאחד המספרים שלילי"
    },
    {
     "text": "הנמקה קצרה: המכפלה `a*b` שווה ל-`gcd` כפול הכפולה המשותפת, ולכן החילוק נותן אותה",
     "points": 5,
     "html": "הנמקה קצרה: המכפלה <code class=\"tok\" dir=\"ltr\">a*b</code> שווה ל-<code class=\"tok\" dir=\"ltr\">gcd</code> כפול הכפולה המשותפת, ולכן החילוק נותן אותה"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להחזיר `a*b/gcd(a,b)` בלי `abs`: עבור `-4` ו-`6` מתקבל `-12` שאינו חיובי.",
    "להכפיל ב-`gcd` במקום לחלק בו, וכך לקבל מספר גדול בהרבה (עבור `4` ו-`6`: `48`).",
    "לחפש כפולה בלולאה מ-`1` ומעלה: עובד אך איטי, והשאלה מציעה את `gcd` כקופסה שחורה."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מהי הכפולה המשותפת המינימלית של `12` ו-`18` (לפי הנוסחה עם `gcd`)?",
     "answer": 36,
     "tol": 0,
     "explain": "`gcd(12,18)=6` ולכן `12*18/6 = 36` (ריצה אמיתית: 36).",
     "promptHtml": "מהי הכפולה המשותפת המינימלית של <code class=\"tok\" dir=\"ltr\">12</code> ו-<code class=\"tok\" dir=\"ltr\">18</code> (לפי הנוסחה עם <code class=\"tok\" dir=\"ltr\">gcd</code>)?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">gcd(12,18)=6</code> ולכן <code class=\"tok\" dir=\"ltr\">12*18/6 = 36</code> (ריצה אמיתית: 36)."
    },
    {
     "type": "choice",
     "prompt": "מה היה מחזיר `a*b/gcd(a,b)` ללא `abs` עבור `a=-4`, `b=6`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`-12`",
       "html": "<code class=\"tok\" dir=\"ltr\">-12</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`12`",
       "html": "<code class=\"tok\" dir=\"ltr\">12</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`-24`",
       "html": "<code class=\"tok\" dir=\"ltr\">-24</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`24`",
       "html": "<code class=\"tok\" dir=\"ltr\">24</code>"
      }
     ],
     "correctId": "a",
     "explain": "`-4*6 = -24` ו-`gcd=2`, לכן `-12` (ריצה אמיתית). זו הסיבה לשימוש ב-`abs`.",
     "promptHtml": "מה היה מחזיר <code class=\"tok\" dir=\"ltr\">a*b/gcd(a,b)</code> ללא <code class=\"tok\" dir=\"ltr\">abs</code> עבור <code class=\"tok\" dir=\"ltr\">a=-4</code>, <code class=\"tok\" dir=\"ltr\">b=6</code>?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">-4*6 = -24</code> ו-<code class=\"tok\" dir=\"ltr\">gcd=2</code>, לכן <code class=\"tok\" dir=\"ltr\">-12</code> (ריצה אמיתית). זו הסיבה לשימוש ב-<code class=\"tok\" dir=\"ltr\">abs</code>."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int lcm(int a,int b) {",
      "___",
      "}"
     ],
     "blankIndex": 1,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return abs(a*b/gcd(a,b));",
       "html": "return abs(a*b/gcd(a,b));"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return abs(a*b*gcd(a,b));",
       "html": "return abs(a*b*gcd(a,b));"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return a*b/gcd(a,b);",
       "html": "return a*b/gcd(a,b);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return abs(a+b)/gcd(a,b);",
       "html": "return abs(a+b)/gcd(a,b);"
      }
     ],
     "correctId": "a",
     "explain": "מחלקים את המכפלה ב-`gcd` ולוקחים ערך מוחלט כדי שהתוצאה תהיה חיובית.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "מחלקים את המכפלה ב-<code class=\"tok\" dir=\"ltr\">gcd</code> ולוקחים ערך מוחלט כדי שהתוצאה תהיה חיובית.",
     "linesHtml": [
      "int lcm(int a,int b) {",
      "___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `lcm`.",
     "code": true,
     "lines": [
      "int lcm(int a,int b) {",
      "   return abs(a*b/gcd(a,b));",
      "}"
     ],
     "explain": "כותרת, שורת ההחזרה, וסגירת הפונקציה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">lcm</code>.",
     "explainHtml": "כותרת, שורת ההחזרה, וסגירת הפונקציה.",
     "linesHtml": [
      "int lcm(int a,int b) {",
      "   return abs(a*b/gcd(a,b));",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה בגרסה הבאה. מצאו אותה.",
     "code": true,
     "lines": [
      "int lcm(int a,int b) {",
      "   return abs(a*b*gcd(a,b));",
      "}"
     ],
     "bugIndex": 1,
     "explain": "הכפלה ב-`gcd` במקום חילוק נותנת `48` במקום `12` עבור `4` ו-`6` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה בגרסה הבאה. מצאו אותה.",
     "explainHtml": "הכפלה ב-<code class=\"tok\" dir=\"ltr\">gcd</code> במקום חילוק נותנת <code class=\"tok\" dir=\"ltr\">48</code> במקום <code class=\"tok\" dir=\"ltr\">12</code> עבור <code class=\"tok\" dir=\"ltr\">4</code> ו-<code class=\"tok\" dir=\"ltr\">6</code> (ריצה אמיתית).",
     "linesHtml": [
      "int lcm(int a,int b) {",
      "   return abs(a*b*gcd(a,b));",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-A-Q1",
   "partKey": "",
   "examCode": "24A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "gcd, lcm ומחלקים",
   "questionHtml": "כפולה משותפת מינימלית (LCM - least common multiple) של שני מספרים שלמים השונים מ-0 היא המספר השלם <strong>החיובי</strong> הקטן ביותר שמתחלק בשני המספרים ללא שארית.<br>לדוגמא: עבור המספרים <code class=\"tok\" dir=\"ltr\">4</code> ו-<code class=\"tok\" dir=\"ltr\">6</code> הכפולה המשותפת המינימלית היא <code class=\"tok\" dir=\"ltr\">12</code> (הכפולות של 4 הן 4, 8, 12, ... והכפולות של 6 הן 6, 12, ...). עבור המספרים <code class=\"tok\" dir=\"ltr\">-4</code> ו-<code class=\"tok\" dir=\"ltr\">6</code> הכפולה המשותפת המינימלית היא גם <code class=\"tok\" dir=\"ltr\">12</code>.<br>כתבו פונקציה המקבלת שני מספרים שלמים, ששונים מ-0 ומחזירה את הכפולה המשותפת המינימלית ביניהם.<br><strong>רמז:</strong> ניתן להשתמש בפונקציית עזר <code class=\"tok\" dir=\"ltr\">gcd</code> כקופסה שחורה למציאת המחלק המשותף הגדול ביותר: <code class=\"tok\" dir=\"ltr\">int gcd(int,int)</code><br>כתבו את הקוד של הפונקציה LCM <strong>והסבירו בקצרה</strong> את נכונות הפתרון.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (24A-A, קובץ הפתרון עמ' 1). ההערה הרשמית: שאלה מתרגילי הבית, הפתרון הוא פשוט:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int lcm(int a,int b) {\n   return abs(a*b/gcd(a,b));\n}</code></pre>",
   "pointsTotal": 27,
   "pitfallsHtml": [
    "להחזיר <code class=\"tok\" dir=\"ltr\">a*b/gcd(a,b)</code> בלי <code class=\"tok\" dir=\"ltr\">abs</code>: עבור <code class=\"tok\" dir=\"ltr\">-4</code> ו-<code class=\"tok\" dir=\"ltr\">6</code> מתקבל <code class=\"tok\" dir=\"ltr\">-12</code> שאינו חיובי.",
    "להכפיל ב-<code class=\"tok\" dir=\"ltr\">gcd</code> במקום לחלק בו, וכך לקבל מספר גדול בהרבה (עבור <code class=\"tok\" dir=\"ltr\">4</code> ו-<code class=\"tok\" dir=\"ltr\">6</code>: <code class=\"tok\" dir=\"ltr\">48</code>).",
    "לחפש כפולה בלולאה מ-<code class=\"tok\" dir=\"ltr\">1</code> ומעלה: עובד אך איטי, והשאלה מציעה את <code class=\"tok\" dir=\"ltr\">gcd</code> כקופסה שחורה."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "strings",
   "question": "נתונה מחרוזת של אותיות קטנות באנגלית המכילה לפחות שתי אותיות.\nנגדיר שאותיות הן **צמודות** אם הן מופיעות במחרוזת זו אחר זו.\nנגדיר **מרחק** בין שתי אותיות כערך מוחלט של הפרש בין מיקומן באלפבית. המרחק בין אות לבין אותה אות הוא `0`.\nכך למשל: `dist('b','c')`=`dist('c','b')`=1 ,`dist('a','d')`=`dist('d','a')`=3 ,`dist('e','e')`=0.\nיש לכתוב פונקציה יעילה שבהינתן מחרוזת מסוימת, מחזירה מהו המרחק ה**שכיח** ביותר בין שתי **אותיות צמודות**. במקרה ויש כמה מרחקים כאלו, ניתן להחזיר כל אחד מהם.\nלדוגמא:\nעבור המחרוזת `\"ad\"` יוחזר הערך `3` (זהו המרחק היחיד, וגם השכיח).\nעבור המחרוזת `\"acefhyz\"` יוחזר הערך `2` משום שהוא מופיע שלוש פעמים כי הוא המרחק בין `'a'` ל-`'c'`, בין `'c'` ל-`'e'`, וגם בין `'f'` ל-`'h'`.\nחתימת הפונקציה: `int str_chardist(char *)`\nמותר להשתמש בפונקציית `int abs(int)`. מותר להיעזר במערך עזר.\nעל זמן הריצה של הפונקציה להיות בסדר גודל של $n$, כאשר $n$ מייצג את מספר האותיות במחרוזת המקורית.",
   "solution": "**פתרון רשמי** (קובץ הפתרון עמ' 2). ההערה הרשמית: מערך מונים רגיל למדי, צריך לשים לב לא לחרוג:\n```c\nint str_chardist(char* str) {\n   int dists[26]={0};\n   int len,i,maxdist;\n   len=strlen(str);\n   maxdist=0;\n   for (i=0;i<len-1;i++) {\n      dists[abs(str[i]-str[i+1])]++;\n   }\n   for (i=1;i<26;i++) {\n      if (dists[i]>dists[maxdist]) maxdist = i;\n   }\n   return maxdist;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "מערך מונים בגודל 26 למרחקים האפשריים `0..25`, מאותחל באפסים",
     "points": 5,
     "html": "מערך מונים בגודל 26 למרחקים האפשריים <code class=\"tok\" dir=\"ltr\">0..25</code>, מאותחל באפסים"
    },
    {
     "text": "לולאה על זוגות צמודים (`i < len-1`) שמגדילה את `dists[abs(str[i]-str[i+1])]`",
     "points": 8,
     "html": "לולאה על זוגות צמודים (<code class=\"tok\" dir=\"ltr\">i &lt; len-1</code>) שמגדילה את <code class=\"tok\" dir=\"ltr\">dists[abs(str[i]-str[i+1])]</code>"
    },
    {
     "text": "מציאת המרחק השכיח ביותר: סריקת המונים ושמירת האינדקס של המקסימום",
     "points": 8,
     "html": "מציאת המרחק השכיח ביותר: סריקת המונים ושמירת האינדקס של המקסימום"
    },
    {
     "text": "הימנעות מחריגה מגבולות המחרוזת והמערך",
     "points": 3,
     "html": "הימנעות מחריגה מגבולות המחרוזת והמערך"
    },
    {
     "text": "סריקה אחת של המחרוזת ועוד סריקה של 26 תאים, כלומר $O(n)$",
     "points": 2,
     "html": "סריקה אחת של המחרוזת ועוד סריקה של 26 תאים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשוות כל אות לכל האותיות האחרות ($O(n^2)$) במקום מערך מונים.",
    "לרוץ עד `i < len` ולקרוא את תו הסיום `'\\0'`, מה שנותן אינדקס מחוץ לגבולות המערך.",
    "לבלבל בין המרחק השכיח לבין מספר המופעים שלו: מחזירים את המרחק, לא את המונה."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה זוגות צמודים במחרוזת `\"acefhyz\"` במרחק `2`? (זה הערך `dists[2]` בסוף הלולאה הראשונה)",
     "answer": 3,
     "tol": 0,
     "explain": "הזוגות `ac`, `ce`, `fh` נמצאים במרחק 2, ולכן `dists[2]=3` (ריצה אמיתית: 3).",
     "promptHtml": "כמה זוגות צמודים במחרוזת <code class=\"tok\" dir=\"ltr\">\"acefhyz\"</code> במרחק <code class=\"tok\" dir=\"ltr\">2</code>? (זה הערך <code class=\"tok\" dir=\"ltr\">dists[2]</code> בסוף הלולאה הראשונה)",
     "explainHtml": "הזוגות <code class=\"tok\" dir=\"ltr\">ac</code>, <code class=\"tok\" dir=\"ltr\">ce</code>, <code class=\"tok\" dir=\"ltr\">fh</code> נמצאים במרחק 2, ולכן <code class=\"tok\" dir=\"ltr\">dists[2]=3</code> (ריצה אמיתית: 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0};",
      "   int len,i,maxdist;",
      "   len=strlen(str);",
      "   maxdist=0;",
      "   for (i=0;i<len-1;i++) {",
      "___",
      "   }",
      "   for (i=1;i<26;i++) {",
      "      if (dists[i]>dists[maxdist]) maxdist = i;",
      "   }",
      "   return maxdist;",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "dists[abs(str[i]-str[i+1])]++;",
       "html": "dists[abs(str[i]-str[i+1])]++;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "dists[str[i]-str[i+1]]++;",
       "html": "dists[str[i]-str[i+1]]++;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "dists[i]++;",
       "html": "dists[i]++;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "dists[abs(str[i]-str[i+1])] = i;",
       "html": "dists[abs(str[i]-str[i+1])] = i;"
      }
     ],
     "correctId": "a",
     "explain": "מונים את המרחק `abs(str[i]-str[i+1])` שבין התו הנוכחי לבא אחריו; `abs` נדרש כדי לקבל אינדקס אי-שלילי.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "מונים את המרחק <code class=\"tok\" dir=\"ltr\">abs(str[i]-str[i+1])</code> שבין התו הנוכחי לבא אחריו; <code class=\"tok\" dir=\"ltr\">abs</code> נדרש כדי לקבל אינדקס אי-שלילי.",
     "linesHtml": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0};",
      "   int len,i,maxdist;",
      "   len=strlen(str);",
      "   maxdist=0;",
      "   for (i=0;i&lt;len-1;i++) {",
      "___",
      "   }",
      "   for (i=1;i&lt;26;i++) {",
      "      if (dists[i]&gt;dists[maxdist]) maxdist = i;",
      "   }",
      "   return maxdist;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `str_chardist`.",
     "code": true,
     "lines": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0}, i, len=strlen(str), maxdist=0;",
      "   for (i=0;i<len-1;i++) dists[abs(str[i]-str[i+1])]++;",
      "   for (i=1;i<26;i++) if (dists[i]>dists[maxdist]) maxdist = i;",
      "   return maxdist;",
      "}"
     ],
     "explain": "הגדרות ואיפוס, חישוב אורך, לולאת הספירה, לולאת המקסימום, והחזרה.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">str_chardist</code>.",
     "explainHtml": "הגדרות ואיפוס, חישוב אורך, לולאת הספירה, לולאת המקסימום, והחזרה.",
     "linesHtml": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0}, i, len=strlen(str), maxdist=0;",
      "   for (i=0;i&lt;len-1;i++) dists[abs(str[i]-str[i+1])]++;",
      "   for (i=1;i&lt;26;i++) if (dists[i]&gt;dists[maxdist]) maxdist = i;",
      "   return maxdist;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה והפונקציה מחזירה תוצאה שגויה. מצאו אותה.",
     "code": true,
     "lines": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0};",
      "   int len,i,maxdist;",
      "   len=strlen(str);",
      "   maxdist=0;",
      "   for (i=0;i<len-1;i++) {",
      "      dists[abs(str[i]-str[i+1])]++;",
      "   }",
      "   for (i=1;i<26;i++) {",
      "      if (dists[i]<dists[maxdist]) maxdist = i;",
      "   }",
      "   return maxdist;",
      "}"
     ],
     "bugIndex": 9,
     "explain": "עם `<` נבחר המרחק השכיח הכי פחות: עבור `\"acefhyz\"` מוחזר `0` במקום `2` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה והפונקציה מחזירה תוצאה שגויה. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">&lt;</code> נבחר המרחק השכיח הכי פחות: עבור <code class=\"tok\" dir=\"ltr\">\"acefhyz\"</code> מוחזר <code class=\"tok\" dir=\"ltr\">0</code> במקום <code class=\"tok\" dir=\"ltr\">2</code> (ריצה אמיתית).",
     "linesHtml": [
      "int str_chardist(char* str) {",
      "   int dists[26]={0};",
      "   int len,i,maxdist;",
      "   len=strlen(str);",
      "   maxdist=0;",
      "   for (i=0;i&lt;len-1;i++) {",
      "      dists[abs(str[i]-str[i+1])]++;",
      "   }",
      "   for (i=1;i&lt;26;i++) {",
      "      if (dists[i]&lt;dists[maxdist]) maxdist = i;",
      "   }",
      "   return maxdist;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת של המחרוזת וסריקה קבועה של 26 מונים, כלומר $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת של המחרוזת וסריקה קבועה של 26 מונים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-A-Q2",
   "partKey": "",
   "examCode": "24A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "נתונה מחרוזת של אותיות קטנות באנגלית המכילה לפחות שתי אותיות.<br>נגדיר שאותיות הן <strong>צמודות</strong> אם הן מופיעות במחרוזת זו אחר זו.<br>נגדיר <strong>מרחק</strong> בין שתי אותיות כערך מוחלט של הפרש בין מיקומן באלפבית. המרחק בין אות לבין אותה אות הוא <code class=\"tok\" dir=\"ltr\">0</code>.<br>כך למשל: <code class=\"tok\" dir=\"ltr\">dist('b','c')</code>=<code class=\"tok\" dir=\"ltr\">dist('c','b')</code>=1 ,<code class=\"tok\" dir=\"ltr\">dist('a','d')</code>=<code class=\"tok\" dir=\"ltr\">dist('d','a')</code>=3 ,<code class=\"tok\" dir=\"ltr\">dist('e','e')</code>=0.<br>יש לכתוב פונקציה יעילה שבהינתן מחרוזת מסוימת, מחזירה מהו המרחק ה<strong>שכיח</strong> ביותר בין שתי <strong>אותיות צמודות</strong>. במקרה ויש כמה מרחקים כאלו, ניתן להחזיר כל אחד מהם.<br>לדוגמא:<br>עבור המחרוזת <code class=\"tok\" dir=\"ltr\">\"ad\"</code> יוחזר הערך <code class=\"tok\" dir=\"ltr\">3</code> (זהו המרחק היחיד, וגם השכיח).<br>עבור המחרוזת <code class=\"tok\" dir=\"ltr\">\"acefhyz\"</code> יוחזר הערך <code class=\"tok\" dir=\"ltr\">2</code> משום שהוא מופיע שלוש פעמים כי הוא המרחק בין <code class=\"tok\" dir=\"ltr\">'a'</code> ל-<code class=\"tok\" dir=\"ltr\">'c'</code>, בין <code class=\"tok\" dir=\"ltr\">'c'</code> ל-<code class=\"tok\" dir=\"ltr\">'e'</code>, וגם בין <code class=\"tok\" dir=\"ltr\">'f'</code> ל-<code class=\"tok\" dir=\"ltr\">'h'</code>.<br>חתימת הפונקציה: <code class=\"tok\" dir=\"ltr\">int str_chardist(char *)</code><br>מותר להשתמש בפונקציית <code class=\"tok\" dir=\"ltr\">int abs(int)</code>. מותר להיעזר במערך עזר.<br>על זמן הריצה של הפונקציה להיות בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> מייצג את מספר האותיות במחרוזת המקורית.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (קובץ הפתרון עמ' 2). ההערה הרשמית: מערך מונים רגיל למדי, צריך לשים לב לא לחרוג:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int str_chardist(char* str) {\n   int dists[26]={0};\n   int len,i,maxdist;\n   len=strlen(str);\n   maxdist=0;\n   for (i=0;i&lt;len-1;i++) {\n      dists[abs(str[i]-str[i+1])]++;\n   }\n   for (i=1;i&lt;26;i++) {\n      if (dists[i]&gt;dists[maxdist]) maxdist = i;\n   }\n   return maxdist;\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "להשוות כל אות לכל האותיות האחרות (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span>) במקום מערך מונים.",
    "לרוץ עד <code class=\"tok\" dir=\"ltr\">i &lt; len</code> ולקרוא את תו הסיום <code class=\"tok\" dir=\"ltr\">'\\0'</code>, מה שנותן אינדקס מחוץ לגבולות המערך.",
    "לבלבל בין המרחק השכיח לבין מספר המופעים שלו: מחזירים את המרחק, לא את המונה."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** `int number_of_bin_ones(int num)` המקבלת מספר טבעי `num` ומחזירה את מספר האחדות בייצוג הבינארי שלו.\nלדוגמא:\nעבור `num=6` הפונקציה תחזיר `2` ($6_{10}=110_2$), עבור `num=15` הפונקציה תחזיר `4` ($15_{10}=1111_2$).",
   "solution": "**פתרון רשמי** (קובץ הפתרון עמ' 3). ההערה הרשמית: פתרון קצר יחסית גם כאן. אפשר (ורצוי במבחן) להפריד את תנאי העצירה לשורה משלו:\n```c\nint num_of_ones(int num)\n{//num>=0\n   return num ? num%2 + num_of_ones(num/2) : 0;\n}\n```\nאו:\n```c\nint num_of_ones(int num)\n{//num>0\n       if(num==1)\n              return 1;\n       return num % 2 + num_of_ones(num / 2);\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "תנאי עצירה: כאשר `num` הוא `0` (או `1`) הרקורסיה מסתיימת",
     "points": 7,
     "html": "תנאי עצירה: כאשר <code class=\"tok\" dir=\"ltr\">num</code> הוא <code class=\"tok\" dir=\"ltr\">0</code> (או <code class=\"tok\" dir=\"ltr\">1</code>) הרקורסיה מסתיימת"
    },
    {
     "text": "הביט האחרון נספר באמצעות `num%2`",
     "points": 7,
     "html": "הביט האחרון נספר באמצעות <code class=\"tok\" dir=\"ltr\">num%2</code>"
    },
    {
     "text": "קריאה רקורסיבית על `num/2`, כלומר הסרת הביט האחרון",
     "points": 8,
     "html": "קריאה רקורסיבית על <code class=\"tok\" dir=\"ltr\">num/2</code>, כלומר הסרת הביט האחרון"
    },
    {
     "text": "חיבור התוצאות וקבלת מספר האחדות בייצוג הבינארי",
     "points": 4,
     "html": "חיבור התוצאות וקבלת מספר האחדות בייצוג הבינארי"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "להשתמש בחילוק ב-`10` במקום ב-`2`: מקבלים ספרות עשרוניות ולא ביטים.",
    "לשכוח את תנאי העצירה. בגרסה שבה מקרה הבסיס הוא `num==1` הקריאה עם `0` אינה מסתיימת (השאלה עוסקת במספר טבעי).",
    "לשכוח להוסיף את הביט הנוכחי (`num%2`) ולהחזיר רק את התוצאה של שאר המספר."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `num_of_ones(1000)`?",
     "answer": 6,
     "tol": 0,
     "explain": "$1000_{10}=1111101000_2$ ולכן יש 6 אחדות (ריצה אמיתית: 6).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">num_of_ones(1000)</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1000</mn><mn>10</mn></msub><mo>=</mo><msub><mn>1111101000</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">1000_{10}=1111101000_2</annotation></semantics></math></span> ולכן יש 6 אחדות (ריצה אמיתית: 6)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `num_of_ones(255)`?",
     "answer": 8,
     "tol": 0,
     "explain": "$255_{10}=11111111_2$, כלומר 8 אחדות (ריצה אמיתית: 8).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">num_of_ones(255)</code>?",
     "explainHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>255</mn><mn>10</mn></msub><mo>=</mo><msub><mn>11111111</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">255_{10}=11111111_2</annotation></semantics></math></span>, כלומר 8 אחדות (ריצה אמיתית: 8)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את שורת ההחזרה.",
     "code": true,
     "lines": [
      "int num_of_ones(int num)",
      "{//num>=0",
      "___",
      "}"
     ],
     "blankIndex": 2,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "return num ? num%2 + num_of_ones(num/2) : 0;",
       "html": "return num ? num%2 + num_of_ones(num/2) : 0;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "return num ? num%2 + num_of_ones(num/10) : 0;",
       "html": "return num ? num%2 + num_of_ones(num/10) : 0;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "return num ? num/2 + num_of_ones(num%2) : 0;",
       "html": "return num ? num/2 + num_of_ones(num%2) : 0;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "return num ? 1 + num_of_ones(num/2) : 0;",
       "html": "return num ? 1 + num_of_ones(num/2) : 0;"
      }
     ],
     "correctId": "a",
     "explain": "מוסיפים את הביט האחרון `num%2` ועוברים לשאר המספר `num/2`; כשמגיעים ל-`0` מחזירים `0`.",
     "promptHtml": "השלימו את שורת ההחזרה.",
     "explainHtml": "מוסיפים את הביט האחרון <code class=\"tok\" dir=\"ltr\">num%2</code> ועוברים לשאר המספר <code class=\"tok\" dir=\"ltr\">num/2</code>; כשמגיעים ל-<code class=\"tok\" dir=\"ltr\">0</code> מחזירים <code class=\"tok\" dir=\"ltr\">0</code>.",
     "linesHtml": [
      "int num_of_ones(int num)",
      "{//num&gt;=0",
      "___",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה (הגרסה הראשונה).",
     "code": true,
     "lines": [
      "int num_of_ones(int num)",
      "{//num>=0",
      "   return num ? num%2 + num_of_ones(num/2) : 0;",
      "}"
     ],
     "explain": "כותרת, הערת התחום, שורת ההחזרה, וסגירה.",
     "promptHtml": "סדרו את שורות הפונקציה (הגרסה הראשונה).",
     "explainHtml": "כותרת, הערת התחום, שורת ההחזרה, וסגירה.",
     "linesHtml": [
      "int num_of_ones(int num)",
      "{//num&gt;=0",
      "   return num ? num%2 + num_of_ones(num/2) : 0;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה. מצאו אותה.",
     "code": true,
     "lines": [
      "int num_of_ones(int num)",
      "{//num>=0",
      "   return num ? num%2 + num_of_ones(num/10) : 0;",
      "}"
     ],
     "bugIndex": 2,
     "explain": "חילוק ב-`10` מוריד ספרה עשרונית ולא ביט: `num_of_ones(6)` מחזירה `0` במקום `2` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה. מצאו אותה.",
     "explainHtml": "חילוק ב-<code class=\"tok\" dir=\"ltr\">10</code> מוריד ספרה עשרונית ולא ביט: <code class=\"tok\" dir=\"ltr\">num_of_ones(6)</code> מחזירה <code class=\"tok\" dir=\"ltr\">0</code> במקום <code class=\"tok\" dir=\"ltr\">2</code> (ריצה אמיתית).",
     "linesHtml": [
      "int num_of_ones(int num)",
      "{//num&gt;=0",
      "   return num ? num%2 + num_of_ones(num/10) : 0;",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-A-Q3",
   "partKey": "",
   "examCode": "24A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> <code class=\"tok\" dir=\"ltr\">int number_of_bin_ones(int num)</code> המקבלת מספר טבעי <code class=\"tok\" dir=\"ltr\">num</code> ומחזירה את מספר האחדות בייצוג הבינארי שלו.<br>לדוגמא:<br>עבור <code class=\"tok\" dir=\"ltr\">num=6</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">2</code> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>6</mn><mn>10</mn></msub><mo>=</mo><msub><mn>110</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">6_{10}=110_2</annotation></semantics></math></span>), עבור <code class=\"tok\" dir=\"ltr\">num=15</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">4</code> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>15</mn><mn>10</mn></msub><mo>=</mo><msub><mn>1111</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">15_{10}=1111_2</annotation></semantics></math></span>).",
   "solutionHtml": "<strong>פתרון רשמי</strong> (קובץ הפתרון עמ' 3). ההערה הרשמית: פתרון קצר יחסית גם כאן. אפשר (ורצוי במבחן) להפריד את תנאי העצירה לשורה משלו:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int num_of_ones(int num)\n{//num&gt;=0\n   return num ? num%2 + num_of_ones(num/2) : 0;\n}</code></pre>או:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int num_of_ones(int num)\n{//num&gt;0\n       if(num==1)\n              return 1;\n       return num % 2 + num_of_ones(num / 2);\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "להשתמש בחילוק ב-<code class=\"tok\" dir=\"ltr\">10</code> במקום ב-<code class=\"tok\" dir=\"ltr\">2</code>: מקבלים ספרות עשרוניות ולא ביטים.",
    "לשכוח את תנאי העצירה. בגרסה שבה מקרה הבסיס הוא <code class=\"tok\" dir=\"ltr\">num==1</code> הקריאה עם <code class=\"tok\" dir=\"ltr\">0</code> אינה מסתיימת (השאלה עוסקת במספר טבעי).",
    "לשכוח להוסיף את הביט הנוכחי (<code class=\"tok\" dir=\"ltr\">num%2</code>) ולהחזיר רק את התוצאה של שאר המספר."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "binary_search",
   "question": "אריאל - סטודנט שנה א למד לקראת המבחן בקורס \"מבוא למדעי המחשב\". הוא כתב פונקציית מיון ומיין מערך. בא אליו החבר שלו, תמיר, סטודנט שנה ב, שלמד אלגוריתמים הסתברותיים לקראת מבחן באלגוריתמים. הוא כתב פונקציה שמבלגנת מערכים ממוינים עם מספר זוגי של איברים: הפונקציה מחלקת את המערך לזוגות איברים סמוכים ועבור כל אחד מזוגות האיברים היא מחליפה את הסדר של האיברים בזוג בהסתברות $\\frac{1}{2}$, אחרת היא לא משנה אותם.\nלדוגמא אם המערך הממוין המקורי היה: `1,2,3,7,11,15,23,90,722,1000`\nיתכן ולאחר ה\"בילגון\" של תמיר התקבל ממנו המערך הבא:\n`1,2,7,3,11,15,90,23,1000,722`\n(הזוגות שהוחלפו הם השני הרביעי והחמישי).\nכמובן שהיה יכול להתקבל מערך אחר, למשל: `2,1,3,7,11,15,90,23,722,1000`.\nהמרצה של הקורס \"מבוא למדעי המחשב\", ראה את המערך המבולגן וחיבר שאלה למבחן:\nיש לכתוב פונקציית חיפוש **יעילה** `int find_in_mixed_array(int key, int* arr, int size)` שמקבלת את המערך שתמיר \"בילגן\" - `arr`, את גודלו - `size` וכן מספר - `key`. על הפונקציה להחזיר `1` כאשר `key` נמצא במערך, ו-`0` - אחרת.\nאפשר להניח שכל האיברים במערך שונים, ו-`size` **הוא מספר זוגי**.\nעל הפונקציה לרוץ בסדר גודל $\\log size$.",
   "solution": "**פתרון רשמי** (קובץ הפתרון עמ' 4-5). הטקסט הרשמי: הפתרון התבסס על שינוי בחיפוש הבינארי הרגיל, והיו שלושה פתרונות פשוטים למדי.\nא. הפתרון הראשון והכי פשוט הוא לבדוק את איבר האמצע ואת שני האיברים מימינו ומשמאלו (תוך שימת לב לחריגות מגבול המערך) ואז להמשיך באופן רגיל לחלוטין.\nב. פתרון פשוט אחר הוא לדאוג שאיבר האמצע יהיה תמיד שמאלי או ימני (יותר קל שמאלי) על ידי שורה כגון: `mid=mid-mid%2;` ואז לבדוק את האיבר ואת הבא אחריו (לפי נתוני השאלה הם תמיד שם). יש לשים לב להקטין את `high` כרגיל אבל את `low` יש להגדיר כ-`mid+2`. וריאנט של הפתרון הזה חילק את `mid` ב-2 ובדק ב-`mid*2` וב-`mid*2+1`.\nג. הפתרון האלגנטי השלישי היה לחפש בינארי פעמיים, פעם על אינדקסים זוגיים בלבד ופעם על אינדקסים אי-זוגיים.\nפרט לפתרונות האלו לא היה מחסור בפתרונות נכונים אבל מסובכים עם הרבה מאוד תנאים שהם בגדול הרחבה של אחד מהרעיונות האלו.\nשום פתרון של תיקון מוקדם למערך לא קיבל כמעט נקודות. כן קיבלנו פתרונות שהחליפו בין איברים בזוג בזמן החיפוש, למרות שעדיף להימנע משינוי המערך אם זה לא נדרש בשאלה.\nפתרון לדוגמא המבוסס על הקוד מהמצגת (כמובן קוד שמחזיר את מיקום האיבר, אבל את השינוי הטריוויאלי לתנאי השאלה נשאיר לקורא):\n```c\nint bin_search_mixed(int key, int* a, int n)\n{ //assume: n is even\n       int low, high, mid;\n       low = 0;\n       high = n - 1;\n       while (low <= high)\n       {\n              mid = (low + high) / 2;\n              mid = mid - (mid % 2); // mid is even index\n              if (key == a[mid])\n                     return mid;\n              if (key == a[mid + 1])\n                     return mid + 1;\n              else if (key < a[mid])\n                     high = mid - 1;\n              else\n                     low = mid + 2;\n       }\n       return -1;\n}\n```",
   "solutionSource": "official-pdf",
   "official": true,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "בחירת אינדקס זוגי (`mid = mid - mid%2`) כדי שהזוג `(mid, mid+1)` יהיה שלם",
     "points": 7,
     "html": "בחירת אינדקס זוגי (<code class=\"tok\" dir=\"ltr\">mid = mid - mid%2</code>) כדי שהזוג <code class=\"tok\" dir=\"ltr\">(mid, mid+1)</code> יהיה שלם"
    },
    {
     "text": "בדיקת שני איברי הזוג `a[mid]` ו-`a[mid+1]` והחזרה כשנמצא `key`",
     "points": 6,
     "html": "בדיקת שני איברי הזוג <code class=\"tok\" dir=\"ltr\">a[mid]</code> ו-<code class=\"tok\" dir=\"ltr\">a[mid+1]</code> והחזרה כשנמצא <code class=\"tok\" dir=\"ltr\">key</code>"
    },
    {
     "text": "אם `key < a[mid]` ממשיכים שמאלה: `high = mid - 1`",
     "points": 5,
     "html": "אם <code class=\"tok\" dir=\"ltr\">key &lt; a[mid]</code> ממשיכים שמאלה: <code class=\"tok\" dir=\"ltr\">high = mid - 1</code>"
    },
    {
     "text": "אחרת ממשיכים ימינה: `low = mid + 2`, מעבר לזוג שנבדק",
     "points": 5,
     "html": "אחרת ממשיכים ימינה: <code class=\"tok\" dir=\"ltr\">low = mid + 2</code>, מעבר לזוג שנבדק"
    },
    {
     "text": "זמן ריצה $O(\\log size)$ כי כל איטרציה חוצה את התחום",
     "points": 3,
     "html": "זמן ריצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log size)</annotation></semantics></math></span> כי כל איטרציה חוצה את התחום"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "חיפוש בינארי רגיל על המערך: הזוגות ההפוכים שוברים את הסדר ועלולים לגרום לפספוס איבר.",
    "`low = mid + 1` במקום `mid + 2`, או שכחת הקטנת `mid` לאינדקס זוגי, ואז בודקים זוג חצוי.",
    "מיון המערך מחדש לפני החיפוש: $O(n \\log n)$ ולא $O(\\log n)$, ושינוי מיותר של המערך."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מחפשים את `90` במערך `{1, 2, 7, 3, 11, 15, 90, 23, 1000, 722}` (גודל 10). מהו הערך של `low` אחרי האיטרציה הראשונה?",
     "answer": 6,
     "tol": 0,
     "explain": "`mid=(0+9)/2=4`, זוגי, ו-`a[4]=11`. `90>11` ולכן `low = mid + 2 = 6` (ריצה אמיתית).",
     "promptHtml": "מחפשים את <code class=\"tok\" dir=\"ltr\">90</code> במערך <code class=\"tok\" dir=\"ltr\">{1, 2, 7, 3, 11, 15, 90, 23, 1000, 722}</code> (גודל 10). מהו הערך של <code class=\"tok\" dir=\"ltr\">low</code> אחרי האיטרציה הראשונה?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">mid=(0+9)/2=4</code>, זוגי, ו-<code class=\"tok\" dir=\"ltr\">a[4]=11</code>. <code class=\"tok\" dir=\"ltr\">90&gt;11</code> ולכן <code class=\"tok\" dir=\"ltr\">low = mid + 2 = 6</code> (ריצה אמיתית)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה החסרה בפונקציה.",
     "code": true,
     "lines": [
      "int bin_search_mixed(int key, int* a, int n)",
      "{ //assume: n is even",
      "       int low, high, mid;",
      "       low = 0;",
      "       high = n - 1;",
      "       while (low <= high)",
      "       {",
      "              mid = (low + high) / 2;",
      "___",
      "              if (key == a[mid])",
      "                     return mid;",
      "              if (key == a[mid + 1])",
      "                     return mid + 1;",
      "              else if (key < a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2;",
      "       }",
      "       return -1;",
      "}"
     ],
     "blankIndex": 8,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "mid = mid - (mid % 2); // mid is even index",
       "html": "mid = mid - (mid % 2); // mid is even index"
      },
      {
       "id": "b",
       "type": "text",
       "value": "mid = mid | 1; // mid is even index",
       "html": "mid = mid | 1; // mid is even index"
      },
      {
       "id": "c",
       "type": "text",
       "value": "mid = mid / 2; // mid is even index",
       "html": "mid = mid / 2; // mid is even index"
      },
      {
       "id": "d",
       "type": "text",
       "value": "mid = mid - 1; // mid is even index",
       "html": "mid = mid - 1; // mid is even index"
      }
     ],
     "correctId": "a",
     "explain": "מקטינים את `mid` לאינדקס הזוגי הקרוב, כך ש-`a[mid]` ו-`a[mid+1]` הם זוג שלם.",
     "promptHtml": "השלימו את השורה החסרה בפונקציה.",
     "explainHtml": "מקטינים את <code class=\"tok\" dir=\"ltr\">mid</code> לאינדקס הזוגי הקרוב, כך ש-<code class=\"tok\" dir=\"ltr\">a[mid]</code> ו-<code class=\"tok\" dir=\"ltr\">a[mid+1]</code> הם זוג שלם.",
     "linesHtml": [
      "int bin_search_mixed(int key, int* a, int n)",
      "{ //assume: n is even",
      "       int low, high, mid;",
      "       low = 0;",
      "       high = n - 1;",
      "       while (low &lt;= high)",
      "       {",
      "              mid = (low + high) / 2;",
      "___",
      "              if (key == a[mid])",
      "                     return mid;",
      "              if (key == a[mid + 1])",
      "                     return mid + 1;",
      "              else if (key &lt; a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2;",
      "       }",
      "       return -1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `bin_search_mixed`.",
     "code": true,
     "lines": [
      "int bin_search_mixed(int key, int* a, int n) { //assume: n is even",
      "       int low = 0, high = n - 1, mid = 0;",
      "       while (low <= high) {",
      "              mid = (low + high) / 2;",
      "              mid = mid - (mid % 2); // mid is even index",
      "              if (key == a[mid]) return mid; if (key == a[mid + 1]) return mid + 1;",
      "              else if (key < a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2; }",
      "       return -1;",
      "}"
     ],
     "explain": "אתחול גבולות, לולאה, חישוב `mid` זוגי, בדיקת הזוג, והתאמת הגבולות; בסוף `-1`.",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">bin_search_mixed</code>.",
     "explainHtml": "אתחול גבולות, לולאה, חישוב <code class=\"tok\" dir=\"ltr\">mid</code> זוגי, בדיקת הזוג, והתאמת הגבולות; בסוף <code class=\"tok\" dir=\"ltr\">-1</code>.",
     "linesHtml": [
      "int bin_search_mixed(int key, int* a, int n) { //assume: n is even",
      "       int low = 0, high = n - 1, mid = 0;",
      "       while (low &lt;= high) {",
      "              mid = (low + high) / 2;",
      "              mid = mid - (mid % 2); // mid is even index",
      "              if (key == a[mid]) return mid; if (key == a[mid + 1]) return mid + 1;",
      "              else if (key &lt; a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2; }",
      "       return -1;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "שורה אחת שונתה והחיפוש הולך לכיוון הלא נכון. מצאו אותה.",
     "code": true,
     "lines": [
      "int bin_search_mixed(int key, int* a, int n)",
      "{ //assume: n is even",
      "       int low, high, mid;",
      "       low = 0;",
      "       high = n - 1;",
      "       while (low <= high)",
      "       {",
      "              mid = (low + high) / 2;",
      "              mid = mid - (mid % 2); // mid is even index",
      "              if (key == a[mid])",
      "                     return mid;",
      "              if (key == a[mid + 1])",
      "                     return mid + 1;",
      "              else if (key > a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2;",
      "       }",
      "       return -1;",
      "}"
     ],
     "bugIndex": 13,
     "explain": "עם `key > a[mid]` מצמצמים שמאלה כשהמפתח גדול: החיפוש של `90` במערך הדוגמה מחזיר `-1` (ריצה אמיתית).",
     "promptHtml": "שורה אחת שונתה והחיפוש הולך לכיוון הלא נכון. מצאו אותה.",
     "explainHtml": "עם <code class=\"tok\" dir=\"ltr\">key &gt; a[mid]</code> מצמצמים שמאלה כשהמפתח גדול: החיפוש של <code class=\"tok\" dir=\"ltr\">90</code> במערך הדוגמה מחזיר <code class=\"tok\" dir=\"ltr\">-1</code> (ריצה אמיתית).",
     "linesHtml": [
      "int bin_search_mixed(int key, int* a, int n)",
      "{ //assume: n is even",
      "       int low, high, mid;",
      "       low = 0;",
      "       high = n - 1;",
      "       while (low &lt;= high)",
      "       {",
      "              mid = (low + high) / 2;",
      "              mid = mid - (mid % 2); // mid is even index",
      "              if (key == a[mid])",
      "                     return mid;",
      "              if (key == a[mid + 1])",
      "                     return mid + 1;",
      "              else if (key &gt; a[mid])",
      "                     high = mid - 1;",
      "              else",
      "                     low = mid + 2;",
      "       }",
      "       return -1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה כפונקציה של `size`? (למשל `O(n)`)",
     "accept": [
      "O(log n)",
      "O(logn)",
      "O(log size)",
      "O(logsize)"
     ],
     "normalize": "complexity",
     "explain": "כל איטרציה חוצה את התחום לחצי, לכן $O(\\log size)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה כפונקציה של <code class=\"tok\" dir=\"ltr\">size</code>? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "כל איטרציה חוצה את התחום לחצי, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log size)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-A-Q4",
   "partKey": "",
   "examCode": "24A-A",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "אריאל - סטודנט שנה א למד לקראת המבחן בקורס \"מבוא למדעי המחשב\". הוא כתב פונקציית מיון ומיין מערך. בא אליו החבר שלו, תמיר, סטודנט שנה ב, שלמד אלגוריתמים הסתברותיים לקראת מבחן באלגוריתמים. הוא כתב פונקציה שמבלגנת מערכים ממוינים עם מספר זוגי של איברים: הפונקציה מחלקת את המערך לזוגות איברים סמוכים ועבור כל אחד מזוגות האיברים היא מחליפה את הסדר של האיברים בזוג בהסתברות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac{1}{2}</annotation></semantics></math></span>, אחרת היא לא משנה אותם.<br>לדוגמא אם המערך הממוין המקורי היה: <code class=\"tok\" dir=\"ltr\">1,2,3,7,11,15,23,90,722,1000</code><br>יתכן ולאחר ה\"בילגון\" של תמיר התקבל ממנו המערך הבא:<br><code class=\"tok\" dir=\"ltr\">1,2,7,3,11,15,90,23,1000,722</code><br>(הזוגות שהוחלפו הם השני הרביעי והחמישי).<br>כמובן שהיה יכול להתקבל מערך אחר, למשל: <code class=\"tok\" dir=\"ltr\">2,1,3,7,11,15,90,23,722,1000</code>.<br>המרצה של הקורס \"מבוא למדעי המחשב\", ראה את המערך המבולגן וחיבר שאלה למבחן:<br>יש לכתוב פונקציית חיפוש <strong>יעילה</strong> <code class=\"tok\" dir=\"ltr\">int find_in_mixed_array(int key, int* arr, int size)</code> שמקבלת את המערך שתמיר \"בילגן\" - <code class=\"tok\" dir=\"ltr\">arr</code>, את גודלו - <code class=\"tok\" dir=\"ltr\">size</code> וכן מספר - <code class=\"tok\" dir=\"ltr\">key</code>. על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">1</code> כאשר <code class=\"tok\" dir=\"ltr\">key</code> נמצא במערך, ו-<code class=\"tok\" dir=\"ltr\">0</code> - אחרת.<br>אפשר להניח שכל האיברים במערך שונים, ו-<code class=\"tok\" dir=\"ltr\">size</code> <strong>הוא מספר זוגי</strong>.<br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">\\log size</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון רשמי</strong> (קובץ הפתרון עמ' 4-5). הטקסט הרשמי: הפתרון התבסס על שינוי בחיפוש הבינארי הרגיל, והיו שלושה פתרונות פשוטים למדי.<br>א. הפתרון הראשון והכי פשוט הוא לבדוק את איבר האמצע ואת שני האיברים מימינו ומשמאלו (תוך שימת לב לחריגות מגבול המערך) ואז להמשיך באופן רגיל לחלוטין.<br>ב. פתרון פשוט אחר הוא לדאוג שאיבר האמצע יהיה תמיד שמאלי או ימני (יותר קל שמאלי) על ידי שורה כגון: <code class=\"tok\" dir=\"ltr\">mid=mid-mid%2;</code> ואז לבדוק את האיבר ואת הבא אחריו (לפי נתוני השאלה הם תמיד שם). יש לשים לב להקטין את <code class=\"tok\" dir=\"ltr\">high</code> כרגיל אבל את <code class=\"tok\" dir=\"ltr\">low</code> יש להגדיר כ-<code class=\"tok\" dir=\"ltr\">mid+2</code>. וריאנט של הפתרון הזה חילק את <code class=\"tok\" dir=\"ltr\">mid</code> ב-2 ובדק ב-<code class=\"tok\" dir=\"ltr\">mid*2</code> וב-<code class=\"tok\" dir=\"ltr\">mid*2+1</code>.<br>ג. הפתרון האלגנטי השלישי היה לחפש בינארי פעמיים, פעם על אינדקסים זוגיים בלבד ופעם על אינדקסים אי-זוגיים.<br>פרט לפתרונות האלו לא היה מחסור בפתרונות נכונים אבל מסובכים עם הרבה מאוד תנאים שהם בגדול הרחבה של אחד מהרעיונות האלו.<br>שום פתרון של תיקון מוקדם למערך לא קיבל כמעט נקודות. כן קיבלנו פתרונות שהחליפו בין איברים בזוג בזמן החיפוש, למרות שעדיף להימנע משינוי המערך אם זה לא נדרש בשאלה.<br>פתרון לדוגמא המבוסס על הקוד מהמצגת (כמובן קוד שמחזיר את מיקום האיבר, אבל את השינוי הטריוויאלי לתנאי השאלה נשאיר לקורא):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int bin_search_mixed(int key, int* a, int n)\n{ //assume: n is even\n       int low, high, mid;\n       low = 0;\n       high = n - 1;\n       while (low &lt;= high)\n       {\n              mid = (low + high) / 2;\n              mid = mid - (mid % 2); // mid is even index\n              if (key == a[mid])\n                     return mid;\n              if (key == a[mid + 1])\n                     return mid + 1;\n              else if (key &lt; a[mid])\n                     high = mid - 1;\n              else\n                     low = mid + 2;\n       }\n       return -1;\n}</code></pre>",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "חיפוש בינארי רגיל על המערך: הזוגות ההפוכים שוברים את הסדר ועלולים לגרום לפספוס איבר.",
    "<code class=\"tok\" dir=\"ltr\">low = mid + 1</code> במקום <code class=\"tok\" dir=\"ltr\">mid + 2</code>, או שכחת הקטנת <code class=\"tok\" dir=\"ltr\">mid</code> לאינדקס זוגי, ואז בודקים זוג חצוי.",
    "מיון המערך מחדש לפני החיפוש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n \\log n)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log n)</annotation></semantics></math></span>, ושינוי מיותר של המערך."
   ]
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "pointers_memory",
   "question": "כתבו פונקציה יעילה המקבלת מערך של מספרים שלמים `arr` וגודלו `n`.\nידוע שטווח הערכים של המספרים במערך הוא בין `0` ו-`n`.\nהפונקציה תיצור ותחזיר מערך של המספרים בטווח בין `0` ל-`n` **שלא** הופיעו במערך `arr`, ותעביר את גודלו.\nלדוגמא: עבור המערך `{0, 1, 1, 0, 3, 5}` ו-`n = 6` הפונקציה תחזיר את המערך `{2, 4, 6}` ותעביר `3`,\nעבור המערך `{}` ו-`n = 0` הפונקציה תחזיר את המערך `{0}` ותעביר `1`.\nניתן להשתמש במערך עזר.\nחתימת הפונקציה היא:\n`int *valueNotInArray(int *arr, int n, int *newSize);`",
   "points": 27,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint *valueNotInArray(int *arr, int n, int *newSize)\n{\n   int i, k = 0, count = 0;\n   int *seen = (int*)calloc(n + 1, sizeof(int));\n   int *res;\n   for (i = 0; i < n; i++)\n      seen[arr[i]] = 1;\n   for (i = 0; i <= n; i++)\n      if (!seen[i])\n         count++;\n   res = (int*)malloc(count * sizeof(int));\n   for (i = 0; i <= n; i++)\n      if (!seen[i])\n         res[k++] = i;\n   free(seen);\n   *newSize = count;\n   return res;\n}\n```\nמערך עזר `seen` בגודל `n+1` מסמן אילו ערכים בין `0` ל-`n` הופיעו ב-`arr`. סריקה שנייה סופרת כמה ערכים לא סומנו, מקצים מערך בדיוק בגודל הזה, וסריקה שלישית ממלאת אותו בסדר עולה. הגודל מועבר דרך `*newSize`.\nב-`n` איברים יש לכל היותר `n` ערכים שונים מתוך `n+1` הערכים האפשריים, ולכן תמיד חסר לפחות ערך אחד והמערך המוחזר אינו ריק.\nשלוש סריקות לינאריות: $O(n)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מערך עזר `seen` בגודל `n+1`, כי הערכים בתחום 0 עד `n`",
     "points": 5,
     "html": "מערך עזר <code class=\"tok\" dir=\"ltr\">seen</code> בגודל <code class=\"tok\" dir=\"ltr\">n+1</code>, כי הערכים בתחום 0 עד <code class=\"tok\" dir=\"ltr\">n</code>"
    },
    {
     "text": "סימון הערכים שהופיעו ב-`arr`: `seen[arr[i]] = 1`",
     "points": 5,
     "html": "סימון הערכים שהופיעו ב-<code class=\"tok\" dir=\"ltr\">arr</code>: <code class=\"tok\" dir=\"ltr\">seen[arr[i]] = 1</code>"
    },
    {
     "text": "ספירת הערכים שלא סומנו וקביעת גודל מערך התוצאה בדיוק לפיה",
     "points": 6,
     "html": "ספירת הערכים שלא סומנו וקביעת גודל מערך התוצאה בדיוק לפיה"
    },
    {
     "text": "מילוי מערך התוצאה בסדר עולה בסריקה נוספת",
     "points": 6,
     "html": "מילוי מערך התוצאה בסדר עולה בסריקה נוספת"
    },
    {
     "text": "העברת הגודל דרך `*newSize`, החזרת המערך ושחרור `seen`",
     "points": 3,
     "html": "העברת הגודל דרך <code class=\"tok\" dir=\"ltr\">*newSize</code>, החזרת המערך ושחרור <code class=\"tok\" dir=\"ltr\">seen</code>"
    },
    {
     "text": "זמן $O(n)$: שלוש סריקות לינאריות",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>: שלוש סריקות לינאריות"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "מערך עזר בגודל `n` במקום `n+1`: הערך `n` יוצא מגבולות המערך.",
    "להקצות את מערך התוצאה בגודל `n+1` בלי לספור, ואז להעביר גודל שגוי.",
    "לשכוח להעביר את הגודל דרך `*newSize` או לשחרר את מערך העזר."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה ערך `*newSize` אחרי הקריאה עם `arr = {0,1,1,0,3,5}` ו-`n = 6`?",
     "answer": 3,
     "tol": 0,
     "explain": "הערכים $0..6$ שלא הופיעו הם 2, 4 ו-6: שלושה (ריצה אמיתית: 3).",
     "promptHtml": "מה ערך <code class=\"tok\" dir=\"ltr\">*newSize</code> אחרי הקריאה עם <code class=\"tok\" dir=\"ltr\">arr = {0,1,1,0,3,5}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code>?",
     "explainHtml": "הערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0..6</mn></mrow><annotation encoding=\"application/x-tex\">0..6</annotation></semantics></math></span> שלא הופיעו הם 2, 4 ו-6: שלושה (ריצה אמיתית: 3)."
    },
    {
     "type": "choice",
     "prompt": "איזה מערך מוחזר עבור `arr = {1,1}` ו-`n = 2`?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`0, 2`",
       "html": "<code class=\"tok\" dir=\"ltr\">0, 2</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`1, 2`",
       "html": "<code class=\"tok\" dir=\"ltr\">1, 2</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`0, 1`",
       "html": "<code class=\"tok\" dir=\"ltr\">0, 1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`0, 1, 2`",
       "html": "<code class=\"tok\" dir=\"ltr\">0, 1, 2</code>"
      }
     ],
     "correctId": "a",
     "explain": "בתחום $0..2$ רק 1 הופיע, ולכן חסרים 0 ו-2 בסדר עולה (ריצה אמיתית: 0, 2).",
     "promptHtml": "איזה מערך מוחזר עבור <code class=\"tok\" dir=\"ltr\">arr = {1,1}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 2</code>?",
     "explainHtml": "בתחום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0..2</mn></mrow><annotation encoding=\"application/x-tex\">0..2</annotation></semantics></math></span> רק 1 הופיע, ולכן חסרים 0 ו-2 בסדר עולה (ריצה אמיתית: 0, 2)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את השורה שסופרת את הערכים החסרים.",
     "code": true,
     "lines": [
      "int *valueNotInArray(int *arr, int n, int *newSize)",
      "{",
      "   int i, k = 0, count = 0, *res, *seen = (int*)calloc(n + 1, sizeof(int));",
      "   for (i = 0; i < n; i++) seen[arr[i]] = 1;",
      "   ___",
      "   res = (int*)malloc(count * sizeof(int));",
      "   for (i = 0; i <= n; i++) if (!seen[i]) res[k++] = i;",
      "   free(seen);",
      "   *newSize = count;",
      "   return res;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "for (i = 0; i <= n; i++) if (!seen[i]) count++;",
       "html": "for (i = 0; i &lt;= n; i++) if (!seen[i]) count++;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "for (i = 0; i < n; i++) if (!seen[i]) count++;",
       "html": "for (i = 0; i &lt; n; i++) if (!seen[i]) count++;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "for (i = 0; i <= n; i++) if (seen[i]) count++;",
       "html": "for (i = 0; i &lt;= n; i++) if (seen[i]) count++;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "for (i = 0; i <= n; i++) count++;",
       "html": "for (i = 0; i &lt;= n; i++) count++;"
      }
     ],
     "correctId": "a",
     "explain": "סופרים את הערכים $0..n$ שלא סומנו. `i < n` מפספס את הערך `n`, `seen[i]` בלי שלילה סופר את הערכים שהופיעו, והאפשרות `count++` בלי תנאי סופרת הכול (ריצה אמיתית: כולן נותנות גודל שגוי).",
     "promptHtml": "השלימו את השורה שסופרת את הערכים החסרים.",
     "explainHtml": "סופרים את הערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0..</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">0..n</annotation></semantics></math></span> שלא סומנו. <code class=\"tok\" dir=\"ltr\">i &lt; n</code> מפספס את הערך <code class=\"tok\" dir=\"ltr\">n</code>, <code class=\"tok\" dir=\"ltr\">seen[i]</code> בלי שלילה סופר את הערכים שהופיעו, והאפשרות <code class=\"tok\" dir=\"ltr\">count++</code> בלי תנאי סופרת הכול (ריצה אמיתית: כולן נותנות גודל שגוי).",
     "linesHtml": [
      "int *valueNotInArray(int *arr, int n, int *newSize)",
      "{",
      "   int i, k = 0, count = 0, *res, *seen = (int*)calloc(n + 1, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) seen[arr[i]] = 1;",
      "   ___",
      "   res = (int*)malloc(count * sizeof(int));",
      "   for (i = 0; i &lt;= n; i++) if (!seen[i]) res[k++] = i;",
      "   free(seen);",
      "   *newSize = count;",
      "   return res;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `valueNotInArray`.",
     "code": true,
     "lines": [
      "int *valueNotInArray(int *arr, int n, int *newSize)",
      "{",
      "   int i, k = 0, count = 0, *res, *seen = (int*)calloc(n + 1, sizeof(int));",
      "   for (i = 0; i < n; i++) seen[arr[i]] = 1;",
      "   for (i = 0; i <= n; i++) if (!seen[i]) count++; res = (int*)malloc(count * sizeof(int));",
      "   for (i = 0; i <= n; i++) if (!seen[i]) res[k++] = i; free(seen); *newSize = count;",
      "   return res;",
      "}"
     ],
     "explain": "הקצאת `seen`, סימון, ספירה והקצאת התוצאה, מילוי, שחרור והעברת הגודל, והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">valueNotInArray</code>.",
     "explainHtml": "הקצאת <code class=\"tok\" dir=\"ltr\">seen</code>, סימון, ספירה והקצאת התוצאה, מילוי, שחרור והעברת הגודל, והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int *valueNotInArray(int *arr, int n, int *newSize)",
      "{",
      "   int i, k = 0, count = 0, *res, *seen = (int*)calloc(n + 1, sizeof(int));",
      "   for (i = 0; i &lt; n; i++) seen[arr[i]] = 1;",
      "   for (i = 0; i &lt;= n; i++) if (!seen[i]) count++; res = (int*)malloc(count * sizeof(int));",
      "   for (i = 0; i &lt;= n; i++) if (!seen[i]) res[k++] = i; free(seen); *newSize = count;",
      "   return res;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שלוש סריקות לינאריות: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שלוש סריקות לינאריות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-B-Q1",
   "partKey": "",
   "examCode": "24A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מצביעים וזיכרון דינמי",
   "questionHtml": "כתבו פונקציה יעילה המקבלת מערך של מספרים שלמים <code class=\"tok\" dir=\"ltr\">arr</code> וגודלו <code class=\"tok\" dir=\"ltr\">n</code>.<br>ידוע שטווח הערכים של המספרים במערך הוא בין <code class=\"tok\" dir=\"ltr\">0</code> ו-<code class=\"tok\" dir=\"ltr\">n</code>.<br>הפונקציה תיצור ותחזיר מערך של המספרים בטווח בין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n</code> <strong>שלא</strong> הופיעו במערך <code class=\"tok\" dir=\"ltr\">arr</code>, ותעביר את גודלו.<br>לדוגמא: עבור המערך <code class=\"tok\" dir=\"ltr\">{0, 1, 1, 0, 3, 5}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 6</code> הפונקציה תחזיר את המערך <code class=\"tok\" dir=\"ltr\">{2, 4, 6}</code> ותעביר <code class=\"tok\" dir=\"ltr\">3</code>,<br>עבור המערך <code class=\"tok\" dir=\"ltr\">{}</code> ו-<code class=\"tok\" dir=\"ltr\">n = 0</code> הפונקציה תחזיר את המערך <code class=\"tok\" dir=\"ltr\">{0}</code> ותעביר <code class=\"tok\" dir=\"ltr\">1</code>.<br>ניתן להשתמש במערך עזר.<br>חתימת הפונקציה היא:<br><code class=\"tok\" dir=\"ltr\">int *valueNotInArray(int *arr, int n, int *newSize);</code>",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int *valueNotInArray(int *arr, int n, int *newSize)\n{\n   int i, k = 0, count = 0;\n   int *seen = (int*)calloc(n + 1, sizeof(int));\n   int *res;\n   for (i = 0; i &lt; n; i++)\n      seen[arr[i]] = 1;\n   for (i = 0; i &lt;= n; i++)\n      if (!seen[i])\n         count++;\n   res = (int*)malloc(count * sizeof(int));\n   for (i = 0; i &lt;= n; i++)\n      if (!seen[i])\n         res[k++] = i;\n   free(seen);\n   *newSize = count;\n   return res;\n}</code></pre>מערך עזר <code class=\"tok\" dir=\"ltr\">seen</code> בגודל <code class=\"tok\" dir=\"ltr\">n+1</code> מסמן אילו ערכים בין <code class=\"tok\" dir=\"ltr\">0</code> ל-<code class=\"tok\" dir=\"ltr\">n</code> הופיעו ב-<code class=\"tok\" dir=\"ltr\">arr</code>. סריקה שנייה סופרת כמה ערכים לא סומנו, מקצים מערך בדיוק בגודל הזה, וסריקה שלישית ממלאת אותו בסדר עולה. הגודל מועבר דרך <code class=\"tok\" dir=\"ltr\">*newSize</code>.<br>ב-<code class=\"tok\" dir=\"ltr\">n</code> איברים יש לכל היותר <code class=\"tok\" dir=\"ltr\">n</code> ערכים שונים מתוך <code class=\"tok\" dir=\"ltr\">n+1</code> הערכים האפשריים, ולכן תמיד חסר לפחות ערך אחד והמערך המוחזר אינו ריק.<br>שלוש סריקות לינאריות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
   "pointsTotal": 27,
   "pitfallsHtml": [
    "מערך עזר בגודל <code class=\"tok\" dir=\"ltr\">n</code> במקום <code class=\"tok\" dir=\"ltr\">n+1</code>: הערך <code class=\"tok\" dir=\"ltr\">n</code> יוצא מגבולות המערך.",
    "להקצות את מערך התוצאה בגודל <code class=\"tok\" dir=\"ltr\">n+1</code> בלי לספור, ואז להעביר גודל שגוי.",
    "לשכוח להעביר את הגודל דרך <code class=\"tok\" dir=\"ltr\">*newSize</code> או לשחרר את מערך העזר."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "strings",
   "question": "אתם מקבלים מחרוזת שמייצגת מספר ארוך במיוחד, למשל `\"12345678910111213\"`\nעליכם למצוא את המספר הדו ספרתי שמופיע מספר הפעמים הגדול ביותר במחרוזת.\nאם יש יותר ממספר אחד כזה עליכם להחזיר את המספר ה**קטן** ביותר.\nמספר דו ספרתי מוגדר כשתי ספרות אחת אחרי השנייה, ויכול להתחיל ב-0 מקדים, כך ש-`\"00\"` וגם `\"01\"` נחשבים למספר דו ספרתי. (וכנ\"ל כל המספרים עד 99)\nלדוגמא, עבור המחרוזת `\"12121212121\"` יוחזר המספר הדו ספרתי `12` שמופיע 5 פעמים.\nעבור המחרוזת `\"21212121212\"` יוחזר המספר `12`, כי אמנם גם `21` מופיע 5 פעמים אבל גם `12` מופיע 5 פעמים, ו-`12` קטן מ-`21`.\nדוגמאות נוספות: עבור `\"222211\"` יוחזר `22` שמופיע 3 פעמים,\nעבור `\"0001\"` יוחזר `0` (כיוון שגם `00` נחשב דו ספרתי),\nעבור `\"1234\"` יוחזר `12`,\nעבור `\"426144\"` יוחזר `14`.\nחתימת הפונקציה היא:\n`int find_two_digits (char * number);`\nעל הפונקציה לרוץ בסדר גודל של $n$ כאשר $n$ הוא מספר הספרות במחרוזת.",
   "points": 26,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint find_two_digits(char *number)\n{\n   int count[100] = {0};\n   int i, best = 0;\n   for (i = 0; number[i] != '\\0' && number[i + 1] != '\\0'; i++)\n      count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;\n   for (i = 1; i < 100; i++)\n      if (count[i] > count[best])\n         best = i;\n   return best;\n}\n```\nמערך מונים `count` בגודל 100: כל זוג ספרות סמוכות הוא המספר `10*d1+d2` (כולל אפס מקדים, כך ש-`\"01\"` נספר כ-1). סריקה אחת של המחרוזת ממלאת את המונים. אחר כך עוברים על 100 המונים בסדר עולה ומחליפים את המועמד רק כשהמונה גדול **ממש**, כך שבמקרה של שוויון נשאר המספר הקטן.\nזמן $O(n)$: סריקה אחת של המחרוזת, והמעבר על 100 המונים הוא מספר קבוע של צעדים.\n(מחרוזת עם פחות משתי ספרות מחזירה `0`; השאלה לא מגדירה את המקרה הזה.)",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מערך מונים `count` בגודל 100, אחד לכל מספר דו-ספרתי כולל אלה שמתחילים ב-0",
     "points": 5,
     "html": "מערך מונים <code class=\"tok\" dir=\"ltr\">count</code> בגודל 100, אחד לכל מספר דו-ספרתי כולל אלה שמתחילים ב-0"
    },
    {
     "text": "סריקה אחת: כל זוג ספרות סמוכות הוא האינדקס `10*d1 + d2`, והמונה שלו גדל",
     "points": 7,
     "html": "סריקה אחת: כל זוג ספרות סמוכות הוא האינדקס <code class=\"tok\" dir=\"ltr\">10*d1 + d2</code>, והמונה שלו גדל"
    },
    {
     "text": "מעבר שני על 100 המונים ובחירת המונה המקסימלי",
     "points": 6,
     "html": "מעבר שני על 100 המונים ובחירת המונה המקסימלי"
    },
    {
     "text": "שימוש בהשוואה חזקה `>` כך שבתיקו נשאר המספר הקטן",
     "points": 5,
     "html": "שימוש בהשוואה חזקה <code class=\"tok\" dir=\"ltr\">&gt;</code> כך שבתיקו נשאר המספר הקטן"
    },
    {
     "text": "זמן $O(n)$ כי 100 קבוע",
     "points": 3,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span> כי 100 קבוע"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לספור רק מספרים שלא מתחילים ב-0, אף ש-`\"01\"` נחשב מספר דו-ספרתי.",
    "להשתמש ב-`>=` בבחירת המקסימום: בתיקו נבחר המספר הגדול ולא הקטן.",
    "לספור זוגות שאינם חופפים ולפספס זוגות סמוכים, כמו `21` בתוך `\"121\"`."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `find_two_digits(\"0001\")`?",
     "answer": 0,
     "tol": 0,
     "explain": "הזוגות הם `00`, `00`, `01`. המספר `00` (כלומר 0) מופיע פעמיים ו-`01` פעם אחת, לכן 0 (ריצה אמיתית: 0).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">find_two_digits(\"0001\")</code>?",
     "explainHtml": "הזוגות הם <code class=\"tok\" dir=\"ltr\">00</code>, <code class=\"tok\" dir=\"ltr\">00</code>, <code class=\"tok\" dir=\"ltr\">01</code>. המספר <code class=\"tok\" dir=\"ltr\">00</code> (כלומר 0) מופיע פעמיים ו-<code class=\"tok\" dir=\"ltr\">01</code> פעם אחת, לכן 0 (ריצה אמיתית: 0)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `find_two_digits(\"426144\")`?",
     "answer": 14,
     "tol": 0,
     "explain": "הזוגות 42, 26, 61, 14, 44 מופיעים פעם אחת כל אחד, ובתיקו מחזירים את הקטן: 14 (ריצה אמיתית: 14).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">find_two_digits(\"426144\")</code>?",
     "explainHtml": "הזוגות 42, 26, 61, 14, 44 מופיעים פעם אחת כל אחד, ובתיקו מחזירים את הקטן: 14 (ריצה אמיתית: 14)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הלולאה שבוחרת את המספר הנבחר.",
     "code": true,
     "lines": [
      "int find_two_digits(char *number)",
      "{",
      "   int count[100] = {0}; int i, best = 0;",
      "   for (i = 0; number[i] != '\\0' && number[i + 1] != '\\0'; i++) count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;",
      "   ___",
      "   return best;",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "for (i = 1; i < 100; i++) if (count[i] > count[best]) best = i;",
       "html": "for (i = 1; i &lt; 100; i++) if (count[i] &gt; count[best]) best = i;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "for (i = 1; i < 100; i++) if (count[i] >= count[best]) best = i;",
       "html": "for (i = 1; i &lt; 100; i++) if (count[i] &gt;= count[best]) best = i;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "for (i = 1; i < 100; i++) if (count[i] < count[best]) best = i;",
       "html": "for (i = 1; i &lt; 100; i++) if (count[i] &lt; count[best]) best = i;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "for (i = 1; i < 100; i++) if (count[i] > best) best = i;",
       "html": "for (i = 1; i &lt; 100; i++) if (count[i] &gt; best) best = i;"
      }
     ],
     "correctId": "a",
     "explain": "`>` מחליף מועמד רק כשהמונה גדול ממש, ולכן בתיקו נשאר הקטן. `>=` בוחר את הגדול, `<` בוחר מונה קטן, והאפשרות `count[i] > best` משווה מונה לאינדקס (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את הלולאה שבוחרת את המספר הנבחר.",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">&gt;</code> מחליף מועמד רק כשהמונה גדול ממש, ולכן בתיקו נשאר הקטן. <code class=\"tok\" dir=\"ltr\">&gt;=</code> בוחר את הגדול, <code class=\"tok\" dir=\"ltr\">&lt;</code> בוחר מונה קטן, והאפשרות <code class=\"tok\" dir=\"ltr\">count[i] &gt; best</code> משווה מונה לאינדקס (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int find_two_digits(char *number)",
      "{",
      "   int count[100] = {0}; int i, best = 0;",
      "   for (i = 0; number[i] != '\\0' &amp;&amp; number[i + 1] != '\\0'; i++) count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;",
      "   ___",
      "   return best;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `find_two_digits`.",
     "code": true,
     "lines": [
      "int find_two_digits(char *number)",
      "{",
      "   int count[100] = {0}; int i, best = 0;",
      "   for (i = 0; number[i] != '\\0' && number[i + 1] != '\\0'; i++) count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;",
      "   for (i = 1; i < 100; i++) if (count[i] > count[best]) best = i;",
      "   return best;",
      "}"
     ],
     "explain": "הגדרת המונים, מילוים בסריקת המחרוזת, בחירת המקסימום, והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">find_two_digits</code>.",
     "explainHtml": "הגדרת המונים, מילוים בסריקת המחרוזת, בחירת המקסימום, והחזרה (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int find_two_digits(char *number)",
      "{",
      "   int count[100] = {0}; int i, best = 0;",
      "   for (i = 0; number[i] != '\\0' &amp;&amp; number[i + 1] != '\\0'; i++) count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;",
      "   for (i = 1; i &lt; 100; i++) if (count[i] &gt; count[best]) best = i;",
      "   return best;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "סריקה אחת של המחרוזת ועוד מעבר על 100 מונים (קבוע): $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "סריקה אחת של המחרוזת ועוד מעבר על 100 מונים (קבוע): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-B-Q2",
   "partKey": "",
   "examCode": "24A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "אתם מקבלים מחרוזת שמייצגת מספר ארוך במיוחד, למשל <code class=\"tok\" dir=\"ltr\">\"12345678910111213\"</code><br>עליכם למצוא את המספר הדו ספרתי שמופיע מספר הפעמים הגדול ביותר במחרוזת.<br>אם יש יותר ממספר אחד כזה עליכם להחזיר את המספר ה<strong>קטן</strong> ביותר.<br>מספר דו ספרתי מוגדר כשתי ספרות אחת אחרי השנייה, ויכול להתחיל ב-0 מקדים, כך ש-<code class=\"tok\" dir=\"ltr\">\"00\"</code> וגם <code class=\"tok\" dir=\"ltr\">\"01\"</code> נחשבים למספר דו ספרתי. (וכנ\"ל כל המספרים עד 99)<br>לדוגמא, עבור המחרוזת <code class=\"tok\" dir=\"ltr\">\"12121212121\"</code> יוחזר המספר הדו ספרתי <code class=\"tok\" dir=\"ltr\">12</code> שמופיע 5 פעמים.<br>עבור המחרוזת <code class=\"tok\" dir=\"ltr\">\"21212121212\"</code> יוחזר המספר <code class=\"tok\" dir=\"ltr\">12</code>, כי אמנם גם <code class=\"tok\" dir=\"ltr\">21</code> מופיע 5 פעמים אבל גם <code class=\"tok\" dir=\"ltr\">12</code> מופיע 5 פעמים, ו-<code class=\"tok\" dir=\"ltr\">12</code> קטן מ-<code class=\"tok\" dir=\"ltr\">21</code>.<br>דוגמאות נוספות: עבור <code class=\"tok\" dir=\"ltr\">\"222211\"</code> יוחזר <code class=\"tok\" dir=\"ltr\">22</code> שמופיע 3 פעמים,<br>עבור <code class=\"tok\" dir=\"ltr\">\"0001\"</code> יוחזר <code class=\"tok\" dir=\"ltr\">0</code> (כיוון שגם <code class=\"tok\" dir=\"ltr\">00</code> נחשב דו ספרתי),<br>עבור <code class=\"tok\" dir=\"ltr\">\"1234\"</code> יוחזר <code class=\"tok\" dir=\"ltr\">12</code>,<br>עבור <code class=\"tok\" dir=\"ltr\">\"426144\"</code> יוחזר <code class=\"tok\" dir=\"ltr\">14</code>.<br>חתימת הפונקציה היא:<br><code class=\"tok\" dir=\"ltr\">int find_two_digits (char * number);</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הוא מספר הספרות במחרוזת.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int find_two_digits(char *number)\n{\n   int count[100] = {0};\n   int i, best = 0;\n   for (i = 0; number[i] != '\\0' &amp;&amp; number[i + 1] != '\\0'; i++)\n      count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;\n   for (i = 1; i &lt; 100; i++)\n      if (count[i] &gt; count[best])\n         best = i;\n   return best;\n}</code></pre>מערך מונים <code class=\"tok\" dir=\"ltr\">count</code> בגודל 100: כל זוג ספרות סמוכות הוא המספר <code class=\"tok\" dir=\"ltr\">10*d1+d2</code> (כולל אפס מקדים, כך ש-<code class=\"tok\" dir=\"ltr\">\"01\"</code> נספר כ-1). סריקה אחת של המחרוזת ממלאת את המונים. אחר כך עוברים על 100 המונים בסדר עולה ומחליפים את המועמד רק כשהמונה גדול <strong>ממש</strong>, כך שבמקרה של שוויון נשאר המספר הקטן.<br>זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>: סריקה אחת של המחרוזת, והמעבר על 100 המונים הוא מספר קבוע של צעדים.<br>(מחרוזת עם פחות משתי ספרות מחזירה <code class=\"tok\" dir=\"ltr\">0</code>; השאלה לא מגדירה את המקרה הזה.)",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לספור רק מספרים שלא מתחילים ב-0, אף ש-<code class=\"tok\" dir=\"ltr\">\"01\"</code> נחשב מספר דו-ספרתי.",
    "להשתמש ב-<code class=\"tok\" dir=\"ltr\">&gt;=</code> בבחירת המקסימום: בתיקו נבחר המספר הגדול ולא הקטן.",
    "לספור זוגות שאינם חופפים ולפספס זוגות סמוכים, כמו <code class=\"tok\" dir=\"ltr\">21</code> בתוך <code class=\"tok\" dir=\"ltr\">\"121\"</code>."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** `int is_zero(int* pos, int n, int* neg, int m)` המקבלת שני מערכים ממוינים בסדר עולה `pos` ו-`neg` וגודלם `n` ו-`m`.\nידוע כי כל ערכי המערך `pos` גדולים מ-0 וכל ערכי המערך `neg` קטנים מ-0.\nעל הפונקציה לבדוק האם קיימים שני ערכים `pos[i]` ו-`neg[j]` כך ש-`pos[i]+neg[j] == 0`.\nבמידה וקיימים הפונקציה תחזיר `1`, אחרת תחזיר `0`.\nלדוגמא: עבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -11, -3, -2}` הפונקציה תחזיר `1`.\nעבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -12, -3, -2}` הפונקציה תחזיר `0`.",
   "points": 26,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint is_zero(int* pos, int n, int* neg, int m)\n{\n   if (n == 0 || m == 0)\n      return 0;\n   if (pos[0] + neg[m - 1] == 0)\n      return 1;\n   if (pos[0] < -neg[m - 1])\n      return is_zero(pos + 1, n - 1, neg, m);\n   return is_zero(pos, n, neg, m - 1);\n}\n```\nמשווים את האיבר הקטן ב-`pos` (`pos[0]`) עם הערך המוחלט הקטן ב-`neg`, שהוא `-neg[m-1]` (האיבר האחרון, כי `neg` ממוין בסדר עולה).\nאם הסכום `0` מחזירים `1`. אם `pos[0]` קטן יותר, הוא לא יתאפס עם אף איבר של `neg` (כל השאר בערך מוחלט גדול יותר), ולכן ממשיכים בלעדיו (`pos + 1`, `n - 1`). אחרת `neg[m-1]` לא יתאפס עם אף איבר של `pos`, וממשיכים בלעדיו (`m - 1`).\nמקרה בסיס: אחד המערכים ריק, מחזירים `0`. בכל קריאה אחד המערכים קטן באחד, לכן יש לכל היותר $n+m$ קריאות: $O(n+m)$.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מקרה בסיס: אחד המערכים ריק, ומחזירים `0`",
     "points": 5,
     "html": "מקרה בסיס: אחד המערכים ריק, ומחזירים <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "השוואת `pos[0]` (הקטן ב-`pos`) עם `-neg[m-1]` (הערך המוחלט הקטן ב-`neg`), והחזרת `1` כשהסכום 0",
     "points": 6,
     "html": "השוואת <code class=\"tok\" dir=\"ltr\">pos[0]</code> (הקטן ב-<code class=\"tok\" dir=\"ltr\">pos</code>) עם <code class=\"tok\" dir=\"ltr\">-neg[m-1]</code> (הערך המוחלט הקטן ב-<code class=\"tok\" dir=\"ltr\">neg</code>), והחזרת <code class=\"tok\" dir=\"ltr\">1</code> כשהסכום 0"
    },
    {
     "text": "אם `pos[0]` קטן יותר: ממשיכים בלעדיו (`pos + 1`, `n - 1`)",
     "points": 6,
     "html": "אם <code class=\"tok\" dir=\"ltr\">pos[0]</code> קטן יותר: ממשיכים בלעדיו (<code class=\"tok\" dir=\"ltr\">pos + 1</code>, <code class=\"tok\" dir=\"ltr\">n - 1</code>)"
    },
    {
     "text": "אחרת ממשיכים בלי `neg[m-1]` (`m - 1`)",
     "points": 6,
     "html": "אחרת ממשיכים בלי <code class=\"tok\" dir=\"ltr\">neg[m-1]</code> (<code class=\"tok\" dir=\"ltr\">m - 1</code>)"
    },
    {
     "text": "רקורסיה בלבד וקריאה אחת בכל מקרה, כלומר $O(n+m)$",
     "points": 3,
     "html": "רקורסיה בלבד וקריאה אחת בכל מקרה, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n+m)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "שתי לולאות מקוננות על כל הזוגות: לא רקורסיבי, וגם $O(nm)$.",
    "להשוות את `pos[0]` ל-`neg[0]` במקום ל-`neg[m-1]`: `neg[0]` הוא בעל הערך המוחלט הגדול ביותר.",
    "לשכוח את מקרה הבסיס של מערך ריק, ולקרוא לאיבר שאינו קיים."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה קריאות ל-`is_zero` מתבצעות בסך הכול (כולל הראשונה) עבור `pos = {1,4,8,11}` ו-`neg = {-20,-15,-11,-3,-2}`?",
     "answer": 6,
     "tol": 0,
     "explain": "מקדמים את `pos` (1), מקצרים את `neg` פעמיים (ל-3 ול-11), מקדמים את `pos` פעמיים ובקריאה השישית $11+(-11)=0$ ומחזירים 1 (ריצה אמיתית: 6).",
     "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">is_zero</code> מתבצעות בסך הכול (כולל הראשונה) עבור <code class=\"tok\" dir=\"ltr\">pos = {1,4,8,11}</code> ו-<code class=\"tok\" dir=\"ltr\">neg = {-20,-15,-11,-3,-2}</code>?",
     "explainHtml": "מקדמים את <code class=\"tok\" dir=\"ltr\">pos</code> (1), מקצרים את <code class=\"tok\" dir=\"ltr\">neg</code> פעמיים (ל-3 ול-11), מקדמים את <code class=\"tok\" dir=\"ltr\">pos</code> פעמיים ובקריאה השישית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>11</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">11+(-11)=0</annotation></semantics></math></span> ומחזירים 1 (ריצה אמיתית: 6)."
    },
    {
     "type": "numeric",
     "prompt": "וכמה קריאות מתבצעות עבור `pos = {1,4,8,11}` ו-`neg = {-20,-15,-12,-3,-2}`?",
     "answer": 7,
     "tol": 0,
     "explain": "אותו מסלול, אבל `11 + (-12)` אינו 0 ו-`pos` נגמר: הקריאה השביעית מקבלת `n = 0` ומחזירה 0 (ריצה אמיתית: 7).",
     "promptHtml": "וכמה קריאות מתבצעות עבור <code class=\"tok\" dir=\"ltr\">pos = {1,4,8,11}</code> ו-<code class=\"tok\" dir=\"ltr\">neg = {-20,-15,-12,-3,-2}</code>?",
     "explainHtml": "אותו מסלול, אבל <code class=\"tok\" dir=\"ltr\">11 + (-12)</code> אינו 0 ו-<code class=\"tok\" dir=\"ltr\">pos</code> נגמר: הקריאה השביעית מקבלת <code class=\"tok\" dir=\"ltr\">n = 0</code> ומחזירה 0 (ריצה אמיתית: 7)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי שקובע איזה מערך מקצרים.",
     "code": true,
     "lines": [
      "int is_zero(int* pos, int n, int* neg, int m)",
      "{",
      "   if (n == 0 || m == 0) return 0;",
      "   if (pos[0] + neg[m - 1] == 0) return 1;",
      "   ___",
      "      return is_zero(pos + 1, n - 1, neg, m);",
      "   return is_zero(pos, n, neg, m - 1);",
      "}"
     ],
     "blankIndex": 4,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "if (pos[0] < -neg[m - 1])",
       "html": "if (pos[0] &lt; -neg[m - 1])"
      },
      {
       "id": "b",
       "type": "text",
       "value": "if (pos[0] > -neg[m - 1])",
       "html": "if (pos[0] &gt; -neg[m - 1])"
      },
      {
       "id": "c",
       "type": "text",
       "value": "if (pos[0] < neg[m - 1])",
       "html": "if (pos[0] &lt; neg[m - 1])"
      },
      {
       "id": "d",
       "type": "text",
       "value": "if (pos[n - 1] < -neg[0])",
       "html": "if (pos[n - 1] &lt; -neg[0])"
      }
     ],
     "correctId": "a",
     "explain": "כש-`pos[0]` קטן מהערך המוחלט הקטן ב-`neg`, הוא קטן מכולם ולא יתאפס, ולכן מוותרים עליו. האחרות הפוכות או משוות איברים לא רלוונטיים (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את התנאי שקובע איזה מערך מקצרים.",
     "explainHtml": "כש-<code class=\"tok\" dir=\"ltr\">pos[0]</code> קטן מהערך המוחלט הקטן ב-<code class=\"tok\" dir=\"ltr\">neg</code>, הוא קטן מכולם ולא יתאפס, ולכן מוותרים עליו. האחרות הפוכות או משוות איברים לא רלוונטיים (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int is_zero(int* pos, int n, int* neg, int m)",
      "{",
      "   if (n == 0 || m == 0) return 0;",
      "   if (pos[0] + neg[m - 1] == 0) return 1;",
      "   ___",
      "      return is_zero(pos + 1, n - 1, neg, m);",
      "   return is_zero(pos, n, neg, m - 1);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `is_zero`.",
     "code": true,
     "lines": [
      "int is_zero(int* pos, int n, int* neg, int m)",
      "{",
      "   if (n == 0 || m == 0) return 0;",
      "   if (pos[0] + neg[m - 1] == 0) return 1; if (pos[0] < -neg[m - 1]) return is_zero(pos + 1, n - 1, neg, m);",
      "   return is_zero(pos, n, neg, m - 1);",
      "}"
     ],
     "explain": "בסיס, אחר כך בלוק אחד של בדיקת סכום אפס וקיצור `pos`, ובסוף קיצור `neg` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">is_zero</code>.",
     "explainHtml": "בסיס, אחר כך בלוק אחד של בדיקת סכום אפס וקיצור <code class=\"tok\" dir=\"ltr\">pos</code>, ובסוף קיצור <code class=\"tok\" dir=\"ltr\">neg</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int is_zero(int* pos, int n, int* neg, int m)",
      "{",
      "   if (n == 0 || m == 0) return 0;",
      "   if (pos[0] + neg[m - 1] == 0) return 1; if (pos[0] &lt; -neg[m - 1]) return is_zero(pos + 1, n - 1, neg, m);",
      "   return is_zero(pos, n, neg, m - 1);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-B-Q3",
   "partKey": "",
   "examCode": "24A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> <code class=\"tok\" dir=\"ltr\">int is_zero(int* pos, int n, int* neg, int m)</code> המקבלת שני מערכים ממוינים בסדר עולה <code class=\"tok\" dir=\"ltr\">pos</code> ו-<code class=\"tok\" dir=\"ltr\">neg</code> וגודלם <code class=\"tok\" dir=\"ltr\">n</code> ו-<code class=\"tok\" dir=\"ltr\">m</code>.<br>ידוע כי כל ערכי המערך <code class=\"tok\" dir=\"ltr\">pos</code> גדולים מ-0 וכל ערכי המערך <code class=\"tok\" dir=\"ltr\">neg</code> קטנים מ-0.<br>על הפונקציה לבדוק האם קיימים שני ערכים <code class=\"tok\" dir=\"ltr\">pos[i]</code> ו-<code class=\"tok\" dir=\"ltr\">neg[j]</code> כך ש-<code class=\"tok\" dir=\"ltr\">pos[i]+neg[j] == 0</code>.<br>במידה וקיימים הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>, אחרת תחזיר <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא: עבור <code class=\"tok\" dir=\"ltr\">pos={1, 4, 8, 11}</code>, <code class=\"tok\" dir=\"ltr\">neg={-20, -15, -11, -3, -2}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>.<br>עבור <code class=\"tok\" dir=\"ltr\">pos={1, 4, 8, 11}</code>, <code class=\"tok\" dir=\"ltr\">neg={-20, -15, -12, -3, -2}</code> הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">0</code>.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int is_zero(int* pos, int n, int* neg, int m)\n{\n   if (n == 0 || m == 0)\n      return 0;\n   if (pos[0] + neg[m - 1] == 0)\n      return 1;\n   if (pos[0] &lt; -neg[m - 1])\n      return is_zero(pos + 1, n - 1, neg, m);\n   return is_zero(pos, n, neg, m - 1);\n}</code></pre>משווים את האיבר הקטן ב-<code class=\"tok\" dir=\"ltr\">pos</code> (<code class=\"tok\" dir=\"ltr\">pos[0]</code>) עם הערך המוחלט הקטן ב-<code class=\"tok\" dir=\"ltr\">neg</code>, שהוא <code class=\"tok\" dir=\"ltr\">-neg[m-1]</code> (האיבר האחרון, כי <code class=\"tok\" dir=\"ltr\">neg</code> ממוין בסדר עולה).<br>אם הסכום <code class=\"tok\" dir=\"ltr\">0</code> מחזירים <code class=\"tok\" dir=\"ltr\">1</code>. אם <code class=\"tok\" dir=\"ltr\">pos[0]</code> קטן יותר, הוא לא יתאפס עם אף איבר של <code class=\"tok\" dir=\"ltr\">neg</code> (כל השאר בערך מוחלט גדול יותר), ולכן ממשיכים בלעדיו (<code class=\"tok\" dir=\"ltr\">pos + 1</code>, <code class=\"tok\" dir=\"ltr\">n - 1</code>). אחרת <code class=\"tok\" dir=\"ltr\">neg[m-1]</code> לא יתאפס עם אף איבר של <code class=\"tok\" dir=\"ltr\">pos</code>, וממשיכים בלעדיו (<code class=\"tok\" dir=\"ltr\">m - 1</code>).<br>מקרה בסיס: אחד המערכים ריק, מחזירים <code class=\"tok\" dir=\"ltr\">0</code>. בכל קריאה אחד המערכים קטן באחד, לכן יש לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow><annotation encoding=\"application/x-tex\">n+m</annotation></semantics></math></span> קריאות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n+m)</annotation></semantics></math></span>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "שתי לולאות מקוננות על כל הזוגות: לא רקורסיבי, וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>m</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(nm)</annotation></semantics></math></span>.",
    "להשוות את <code class=\"tok\" dir=\"ltr\">pos[0]</code> ל-<code class=\"tok\" dir=\"ltr\">neg[0]</code> במקום ל-<code class=\"tok\" dir=\"ltr\">neg[m-1]</code>: <code class=\"tok\" dir=\"ltr\">neg[0]</code> הוא בעל הערך המוחלט הגדול ביותר.",
    "לשכוח את מקרה הבסיס של מערך ריק, ולקרוא לאיבר שאינו קיים."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "sorting_merge",
   "question": "כתוב פונקציה **יעילה** שמקבלת מערך וגודלו, ומחזירה את מספר החזרות הגדול ביותר של איבר כלשהו במערך.\nלדוגמא:\nעבור המערך הבא:\n`1, 2, -3005, 2, 3, 1, -1000, 3, 7, -11, 2, 15, 2, 3, 90, 7, 2, 2, 1000`\nהפונקציה תחזיר `6` (המספר `2` הוא המספר הכי שכיח שמופיע 6 פעמים).\nניתן לשנות את המערך.\nחתימת הפונקציה היא:\n`int number_returns(int* arr, int size);`\nעל הפונקציה לרוץ בסדר גודל $n\\log n$.",
   "points": 26,
   "solution": "**פתרון הפותר** (אין פתרון רשמי למועד זה):\n```c\nint number_returns(int* arr, int size)\n{\n   int i, run = 1, best = 1;\n   if (size == 0)\n      return 0;\n   merge_sort(arr, 0, size - 1);\n   for (i = 1; i < size; i++)\n   {\n      if (arr[i] == arr[i - 1])\n         run++;\n      else\n         run = 1;\n      if (run > best)\n         best = run;\n   }\n   return best;\n}\n```\nממיינים את המערך (מותר לשנות אותו) עם `merge_sort` בזמן $O(n\\log n)$. אחרי המיון כל המופעים של אותו ערך צמודים, ולכן סריקה אחת סופרת את אורך כל רצף של ערכים שווים ושומרת את הארוך ביותר, בזמן $O(n)$.\nסה\"כ $O(n\\log n)$. במערך ריק מוחזר `0`.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מיון המערך עם `merge_sort` כך שמופעי אותו ערך צמודים",
     "points": 7,
     "html": "מיון המערך עם <code class=\"tok\" dir=\"ltr\">merge_sort</code> כך שמופעי אותו ערך צמודים"
    },
    {
     "text": "סריקה שסופרת את אורך הרצף הנוכחי: `run++` כשהערך שווה לקודם",
     "points": 7,
     "html": "סריקה שסופרת את אורך הרצף הנוכחי: <code class=\"tok\" dir=\"ltr\">run++</code> כשהערך שווה לקודם"
    },
    {
     "text": "איפוס `run = 1` כשהערך משתנה",
     "points": 4,
     "html": "איפוס <code class=\"tok\" dir=\"ltr\">run = 1</code> כשהערך משתנה"
    },
    {
     "text": "שמירת הרצף הארוך ביותר ב-`best`",
     "points": 4,
     "html": "שמירת הרצף הארוך ביותר ב-<code class=\"tok\" dir=\"ltr\">best</code>"
    },
    {
     "text": "מערך ריק מחזיר `0`",
     "points": 2,
     "html": "מערך ריק מחזיר <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "זמן $O(n\\log n)$",
     "points": 2,
     "html": "זמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "שתי לולאות מקוננות שסופרות לכל איבר את מופעיו: $O(n^2)$ ולא $O(n\\log n)$.",
    "לשכוח לאפס את אורך הרצף כשהערך משתנה, ולצבור מופעים של ערכים שונים.",
    "לא למיין לפני הספירה: מופעי אותו ערך אינם צמודים, והרצף מתפספס."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `number_returns` עבור `{5,5,1,5,1,5}`?",
     "answer": 4,
     "tol": 0,
     "explain": "אחרי המיון `{1,1,5,5,5,5}`, והרצף הארוך ביותר הוא ארבע חמישיות (ריצה אמיתית: 4).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">number_returns</code> עבור <code class=\"tok\" dir=\"ltr\">{5,5,1,5,1,5}</code>?",
     "explainHtml": "אחרי המיון <code class=\"tok\" dir=\"ltr\">{1,1,5,5,5,5}</code>, והרצף הארוך ביותר הוא ארבע חמישיות (ריצה אמיתית: 4)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `number_returns` עבור `{2,9,2,9,2}`?",
     "answer": 3,
     "tol": 0,
     "explain": "אחרי המיון `{2,2,2,9,9}`, והרצף הארוך ביותר הוא שלוש פעמים 2 (ריצה אמיתית: 3).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">number_returns</code> עבור <code class=\"tok\" dir=\"ltr\">{2,9,2,9,2}</code>?",
     "explainHtml": "אחרי המיון <code class=\"tok\" dir=\"ltr\">{2,2,2,9,9}</code>, והרצף הארוך ביותר הוא שלוש פעמים 2 (ריצה אמיתית: 3)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את הפקודה שרצה כשהערך שונה מהקודם.",
     "code": true,
     "lines": [
      "int number_returns(int* arr, int size)",
      "{",
      "   int i, run = 1, best = 1;",
      "   if (size == 0)",
      "      return 0;",
      "   merge_sort(arr, 0, size - 1);",
      "   for (i = 1; i < size; i++)",
      "   {",
      "      if (arr[i] == arr[i - 1])",
      "         run++;",
      "      else",
      "___",
      "      if (run > best)",
      "         best = run;",
      "   }",
      "   return best;",
      "}"
     ],
     "blankIndex": 11,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "run = 1;",
       "html": "run = 1;"
      },
      {
       "id": "b",
       "type": "text",
       "value": "run = 0;",
       "html": "run = 0;"
      },
      {
       "id": "c",
       "type": "text",
       "value": "run--;",
       "html": "run--;"
      },
      {
       "id": "d",
       "type": "text",
       "value": "run = run;",
       "html": "run = run;"
      }
     ],
     "correctId": "a",
     "explain": "ערך חדש פותח רצף חדש באורך 1. `run = 0` מפספס איבר אחד בכל רצף, `run--` מקטין, ו-`run = run` ממשיך לצבור מערכים שונים (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את הפקודה שרצה כשהערך שונה מהקודם.",
     "explainHtml": "ערך חדש פותח רצף חדש באורך 1. <code class=\"tok\" dir=\"ltr\">run = 0</code> מפספס איבר אחד בכל רצף, <code class=\"tok\" dir=\"ltr\">run--</code> מקטין, ו-<code class=\"tok\" dir=\"ltr\">run = run</code> ממשיך לצבור מערכים שונים (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int number_returns(int* arr, int size)",
      "{",
      "   int i, run = 1, best = 1;",
      "   if (size == 0)",
      "      return 0;",
      "   merge_sort(arr, 0, size - 1);",
      "   for (i = 1; i &lt; size; i++)",
      "   {",
      "      if (arr[i] == arr[i - 1])",
      "         run++;",
      "      else",
      "___",
      "      if (run &gt; best)",
      "         best = run;",
      "   }",
      "   return best;",
      "}"
     ]
    },
    {
     "type": "findbug",
     "prompt": "בגרסה הבאה שורה אחת שונתה והפונקציה סופרת שגוי. מצאו אותה.",
     "code": true,
     "lines": [
      "int number_returns(int* arr, int size)",
      "{",
      "   int i, run = 1, best = 1;",
      "   if (size == 0)",
      "      return 0;",
      "   merge_sort(arr, 0, size - 1);",
      "   for (i = 1; i < size; i++)",
      "   {",
      "      if (arr[i] == arr[0])",
      "         run++;",
      "      else",
      "         run = 1;",
      "      if (run > best)",
      "         best = run;",
      "   }",
      "   return best;",
      "}"
     ],
     "bugIndex": 8,
     "explain": "השוואה לאיבר הראשון במקום לאיבר הקודם סופרת רק מופעים של `arr[0]`: עבור `{1,2,2}` מתקבל 1 במקום 2 (ריצה אמיתית).",
     "promptHtml": "בגרסה הבאה שורה אחת שונתה והפונקציה סופרת שגוי. מצאו אותה.",
     "explainHtml": "השוואה לאיבר הראשון במקום לאיבר הקודם סופרת רק מופעים של <code class=\"tok\" dir=\"ltr\">arr[0]</code>: עבור <code class=\"tok\" dir=\"ltr\">{1,2,2}</code> מתקבל 1 במקום 2 (ריצה אמיתית).",
     "linesHtml": [
      "int number_returns(int* arr, int size)",
      "{",
      "   int i, run = 1, best = 1;",
      "   if (size == 0)",
      "      return 0;",
      "   merge_sort(arr, 0, size - 1);",
      "   for (i = 1; i &lt; size; i++)",
      "   {",
      "      if (arr[i] == arr[0])",
      "         run++;",
      "      else",
      "         run = 1;",
      "      if (run &gt; best)",
      "         best = run;",
      "   }",
      "   return best;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n log n)",
      "O(nlogn)"
     ],
     "normalize": "complexity",
     "explain": "המיון $O(n\\log n)$ והסריקה $O(n)$: $O(n\\log n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "המיון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span> והסריקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "24A-B-Q4",
   "partKey": "",
   "examCode": "24A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מיון ומיזוג",
   "questionHtml": "כתוב פונקציה <strong>יעילה</strong> שמקבלת מערך וגודלו, ומחזירה את מספר החזרות הגדול ביותר של איבר כלשהו במערך.<br>לדוגמא:<br>עבור המערך הבא:<br><code class=\"tok\" dir=\"ltr\">1, 2, -3005, 2, 3, 1, -1000, 3, 7, -11, 2, 15, 2, 3, 90, 7, 2, 2, 1000</code><br>הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">6</code> (המספר <code class=\"tok\" dir=\"ltr\">2</code> הוא המספר הכי שכיח שמופיע 6 פעמים).<br>ניתן לשנות את המערך.<br>חתימת הפונקציה היא:<br><code class=\"tok\" dir=\"ltr\">int number_returns(int* arr, int size);</code><br>על הפונקציה לרוץ בסדר גודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n\\log n</annotation></semantics></math></span>.",
   "solutionHtml": "<strong>פתרון הפותר</strong> (אין פתרון רשמי למועד זה):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int number_returns(int* arr, int size)\n{\n   int i, run = 1, best = 1;\n   if (size == 0)\n      return 0;\n   merge_sort(arr, 0, size - 1);\n   for (i = 1; i &lt; size; i++)\n   {\n      if (arr[i] == arr[i - 1])\n         run++;\n      else\n         run = 1;\n      if (run &gt; best)\n         best = run;\n   }\n   return best;\n}</code></pre>ממיינים את המערך (מותר לשנות אותו) עם <code class=\"tok\" dir=\"ltr\">merge_sort</code> בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>. אחרי המיון כל המופעים של אותו ערך צמודים, ולכן סריקה אחת סופרת את אורך כל רצף של ערכים שווים ושומרת את הארוך ביותר, בזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.<br>סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>. במערך ריק מוחזר <code class=\"tok\" dir=\"ltr\">0</code>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "שתי לולאות מקוננות שסופרות לכל איבר את מופעיו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n\\log n)</annotation></semantics></math></span>.",
    "לשכוח לאפס את אורך הרצף כשהערך משתנה, ולצבור מופעים של ערכים שונים.",
    "לא למיין לפני הספירה: מופעי אותו ערך אינם צמודים, והרצף מתפספס."
   ]
  },
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
  },
  {
   "num": 1,
   "kind": "code",
   "topic": "recursion",
   "question": "כתבו פונקציה **רקורסיבית** יעילה שמקבלת מערך של מספרים שלמים `arr`, ואת גודלו $size \\ge 0$. הפונקציה בודקת שהמערך מקיים את התכונה הבאה - בכל המקומות הזוגיים מופיע מספר זוגי. ובכל המקומות האי-זוגיים מופיע מספר אי-זוגי. הפונקציה מחזירה את **מספר** האיברים שלא מקיימים את התכונה הזו.\nלדוגמא:\nעבור המערך `8, 7, 22, -5, 14, 3, 2` (מערך עם 7 ערכים המקום הראשון נחשב מקום 0). הפונקציה מחזירה `0`.\nעבור המערך `8, 8, 6, 5, 51, 7` (מערך עם 6 ערכים המקום הראשון נחשב מקום 0), במקום שהאינדקס שלו הוא 1 מופיע מספר זוגי `8` ובמקום שהאינדקס שלו הוא 4 מופיע מספר אי-זוגי `51` - הפונקציה מחזירה `2`.\nהחתימה של הפונקציה:\n`int check_parity(int *arr, int size)`",
   "solution": "**פתרון סטודנט** (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:\n```c\nint check_parity(int* arr, int size)\n{\n   if(size==0)\n      return 0;\n   if((arr[size-1]+size)%2==0)\n      return 1+check_parity(arr,size-1);\n   return check_parity(arr,size-1);\n}\n```\nבודקים את האיבר האחרון (אינדקס `size-1`): הוא מפר את התכונה כאשר סכום הערך והאינדקס אי-זוגי, כלומר כאשר `arr[size-1]+size` זוגי. אם יש הפרה מוסיפים `1`, ובכל מקרה ממשיכים רקורסיבית עם `size-1`.",
   "solutionSource": "student-solution",
   "official": false,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "מקרה בסיס: `size == 0` מחזיר `0`",
     "points": 5,
     "html": "מקרה בסיס: <code class=\"tok\" dir=\"ltr\">size == 0</code> מחזיר <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "בדיקת האיבר האחרון: הפרה כאשר `(arr[size-1] + size)` זוגי, כלומר הזוגיות של הערך שונה מזו של האינדקס",
     "points": 7,
     "html": "בדיקת האיבר האחרון: הפרה כאשר <code class=\"tok\" dir=\"ltr\">(arr[size-1] + size)</code> זוגי, כלומר הזוגיות של הערך שונה מזו של האינדקס"
    },
    {
     "text": "הוספת `1` על כל הפרה",
     "points": 6,
     "html": "הוספת <code class=\"tok\" dir=\"ltr\">1</code> על כל הפרה"
    },
    {
     "text": "המשך רקורסיבי עם `size - 1` בשני המקרים",
     "points": 6,
     "html": "המשך רקורסיבי עם <code class=\"tok\" dir=\"ltr\">size - 1</code> בשני המקרים"
    },
    {
     "text": "רקורסיה בלבד ללא לולאות, והחזרת המספר המצטבר",
     "points": 2,
     "html": "רקורסיה בלבד ללא לולאות, והחזרת המספר המצטבר"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק את הזוגיות של הערך ולא את הקשר לאינדקס.",
    "לבלבל בין `size` לאינדקס האחרון `size-1`: הסכום `arr[size-1] + size` זוגי דווקא כשיש הפרה.",
    "להחזיר `0` או `1` במקום לצבור את מספר ההפרות."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "מה מחזירה `check_parity` עבור `arr = {3,4}` ו-`size = 2`?",
     "answer": 2,
     "tol": 0,
     "explain": "באינדקס 0 מופיע 3 (אי-זוגי במקום זוגי) ובאינדקס 1 מופיע 4 (זוגי במקום אי-זוגי): שתי הפרות (ריצה אמיתית: 2).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">check_parity</code> עבור <code class=\"tok\" dir=\"ltr\">arr = {3,4}</code> ו-<code class=\"tok\" dir=\"ltr\">size = 2</code>?",
     "explainHtml": "באינדקס 0 מופיע 3 (אי-זוגי במקום זוגי) ובאינדקס 1 מופיע 4 (זוגי במקום אי-זוגי): שתי הפרות (ריצה אמיתית: 2)."
    },
    {
     "type": "numeric",
     "prompt": "כמה קריאות ל-`check_parity` מתבצעות בסך הכול (כולל הראשונה והבסיס) עבור `arr = {8,8,6,5,51,7}` ו-`size = 6`?",
     "answer": 7,
     "tol": 0,
     "explain": "הערכים של `size` לאורך הקריאות: 6, 5, 4, 3, 2, 1, 0: שבע קריאות. סך ההפרות הוא 2 (ריצה אמיתית: 7).",
     "promptHtml": "כמה קריאות ל-<code class=\"tok\" dir=\"ltr\">check_parity</code> מתבצעות בסך הכול (כולל הראשונה והבסיס) עבור <code class=\"tok\" dir=\"ltr\">arr = {8,8,6,5,51,7}</code> ו-<code class=\"tok\" dir=\"ltr\">size = 6</code>?",
     "explainHtml": "הערכים של <code class=\"tok\" dir=\"ltr\">size</code> לאורך הקריאות: 6, 5, 4, 3, 2, 1, 0: שבע קריאות. סך ההפרות הוא 2 (ריצה אמיתית: 7)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי שמזהה הפרה באיבר האחרון.",
     "code": true,
     "lines": [
      "int check_parity(int* arr, int size)",
      "{",
      "   if (size == 0) return 0;",
      "   if (___) return 1 + check_parity(arr, size - 1);",
      "   return check_parity(arr, size - 1);",
      "}"
     ],
     "blankIndex": 3,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "(arr[size - 1] + size) % 2 == 0",
       "html": "(arr[size - 1] + size) % 2 == 0"
      },
      {
       "id": "b",
       "type": "text",
       "value": "(arr[size - 1] + size) % 2 == 1",
       "html": "(arr[size - 1] + size) % 2 == 1"
      },
      {
       "id": "c",
       "type": "text",
       "value": "arr[size - 1] % 2 == 0",
       "html": "arr[size - 1] % 2 == 0"
      },
      {
       "id": "d",
       "type": "text",
       "value": "(arr[size - 1] + size - 1) % 2 == 0",
       "html": "(arr[size - 1] + size - 1) % 2 == 0"
      }
     ],
     "correctId": "a",
     "explain": "האינדקס של האיבר האחרון הוא `size - 1`, והוא תקין כשהערך והאינדקס בעלי אותה זוגיות. לכן הפרה פירושה ש-`arr[size-1] + size` זוגי. האחרות סופרות את התקינים או את הזוגיים בלבד (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את התנאי שמזהה הפרה באיבר האחרון.",
     "explainHtml": "האינדקס של האיבר האחרון הוא <code class=\"tok\" dir=\"ltr\">size - 1</code>, והוא תקין כשהערך והאינדקס בעלי אותה זוגיות. לכן הפרה פירושה ש-<code class=\"tok\" dir=\"ltr\">arr[size-1] + size</code> זוגי. האחרות סופרות את התקינים או את הזוגיים בלבד (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int check_parity(int* arr, int size)",
      "{",
      "   if (size == 0) return 0;",
      "   if (___) return 1 + check_parity(arr, size - 1);",
      "   return check_parity(arr, size - 1);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `check_parity`.",
     "code": true,
     "lines": [
      "int check_parity(int* arr, int size)",
      "{",
      "   if (size == 0) return 0;",
      "   if ((arr[size - 1] + size) % 2 == 0) return 1 + check_parity(arr, size - 1);",
      "   return check_parity(arr, size - 1);",
      "}"
     ],
     "explain": "בסיס, הספירה כשיש הפרה, ובסוף ההמשך כשאין (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">check_parity</code>.",
     "explainHtml": "בסיס, הספירה כשיש הפרה, ובסוף ההמשך כשאין (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int check_parity(int* arr, int size)",
      "{",
      "   if (size == 0) return 0;",
      "   if ((arr[size - 1] + size) % 2 == 0) return 1 + check_parity(arr, size - 1);",
      "   return check_parity(arr, size - 1);",
      "}"
     ]
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-B-Q1",
   "partKey": "",
   "examCode": "25A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "רקורסיה",
   "questionHtml": "כתבו פונקציה <strong>רקורסיבית</strong> יעילה שמקבלת מערך של מספרים שלמים <code class=\"tok\" dir=\"ltr\">arr</code>, ואת גודלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">size \\ge 0</annotation></semantics></math></span>. הפונקציה בודקת שהמערך מקיים את התכונה הבאה - בכל המקומות הזוגיים מופיע מספר זוגי. ובכל המקומות האי-זוגיים מופיע מספר אי-זוגי. הפונקציה מחזירה את <strong>מספר</strong> האיברים שלא מקיימים את התכונה הזו.<br>לדוגמא:<br>עבור המערך <code class=\"tok\" dir=\"ltr\">8, 7, 22, -5, 14, 3, 2</code> (מערך עם 7 ערכים המקום הראשון נחשב מקום 0). הפונקציה מחזירה <code class=\"tok\" dir=\"ltr\">0</code>.<br>עבור המערך <code class=\"tok\" dir=\"ltr\">8, 8, 6, 5, 51, 7</code> (מערך עם 6 ערכים המקום הראשון נחשב מקום 0), במקום שהאינדקס שלו הוא 1 מופיע מספר זוגי <code class=\"tok\" dir=\"ltr\">8</code> ובמקום שהאינדקס שלו הוא 4 מופיע מספר אי-זוגי <code class=\"tok\" dir=\"ltr\">51</code> - הפונקציה מחזירה <code class=\"tok\" dir=\"ltr\">2</code>.<br>החתימה של הפונקציה:<br><code class=\"tok\" dir=\"ltr\">int check_parity(int *arr, int size)</code>",
   "solutionHtml": "<strong>פתרון סטודנט</strong> (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int check_parity(int* arr, int size)\n{\n   if(size==0)\n      return 0;\n   if((arr[size-1]+size)%2==0)\n      return 1+check_parity(arr,size-1);\n   return check_parity(arr,size-1);\n}</code></pre>בודקים את האיבר האחרון (אינדקס <code class=\"tok\" dir=\"ltr\">size-1</code>): הוא מפר את התכונה כאשר סכום הערך והאינדקס אי-זוגי, כלומר כאשר <code class=\"tok\" dir=\"ltr\">arr[size-1]+size</code> זוגי. אם יש הפרה מוסיפים <code class=\"tok\" dir=\"ltr\">1</code>, ובכל מקרה ממשיכים רקורסיבית עם <code class=\"tok\" dir=\"ltr\">size-1</code>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לבדוק רק את הזוגיות של הערך ולא את הקשר לאינדקס.",
    "לבלבל בין <code class=\"tok\" dir=\"ltr\">size</code> לאינדקס האחרון <code class=\"tok\" dir=\"ltr\">size-1</code>: הסכום <code class=\"tok\" dir=\"ltr\">arr[size-1] + size</code> זוגי דווקא כשיש הפרה.",
    "להחזיר <code class=\"tok\" dir=\"ltr\">0</code> או <code class=\"tok\" dir=\"ltr\">1</code> במקום לצבור את מספר ההפרות."
   ]
  },
  {
   "num": 2,
   "kind": "code",
   "topic": "binary_search",
   "question": "כתבו פונקציה יעילה שמקבלת שני מערכים של מספרים שלמים `arr1`,`arr2`, ששניהם בגודל `size`.\nהערכים בכל מערך בנפרד שונים זה מזה אך אינם מסודרים בסדר מסוים.\nעל הפונקציה לשנות את המערך `arr2` כך שבכל אינדקס יופיע הערך `1` או `0`. הערך `1` יופיע במקום `i` אם הערך המקורי `arr2[i]` נמצא ב-`arr1`, אחרת יופיע `0`. אין לשנות את המערך `arr1`, אך ניתן להשתמש במערך עזר.\nלדוגמא:\nבקלט:\n`arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23`\n`arr2: 99, 2, 3, 4, -5, 6, 7, 1, 9`\nלאחר ביצוע הפונקציה:\n`arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23` (לא השתנה)\n`arr2: 0, 1, 1, 0, 1, 0, 0, 0, 1` (הערכים `2,3,-5,9` נמצאים ב-`arr1`, שאר הערכים לא נמצאים).\nיש לכתוב פונקציה שחתימתה היא:\n`void search_in_array(int* arr1, int* arr2, int size);`\nעל הפונקציה לרוץ בסדר גודל של $size\\cdot\\log(size)$",
   "solution": "**הנחה: הפונקציה binary_search מחזירה 1 אם האיבר נמצא ו-0 אחרת (החתימה בלבד ניתנה במבחן)**\n**פתרון סטודנט** (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:\n```c\nvoid search_in_array(int* arr1, int* arr2, int size)\n{\n   int* temp=(int*)malloc(size*sizeof(int));\n   assert(temp);\n   for(int i=0;i<size;i++)\n      temp[i]=arr1[i];\n   merge_sort(temp,0,size-1);\n   for(int i=0;i<size;i++)\n      arr2[i]=binary_search(temp,size,arr2[i]);\n   free(temp);\n}\n```\nהסטודנט מוסיף הערה בכתב יד (הועתקה בקירוב, הכתב אינו ברור לחלוטין): `binary_search` מחזירה `1` אם האיבר נמצא, אחרת `0`, וזו הנחת הפתרון. מעתיקים את `arr1` למערך עזר, ממיינים אותו (מיון מיזוג) ומחפשים בינארית כל איבר של `arr2`: $O(size\\log size)$.",
   "solutionSource": "student-solution",
   "official": false,
   "confidence": "med",
   "points": 26,
   "rubric": [
    {
     "text": "העתקת `arr1` למערך עזר, כדי לא לשנות את `arr1`",
     "points": 5,
     "html": "העתקת <code class=\"tok\" dir=\"ltr\">arr1</code> למערך עזר, כדי לא לשנות את <code class=\"tok\" dir=\"ltr\">arr1</code>"
    },
    {
     "text": "מיון מערך העזר עם `merge_sort`",
     "points": 6,
     "html": "מיון מערך העזר עם <code class=\"tok\" dir=\"ltr\">merge_sort</code>"
    },
    {
     "text": "חיפוש בינארי של כל `arr2[i]` במערך העזר הממוין",
     "points": 7,
     "html": "חיפוש בינארי של כל <code class=\"tok\" dir=\"ltr\">arr2[i]</code> במערך העזר הממוין"
    },
    {
     "text": "כתיבת תוצאת החיפוש (`1` או `0`) ל-`arr2[i]`",
     "points": 4,
     "html": "כתיבת תוצאת החיפוש (<code class=\"tok\" dir=\"ltr\">1</code> או <code class=\"tok\" dir=\"ltr\">0</code>) ל-<code class=\"tok\" dir=\"ltr\">arr2[i]</code>"
    },
    {
     "text": "שחרור מערך העזר וזמן $O(size\\log size)$",
     "points": 4,
     "html": "שחרור מערך העזר וזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size\\log size)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "חיפוש לינארי של כל איבר של `arr2` ב-`arr1`: $O(size^2)$ ולא $O(size\\log size)$.",
    "למיין את `arr1` עצמו: השאלה אוסרת לשנות אותו, ולכן ממיינים העתק.",
    "לחפש בינארית במערך שלא מוין."
   ],
   "steps": [
    {
     "type": "choice",
     "prompt": "מה הפתרון עושה עם `arr1` לפני החיפושים?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "מעתיק אותו למערך עזר וממיין את ההעתק",
       "html": "מעתיק אותו למערך עזר וממיין את ההעתק"
      },
      {
       "id": "b",
       "type": "text",
       "value": "ממיין את `arr1` עצמו",
       "html": "ממיין את <code class=\"tok\" dir=\"ltr\">arr1</code> עצמו"
      },
      {
       "id": "c",
       "type": "text",
       "value": "ממיין את `arr2` ומחפש בו את ערכי `arr1`",
       "html": "ממיין את <code class=\"tok\" dir=\"ltr\">arr2</code> ומחפש בו את ערכי <code class=\"tok\" dir=\"ltr\">arr1</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "מחפש בו בינארית כמות שהוא, בלי למיין",
       "html": "מחפש בו בינארית כמות שהוא, בלי למיין"
      }
     ],
     "correctId": "a",
     "explain": "השאלה אוסרת לשנות את `arr1`, ולכן ממיינים העתק (ריצה אמיתית: מיון `arr1` עצמו משנה אותו, וחיפוש בינארי בלי מיון נותן תשובות שגויות).",
     "promptHtml": "מה הפתרון עושה עם <code class=\"tok\" dir=\"ltr\">arr1</code> לפני החיפושים?",
     "explainHtml": "השאלה אוסרת לשנות את <code class=\"tok\" dir=\"ltr\">arr1</code>, ולכן ממיינים העתק (ריצה אמיתית: מיון <code class=\"tok\" dir=\"ltr\">arr1</code> עצמו משנה אותו, וחיפוש בינארי בלי מיון נותן תשובות שגויות)."
    },
    {
     "type": "numeric",
     "prompt": "בדוגמה של השאלה: מהו סכום הערכים ב-`arr2` אחרי הקריאה?",
     "answer": 4,
     "tol": 0,
     "explain": "ארבעה ערכים, `2, 3, -5, 9`, נמצאים ב-`arr1`, ולכן במערך `arr2` ארבעה 1 וחמישה 0 (ריצה אמיתית: 4). הנחת הפתרון: `binary_search` מחזירה 1 אם נמצא ו-0 אחרת.",
     "promptHtml": "בדוגמה של השאלה: מהו סכום הערכים ב-<code class=\"tok\" dir=\"ltr\">arr2</code> אחרי הקריאה?",
     "explainHtml": "ארבעה ערכים, <code class=\"tok\" dir=\"ltr\">2, 3, -5, 9</code>, נמצאים ב-<code class=\"tok\" dir=\"ltr\">arr1</code>, ולכן במערך <code class=\"tok\" dir=\"ltr\">arr2</code> ארבעה 1 וחמישה 0 (ריצה אמיתית: 4). הנחת הפתרון: <code class=\"tok\" dir=\"ltr\">binary_search</code> מחזירה 1 אם נמצא ו-0 אחרת."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את גוף הלולאה האחרונה.",
     "code": true,
     "lines": [
      "void search_in_array(int* arr1, int* arr2, int size)",
      "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i < size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i < size; i++)",
      "      ___",
      "   free(temp);",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "arr2[i] = binary_search(temp, size, arr2[i]);",
       "html": "arr2[i] = binary_search(temp, size, arr2[i]);"
      },
      {
       "id": "b",
       "type": "text",
       "value": "arr2[i] = binary_search(arr1, size, arr2[i]);",
       "html": "arr2[i] = binary_search(arr1, size, arr2[i]);"
      },
      {
       "id": "c",
       "type": "text",
       "value": "arr2[i] = binary_search(temp, size, i);",
       "html": "arr2[i] = binary_search(temp, size, i);"
      },
      {
       "id": "d",
       "type": "text",
       "value": "arr2[i] = 1 - binary_search(temp, size, arr2[i]);",
       "html": "arr2[i] = 1 - binary_search(temp, size, arr2[i]);"
      }
     ],
     "correctId": "a",
     "explain": "מחפשים את הערך `arr2[i]` במערך העזר הממוין. חיפוש ב-`arr1` שלא ממוין שגוי, חיפוש של האינדקס שגוי, והחסרה מ-1 הופכת את התשובה (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את גוף הלולאה האחרונה.",
     "explainHtml": "מחפשים את הערך <code class=\"tok\" dir=\"ltr\">arr2[i]</code> במערך העזר הממוין. חיפוש ב-<code class=\"tok\" dir=\"ltr\">arr1</code> שלא ממוין שגוי, חיפוש של האינדקס שגוי, והחסרה מ-1 הופכת את התשובה (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "void search_in_array(int* arr1, int* arr2, int size)",
      "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i &lt; size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i &lt; size; i++)",
      "      ___",
      "   free(temp);",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `search_in_array`.",
     "code": true,
     "lines": [
      "void search_in_array(int* arr1, int* arr2, int size)",
      "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i < size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i < size; i++) arr2[i] = binary_search(temp, size, arr2[i]); free(temp);",
      "}"
     ],
     "explain": "הקצאה, העתקה, מיון, חיפושים עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">search_in_array</code>.",
     "explainHtml": "הקצאה, העתקה, מיון, חיפושים עם שחרור (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "void search_in_array(int* arr1, int* arr2, int size)",
      "{",
      "   int* temp = (int*)malloc(size * sizeof(int)); assert(temp);",
      "   for (int i = 0; i &lt; size; i++) temp[i] = arr1[i];",
      "   merge_sort(temp, 0, size - 1);",
      "   for (int i = 0; i &lt; size; i++) arr2[i] = binary_search(temp, size, arr2[i]); free(temp);",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(size log size)",
      "O(size log(size))",
      "O(n log n)",
      "O(nlogn)"
     ],
     "normalize": "complexity",
     "explain": "מיון $O(size\\log size)$ ועוד `size` חיפושים של $O(\\log size)$ כל אחד: $O(size\\log size)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "מיון <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size\\log size)</annotation></semantics></math></span> ועוד <code class=\"tok\" dir=\"ltr\">size</code> חיפושים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(\\log size)</annotation></semantics></math></span> כל אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size\\log size)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-B-Q2",
   "partKey": "",
   "examCode": "25A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "חיפוש בינארי",
   "questionHtml": "כתבו פונקציה יעילה שמקבלת שני מערכים של מספרים שלמים <code class=\"tok\" dir=\"ltr\">arr1</code>,<code class=\"tok\" dir=\"ltr\">arr2</code>, ששניהם בגודל <code class=\"tok\" dir=\"ltr\">size</code>.<br>הערכים בכל מערך בנפרד שונים זה מזה אך אינם מסודרים בסדר מסוים.<br>על הפונקציה לשנות את המערך <code class=\"tok\" dir=\"ltr\">arr2</code> כך שבכל אינדקס יופיע הערך <code class=\"tok\" dir=\"ltr\">1</code> או <code class=\"tok\" dir=\"ltr\">0</code>. הערך <code class=\"tok\" dir=\"ltr\">1</code> יופיע במקום <code class=\"tok\" dir=\"ltr\">i</code> אם הערך המקורי <code class=\"tok\" dir=\"ltr\">arr2[i]</code> נמצא ב-<code class=\"tok\" dir=\"ltr\">arr1</code>, אחרת יופיע <code class=\"tok\" dir=\"ltr\">0</code>. אין לשנות את המערך <code class=\"tok\" dir=\"ltr\">arr1</code>, אך ניתן להשתמש במערך עזר.<br>לדוגמא:<br>בקלט:<br><code class=\"tok\" dir=\"ltr\">arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23</code><br><code class=\"tok\" dir=\"ltr\">arr2: 99, 2, 3, 4, -5, 6, 7, 1, 9</code><br>לאחר ביצוע הפונקציה:<br><code class=\"tok\" dir=\"ltr\">arr1: 9, -5, 3, -15, -21, 2, -6, 12, 23</code> (לא השתנה)<br><code class=\"tok\" dir=\"ltr\">arr2: 0, 1, 1, 0, 1, 0, 0, 0, 1</code> (הערכים <code class=\"tok\" dir=\"ltr\">2,3,-5,9</code> נמצאים ב-<code class=\"tok\" dir=\"ltr\">arr1</code>, שאר הערכים לא נמצאים).<br>יש לכתוב פונקציה שחתימתה היא:<br><code class=\"tok\" dir=\"ltr\">void search_in_array(int* arr1, int* arr2, int size);</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo>⋅</mo><mi>log</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">size\\cdot\\log(size)</annotation></semantics></math></span>",
   "solutionHtml": "<strong>הנחה: הפונקציה binary_search מחזירה 1 אם האיבר נמצא ו-0 אחרת (החתימה בלבד ניתנה במבחן)</strong><br><strong>פתרון סטודנט</strong> (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>void search_in_array(int* arr1, int* arr2, int size)\n{\n   int* temp=(int*)malloc(size*sizeof(int));\n   assert(temp);\n   for(int i=0;i&lt;size;i++)\n      temp[i]=arr1[i];\n   merge_sort(temp,0,size-1);\n   for(int i=0;i&lt;size;i++)\n      arr2[i]=binary_search(temp,size,arr2[i]);\n   free(temp);\n}</code></pre>הסטודנט מוסיף הערה בכתב יד (הועתקה בקירוב, הכתב אינו ברור לחלוטין): <code class=\"tok\" dir=\"ltr\">binary_search</code> מחזירה <code class=\"tok\" dir=\"ltr\">1</code> אם האיבר נמצא, אחרת <code class=\"tok\" dir=\"ltr\">0</code>, וזו הנחת הפתרון. מעתיקים את <code class=\"tok\" dir=\"ltr\">arr1</code> למערך עזר, ממיינים אותו (מיון מיזוג) ומחפשים בינארית כל איבר של <code class=\"tok\" dir=\"ltr\">arr2</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size\\log size)</annotation></semantics></math></span>.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "חיפוש לינארי של כל איבר של <code class=\"tok\" dir=\"ltr\">arr2</code> ב-<code class=\"tok\" dir=\"ltr\">arr1</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><msup><mi>e</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mi>log</mi><mo>⁡</mo><mi>s</mi><mi>i</mi><mi>z</mi><mi>e</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(size\\log size)</annotation></semantics></math></span>.",
    "למיין את <code class=\"tok\" dir=\"ltr\">arr1</code> עצמו: השאלה אוסרת לשנות אותו, ולכן ממיינים העתק.",
    "לחפש בינארית במערך שלא מוין."
   ]
  },
  {
   "num": 3,
   "kind": "code",
   "topic": "strings",
   "question": "כתבו פונקציה יעילה שמקבלת שתי מחרוזות `text` ו-`word` המכילות רק אותיות אנגלית קטנות. הפונקציה בודקת האם מהאותיות של `text` אפשר להרכיב מילה `word`. אם ההרכבה אפשרית הפונקציה תחזיר `1`, אחרת - על הפונקציה להחזיר `0`.\nלדוגמא: אם `text=\"intelligence\"`\nאז עבור המילים: `glue, glee, client, electing` על הפונקציה להחזיר `1`,\nועבור המילה `inciting` על הפונקציה להחזיר `0`, כי אות `i` מופיעה ב-`text` רק **פעמיים**.\nאין לשנות את המחרוזות אך ניתן להשתמש במערך עזר.\nיש לכתוב פונקציה שחתימתה היא:\n`int word_in_text(char* text, char* word)`\nעל הפונקציה לרוץ בסדר גודל של $n$ כאשר $n$ זה אורך של המחרוזת הארוכה בין השתיים.",
   "solution": "**פתרון סטודנט** (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:\n```c\nint word_in_text(char* text, char* word)\n{\n   int count[26]={0};\n   while(*text){\n      count[*text-'a']++;\n      text++;\n   }\n   while(*word){\n      if(--count[*word-'a']<0)\n         return 0;\n      word++;\n   }\n   return 1;\n}\n```\nסופרים את מופעי כל אות ב-`text` במערך של 26 מונים, ואז מורידים מונה לכל אות של `word`; אם מונה יורד מתחת ל-0 חסרה אות ומחזירים `0`. שתי סריקות לינאריות.",
   "solutionSource": "student-solution",
   "official": false,
   "confidence": "high",
   "points": 26,
   "rubric": [
    {
     "text": "מערך מונים `count` בגודל 26, מאופס",
     "points": 4,
     "html": "מערך מונים <code class=\"tok\" dir=\"ltr\">count</code> בגודל 26, מאופס"
    },
    {
     "text": "ספירת מופעי כל אות של `text` בסריקה אחת",
     "points": 7,
     "html": "ספירת מופעי כל אות של <code class=\"tok\" dir=\"ltr\">text</code> בסריקה אחת"
    },
    {
     "text": "הקטנת המונה של כל אות של `word`",
     "points": 7,
     "html": "הקטנת המונה של כל אות של <code class=\"tok\" dir=\"ltr\">word</code>"
    },
    {
     "text": "החזרת `0` כשמונה יורד מתחת ל-0, כלומר חסרה אות",
     "points": 5,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">0</code> כשמונה יורד מתחת ל-0, כלומר חסרה אות"
    },
    {
     "text": "החזרת `1` בסוף, וזמן $O(n)$",
     "points": 3,
     "html": "החזרת <code class=\"tok\" dir=\"ltr\">1</code> בסוף, וזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לבדוק רק שכל אות של `word` מופיעה ב-`text`, בלי לספור: `inciting` דורשת שלוש `i`, ו-`text` מכיל שתיים.",
    "לחפש לכל אות של `word` בתוך `text`: $O(n^2)$ ולא $O(n)$.",
    "לא לאפס את מערך המונים: הוא חייב להתחיל באפסים."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "אחרי הלולאה הראשונה עבור `text = \"intelligence\"`: מהו המונה של האות `e`?",
     "answer": 3,
     "tol": 0,
     "explain": "האות `e` מופיעה ב-`intelligence` שלוש פעמים (ריצה אמיתית: 3).",
     "promptHtml": "אחרי הלולאה הראשונה עבור <code class=\"tok\" dir=\"ltr\">text = \"intelligence\"</code>: מהו המונה של האות <code class=\"tok\" dir=\"ltr\">e</code>?",
     "explainHtml": "האות <code class=\"tok\" dir=\"ltr\">e</code> מופיעה ב-<code class=\"tok\" dir=\"ltr\">intelligence</code> שלוש פעמים (ריצה אמיתית: 3)."
    },
    {
     "type": "choice",
     "prompt": "עבור `word = \"inciting\"`: על איזו אות מונה יורד מתחת ל-0 ו-`word_in_text` מחזירה 0?",
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "`i`",
       "html": "<code class=\"tok\" dir=\"ltr\">i</code>"
      },
      {
       "id": "b",
       "type": "text",
       "value": "`n`",
       "html": "<code class=\"tok\" dir=\"ltr\">n</code>"
      },
      {
       "id": "c",
       "type": "text",
       "value": "`c`",
       "html": "<code class=\"tok\" dir=\"ltr\">c</code>"
      },
      {
       "id": "d",
       "type": "text",
       "value": "`g`",
       "html": "<code class=\"tok\" dir=\"ltr\">g</code>"
      }
     ],
     "correctId": "a",
     "explain": "האות `i` מופיעה ב-`text` פעמיים ובמילה שלוש פעמים, ובמופע השלישי המונה הופך ל-1- (ריצה אמיתית: `i`).",
     "promptHtml": "עבור <code class=\"tok\" dir=\"ltr\">word = \"inciting\"</code>: על איזו אות מונה יורד מתחת ל-0 ו-<code class=\"tok\" dir=\"ltr\">word_in_text</code> מחזירה 0?",
     "explainHtml": "האות <code class=\"tok\" dir=\"ltr\">i</code> מופיעה ב-<code class=\"tok\" dir=\"ltr\">text</code> פעמיים ובמילה שלוש פעמים, ובמופע השלישי המונה הופך ל-1- (ריצה אמיתית: <code class=\"tok\" dir=\"ltr\">i</code>)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את התנאי שבודק אם חסרה אות.",
     "code": true,
     "lines": [
      "int word_in_text(char* text, char* word)",
      "{",
      "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word)",
      "   {",
      "      if (___) return 0;",
      "      word++;",
      "   }",
      "   return 1;",
      "}"
     ],
     "blankIndex": 6,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "--count[*word - 'a'] < 0",
       "html": "--count[*word - 'a'] &lt; 0"
      },
      {
       "id": "b",
       "type": "text",
       "value": "count[*word - 'a']-- < 0",
       "html": "count[*word - 'a']-- &lt; 0"
      },
      {
       "id": "c",
       "type": "text",
       "value": "--count[*word - 'a'] <= 0",
       "html": "--count[*word - 'a'] &lt;= 0"
      },
      {
       "id": "d",
       "type": "text",
       "value": "count[*word - 'a'] < 0",
       "html": "count[*word - 'a'] &lt; 0"
      }
     ],
     "correctId": "a",
     "explain": "מקטינים קודם ואז בודקים אם התוצאה שלילית. הקטנה אחרי הבדיקה מאחרת בצעד אחד, `<= 0` פוסל אות אחרונה שקיימת, ובלי הקטנה המונה לא משתנה (ריצה אמיתית: כולן נכשלות).",
     "promptHtml": "השלימו את התנאי שבודק אם חסרה אות.",
     "explainHtml": "מקטינים קודם ואז בודקים אם התוצאה שלילית. הקטנה אחרי הבדיקה מאחרת בצעד אחד, <code class=\"tok\" dir=\"ltr\">&lt;= 0</code> פוסל אות אחרונה שקיימת, ובלי הקטנה המונה לא משתנה (ריצה אמיתית: כולן נכשלות).",
     "linesHtml": [
      "int word_in_text(char* text, char* word)",
      "{",
      "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word)",
      "   {",
      "      if (___) return 0;",
      "      word++;",
      "   }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שורות הפונקציה `word_in_text`.",
     "code": true,
     "lines": [
      "int word_in_text(char* text, char* word)",
      "{",
      "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word) { if (--count[*word - 'a'] < 0) return 0; word++; }",
      "   return 1;",
      "}"
     ],
     "explain": "מערך מונים, ספירת `text`, הקטנה לפי `word`, והחזרת `1` (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "promptHtml": "סדרו את שורות הפונקציה <code class=\"tok\" dir=\"ltr\">word_in_text</code>.",
     "explainHtml": "מערך מונים, ספירת <code class=\"tok\" dir=\"ltr\">text</code>, הקטנה לפי <code class=\"tok\" dir=\"ltr\">word</code>, והחזרת <code class=\"tok\" dir=\"ltr\">1</code> (ריצה אמיתית: כל החלפה משנה את הפלט או לא מתקמפלת).",
     "linesHtml": [
      "int word_in_text(char* text, char* word)",
      "{",
      "   int count[26] = {0};",
      "   while (*text) { count[*text - 'a']++; text++; }",
      "   while (*word) { if (--count[*word - 'a'] &lt; 0) return 0; word++; }",
      "   return 1;",
      "}"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
     "accept": [
      "O(n)"
     ],
     "normalize": "complexity",
     "explain": "שתי סריקות לינאריות ומערך בגודל קבוע: $O(n)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה? (למשל <code class=\"tok\" dir=\"ltr\">O(n)</code>)",
     "explainHtml": "שתי סריקות לינאריות ומערך בגודל קבוע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-B-Q3",
   "partKey": "",
   "examCode": "25A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מחרוזות",
   "questionHtml": "כתבו פונקציה יעילה שמקבלת שתי מחרוזות <code class=\"tok\" dir=\"ltr\">text</code> ו-<code class=\"tok\" dir=\"ltr\">word</code> המכילות רק אותיות אנגלית קטנות. הפונקציה בודקת האם מהאותיות של <code class=\"tok\" dir=\"ltr\">text</code> אפשר להרכיב מילה <code class=\"tok\" dir=\"ltr\">word</code>. אם ההרכבה אפשרית הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">1</code>, אחרת - על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">0</code>.<br>לדוגמא: אם <code class=\"tok\" dir=\"ltr\">text=\"intelligence\"</code><br>אז עבור המילים: <code class=\"tok\" dir=\"ltr\">glue, glee, client, electing</code> על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">1</code>,<br>ועבור המילה <code class=\"tok\" dir=\"ltr\">inciting</code> על הפונקציה להחזיר <code class=\"tok\" dir=\"ltr\">0</code>, כי אות <code class=\"tok\" dir=\"ltr\">i</code> מופיעה ב-<code class=\"tok\" dir=\"ltr\">text</code> רק <strong>פעמיים</strong>.<br>אין לשנות את המחרוזות אך ניתן להשתמש במערך עזר.<br>יש לכתוב פונקציה שחתימתה היא:<br><code class=\"tok\" dir=\"ltr\">int word_in_text(char* text, char* word)</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> זה אורך של המחרוזת הארוכה בין השתיים.",
   "solutionHtml": "<strong>פתרון סטודנט</strong> (25A-B, ציון מלא על שאלה זו), הועתק כלשונו:<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int word_in_text(char* text, char* word)\n{\n   int count[26]={0};\n   while(*text){\n      count[*text-'a']++;\n      text++;\n   }\n   while(*word){\n      if(--count[*word-'a']&lt;0)\n         return 0;\n      word++;\n   }\n   return 1;\n}</code></pre>סופרים את מופעי כל אות ב-<code class=\"tok\" dir=\"ltr\">text</code> במערך של 26 מונים, ואז מורידים מונה לכל אות של <code class=\"tok\" dir=\"ltr\">word</code>; אם מונה יורד מתחת ל-0 חסרה אות ומחזירים <code class=\"tok\" dir=\"ltr\">0</code>. שתי סריקות לינאריות.",
   "pointsTotal": 26,
   "pitfallsHtml": [
    "לבדוק רק שכל אות של <code class=\"tok\" dir=\"ltr\">word</code> מופיעה ב-<code class=\"tok\" dir=\"ltr\">text</code>, בלי לספור: <code class=\"tok\" dir=\"ltr\">inciting</code> דורשת שלוש <code class=\"tok\" dir=\"ltr\">i</code>, ו-<code class=\"tok\" dir=\"ltr\">text</code> מכיל שתיים.",
    "לחפש לכל אות של <code class=\"tok\" dir=\"ltr\">word</code> בתוך <code class=\"tok\" dir=\"ltr\">text</code>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n^2)</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><mi>n</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(n)</annotation></semantics></math></span>.",
    "לא לאפס את מערך המונים: הוא חייב להתחיל באפסים."
   ]
  },
  {
   "num": 4,
   "kind": "code",
   "topic": "matrices",
   "points": 27,
   "contextId": "25A-B-c4",
   "question": "נתון מערך ריבועי דו-ממדי בגודל $N\\times N$, המכיל רק את הערכים `0` ו-`1` (מטריצה בינארית).\nיש לכתוב פונקציה יעילה שמקבלת את המערך ומחזירה את מספר תת-המערכים בגודל $3\\times 3$ שבהם כל הערכים הם `1`.\nלדוגמא:\nעבור המערך הבא (ראו למעלה) הפונקציה תחזיר `4`.\nחתימת הפונקציה היא:\n`int number_squares (int matrix[N][N]);`\nעל הפונקציה לרוץ בסדר גודל של $N*N$",
   "solution": "**פתרון הפותר** (המקור היחיד הוא פתרון סטודנט שקיבל 22/27 ושגוי: הלולאה השלישית שלו רצה עד `c` במקום עד `r`, ולכן הוא לא מוצג כאן):\n```c\nint number_squares(int matrix[N][N])\n{\n   int i, j, a, b, all_ones, count = 0;\n   for (i = 0; i + 2 < N; i++)            // (i, j) = top-left corner of a 3x3 square\n      for (j = 0; j + 2 < N; j++)\n      {\n         all_ones = 1;\n         for (a = i; a < i + 3; a++)      // fixed 9 cells per square\n            for (b = j; b < j + 3; b++)\n               if (matrix[a][b] == 0)\n                  all_ones = 0;\n         count += all_ones;\n      }\n   return count;\n}\n```\nעוברים על כל פינה שמאלית-עליונה `(i, j)` של ריבוע $3\\times 3$ שנכנס כולו במטריצה (`i+2<N` וגם `j+2<N`), ובודקים את 9 התאים שלו. אם כולם `1` מוסיפים 1 למונה.\nיש פחות מ-$N^2$ פינות, ולכל אחת מספר קבוע (9) של בדיקות, ולכן הזמן $O(N^2)$. בדוגמה המודפסת מוחזר `4`.",
   "solutionSource": "solved",
   "official": false,
   "confidence": "high",
   "rubric": [
    {
     "text": "מעבר על פינות שמאליות-עליונות אפשריות בלבד: `i + 2 < N` ו-`j + 2 < N`",
     "points": 6,
     "html": "מעבר על פינות שמאליות-עליונות אפשריות בלבד: <code class=\"tok\" dir=\"ltr\">i + 2 &lt; N</code> ו-<code class=\"tok\" dir=\"ltr\">j + 2 &lt; N</code>"
    },
    {
     "text": "בדיקת תשעת תאי הריבוע $3\\times 3$ מהפינה `(i, j)`",
     "points": 7,
     "html": "בדיקת תשעת תאי הריבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> מהפינה <code class=\"tok\" dir=\"ltr\">(i, j)</code>"
    },
    {
     "text": "דגל `all_ones` שמאותחל ל-1 לפני כל ריבוע ומתאפס כשנמצא `0`",
     "points": 6,
     "html": "דגל <code class=\"tok\" dir=\"ltr\">all_ones</code> שמאותחל ל-1 לפני כל ריבוע ומתאפס כשנמצא <code class=\"tok\" dir=\"ltr\">0</code>"
    },
    {
     "text": "הוספת הדגל למונה והחזרתו",
     "points": 3,
     "html": "הוספת הדגל למונה והחזרתו"
    },
    {
     "text": "מספר קבוע של בדיקות לכל פינה, כלומר $O(N^2)$",
     "points": 5,
     "html": "מספר קבוע של בדיקות לכל פינה, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>"
    }
   ],
   "rubricSource": "ai-verified",
   "pitfalls": [
    "לרוץ על כל התאים כפינות (`i < N`): הבדיקה יוצאת מגבולות המטריצה.",
    "לשכוח לאפס את `all_ones` לפני כל ריבוע, כך שריבוע פגום אחד פוסל את כל הבאים אחריו.",
    "לבדוק רק את הפינה או את התא האמצעי ולא את כל תשעת התאים."
   ],
   "steps": [
    {
     "type": "numeric",
     "prompt": "כמה פינות `(i, j)` של ריבוע $3\\times 3$ בודקת הפונקציה במטריצה `image` מהדוגמה ($N=6$)?",
     "answer": 16,
     "tol": 0,
     "explain": "`i` ו-`j` רצים כל אחד על 0 עד 3, כלומר $4\\cdot4=16$ פינות (ריצה אמיתית: 16).",
     "promptHtml": "כמה פינות <code class=\"tok\" dir=\"ltr\">(i, j)</code> של ריבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> בודקת הפונקציה במטריצה <code class=\"tok\" dir=\"ltr\">image</code> מהדוגמה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">N=6</annotation></semantics></math></span>)?",
     "explainHtml": "<code class=\"tok\" dir=\"ltr\">i</code> ו-<code class=\"tok\" dir=\"ltr\">j</code> רצים כל אחד על 0 עד 3, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot4=16</annotation></semantics></math></span> פינות (ריצה אמיתית: 16)."
    },
    {
     "type": "numeric",
     "prompt": "מה מחזירה `number_squares` עבור `image`?",
     "answer": 4,
     "tol": 0,
     "explain": "מתוך 16 הפינות, ארבעה ריבועים $3\\times 3$ מכילים רק 1 (ריצה אמיתית: 4).",
     "promptHtml": "מה מחזירה <code class=\"tok\" dir=\"ltr\">number_squares</code> עבור <code class=\"tok\" dir=\"ltr\">image</code>?",
     "explainHtml": "מתוך 16 הפינות, ארבעה ריבועים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> מכילים רק 1 (ריצה אמיתית: 4)."
    },
    {
     "type": "fillblank",
     "prompt": "השלימו את כותרת הלולאה החיצונית.",
     "code": true,
     "lines": [
      "int number_squares(int matrix[N][N])",
      "{",
      "   int i, j, a, b, all_ones, count = 0;",
      "   ___",
      "      for (j = 0; j + 2 < N; j++)",
      "      {",
      "         all_ones = 1;",
      "         for (a = i; a < i + 3; a++)",
      "            for (b = j; b < j + 3; b++)",
      "               if (matrix[a][b] == 0)",
      "                  all_ones = 0;",
      "         count += all_ones;",
      "      }",
      "   return count;",
      "}"
     ],
     "blankIndex": 3,
     "options": [
      {
       "id": "a",
       "type": "text",
       "value": "for (i = 0; i + 2 < N; i++)",
       "html": "for (i = 0; i + 2 &lt; N; i++)"
      },
      {
       "id": "b",
       "type": "text",
       "value": "for (i = 0; i + 3 < N; i++)",
       "html": "for (i = 0; i + 3 &lt; N; i++)"
      },
      {
       "id": "c",
       "type": "text",
       "value": "for (i = 0; i < N / 3; i++)",
       "html": "for (i = 0; i &lt; N / 3; i++)"
      },
      {
       "id": "d",
       "type": "text",
       "value": "for (i = 0; i + 4 < N; i++)",
       "html": "for (i = 0; i + 4 &lt; N; i++)"
      }
     ],
     "correctId": "a",
     "explain": "ריבוע שפינתו בשורה `i` תופס את השורות `i` עד `i + 2`, ולכן `i + 2 < N`. האחרות מפספסות שורות של פינות (ריצה אמיתית: כולן סופרות פחות ריבועים).",
     "promptHtml": "השלימו את כותרת הלולאה החיצונית.",
     "explainHtml": "ריבוע שפינתו בשורה <code class=\"tok\" dir=\"ltr\">i</code> תופס את השורות <code class=\"tok\" dir=\"ltr\">i</code> עד <code class=\"tok\" dir=\"ltr\">i + 2</code>, ולכן <code class=\"tok\" dir=\"ltr\">i + 2 &lt; N</code>. האחרות מפספסות שורות של פינות (ריצה אמיתית: כולן סופרות פחות ריבועים).",
     "linesHtml": [
      "int number_squares(int matrix[N][N])",
      "{",
      "   int i, j, a, b, all_ones, count = 0;",
      "   ___",
      "      for (j = 0; j + 2 &lt; N; j++)",
      "      {",
      "         all_ones = 1;",
      "         for (a = i; a &lt; i + 3; a++)",
      "            for (b = j; b &lt; j + 3; b++)",
      "               if (matrix[a][b] == 0)",
      "                  all_ones = 0;",
      "         count += all_ones;",
      "      }",
      "   return count;",
      "}"
     ]
    },
    {
     "type": "order",
     "prompt": "סדרו את שלוש הפקודות שבגוף הלולאה שבודקת ריבוע $3\\times 3$ אחד (הפינה היא `(i, j)`).",
     "code": true,
     "lines": [
      "all_ones = 1;",
      "for (a = i; a < i + 3; a++) for (b = j; b < j + 3; b++) if (matrix[a][b] == 0) all_ones = 0;",
      "count += all_ones;"
     ],
     "explain": "קודם מאתחלים את הדגל, אחר כך בודקים את תשעת התאים, ורק אז מוסיפים למונה (ריצה אמיתית: כל החלפה משנה את הפלט).",
     "promptHtml": "סדרו את שלוש הפקודות שבגוף הלולאה שבודקת ריבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> אחד (הפינה היא <code class=\"tok\" dir=\"ltr\">(i, j)</code>).",
     "explainHtml": "קודם מאתחלים את הדגל, אחר כך בודקים את תשעת התאים, ורק אז מוסיפים למונה (ריצה אמיתית: כל החלפה משנה את הפלט).",
     "linesHtml": [
      "all_ones = 1;",
      "for (a = i; a &lt; i + 3; a++) for (b = j; b &lt; j + 3; b++) if (matrix[a][b] == 0) all_ones = 0;",
      "count += all_ones;"
     ]
    },
    {
     "type": "text",
     "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$N$? (למשל `O(N)`)",
     "accept": [
      "O(N²)",
      "O(N^2)",
      "O(N*N)"
     ],
     "normalize": "complexity",
     "explain": "פחות מ-$N^2$ פינות ולכל אחת 9 בדיקות: $O(N^2)$.",
     "promptHtml": "מהו סדר הגודל של זמן הריצה כתלות ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span>? (למשל <code class=\"tok\" dir=\"ltr\">O(N)</code>)",
     "explainHtml": "פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> פינות ולכל אחת 9 בדיקות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>."
    }
   ],
   "stepsSource": "ai-verified",
   "id": "25A-B-Q4",
   "partKey": "",
   "examCode": "25A-B",
   "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ה, מועד ב (4.03.2025)",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מטריצות",
   "questionHtml": "נתון מערך ריבועי דו-ממדי בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>×</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N\\times N</annotation></semantics></math></span>, המכיל רק את הערכים <code class=\"tok\" dir=\"ltr\">0</code> ו-<code class=\"tok\" dir=\"ltr\">1</code> (מטריצה בינארית).<br>יש לכתוב פונקציה יעילה שמקבלת את המערך ומחזירה את מספר תת-המערכים בגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> שבהם כל הערכים הם <code class=\"tok\" dir=\"ltr\">1</code>.<br>לדוגמא:<br>עבור המערך הבא (ראו למעלה) הפונקציה תחזיר <code class=\"tok\" dir=\"ltr\">4</code>.<br>חתימת הפונקציה היא:<br><code class=\"tok\" dir=\"ltr\">int number_squares (int matrix[N][N]);</code><br>על הפונקציה לרוץ בסדר גודל של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>∗</mo><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N*N</annotation></semantics></math></span>",
   "solutionHtml": "<strong>פתרון הפותר</strong> (המקור היחיד הוא פתרון סטודנט שקיבל 22/27 ושגוי: הלולאה השלישית שלו רצה עד <code class=\"tok\" dir=\"ltr\">c</code> במקום עד <code class=\"tok\" dir=\"ltr\">r</code>, ולכן הוא לא מוצג כאן):<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>int number_squares(int matrix[N][N])\n{\n   int i, j, a, b, all_ones, count = 0;\n   for (i = 0; i + 2 &lt; N; i++)            // (i, j) = top-left corner of a 3x3 square\n      for (j = 0; j + 2 &lt; N; j++)\n      {\n         all_ones = 1;\n         for (a = i; a &lt; i + 3; a++)      // fixed 9 cells per square\n            for (b = j; b &lt; j + 3; b++)\n               if (matrix[a][b] == 0)\n                  all_ones = 0;\n         count += all_ones;\n      }\n   return count;\n}</code></pre>עוברים על כל פינה שמאלית-עליונה <code class=\"tok\" dir=\"ltr\">(i, j)</code> של ריבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3\\times 3</annotation></semantics></math></span> שנכנס כולו במטריצה (<code class=\"tok\" dir=\"ltr\">i+2&lt;N</code> וגם <code class=\"tok\" dir=\"ltr\">j+2&lt;N</code>), ובודקים את 9 התאים שלו. אם כולם <code class=\"tok\" dir=\"ltr\">1</code> מוסיפים 1 למונה.<br>יש פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>N</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">N^2</annotation></semantics></math></span> פינות, ולכל אחת מספר קבוע (9) של בדיקות, ולכן הזמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>O</mi><mo stretchy=\"false\">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">O(N^2)</annotation></semantics></math></span>. בדוגמה המודפסת מוחזר <code class=\"tok\" dir=\"ltr\">4</code>.",
   "pointsTotal": 27,
   "pitfallsHtml": [
    "לרוץ על כל התאים כפינות (<code class=\"tok\" dir=\"ltr\">i &lt; N</code>): הבדיקה יוצאת מגבולות המטריצה.",
    "לשכוח לאפס את <code class=\"tok\" dir=\"ltr\">all_ones</code> לפני כל ריבוע, כך שריבוע פגום אחד פוסל את כל הבאים אחריו.",
    "לבדוק רק את הפינה או את התא האמצעי ולא את כל תשעת התאים."
   ]
  }
 ]
};
