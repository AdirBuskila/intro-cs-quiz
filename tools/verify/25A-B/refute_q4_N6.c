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
#define N 6
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

static int ref(int m[N][N]){int ps[N+1][N+1];memset(ps,0,sizeof ps);for(int i=0;i<N;i++)for(int j=0;j<N;j++)ps[i+1][j+1]=ps[i][j+1]+ps[i+1][j]-ps[i][j]+m[i][j];int c=0;for(int i=0;i+3<=N;i++)for(int j=0;j+3<=N;j++)if(ps[i+3][j+3]-ps[i][j+3]-ps[i+3][j]+ps[i][j]==9)c++;return c;}
int main(){int im[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};printf("sample=%d ref=%d\n",number_squares(im),ref(im));
 int bad=0;for(int t=0;t<500000;t++){int m[N][N];int dens=rnd()%4;for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=dens?(rnd()%16!=0):(rnd()%2);if(ref(m)!=number_squares(m))bad++;}printf("q4 N=6 random bad=%d\n",bad);return 0;}