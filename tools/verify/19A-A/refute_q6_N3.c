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
int CheckMagic(int A[N][N])
{
      int i, j, sum=0, curr_sum;
      //first row
      for (j=0; j<N; j++)
            sum += A[0][j];
      //check rows
      for (i=1; i<N; i++)
      {
            curr_sum = 0;
            for (j=0; j<N; j++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check columns
      for (j=0; j<N; j++)
      {
            curr_sum = 0;
            for (i=0; i<N; i++)
                  curr_sum += A[i][j];
            if (curr_sum != sum)
                  return 0;
      }
      //check main diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][i];
      if (curr_sum != sum)
            return 0;
      //check secondary diagonal
      curr_sum = 0;
      for (i=0; i<N; i++)
            curr_sum += A[i][N-i-1];
      if (curr_sum != sum)
            return 0;

      return 1;
}

static int ref(int A[N][N]){int S=0;for(int j=0;j<N;j++)S+=A[0][j];int ok=1;
 for(int i=0;i<N;i++){int s=0;for(int j=0;j<N;j++)s+=A[i][j];if(s!=S)ok=0;}
 for(int j=0;j<N;j++){int s=0;for(int i=0;i<N;i++)s+=A[i][j];if(s!=S)ok=0;}
 {int s=0,u=0;for(int i=0;i<N;i++){s+=A[i][i];u+=A[i][N-1-i];}if(s!=S||u!=S)ok=0;}return ok;}
int main(){long total=1,ones=0,bad=0;for(int i=0;i<9;i++)total*=3;
 for(long c=0;c<total;c++){int A[N][N];long x=c;for(int i=0;i<N;i++)for(int j=0;j<N;j++){A[i][j]=x%3;x/=3;}
  int r=ref(A),g=CheckMagic(A);ones+=r;if(r!=g)bad++;}
 printf("N=%d total=%ld magic=%ld bad=%ld\n",N,total,ones,bad);
 return 0;}
