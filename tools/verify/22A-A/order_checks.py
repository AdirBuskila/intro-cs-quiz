"""22A-A order steps: pairwise block swaps must change behaviour. Run: PYTHONUTF8=1 py tools/verify/22A-A/order_checks.py"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from order_lib import find_step, check

PRE = "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n"
M1 = r"""
int main(void){ srand(2); unsigned long h=7;
 for(int it=0;it<20000;it++){ Fraction a[6]; int n=1+rand()%6;
  for(int i=0;i<n;i++){ a[i].num=rand()%3; a[i].denominator=2+rand()%5; a[i].numerator=rand()%a[i].denominator; }
  Fraction r=findBiggest(a,n); h=h*31+r.num*100+r.numerator*10+r.denominator; }
 printf("%lu\n",h); return 0; }"""
M3 = r"""
int main(void){ srand(4); unsigned long h=7;
 for(int it=0;it<20000;it++){ char s[16]; int n=rand()%11; for(int i=0;i<n;i++)s[i]='a'+rand()%5; s[n]=0;
  removeDuplicates(s); for(char*p=s;*p;p++)h=h*31+*p; h=h*31+strlen(s); }
 printf("%lu\n",h); return 0; }"""
M4 = r"""
static int cmp(const void*a,const void*b){return *(const int*)a-*(const int*)b;}
int main(void){ srand(6); unsigned long h=7;
 for(int it=0;it<20000;it++){ int a[10],n=1+rand()%9; double sum=0; for(int i=0;i<n;i++){a[i]=rand()%21-10;sum+=a[i];}
  qsort(a,n,sizeof(int),cmp); h=h*31+question4_version2(a,n,sum/n)+50; }
 printf("%lu\n",h); return 0; }"""
TYPEDEF = "typedef struct { int num, numerator, denominator; } Fraction;\n"
rc = 0
rc += check("22A-A", "Q1", find_step("22A-A", 1, None, "findBiggest"), lambda bl: PRE + TYPEDEF + "\n".join(bl) + "\n" + M1)
rc += check("22A-A", "Q3", find_step("22A-A", 3, None, "removeDuplicates"), lambda bl: PRE + "\n".join(bl) + "\n" + M3)
rc += check("22A-A", "Q4", find_step("22A-A", 4, None, "question4_version2"), lambda bl: PRE + "\n".join(bl) + "\n" + M4)
sys.exit(1 if rc else 0)
