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
int is_sum (int* a, int* b, int n, int d)
{
  int i;
  merge_sort(b, 0, n-1);
  for(i=0; i<n; i++)
  {
    if(binary_search(b, n, d-a[i]) >=0 )
     return 1;
  }
  return 0;
}

static int ref(int*a,int*b,int n,int d){for(int i=0;i<n;i++)for(int j=0;j<n;j++)if(a[i]+b[j]==d)return 1;return 0;}
int main(){int bad=0,tot=0;
 for(int t=0;t<200000;t++){int n=rnd()%9;int a[9],b[9],b2[9];for(int i=0;i<n;i++){a[i]=(int)(rnd()%13)-6;b[i]=(int)(rnd()%13)-6;b2[i]=b[i];}int d=(int)(rnd()%25)-12;
  int r=ref(a,b,n,d);int g=is_sum(a,b,n,d);tot++;if(r!=!!g){bad++;if(bad<5)printf("DIFF n=%d d=%d\n",n,d);}
  /* sorted b is a permutation of b */ int s1[9],s2[9];memcpy(s1,b,n*4);memcpy(s2,b2,n*4);} 
 printf("q5 tests=%d bad=%d\n",tot,bad);
 for(int n=1<<16;n<=1<<18;n*=2){int*a=malloc(n*4),*b=malloc(n*4);for(int i=0;i<n;i++){a[i]=rnd()%1000000*2;b[i]=rnd()%1000000*2;}double t0=now();is_sum(a,b,n,1);printf("n=%d t=%.3f\n",n,now()-t0);}
 return 0;}
