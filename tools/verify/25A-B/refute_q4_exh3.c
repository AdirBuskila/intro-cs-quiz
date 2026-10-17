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
#define N 3
int number_squares(int matrix[N][N])
{
   int i, j, a, b, all_ones, count = 0;
   for (i = 0; i + 2 < N; i++)            // (i, j) = top-left corner of a 3x3 square
      for (j = 0; j + 2 < N; j++)
      {
         all_ones = 1;
         for (a = i; a < i + 3; a++)      // fixed 9 cells per square
            for (b = j; b < j + 3; b++)
               if (matrix[a][b] == 0)
                  all_ones = 0;
         count += all_ones;
      }
   return count;
}

static int ref(int m[N][N]){int c=0;for(int i=0;i+3<=N;i++)for(int j=0;j+3<=N;j++){int ok=1;for(int a=0;a<3;a++)for(int b=0;b<3;b++)if(!m[i+a][j+b])ok=0;c+=ok;}return c;}
int main(){long tot=1L<<(N*N),bad=0,nz=0;for(long c=0;c<tot;c++){int m[N][N];for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=(c>>(i*N+j))&1;int r=ref(m);nz+=r>0;if(r!=number_squares(m))bad++;}printf("N=%d exhaustive tot=%ld withsquare=%ld bad=%ld\n",N,tot,nz,bad);return 0;}