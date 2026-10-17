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
int check_parity(int* arr, int size)
{
   if(size==0)
      return 0;
   if((arr[size-1]+size)%2==0)
      return 1+check_parity(arr,size-1);
   return check_parity(arr,size-1);
}

int main(){int bad=0;for(int t=0;t<300000;t++){int n=rnd()%11;int a[11];for(int i=0;i<n;i++)a[i]=(int)(rnd()%41)-20;int c=0;for(int i=0;i<n;i++){int pv=((a[i]%2)+2)%2,pi=i%2;if(pv!=pi)c++;}if(c!=check_parity(a,n))bad++;}
 int e1[7]={8,7,22,-5,14,3,2},e2[6]={8,8,6,5,51,7};printf("q1 bad=%d ex %d %d\n",bad,check_parity(e1,7),check_parity(e2,6));return 0;}