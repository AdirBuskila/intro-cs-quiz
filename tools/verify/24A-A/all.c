#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int gcd(int a,int b){while(b){int t=a%b;a=b;b=t;}return a<0?-a:a;}
int lcm(int a,int b) {
   return abs(a*b/gcd(a,b));
}
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
int num_of_ones1(int num)
{
   return num ? num%2 + num_of_ones1(num/2) : 0;
}
int num_of_ones2(int num)
{
   if(num==1)
      return 1;
   return num % 2 + num_of_ones2(num / 2);
}
int bin_search_mixed(int key, int* a, int n)
{
   int low, high, mid;
   low = 0;
   high = n - 1;
   while (low <= high)
   {
      mid = (low + high) / 2;
      mid = mid - (mid % 2);
      if (key == a[mid])
         return mid;
      if (key == a[mid + 1])
         return mid + 1;
      else if (key < a[mid])
         high = mid - 1;
      else
         low = mid + 2;
   }
   return -1;
}
int main(void){
  int bad=0;
  printf("lcm 4,6=%d (12) -4,6=%d (12)\n",lcm(4,6),lcm(-4,6));
  printf("chardist ad=%d (3) acefhyz=%d (2) e=%d\n",str_chardist("ad"),str_chardist("acefhyz"),str_chardist("e"));
  for(int n=1;n<5000;n++){int c=0;for(int k=n;k;k>>=1)c+=k&1; if(num_of_ones1(n)!=c||num_of_ones2(n)!=c)bad++;}
  printf("ones 6=%d (2) 15=%d (4) mismatches=%d; ones(0) version2 is not callable (infinite recursion), spec says natural\n",num_of_ones1(6),num_of_ones1(15),bad);
  /* mixed arrays: random sorted arrays of distinct values, swap random pairs, search every key and absent keys */
  int mism=0;
  for(int t=0;t<20000;t++){
    int n=2*(1+rand()%20); int a[64]; int v=rand()%5;
    for(int i=0;i<n;i++){v+=1+rand()%4;a[i]=v;}
    for(int i=0;i<n;i+=2) if(rand()%2){int x=a[i];a[i]=a[i+1];a[i+1]=x;}
    for(int k=-1;k<=v+2;k++){
      int pos=-1;for(int i=0;i<n;i++)if(a[i]==k)pos=i;
      int r=bin_search_mixed(k,a,n);
      if(r!=pos)mism++;
    }
  }
  printf("mixed search mismatches=%d\n",mism);
  int ex[]={1,2,7,3,11,15,90,23,1000,722};
  printf("example: 90->%d (6) 5->%d (-1)\n",bin_search_mixed(90,ex,10),bin_search_mixed(5,ex,10));
  return 0;}
