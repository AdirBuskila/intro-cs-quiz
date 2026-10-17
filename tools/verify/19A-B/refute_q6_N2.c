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
#define N 2
int neighbors_differ(int A[N][N])
{
   int i, j;
   for (i = 0; i < N; i++)
      for (j = 0; j < N; j++)
      {
         if (j + 1 < N && A[i][j] == A[i][j + 1])                  // right
            return 0;
         if (i + 1 < N && A[i][j] == A[i + 1][j])                  // down
            return 0;
         if (i + 1 < N && j + 1 < N && A[i][j] == A[i + 1][j + 1]) // down-right
            return 0;
         if (i + 1 < N && j > 0 && A[i][j] == A[i + 1][j - 1])     // down-left
            return 0;
      }
   return 1;
}

static int ref(int A[N][N]){for(int i=0;i<N;i++)for(int j=0;j<N;j++)for(int k=0;k<N;k++)for(int m=0;m<N;m++){if(i==k&&j==m)continue;int di=i>k?i-k:k-i,dj=j>m?j-m:m-j;if(di<=1&&dj<=1&&A[i][j]==A[k][m])return 0;}return 1;}
int main(){long total=1,ones=0,bad=0,ones2=0;for(int i=0;i<4;i++)total*=4;
 for(long c=0;c<total;c++){int A[N][N];long x=c;for(int i=0;i<N;i++)for(int j=0;j<N;j++){A[i][j]=x%4;x/=4;}int r=ref(A);ones+=r;if(r!=neighbors_differ(A))bad++;}
 printf("N=%d total=%ld yes=%ld bad=%ld\n",N,total,ones,bad);
 for(int t=0;t<200000&&N>=3;t++){int A[N][N];for(int i=0;i<N;i++)for(int j=0;j<N;j++)A[i][j]=i*N+j;for(int s=0;s<3;s++){int i1=rnd()%N,j1=rnd()%N,k1=rnd()%N,m1=rnd()%N;A[i1][j1]=A[k1][m1];}int r=ref(A);ones2+=r;if(r!=neighbors_differ(A))bad++;}
 printf("yes2=%ld ",ones2);printf("with-structured bad=%ld\n",bad);return 0;}
