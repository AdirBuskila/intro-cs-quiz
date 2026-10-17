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

int main(){int bad=0,zero=0;for(int t=0;t<300000;t++){int n=1+rnd()%9;int a[9];for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2;
 int ref=-1;for(int p=0;p<n&&ref<0;p++){int ok=1;for(int v=0;v<n;v++){int inall=0,inpre=0;for(int i=0;i<n;i++)if(a[i]==v){inall=1;if(i<=p)inpre=1;}if(inall&&!inpre)ok=0;}if(ok)ref=p;}
 int g=min_prefix_index(a,n);int none=1;for(int i=0;i<n;i++)if(a[i]>=0&&a[i]<n)none=0;if(none)zero++;
 if(ref!=g){bad++;if(bad<5)printf("DIFF n=%d ref=%d got=%d\n",n,ref,g);}}
 int e1[6]={1,9999,1,4,2,1},e2[5]={2,8888,2,5,2};printf("q3b bad=%d (no-in-range cases=%d) ex=%d,%d\n",bad,zero,min_prefix_index(e1,6),min_prefix_index(e2,5));
 printf("n=0 returns %d\n",min_prefix_index(e1,0));return 0;}