/* 19A-B Q3a solver harness: count distinct values in 0..n-1. */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
int count_in_range(int *a, int n)
{
   int i, count = 0;
   int *seen = (int*)calloc(n, sizeof(int));
   for (i = 0; i < n; i++)
   {
      if (a[i] >= 0 && a[i] < n && !seen[a[i]])
      {
         seen[a[i]] = 1;
         count++;
      }
   }
   free(seen);
   return count;
}
/* SOLUTION END */
int main(void){
  int a[]={1,1,5,0,9999,123456,0}; printf("ex=%d (3)\n",count_in_range(a,7));
  srand(193); int bad=0,T=20000;
  for(int t=0;t<T;t++){int n=1+rand()%15,A[15]; for(int i=0;i<n;i++)A[i]=rand()%(2*n+2)-n/2;
    int r=0; for(int v=0;v<n;v++){int f=0;for(int i=0;i<n;i++)if(A[i]==v)f=1; r+=f;}
    if(count_in_range(A,n)!=r)bad++;}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
