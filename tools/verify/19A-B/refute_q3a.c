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

int main(){int bad=0;for(int t=0;t<300000;t++){int n=1+rnd()%9;int a[9];for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+6))-3;
 int ref=0;for(int v=0;v<n;v++){int f=0;for(int i=0;i<n;i++)if(a[i]==v)f=1;ref+=f;}
 if(ref!=count_in_range(a,n)){bad++;}}
 int e[7]={1,1,5,0,9999,123456,0};printf("q3a bad=%d example=%d\n",bad,count_in_range(e,7));
 int n=1<<22;int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%(2*n);double t0=now();count_in_range(a,n);double t1=now()-t0;n=1<<23;a=realloc(a,n*4);for(int i=0;i<n;i++)a[i]=rnd()%(2*n);t0=now();count_in_range(a,n);printf("t(4M)=%.3f t(8M)=%.3f\n",t1,now()-t0);return 0;}