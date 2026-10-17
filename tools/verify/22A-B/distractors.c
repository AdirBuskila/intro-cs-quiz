/* 22A-B Q2 refuter round: replacement distractors `f_2(c,k,i,j-2)` and `f_2(c,k,i+1,j-1)` must give a wrong
   answer on a valid input (defined behaviour: guarded so we only count runs that stay in bounds). */
#include <stdio.h>
#include <stdlib.h>
static int g_oob;
int ref(int*c,int k,int i,int j){ if(i==j)return -1; if(c[i]+c[j]==k)return i; if(c[i]+c[j]>k)return ref(c,k,i,j-1); return ref(c,k,i+1,j); }
int d1(int*c,int k,int i,int j,int n){ if(i<0||j<0||i>=n||j>=n){g_oob=1;return -2;} if(i==j)return -1; if(c[i]+c[j]==k)return i; if(c[i]+c[j]>k)return d1(c,k,i,j-2,n); return d1(c,k,i+1,j,n); }
int d2(int*c,int k,int i,int j,int n){ if(i<0||j<0||i>=n||j>=n){g_oob=1;return -2;} if(i==j)return -1; if(c[i]+c[j]==k)return i; if(c[i]+c[j]>k)return d2(c,k,i+1,j-1,n); return d2(c,k,i+1,j,n); }
static int cmp(const void*a,const void*b){return *(const int*)a-*(const int*)b;}
int main(void){ srand(11); long w1=0,w2=0,o1=0,o2=0,t=0;
 int ex[]={-5,-2,12,25,34,40}; printf("example k=23 i=0 j=4: ref=%d  j-2 -> %d  (i+1,j-1) -> %d\n",ref(ex,23,0,4),d1(ex,23,0,4,6),d2(ex,23,0,4,6));
 for(int it=0;it<30000;it++){ int c[8],n=2+rand()%6; for(int i=0;i<n;i++)c[i]=rand()%15-5; qsort(c,n,sizeof(int),cmp);
  int k=rand()%20-4; int r=ref(c,k,0,n-1); t++;
  g_oob=0; int a=d1(c,k,0,n-1,n); if(g_oob)o1++; else w1+=a!=r;
  g_oob=0; a=d2(c,k,0,n-1,n); if(g_oob)o2++; else w2+=a!=r; }
 printf("of %ld: j-2 wrong(in bounds) %ld, left bounds %ld;  (i+1,j-1) wrong(in bounds) %ld, left bounds %ld\n",t,w1,o1,w2,o2); return 0; }
