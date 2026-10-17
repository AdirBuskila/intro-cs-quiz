/* 20A-A refuter round: replacement distractors must fail observably (wrong output) without relying on UB.
   clang -Wall -Wextra -fsanitize=undefined,address distractors.c -o d && ./d   (falls back to plain build) */
#include <stdio.h>
#include <stdlib.h>
#define R 6
#define C 5
static void swap(int*a,int*b){int t=*a;*a=*b;*b=t;}
static int cmp(const void*a,const void*b){return *(const int*)a-*(const int*)b;}
#define PART(NAME, COND) void NAME(int*A,int n,int*B,int m){int i=0,k=0,last=-1; while(COND){ \
  if(B[i]==A[k]){swap(B+(++last),B+(i++));k++;} else if(B[i]>A[k])k++; else i++; } }
PART(ref, i<m && k<n)
PART(d_m1, i<m-1 && k<n)
static void initc(int*c){for(int i=0;i<10;i++)c[i]=0;}
static int tc(int*c){for(int i=1;i<10;i++)if(c[i]!=1)return 0;return 1;}
#define SUD(NAME, BOUND) int NAME(int mat[R][C]){int count[10]={0},rows,cols,i,j; \
  for(rows=0;rows<BOUND;rows++)for(cols=0;cols<C-2;cols++){initc(count); \
  for(i=rows;i<=rows+2;i++)for(j=cols;j<=cols+2;j++)count[mat[i][j]]++; if(tc(count))return 1;} return 0;}
SUD(s_ref, R-2) SUD(s_r3, R-3) SUD(s_c2, R-4) SUD(s_rh, R/2)
int main(void){
  srand(3); long w1=0,t1=0;
  for(int it=0;it<20000;it++){ int A[8],B[8],B2[8],n=rand()%8,m=rand()%8;
    for(int i=0;i<8;i++){A[i]=rand()%8-2;B[i]=rand()%8-2;}
    qsort(A,n,sizeof(int),cmp); qsort(B,m,sizeof(int),cmp);
    for(int i=0;i<8;i++)B2[i]=B[i];
    ref(A,n,B,m); d_m1(A,n,B2,m); t1++;
    int bad=0; for(int i=0;i<m;i++) if(B[i]!=B2[i]) bad=1; w1+=bad; }
  printf("3a while(i<m-1&&k<n): wrong %ld / %ld\n",w1,t1);
  long w[3]={0,0,0},t=0;
  for(int it=0;it<40000;it++){ int mat[R][C]; for(int i=0;i<R;i++)for(int j=0;j<C;j++)mat[i][j]=1+rand()%9;
    if(it%2){ int r0=rand()%(R-2),c0=rand()%(C-2); int p[9]={1,2,3,4,5,6,7,8,9};
      for(int i=8;i>0;i--){int j=rand()%(i+1);int x=p[i];p[i]=p[j];p[j]=x;}
      for(int i=0;i<3;i++)for(int j=0;j<3;j++)mat[r0+i][c0+j]=p[i*3+j]; }
    int r=s_ref(mat); t++; w[0]+=s_r3(mat)!=r; w[1]+=s_c2(mat)!=r; w[2]+=s_rh(mat)!=r; }
  printf("5b rows<R-3: %ld, rows<R-4: %ld, rows<R/2: %ld wrong / %ld\n",w[0],w[1],w[2],t);
  return 0; }
