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
int find_two_digits(char *number)
{
   int count[100] = {0};
   int i, best = 0;
   for (i = 0; number[i] != '\0' && number[i + 1] != '\0'; i++)
      count[(number[i] - '0') * 10 + (number[i + 1] - '0')]++;
   for (i = 1; i < 100; i++)
      if (count[i] > count[best])
         best = i;
   return best;
}

int main(){int bad=0;for(int t=0;t<500000;t++){int len=2+rnd()%11;int al=(rnd()%2)?3:10;char s[16];for(int i=0;i<len;i++)s[i]='0'+rnd()%al;s[len]=0;
 int cnt[100]={0};for(int i=0;i+1<len;i++)cnt[(s[i]-'0')*10+s[i+1]-'0']++;int best=-1,bc=-1;for(int v=0;v<100;v++)if(cnt[v]>bc){bc=cnt[v];best=v;}
 if(best!=find_two_digits(s)){bad++;if(bad<4)printf("DIFF %s\n",s);}}
 printf("q2 bad=%d ex: %d %d %d %d %d %d\n",bad,find_two_digits("12121212121"),find_two_digits("21212121212"),find_two_digits("222211"),find_two_digits("0001"),find_two_digits("1234"),find_two_digits("426144"));
 int n=1<<24;char*s=malloc(n+1);for(int i=0;i<n;i++)s[i]='0'+rnd()%10;s[n]=0;double t0=now();find_two_digits(s);double t1=now()-t0;s[n/2]=0;t0=now();find_two_digits(s);printf("t(16M)=%.3f t(8M)=%.3f\n",t1,now()-t0);return 0;}