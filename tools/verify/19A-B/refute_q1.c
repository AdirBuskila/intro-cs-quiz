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
int fn (int x, int y)
{
        if (y==0)
                return x;
        if (y<0)
                return fn(x, y+1) - 1;
        return fn(x, y-1) + 1;
}
int main(){int bad=0;for(int x=-30;x<=30;x++)for(int y=-30;y<=30;y++)if(fn(x,y)!=x+y)bad++;int o[5];printf("q1 bad(x+y)=%d fn(5,3)=%d fn(5,-3)=%d; other options: x-y mismatches=%d x*(y+1) mism=%d",bad,fn(5,3),fn(5,-3),fn(5,3)!=2,fn(5,3)!=20);putchar(10);return 0;}