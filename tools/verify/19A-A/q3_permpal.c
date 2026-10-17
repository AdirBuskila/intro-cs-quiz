#include <stdio.h>
#include <stdlib.h>
int is_permutation_of_palindrom(int *a, int n)
{
      int i, count = 0;
      int * temp = (int*)calloc(n, sizeof(int));
      for (i = 0; i<n; i++)
            temp[a[i]]++;
      for (i = 0; i < n; i++)
      {
            if (temp[i] % 2==1)
                  count++;
      }
      free(temp);
      return count<2;
}
int bonus(int*a, int n)
{
      int i, count = 0;
      int * temp = (int*)calloc(n, sizeof(int));
      for (i = 0; i<n; i++)
            temp[a[i]]++;
      for (i = 0; i < n; i++)
      {
            if (temp[i] % 2)
                  count++;
      }
      free(temp);
      if (count > 1)
            return count - 1;
      else
            return 0;
}
/* brute force: is some permutation of a[0..n-1] a palindrome? place values from the outside in with backtracking */
static int rec(int *cnt,int V,int n,int pos){
  if(pos>=n-1-pos){ if(pos==n-1-pos){ for(int v=0;v<V;v++) if(cnt[v]==1) return 1; return 0; } return 1; }
  for(int v=0;v<V;v++) if(cnt[v]>=2){ cnt[v]-=2; int r=rec(cnt,V,n,pos+1); cnt[v]+=2; if(r) return 1; }
  return 0;
}
static int brute_pal(int *a,int n){ int cnt[16]={0}; for(int i=0;i<n;i++) cnt[a[i]]++; return rec(cnt,16,n,0); }
/* brute force minimal number of added elements (values 0..n-1) so that a permutation is a palindrome */
static int brute_bonus(int *a,int n){
  for(int add=0;add<=n;add++){
    int tot=1; for(int i=0;i<add;i++) tot*=n;
    for(int code=0;code<tot;code++){
      int b[16]; for(int i=0;i<n;i++) b[i]=a[i];
      int c=code; for(int i=0;i<add;i++){ b[n+i]=c%n; c/=n; }
      if(brute_pal(b,n+add)) return add;
    }
  }
  return -1;
}
int main(void){
  int ex1[]={1,1,5,0,1,1,0}; printf("example n=7 -> %d (expected 1)\n",is_permutation_of_palindrom(ex1,7));
  int ex2[]={1,1,4,3,1}; printf("bonus example n=5 -> %d (expected 2)\n",bonus(ex2,5));
  int f1=0,f2=0,total=0;
  for(int n=1;n<=6;n++){
    int tot=1; for(int i=0;i<n;i++) tot*=n;
    for(int code=0;code<tot;code++){
      int a[8]; int c=code; for(int i=0;i<n;i++){a[i]=c%n;c/=n;}
      total++;
      if(is_permutation_of_palindrom(a,n)!=brute_pal(a,n)) f1++;
      if(n<=5 && bonus(a,n)!=brute_bonus(a,n)) f2++;
    }
  }
  printf("arrays=%d fails_perm=%d fails_bonus=%d\n",total,f1,f2);
  return 0;}
