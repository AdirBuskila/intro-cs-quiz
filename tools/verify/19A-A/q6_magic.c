/* OFFICIAL code verbatim (N=3). The column loop reads: for (i=0; i<N; j++)  -> i never changes. */
#include <stdio.h>
#define N 3
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
            for (i=0; i<N; j++)
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
int main(void){
  int m[N][N]={{12,19,14},{17,15,13},{16,11,18}};
  printf("%d\n",CheckMagic(m));
  return 0;}
