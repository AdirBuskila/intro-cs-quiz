#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void swap(int*x,int*y){int t=*x;*x=*y;*y=t;}
void partition_B(int* A, int n, int* B, int m)
{
    int i=0, k = 0, last = -1;

    while (i < m && k < n)
    {
        if (B[ i ] == A[ k ])
        {
            swap (B + (++last) , B + (i ++ ));   // last ++; swap (&B[last], &B[i] ) ; i++;
            k ++ ;
        }
        else
            if (B[ i ] > A[ k ])
                k++;
            else
                i++ ;
    }
}
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(void){
  int A[]={-1,0,5,6,8,8,10}, B[]={-2,5,5,7,8,10,11,12};
  partition_B(A,7,B,8);
  printf("example B ="); for(int i=0;i<8;i++) printf(" %d",B[i]); printf("\n");
  /* property check on random sorted arrays: B is a permutation of itself, front block = matched elements
     (multiset intersection with A), the rest is the remaining elements */
  srand(11); int fails=0;
  for(int it=0;it<200000;it++){
    int n=rand()%8, m=rand()%9, a[8], b[9], b0[9];
    for(int i=0;i<n;i++) a[i]=rand()%10-2;
    for(int i=0;i<m;i++) b[i]=rand()%10-2;
    qsort(a,n,sizeof(int),cmp); qsort(b,m,sizeof(int),cmp); memcpy(b0,b,sizeof b);
    /* reference: size of multiset intersection */
    int cA[16]={0},cB[16]={0},inter=0; for(int i=0;i<n;i++)cA[a[i]+2]++; for(int i=0;i<m;i++)cB[b[i]+2]++;
    for(int v=0;v<16;v++) inter+= cA[v]<cB[v]?cA[v]:cB[v];
    partition_B(a,n,b,m);
    int cB2[16]={0}; for(int i=0;i<m;i++)cB2[b[i]+2]++;
    int ok=1; for(int v=0;v<16;v++) if(cB2[v]!=cB[v]) ok=0;           /* B kept as a multiset */
    int f[16]={0}; for(int i=0;i<inter;i++) f[b[i]+2]++;                 /* front block == min(cA,cB) per value */
    for(int v=0;v<16;v++) if(f[v]!=(cA[v]<cB[v]?cA[v]:cB[v])) ok=0;
    if(!ok) fails++;
  }
  printf("fails=%d\n",fails);
  return 0;}
