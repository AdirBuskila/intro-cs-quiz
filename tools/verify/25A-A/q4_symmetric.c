#include <stdio.h>
#define N 5
int countSymmetricViolations(int matrix[N][N])
{
   int violations = 0;
   for (int i = 0; i < N / 2; i++) {
      for (int j = 0; j < N; j++) {
         if (matrix[i][j] != matrix[N - 1 - i][j]) {
            violations++;
         }
      }
   }
   for (int i = 0; i < N; i++) {
      for (int j = 0; j < N / 2; j++) {
         if (matrix[i][j] != matrix[i][N - 1 - j]) {
            violations++;
         }
      }
   }
   return violations;
}
int main(void){
  int perfect[5][5]={{1,2,8,2,1},{7,4,6,4,7},{5,9,8,9,5},{7,4,6,4,7},{1,2,8,2,1}};
  int notPerfect[5][5]={{1,2,8,2,1},{7,4,6,4,7},{5,6,8,7,5},{7,4,6,4,7},{1,2,8,2,4}};
  printf("perfect=%d (expect 0)\nnotPerfect=%d (expect 3)\n",countSymmetricViolations(perfect),countSymmetricViolations(notPerfect));
  
  /* steps: row loop vs column loop contributions, and the i<N bug */
  {int notPerfect2[5][5]={{1,2,8,2,1},{7,4,6,4,7},{5,6,8,7,5},{7,4,6,4,7},{1,2,8,2,4}};
   int r=0,c=0,rb=0;
   for(int i=0;i<N/2;i++)for(int j=0;j<N;j++)if(notPerfect2[i][j]!=notPerfect2[N-1-i][j])r++;
   for(int i=0;i<N;i++)for(int j=0;j<N/2;j++)if(notPerfect2[i][j]!=notPerfect2[i][N-1-j])c++;
   for(int i=0;i<N;i++)for(int j=0;j<N;j++)if(notPerfect2[i][j]!=notPerfect2[N-1-i][j])rb++;
   printf("step rows=%d cols=%d total=%d  bug(i<N rows)=%d\n",r,c,r+c,rb+c);}
  return 0;}
