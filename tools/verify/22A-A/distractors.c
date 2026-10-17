/* 22A-A refuter round: replacement distractor for Q2 option (d) `return 2 + incr_subarray(a + 1, n - 1);`
   must give a wrong result (defined behaviour only). Options (b),(c) re-checked too. */
#include <stdio.h>
#include <stdlib.h>
int ref(int*a,int n){ if(n==1)return 1; if(a[0]<a[1]) return 1+ref(a+1,n-1); else return 1; }
int ob(int*a,int n){ if(n==1)return 1; if(a[0]<a[1]) return ob(a+1,n-1); else return 1; }
int oc(int*a,int n){ if(n==1)return 1; if(a[0]<a[1]) return 1+oc(a,n-1); else return 1; }
int od(int*a,int n){ if(n==1)return 1; if(a[0]<a[1]) return 2+od(a+1,n-1); else return 1; }
int main(void){ srand(1); long wb=0,wc=0,wd=0,t=0;
 for(int it=0;it<20000;it++){ int a[8],n=1+rand()%8; for(int i=0;i<n;i++)a[i]=rand()%6;
  int r=ref(a,n); t++; wb+=ob(a,n)!=r; wc+=oc(a,n)!=r; wd+=od(a,n)!=r; }
 printf("Q2 wrong of %ld: (b) %ld (c) %ld (d new) %ld\n",t,wb,wc,wd); return 0; }
