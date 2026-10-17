import sys,os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
q5=code_of('19A-A',5)
src=HDR+q5+r'''
static int ref(int*a,int*b,int n,int d){for(int i=0;i<n;i++)for(int j=0;j<n;j++)if(a[i]+b[j]==d)return 1;return 0;}
int main(){int bad=0,tot=0;
 for(int t=0;t<200000;t++){int n=rnd()%9;int a[9],b[9],b2[9];for(int i=0;i<n;i++){a[i]=(int)(rnd()%13)-6;b[i]=(int)(rnd()%13)-6;b2[i]=b[i];}int d=(int)(rnd()%25)-12;
  int r=ref(a,b,n,d);int g=is_sum(a,b,n,d);tot++;if(r!=!!g){bad++;if(bad<5)printf("DIFF n=%d d=%d\n",n,d);}
  /* sorted b is a permutation of b */ int s1[9],s2[9];memcpy(s1,b,n*4);memcpy(s2,b2,n*4);qsort(s1,n,4,(int(*)(const void*,const void*))0==0?NULL:NULL);} 
 printf("q5 tests=%d bad=%d\n",tot,bad);
 for(int n=1<<16;n<=1<<18;n*=2){int*a=malloc(n*4),*b=malloc(n*4);for(int i=0;i<n;i++){a[i]=rnd()%1000000*2;b[i]=rnd()%1000000*2;}double t0=now();is_sum(a,b,n,1);printf("n=%d t=%.3f\n",n,now()-t0);}
 return 0;}
'''
src=src.replace("qsort(s1,n,4,(int(*)(const void*,const void*))0==0?NULL:NULL);","")
build_run(D,'q5',src)
q6=code_of('19A-A',6)
for N,vals,tag in [(1,3,'1'),(2,4,'2'),(3,3,'3'),(4,2,'4')]:
    cells=N*N
    s=HDR+'#define N %d\n'%N+q6+r'''
static int ref(int A[N][N]){int S=0;for(int j=0;j<N;j++)S+=A[0][j];int ok=1;
 for(int i=0;i<N;i++){int s=0;for(int j=0;j<N;j++)s+=A[i][j];if(s!=S)ok=0;}
 for(int j=0;j<N;j++){int s=0;for(int i=0;i<N;i++)s+=A[i][j];if(s!=S)ok=0;}
 {int s=0,u=0;for(int i=0;i<N;i++){s+=A[i][i];u+=A[i][N-1-i];}if(s!=S||u!=S)ok=0;}return ok;}
int main(){long total=1,ones=0,bad=0;for(int i=0;i<%d;i++)total*=%d;
 for(long c=0;c<total;c++){int A[N][N];long x=c;for(int i=0;i<N;i++)for(int j=0;j<N;j++){A[i][j]=x%%%d;x/=%d;}
  int r=ref(A),g=CheckMagic(A);ones+=r;if(r!=g)bad++;}
 printf("N=%d total=%%ld magic=%%ld bad=%%ld\n",N,total,ones,bad);
 return 0;}
'''.replace('%d',str(0)) if False else None
    s=HDR+'#define N %d\n'%N+q6+(r'''
static int ref(int A[N][N]){int S=0;for(int j=0;j<N;j++)S+=A[0][j];int ok=1;
 for(int i=0;i<N;i++){int s=0;for(int j=0;j<N;j++)s+=A[i][j];if(s!=S)ok=0;}
 for(int j=0;j<N;j++){int s=0;for(int i=0;i<N;i++)s+=A[i][j];if(s!=S)ok=0;}
 {int s=0,u=0;for(int i=0;i<N;i++){s+=A[i][i];u+=A[i][N-1-i];}if(s!=S||u!=S)ok=0;}return ok;}
int main(){long total=1,ones=0,bad=0;for(int i=0;i<CELLS;i++)total*=VALS;
 for(long c=0;c<total;c++){int A[N][N];long x=c;for(int i=0;i<N;i++)for(int j=0;j<N;j++){A[i][j]=x%VALS;x/=VALS;}
  int r=ref(A),g=CheckMagic(A);ones+=r;if(r!=g)bad++;}
 printf("N=%d total=%ld magic=%ld bad=%ld\n",N,total,ones,bad);
 return 0;}
''').replace('CELLS',str(cells)).replace('VALS',str(vals))
    build_run(D,'q6_N'+tag,s)
