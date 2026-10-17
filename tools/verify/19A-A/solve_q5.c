/* 19A-A Q5 solver harness: OFFICIAL is_sum with the single typo fix (parameter `int d` added to the signature).
   merge_sort / binary_search are the course black boxes; stand-ins below (binary_search returns index or -1). */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void merge_sort(int *a, int lo, int hi){ if(lo>=hi)return; int mid=(lo+hi)/2; merge_sort(a,lo,mid); merge_sort(a,mid+1,hi);
  int n=hi-lo+1,*t=malloc(n*sizeof(int)),i=lo,j=mid+1,k=0; while(i<=mid&&j<=hi)t[k++]=a[i]<=a[j]?a[i++]:a[j++];
  while(i<=mid)t[k++]=a[i++]; while(j<=hi)t[k++]=a[j++]; memcpy(a+lo,t,n*sizeof(int)); free(t);}
int binary_search(int *a,int n,int x){ int lo=0,hi=n-1; while(lo<=hi){int mid=(lo+hi)/2; if(a[mid]==x)return mid; if(a[mid]<x)lo=mid+1; else hi=mid-1;} return -1; }
/* SOLUTION BEGIN */
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
/* SOLUTION END */
int main(void){
  int a[]={12,2,14,2}, b[]={15,11,2,8};
  printf("d=23 -> %d (1), d=5 -> %d (0)\n", is_sum(a,b,4,23), is_sum(a,b,4,5));
  srand(195); int bad=0,T=20000;
  for(int t=0;t<T;t++){
    int n=1+rand()%10,A[10],B[10]; for(int i=0;i<n;i++){A[i]=rand()%21-10;B[i]=rand()%21-10;}
    int d=rand()%41-20, ref=0; for(int i=0;i<n;i++)for(int j=0;j<n;j++) if(A[i]+B[j]==d) ref=1;
    if(is_sum(A,B,n,d)!=ref) bad++;
  }
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
