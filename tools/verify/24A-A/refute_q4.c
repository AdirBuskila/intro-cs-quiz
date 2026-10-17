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
int bs_b(int key, int* a, int n)
{ //assume: n is even
       int low, high, mid;
       low = 0;
       high = n - 1;
       while (low <= high)
       {
              mid = (low + high) / 2;
mid = mid + (mid % 2); // mid is even index
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
int bs_c(int k,int*a,int n){return -1;}
int bs_d(int k,int*a,int n){return -1;}
int bs_bug(int key, int* a, int n)
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
              else if (key > a[mid])
                     high = mid - 1;
              else
                     low = mid + 2;
       }
       return -1;
}
int bs_ord1(int key, int* a, int n)
{ //assume: n is even
       int low, high, mid;
       high = n - 1;
       low = 0;
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
int bs_ord2(int key, int* a, int n)
{ //assume: n is even
       int low, high, mid;
       low = 0;
       high = n - 1;
       while (low <= high)
       {
              mid = (low + high) / 2;
              mid = mid - (mid % 2); // mid is even index
              if (key == a[mid + 1])
                     return mid + 1;
              if (key == a[mid])
                     return mid;
              else if (key < a[mid])
                     high = mid - 1;
              else
                     low = mid + 2;
       }
       return -1;
}
typedef int(*F)(int,int*,int);
int main(){F fs[8]={bs_a,bs_b,bs_c,bs_d,bs_bug,bs_ord1,bs_ord2};const char*nm[7]={"fill a","fill b(+mid%2)","fill c(mid/2)","fill d(mid-1)","findbug(>)","order: low/high init swapped","order: equality checks swapped"};
 int bad[7]={0};for(int t=0;t<100000;t++){int n=2*(1+rnd()%7);int a[16];int v=(int)(rnd()%3);for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;}for(int i=0;i<n;i+=2)if(rnd()%2){int x=a[i];a[i]=a[i+1];a[i+1]=x;}
  int key=(int)(rnd()%(v+4));int e=0;for(int i=0;i<n;i++)if(a[i]==key)e=1;
  for(int k=0;k<7;k++){if(k==2||k==3)continue;int r=fs[k](key,a,n);if((r>=0)!=e)bad[k]++;}}
 for(int k=0;k<7;k++)if(k==2||k==3)printf("q4 %s: not run (may read a[-1]/loop)\n",nm[k]);else printf("q4 %s wrong on %d/100000\n",nm[k],bad[k]);
 {int a[10]={1,2,7,3,11,15,90,23,1000,722};printf("90 official=%d bug=%d\n",bs_a(90,a,10),bs_bug(90,a,10));}return 0;}
