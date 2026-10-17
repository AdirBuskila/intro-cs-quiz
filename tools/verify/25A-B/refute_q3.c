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
int word_in_text(char* text, char* word)
{
   int count[26]={0};
   while(*text){
      count[*text-'a']++;
      text++;
   }
   while(*word){
      if(--count[*word-'a']<0)
         return 0;
      word++;
   }
   return 1;
}

int main(){int bad=0;for(int t=0;t<500000;t++){char tx[14],w[10];int al=(rnd()%2)?4:26;int lt=rnd()%13,lw=rnd()%8;for(int i=0;i<lt;i++)tx[i]='a'+rnd()%al;tx[lt]=0;for(int i=0;i<lw;i++)w[i]='a'+rnd()%al;w[lw]=0;
 int ct[26]={0},ok=1;for(int i=0;i<lt;i++)ct[tx[i]-'a']++;for(int i=0;i<lw;i++)if(ct[w[i]-'a']-->0);else ok=0;
 /* independent ref: for each letter, occurrences in word <= occurrences in text */ int ok2=1;for(int c=0;c<26;c++){int a=0,b=0;for(int i=0;i<lt;i++)a+=tx[i]=='a'+c;for(int i=0;i<lw;i++)b+=w[i]=='a'+c;if(b>a)ok2=0;}
 if(ok2!=word_in_text(tx,w))bad++;}
 const char*ws[6]={"glue","glee","client","electing","inciting","intelligence"};printf("q3 bad=%d ex:",bad);for(int i=0;i<6;i++)printf(" %d",word_in_text("intelligence",(char*)ws[i]));putchar(10);return 0;}