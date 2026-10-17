#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#define R 6
#define C 5
static void swap(int*a,int*b){int t=*a;*a=*b;*b=t;}
double fun_rec(double *a, int n){ if (n == 1) return a[0]; return a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n; }
int CalGimatria(char*str,int*g){ if(*str=='\0') return 0; return g[*str-'a']+CalGimatria(str+1,g);}
int CalGimatria_mul(char*str,int*g){ if(*str=='\0') return 0; return g[*str-'a']*CalGimatria_mul(str+1,g);}
long iters;
void partition_B(int* A,int n,int* B,int m){
  int i=0,k=0,last=-1; iters=0;
  while(i<m && k<n){ iters++;
    if(B[i]==A[k]){ swap(B+(++last),B+(i++)); k++; }
    else if(B[i]>A[k]) k++; else i++; }
}
int lastv;
void partition_mut(int* A,int n,int* B,int m){ /* mutant: > flipped to < */
  int i=0,k=0,last=-1;
  while(i<m && k<n){
    if(B[i]==A[k]){ swap(B+(++last),B+(i++)); k++; }
    else if(B[i]<A[k]) k++; else i++; }
}
int FindDouble(int*a,int n){ int low=0,high=n-1,mid; while(low<high){ mid=(high-low)/2+low; if(a[mid]==a[mid+1]) return a[mid]; if(a[mid]-a[low]==mid-low) low=mid+1; else high=mid; } return -9999; }
int FindDouble_mut(int*a,int n){ int low=0,high=n-1,mid; while(low<high){ mid=(high-low)/2+low; if(a[mid]==a[mid+1]) return a[mid]; if(a[mid]-a[low]==mid-low) low=mid+1; else high=mid-1; } return -9999; }
int FD_firstmid(int n){ return (n-1-0)/2+0; }
void initializeCountArray(int*c){for(int i=0;i<10;i++)c[i]=0;}
int TestCount(int*count){ for(int i=1;i<10;i++) if(count[i]!=1) return 0; return 1;}
int TestCount_mut(int*count){ for(int i=1;i<10;i++) if(count[i]==1) return 0; return 1;}
int Sudoku(int mat[R][C]){ int count[10]={0}; int rows,cols,i,j;
  for(rows=0;rows<R-2;rows++) for(cols=0;cols<C-2;cols++){ initializeCountArray(count);
    for(i=rows;i<=rows+2;i++) for(j=cols;j<=cols+2;j++) count[mat[i][j]]++;
    if(TestCount(count)) return 1; } return 0; }
int Sudoku_mut(int mat[R][C]){ int count[10]={0}; int rows,cols,i,j;
  for(rows=0;rows<R-3;rows++) for(cols=0;cols<C-2;cols++){ initializeCountArray(count);
    for(i=rows;i<=rows+2;i++) for(j=cols;j<=cols+2;j++) count[mat[i][j]]++;
    if(TestCount(count)) return 1; } return 0; }
int Sudoku_mut2(int mat[R][C]){ int count[10]={0}; int rows,cols,i,j;
  for(rows=0;rows<R-2;rows++) for(cols=0;cols<C-2;cols++){ initializeCountArray(count);
    for(i=rows;i<=rows+1;i++) for(j=cols;j<=cols+2;j++) count[mat[i][j]]++;
    if(TestCount(count)) return 1; } return 0; }
int TC_gt1(int*c){ for(int i=1;i<10;i++) if(c[i]>1) return 0; return 1;}
int TC_eq0(int*c){ for(int i=1;i<10;i++) if(c[i]==0) return 0; return 1;}
int windows;
void sudoku_windows(void){ windows=(R-2)*(C-2); }
int main(void){
  double a[]={-3,6,7,-2,12};
  for(int n=1;n<=5;n++) printf("Q1 fun_rec(a,%d)=%.6f\n",n,fun_rec(a,n));
  printf("Q1b fun_rec(a,3)*3/4=%.6f  a[3]/4=%.6f\n",fun_rec(a,3)*3/4,a[3]/4);
  double b[]={2,4,6,8}; printf("Q1c fun_rec({2,4,6,8},4)=%.6f\n",fun_rec(b,4));
  int g[26]; int vals[26]={1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800};
  for(int i=0;i<26;i++) g[i]=vals[i];
  printf("Q2 exam=%d zz=%d ab=%d  mut(exam)=%d\n",CalGimatria("exam",g),CalGimatria("zz",g),CalGimatria("ab",g),CalGimatria_mul("exam",g));
  int A[]={-1,0,5,6,8,8,10}, B[]={-2,5,5,7,8,10,11,12};
  partition_B(A,7,B,8); printf("Q3 B="); for(int i=0;i<8;i++)printf("%d ",B[i]); printf(" iters=%ld\n",iters);
  int B2[]={-2,5,5,7,8,10,11,12}; partition_mut(A,7,B2,8); printf("Q3 mut B="); for(int i=0;i<8;i++)printf("%d ",B2[i]); puts("");
  /* iteration bound n+m, random sorted pairs */
  unsigned s=7; int bad=0; long worst=0;
  for(int it=0;it<100000;it++){
    int n=1+(s=s*1103515245u+12345u)%12, m=1+(s=s*1103515245u+12345u)%12; int X[16],Y[16],v=0;
    for(int i=0;i<n;i++){v+=(s=s*1103515245u+12345u)%3; X[i]=v;} v=0;
    for(int i=0;i<m;i++){v+=(s=s*1103515245u+12345u)%3; Y[i]=v;}
    partition_B(X,n,Y,m); if(iters>n+m) bad++; if(iters>worst)worst=iters; }
  printf("Q3b iters>n+m cases: %d\n",bad);
  /* FindDouble */
  int d[]={-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9};
  printf("Q4 FD=%d firstmid(14)=%d a[6]=%d a[7]=%d\n",FindDouble(d,14),FD_firstmid(14),d[6],d[7]);
  int e[]={1,2,3,4,4,5,6,7,8}; /* n=9, low=0 high=8 mid=4 */
  printf("Q4 e: FD=%d mid0=%d a[mid]=%d a[mid+1]=%d a[mid]-a[low]=%d mid-low=%d\n",FindDouble(e,9),4,e[4],e[5],e[4]-e[0],4);
  int fdbad=0, mutbad=0; int firstfail[20]; int ffn=0;
  for(int start=-4;start<=4;start++) for(int n=2;n<=12;n++) for(int p=0;p<n-1;p++){
    int arr[20]; int k=0; for(int v=0;v<n-1;v++){ arr[k++]=start+v; if(v==p) arr[k++]=start+v; }
    int want=start+p;
    if(FindDouble(arr,n)!=want) fdbad++;
    if(FindDouble_mut(arr,n)!=want){ if(!mutbad){ ffn=n; memcpy(firstfail,arr,sizeof(int)*n);} mutbad++; }
  }
  printf("Q4 official bad=%d mutant bad=%d; first mutant failing n=%d:",fdbad,mutbad,ffn); for(int i=0;i<ffn;i++)printf(" %d",firstfail[i]); puts("");
  int sm[3]={1,1,2}; printf("Q4 mut on {1,1,2}: %d (want 1)\n",FindDouble_mut(sm,3));
  /* Q5 */
  int cA[10]={0,1,1,1,1,1,1,1,1,1}; int cB[10]={0,1,1,1,1,2,1,1,1,0};
  printf("Q5a TestCount all-ones=%d with-dup=%d  mut(all-ones)=%d\n",TestCount(cA),TestCount(cB),TestCount_mut(cA));
  int M[R][C]={{1,2,3,0,0},{8,7,6,0,0},{4,5,9,0,0},{0,0,0,0,0},{0,0,0,0,0},{0,0,0,0,0}};
  printf("Q5b windows=%d Sudoku(M)=%d\n",(R-2)*(C-2),Sudoku(M));
  int M2[R][C]; memset(M2,0,sizeof M2); int w[9]={1,2,3,8,7,6,4,5,5};
  for(int i=0;i<3;i++)for(int j=0;j<3;j++)M2[i][j]=w[i*3+j];
  int count[10]={0}; for(int i=0;i<3;i++)for(int j=0;j<3;j++)count[M2[i][j]]++;
  printf("Q5b dup window: count[5]=%d TestCount=%d Sudoku=%d\n",count[5],TestCount(count),Sudoku(M2));
  int M3[R][C]; memset(M3,0,sizeof M3); for(int i=0;i<3;i++)for(int j=0;j<3;j++)M3[3+i][2+j]=(int[]){1,2,3,4,5,6,7,8,9}[i*3+j];
  printf("Q5b window at last rows: Sudoku=%d mut=%d\n",Sudoku(M3),Sudoku_mut(M3));
  printf("Q5b mut2(M)=%d (want 1)\n",Sudoku_mut2(M));
  int cz[10]={1,1,1,1,1,1,1,1,1,0};
  printf("Q5a zero-window: TestCount=%d  gt1=%d (wrong)\n",TestCount(cz),TC_gt1(cz));
  printf("Q5a dup-window: TestCount=%d  eq0=%d (wrong)\n",TestCount(cB),TC_eq0(cB));
  return 0;}
