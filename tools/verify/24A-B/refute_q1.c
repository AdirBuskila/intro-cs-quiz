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

int main(){int bad=0;for(int t=0;t<300000;t++){int n=rnd()%10;int a[10];for(int i=0;i<n;i++)a[i]=rnd()%(n+1);int ns=-1;int*r=valueNotInArray(a,n,&ns);
 int exp[12],c=0;for(int v=0;v<=n;v++){int f=0;for(int i=0;i<n;i++)if(a[i]==v)f=1;if(!f)exp[c++]=v;}
 if(ns!=c||memcmp(r,exp,c*4))bad++;free(r);}
 int a[6]={0,1,1,0,3,5},ns;int*r=valueNotInArray(a,6,&ns);printf("q1 bad=%d ex size=%d: %d %d %d\n",bad,ns,r[0],r[1],r[2]);int*e=valueNotInArray(a,0,&ns);printf("empty: size=%d val=%d\n",ns,e[0]);
 int n=1<<22;int*b=malloc(n*4);for(int i=0;i<n;i++)b[i]=rnd()%(n+1);double t0=now();free(valueNotInArray(b,n,&ns));double t1=now()-t0;n*=2;b=realloc(b,n*4);for(int i=0;i<n;i++)b[i]=rnd()%(n+1);t0=now();free(valueNotInArray(b,n,&ns));printf("t=%.3f t2=%.3f\n",t1,now()-t0);return 0;}