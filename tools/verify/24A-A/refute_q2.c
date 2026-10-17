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
int str_chardist(char* str) {
   int dists[26]={0};
   int len,i,maxdist;
   len=strlen(str);
   maxdist=0;
   for (i=0;i<len-1;i++) {
      dists[abs(str[i]-str[i+1])]++;
   }
   for (i=1;i<26;i++) {
      if (dists[i]>dists[maxdist]) maxdist = i;
   }
   return maxdist;
}

int cd_a(char* str) {
   int dists[26]={0};
   int len,i,maxdist;
   len=strlen(str);
   maxdist=0;
   for (i=0;i<len-1;i++) {
dists[abs(str[i]-str[i+1])]++;
   }
   for (i=1;i<26;i++) {
      if (dists[i]>dists[maxdist]) maxdist = i;
   }
   return maxdist;
}
int cd_bug(char* str) {
   int dists[26]={0};
   int len,i,maxdist;
   len=strlen(str);
   maxdist=0;
   for (i=0;i<len-1;i++) {
      dists[abs(str[i]-str[i+1])]++;
   }
   for (i=1;i<26;i++) {
      if (dists[i]<dists[maxdist]) maxdist = i;
   }
   return maxdist;
}
int cd_ord(char* str) {
   int len,i,maxdist;
   int dists[26]={0};
   maxdist=0;
   len=strlen(str);
   for (i=0;i<len-1;i++) {
      dists[abs(str[i]-str[i+1])]++;
   }
   for (i=1;i<26;i++) {
      if (dists[i]>dists[maxdist]) maxdist = i;
   }
   return maxdist;
}
typedef int(*F)(char*);
int main(){F fs[6]={str_chardist,cd_a,cd_bug,cd_ord};const char*nm[4]={"official","fill a","findbug(<)","order-permuted decls+maxdist=0 before strlen"};int bad[4]={0};
 for(int t=0;t<200000;t++){char s[20];int len=2+rnd()%15,al=2+rnd()%25;for(int i=0;i<len;i++)s[i]='a'+rnd()%al;s[len]=0;int c[26]={0};for(int i=0;i+1<len;i++)c[abs(s[i]-s[i+1])]++;int mx=0;for(int i=0;i<26;i++)if(c[i]>mx)mx=c[i];
  for(int k=0;k<4;k++){int r=fs[k](s);if(r<0||r>25||c[r]!=mx)bad[k]++;}}
 for(int k=0;k<4;k++)printf("q2 %s wrong on %d/200000\n",nm[k],bad[k]);
 printf("dists[2] for acefhyz: ");{char*s="acefhyz";int c[26]={0};for(int i=0;i+1<7;i++)c[abs(s[i]-s[i+1])]++;printf("%d; official=%d bug=%d\n",c[2],str_chardist(s),cd_bug(s));}return 0;}
