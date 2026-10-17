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
void sort_two_parts(int *a, int n)
{
   int i, j, k, mid = 1;
   int *temp;
   while (mid < n && a[mid - 1] <= a[mid])   // the second part starts at the first descent
      mid++;
   if (mid >= n)                             // no descent: already sorted
      return;
   temp = (int*)malloc(n * sizeof(int));
   i = 0; j = mid; k = 0;
   while (i < mid && j < n)                  // merge the two sorted parts
   {
      if (a[i] <= a[j])
         temp[k++] = a[i++];
      else
         temp[k++] = a[j++];
   }
   while (i < mid)
      temp[k++] = a[i++];
   while (j < n)
      temp[k++] = a[j++];
   for (i = 0; i < n; i++)
      a[i] = temp[i];
   free(temp);
}

static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){int bad=0;for(int t=0;t<500000;t++){int n=rnd()%10;int a[10],r[10];int m=n?rnd()%(n+1):0;for(int i=0;i<n;i++)a[i]=(int)(rnd()%7)-3;qsort(a,m,4,cmp);qsort(a+m,n-m,4,cmp);memcpy(r,a,n*4);qsort(r,n,4,cmp);sort_two_parts(a,n);if(memcmp(a,r,n*4))bad++;}
 int e[6]={1,1,4,8,-2,3};sort_two_parts(e,6);printf("q5 bad=%d ex=%d %d %d %d %d %d\n",bad,e[0],e[1],e[2],e[3],e[4],e[5]);
 for(int n=1<<21;n<=1<<22;n*=2){int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%1000;qsort(a,n/2,4,cmp);qsort(a+n/2,n/2,4,cmp);double t0=now();sort_two_parts(a,n);printf("n=%d t=%.3f\n",n,now()-t0);}return 0;}