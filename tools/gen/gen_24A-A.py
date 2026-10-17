# -*- coding: utf-8 -*-
"""Generator for tools/raw/24A-A.json -- intro-cs, semester A 2024, moed A (14.03.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24A-A.py

Source: exam pp.1-13 (cover, 4 questions with answer boxes, scratch pages) and the separate official solution pp.1-5.
4 questions (27/26/26/26), cap 105, no sub-parts.

Transcription notes
- Official solutions are transcribed verbatim (code and the short remarks around it).
- Q1: the official solution is the one-line formula; the exam asks to "explain briefly", the official text gives no prose.
- Q3: two official variants. The second (num==1 base case) never terminates for num=0 -- fine, the question says natural number.
- Q4: official sample code is named bin_search_mixed and returns the POSITION; the question asks for 1/0
  (official: "the trivial change is left to the reader"). Kept verbatim.

Compile-and-run (clang, tools/verify/24A-A/all.c, -Wall -Wextra, no warnings):
- Q1 lcm(4,6)=12, lcm(-4,6)=12. Q2 "ad"->3, "acefhyz"->2. Q3 both variants equal popcount for n=1..4999 (0 mismatches).
- Q4 bin_search_mixed: 20000 random mixed arrays x every key (present and absent): 0 mismatches vs linear search.
Steps (ai-draft): expected values come from real clang runs of tools/verify/24A-A/steps.c.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24A-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


SOL1 = r"""int lcm(int a,int b) {
   return abs(a*b/gcd(a,b));
}"""

SOL2 = r"""int str_chardist(char* str) {
   int dists[26]={0};
   int len,i,maxdist;
   len=strlen(str);
   maxdist=0;
   for (i=0;i<len-1;i++) {
      dists[abs(str[i]-str[i+1])]++;
   }
   for (i=1;i<26;i++) {
      if (dists[i]>dists[maxdist]) maxdist = i;
   }
   return maxdist;
}"""

SOL3A = r"""int num_of_ones(int num)
{//num>=0
   return num ? num%2 + num_of_ones(num/2) : 0;
}"""

SOL3B = r"""int num_of_ones(int num)
{//num>0
       if(num==1)
              return 1;
       return num % 2 + num_of_ones(num / 2);
}"""

SOL4 = r"""int bin_search_mixed(int key, int* a, int n)
{ //assume: n is even
       int low, high, mid;
       low = 0;
       high = n - 1;
       while (low <= high)
       {
              mid = (low + high) / 2;
              mid = mid - (mid % 2); // mid is even index
              if (key == a[mid])
                     return mid;
              if (key == a[mid + 1])
                     return mid + 1;
              else if (key < a[mid])
                     high = mid - 1;
              else
                     low = mid + 2;
       }
       return -1;
}"""

questions = [
    Q(1, "code", "number_theory",
      "כפולה משותפת מינימלית (LCM - least common multiple) של שני מספרים שלמים השונים מ-0 היא המספר השלם **החיובי** "
      "הקטן ביותר שמתחלק בשני המספרים ללא שארית.\n"
      "לדוגמא: עבור המספרים `4` ו-`6` הכפולה המשותפת המינימלית היא `12` (הכפולות של 4 הן 4, 8, 12, ... והכפולות של 6 הן 6, 12, ...). "
      "עבור המספרים `-4` ו-`6` הכפולה המשותפת המינימלית היא גם `12`.\n"
      "כתבו פונקציה המקבלת שני מספרים שלמים, ששונים מ-0 ומחזירה את הכפולה המשותפת המינימלית ביניהם.\n"
      "**רמז:** ניתן להשתמש בפונקציית עזר `gcd` כקופסה שחורה למציאת המחלק המשותף הגדול ביותר: `int gcd(int,int)`\n"
      "כתבו את הקוד של הפונקציה LCM **והסבירו בקצרה** את נכונות הפתרון.",
      "**פתרון רשמי** (24A-A, קובץ הפתרון עמ' 1). ההערה הרשמית: שאלה מתרגילי הבית, הפתרון הוא פשוט:\n" + code_block(SOL1),
      points=27),

    Q(2, "code", "strings",
      "נתונה מחרוזת של אותיות קטנות באנגלית המכילה לפחות שתי אותיות.\n"
      "נגדיר שאותיות הן **צמודות** אם הן מופיעות במחרוזת זו אחר זו.\n"
      "נגדיר **מרחק** בין שתי אותיות כערך מוחלט של הפרש בין מיקומן באלפבית. המרחק בין אות לבין אותה אות הוא `0`.\n"
      "כך למשל: `dist('b','c')`=`dist('c','b')`=1 ,`dist('a','d')`=`dist('d','a')`=3 ,`dist('e','e')`=0.\n"
      "יש לכתוב פונקציה יעילה שבהינתן מחרוזת מסוימת, מחזירה מהו המרחק ה**שכיח** ביותר בין שתי **אותיות צמודות**. "
      "במקרה ויש כמה מרחקים כאלו, ניתן להחזיר כל אחד מהם.\n"
      "לדוגמא:\n"
      "עבור המחרוזת `\"ad\"` יוחזר הערך `3` (זהו המרחק היחיד, וגם השכיח).\n"
      "עבור המחרוזת `\"acefhyz\"` יוחזר הערך `2` משום שהוא מופיע שלוש פעמים כי הוא המרחק בין `'a'` ל-`'c'`, "
      "בין `'c'` ל-`'e'`, וגם בין `'f'` ל-`'h'`.\n"
      "חתימת הפונקציה: `int str_chardist(char *)`\n"
      "מותר להשתמש בפונקציית `int abs(int)`. מותר להיעזר במערך עזר.\n"
      "על זמן הריצה של הפונקציה להיות בסדר גודל של $n$, כאשר $n$ מייצג את מספר האותיות במחרוזת המקורית.",
      "**פתרון רשמי** (קובץ הפתרון עמ' 2). ההערה הרשמית: מערך מונים רגיל למדי, צריך לשים לב לא לחרוג:\n" + code_block(SOL2),
      points=26),

    Q(3, "code", "recursion",
      "כתבו פונקציה **רקורסיבית** `int number_of_bin_ones(int num)` המקבלת מספר טבעי `num` "
      "ומחזירה את מספר האחדות בייצוג הבינארי שלו.\n"
      "לדוגמא:\n"
      "עבור `num=6` הפונקציה תחזיר `2` ($6_{10}=110_2$), עבור `num=15` הפונקציה תחזיר `4` ($15_{10}=1111_2$).",
      "**פתרון רשמי** (קובץ הפתרון עמ' 3). ההערה הרשמית: פתרון קצר יחסית גם כאן. אפשר (ורצוי במבחן) להפריד את תנאי העצירה לשורה משלו:\n"
      + code_block(SOL3A) + "\nאו:\n" + code_block(SOL3B),
      points=26),

    Q(4, "code", "binary_search",
      "אריאל - סטודנט שנה א למד לקראת המבחן בקורס \"מבוא למדעי המחשב\". הוא כתב פונקציית מיון ומיין מערך. "
      "בא אליו החבר שלו, תמיר, סטודנט שנה ב, שלמד אלגוריתמים הסתברותיים לקראת מבחן באלגוריתמים. "
      "הוא כתב פונקציה שמבלגנת מערכים ממוינים עם מספר זוגי של איברים: הפונקציה מחלקת את המערך לזוגות איברים סמוכים "
      "ועבור כל אחד מזוגות האיברים היא מחליפה את הסדר של האיברים בזוג בהסתברות $\\frac{1}{2}$, אחרת היא לא משנה אותם.\n"
      "לדוגמא אם המערך הממוין המקורי היה: `1,2,3,7,11,15,23,90,722,1000`\n"
      "יתכן ולאחר ה\"בילגון\" של תמיר התקבל ממנו המערך הבא:\n"
      "`1,2,7,3,11,15,90,23,1000,722`\n"
      "(הזוגות שהוחלפו הם השני הרביעי והחמישי).\n"
      "כמובן שהיה יכול להתקבל מערך אחר, למשל: `2,1,3,7,11,15,90,23,722,1000`.\n"
      "המרצה של הקורס \"מבוא למדעי המחשב\", ראה את המערך המבולגן וחיבר שאלה למבחן:\n"
      "יש לכתוב פונקציית חיפוש **יעילה** `int find_in_mixed_array(int key, int* arr, int size)` שמקבלת את המערך שתמיר \"בילגן\" - `arr`, "
      "את גודלו - `size` וכן מספר - `key`. על הפונקציה להחזיר `1` כאשר `key` נמצא במערך, ו-`0` - אחרת.\n"
      "אפשר להניח שכל האיברים במערך שונים, ו-`size` **הוא מספר זוגי**.\n"
      "על הפונקציה לרוץ בסדר גודל $\\log size$.",
      "**פתרון רשמי** (קובץ הפתרון עמ' 4-5). הטקסט הרשמי: הפתרון התבסס על שינוי בחיפוש הבינארי הרגיל, והיו שלושה פתרונות פשוטים למדי.\n"
      "א. הפתרון הראשון והכי פשוט הוא לבדוק את איבר האמצע ואת שני האיברים מימינו ומשמאלו (תוך שימת לב לחריגות מגבול המערך) "
      "ואז להמשיך באופן רגיל לחלוטין.\n"
      "ב. פתרון פשוט אחר הוא לדאוג שאיבר האמצע יהיה תמיד שמאלי או ימני (יותר קל שמאלי) על ידי שורה כגון: `mid=mid-mid%2;` "
      "ואז לבדוק את האיבר ואת הבא אחריו (לפי נתוני השאלה הם תמיד שם). יש לשים לב להקטין את `high` כרגיל אבל את `low` יש להגדיר כ-`mid+2`. "
      "וריאנט של הפתרון הזה חילק את `mid` ב-2 ובדק ב-`mid*2` וב-`mid*2+1`.\n"
      "ג. הפתרון האלגנטי השלישי היה לחפש בינארי פעמיים, פעם על אינדקסים זוגיים בלבד ופעם על אינדקסים אי-זוגיים.\n"
      "פרט לפתרונות האלו לא היה מחסור בפתרונות נכונים אבל מסובכים עם הרבה מאוד תנאים שהם בגדול הרחבה של אחד מהרעיונות האלו.\n"
      "שום פתרון של תיקון מוקדם למערך לא קיבל כמעט נקודות. כן קיבלנו פתרונות שהחליפו בין איברים בזוג בזמן החיפוש, "
      "למרות שעדיף להימנע משינוי המערך אם זה לא נדרש בשאלה.\n"
      "פתרון לדוגמא המבוסס על הקוד מהמצגת (כמובן קוד שמחזיר את מיקום האיבר, אבל את השינוי הטריוויאלי לתנאי השאלה נשאיר לקורא):\n"
      + code_block(SOL4),
      points=26),
]

# ---- steps / rubric / pitfalls (ai-draft); expected values come from real clang runs of tools/verify/24A-A/steps.c ----
IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def lines_of(src):
    return [ln for ln in src.strip("\n").split("\n") if ln.strip()]


def swap(src, old, new):
    """Return the code lines with exactly one line changed (asserted)."""
    ls = lines_of(src)
    idx = [i for i, ln in enumerate(ls) if ln.strip() == old.strip()]
    assert len(idx) == 1, old
    ls[idx[0]] = ls[idx[0]].replace(old.strip(), new.strip())
    return ls, idx[0]


def blank(lines, target):
    idx = [i for i, ln in enumerate(lines) if ln.strip() == target]
    assert len(idx) == 1, target
    return [("___" if i == idx[0] else ln) for i, ln in enumerate(lines)], idx[0]


def add(num, **kw):
    for q in questions:
        if q["num"] == num:
            q.update(kw)
            return
    raise KeyError(num)


S1 = lines_of(SOL1)
b1, i1 = swap(SOL1, "return abs(a*b/gcd(a,b));", "return abs(a*b*gcd(a,b));")
f1, j1 = blank(S1, "return abs(a*b/gcd(a,b));")
S2 = lines_of(SOL2)
b2, i2 = swap(SOL2, "if (dists[i]>dists[maxdist]) maxdist = i;", "if (dists[i]<dists[maxdist]) maxdist = i;")
f2, j2 = blank(S2, "dists[abs(str[i]-str[i+1])]++;")
S3 = lines_of(SOL3A)
b3, i3 = swap(SOL3A, "return num ? num%2 + num_of_ones(num/2) : 0;", "return num ? num%2 + num_of_ones(num/10) : 0;")
f3, j3 = blank(S3, "return num ? num%2 + num_of_ones(num/2) : 0;")
S4 = lines_of(SOL4)
b4, i4 = swap(SOL4, "else if (key < a[mid])", "else if (key > a[mid])")
f4, j4 = blank(S4, "mid = mid - (mid % 2); // mid is even index")

add(1,
    rubric=rub(("שימוש ב-`gcd`: הכפולה המשותפת המינימלית היא `a*b/gcd(a,b)`", 14),
               ("טיפול בסימן באמצעות `abs`, כדי שהתוצאה תהיה חיובית גם כשאחד המספרים שלילי", 8),
               ("הנמקה קצרה: המכפלה `a*b` שווה ל-`gcd` כפול הכפולה המשותפת, ולכן החילוק נותן אותה", 5)),
    rubricSource="ai-draft",
    pitfalls=["להחזיר `a*b/gcd(a,b)` בלי `abs`: עבור `-4` ו-`6` מתקבל `-12` שאינו חיובי.",
              "להכפיל ב-`gcd` במקום לחלק בו, וכך לקבל מספר גדול בהרבה (עבור `4` ו-`6`: `48`).",
              "לחפש כפולה בלולאה מ-`1` ומעלה: עובד אך איטי, והשאלה מציעה את `gcd` כקופסה שחורה."],
    steps=[
        {"type": "numeric", "prompt": "מהי הכפולה המשותפת המינימלית של `12` ו-`18` (לפי הנוסחה עם `gcd`)?",
         "answer": 36, "tol": 0,
         "explain": "`gcd(12,18)=6` ולכן `12*18/6 = 36` (ריצה אמיתית: 36)."},
        {"type": "choice", "prompt": "מה היה מחזיר `a*b/gcd(a,b)` ללא `abs` עבור `a=-4`, `b=6`?",
         "options": opts("`-12`", "`12`", "`-24`", "`24`"), "correctId": "a",
         "explain": "`-4*6 = -24` ו-`gcd=2`, לכן `-12` (ריצה אמיתית). זו הסיבה לשימוש ב-`abs`."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה בפונקציה.", "code": True,
         "lines": f1, "blankIndex": j1,
         "options": opts("return abs(a*b/gcd(a,b));", "return abs(a*b*gcd(a,b));", "return a*b/gcd(a,b);", "return abs(a+b)/gcd(a,b);"),
         "correctId": "a",
         "explain": "מחלקים את המכפלה ב-`gcd` ולוקחים ערך מוחלט כדי שהתוצאה תהיה חיובית."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `lcm`.", "code": True, "lines": S1,
         "explain": "כותרת, שורת ההחזרה, וסגירת הפונקציה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה בגרסה הבאה. מצאו אותה.", "code": True,
         "lines": b1, "bugIndex": i1,
         "explain": "הכפלה ב-`gcd` במקום חילוק נותנת `48` במקום `12` עבור `4` ו-`6` (ריצה אמיתית)."},
    ],
    stepsSource="ai-draft")

add(2,
    rubric=rub(("מערך מונים בגודל 26 למרחקים האפשריים `0..25`, מאותחל באפסים", 5),
               ("לולאה על זוגות צמודים (`i < len-1`) שמגדילה את `dists[abs(str[i]-str[i+1])]`", 8),
               ("מציאת המרחק השכיח ביותר: סריקת המונים ושמירת האינדקס של המקסימום", 8),
               ("הימנעות מחריגה מגבולות המחרוזת והמערך", 3),
               ("סריקה אחת של המחרוזת ועוד סריקה של 26 תאים, כלומר $O(n)$", 2)),
    rubricSource="ai-draft",
    pitfalls=["להשוות כל אות לכל האותיות האחרות ($O(n^2)$) במקום מערך מונים.",
              "לרוץ עד `i < len` ולקרוא את תו הסיום `'\\0'`, מה שנותן אינדקס מחוץ לגבולות המערך.",
              "לבלבל בין המרחק השכיח לבין מספר המופעים שלו: מחזירים את המרחק, לא את המונה."],
    steps=[
        {"type": "numeric", "prompt": "כמה זוגות צמודים במחרוזת `\"acefhyz\"` במרחק `2`? (זה הערך `dists[2]` בסוף הלולאה הראשונה)",
         "answer": 3, "tol": 0,
         "explain": "הזוגות `ac`, `ce`, `fh` נמצאים במרחק 2, ולכן `dists[2]=3` (ריצה אמיתית: 3)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה בפונקציה.", "code": True,
         "lines": f2, "blankIndex": j2,
         "options": opts("dists[abs(str[i]-str[i+1])]++;", "dists[str[i]-str[i+1]]++;", "dists[i]++;", "dists[abs(str[i]-str[i+1])] = i;"),
         "correctId": "a",
         "explain": "מונים את המרחק `abs(str[i]-str[i+1])` שבין התו הנוכחי לבא אחריו; `abs` נדרש כדי לקבל אינדקס אי-שלילי."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `str_chardist`.", "code": True, "lines": S2,
         "explain": "הגדרות ואיפוס, חישוב אורך, לולאת הספירה, לולאת המקסימום, והחזרה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה והפונקציה מחזירה תוצאה שגויה. מצאו אותה.", "code": True,
         "lines": b2, "bugIndex": i2,
         "explain": "עם `<` נבחר המרחק השכיח הכי פחות: עבור `\"acefhyz\"` מוחזר `0` במקום `2` (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה? (למשל `O(n)`)",
         "accept": ["O(n)"], "normalize": "complexity",
         "explain": "סריקה אחת של המחרוזת וסריקה קבועה של 26 מונים, כלומר $O(n)$."},
    ],
    stepsSource="ai-draft")

add(3,
    rubric=rub(("תנאי עצירה: כאשר `num` הוא `0` (או `1`) הרקורסיה מסתיימת", 7),
               ("הביט האחרון נספר באמצעות `num%2`", 7),
               ("קריאה רקורסיבית על `num/2`, כלומר הסרת הביט האחרון", 8),
               ("חיבור התוצאות וקבלת מספר האחדות בייצוג הבינארי", 4)),
    rubricSource="ai-draft",
    pitfalls=["להשתמש בחילוק ב-`10` במקום ב-`2`: מקבלים ספרות עשרוניות ולא ביטים.",
              "לשכוח את תנאי העצירה. בגרסה שבה מקרה הבסיס הוא `num==1` הקריאה עם `0` אינה מסתיימת (השאלה עוסקת במספר טבעי).",
              "לשכוח להוסיף את הביט הנוכחי (`num%2`) ולהחזיר רק את התוצאה של שאר המספר."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `num_of_ones(1000)`?",
         "answer": 6, "tol": 0,
         "explain": "$1000_{10}=1111101000_2$ ולכן יש 6 אחדות (ריצה אמיתית: 6)."},
        {"type": "numeric", "prompt": "מה מחזירה `num_of_ones(255)`?",
         "answer": 8, "tol": 0,
         "explain": "$255_{10}=11111111_2$, כלומר 8 אחדות (ריצה אמיתית: 8)."},
        {"type": "fillblank", "prompt": "השלימו את שורת ההחזרה.", "code": True,
         "lines": f3, "blankIndex": j3,
         "options": opts("return num ? num%2 + num_of_ones(num/2) : 0;", "return num ? num%2 + num_of_ones(num/10) : 0;",
                         "return num ? num/2 + num_of_ones(num%2) : 0;", "return num ? 1 + num_of_ones(num/2) : 0;"),
         "correctId": "a",
         "explain": "מוסיפים את הביט האחרון `num%2` ועוברים לשאר המספר `num/2`; כשמגיעים ל-`0` מחזירים `0`."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה (הגרסה הראשונה).", "code": True, "lines": S3,
         "explain": "כותרת, הערת התחום, שורת ההחזרה, וסגירה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True,
         "lines": b3, "bugIndex": i3,
         "explain": "חילוק ב-`10` מוריד ספרה עשרונית ולא ביט: `num_of_ones(6)` מחזירה `0` במקום `2` (ריצה אמיתית)."},
    ],
    stepsSource="ai-draft")

add(4,
    rubric=rub(("בחירת אינדקס זוגי (`mid = mid - mid%2`) כדי שהזוג `(mid, mid+1)` יהיה שלם", 7),
               ("בדיקת שני איברי הזוג `a[mid]` ו-`a[mid+1]` והחזרה כשנמצא `key`", 6),
               ("אם `key < a[mid]` ממשיכים שמאלה: `high = mid - 1`", 5),
               ("אחרת ממשיכים ימינה: `low = mid + 2`, מעבר לזוג שנבדק", 5),
               ("זמן ריצה $O(\\log size)$ כי כל איטרציה חוצה את התחום", 3)),
    rubricSource="ai-draft",
    pitfalls=["חיפוש בינארי רגיל על המערך: הזוגות ההפוכים שוברים את הסדר ועלולים לגרום לפספוס איבר.",
              "`low = mid + 1` במקום `mid + 2`, או שכחת הקטנת `mid` לאינדקס זוגי, ואז בודקים זוג חצוי.",
              "מיון המערך מחדש לפני החיפוש: $O(n \\log n)$ ולא $O(\\log n)$, ושינוי מיותר של המערך."],
    steps=[
        {"type": "numeric", "prompt": "מחפשים את `90` במערך `{1, 2, 7, 3, 11, 15, 90, 23, 1000, 722}` (גודל 10). מהו הערך של `low` אחרי האיטרציה הראשונה?",
         "answer": 6, "tol": 0,
         "explain": "`mid=(0+9)/2=4`, זוגי, ו-`a[4]=11`. `90>11` ולכן `low = mid + 2 = 6` (ריצה אמיתית)."},
        {"type": "fillblank", "prompt": "השלימו את השורה החסרה בפונקציה.", "code": True,
         "lines": f4, "blankIndex": j4,
         "options": opts("mid = mid - (mid % 2); // mid is even index", "mid = mid + (mid % 2); // mid is even index",
                         "mid = mid / 2; // mid is even index", "mid = mid - 1; // mid is even index"), "correctId": "a",
         "explain": "מקטינים את `mid` לאינדקס הזוגי הקרוב, כך ש-`a[mid]` ו-`a[mid+1]` הם זוג שלם."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `bin_search_mixed`.", "code": True, "lines": S4,
         "explain": "אתחול גבולות, לולאה, חישוב `mid` זוגי, בדיקת הזוג, והתאמת הגבולות; בסוף `-1`."},
        {"type": "findbug", "prompt": "שורה אחת שונתה והחיפוש הולך לכיוון הלא נכון. מצאו אותה.", "code": True,
         "lines": b4, "bugIndex": i4,
         "explain": "עם `key > a[mid]` מצמצמים שמאלה כשהמפתח גדול: החיפוש של `90` במערך הדוגמה מחזיר `-1` (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה כפונקציה של `size`? (למשל `O(n)`)",
         "accept": ["O(log n)", "O(logn)", "O(log size)", "O(logsize)"], "normalize": "complexity",
         "explain": "כל איטרציה חוצה את התחום לחצי, לכן $O(\\log size)$."},
    ],
    stepsSource="ai-draft")

exam = {
    "examCode": "24A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד א (14.03.2024)",
    "year": 2024,
    "examDate": "14.03.2024",
    "sourceFile": "24A-A exam pp.1-13",
    "solutionFile": "24A-A official solution pp.1-5",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
