# -*- coding: utf-8 -*-
"""Generator for tools/raw/22A-A.json -- intro-cs, 2022 semester A, moed A.
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_22A-A.py

Source: sitting 22A-A, pp.1-4 (one question per page, official solution code printed under each question).
4 questions (25/25/25/30). No sub-parts. Rubric and steps are added later by the step-author.

Transcription notes
- Q1: the official code keeps a commented-out first attempt (Hebrew comment "second version"); transcribed verbatim.
- Q3: the official key lists two versions. Version 1 (indexes 'a') is correct for lowercase input. Version 2
  indexes count[s[i]-'A'], which for lowercase letters is index 32+ in int[26] (out of bounds, undefined
  behaviour). Flagged inside the solution text; not corrected.
- Q4: the official key lists two functions. question4_version2 (smallest element >= k) matches the question and its
  example. question4_version1 returns the LARGEST element <= x (0 on the printed example, not 2), so it does not
  answer this question. Flagged inside the solution text; not corrected; confidence med.

Compile-and-run (clang -Wall, harness tools/verify/22A-A/h22a.c):
- Q1 findBiggest on the printed example -> 5 3/4. OK.
- Q2 incr_subarray on the 3 printed examples + size-1 array -> 3, 1, 1, 1. OK.
- Q3 version 1 "blablabh" -> blah. Version 2 happens to print blah but reads count[32..], out of bounds.
- Q4 version 2 -> 2 on the printed example; version 1 -> 0.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22A-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_lines(src):
    return "```c\n" + src.strip("\n").expandtabs(4) + "\n```"


SOL1 = r"""Fraction findBiggest(Fraction *pSArray, int size)
{
	int i;
	Fraction max_result = pSArray[0];

	for (i = 1; i < size; i++)
	{
		if (pSArray[i].num > max_result.num)
			max_result = pSArray[i];
		else if (pSArray[i].num == max_result.num)
		{
			//if (((double)pSArray[i].numerator / pSArray[i].mechane) >
			//((double)res.numerator / res.mechane)) - גרסה שנייה
	if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)
				max_result = pSArray[i];
		}
	}

	return max_result;
}"""

SOL2 = r"""int incr_subarray(int * a, int n)
{
	if (n == 1)
		return 1;
	if (a[0] < a[1])
		return 1 + incr_subarray(a + 1, n - 1);
	else
		return 1;
}"""

SOL3A = r"""void removeDuplicates(char *str) {

	char *last=str;

	int count[26] = { 0 };

	while (*str)
	{
		if (count[(*str) - 'a'] == 0)
		{
			count[(*str) - 'a']=1;
			*last = *str;
			last++;
		}
		str++;
	}

	*last = '\0';
}"""

SOL3B = r"""void removeDuplicates(char *s) {

	int i, newLast;

	int count[26] = { 0 };

	for (i = 0, newLast = 0; s[i]; i++)
		if (count[s[i] - 'A']++ == 0)
			s[newLast++] = s[i];

	s[newLast] = '\0';
}"""

SOL4A = r"""int question4_version1(int arr[], int n, double x) {
	int low = 0, high = n - 1, mid, max=arr[0];
	while (low <= high) {
		mid = (low + high) / 2;
		if (arr[mid] <= x) {
			max = arr[mid];
			low = mid + 1;
		}
		else
			high = mid - 1;
	}
	return max;
}"""

SOL4B = r"""int question4_version2(int a[], int n, double k) {
	int low = 0, high = n - 1, mid, min = a[n-1];
	while (low <= high) {
		mid = (low + high) / 2;
		if (a[mid] >= k) {
			min = a[mid];
			high = mid - 1;

		}
		else
			low = mid + 1;
	}
	return min;
}"""

TYPEDEF = r"""typedef struct {
	int num, numerator, denominator;
}Fraction;"""

questions = [
    Q(1, "code", "structs",
      "נגדיר **מבנה** המכיל \"מספר מעורב\" כלומר מספר שלם שאחריו שבר (שערכו קטן מ-1).\n"
      "המבנה יהיה בעל שלושה שדות: מספר (`num`), מונה (`numerator`), ומכנה (`denominator`).\n"
      + code_lines(TYPEDEF) + "\n"
      "כך לדוגמא המספר $3\\frac{2}{3}$ ירשם 3 בשדה המספר, 2 בשדה המונה ו-3 בשדה המכנה.\n"
      "המספר $\\frac{3}{5}$ ירשם 0 בשדה המספר, 3 בשדה המונה ו-5 בשדה המכנה.\n"
      "עליכם לכתוב את הפונקציה המקבלת מערך של מספרים מעורבים (מבנים) **לא שליליים** וגודלו.\n"
      "הפונקציה תחזיר מספר מעורב (מבנה) שהוא המספר המעורב **הגדול ביותר** במערך.\n"
      "לדוגמא אם המערך מכיל את האיברים הבאים $[2\\frac{3}{4}, 5\\frac{3}{4}, 3\\frac{1}{5}, 2\\frac{7}{8}, 5\\frac{1}{2}]$ "
      "הפונקציה תחזיר $5\\frac{3}{4}$ כמספר מעורב (מבנה).\n"
      "חישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא גודל המערך.",
      "**פתרון רשמי** (22A-A עמ' 1):\n" + code_lines(SOL1) + "\n"
      "סורקים פעם אחת ושומרים את המקסימום עד כה. קודם משווים את החלק השלם; כשהחלקים השלמים שווים משווים את השברים "
      "בכפל צולב כדי להימנע משברים עשרוניים. סריקה אחת, כלומר $O(n)$.",
      points=25),

    Q(2, "code", "recursion",
      "כתבו פונקציה **רקורסיבית** שמקבלת מערך `a` של מספרים שלמים וגודלו `n`.\n"
      "על הפונקציה להחזיר את הגודל של תת-הסדרה רציפה **עולה ממש** ($a_i < a_{i+1}$) הכי ארוכה שמתחילה במקום הראשון במערך (מ-$a_0$).\n"
      "עבור מערך בגודל 1 על הפונקציה להחזיר 1.\n"
      "לדוגמא:\n"
      "עבור המערך `-5,-2,12,12,25,34,40` על הפונקציה להחזיר 3 (3 האיברים הראשונים הם תת-סדרה רציפה עולה ממש הכי ארוכה שמתחילה ב-`-5`).\n"
      "עבור המערך `-5,-5,12,10,25,34,40` על הפונקציה להחזיר 1 (כי `-5 = -5`).\n"
      "עבור המערך `12,10,25,34,40` על הפונקציה להחזיר 1.",
      "**פתרון רשמי** (22A-A עמ' 2):\n" + code_lines(SOL2) + "\n"
      "מקרה בסיס: מערך בגודל 1 מחזיר 1. אם `a[0] < a[1]` הרצף ממשיך ומוסיפים 1 לתשובה של שאר המערך (`a + 1`, `n - 1`); "
      "אחרת הרצף נעצר ומחזירים 1.",
      points=25),

    Q(3, "code", "strings",
      "כתבו פונקציה `void removeDuplicates (char *str)` שמקבלת מחרוזת של אותיות קטנות באנגלית בשם `str`.\n"
      "הפונקציה צריכה להשאיר במחרוזת את כל האותיות שמופיעות בה בפעם הראשונה, ולמחוק את כל האותיות שחוזרות על עצמן "
      "(להוציא אותן מהמחרוזת).\n"
      "הניחו שהקלט תקין.\n"
      "לדוגמא, הפונקציה הופכת את המחרוזת \"**bla**blab**h**\" למחרוזת \"**blah**\".\n"
      "חישוב הפונקציה צריך להתבצע **בסדר גודל של n**, כאשר n הוא אורך המחרוזת.\n"
      "הפונקציה יכולה להשתמש במערך עזר.",
      "**פתרון רשמי** (22A-A עמ' 3), גרסה ראשונה:\n" + code_lines(SOL3A) + "\n"
      "**גרסה שנייה** (כפי שמופיעה בפתרון הרשמי):\n" + code_lines(SOL3B) + "\n"
      "מערך עזר של 26 מונים מסמן אילו אותיות כבר נראו. סורקים את המחרוזת פעם אחת וכותבים לאחור רק אות שנראית לראשונה, "
      "ובסוף שמים `'\\0'`. סריקה אחת, כלומר $O(n)$.\n"
      "**הערה:** בגרסה השנייה האינדקס הוא `s[i] - 'A'` ולא `s[i] - 'a'`; עבור אותיות קטנות זה אינדקס 32 ומעלה "
      "במערך בגודל 26, כלומר גישה מחוץ לגבולות. הגרסה הראשונה תקינה.",
      points=25),

    Q(4, "code", "binary_search",
      "נתון מערך `a` - מערך **ממוין** בסדר עולה של מספרים שלמים ונתון הממוצע שלהם `k` שהוא מספר מסוג **double**.\n"
      "כתבו פונקציה **יעילה** שמקבלת את המערך הממוין `a`, גודלו `n` וממוצע `k`, ומחזירה את המספר הקטן ביותר במערך "
      "שגדול או שווה לממוצע.\n"
      "לדוגמא:\n"
      "עבור המערך `a = {-5, -2, -1, 0, 2, 4, 4, 9}` הפונקציה תחזיר **2** (הממוצע הוא 1.375)\n"
      "על הפונקציה לרוץ בסדר גודל של $\\log n$.",
      "**פתרון רשמי** (22A-A עמ' 4), שתי פונקציות כפי שהן מופיעות:\n" + code_lines(SOL4A) + "\n" + code_lines(SOL4B) + "\n"
      "`question4_version2` היא חיפוש בינארי על הערך הקטן ביותר שגדול או שווה ל-`k`: כשנמצא `a[mid] >= k` שומרים אותו וממשיכים "
      "שמאלה, אחרת ימינה. זמן ריצה $O(\\log n)$.\n"
      "**הערה:** `question4_version1` מחזירה את הערך הגדול ביותר שקטן או שווה ל-`x` (בדוגמה של השאלה היא מחזירה 0 ולא 2), "
      "ולכן אינה פותרת את השאלה הזו; `question4_version2` תואמת לשאלה ולדוגמה.",
      points=30, confidence="med"),
]

IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def lines_of(src):
    return [ln for ln in src.strip("\n").expandtabs(4).split("\n") if ln.strip() and not ln.strip().startswith("//")]


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


# ---- rubric / pitfalls / steps (ai-draft); expected values come from real clang runs of tools/verify/22A-A/steps.c.
# Steps use the first official version of Q3 (the second indexes with 'A', see the note in the solution) and
# question4_version2 of Q4 (version 1 does not answer the question). ----
CMP = "if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)"
S1 = lines_of(SOL1)
b1, i1 = swap(SOL1, "if (pSArray[i].num > max_result.num)", "if (pSArray[i].num < max_result.num)")
f1, j1 = blank(S1, CMP)
S2 = lines_of(SOL2)
b2, i2 = swap(SOL2, "if (a[0] < a[1])", "if (a[0] <= a[1])")
f2, j2 = blank(S2, "return 1 + incr_subarray(a + 1, n - 1);")
S3 = lines_of(SOL3A)
b3, i3 = swap(SOL3A, "count[(*str) - 'a']=1;", "count[(*str) - 'a']=0;")
f3, j3 = blank(S3, "if (count[(*str) - 'a'] == 0)")
S4 = lines_of(SOL4B)
f4, j4 = blank(S4, "high = mid - 1;")

add(1,
    rubric=rub(("אתחול המקסימום באיבר הראשון וסריקה אחת מהאיבר השני עד הסוף", 6),
               ("השוואת החלק השלם `num`: איבר עם חלק שלם גדול יותר הופך למקסימום", 6),
               ("כשהחלקים השלמים שווים: השוואת השברים בכפל צולב `numerator * denominator` בלי חילוק", 8),
               ("החזרת המבנה המקסימלי; סריקה אחת בלבד, כלומר $O(n)$", 5)),
    rubricSource="ai-draft",
    pitfalls=["להשוות רק את `num` ולהתעלם משברים כשהחלק השלם שווה.",
              "להשוות מונים בלבד (`numerator`) או מכפלות `numerator * denominator`: שתי ההשוואות שגויות בין מכנים שונים.",
              "לחשב שברים עשרוניים עם חילוק שלם (`numerator / denominator` נותן 0)."],
    steps=[
        {"type": "choice", "prompt": "מה מחזירה הפונקציה על המערך $[2\\frac{3}{4},5\\frac{3}{4},3\\frac{1}{5},2\\frac{7}{8},5\\frac{1}{2}]$?",
         "options": opts("`5 3/4`", "`5 1/2`", "`3 1/5`", "`2 7/8`"), "correctId": "a",
         "explain": "שני האיברים עם החלק השלם 5 מושווים בכפל צולב: $3\\cdot2>1\\cdot4$, ולכן $5\\frac{3}{4}$ (ריצה אמיתית: 5 3/4)."},
        {"type": "numeric",
         "prompt": "משווים $1\\frac{2}{3}$ (`pSArray[i]`) מול $1\\frac{1}{2}$ (המקסימום הנוכחי). מהו `pSArray[i].numerator * max_result.denominator`?",
         "answer": 4, "tol": 0,
         "explain": "$2\\cdot2=4$ מול $1\\cdot3=3$ בצד השני, ולכן $1\\frac{2}{3}$ גדול יותר (ריצה אמיתית: 1 2/3 נבחר)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי ההשוואה בין שני מספרים עם אותו חלק שלם.", "code": True,
         "lines": f1, "blankIndex": j1,
         "options": opts(CMP, "if(pSArray[i].numerator * max_result.denominator<max_result.numerator*pSArray[i].denominator)",
                         "if(pSArray[i].numerator>max_result.numerator)",
                         "if(pSArray[i].numerator * pSArray[i].denominator>max_result.numerator*max_result.denominator)"),
         "correctId": "a",
         "explain": "כפל צולב משווה שברים. `<` בוחר את הקטן יותר (שגוי ב-8830 מ-20000 זוגות אקראיים), "
                    "מונים בלבד שגוי כשהמכנים שונים (950), ומכפלת מונה כפול מכנה שגויה (1533)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `findBiggest` (בלי שורות ההערה).", "code": True, "lines": S1,
         "explain": "אתחול, לולאה, השוואת חלק שלם, ובמקרה שוויון כפל צולב."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b1, "bugIndex": i1,
         "explain": "עם `<` נבחר החלק השלם הקטן יותר: על מערך הדוגמה מוחזר $2\\frac{7}{8}$ במקום $5\\frac{3}{4}$ (ריצה אמיתית: 2 7/8)."},
    ],
    stepsSource="ai-draft")

add(2,
    rubric=rub(("מקרה בסיס: `n == 1` מחזיר `1`", 5),
               ("השוואה ממש בין שני האיברים הראשונים: `a[0] < a[1]`", 8),
               ("כשהרצף ממשיך: `1 + incr_subarray(a + 1, n - 1)`", 8),
               ("אחרת הרצף נעצר ומחזירים `1`", 4)),
    rubricSource="ai-draft",
    pitfalls=["להשתמש ב-`<=` במקום `<`: הרצף חייב להיות עולה **ממש**.",
              "לשכוח את מקרה הבסיס ולגשת ל-`a[1]` מעבר לסוף המערך.",
              "להחזיר את הקריאה הרקורסיבית בלי `1 +`, או לקרוא עם `a` במקום `a + 1`."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `incr_subarray` על `-5,-2,12,12,25,34,40` (`n = 7`)?", "answer": 3, "tol": 0,
         "explain": "`-5 < -2 < 12`, ואז `12 < 12` שקר: אורך 3 (ריצה אמיתית: 3)."},
        {"type": "numeric", "prompt": "מה מחזירה על `1,2,3,4,5,5` (`n = 6`)?", "answer": 5, "tol": 0,
         "explain": "חמש הצעדים הראשונים עולים ממש, והזוג `5,5` עוצר את הרצף (ריצה אמיתית: 5)."},
        {"type": "fillblank", "prompt": "השלימו את הענף שבו הרצף ממשיך.", "code": True, "lines": f2, "blankIndex": j2,
         "options": opts("return 1 + incr_subarray(a + 1, n - 1);", "return incr_subarray(a + 1, n - 1);",
                         "return 1 + incr_subarray(a, n - 1);", "return 1 + incr_subarray(a + 1, n);"), "correctId": "a",
         "explain": "מוסיפים 1 על האיבר הנוכחי וממשיכים מהאיבר הבא עם מערך קצר באחד."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `incr_subarray`.", "code": True, "lines": S2,
         "explain": "מקרה בסיס, בדיקת העלייה, המשך הרצף ואחרת עצירה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b2, "bugIndex": i2,
         "explain": "עם `<=` זוג שווה נחשב כעלייה: על `-5,-5,12,10,...` מוחזר 3 במקום 1 (ריצה אמיתית: 3)."},
    ],
    stepsSource="ai-draft")

add(3,
    rubric=rub(("מערך עזר של 26 מונים שמסמן אילו אותיות כבר נראו", 5),
               ("סריקה אחת של המחרוזת ובדיקה `count[...] == 0` לפני הכתיבה", 7),
               ("כתיבה לאחור עם מצביע `last` שמתקדם רק כשנשמרת אות, ועדכון המונה", 7),
               ("סגירת המחרוזת עם `'\\0'` בסוף", 4),
               ("זמן $O(n)$ וללא מערך נוסף בגודל המחרוזת", 2)),
    rubricSource="ai-draft",
    pitfalls=["חיפוש האות בכל פעם במחרוזת שנבנתה עד כה: זמן $O(n^2)$ ולא $O(n)$.",
              "לשכוח את `'\\0'` בסוף ולהשאיר זנב של אותיות ישנות.",
              "אינדקס `*str - 'A'` עבור אותיות קטנות יוצא מגבולות המערך בגודל 26."],
    steps=[
        {"type": "text", "prompt": "מה תהיה המחרוזת אחרי `removeDuplicates` על `\"aabbcab\"`?", "accept": ["abc"], "normalize": "none",
         "explain": "נשמרות ההופעות הראשונות של `a`, `b`, `c` (ריצה אמיתית: abc)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי לשמירת אות.", "code": True, "lines": f3, "blankIndex": j3,
         "options": opts("if (count[(*str) - 'a'] == 0)", "if (count[(*str) - 'a'] == 1)", "if (count[(*str) - 'a'] != 0)",
                         "if (count[(*str) - 'a'] > 1)"), "correctId": "a",
         "explain": "שומרים אות רק כשהיא טרם נראתה, כלומר המונה שלה 0."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `removeDuplicates`.", "code": True, "lines": S3,
         "explain": "מצביע כתיבה ומונים, לולאה, בדיקה, סימון וכתיבה, ובסוף `'\\0'`."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b3, "bugIndex": i3,
         "explain": "אם המונה נשאר 0 האות לא מסומנת כנראית: `\"aa\"` נשארת `\"aa\"` (ריצה אמיתית)."},
        {"type": "text", "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)", "accept": ["O(n)"], "normalize": "complexity",
         "explain": "סריקה אחת עם עבודה קבועה לכל תו: $O(n)$."},
    ],
    stepsSource="ai-draft")

add(4,
    rubric=rub(("חיפוש בינארי עם `low`, `high`, `mid` ולולאה `while (low <= high)`", 8),
               ("כש-`a[mid] >= k`: שומרים אותו כמועמד וממשיכים שמאלה (`high = mid - 1`)", 10),
               ("אחרת ממשיכים ימינה (`low = mid + 1`)", 6),
               ("אתחול `min = a[n-1]` למקרה שכל האיברים קטנים מ-`k`, והחזרת `min`", 3),
               ("זמן ריצה $O(\\log n)$", 3)),
    rubricSource="ai-draft",
    pitfalls=["לעבור על המערך בלולאה לינארית: $O(n)$ ולא $O(\\log n)$.",
              "להחזיר את הערך הגדול ביותר שקטן או שווה ל-`k` במקום הקטן ביותר שגדול או שווה ל-`k`.",
              "לא לשמור את המועמד לפני שממשיכים שמאלה ולאבד אותו."],
    steps=[
        {"type": "numeric", "prompt": "על `a = {-5,-2,-1,0,2,4,4,9}` (`n = 8`) והממוצע $k=1.375$: מהו `mid` באיטרציה הראשונה?",
         "answer": 3, "tol": 0, "explain": "`mid = (0+7)/2 = 3` ו-`a[3] = 0` (ריצה אמיתית)."},
        {"type": "choice", "prompt": "בהמשך: `a[3] = 0 < 1.375`. מה הפונקציה עושה?",
         "options": opts("`low = mid + 1`: הולכת ימינה", "`high = mid - 1`: הולכת שמאלה", "מחזירה `0`", "מעדכנת `min = a[mid]`"),
         "correctId": "a",
         "explain": "אין טעם להסתכל באיברים הקטנים מ-`k`; ממשיכים ימינה. סך הכול 3 איטרציות והתוצאה 2 (ריצה אמיתית)."},
        {"type": "fillblank", "prompt": "השלימו את הפקודה אחרי ששמרנו מועמד.", "code": True, "lines": f4, "blankIndex": j4,
         "options": opts("high = mid - 1;", "high = mid;", "low = mid + 1;", "low = mid;"), "correctId": "a",
         "explain": "המועמד נשמר ב-`min`, וכדי למצוא קטן ממנו שעדיין גדול או שווה ל-`k` מחפשים משמאלו."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `question4_version2`.", "code": True, "lines": S4,
         "explain": "אתחול, לולאה, חישוב `mid`, שני הענפים, ובסוף החזרת `min`."},
        {"type": "text", "prompt": "מהי סיבוכיות הזמן? (למשל `O(n)`)", "accept": ["O(log n)"], "normalize": "complexity",
         "explain": "כל איטרציה חוצה את התחום: $O(\\log n)$."},
    ],
    stepsSource="ai-draft")

exam = {
    "examCode": "22A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ב, מועד א (2022)",
    "year": 2022,
    "examDate": "2022",
    "sourceFile": "22A-A exam and solution pp.1-4",
    "solutionFile": "22A-A official solution code under each question, pp.1-4",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
