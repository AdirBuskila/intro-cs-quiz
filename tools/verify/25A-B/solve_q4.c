/* 25A-B Q4 solver harness: number of all-ones 3x3 sub-squares, O(N*N). Tested at N=6 (printed example) and N=9. */
#include <stdio.h>
#include <stdlib.h>
#ifndef N
#define N 6
#endif
/* SOLUTION BEGIN */
int number_squares(int matrix[N][N])
{
   int i, j, a, b, all_ones, count = 0;
   for (i = 0; i + 2 < N; i++)            // (i, j) = top-left corner of a 3x3 square
      for (j = 0; j + 2 < N; j++)
      {
         all_ones = 1;
         for (a = i; a < i + 3; a++)      // fixed 9 cells per square
            for (b = j; b < j + 3; b++)
               if (matrix[a][b] == 0)
                  all_ones = 0;
         count += all_ones;
      }
   return count;
}
/* SOLUTION END */
/* independent reference: count each square through its bottom-right corner with an explicit cell list */
static int ref(int m[N][N]){ int c=0;
  for(int r=2;r<N;r++) for(int s=2;s<N;s++){
    int z=0;
    for(int k=0;k<9;k++) if(m[r-k/3][s-k%3]==0) z=1;
    if(!z) c++;
  }
  return c; }
int main(void){
#if N == 6
  int img[N][N]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};
  printf("ex=%d (expect 4)\n",number_squares(img));
#endif
  srand(254); int bad=0,T=20000;
  for(int t=0;t<T;t++){int m[N][N],p=2+rand()%12; for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=rand()%p!=0;
    if(number_squares(m)!=ref(m))bad++;}
  printf("random %dx%d: %d cases, %d mismatches\n",N,N,T,bad); return bad!=0;}
