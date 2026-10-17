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
static int swaps=0;
void swap(int*x,int*y){int t=*x;*x=*y;*y=t;swaps++;}
void sortpairs(int* a, int size)
{
    int i;
    for (i = 1; i < size/2 ; i += 2)
        swap(a + i, a + size - i);
}
void sortpairs_bug(int* a, int size)
{
    int i;
    for (i = 1; i < size ; i += 2)
        swap(a + i, a + size - i);
}
void sortpairs_rev(int*a,int size){int i;for(i=0;i<size/2;i++)swap(a+i,a+size-1-i);}
static int valid(int*a,int*orig,int n){
 int s=a[0]+a[1];for(int i=0;i<n;i+=2)if(a[i]+a[i+1]!=s)return 0;int x[40],y[40];memcpy(x,a,n*4);memcpy(y,orig,n*4);
 for(int i=0;i<n;i++)for(int j=i+1;j<n;j++){if(x[j]<x[i]){int t=x[i];x[i]=x[j];x[j]=t;}if(y[j]<y[i]){int t=y[i];y[i]=y[j];y[j]=t;}}return !memcmp(x,y,n*4);}
int main(){int bad=0,badb=0,badr=0,tot=0,swp12=-1;
 for(int t=0;t<100000;t++){int n=1+rnd()%10,sz=2*n,S=20+rnd()%10;int a[40],o[40];int x[20];for(int i=0;i<n;i++)x[i]=(int)(rnd()%(S/2+1));
  for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(x[j]<x[i]){int tt=x[i];x[i]=x[j];x[j]=tt;}
  for(int i=0;i<n;i++){a[i]=x[i];a[sz-1-i]=S-x[i];}
  memcpy(o,a,sz*4);tot++;
  swaps=0;sortpairs(a,sz);if(!valid(a,o,sz))bad++;if(sz==12&&swp12<0)swp12=swaps;
  memcpy(a,o,sz*4);sortpairs_bug(a,sz);if(!valid(a,o,sz))badb++;
  memcpy(a,o,sz*4);sortpairs_rev(a,sz);if(!valid(a,o,sz))badr++;}
 int e[6]={1,2,3,7,8,9};sortpairs(e,6);printf("q1 official invalid=%d/%d, bugged(i<size) invalid=%d, reverse-pitfall invalid=%d; sample after=%d,%d,%d,%d,%d,%d; swaps for size12=%d\n",bad,tot,badb,badr,e[0],e[1],e[2],e[3],e[4],e[5],swp12);
 int f[6]={1,2,3,7,8,9};sortpairs_bug(f,6);printf("bug sample after=%d,%d,%d,%d,%d,%d\n",f[0],f[1],f[2],f[3],f[4],f[5]);
 int g[6]={1,2,3,7,8,9};sortpairs_rev(g,6);printf("rev sample after=%d,%d,%d,%d,%d,%d\n",g[0],g[1],g[2],g[3],g[4],g[5]);return 0;}
