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
