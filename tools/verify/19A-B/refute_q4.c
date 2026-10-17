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
int is_rotation(int *a, int *b, int n)
{
   int i, k = -1;
   if (n == 0)
      return 1;
   for (i = 0; i < n; i++)          // where did a[0] move to? (values are distinct)
      if (b[i] == a[0])
         k = i;
   if (k == -1)
      return 0;
   for (i = 0; i < n; i++)          // a rotation by k cells puts a[i] at b[(i+k)%n]
      if (b[(i + k) % n] != a[i])
         return 0;
   return 1;
}

int main(){int bad=0,yes=0;for(int t=0;t<500000;t++){int n=rnd()%8;int pool[12];for(int i=0;i<12;i++)pool[i]=i;for(int i=11;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}
 int a[8],b[8];for(int i=0;i<n;i++)a[i]=pool[i];int mode=rnd()%4;
 if(mode<2){int k=rnd()%(n+1);for(int i=0;i<n;i++)b[(i+k)%(n?n:1)]=a[i];if(mode==1&&n>1){int i=rnd()%n,j=rnd()%n;int x=b[i];b[i]=b[j];b[j]=x;}}
 else if(mode==2){for(int i=0;i<n;i++)b[i]=a[i];if(n){b[rnd()%n]=pool[8+rnd()%4];}}
 else{int p2[12];memcpy(p2,pool,sizeof p2);for(int i=11;i>0;i--){int j=rnd()%(i+1);int x=p2[i];p2[i]=p2[j];p2[j]=x;}for(int i=0;i<n;i++)b[i]=p2[i];}
 int ref=(n==0);for(int k=0;k<n;k++){int ok=1;for(int i=0;i<n;i++)if(b[(i+k)%n]!=a[i])ok=0;if(ok)ref=1;}
 yes+=ref;if(ref!=is_rotation(a,b,n)){bad++;}}
 int a[5]={5,2,8,4,1},b[5]={4,1,5,2,8};printf("q4 bad=%d yes=%d ex=%d\n",bad,yes,is_rotation(a,b,5));return 0;}