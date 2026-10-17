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

int pop(unsigned x){int c=0;while(x){c+=x&1;x>>=1;}return c;}
int f_b(int num){return num ? num%2 + f_b(num/10) : 0;}
int f_c(int num){return num>1 ? num/2 + f_c(num%2) : num/2;}
int f_d(int num){return num ? 1 + f_d(num/2) : 0;}
int f_a(int num){return num ? num%2 + f_a(num/2) : 0;}
int f_v2(int num){if(num==1)return 1;return num % 2 + f_v2(num / 2);}
int main(){int bad[5]={0};for(int n=1;n<200000;n++){int e=pop(n);if(f_a(n)!=e)bad[0]++;if(f_b(n)!=e)bad[1]++;if(n!=1&&f_c(n)!=e)bad[2]++;if(f_d(n)!=e)bad[3]++;if(f_v2(n)!=e)bad[4]++;}
 printf("q3 wrong counts a,b,c,d,v2: %d %d %d %d %d ; 1000=%d 255=%d f_b(6)=%d\n",bad[0],bad[1],bad[2],bad[3],bad[4],f_a(1000),f_a(255),f_b(6));return 0;}
