# -*- coding: utf-8 -*-
"""Generator for tools/raw/23A-A.json -- intro-cs, 2023 semester A, moed A (26.01.2023).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_23A-A.py

Source: sitting 23A-A solutions booklet, pp.1-6 (p.1 cover, pp.2-6 questions with the official solutions printed
in the answer boxes). 4 questions (26/26/27/26), cap 105, no sub-parts.

Transcription notes
- Q1 uses an unspecified helper swap(int*, int*); Q3 uses an unspecified helper binary_search(int*, int, int)
  returning the index of num. Neither is defined by the exam; the harness defines them in the obvious way.
- Q4: the example valley is a figure (images/exams/23A-A-c4.png); no cloud position or expected answer is printed.
- Q1/Q2/Q3/Q4 official solutions give several versions each; all transcribed in the order printed.

Compile-and-run (clang -Wall -Wextra, harness tools/verify/23A-A/h23a.c):
- Q1 sortpairs x3: 20000 random valid arrays, result always n adjacent pairs of equal sum with the multiset kept: 0 mismatches.
  Example 1,2,3,7,8,9 -> 1 9 3 7 8 2.
- Q2 squeeze x2: "dbcabafacbcbdd" -> dca both; 20000 random strings, both versions agree.
- Q3 distsort x2: the three printed examples match (5 7 2 1 10 / 7 5 10 2 1 / 2 1 3); efficient vs regular agree on 20000 arrays.
- Q4 waterfill x2: the two versions agree on the printed valley for cloud heights 5/30/64/100/150
  (0, 18, 476, 908, 1508).
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23A-A.json"


def Q(num, kind, topic, question, solution, **kw):
    q = {"num": num, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_lines(src):
    return "```c\n" + src.strip("\n").expandtabs(4) + "\n```"


SOL1A = r"""void sortpairs(int* a, int size)
{
    int i;
    for (i = 1; i < size/2 ; i += 2)
        swap(a + i, a + size - i);
}"""

SOL1B = r"""void sortpairs(int* a, int size)
{
    int low = 1, high = size - 1;
    while (low < high-1 ) {
        swap(a + low, a + high);
        low += 2;
        high -= 2;
    }
}"""

SOL1C = r"""void sortpairs_2(int* a, int size)
{
    int i,sum=a[0]+a[size-1];
    for (i = 0; i < size-1; i += 2) {
        a[i + 1] = sum-a[i];
    }
}"""

SOL2A = r"""void squeeze(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            str[pos++] = str[i];
            count[str[i] - 'a'] = 0;
        }
    }
    str[pos] = '\0';
}"""

SOL2B = r"""void squeeze(char* str)
{
    int count[26] = { 0 };
    char* temp = str;
    while (*temp)
        count[*temp++ - 'a']++;
    temp = str;
    while (*temp)
        if (count[*temp++ - 'a'] == 3)
        {
            *str = *(temp - 1);
            count[*str++ - 'a'] = 0;
        }
    *str = '\0';
}"""

SOL3A = r"""int* distsort_2(int* a, int n, int num)
{
    int idx_num = binary_search(a, n, num);
    int idx_smaller = idx_num - 1, idx_larger = idx_num + 1, new_pos = 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    new_sort[0] = num;
    while (0 <= idx_smaller && idx_larger < n) {
        if (a[idx_larger] - num < num - a[idx_smaller]) {
            new_sort[new_pos++] = a[idx_larger++];
        }
        else
            new_sort[new_pos++] = a[idx_smaller--];
    }
    while (0 <= idx_smaller) {
        new_sort[new_pos++] = a[idx_smaller--];
    }
    while (idx_larger < n) {
        new_sort[new_pos++] = a[idx_larger++];
    }
    return new_sort;
}"""

SOL3B = r"""int* distsort(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
            new_sort[new_position--] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}"""

SOL4A = r"""int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255; //Mark not to return
    return fill +
        waterfill(valley, cloudR - 1, cloudC, cloudH) +
        waterfill(valley, cloudR + 1, cloudC, cloudH) +
        waterfill(valley, cloudR, cloudC - 1, cloudH) +
        waterfill(valley, cloudR, cloudC + 1, cloudH);
}"""

SOL4B = r"""int waterfill2(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    valley[cloudR][cloudC] += 255; //Mark not to return

    return 255 + cloudH - valley[cloudR][cloudC] +
        waterfill2(valley, cloudR - 1, cloudC, cloudH) +
        waterfill2(valley, cloudR + 1, cloudC, cloudH) +
        waterfill2(valley, cloudR, cloudC - 1, cloudH) +
        waterfill2(valley, cloudR, cloudC + 1, cloudH);
}"""

questions = [
    Q(1, "code", "arrays",
      "נתון מערך **ממוין** בסדר עולה בגודל `2n` של מספרים שלמים. ידוע שבמערך ישנם `n` זוגות של איברים כך שסכום האיברים "
      "בכל הזוגות שווה זה לזה.\n"
      "למשל, בהינתן `n=3`, מערך לדוגמא שיעמוד בתנאי השאלה הוא המערך `1,2,3,7,8,9` שמכיל שלושה זוגות שסכום כל זוג שווה "
      "ל-10: `(1,9),(2,8),(3,7)`.\n"
      "יש לכתוב את הפונקציה `void sortpairs(int* a, int size)` שמסדרת איברים במערך כך שהמערך יכיל לזוגות של מספרים עם "
      "אותו סכום זה אחר זה. אין חשיבות לסדר של הזוגות או האברים בזוגות.\n"
      "למשל, הפונקציה `sortpairs` עבור המערך בדוגמא לעיל, יכולה לשנות את המערך למערך הבא: `1,9,2,8,3,7` או לחלופין "
      "למערך `2,8,7,3,1,9` או למערך `3,7,1,9,2,8` וכו.\n"
      "אין להשתמש במערך עזר.\n"
      "על הפונקציה לרוץ בסדר גודל של **n**.\n"
      "כתבו את הקוד של הפונקציה **ונמקו בקצרה** את נכונות הפתרון.",
      "**פתרון רשמי** (23A-A עמ' 2). הנימוק:\n"
      "ידוע שהמערך בגודל זוגי ממוין ובו כל האיברים אפשר לחלק לזוגות כך שסכום האיברים בכל הזוגות שווה זה לזה. "
      "מזה נובע שהזוגות האלה תופסים מקומות 0 ו-`size-1`, 1 ו-`size-2`, וכללי: כל זוג תופס מקומות `(i, size-1-i)`. "
      "לכן אם נחליף בין מקום 1 ו-`size-1` נקבל כבר **שני** זוגות מסודרים בקצוות של המערך: בשני מקומות ראשונים ובשני מקומות "
      "אחרונים. לכן אחרי ההחלפה הראשונה נשאר לסדר מערך ממקום 2 עד `size-3`. כך על ידי `size/4` החלפות נסדר כל המערך.\n"
      "**פתרון:**\n" + code_lines(SOL1A) + "\n"
      "**אותו רעיון בצורה אחרת:**\n" + code_lines(SOL1B) + "\n"
      "**רעיון אחר:**\n" + code_lines(SOL1C),
      points=26),

    Q(2, "code", "strings",
      "כתבו את הפונקציה `void squeeze (char *str)` המקבלת כפרמטר מחרוזת של אותיות קטנות באנגלית ומשנה את המחרוזת כך "
      "שתכיל את כל התווים המופיעים בדיוק **שלוש פעמים** במחרוזת המקורית.\n"
      "על המחרוזת שמתקבלת להכיל מופע אחד בלבד של התווים הללו (המופיעים בדיוק שלוש פעמים) ועל סדר התווים במחרוזת שמתקבלת "
      "להיות לפי סדר המופע הראשון של כל תו במחרוזת המקורית.\n"
      "מותר להשתמש במערך עזר אחד לכל היותר.\n"
      "על זמן הריצה של הפונקציה להיות בסדר גודל של **n**, כאשר n מייצג את מספר האותיות במחרוזת המקורית.\n"
      "לדוגמא:\n"
      "המחרוזת `dbcabafacbcbdd` תשתנה על ידי הפונקציה למחרוזת `dca`\n"
      "שימו לב שהפונקציה מכניסה תו סוף מחרוזת (`'\\0'`) מימין לסדרת התווים `dca` ואין חשיבות לתווים שנמצאים מימין לתו סוף המחרוזת.",
      "**פתרון רשמי** (23A-A עמ' 3), עם אינדקסים:\n" + code_lines(SOL2A) + "\n"
      "**פתרון עם מצביעים:**\n" + code_lines(SOL2B),
      points=26),

    Q(3, "code", "sorting_merge",
      "נתון מערך **ממוין** בסדר עולה של מספרים שלמים, גודלו ומספר הנמצא במערך.\n"
      "יש לכתוב את הפונקציה `int* distsort(int* a, int n, int num)` המחזירה מערך ממוין **חדש** בו המספרים ממוינים לפי "
      "המרחק שלהם מהמספר `num` הנתון במערך.\n"
      "אם ישנם שני מספרים במרחק זהה מהמספר הנתון, הקטן מבניהם יופיע ראשון.\n"
      "מרחק בין שני מספרים x,y מוגדר כערך מוחלט של ההפרש ביניהם: $|x-y|$.\n"
      "דוגמאות:\n"
      "עבור המערך הממוין `1,2,5,7,10` והערך 5 התוצאה תהיה `5,7,2,1,10`.\n"
      "עבור המערך הממוין `1,2,5,7,10` והערך 7 התוצאה תהיה `7,5,10,2,1`.\n"
      "עבור המערך `1,2,3` והערך 2 התוצאה תהיה `2,1,3`.\n"
      "אין להשתמש במערך עזר נוסף מלבד המערך החדש שהפונקציה יוצרת ומחזירה.\n"
      "על זמן הריצה של הפונקציה להיות בסדר גודל של **n**.",
      "**פתרון רשמי** (23A-A עמ' 4-5), פתרון רגיל (הפונקציה `binary_search` היא פונקציית עזר שמחזירה את האינדקס של `num` במערך):\n"
      + code_lines(SOL3A) + "\n"
      "**פתרון יותר יעיל ואלגנטי** (אין צורך בחיפוש מקום של `num` במערך, מתחיל למלא מערך חדש מהסוף):\n" + code_lines(SOL3B),
      points=27),

    Q(4, "code", "recursion",
      "העמק הקסום מורכב מאזורים רבועים בגבהים שונים, הגבהים הם מספרים בטווח 1-100 והעמק כולו מוקף בחומה בגובה 255 מטרים. "
      "העמק הקסום מיוצג על ידי מטריצה של גבהים וכל אזור מיוצג כתא במטריצה.\n"
      "לדוגמא: (הטבלה בתמונה)\n"
      "לעיתים מגיע ענן ומתמקם בנקודה מסוימת בעמק מעל אחד האזורים.\n"
      "יום אחד, הגיע הענן לנקודה מסוימת בעמק (מעל אזור מסוים) והחיל להוריד גשם מגובה נתון `h`, הגשם מציף את כל האזורים "
      "שנמוכים מהענן ושאליהם המים יכולים לזרום עד הגובה של הענן. המים יכולים לזרום מאזור לאזור אחר רק אם יש להם צלע משותפת "
      "(לא באלכסון) וגובהו של האזור האחר נמוך מגובהו של הענן.\n"
      "השאלה היא, כמה מים ימטיר הענן עד להצפה מלאה של החלק הניתן להצפה.\n"
      "כתבו פונקציה **רקורסיבית** `int waterfill(int Valley[R][C], int CloudR, int CloudC, int CloudH)` המחשבת את כמות המים "
      "שיתקבלו עד הצפה מלאה.\n"
      "`R,C` מוגדרים על ידי `#define`.\n"
      "מספר הנחיות:\n"
      "1. העננים אף פעם לא מגיעים לקצות העמק.\n"
      "2. אם ענן נמוך מגיע לאזור שלא נמוך ממנו התשובה תהיה 0.\n"
      "3. העננים מגיעים בגבהים שלמים בין 1-150 בלבד.",
      "**פתרון רשמי** (23A-A עמ' 6):\n" + code_lines(SOL4A) + "\n"
      "**פתרון מתוחכם ללא משתנה עזר:**\n" + code_lines(SOL4B),
      points=26, contextId="c4"),
]

exam = {
    "examCode": "23A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ג, מועד א (26.01.2023)",
    "year": 2023,
    "examDate": "26.01.2023",
    "sourceFile": "23A-A solutions booklet pp.1-6",
    "solutionFile": "23A-A official solutions in the answer boxes, pp.2-6",
    "contexts": {
        "c4": {"kind": "image", "title": "שאלה 4: דוגמה לעמק", "image": "images/exams/23A-A-c4.png",
               "caption": "מטריצת גבהים של עמק (255 = החומה)"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
