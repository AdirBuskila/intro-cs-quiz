"""20A-A order steps: pairwise block swaps must change behaviour. Run: PYTHONUTF8=1 py tools/verify/20A-A/order_checks.py"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from order_lib import find_step, check

PRE = "#include <stdio.h>\n#include <stdlib.h>\nstatic void swap(int*a,int*b){int t=*a;*a=*b;*b=t;}\n#define R 6\n#define C 5\n"

M3 = r"""
static int cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}
int main(void){ srand(5); unsigned long h=7;
 for(int it=0;it<3000;it++){ int A[40]={0},B[40]={0}; int n=rand()%8,m=rand()%9;
  for(int i=0;i<n;i++)A[i]=rand()%8-2; for(int i=0;i<m;i++)B[i]=rand()%8-2;
  qsort(A,n,sizeof(int),cmp); qsort(B,m,sizeof(int),cmp);
  partition_B(A,n,B,m); for(int i=0;i<m;i++)h=h*31+B[i]+10; }
 printf("%lu\n",h); return 0; }"""
M4 = r"""
int main(void){ unsigned long h=7;
 for(int n=2;n<=12;n++) for(int st=-4;st<=4;st++) for(int d=0;d<n-1;d++){ int a[20],v=st; int k=0;
   for(int i=0;i<n;i++){ a[i]=v; if(i!=d) v++; }
   h=h*31+FindDouble(a,n)+100; }
 printf("%lu\n",h); return 0; }"""
M5 = r"""
void initializeCountArray(int *count){int i; for(i=0;i<10;i++)count[i]=0;}
int TestCount(int *count){int i; for(i=1;i<10;i++) if(count[i]!=1) return 0; return 1;}
%s
int main(void){ srand(9); unsigned long h=7;
 for(int it=0;it<20000;it++){ int mat[R][C]; for(int i=0;i<R;i++)for(int j=0;j<C;j++)mat[i][j]=1+rand()%9;
  if(it%2){ int r0=rand()%(R-2),c0=rand()%(C-2); int p[9]={1,2,3,4,5,6,7,8,9};
   for(int i=8;i>0;i--){int j=rand()%(i+1);int t=p[i];p[i]=p[j];p[j]=t;}
   for(int i=0;i<3;i++)for(int j=0;j<3;j++)mat[r0+i][c0+j]=p[i*3+j]; }
  h=h*31+Sudoku(mat); }
 printf("%%lu\n",h); return 0; }"""
rc = 0
b = find_step("20A-A", 3, "א", "partition_B")
rc += check("20A-A", "3a", b, lambda bl: PRE + "\n".join(bl) + "\n" + M3)
b = find_step("20A-A", 4, "א", "FindDouble")
rc += check("20A-A", "4a", b, lambda bl: PRE + "\n".join(bl) + "\n" + M4)
b = find_step("20A-A", 5, "ב", "Sudoku")
rc += check("20A-A", "5b", b, lambda bl: PRE + M5.split("%s")[0] + "\n".join(bl) + "\n" + (M5.split("%s")[1] % ()).replace("%%", "%") if False else PRE + M5.split("%s")[0] + "\n".join(bl) + "\n" + M5.split("%s")[1].replace("%%", "%"))
sys.exit(1 if rc else 0)
