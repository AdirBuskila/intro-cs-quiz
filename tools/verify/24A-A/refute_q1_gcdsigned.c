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
int gcd(int a,int b){while(b){int t=a%b;a=b;b=t;}return a;}
int lcm_a(int a,int b){return abs(a*b/gcd(a,b));}
int lcm_b(int a,int b){return abs(a*b*gcd(a,b));}
int lcm_c(int a,int b){return a*b/gcd(a,b);}
int lcm_d(int a,int b){return abs(a+b)/gcd(a,b);}
int lcm_bug(int a,int b){return abs(a*b*gcd(a,b));}
int lcm_nobad(int a,int b){return a*b/gcd(a,b);}

int main(){int bad[6]={0};const char*nm[6]={"a","b","c(no abs)","d","bug(*)","no-abs"};
 for(int a=-60;a<=60;a++)for(int b=-60;b<=60;b++){if(!a||!b)continue;int e=0;for(int m=1;;m++)if(m%a==0&&m%b==0){e=m;break;}
  int g[6]={lcm_a(a,b),lcm_b(a,b),lcm_c(a,b),lcm_d(a,b),lcm_bug(a,b),lcm_nobad(a,b)};for(int k=0;k<6;k++)if(g[k]!=e)bad[k]++;}
 for(int k=0;k<6;k++)printf("gcd(signed euclid): option %s wrong on %d/14400 pairs\n",nm[k],bad[k]);
 printf("lcm(12,18)=%d; no-abs(-4,6)=%d; bug(4,6)=%d\n",lcm_a(12,18),lcm_nobad(-4,6),lcm_bug(4,6));return 0;}
