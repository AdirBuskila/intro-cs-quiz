/* 19A-A Q6 solver harness: OFFICIAL CheckMagic with the single typo fix (column loop `j++` -> `i++`).
   Tested at N=3 (printed example) and N=4. */
#include <stdio.h>
#include <stdlib.h>
#ifndef N
#define N 3
#endif
/* SOLUTION BEGIN */
int CheckMagic(int A[N][N])
{
      int i, j, sum=0, curr_sum;
      //first row
      for (j=0; j<N; j++)
            sum += A[0][j];
      //check rows
      for (i=1; i<N; i++)
      {
            curr_sum = 0;
            for (j=0; j<N; j++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check columns
      for (j=0; j<N; j++)
      {
            curr_sum = 0;
            for (i=0; i<N; i++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check main diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][i];
      if (curr_sum != sum)
            return 0;
      //check secondary diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][N-i-1];
      if (curr_sum != sum)
            return 0;

      return 1;
}
/* SOLUTION END */
/* independent reference: collect all 2N+2 line sums, all equal? */
static int ref(int A[N][N]){ int s[2*N+2]={0};
  for(int i=0;i<N;i++)for(int j=0;j<N;j++){ s[i]+=A[i][j]; s[N+j]+=A[i][j]; if(i==j)s[2*N]+=A[i][j]; if(i+j==N-1)s[2*N+1]+=A[i][j]; }
  for(int k=1;k<2*N+2;k++) if(s[k]!=s[0]) return 0;
  return 1; }
static void base(int M[N][N]){
#if N == 3
  int B[3][3]={{2,7,6},{9,5,1},{4,3,8}};            /* Lo Shu */
#elif N == 4
  int B[4][4]={{16,3,2,13},{5,10,11,8},{9,6,7,12},{4,15,14,1}};   /* Duerer */
#else
  int B[N][N]; for(int i=0;i<N;i++)for(int j=0;j<N;j++) B[i][j]=((i*2+j)%N)*N+((i+2*j)%N)+1;   /* magic for N=5,7 */
#endif
  int sym=rand()%8, k=rand()%5-2, c=rand()%21-10;
  for(int i=0;i<N;i++)for(int j=0;j<N;j++){ int r=i,q=j,t;
    if(sym&1){t=r;r=q;q=t;} if(sym&2) r=N-1-r; if(sym&4) q=N-1-q;
    M[i][j]=k*B[r][q]+c; }
}
int main(void){
#if N == 3
  int m[N][N]={{12,19,14},{17,15,13},{16,11,18}};
  printf("ex=%d (expect 1)\n",CheckMagic(m));
#endif
  srand(196); int bad=0,T=20000,ones=0;
  for(int t=0;t<T;t++){ int M[N][N]; int mode=t%4;
    if(mode==3){ for(int i=0;i<N;i++)for(int j=0;j<N;j++) M[i][j]=rand()%3; }
    else { base(M);
      if(mode==1){ /* keeps every row and column sum, usually breaks a diagonal */
        int r1=rand()%N,r2=rand()%N,c1=rand()%N,c2=rand()%N,x=rand()%3+1;
        M[r1][c1]+=x; M[r2][c2]+=x; M[r1][c2]-=x; M[r2][c1]-=x; }
      if(mode==2){ M[rand()%N][rand()%N]+=rand()%5-2; } }
    int r=ref(M); ones+=r; if(CheckMagic(M)!=r) bad++; }
  printf("random %dx%d: %d cases (%d magic), %d mismatches\n",N,N,T,ones,bad); return bad!=0;}
