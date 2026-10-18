#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int countChar(char*s,char c){int n=0;for(int i=0;s[i];i++)if(s[i]==c)n++;return n;}
int isPal(char*s){int i=0,j=(int)strlen(s)-1;while(i<j){if(s[i]!=s[j])return 0;i++;j--;}return 1;}
int commonSum(char*s,int ge){int cnt[19]={0},best=0,i;for(i=0;s[i+1];i++)cnt[(s[i]-'0')+(s[i+1]-'0')]++;for(i=1;i<19;i++)if(ge?cnt[i]>=cnt[best]:cnt[i]>cnt[best])best=i;return best;}
void keep(char*s,int mode){int cnt[26]={0},w=0;for(int i=0;s[i];i++)cnt[s[i]-'a']++;for(int i=0;s[i];i++)if(cnt[s[i]-'a']>1){s[w++]=s[i];if(mode==0)cnt[s[i]-'a']--;else if(mode==1)cnt[s[i]-'a']=0;else if(mode==2)cnt[s[i]-'a']++;else cnt[s[i]-'a']=2;}s[w]=0;}
void collapse(char*s,int m){int w=0;for(int i=0;s[i];i++){int c; if(m==0)c=(w==0||s[i]==s[w-1]);else if(m==1)c=(s[i]!=s[w]);else if(m==2)c=(w==0||s[i]!=s[0]);else c=(w==0||s[i]!=s[w-1]);if(c)s[w++]=s[i];}s[w]=0;}
int main(){
{char s[]="abc";printf("C01 %d %d ",(int)sizeof(s),(int)strlen(s));}
printf("%c ",'a'+2);
{char s[10]="hi";printf("%d %d ",(int)sizeof(s),(int)strlen(s));}
{char s[]="banana";s[4]=0;printf("%d ",(int)strlen(s));}
printf("%d %d\n",'a',(int)sizeof("a"));
{char t[6]="XXXXX";t[0]='o';t[1]='k';t[2]=0;printf("t=%s\n",t);}
printf("C02 %d ",countChar("mississippi",'s'));
{char s[]="abc";for(int i=0;i<=(int)strlen(s);i++)printf("%d ",s[i]);}
printf("\nC03 %d %c%c\n",'7'-'0'+1,'a'+3,'z'-2);
{char s[20]="ab";strcpy(s,"xyz");strcat(s,"!");printf("C04 %s %d\n",s,(int)strlen(s));}
{char s[]="abcde";int i=0,j=(int)strlen(s)-1,sw=0;while(i<j){char t=s[i];s[i]=s[j];s[j]=t;i++;j--;sw++;}printf("C05 %d ",sw);}
{char s[]="abcd";int i=0,j=3;while(i<j){s[i]=s[j];s[j]=s[i];i++;j--;}printf("%s ",s);}
printf("%d %d %d %d\n",isPal("abba"),isPal("abca"),isPal("a"),isPal(""));
{char s[]="abracadabra";int cnt[26]={0};for(int i=0;s[i];i++)cnt[s[i]-'a']++;printf("C06 %d ",cnt[0]);}
{char s[]="bbaa";int cnt[26]={0},best=0;for(int i=0;s[i];i++)cnt[s[i]-'a']++;for(int i=1;i<26;i++)if(cnt[i]>cnt[best])best=i;printf("%c\n",'a'+best);}
{char s[]="abdeg";int cnt[26]={0};for(int i=0;s[i+1];i++)cnt[abs(s[i]-s[i+1])]++;printf("C07 %d ",cnt[1]);}
printf("%d ",(('0'-'0')*10+('7'-'0')));
printf("%d %d ",commonSum("1928374",0),commonSum("1928374",1));
{char s[]="3412";int cnt[100]={0},best=0;for(int i=0;s[i+1];i++)cnt[(s[i]-'0')*10+(s[i+1]-'0')]++;for(int i=1;i<100;i++)if(cnt[i]>cnt[best])best=i;printf("%d\n",best);}
{char s[]="a b  c";int w=0;for(int i=0;s[i];i++)if(s[i]!=' ')s[w++]=s[i];printf("C08 [%s] ",s);}
{char s[]="xaxbx";char*r=s,*w=s;while(*r){if(*r!='x')*w++=*r;r++;}*w=0;printf("%s\n",s);}
for(int m=0;m<4;m++){char s[]="abcabdd",u[]="aaab";keep(s,m);keep(u,m);printf("keep%d %s %s\n",m,s,u);}
for(int m=0;m<4;m++){char s[]="aabccc",u[]="abba";collapse(s,m);collapse(u,m);printf("col%d %s %s\n",m,s,u);}
}
