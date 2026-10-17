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
