"""22A-B order steps: pairwise block swaps must change behaviour. Run: PYTHONUTF8=1 py tools/verify/22A-B/order_checks.py"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from order_lib import find_step, check

PRE = "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n"
M2 = r"""
static int cmp(const void*a,const void*b){return *(const int*)a-*(const int*)b;}
int main(void){ srand(8); unsigned long h=7;
 for(int it=0;it<20000;it++){ int c[8],n=2+rand()%6; for(int i=0;i<n;i++)c[i]=rand()%15-5; qsort(c,n,sizeof(int),cmp);
  int k=rand()%20-4; h=h*31+f_2(c,k,0,n-1)+10; }
 printf("%lu\n",h); return 0; }"""
M3 = r"""
int main(void){ srand(5); unsigned long h=7;
 for(int it=0;it<20000;it++){ char s[10]; int n=rand()%7; for(int i=0;i<n;i++)s[i]='a'+rand()%5; s[n]=0;
  h=h*31+f_3(s); }
 printf("%lu\n",h); return 0; }"""
M4 = r"""
int main(void){ int n; scanf("%d",&n); maxmax(n); return 0; }"""
IN4 = "6 2 6 3 4 7 5 "
rc = 0
rc += check("22A-B", "Q2", find_step("22A-B", 2, None, "f_2"), lambda bl: PRE + "\n".join(bl) + "\n" + M2)
rc += check("22A-B", "Q3", find_step("22A-B", 3, None, "f_3"), lambda bl: PRE + "\n".join(bl) + "\n" + M3)
rc += check("22A-B", "Q4", find_step("22A-B", 4, None, "maxmax"), lambda bl: PRE + "\n".join(bl) + "\n" + M4, stdin="6 2 6 3 4 7 5 ")
sys.exit(1 if rc else 0)
