# -*- coding: utf-8 -*-
"""Generator for tools/raw/24A-B.json -- intro-cs, semester A 2024, moed B (8.04.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24A-B.py

Source: exam pp.1-14 (cover, 4 questions with answer boxes at pp.2/4/6/8, allowed-functions list p.10, scratch pages).
4 questions (27/26/26/26), cap 105, no sub-parts. There is NO answer source for this sitting
(no official solution, no student paper), so every question is held with reason "no-key"
and goes to the solver.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24A-B.json"

HOLD = "no-key"


def Q(num, topic, question, points):
    return {"num": num, "kind": "code", "topic": topic, "question": question, "points": points, "hold": HOLD}


questions = [
    Q(1, "pointers_memory",
      "כתבו פונקציה יעילה המקבלת מערך של מספרים שלמים `arr` וגודלו `n`.\n"
      "ידוע שטווח הערכים של המספרים במערך הוא בין `0` ו-`n`.\n"
      "הפונקציה תיצור ותחזיר מערך של המספרים בטווח בין `0` ל-`n` **שלא** הופיעו במערך `arr`, ותעביר את גודלו.\n"
      "לדוגמא: עבור המערך `{0, 1, 1, 0, 3, 5}` ו-`n = 6` הפונקציה תחזיר את המערך `{2, 4, 6}` ותעביר `3`,\n"
      "עבור המערך `{}` ו-`n = 0` הפונקציה תחזיר את המערך `{0}` ותעביר `1`.\n"
      "ניתן להשתמש במערך עזר.\n"
      "חתימת הפונקציה היא:\n"
      "`int *valueNotInArray(int *arr, int n, int *newSize);`",
      27),
    Q(2, "strings",
      "אתם מקבלים מחרוזת שמייצגת מספר ארוך במיוחד, למשל `\"12345678910111213\"`\n"
      "עליכם למצוא את המספר הדו ספרתי שמופיע מספר הפעמים הגדול ביותר במחרוזת.\n"
      "אם יש יותר ממספר אחד כזה עליכם להחזיר את המספר ה**קטן** ביותר.\n"
      "מספר דו ספרתי מוגדר כשתי ספרות אחת אחרי השנייה, ויכול להתחיל ב-0 מקדים, "
      "כך ש-`\"00\"` וגם `\"01\"` נחשבים למספר דו ספרתי. (וכנ\"ל כל המספרים עד 99)\n"
      "לדוגמא, עבור המחרוזת `\"12121212121\"` יוחזר המספר הדו ספרתי `12` שמופיע 5 פעמים.\n"
      "עבור המחרוזת `\"21212121212\"` יוחזר המספר `12`, כי אמנם גם `21` מופיע 5 פעמים אבל גם `12` מופיע 5 פעמים, ו-`12` קטן מ-`21`.\n"
      "דוגמאות נוספות: עבור `\"222211\"` יוחזר `22` שמופיע 3 פעמים,\n"
      "עבור `\"0001\"` יוחזר `0` (כיוון שגם `00` נחשב דו ספרתי),\n"
      "עבור `\"1234\"` יוחזר `12`,\n"
      "עבור `\"426144\"` יוחזר `14`.\n"
      "חתימת הפונקציה היא:\n"
      "`int find_two_digits (char * number);`\n"
      "על הפונקציה לרוץ בסדר גודל של $n$ כאשר $n$ הוא מספר הספרות במחרוזת.",
      26),
    Q(3, "recursion",
      "כתבו פונקציה **רקורסיבית** `int is_zero(int* pos, int n, int* neg, int m)` "
      "המקבלת שני מערכים ממוינים בסדר עולה `pos` ו-`neg` וגודלם `n` ו-`m`.\n"
      "ידוע כי כל ערכי המערך `pos` גדולים מ-0 וכל ערכי המערך `neg` קטנים מ-0.\n"
      "על הפונקציה לבדוק האם קיימים שני ערכים `pos[i]` ו-`neg[j]` כך ש-`pos[i]+neg[j] == 0`.\n"
      "במידה וקיימים הפונקציה תחזיר `1`, אחרת תחזיר `0`.\n"
      "לדוגמא: עבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -11, -3, -2}` הפונקציה תחזיר `1`.\n"
      "עבור `pos={1, 4, 8, 11}`, `neg={-20, -15, -12, -3, -2}` הפונקציה תחזיר `0`.",
      26),
    Q(4, "sorting_merge",
      "כתוב פונקציה **יעילה** שמקבלת מערך וגודלו, ומחזירה את מספר החזרות הגדול ביותר של איבר כלשהו במערך.\n"
      "לדוגמא:\n"
      "עבור המערך הבא:\n"
      "`1, 2, -3005, 2, 3, 1, -1000, 3, 7, -11, 2, 15, 2, 3, 90, 7, 2, 2, 1000`\n"
      "הפונקציה תחזיר `6` (המספר `2` הוא המספר הכי שכיח שמופיע 6 פעמים).\n"
      "ניתן לשנות את המערך.\n"
      "חתימת הפונקציה היא:\n"
      "`int number_returns(int* arr, int size);`\n"
      "על הפונקציה לרוץ בסדר גודל $n\\log n$.",
      26),
]

exam = {
    "examCode": "24A-B",
    "examLabel": "מבוא למדעי המחשב, סמסטר א' תשפ\"ד, מועד ב (8.04.2024)",
    "year": 2024,
    "examDate": "8.04.2024",
    "sourceFile": "24A-B exam pp.1-14",
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
