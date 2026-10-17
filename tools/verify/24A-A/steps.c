#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int gcd(int a,int b){while(b){int t=a%b;a=b;b=t;}return a<0?-a:a;}
int lcm(int a,int b){ return abs(a*b/gcd(a,b)); }
int lcm_bug(int a,int b){ return abs(a*b*gcd(a,b)); }
int lcm_noabs(int a,int b){ return a*b/gcd(a,b); }
int sc(char* str,int bug){ int dists[26]={0}; int len,i,maxdist; len=strlen(str); maxdist=0;
  for (i=0;i<len-1;i++) dists[abs(str[i]-str[i+1])]++;
  if(!bug){ for (i=1;i<26;i++) if (dists[i]>dists[maxdist]) maxdist = i; }
  else { for (i=1;i<26;i++) if (dists[i]<dists[maxdist]) maxdist = i; }
  printf("  dists[2]=%d dists[1]=%d\n",dists[2],dists[1]);
  return maxdist; }
int n1(int num){ return num ? num%2 + n1(num/2) : 0; }
int n1_bug(int num){ return num ? num%2 + n1_bug(num/10) : 0; }
int bs(int key,int*a,int n,int trace){ int low=0,high=n-1,mid;
  while(low<=high){ mid=(low+high)/2; mid=mid-(mid%2);
    if(trace)printf("  mid=%d a[mid]=%d\n",mid,a[mid]);
    if(key==a[mid])return mid; if(key==a[mid+1])return mid+1;
    else if(key<a[mid])high=mid-1; else low=mid+2;
    if(trace)printf("  low=%d high=%d\n",low,high);}
  return -1;}
int bs_bug(int key,int*a,int n){ int low=0,high=n-1,mid;
  while(low<=high){ mid=(low+high)/2; mid=mid-(mid%2);
    if(key==a[mid])return mid; if(key==a[mid+1])return mid+1;
    else if(key>a[mid])high=mid-1; else low=mid+2;}
  return -1;}
int main(void){
  printf("gcd(12,18)=%d lcm(12,18)=%d lcm(4,6)=%d lcm(-4,6)=%d lcm(3,-5)=%d\n",gcd(12,18),lcm(12,18),lcm(4,6),lcm(-4,6),lcm(3,-5));
  printf("noabs lcm(-4,6)=%d bug lcm(4,6)=%d\n",lcm_noabs(-4,6),lcm_bug(4,6));
  printf("sc ad=%d\n",sc("ad",0)); printf("sc acefhyz=%d\n",sc("acefhyz",0)); printf("sc bug acefhyz=%d\n",sc("acefhyz",1));
  printf("sc aab (dists[0]=1 dists[1]=1)=%d\n",sc("aab",0));
  printf("ones 6=%d 15=%d 1000=%d 255=%d bug6=%d bug15=%d\n",n1(6),n1(15),n1(1000),n1(255),n1_bug(6),n1_bug(15));
  int ex[]={1,2,7,3,11,15,90,23,1000,722};
  printf("key 90:\n"); printf(" -> %d\n",bs(90,ex,10,1)); printf("key 5 -> %d\nkey 722 -> %d key 3 -> %d\n",bs(5,ex,10,0),bs(722,ex,10,0),bs(3,ex,10,0));
  printf("bug 90 -> %d bug 3 -> %d\n",bs_bug(90,ex,10),bs_bug(3,ex,10));
  return 0;}
