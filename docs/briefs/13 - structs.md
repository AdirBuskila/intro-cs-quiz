# מבנים

## מה המבחן שואל
הנושא הזה מופיע מעט במבחנים הקיימים, ולכן החומר כאן קצר ומבוסס על ידע כללי של C ולא על סיכום קורס ייעודי. אם שאלה מבקשת הגדרת `struct`, מערך של מבנים או גישה לשדות דרך מצביע, אלה התבניות.

## הרעיונות המרכזיים
- `struct` מקבץ כמה שדות מטיפוסים שונים תחת שם אחד.
- גישה לשדה במבנה רגיל: `p.x`. דרך מצביע: `ptr->x` (שקול ל-`(*ptr).x`).
- העברה לפונקציה by value מעתיקה את כל המבנה. כדי לשנות את המקור או לחסוך העתקה מעבירים מצביע.
- מערך של מבנים: `Point arr[5]`, וגישה `arr[i].x`. הקצאה דינמית: `malloc(n * sizeof(Point))`.
- השמה בין שני מבנים מאותו טיפוס מעתיקה את כל השדות (גם מערכים שבתוכם).

## תבניות C מדויקות
```c
typedef struct {
    int id;
    char name[20];
    double grade;
} Student;

Student s = {123, "Dana", 91.5};
printf("%d %s %.1f\n", s.id, s.name, s.grade);

void curve(Student* p, double bonus) { p->grade += bonus; }
/* קריאה: curve(&s, 5.0); */

Student* all = (Student*)malloc(n * sizeof(Student));
for (int i = 0; i < n; i++) all[i].grade = 0;
free(all);
```

## מלכודות נפוצות
> 🪤 `strcpy(s.name, "Dana")` ולא `s.name = "Dana"`: מערך אי אפשר להשים.

> 🪤 העברת מבנה by value ושינוי בתוך הפונקציה: המקור לא משתנה.

> 🪤 `ptr.x` במקום `ptr->x` על מצביע, ולהפך.

> 🪤 `sizeof(Student)` עשוי להיות גדול מסכום גדלי השדות בגלל ריפוד (padding).

## דוגמה פתורה
"כתבו פונקציה שמחזירה את הממוצע של מערך סטודנטים":
```c
double average(Student* arr, int n) {
    double sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i].grade;
    return n > 0 ? sum / n : 0;
}
```
שימו לב לבדיקת `n > 0` כדי למנוע חילוק באפס, ולכך ש-`sum` הוא `double` כדי שהחילוק יהיה ממשי.
