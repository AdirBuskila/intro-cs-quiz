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
int bsx(int*a,int n,int x){return binary_search(a,n,x)>=0;}
void search_in_array(int* arr1, int* arr2, int size)
{
   int* temp=(int*)malloc(size*sizeof(int));
   assert(temp);
   for(int i=0;i<size;i++)
      temp[i]=arr1[i];
   merge_sort(temp,0,size-1);
   for(int i=0;i<size;i++)
      arr2[i]=bsx(temp,size,arr2[i]);
   free(temp);
}

int main(){int bad=0;for(int t=0;t<200000;t++){int n=1+rnd()%9;int a[9],b[9],o[9];int pool[30];for(int i=0;i<30;i++)pool[i]=i-15;for(int i=29;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}
 for(int i=0;i<n;i++)a[i]=pool[i];for(int i=29;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}for(int i=0;i<n;i++){b[i]=pool[i];int f=0;for(int j=0;j<n;j++)if(a[j]==b[i])f=1;o[i]=f;}
 int a0[9];memcpy(a0,a,n*4);search_in_array(a,b,n);if(memcmp(b,o,n*4)||memcmp(a,a0,n*4))bad++;}
 printf("q2 VAR_01 bad=%d\n",bad);return 0;}