/* Logic check ONLY: official body with the missing parameter d added to the signature (a deviation from the key). */
#include <stdio.h>
#include <stdlib.h>
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
void merge_sort(int *a,int lo,int hi){ qsort(a+lo,hi-lo+1,sizeof(int),cmp); }
int binary_search(int *a,int n,int x){ int lo=0,hi=n-1; while(lo<=hi){int mid=(lo+hi)/2; if(a[mid]==x)return mid; if(a[mid]<x)lo=mid+1; else hi=mid-1;} return -1; }
int is_sum (int* a, int* b, int n, int d)
{
  int i;
  merge_sort(b, 0, n-1);
  for(i=0; i<n; i++)
  {
    if(binary_search(b, n, d-a[i]) >=0 )
     return 1;
  }
  return 0;
}
int main(void){
  int a[]={12,2,14,2}, b[]={15,11,2,8};
  printf("d=23 -> %d, d=5 -> %d\n", is_sum(a,b,4,23), is_sum(a,b,4,5));
  srand(3); int fails=0;
  for(int it=0;it<100000;it++){
    int n=1+rand()%6,A[6],B[6]; for(int i=0;i<n;i++){A[i]=rand()%10;B[i]=rand()%10;}
    int d=rand()%20, ref=0; for(int i=0;i<n;i++)for(int j=0;j<n;j++) if(A[i]+B[j]==d) ref=1;
    if(is_sum(A,B,n,d)!=ref) fails++;
  }
  printf("fails=%d\n",fails); return 0;}
