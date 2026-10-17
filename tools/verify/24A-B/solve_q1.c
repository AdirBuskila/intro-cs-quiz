/* 24A-B Q1 solver harness: valueNotInArray. Printed examples + random vs brute force. */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
int *valueNotInArray(int *arr, int n, int *newSize)
{
   int i, k = 0, count = 0;
   int *seen = (int*)calloc(n + 1, sizeof(int));
   int *res;
   for (i = 0; i < n; i++)
      seen[arr[i]] = 1;
   for (i = 0; i <= n; i++)
      if (!seen[i])
         count++;
   res = (int*)malloc(count * sizeof(int));
   for (i = 0; i <= n; i++)
      if (!seen[i])
         res[k++] = i;
   free(seen);
   *newSize = count;
   return res;
}
/* SOLUTION END */
int main(void){
  int a[]={0,1,1,0,3,5}, sz, *r=valueNotInArray(a,6,&sz);
  printf("ex1: size=%d {",sz); for(int i=0;i<sz;i++)printf("%d%s",r[i],i<sz-1?",":""); printf("} (expect 3 {2,4,6})\n"); free(r);
  r=valueNotInArray(NULL,0,&sz); printf("ex2: size=%d {%d} (expect 1 {0})\n",sz,r[0]); free(r);
  srand(241); int bad=0, T=20000;
  for(int t=0;t<T;t++){
    int n=rand()%12, A[12]; for(int i=0;i<n;i++)A[i]=rand()%(n+1);
    int ref[13], rc=0; for(int v=0;v<=n;v++){int f=0;for(int i=0;i<n;i++)if(A[i]==v)f=1; if(!f)ref[rc++]=v;}
    int s; int *o=valueNotInArray(A,n,&s);
    if(s!=rc) bad++; else for(int i=0;i<s;i++) if(o[i]!=ref[i]){bad++;break;}
    free(o);
  }
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
