/* 19A-B Q6 solver harness: every two neighbours (8-neighbourhood) differ. Tested at N=3 and N=5. */
#include <stdio.h>
#include <stdlib.h>
#ifndef N
#define N 3
#endif
/* SOLUTION BEGIN */
int neighbors_differ(int A[N][N])
{
   int i, j;
   for (i = 0; i < N; i++)
      for (j = 0; j < N; j++)
      {
         if (j + 1 < N && A[i][j] == A[i][j + 1])                  // right
            return 0;
         if (i + 1 < N && A[i][j] == A[i + 1][j])                  // down
            return 0;
         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j + 1]) // down-right
            return 0;
         if (i + 1 < N && j > 0 && A[i][j] == A[i + 1][j - 1])     // down-left
            return 0;
      }
   return 1;
}
/* SOLUTION END */
static int ref(int A[N][N]){
  for(int i=0;i<N;i++) for(int j=0;j<N;j++) for(int k=0;k<N;k++) for(int m=0;m<N;m++){
    if(i==k&&j==m) continue;
    if(abs(i-k)<=1&&abs(j-m)<=1&&A[i][j]==A[k][m]) return 0;
  }
  return 1;
}
int main(void){
#if N == 3
  int m1[N][N]={{11,10,11},{17,-5,13},{10,11,10}}, m2[N][N]={{11,33,11},{33,15,13},{10,11,10}};
  printf("ex1=%d (1) ex2=%d (0)\n",neighbors_differ(m1),neighbors_differ(m2));
#endif
  srand(196); int bad=0,T=50000,ones=0;
  for(int t=0;t<T;t++){int M[N][N],r=4+rand()%(3*N); for(int i=0;i<N;i++)for(int j=0;j<N;j++)M[i][j]=rand()%r;
    int e=ref(M); ones+=e; if(neighbors_differ(M)!=e)bad++;}
  printf("random %dx%d: %d cases (%d all-different), %d mismatches\n",N,N,T,ones,bad); return bad!=0;}
