/* 24A-B Q3 solver harness: is_zero (recursive). Printed examples + random vs brute force. */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
int is_zero(int* pos, int n, int* neg, int m)
{
   if (n == 0 || m == 0)
      return 0;
   if (pos[0] + neg[m - 1] == 0)
      return 1;
   if (pos[0] < -neg[m - 1])
      return is_zero(pos + 1, n - 1, neg, m);
   return is_zero(pos, n, neg, m - 1);
}
/* SOLUTION END */
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(void){
  int p[]={1,4,8,11}, n1[]={-20,-15,-11,-3,-2}, n2[]={-20,-15,-12,-3,-2};
  printf("ex1=%d (1) ex2=%d (0)\n",is_zero(p,4,n1,5),is_zero(p,4,n2,5));
  srand(243); int bad=0,T=20000;
  for(int t=0;t<T;t++){int n=rand()%10,m=rand()%10,P[10],Ng[10];
    for(int i=0;i<n;i++)P[i]=1+rand()%25; for(int i=0;i<m;i++)Ng[i]=-(1+rand()%25);
    qsort(P,n,sizeof(int),cmp); qsort(Ng,m,sizeof(int),cmp);
    int r=0; for(int i=0;i<n;i++)for(int j=0;j<m;j++)if(P[i]+Ng[j]==0)r=1;
    if(is_zero(P,n,Ng,m)!=r)bad++;}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
