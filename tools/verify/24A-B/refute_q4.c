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
int number_returns(int* arr, int size)
{
   int i, run = 1, best = 1;
   if (size == 0)
      return 0;
   merge_sort(arr, 0, size - 1);
   for (i = 1; i < size; i++)
   {
      if (arr[i] == arr[i - 1])
         run++;
      else
         run = 1;
      if (run > best)
         best = run;
   }
   return best;
}

int main(){int bad=0;for(int t=0;t<500000;t++){int n=rnd()%11;int a[11];for(int i=0;i<n;i++)a[i]=(int)(rnd()%5)-2;int best=0;for(int i=0;i<n;i++){int c=0;for(int j=0;j<n;j++)if(a[j]==a[i])c++;if(c>best)best=c;}
 if(best!=number_returns(a,n))bad++;}
 int e[19]={1,2,-3005,2,3,1,-1000,3,7,-11,2,15,2,3,90,7,2,2,1000};printf("q4 bad=%d ex=%d\n",bad,number_returns(e,19));
 for(int n=1<<20;n<=1<<22;n*=2){int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%1000;double t0=now();number_returns(a,n);printf("n=%d t=%.3f\n",n,now()-t0);}return 0;}