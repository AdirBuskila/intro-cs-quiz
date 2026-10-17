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

static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){int bad=0,yes=0;for(int t=0;t<500000;t++){int n=rnd()%8,m=rnd()%8;int p[8],q[8];for(int i=0;i<n;i++)p[i]=1+rnd()%12;for(int i=0;i<m;i++)q[i]=-1-(int)(rnd()%12);qsort(p,n,4,cmp);qsort(q,m,4,cmp);
 int ref=0;for(int i=0;i<n;i++)for(int j=0;j<m;j++)if(p[i]+q[j]==0)ref=1;yes+=ref;if(ref!=is_zero(p,n,q,m))bad++;}
 int a[4]={1,4,8,11},b[5]={-20,-15,-11,-3,-2},c[5]={-20,-15,-12,-3,-2};printf("q3 bad=%d yes=%d ex %d %d\n",bad,yes,is_zero(a,4,b,5),is_zero(a,4,c,5));
 {int n=1<<19;int*p=malloc(n*4),*q=malloc(n*4);for(int i=0;i<n;i++){p[i]=2*i+2;q[i]=-(2*(n-1-i)+1);}double t0=now();int r=is_zero(p,n,q,n);printf("worst-case-ish n=%d r=%d t=%.3f (deep recursion)\n",n,r,now()-t0);}return 0;}