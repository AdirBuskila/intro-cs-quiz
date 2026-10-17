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
void sq_a(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            str[pos++] = str[i];
count[str[i] - 'a'] = 0;
        }
    }
    str[pos] = '\0';
}
void sq_b(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            str[pos++] = str[i];
count[str[i] - 'a']--;
        }
    }
    str[pos] = '\0';
}
void sq_c(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            str[pos++] = str[i];
count[str[i] - 'a'] = 3;
        }
    }
    str[pos] = '\0';
}
void sq_d(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            str[pos++] = str[i];
pos++;
        }
    }
    str[pos] = '\0';
}
void sq_ord1(char* str)
{
    int count[26] = { 0 };
    int i, pos = 0;
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 3)
        {
            count[str[i] - 'a'] = 0;
            str[pos++] = str[i];
        }
    }
    str[pos] = '\0';
}
void sq_bug(char* str)
{
    int i, pos = 0;
    int count[26] = { 0 };
    int len = strlen(str);
    for (i = 0; i < len; ++i)
        count[str[i] - 'a']++;
    for (i = 0; i < len; ++i){
        if (count[str[i] - 'a'] == 2)
        {
            str[pos++] = str[i];
            count[str[i] - 'a'] = 0;
        }
    }
    str[pos] = '\0';
}
typedef void(*F)(char*);
static void ref(const char*s,char*out){int c[26]={0};for(const char*p=s;*p;p++)c[*p-'a']++;int k=0;int seen[26]={0};for(const char*p=s;*p;p++)if(c[*p-'a']==3&&!seen[*p-'a']){seen[*p-'a']=1;out[k++]=*p;}out[k]=0;}
int main(){F fs[6]={sq_a,sq_b,sq_c,sq_d,sq_ord1,sq_bug};const char*nm[6]={"fill a","fill b(--)","fill c(=3)","fill d(pos++)","order-swapped decls+reset-before-copy","findbug(==2)"};
 int bad[6]={0};for(int t=0;t<200000;t++){char s[24],w[24],r[24];int len=rnd()%20,al=2+rnd()%6;for(int i=0;i<len;i++)s[i]='a'+rnd()%al;s[len]=0;ref(s,r);for(int f=0;f<6;f++){strcpy(w,s);fs[f](w);if(strcmp(w,r))bad[f]++;}}
 for(int f=0;f<6;f++)printf("q2 %s: wrong on %d/200000\n",nm[f],bad[f]);
 char w[32]="dbcabafacbcbdd";sq_a(w);printf("sample=%s\n",w);return 0;}
