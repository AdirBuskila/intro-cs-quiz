#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <time.h>
static unsigned long long rs=88172645463325252ULL;
static unsigned rnd(void){rs^=rs<<13;rs^=rs>>7;rs^=rs<<17;return (unsigned)(rs>>11);}
static void ms_(int*a,int lo,int hi){ if(lo>=hi)return; int m=(lo+hi)/2; ms_(a,lo,m); ms_(a,m+1,hi); int n=hi-lo+1; int*t=malloc(n*sizeof(int)); int i=lo,j=m+1,k=0; while(i<=m&&j<=hi)t[k++]=a[i]<=a[j]?a[i++]:a[j++]; while(i<=m)t[k++]=a[i++]; while(j<=hi)t[k++]=a[j++]; memcpy(a+lo,t,n*sizeof(int)); free(t);}
void merge_sort(int*a,int lo,int hi){ms_(a,lo,hi);}
int binary_search(int*a,int n,int x){int l=0,h=n-1;while(l<=h){int m=(l+h)/2;if(a[m]==x)return m;if(a[m]<x)l=m+1;else h=m-1;}return -1;}
static double now(void){return (double)clock()/CLOCKS_PER_SEC;}
int digits_parity(int n)
{
   if (n == 0)
      return 1;
   if (n % 10 % 2 != 0)        // even position (0, 2, ...) must hold an even digit
      return 0;
   n = n / 10;
   if (n == 0)
      return 1;
   if (n % 10 % 2 == 0)        // odd position (1, 3, ...) must hold an odd digit
      return 0;
   return digits_parity(n / 10);
}

static int ref(long long n){int pos=0;if(n==0)return 1;while(n>0){int d=n%10;if(pos%2==0&&d%2!=0)return 0;if(pos%2==1&&d%2==0)return 0;n/=10;pos++;}return 1;}
int main(){int bad=0;long ones=0;for(int n=0;n<3000000;n++){int r=ref(n);ones+=r;if(r!=digits_parity(n)){bad++;if(bad<5)printf("DIFF %d\n",n);}}
 printf("q2 tested 0..3e6 ones=%ld bad=%d examples 43418->%d 343518->%d\n",ones,bad,digits_parity(43418),digits_parity(343518));return 0;}