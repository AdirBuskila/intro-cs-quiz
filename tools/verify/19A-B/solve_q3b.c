/* 19A-B Q3b (bonus) solver harness: minimal prefix index holding every in-range distinct value. */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
int min_prefix_index(int *a, int n)
{
   int i, total = 0, found = 0;
   int *seen = (int*)calloc(n, sizeof(int));
   for (i = 0; i < n; i++)              // pass 1: how many distinct values in 0..n-1
      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 0)
      {
         seen[a[i]] = 1;
         total++;
      }
   for (i = 0; i < n; i++)              // pass 2: first index where all of them were seen
   {
      if (a[i] >= 0 && a[i] < n && seen[a[i]] == 1)
      {
         seen[a[i]] = 2;
         found++;
      }
      if (found == total)
      {
         free(seen);
         return i;
      }
   }
   free(seen);
   return -1;                           // only when n == 0
}
/* SOLUTION END */
static int inr(int v,int n){return v>=0&&v<n;}
static int ref(int*a,int n){ for(int i=0;i<n;i++){ int ok=1; for(int k=0;k<n&&ok;k++) if(inr(a[k],n)){int f=0; for(int j=0;j<=i;j++) if(a[j]==a[k]) f=1; if(!f) ok=0;} if(ok) return i;} return -1; }
int main(void){
  int a1[]={1,9999,1,4,2,1}, a2[]={2,8888,2,5,2};
  printf("ex1=%d (4) ex2=%d (0)\n",min_prefix_index(a1,6),min_prefix_index(a2,5));
  srand(1932); int bad=0,T=20000;
  for(int t=0;t<T;t++){int n=1+rand()%15,A[15]; for(int i=0;i<n;i++)A[i]=rand()%(2*n+2)-n/2;
    if(min_prefix_index(A,n)!=ref(A,n))bad++;}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
