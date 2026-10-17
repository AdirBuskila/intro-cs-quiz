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
int bs_a(int key, int* a, int n)
{ //assume: n is even
       int low, high, mid;
       low = 0;
       high = n - 1;
       while (low <= high)
       {
              mid = (low + high) / 2;
mid = mid - (mid % 2); // mid is even index
              if (key == a[mid])
                     return mid;
              if (key == a[mid + 1])
                     return mid + 1;
              else if (key < a[mid])
                     high = mid - 1;
              else
                     low = mid + 2;
       }
       return -1;
}
int main(){int a[10]={1,2,7,3,11,15,90,23,1000,722};int low=0,high=9,mid=(low+high)/2;mid-=mid%2;printf("mid=%d a[mid]=%d low_next=%d\n",mid,a[mid],mid+2);return 0;}