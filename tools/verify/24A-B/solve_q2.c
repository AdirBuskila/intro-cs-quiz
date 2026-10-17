/* 24A-B Q2 solver harness: find_two_digits. Printed examples + random vs brute force. */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
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
/* SOLUTION END */
static int ref(const char*s){int bestv=-1,bestc=-1;for(int v=0;v<100;v++){int c=0;for(int i=0;s[i]&&s[i+1];i++)if((s[i]-'0')==v/10&&(s[i+1]-'0')==v%10)c++; if(c>bestc){bestc=c;bestv=v;}}return bestv;}
int main(void){
  const char*ex[]={"12121212121","21212121212","222211","0001","1234","426144"}; int exp[]={12,12,22,0,12,14};
  for(int i=0;i<6;i++)printf("ex \"%s\" -> %d (expect %d)\n",ex[i],find_two_digits((char*)ex[i]),exp[i]);
  srand(242); int bad=0,T=20000; char s[40];
  for(int t=0;t<T;t++){int n=2+rand()%30, base=2+rand()%9; for(int i=0;i<n;i++)s[i]='0'+rand()%base; s[n]=0; if(find_two_digits(s)!=ref(s))bad++;}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
