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

IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def lines_of(src):
    return [ln for ln in src.strip("\n").split("\n") if ln.strip() and not ln.strip().startswith("//")]


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


def grp(src, sizes, merge=()):
    """Logical blocks for `order` steps: consecutive code lines grouped by `sizes`, comments stripped,
    declarations merged via `merge` = [(old_text, new_text)]."""
    import re
    ls = [re.sub(r"\s*//.*$", "", ln) for ln in lines_of(src)]
    assert sum(sizes) == len(ls), (sum(sizes), len(ls))
    out, pos = [], 0
    for n in sizes:
        out.append(chr(10).join(ls[pos:pos + n]))
        pos += n
    for old, new in merge:
        hit = [i for i, b in enumerate(out) if re.search(old, b)]
        assert len(hit) == 1, old
        out[hit[0]] = re.sub(old, new, out[hit[0]])
    return out


def add(num, part, **kw):
    for q in questions:
        if q["num"] == num and q.get("part") == part:
            q.update(kw)
            return
    raise KeyError((num, part))


# ---- rubric / pitfalls / steps (ai-draft). Every expected value comes from a real clang run of
# tools/verify/20A-A/steps.c (-Wall -Wextra); per-part points are not printed in the exam, so the rubric
# points below split the printed question total (Q1 15, Q3 20, Q4 25, Q5 25) and are a draft split. ----
S2 = lines_of(SOL2)
b2, i2 = swap(SOL2, "return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);",
              "return gematria [*str - 'a'] * CalGimatria (str + 1, gematria);")
f2, j2 = blank(S2, "return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);")
S3 = lines_of(SOL3A)
O3 = grp(SOL3A, [3, 2, 5, 5, 2])
b3, i3 = swap(SOL3A, "if (B[ i ] > A[ k ])", "if (B[ i ] < A[ k ])")
f3a, j3a = blank(S3, "while (i < m && k < n)")
f3b, j3b = blank(S3, "k++;")
S4 = lines_of(SOL4A1)
O4 = grp(SOL4A1, [3, 2, 7, 2])
b4, i4 = swap(SOL4A1, "high = mid;", "high = mid - 1;")
f4, j4 = blank(S4, "high = mid;")
S5A = lines_of(SOL5A)
b5a, i5a = swap(SOL5A, "if (count[i] != 1)", "if (count[i] == 1)")
f5a, j5a = blank(S5A, "if (count[i] != 1)")
S5B = lines_of(SOL5B)
O5B = grp(SOL5B, [4, 4, 1, 7, 2, 2, 2],
          merge=[(r"int count\[10\] = \{ 0 \};\s*int rows,cols,i,j;", "int count[10] = { 0 }, rows, cols, i, j;")])
b5b, i5b = swap(SOL5B, "for (i = rows; i <= rows + 2; i++)", "for (i = rows; i <= rows + 1; i++)")
f5b, j5b = blank(S5B, "for(rows=0; rows<R-2; rows++)")

PROOF4B = [
    "כל איבר במערך גדול ב-1 מהאיבר הקודם, ולכן ההפרש בין האינדקסים שווה להפרש בין הערכים.",
    "לכן הבדיקה `a[mid] - a[low] == mid - low` קובעת אם הערך הכפול נמצא בחלק הימני של `mid` או בחלק השמאלי.",
    "אם התשובה היא כן, הקטע `(low,mid)` אינו מכיל את האיבר הכפול.",
    "במקרה כזה ממשיכים בחיפוש בינארי בחלק הימני `(mid+1,high)`.",
    "אם התשובה היא לא, מתמקדים בחיפוש בינארי בקטע `(low,mid)` של המערך.",
]
PROOF4B_ORDER = [PROOF4B[0], PROOF4B[1], " ".join(PROOF4B[2:])]
PROOF4B_BAD = list(PROOF4B)
PROOF4B_BAD[3] = "במקרה כזה ממשיכים בחיפוש בינארי בחלק השמאלי `(low,mid)`."

add(1, "א",
    rubric=rub(("הצבה נכונה בנוסחת הנסיגה `a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n` ופירוק עד מקרה הבסיס `n == 1`", 2),
               ("חישוב הערכים הביניים לפי הסדר: מקרה הבסיס, אחר כך הרמות העוקבות", 1),
               ("תוצאה סופית `4.0`", 1)),
    rubricSource="ai-verified",
    pitfalls=["לשכוח את הגורם `(n-1)/n` בקריאה הרקורסיבית ולחבר פשוט את `a[n-1] / n`.",
              "חילוק שלם: כל המשתנים כאן `double`, ולכן `a[n-1] / n` אינו מעוגל."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec(a, 2)` עבור `a = {-3, 6, 7, -2, 12}`?",
         "answer": 1.5, "tol": 0,
         "explain": "$\\frac{6}{2}+(-3)\\cdot\\frac{1}{2}=1.5$ (ריצה אמיתית: 1.5)."},
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec(a, 3)`? (עגלו לשתי ספרות אחרי הנקודה)",
         "answer": 3.33, "tol": 0.01,
         "explain": "$\\frac{7}{3}+1.5\\cdot\\frac{2}{3}=\\frac{10}{3}$ (ריצה אמיתית: 3.333333)."},
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec(a, 4)`?", "answer": 2, "tol": 0,
         "explain": "$\\frac{-2}{4}+\\frac{10}{3}\\cdot\\frac{3}{4}=-0.5+2.5=2$ (ריצה אמיתית: 2.0)."},
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec(a, 5)`, כלומר התשובה לסעיף?", "answer": 4, "tol": 0,
         "explain": "$\\frac{12}{5}+2\\cdot\\frac{4}{5}=2.4+1.6=4$ (ריצה אמיתית: 4.0)."},
    ],
    stepsSource="ai-verified")

add(1, "ב",
    rubric=rub(("פירוק הקריאה `n = 4` לאיבר `a[3] / 4` ולקריאה `fun_rec(a, 3)` שמוכפלת ב-`3/4`", 2),
               ("חישוב `fun_rec(a, 3)` כממוצע שלושת האיברים הראשונים", 1),
               ("תוצאה סופית `2.0`", 1)),
    rubricSource="ai-verified",
    pitfalls=["להשתמש ב-`n = 5` או במערך המלא במקום באיבר ה-4 הראשונים בלבד.",
              "להפעיל את `fun_rec(a, 3)` בלי להכפיל ב-`(n-1)/n = 3/4`."],
    steps=[
        {"type": "numeric", "prompt": "מהו הביטוי `a[n-1] / n` כש-`n = 4`?", "answer": -0.5, "tol": 0,
         "explain": "`a[3] = -2`, ו-$\\frac{-2}{4}=-0.5$ (ריצה אמיתית: -0.5)."},
        {"type": "numeric", "prompt": "מהו `fun_rec(a, 3)*3/4`? (עגלו לשתי ספרות אחרי הנקודה)", "answer": 2.5, "tol": 0.01,
         "explain": "$\\frac{10}{3}\\cdot\\frac{3}{4}=2.5$ (ריצה אמיתית: 2.5)."},
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec(a, 4)`?", "answer": 2, "tol": 0,
         "explain": "$-0.5+2.5=2$ (ריצה אמיתית: 2.0)."},
    ],
    stepsSource="ai-verified")

add(1, "ג",
    rubric=rub(("זיהוי שהפונקציה מחשבת את הממוצע של $n$ האיברים הראשונים", 3),
               ("הנחת האינדוקציה: `fun_rec(a, n-1)` היא ממוצע $n-1$ האיברים הראשונים", 2),
               ("הכפלה ב-$\\frac{n-1}{n}$ הופכת את הממוצע לסכום חלקי $n$, ולכן יחד עם $\\frac{a[n-1]}{n}$ מתקבל הסכום חלקי $n$", 2)),
    rubricSource="ai-verified",
    pitfalls=["לענות \"סכום\" או \"המקסימום\" רק מתוך הדוגמה, בלי להוכיח לכל $n$.",
              "לא לנמק מדוע הגורם $\\frac{n-1}{n}$ נדרש: הוא הופך ממוצע של $n-1$ איברים לסכומם חלקי $n$."],
    steps=[
        {"type": "choice", "prompt": "מה מחשבת `fun_rec(a, n)` עבור מערך של מספרים ממשיים?",
         "options": opts("ממוצע $n$ האיברים הראשונים", "סכום $n$ האיברים הראשונים", "האיבר האחרון חלקי $n$",
                         "המקסימום מבין $n$ האיברים הראשונים"), "correctId": "a",
         "explain": "על `{2, 4, 6, 8}` ו-`n = 4` מתקבל 5, הממוצע (ריצה אמיתית: 5.0), וכך גם על 10000 מערכים אקראיים."},
        {"type": "choice", "prompt": "אם `fun_rec(a, n-1)` הוא ממוצע $n-1$ האיברים הראשונים, מה שווה `fun_rec(a, n-1)*(n-1)/n`?",
         "options": opts("סכום $n-1$ האיברים הראשונים חלקי $n$", "סכום $n-1$ האיברים הראשונים חלקי $n-1$",
                         "סכום $n$ האיברים חלקי $n-1$", "הממוצע של $n-1$ האיברים הראשונים"), "correctId": "a",
         "explain": "ממוצע כפול $(n-1)$ נותן את הסכום, וחילוק ב-$n$ משאיר סכום חלקי $n$."},
        {"type": "numeric", "prompt": "מה מחזירה `fun_rec` על `{2, 4, 6, 8}` עם `n = 4`?", "answer": 5, "tol": 0,
         "explain": "הממוצע של 2, 4, 6, 8 הוא 5 (ריצה אמיתית: 5.0)."},
    ],
    stepsSource="ai-verified")

add(2, None,
    rubric=rub(("מקרה בסיס: `*str == '\\0'` מחזיר `0`", 4),
               ("שימוש נכון בטבלה: האינדקס `*str - 'a'` ב-`gematria`", 6),
               ("חיבור הערך של התו הנוכחי לקריאה הרקורסיבית על `str + 1`", 7),
               ("רקורסיה אחת לכל תו, כלומר זמן לינארי בלי העתקת המחרוזת", 3)),
    rubricSource="ai-verified",
    pitfalls=["לשכוח את מקרה הבסיס של סוף המחרוזת ולהמשיך מעבר ל-`'\\0'`.",
              "לגשת ל-`gematria[*str]` בלי להחסיר `'a'` ולצאת מגבולות המערך.",
              "לקרוא רקורסיבית עם `str` במקום `str + 1`, ולא להתקדם."],
    steps=[
        {"type": "numeric", "prompt": "מה מחזירה `CalGimatria(\"exam\", gematria)`?", "answer": 646, "tol": 0,
         "explain": "$5+600+1+40=646$ (ריצה אמיתית: 646)."},
        {"type": "numeric", "prompt": "מה מחזירה הקריאה על המחרוזת `\"zz\"`?", "answer": 1600, "tol": 0,
         "explain": "כל `z` שווה 800: $800+800=1600$ (ריצה אמיתית: 1600)."},
        {"type": "fillblank", "prompt": "השלימו את שורת ההחזרה הרקורסיבית.", "code": True, "lines": f2, "blankIndex": j2,
         "options": opts("return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);",
                         "return gematria [*str - 'a'] + CalGimatria (str, gematria);",
                         "return gematria [*str] + CalGimatria (str + 1, gematria);",
                         "return gematria [*str - 'a'];"), "correctId": "a",
         "explain": "מוסיפים את גימטריית התו הנוכחי ועוברים לתו הבא (`str + 1`); האינדקס הוא מרחק האות מ-`'a'`."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `CalGimatria`.", "code": True, "lines": S2,
         "explain": "קודם בדיקת סוף המחרוזת, ואחר כך הערך של התו הנוכחי ועוד שאר המחרוזת."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b2, "bugIndex": i2,
         "explain": "כפל במקום חיבור: מקרה הבסיס מחזיר 0, ולכן הכול מוכפל ב-0 ו-\"exam\" מחזירה 0 (ריצה אמיתית: 0)."},
    ],
    stepsSource="ai-verified")

add(3, "א",
    rubric=rub(("תנאי הלולאה `i < m && k < n`: עוצרים כשאחד המערכים נגמר", 4),
               ("כששני האיברים שווים: `swap` של `B[i]` עם התא הבא בבלוק הקדמי (`++last`) והגדלת `i`, ואז `k++`", 5),
               ("כש-`B[i] > A[k]` מקדמים את `k`", 3),
               ("אחרת (`B[i] < A[k]`) מקדמים את `i`", 2)),
    rubricSource="ai-verified",
    pitfalls=["תנאי עם `||` במקום `&&`: הלולאה ממשיכה אחרי שמערך נגמר וקוראת מחוץ לגבולות.",
              "לקדם את המצביע הלא נכון בהשוואה: במערך ממוין מקדמים את המצביע של האיבר הקטן יותר.",
              "לא להגדיל את `last` לפני ה-`swap` ולדרוס איבר בבלוק הקדמי."],
    steps=[
        {"type": "numeric", "prompt": "בדוגמה (`A={-1,0,5,6,8,8,10}`, `B={-2,5,5,7,8,10,11,12}`): כמה איברים יש בבלוק הקדמי של $B$ אחרי הריצה?",
         "answer": 3, "tol": 0,
         "explain": "$B$ הופך ל-`5 8 10 7 -2 5 11 12`: הבלוק הקדמי הוא `5 8 10` (ריצה אמיתית)."},
        {"type": "fillblank", "prompt": "השלימו את תנאי הלולאה.", "code": True, "lines": f3a, "blankIndex": j3a,
         "options": opts("while (i < m && k < n)", "while (i < m || k < n)", "while (i < m - 1 && k < n)", "while (i < n && k < m)"),
         "correctId": "a", "explain": "הלולאה נעצרת כשאחד המערכים נגמר; `||` קורא מחוץ לגבולות, ו-`i < m - 1` מפספס את האיבר האחרון של $B$ (נכשל ב-3648 מ-20000 קלטים אקראיים)."},
        {"type": "fillblank", "prompt": "השלימו את הפקודה בענף `B[i] > A[k]`.", "code": True, "lines": f3b, "blankIndex": j3b,
         "options": opts("k++;", "i++;", "last++;", "k--;"), "correctId": "a",
         "explain": "`B[i]` גדול מ-`A[k]`, ולכן ההתאמה עבור `B[i]` יכולה להימצא רק בהמשך $A$: מקדמים את `k`."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `partition_B`.", "code": True, "lines": O3,
         "explain": "אתחול, כותרת הלולאה, ענף השוויון (`swap` ו-`k++` יחד), ענפי ההשוואה, וסגירה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה והפונקציה כבר אינה מסדרת את הבלוק הקדמי. מצאו אותה.", "code": True,
         "lines": b3, "bugIndex": i3,
         "explain": "עם `<` הענפים מתחלפים; בדוגמה $B$ נשאר `-2 5 5 7 8 10 11 12` ללא הבלוק הקדמי (ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

add(3, "ב",
    rubric=rub(("זמן הריצה הוא $O(m+n)$", 3),
               ("נימוק: בכל איטרציה `i` או `k` (או שניהם) גדלים, ולכן לכל היותר $m+n$ איטרציות", 2),
               ("ה-`swap` מתבצע רק בשוויון ולכן לכל היותר $n$ פעמים ואינו משנה את הסדר הגדול", 1)),
    rubricSource="ai-verified",
    pitfalls=["לענות $O(n\\cdot m)$ בגלל הלולאה: אין לולאה מקוננת, כל מצביע רק מתקדם.",
              "לספור רק את האיטרציות עם שוויון (עד $n$) ולענות $O(n)$: גם איטרציות בלי שוויון מתקדמות, ו-$B$ יכול להיות גדול בהרבה מ-$A$."],
    steps=[
        {"type": "numeric", "prompt": "בדוגמה ($n=7$, $m=8$): כמה איטרציות מבצעת הלולאה?", "answer": 10, "tol": 0,
         "explain": "ספירה בריצה אמיתית: 10 איטרציות, פחות מ-$m+n=15$."},
        {"type": "choice", "prompt": "מדוע מספר האיטרציות חסום על ידי $m+n$?",
         "options": opts("בכל איטרציה לפחות אחד המצביעים `i`, `k` גדל, והם לא חוזרים אחורה",
                         "הלולאה החיצונית רצה $n$ פעמים והפנימית $m$ פעמים", "ה-`swap` מסדר מחדש את כל $B$",
                         "הפונקציה מבצעת חיפוש בינארי"), "correctId": "a",
         "explain": "אין לולאה מקוננת. ב-100000 זוגות ממוינים אקראיים לא נמצאה ריצה עם יותר מ-$m+n$ איטרציות."},
        {"type": "text", "prompt": "מהו סדר הגודל של זמן הריצה כתלות ב-$m$ וב-$n$? (למשל `O(n)`)",
         "accept": ["O(m+n)", "O(n+m)"], "normalize": "complexity",
         "explain": "סריקה אחת של כל אחד מהמערכים: $O(m+n)$."},
    ],
    stepsSource="ai-verified")

add(4, "א",
    rubric=rub(("שימוש בחיפוש בינארי עם `low`, `high` ו-`mid` כדי להגיע ל-$O(\\log n)$", 4),
               ("החזרת `a[mid]` כשמתקיים `a[mid] == a[mid + 1]`", 4),
               ("בדיקת `a[mid] - a[low] == mid - low`: אם מתקיים אין כפול בקטע `low..mid`, ולכן `low = mid + 1`", 5),
               ("אחרת הכפול בקטע השמאלי ולכן `high = mid`", 4)),
    rubricSource="ai-verified",
    pitfalls=["חיפוש לינארי על כל המערך: נכון אבל $O(n)$ ולא $O(\\log n)$.",
              "לבדוק את `a[mid]` מול `mid` בלבד (בלי `low`) כשהמערך אינו מתחיל ב-0.",
              "`high = mid - 1` במקום `high = mid`: מאבדים את `mid` שיכול להיות חלק מהזוג הכפול."],
    steps=[
        {"type": "numeric", "prompt": "במערך הדוגמה (14 איברים, `low = 0`, `high = 13`): מהו `mid` באיטרציה הראשונה?",
         "answer": 6, "tol": 0,
         "explain": "`mid = (13-0)/2+0 = 6`, ו-`a[6] == a[7] == 3`, ולכן מוחזר 3 (ריצה אמיתית: 3)."},
        {"type": "choice",
         "prompt": "במערך `{1,2,3,4,4,5,6,7,8}` (9 איברים) באיטרציה הראשונה `mid = 4`, `a[mid]-a[low] = 3` ו-`mid-low = 4`. מה קורה?",
         "options": opts("`high = mid`: הכפול נמצא בקטע `low..mid`", "`low = mid + 1`: הכפול בצד ימין",
                         "הפונקציה מחזירה `a[mid]` מיד", "`high = mid - 1`"), "correctId": "a",
         "explain": "ההפרש בערכים (3) קטן מהפרש האינדקסים (4), ולכן יש כפול בקטע השמאלי (כולל `mid`)."},
        {"type": "fillblank", "prompt": "השלימו את הפקודה בענף ה-`else`.", "code": True, "lines": f4, "blankIndex": j4,
         "options": opts("high = mid;", "high = mid - 1;", "low = mid;", "low = mid + 1;"), "correctId": "a",
         "explain": "`mid` עצמו עדיין יכול להיות אחד משני הכפולים, ולכן `high = mid` ולא `mid - 1`."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `FindDouble`.", "code": True, "lines": O4,
         "explain": "אתחול, כותרת הלולאה, גוף הלולאה (חישוב `mid` ושתי הבדיקות עם הבחירה בצד), וסגירה."},
        {"type": "findbug", "prompt": "שורה אחת שונתה והפונקציה נכשלת על חלק מהקלטים. מצאו אותה.", "code": True,
         "lines": b4, "bugIndex": i4,
         "explain": "עם `high = mid - 1` נאבד את `mid`: למשל על `{-4,-4,-3}` הלולאה מסתיימת בלי להחזיר ערך. "
                    "בבדיקה על 594 מערכים תקינים הגרסה הרשמית נכונה תמיד והגרסה השבורה נכשלת ב-216."},
    ],
    stepsSource="ai-verified")

add(4, "ב",
    rubric=rub(("הבחנה שהפרש הערכים בין שני תאים שווה להפרש האינדקסים כל עוד אין כפול ביניהם", 4),
               ("הבדיקה `a[mid] - a[low] == mid - low` מכריעה אם הכפול בקטע השמאלי או הימני", 3),
               ("שתי התוצאות מובילות לצמצום התחום ל-`(mid+1,high)` או ל-`(low,mid)`", 1)),
    rubricSource="ai-verified",
    pitfalls=["לנמק רק \"חיפוש בינארי\" בלי להסביר איך ההשוואה מראה לאיזה צד ללכת.",
              "לבלבל בין שני הצדדים: שוויון ההפרשים אומר שהכפול בצד **ימין**."],
    steps=[
        {"type": "choice", "prompt": "מהי התכונה שבה משתמש הנימוק?",
         "options": opts("בקטע בלי כפול ההפרש בין שני ערכים שווה להפרש האינדקסים שלהם",
                         "המערך ממוין ולכן אפשר לחפש את הערך הכפול ישירות", "הערך הכפול הוא תמיד באמצע המערך",
                         "סכום האיברים ידוע מראש"), "correctId": "a",
         "explain": "כל איבר גדול ב-1 מקודמו, ולכן $a[mid]-a[low]=mid-low$ בדיוק כשאין כפול ב-`low..mid`."},
        {"type": "order", "prompt": "סדרו את שלבי הנימוק.", "lines": PROOF4B_ORDER,
         "explain": "קודם התכונה, אחר כך הבדיקה, ואז שני המקרים (הסדר ביניהם חופשי)."},
        {"type": "findbug", "prompt": "בגרסה הבאה של הנימוק משפט אחד שגוי. איזה?", "lines": PROOF4B_BAD, "bugIndex": 3,
         "explain": "אם הקטע `(low,mid)` ללא כפול, ממשיכים ימינה, בקטע `(mid+1,high)`, ולא שמאלה."},
    ],
    stepsSource="ai-verified")

add(5, "א",
    rubric=rub(("לולאה על `i` מ-1 עד 9 (לא כוללת את 0)", 2),
               ("תנאי הכישלון `count[i] != 1`: ספרה חסרה או חוזרת", 3),
               ("`return 0` מיד כשהתנאי מתקיים", 1),
               ("`return 1` בסוף כשכל הספרות 1..9 מופיעות בדיוק פעם אחת", 2)),
    rubricSource="ai-verified",
    pitfalls=["לבדוק גם את `count[0]`: חלון חוקי אינו מכיל 0.",
              "להסתפק בבדיקת `count[i] > 1`: חלון עם 0 ובלי 9 עובר בטעות.",
              "לשכוח את `return 1` בסוף הפונקציה."],
    steps=[
        {"type": "choice", "prompt": "מה מחזירה `TestCount` כש-`count[1..9]` שווים כולם ל-1?",
         "options": opts("`1`", "`0`", "`9`", "אינה מוגדרת"), "correctId": "a",
         "explain": "אף `count[i]` אינו שונה מ-1, והפונקציה מגיעה ל-`return 1` (ריצה אמיתית: 1)."},
        {"type": "numeric", "prompt": "מה מחזירה `TestCount` כש-`count[5] = 2` ו-`count[9] = 0` (והשאר 1)?", "answer": 0, "tol": 0,
         "explain": "כבר `count[5] != 1` מחזיר 0 (ריצה אמיתית: 0)."},
        {"type": "fillblank", "prompt": "השלימו את התנאי.", "code": True, "lines": f5a, "blankIndex": j5a,
         "options": opts("if (count[i] != 1)", "if (count[i] == 1)", "if (count[i] > 1)", "if (i != 1)"), "correctId": "a",
         "explain": "ספרה שמופיעה אפס פעמים או יותר מפעם אחת פוסלת את החלון. `> 1` בלבד אינו מספיק: "
                    "חלון עם 0 ובלי 9 עובר (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות `TestCount`.", "code": True, "lines": S5A,
         "explain": "לולאה על הספרות, פסילה בכישלון, ו-`return 1` בסוף."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b5a, "bugIndex": i5a,
         "explain": "עם `== 1` חלון חוקי נפסל מיד (`count` של כל 1 מחזיר 0, ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

add(5, "ב",
    rubric=rub(("גבולות הלולאות: `rows < R-2` ו-`cols < C-2` כך שחלון 3x3 נשאר בתוך המטריצה", 6),
               ("איפוס `count` בכל חלון (`initializeCountArray`)", 3),
               ("ספירת 9 התאים של החלון: `i` מ-`rows` עד `rows + 2`, `j` מ-`cols` עד `cols + 2`, ו-`count[mat[i][j]]++`", 6),
               ("החזרת 1 כש-`TestCount` מצליחה, ו-0 אחרי שכל החלונות נבדקו", 2)),
    rubricSource="ai-verified",
    pitfalls=["גבול `R` במקום `R-2`: החלון יוצא מהמטריצה.",
              "לא לאפס את `count` בין חלונות, ולצבור ספירות מחלונות קודמים.",
              "להחזיר 0 מיד אחרי החלון הראשון הלא חוקי במקום להמשיך לחלון הבא."],
    steps=[
        {"type": "numeric", "prompt": "במטריצה עם $R=6$, $C=5$: כמה חלונות 3x3 הפונקציה בודקת?", "answer": 12, "tol": 0,
         "explain": "$(R-2)(C-2)=4\\cdot3=12$ (ריצה אמיתית: 12)."},
        {"type": "numeric",
         "prompt": "בחלון `1 2 3 / 8 7 6 / 4 5 5`: מהו `count[5]` אחרי הספירה?",
         "answer": 2, "tol": 0,
         "explain": "הספרה 5 מופיעה פעמיים (`count[9] = 0`), ולכן `TestCount` מחזירה 0 (ריצה אמיתית: 2 ו-0)."},
        {"type": "fillblank", "prompt": "השלימו את כותרת הלולאה החיצונית.", "code": True, "lines": f5b, "blankIndex": j5b,
         "options": opts("for(rows=0; rows<R-2; rows++)", "for(rows=0; rows<R-3; rows++)", "for(rows=0; rows<R-4; rows++)",
                         "for(rows=0; rows<R/2; rows++)"), "correctId": "a",
         "explain": "חלון מתחיל בשורה `rows` ומסתיים ב-`rows + 2`, ולכן `rows` עד `R-3` כולל. כל אחד מהגבולות האחרים "
                    "(`R-3`, `R-4`, `R/2`) מדלג על שורות התחלה אחרונות ומפספס חלון חוקי (ריצה אמיתית)."},
        {"type": "order", "prompt": "סדרו את שורות הפונקציה `Sudoku`.", "code": True, "lines": O5B,
         "explain": "הצהרות, לולאות על פינת החלון, איפוס, ספירה, בדיקה, סגירת הלולאות, ובסוף `return 0`."},
        {"type": "findbug", "prompt": "שורה אחת שונתה. מצאו אותה.", "code": True, "lines": b5b, "bugIndex": i5b,
         "explain": "עם `rows + 1` נספרות רק שתי שורות (6 תאים), ו-`TestCount` לעולם לא מצליחה: על חלון חוקי מוחזר 0 (ריצה אמיתית)."},
    ],
    stepsSource="ai-verified")

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
