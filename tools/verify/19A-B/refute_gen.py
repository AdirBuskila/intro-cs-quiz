import sys,os,re
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
# Q1 (typo If -> if)
sol1=sol('19A-B',1)['solution']
q1='''int fn (int x, int y)
{
        if (y==0)
                return x;
        if (y<0)
                return fn(x, y+1) - 1;
        return fn(x, y-1) + 1;
}
'''
build_run(D,'q1',HDR+q1+'int main(){int bad=0;for(int x=-30;x<=30;x++)for(int y=-30;y<=30;y++)if(fn(x,y)!=x+y)bad++;int o[5];printf("q1 bad(x+y)=%d fn(5,3)=%d fn(5,-3)=%d; other options: x-y mismatches=%d x*(y+1) mism=%d",bad,fn(5,3),fn(5,-3),fn(5,3)!=2,fn(5,3)!=20);putchar(10);return 0;}')
q2=code_of('19A-B',2)
build_run(D,'q2',HDR+q2+r'''
static int ref(long long n){int pos=0;if(n==0)return 1;while(n>0){int d=n%10;if(pos%2==0&&d%2!=0)return 0;if(pos%2==1&&d%2==0)return 0;n/=10;pos++;}return 1;}
int main(){int bad=0;long ones=0;for(int n=0;n<3000000;n++){int r=ref(n);ones+=r;if(r!=digits_parity(n)){bad++;if(bad<5)printf("DIFF %d\n",n);}}
 printf("q2 tested 0..3e6 ones=%ld bad=%d examples 43418->%d 343518->%d\n",ones,bad,digits_parity(43418),digits_parity(343518));return 0;}''')
q3a=code_of('19A-B',3,'א')
build_run(D,'q3a',HDR+q3a+r'''
int main(){int bad=0;for(int t=0;t<300000;t++){int n=1+rnd()%9;int a[9];for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+6))-3;
 int ref=0;for(int v=0;v<n;v++){int f=0;for(int i=0;i<n;i++)if(a[i]==v)f=1;ref+=f;}
 if(ref!=count_in_range(a,n)){bad++;}}
 int e[7]={1,1,5,0,9999,123456,0};printf("q3a bad=%d example=%d\n",bad,count_in_range(e,7));
 int n=1<<22;int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%(2*n);double t0=now();count_in_range(a,n);double t1=now()-t0;n=1<<23;a=realloc(a,n*4);for(int i=0;i<n;i++)a[i]=rnd()%(2*n);t0=now();count_in_range(a,n);printf("t(4M)=%.3f t(8M)=%.3f\n",t1,now()-t0);return 0;}''')
q3b=code_of('19A-B',3,'ב')
build_run(D,'q3b',HDR+q3b+r'''
int main(){int bad=0,zero=0;for(int t=0;t<300000;t++){int n=1+rnd()%9;int a[9];for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2;
 int ref=-1;for(int p=0;p<n&&ref<0;p++){int ok=1;for(int v=0;v<n;v++){int inall=0,inpre=0;for(int i=0;i<n;i++)if(a[i]==v){inall=1;if(i<=p)inpre=1;}if(inall&&!inpre)ok=0;}if(ok)ref=p;}
 int g=min_prefix_index(a,n);int none=1;for(int i=0;i<n;i++)if(a[i]>=0&&a[i]<n)none=0;if(none)zero++;
 if(ref!=g){bad++;if(bad<5)printf("DIFF n=%d ref=%d got=%d\n",n,ref,g);}}
 int e1[6]={1,9999,1,4,2,1},e2[5]={2,8888,2,5,2};printf("q3b bad=%d (no-in-range cases=%d) ex=%d,%d\n",bad,zero,min_prefix_index(e1,6),min_prefix_index(e2,5));
 printf("n=0 returns %d\n",min_prefix_index(e1,0));return 0;}''')
q4=code_of('19A-B',4)
build_run(D,'q4',HDR+q4+r'''
int main(){int bad=0,yes=0;for(int t=0;t<500000;t++){int n=rnd()%8;int pool[12];for(int i=0;i<12;i++)pool[i]=i;for(int i=11;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}
 int a[8],b[8];for(int i=0;i<n;i++)a[i]=pool[i];int mode=rnd()%4;
 if(mode<2){int k=rnd()%(n+1);for(int i=0;i<n;i++)b[(i+k)%(n?n:1)]=a[i];if(mode==1&&n>1){int i=rnd()%n,j=rnd()%n;int x=b[i];b[i]=b[j];b[j]=x;}}
 else if(mode==2){for(int i=0;i<n;i++)b[i]=a[i];if(n){b[rnd()%n]=pool[8+rnd()%4];}}
 else{int p2[12];memcpy(p2,pool,sizeof p2);for(int i=11;i>0;i--){int j=rnd()%(i+1);int x=p2[i];p2[i]=p2[j];p2[j]=x;}for(int i=0;i<n;i++)b[i]=p2[i];}
 int ref=(n==0);for(int k=0;k<n;k++){int ok=1;for(int i=0;i<n;i++)if(b[(i+k)%n]!=a[i])ok=0;if(ok)ref=1;}
 yes+=ref;if(ref!=is_rotation(a,b,n)){bad++;}}
 int a[5]={5,2,8,4,1},b[5]={4,1,5,2,8};printf("q4 bad=%d yes=%d ex=%d\n",bad,yes,is_rotation(a,b,5));return 0;}''')
q5=code_of('19A-B',5)
build_run(D,'q5',HDR+q5+r'''
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){int bad=0;for(int t=0;t<500000;t++){int n=rnd()%10;int a[10],r[10];int m=n?rnd()%(n+1):0;for(int i=0;i<n;i++)a[i]=(int)(rnd()%7)-3;qsort(a,m,4,cmp);qsort(a+m,n-m,4,cmp);memcpy(r,a,n*4);qsort(r,n,4,cmp);sort_two_parts(a,n);if(memcmp(a,r,n*4))bad++;}
 int e[6]={1,1,4,8,-2,3};sort_two_parts(e,6);printf("q5 bad=%d ex=%d %d %d %d %d %d\n",bad,e[0],e[1],e[2],e[3],e[4],e[5]);
 for(int n=1<<21;n<=1<<22;n*=2){int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%1000;qsort(a,n/2,4,cmp);qsort(a+n/2,n/2,4,cmp);double t0=now();sort_two_parts(a,n);printf("n=%d t=%.3f\n",n,now()-t0);}return 0;}''')
q6=code_of('19A-B',6)
for N,V in [(1,3),(2,4),(3,5),(4,2)]:
    cells=N*N
    s=HDR+'#define N %d\n'%N+q6+(r'''
static int ref(int A[N][N]){for(int i=0;i<N;i++)for(int j=0;j<N;j++)for(int k=0;k<N;k++)for(int m=0;m<N;m++){if(i==k&&j==m)continue;int di=i>k?i-k:k-i,dj=j>m?j-m:m-j;if(di<=1&&dj<=1&&A[i][j]==A[k][m])return 0;}return 1;}
int main(){long total=1,ones=0,bad=0,ones2=0;for(int i=0;i<CELLS;i++)total*=VALS;
 for(long c=0;c<total;c++){int A[N][N];long x=c;for(int i=0;i<N;i++)for(int j=0;j<N;j++){A[i][j]=x%VALS;x/=VALS;}int r=ref(A);ones+=r;if(r!=neighbors_differ(A))bad++;}
 printf("N=%d total=%ld yes=%ld bad=%ld\n",N,total,ones,bad);
 for(int t=0;t<200000&&N>=3;t++){int A[N][N];for(int i=0;i<N;i++)for(int j=0;j<N;j++)A[i][j]=i*N+j;for(int s=0;s<3;s++){int i1=rnd()%N,j1=rnd()%N,k1=rnd()%N,m1=rnd()%N;A[i1][j1]=A[k1][m1];}int r=ref(A);ones2+=r;if(r!=neighbors_differ(A))bad++;}
 printf("yes2=%ld ",ones2);printf("with-structured bad=%ld\n",bad);return 0;}
''').replace('CELLS',str(cells)).replace('VALS',str(V))
    build_run(D,'q6_N%d'%N,s)
