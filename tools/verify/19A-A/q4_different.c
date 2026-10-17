#include <stdio.h>
#include <stdlib.h>
int check_if_different_elements(int *a, int *b, int n)
{
   int ia=0, ib=n-1;

   while( ia < n  &&  ib >=0 )
{
        if (a[ia] == b[ib])
            return 0;
        if (a[ia] < b[ib])
            ia++;
        else
            ib--;
    }
     return 1;
}
static int cmp_up(const void*x,const void*y){return *(int*)x-*(int*)y;}
static int cmp_dn(const void*x,const void*y){return *(int*)y-*(int*)x;}
int main(void){
  srand(7); int fails=0;
  for(int it=0;it<200000;it++){
    int n=1+rand()%8; int a[8],b[8];
    for(int i=0;i<n;i++){a[i]=rand()%12-3;b[i]=rand()%12-3;}
    qsort(a,n,sizeof(int),cmp_up); qsort(b,n,sizeof(int),cmp_dn);
    int ref=1; for(int i=0;i<n;i++) for(int j=0;j<n;j++) if(a[i]==b[j]) ref=0;
    if(check_if_different_elements(a,b,n)!=ref) fails++;
  }
  printf("fails=%d\n",fails);
  return 0;}
