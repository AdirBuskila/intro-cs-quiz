/* Independent refuter harness for 20A-A (not reusing the author's outputs). */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#define R 6
#define C 5
static void swp(int*x,int*y){int t=*x;*x=*y;*y=t;}
static int cmpi(const void*x,const void*y){return *(int*)x-*(int*)y;}

/* ---- Q1 ---- */
static double fun_rec(double *a,int n){ if(n==1) return a[0]; return a[n-1]/n + fun_rec(a,n-1)*(n-1)/n; }

/* ---- Q2 ---- */
static int cal(char*s,int*g){ if(*s=='\0')return 0; return g[*s-'a']+cal(s+1,g); }

/* ---- Q3a variants. cond: 0 official, 1 ||, 2 i<m only, 3 i<n&&k<m.
   br: 0 official k++, 1 i++, 2 last++, 3 k--, 4 '<' compare.  returns iterations, -1 if cap hit */
static int part(int*A,int n,int*B,int m,int cond,int br,int swapfirst){
  int i=0,k=0,last=-1,it=0;
  for(;;){
    int c;
    switch(cond){case 0:c=(i<m&&k<n);break;case 1:c=(i<m||k<n);break;case 2:c=(i<m);break;default:c=(i<n&&k<m);}
    if(!c)break;
    if(++it>2000) return -1;
    if(B[i]==A[k]){
      if(swapfirst){k++; swp(B+(++last),B+(i++));}
      else{ swp(B+(++last),B+(i++)); k++; }
    } else {
      int gt = (br==4)? (B[i]<A[k]) : (B[i]>A[k]);
      if(gt){ if(br==0||br==4)k++; else if(br==1)i++; else if(br==2)last++; else k--; }
      else i++;
    }
  }
  return it;
}
static int part_ok(int*A,int n,int*B0,int*B,int m){
  int cA[40]={0},cB[40]={0},cB2[40]={0},inter=0,f[40]={0};
  for(int i=0;i<n;i++)cA[A[i]+10]++;
  for(int i=0;i<m;i++){cB[B0[i]+10]++;cB2[B[i]+10]++;}
  for(int v=0;v<40;v++){ if(cB[v]!=cB2[v])return 0; inter+=cA[v]<cB[v]?cA[v]:cB[v]; }
  for(int i=0;i<inter;i++)f[B[i]+10]++;
  for(int v=0;v<40;v++) if(f[v]!=(cA[v]<cB[v]?cA[v]:cB[v]))return 0;
  return 1;
}
static void test_part(const char*name,int cond,int br,int sf){
  srand(5); int fails=0,hang=0,N=20000,first=1;
  for(int t=0;t<N;t++){
    int n=rand()%7+1,m=rand()%7+1;
    int bufA[40],bufB[40],a[8],b[8],b0[8];
    for(int i=0;i<40;i++){bufA[i]=rand()%8-2;bufB[i]=rand()%8-2;}
    for(int i=0;i<n;i++)a[i]=rand()%8-2;
    for(int i=0;i<m;i++)b[i]=rand()%8-2;
    qsort(a,n,sizeof(int),cmpi);qsort(b,m,sizeof(int),cmpi);
    memcpy(bufA,a,n*sizeof(int)); memcpy(bufB,b,m*sizeof(int)); memcpy(b0,b,sizeof b0);
    int it=part(bufA,n,bufB,m,cond,br,sf);
    if(it<0){hang++;continue;}
    if(!part_ok(a,n,b0,bufB,m)) {fails++; if(first){first=0; printf("   witness n=%d m=%d A=",n,m); for(int i=0;i<n;i++)printf("%d ",a[i]); printf("B="); for(int i=0;i<m;i++)printf("%d ",b0[i]); printf("-> B="); for(int i=0;i<m;i++)printf("%d ",bufB[i]); printf("\n");}}
  }
  printf("Q3a %-28s wrong=%d hang/cap=%d of %d\n",name,fails,hang,N);
}

/* ---- Q4a FindDouble variants. fv: 0 official, 1 high=mid-1, 2 low=mid, 3 low=mid+1 on else. order=1: swap the two ifs */
static int fd(int*a,int n,int fv,int order,int*hang){
  int low=0,high=n-1,mid,it=0; *hang=0;
  while(low<high){
    if(++it>100){*hang=1;return -999;}
    mid=(high-low)/2+low;
    if(!order){
      if(a[mid]==a[mid+1]) return a[mid];
      if(a[mid]-a[low]==mid-low) low=mid+1;
      else { if(fv==0)high=mid; else if(fv==1)high=mid-1; else if(fv==2)low=mid; else low=mid+1; }
    } else {
      if(a[mid]-a[low]==mid-low) low=mid+1;
      else high=mid;
      if(a[mid]==a[mid+1]) return a[mid];
    }
  }
  return -777; /* fell off: no return */
}
static void test_fd(const char*name,int fv,int order){
  int bad=0,hg=0,tot=0,first=1;
  for(int n=2;n<=12;n++) for(int start=-3;start<=0;start++) for(int d=0;d<n-1;d++){
    int a[16]; a[0]=start; for(int i=1;i<n;i++){ if(i==d+1) a[i]=a[i-1]; else a[i]=a[i-1]+1; }
    int dv=a[d]; int h; int r=fd(a,n,fv,order,&h); tot++;
    if(h)hg++;
    if(r!=dv){bad++; if(first){first=0;printf("   witness n=%d start=%d dup@%d -> %d (want %d)\n",n,start,d,r,dv);}}
  }
  printf("Q4a %-24s wrong=%d (hang=%d) of %d\n",name,bad,hg,tot);
}

/* ---- Q5a TestCount variants: 0 !=1, 1 ==1, 2 >1, 3 i!=1 */
static int tc(int*c,int v){ int i; for(i=1;i<10;i++){ int cond; switch(v){case 0:cond=c[i]!=1;break;case 1:cond=c[i]==1;break;case 2:cond=c[i]>1;break;default:cond=(i!=1);} if(cond)return 0;} return 1; }
static void test_tc(const char*name,int v){
  int bad=0,tot=0,first=1; int c[10];
  for(int code=0;code<19683;code++){ int x=code; c[0]=0; int truth=1; for(int i=1;i<10;i++){c[i]=x%3;x/=3; if(c[i]!=1)truth=0;}
    tot++; if(tc(c,v)!=truth){bad++; if(first){first=0;printf("   witness count[1..9]="); for(int i=1;i<10;i++)printf("%d",c[i]); printf("\n");}}}
  printf("Q5a %-20s wrong=%d of %d\n",name,bad,tot);
}

/* ---- Q5b Sudoku over padded storage so OOB rows are readable.
   rv: 0 R-2, 1 R-3, 2 R, 3 <=R-2, 4 inner rows+1 bug */
static int sud(int m[][C],int rv){
  int count[10],rows,cols,i,j; int lim;
  switch(rv){case 0:lim=R-2;break;case 1:lim=R-3;break;case 2:lim=R;break;case 3:lim=R-1;break;default:lim=R-2;}
  for(rows=0;rows<lim;rows++) for(cols=0;cols<C-2;cols++){
    memset(count,0,sizeof count);
    for(i=rows;i<=rows+(rv==4?1:2);i++) for(j=cols;j<=cols+2;j++) count[m[i][j]]++;
    int ok=1; for(int q=1;q<10;q++) if(count[q]!=1) ok=0;
    if(ok) return 1;
  } return 0; }
static int sud_truth(int m[][C]){ for(int r=0;r+2<R;r++)for(int c=0;c+2<C;c++){int cnt[10]={0};for(int i=0;i<3;i++)for(int j=0;j<3;j++)cnt[m[r+i][c+j]]++;int ok=1;for(int q=1;q<10;q++)if(cnt[q]!=1)ok=0;if(ok)return 1;}return 0;}
static void test_sud(const char*name,int rv){
  srand(9); int bad=0,N=40000,first=1;
  for(int t=0;t<N;t++){
    int store[R+3][C];
    for(int i=0;i<R+3;i++)for(int j=0;j<C;j++)store[i][j]=rand()%10;
    int plant=rand()%3;
    if(plant){ int perm[9]={1,2,3,4,5,6,7,8,9}; for(int i=8;i>0;i--){int k=rand()%(i+1);swp(&perm[i],&perm[k]);}
      int r=(plant==1)?R-3:rand()%(R-2), c=rand()%(C-2); for(int i=0;i<3;i++)for(int j=0;j<3;j++)store[r+i][c+j]=perm[i*3+j]; }
    if(rand()%4==0){ int perm[9]={1,2,3,4,5,6,7,8,9}; for(int i=8;i>0;i--){int k=rand()%(i+1);swp(&perm[i],&perm[k]);}
      int c=rand()%(C-2); for(int j=0;j<3;j++){store[R-2][c+j]=perm[j];store[R-1][c+j]=perm[3+j];store[R][c+j]=perm[6+j];} }
    int want=sud_truth(store), got=sud(store,rv);
    if(want!=got){bad++; if(first){first=0;printf("   witness want=%d got=%d\n",want,got);}}
  }
  printf("Q5b %-24s wrong=%d of %d\n",name,bad,N);
}

int main(void){
  double a[5]={-3,6,7,-2,12};
  printf("Q1 fun_rec(1..5): "); for(int n=1;n<=5;n++)printf("%.6f ",fun_rec(a,n)); printf("\n");
  srand(1); int bad=0;
  for(int t=0;t<10000;t++){double x[9];int n=rand()%8+1;double s=0;for(int i=0;i<n;i++){x[i]=rand()%2001-1000;s+=x[i];} if(fabs(fun_rec(x,n)-s/n)>1e-6)bad++;}
  printf("Q1 avg identity mismatches=%d\n",bad);
  { double x[4]={2,4,6,8}; printf("Q1c fun_rec{2,4,6,8}=%.6f\n",fun_rec(x,4)); }
  int g[26]; for(int i=0;i<26;i++){ if(i<9)g[i]=i+1; else if(i<18)g[i]=(i-8)*10; else g[i]=(i-17)*100; }
  printf("Q2 exam=%d zz=%d a=%d z=%d\n",cal("exam",g),cal("zz",g),cal("a",g),cal("z",g));
  { int A[]={-1,0,5,6,8,8,10},B[]={-2,5,5,7,8,10,11,12}; int it=part(A,7,B,8,0,0,0); printf("Q3b example iterations=%d B=",it); for(int i=0;i<8;i++)printf("%d ",B[i]); printf("\n"); }
  { srand(3); int viol=0; for(int t=0;t<100000;t++){int n=rand()%9,m=rand()%9;int A[9],B[9];for(int i=0;i<n;i++)A[i]=rand()%8;for(int i=0;i<m;i++)B[i]=rand()%8;qsort(A,n,4,cmpi);qsort(B,m,4,cmpi);int it=part(A,n,B,m,0,0,0);if(it>n+m)viol++;} printf("Q3b iters>m+n violations=%d\n",viol); }
  test_part("official",0,0,0);
  test_part("official swap/k++ reordered",0,0,1);
  test_part("while ||",1,0,0);
  test_part("while i<m only",2,0,0);
  test_part("while i<n&&k<m",3,0,0);
  test_part("branch i++ (3a distractor)",0,1,0);
  test_part("branch last++",0,2,0);
  test_part("branch k--",0,3,0);
  test_part("findbug '<'",0,4,0);
  { int A[]={-1,0,5,6,8,8,10},B[]={-2,5,5,7,8,10,11,12}; int it=part(A,7,B,8,0,4,0); printf("   findbug '<' on example: it=%d B=",it); for(int i=0;i<8;i++)printf("%d ",B[i]); printf("\n"); }
  { int ex[14]={-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9}; int h; printf("Q4a example -> %d ; mid0=%d\n",fd(ex,14,0,0,&h),(13-0)/2+0); }
  { int ex[9]={1,2,3,4,4,5,6,7,8}; printf("Q4a step: mid=%d a[mid]-a[low]=%d mid-low=%d a[mid]==a[mid+1]?%d\n",(8-0)/2,ex[4]-ex[0],4,ex[4]==ex[5]); }
  { int ex[3]={-4,-4,-3}; int h; printf("Q4a {-4,-4,-3} with high=mid-1 -> %d (-777 = fell off)\n",fd(ex,3,1,0,&h)); }
  test_fd("official",0,0); test_fd("high=mid-1",1,0); test_fd("low=mid",2,0); test_fd("low=mid+1",3,0);
  test_fd("official, two ifs swapped",0,1);
  test_tc("!=1 official",0); test_tc("==1",1); test_tc(">1",2); test_tc("i!=1",3);
  { printf("Q5b windows (R-2)*(C-2)=%d\n",(R-2)*(C-2)); int w[10]={0}; int win[9]={1,2,3,8,7,6,4,5,5}; for(int i=0;i<9;i++)w[win[i]]++; printf("Q5b count[5]=%d tc=%d count[9]=%d\n",w[5],tc(w,0),w[9]); }
  test_sud("official R-2",0); test_sud("R-3",1); test_sud("R",2); test_sud("<=R-2",3); test_sud("inner rows+1",4);
  return 0; }
