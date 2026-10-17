# -*- coding: utf-8 -*-
"""Generator for tools/raw/20A-A.json -- intro-cs, semester A 2020, moed A (11.02.2020).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_20A-A.py

Source: exam pp.1-14 (fill-in-the-box form; pp.9-13 are scratch pages, p.14 = allowed-functions list) and
official solution pp.1-14 (answers typed/handwritten into the boxes: Q1 p.2, Q2 p.3, Q3 p.4+6, Q4 p.5+6, Q5 pp.7-8).
5 questions (15/20/20/25/25), cap 105, 100 maximum. Per-part points are not printed, so parts carry no `points`.

Transcription notes
- Q1 (15): parts א, ב (boxes 4.0 and 2.0) and ג (define in general and justify; handwritten derivation).
- Q3 (20): part א = fill-in-the-blanks in partition_B, part ב = running time with a short justification.
- Q4 (25): part א = write the function (the official box shows two accepted solutions, FindDouble and
  findDoubleNum), part ב = justify correctness (the justification is written against the FindDouble code).
  The solution file highlights "the array holds at least two elements" in part א; it is not in the exam text
  and is recorded in the solution.
- Q5 (25): part א = TestCount, part ב = Sudoku. The exam's TestCount skeleton ends with `return 0;` but the
  official solution page prints `return 1;` there (the printed skeleton cannot work with `return 0;` at the end);
  the official function is transcribed as printed in the solution. The exam's own example matrix holds 12, 17
  and 11, outside the 0..9 range that the solution page states as an assumption for Sudoku (highlighted line
  "all matrix elements are between 0 and 9"); the key is correct under that assumption. The example's
  non-window cells differ between exam (1 12 8 11 / 17 ...) and solution file (1 2 8 1 / 1 ...), the 3x3 window
  1 2 3 / 8 7 6 / 4 5 9 is the same.

Compile-and-run (clang, harnesses in tools/verify/20A-A/, -Wall -Wextra):
- Q1 fun_rec: n=5 -> 4.0, n=4 -> 2.0 (match the boxes); 10000 random arrays equal the arithmetic mean. OK.
- Q2 CalGimatria: "exam" -> 646. OK.
- Q3 partition_B: example gives B = 5 8 10 7 -2 5 11 12 (exactly the printed result); 200000 random sorted pairs:
  B stays a multiset and the front block is the multiset intersection with A. OK.
- Q4 FindDouble and findDoubleNum: example -> 3 for both; all 594 valid arrays (start -4..4, n 2..12, every
  duplicate position) correct for both. (FindDouble has no return after the loop; never reached on valid input.)
- Q5 TestCount/Sudoku (R=6, C=5): 300000 random matrices (a third with a planted window, half of those broken)
  vs an independent reference: 0 mismatches. OK.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "20A-A.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "official-pdf", "official": True, "confidence": "high"}
    q.update(kw)
    return q


def code_block(src):
    return "```c\n" + src.strip("\n") + "\n```"


C1 = r"""double fun_rec(double *a, int n)
{
        if (n == 1) return a[0];

        return a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n;
}"""

SOL2 = r"""int CalGimatria ( char * str , int * gematria )
{

    if (*str == '\0')
    {
        return 0;
    }
    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);
}"""

C3 = r"""void partition_B(int* A, int n, int* B, int m)
{
        int i=0, k = 0, last = -1;

        while (______________________________)
        {
                if (B[ i ] == A[ k ])
                {
                        ______________________________

                        ______________________________
                }
                else
                        if (B[ i ] > A[ k ])

                                ____________________________
                        else

                                ____________________________
        }
}"""

SOL3A = r"""void partition_B(int* A, int n, int* B, int m)
{
    int i=0, k = 0, last = -1;

    while (i < m && k < n)
    {
        if (B[ i ] == A[ k ])
        {
            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;
            k ++ ;
        }
        else
            if (B[ i ] > A[ k ])
                k++;
            else
                i++ ;
    }
}"""

SOL4A1 = r"""int FindDouble(int* a ,  int n)
{
    int low = 0, high = n - 1, mid;
    while (low < high)
    {
        mid = (high-low)/2+low;
        if (a[mid] == a[mid + 1])
            return a[mid];

        if(a[mid] - a[low] == mid - low)

            low = mid + 1;
        else
            high = mid;
    }
}"""

SOL4A2 = r"""int findDoubleNum(int *a, int n)
{
    int low = 0, high = n - 1, mid;
    /*if (n == 2)
        return a[0];*/

    while (low <= high)
    {
        mid = (high - low) / 2 + low;
        if (a[mid] == a[0]+mid)
            low = mid + 1;
        else
            high = mid-1;
    }
    return a[mid];
}"""

C5 = r"""#define R 6
#define C 5

void initializeCountArray(int *count)
{
        int i;
        for (i = 0; i < 10; i++) count[i] = 0;
}"""

Q5A = r"""int TestCount(int *count)
{
        int i;
        for (i = 1; i < 10; i++)

                if (_____________________)

                        ______________________;
        return 0;
}"""

SOL5A = r"""int TestCount(int *count)
{
        int i;
        for (i = 1; i < 10; i++)
                if (count[i] != 1)
                        return 0;
        return 1;
}"""

Q5B = r"""int Sudoku(int mat[______][______])
{
        int count[10] = { 0 };
        int rows,cols,i,j;

        for(rows=0; rows<_______; rows++)
        {
                for (cols = 0; cols<________; cols++)
                {
                        ____________________________

                        for (i = rows; i <= __________; i++)
                        {
                                for (j = cols; j <= _________; j++)
                                {
                                        count[_______________________] ++;
                                }
                        }
                        if (__________________________________)

                                ____________________;
                }
        }
        return _________________;
}"""

SOL5B = r"""int Sudoku(int mat[R][C])    // or: int Sudoku(int mat[][C])
{
        int count[10] = { 0 };
        int rows,cols,i,j;

        for(rows=0; rows<R-2; rows++)
        {
                for (cols = 0; cols<C-2; cols++)
                {
                        initializeCountArray (count);
                        for (i = rows; i <= rows + 2; i++)
                        {
                                for (j = cols; j <= cols + 2; j++)
                                {
                                        count[ mat[i][j] ] ++;
                                }
                        }
                        if (TestCount(count))
                                return 1;
                }
        }
        return 0;
}"""

questions = [
    Q(1, "א", "computation", "recursion",
      "מה תחזיר הפונקציה עבור המערך `a = {-3, 6, 7, -2, 12}` ו-`n = 5`?",
      "**פתרון רשמי** (20A-A עמ' 2): `4.0`.",
      contextId="c1"),

    Q(1, "ב", "computation", "recursion",
      "מה תחזיר הפונקציה עבור אותו מערך ו-`n = 4`?",
      "**פתרון רשמי** (20A-A עמ' 2): `2.0`.",
      contextId="c1"),

    Q(1, "ג", "computation", "recursion",
      "מה מחשבת הפונקציה `fun_rec` עבור מערך של מספרים ממשיים שאורכו $n$? תנו הגדרה כללית ונמקו את תשובתכם.",
      "**פתרון רשמי** (20A-A עמ' 2): הפונקציה מחשבת **ממוצע** של $n$ איברים במערך `a`.\n"
      "**נימוק:** על פי נוסחת נסיגה, מחלקים את האיבר הנוכחי בגודל המערך ומוסיפים את ממוצע שאר האיברים עד "
      "האיבר הנוכחי.\n"
      "בהנחה שהפונקציה `fun_rec(a, n-1)` מחזירה ממוצע של $n-1$ האיברים הראשונים נקבל:\n"
      r"$$\text{fun\_rec}(a,n)=\frac{a[n-1]}{n}+\frac{a[0]+\cdots+a[n-2]}{n-1}\cdot\frac{n-1}{n}"
      r"=\frac{a[0]+a[1]+\cdots+a[n-2]+a[n-1]}{n}$$",
      contextId="c1"),

    Q(2, None, "code", "recursion",
      "נגדיר גימטרייה לאותיות לועזיות באופן הבא:\n"
      "`a=1, b=2,..., i=9, j=10, k=20,..., r=90, s=100, t=200,..., z=800`\n"
      "נשמור את הערכים במערך גימטרייה `int gematria[26]`, כך שהגימטרייה של האות `a` נשמרה ב-`gematria[0]`, "
      "הגימטרייה של האות `b` נשמרה ב-`gematria[1]` וכו'.\n"
      "כתבו פונקציה **רקורסיבית** יעילה שמקבלת שני פרמטרים - מחרוזת של אותיות לועזיות קטנות והמערך "
      "`gematria` ומחזירה את הגימטרייה של המחרוזת, ששווה לסכום הגימטריות של כל האותיות במחרוזת.\n"
      "לדוגמא:\n"
      "הגימטרייה של המחרוזת \"exam\" היא `5+600+1+40=646`",
      "**פתרון רשמי** (20A-A עמ' 3):\n" + code_block(SOL2)),

    Q(3, "א", "code", "sorting_merge",
      "נתונים שני מערכים **ממוינים**: מערך $A$ בגודל $n$, ומערך $B$ בגודל $m$.\n"
      "השלימו את הפונקציה שמקבלת את שני המערכים האלה וגודלם ומסדרת מחדש את איברי המערך $B$ כך שבתחילת "
      "המערך $B$ יופיעו האיברים **המשותפים** עם $A$, ובסוף המערך יופיעו האיברים שלא שייכים ל-$A$. הסדר שבו "
      "מופיעים האיברים **בתוך** שני החלקים של $B$ לא חשוב.\n"
      "אפשר להיעזר בפונקציה `swap`.\n"
      "לדוגמא:\n"
      "עבור `A={ -1, 0, 5, 6, 8, 8, 10 }`, `B={-2,5,5,7,8,10,11,12}`\n"
      "הפונקציה תסדר את המערך $B$ מחדש: `B={5,8,10,7,-2,5,11,12}`",
      "**פתרון רשמי** (20A-A עמ' 4, ההשלמות מוקלדות בתיבות):\n"
      "תנאי הלולאה: `i < m && k < n`\n"
      "בהתאמה: `swap (B + (++last) , B + (i ++ ));` (כלומר `last ++; swap (&B[last], &B[i]); i++;`) ואחריו `k ++ ;`\n"
      "כש-`B[i] > A[k]`: `k++;`, אחרת: `i++ ;`\n" + code_block(SOL3A),
      contextId="c3"),

    Q(3, "ב", "computation", "complexity",
      "מה סדר גודל של זמן ריצת הפונקציה כתלות ב-$m$ ו-$n$? תנו **נימוק** קצר.",
      "**פתרון רשמי** (20A-A עמ' 4): הפונקציה רצה בסדר גודל של $m+n$.\n"
      "הפונקציה עוברת פעם אחת על כל אחד מהמערכים, ומבצעת `swap` עד $n$ פעמים.",
      contextId="c3"),

    Q(4, "א", "code", "binary_search",
      "נתון מערך **ממוין** בסדר עולה של מספרים שלמים. ידוע שכל איבר במערך **גדול ב-1** מהאיבר שלפניו, למעט "
      "איבר אחד ששווה לקודמו.\n"
      "כתבו פונקציה **יעילה** שמקבלת את המערך וגודלו ומחזירה את הערך של האיבר שמופיע פעמיים במערך.\n"
      "לדוגמא:\n"
      "עבור המערך `a = {-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9}` הפונקציה תחזיר `3`.\n"
      "על הפונקציה לרוץ בסדר גודל של $\\log n$.",
      "**פתרון רשמי** (20A-A עמ' 5, שני פתרונות שונים בתיבה; ההנחה המסומנת בפתרון: המערך מכיל לפחות שני איברים):\n"
      "פתרון ראשון:\n" + code_block(SOL4A1) + "\n"
      "פתרון שני:\n" + code_block(SOL4A2)),

    Q(4, "ב", "proof", "binary_search",
      "תנו **נימוק** קצר לנכונות הפונקציה.",
      "**פתרון רשמי** (20A-A עמ' 6, נימוק לפתרון הראשון `FindDouble`): מאחר וכל איבר במערך **גדול ב-1** "
      "מהאיבר הקודם, ההפרש בין האינדקסים חייב להיות שווה להפרש בין האיברים.\n"
      "לכן על ידי בדיקת התנאי `if(a[mid] - a[low] == mid - low)` ניתן לדעת האם הערך הכפול במערך הוא בחלק "
      "הימני של `mid` או בחלק השמאלי.\n"
      "במידה והתשובה היא כן - הקטע `(low,mid)` אינו מכיל את האיבר הכפול שאנחנו מחפשים, ונמשיך חיפוש בינארי "
      "בחלק הימני `(mid+1,high)`.\n"
      "במידה ולא - נתמקד בחיפוש בינארי בקטע `(low,mid)` של המערך."),

    Q(5, "א", "code", "matrices",
      "**השלימו** את הפונקציה `Sudoku` אשר מקבלת מטריצה $A$ בגודל $R\\times C$ ובודקת האם קיימת בתוך $A$ "
      "תת-מטריצה בגודל 3x3 המקיימת את חוקי משחק הסודוקו. משחק הסודוקו דורש שתת-מטריצה בגודל 3x3 תכיל את כל "
      "המספרים בין 1 ל-9, ללא חזרות.\n"
      "לדוגמא:\n"
      "```\n"
      "1  12  8  11\n"
      "17  1  2   3\n"
      "2   8  7   6\n"
      "4   4  5   9\n"
      "```\n"
      "(תת-המטריצה המקיימת את החוקים מסומנת באפור בדוגמה המודפסת: `1 2 3 / 8 7 6 / 4 5 9`, שורות 1-3 ועמודות 1-3.)\n"
      "אם מטריצה $A$ מכילה תת-מטריצה המקיימת את חוקי הסודוקו על הפונקציה להחזיר `1`, אחרת - הפונקציה תחזיר `0`.\n"
      "הפונקציה `Sudoku` משתמשת במערך מונים `count` ובשתי פונקציות עזר: פונקציה `initializeCountArray` "
      "מאפסת את המערך `count`, והפונקציה `TestCount` בודקת איברים במערך `count` כדי לדעת האם תת-המטריצה "
      "מכילה את כל המספרים בין 1 ל-9, ללא חזרות.\n"
      "א. השלימו את הפונקציה `TestCount`:\n" + code_block(Q5A),
      "**פתרון רשמי** (20A-A עמ' 7): התנאי `count[i] != 1`, ההוראה `return 0`, והפונקציה מסתיימת ב-`return 1;` "
      "(בעמוד הפתרון).\n" + code_block(SOL5A),
      contextId="c5"),

    Q(5, "ב", "code", "matrices",
      "השלימו את הפונקציה `Sudoku` המשתמשת בשתי פונקציות העזר המוגדרות למעלה:\n" + code_block(Q5B),
      "**פתרון רשמי** (20A-A עמ' 8): הפתרון מניח שכל האיברים בתוך המטריצה הם בטווח בין 0 ל-9.\n"
      "הכותרת יכולה להיות `int Sudoku(int mat[R][C])` או `int Sudoku(int mat[][C])`.\n" + code_block(SOL5B),
      contextId="c5"),
]

exam = {
    "examCode": "20A-A",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תש\"פ, מועד א (11.02.2020)",
    "year": 2020,
    "examDate": "11.02.2020",
    "sourceFile": "20A-A exam pp.1-14",
    "solutionFile": "20A-A official solution pp.1-14",
    "contexts": {
        "c1": {"kind": "code", "title": "שאלה 1: הפונקציה הנתונה (מקבלת מערך וגודלו)", "code": C1},
        "c3": {"kind": "code", "title": "שאלה 3: השלמת הפונקציה partition_B", "code": C3},
        "c5": {"kind": "code", "title": "שאלה 5: הגדרות ופונקציית העזר initializeCountArray", "code": C5},
    },
    "questions": questions,
}

# the part key is optional: drop None parts
for q in questions:
    if q.get("part") is None:
        q.pop("part", None)

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
