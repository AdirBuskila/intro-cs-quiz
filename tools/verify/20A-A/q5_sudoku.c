#include <stdio.h>
#include <stdlib.h>
#define R 6
#define C 5
void initializeCountArray(int *count)
{
    int i;
    for (i = 0; i < 10; i++) count[i] = 0;
}
int TestCount(int *count)
{
    int i;
    for (i = 1; i < 10; i++)
        if (count[i] != 1)
            return 0;
    return 1;
}
int Sudoku(int mat[R][C])
{
    int count[10] = { 0 };
    int rows,cols,i,j;

    for(rows=0; rows<R-2; rows++)
    {
        for (cols = 0; cols<C-2; cols++)
        {
            initializeCountArray (count);
            for (i = rows; i <= rows + 2; i++)
            {
                for (j = cols; j <= cols + 2; j++)
                {
                    count[ mat[i][j] ] ++;
                }
            }
            if (TestCount(count))
                return 1;
        }
    }
    return 0;
}
/* independent reference: try every 3x3 window, sort-free check of "values 1..9 each exactly once" */
static int ref(int mat[R][C]){
  for(int r=0;r+3<=R;r++) for(int c=0;c+3<=C;c++){
    int seen=0, ok=1;
    for(int i=r;i<r+3;i++) for(int j=c;j<c+3;j++){ int v=mat[i][j]; if(v<1||v>9||(seen&(1<<v))) ok=0; else seen|=1<<v; }
    if(ok) return 1;
  }
  return 0;
}
int main(void){
  int fails=0, ones=0; unsigned s=5;
  for(int it=0;it<300000;it++){
    int m[R][C];
    for(int i=0;i<R;i++) for(int j=0;j<C;j++) m[i][j]=(s=s*1103515245u+12345u)>>16 ; 
    for(int i=0;i<R;i++) for(int j=0;j<C;j++) m[i][j]%=10;
    if(it%3==0){ /* plant a valid window */
      int r=(s=s*1103515245u+12345u)%4, c=(s=s*1103515245u+12345u)%3; int p[9]={1,2,3,4,5,6,7,8,9};
      for(int i=8;i>0;i--){ int k=((s=s*1103515245u+12345u)>>16)%(i+1); int t=p[i];p[i]=p[k];p[k]=t; }
      if(it%2) p[(s>>8)%9]=0; /* break it half the time */
      for(int i=0;i<9;i++) m[r+i/3][c+i%3]=p[i];
    }
    int a=Sudoku(m), b=ref(m); ones+=b;
    if(a!=b) fails++;
  }
  printf("windows with a valid 3x3 in %d cases, fails=%d\n",ones,fails);
  /* exam picture, with its out-of-range cells (12, 17, 11) replaced by 0: the key assumes values 0..9
     (count[12] would write outside count[10]) */
  int e[R][C]={{1,0,8,0,0},{0,1,2,3,0},{2,8,7,6,0},{4,4,5,9,0},{0,0,0,0,0},{0,0,0,0,0}};
  printf("picture matrix (cells >9 zeroed) -> %d, ref=%d\n",Sudoku(e),ref(e));
  return 0;}
