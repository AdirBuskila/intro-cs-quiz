/* 19A-B Q4 solver harness: is b a cyclic right rotation of a (distinct values in each). */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
int is_rotation(int *a, int *b, int n)
{
   int i, k = -1;
   if (n == 0)
      return 1;
   for (i = 0; i < n; i++)          // where did a[0] move to? (values are distinct)
      if (b[i] == a[0])
         k = i;
   if (k == -1)
      return 0;
   for (i = 0; i < n; i++)          // a rotation by k cells puts a[i] at b[(i+k)%n]
      if (b[(i + k) % n] != a[i])
         return 0;
   return 1;
}
/* SOLUTION END */
static int ref(int*a,int*b,int n){ if(n==0)return 1; for(int k=0;k<n;k++){int ok=1; for(int i=0;i<n;i++) if(b[(i+k)%n]!=a[i]) ok=0; if(ok) return 1;} return 0; }
static void shuffle(int*p,int m){ for(int i=m-1;i>0;i--){int j=rand()%(i+1),x=p[i];p[i]=p[j];p[j]=x;} }
int main(void){
  int a[]={5,2,8,4,1}, b[]={4,1,5,2,8}; printf("ex=%d (1)\n",is_rotation(a,b,5));
  srand(194); int bad=0,T=20000,pos=0;
  for(int t=0;t<T;t++){int n=1+rand()%8,A[8],B[8],pool[10];
    for(int i=0;i<10;i++)pool[i]=i; shuffle(pool,10); for(int i=0;i<n;i++)A[i]=pool[i];
    if(rand()%2){ int k=rand()%n; for(int i=0;i<n;i++)B[(i+k)%n]=A[i];
                  if(rand()%3==0){int i=rand()%n,j=rand()%n,x=B[i];B[i]=B[j];B[j]=x;} }
    else { /* B: n distinct values from a small pool that overlaps A */
           int p2[10]; for(int i=0;i<10;i++)p2[i]=i; shuffle(p2,n+2<10?n+2:10); for(int i=0;i<n;i++)B[i]=p2[i]; }
    int r=ref(A,B,n); pos+=r; if(is_rotation(A,B,n)!=r)bad++;}
  printf("random: %d cases (%d rotations), %d mismatches\n",T,pos,bad); return bad!=0;}
