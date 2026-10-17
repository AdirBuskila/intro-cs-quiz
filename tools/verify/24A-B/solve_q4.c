/* 24A-B Q4 solver harness: number_returns. merge_sort is the course black box (stand-in below). */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void merge_sort(int *a, int lo, int hi){ if(lo>=hi)return; int mid=(lo+hi)/2; merge_sort(a,lo,mid); merge_sort(a,mid+1,hi);
  int n=hi-lo+1,*t=malloc(n*sizeof(int)),i=lo,j=mid+1,k=0; while(i<=mid&&j<=hi)t[k++]=a[i]<=a[j]?a[i++]:a[j++];
  while(i<=mid)t[k++]=a[i++]; while(j<=hi)t[k++]=a[j++]; memcpy(a+lo,t,n*sizeof(int)); free(t);}
/* SOLUTION BEGIN */
int number_returns(int* arr, int size)
{
   int i, run = 1, best = 1;
   if (size == 0)
      return 0;
   merge_sort(arr, 0, size - 1);
   for (i = 1; i < size; i++)
   {
      if (arr[i] == arr[i - 1])
         run++;
      else
         run = 1;
      if (run > best)
         best = run;
   }
   return best;
}
/* SOLUTION END */
int main(void){
  int a[]={1,2,-3005,2,3,1,-1000,3,7,-11,2,15,2,3,90,7,2,2,1000};
  printf("ex=%d (expect 6)\n",number_returns(a,19));
  srand(244); int bad=0,T=20000;
  for(int t=0;t<T;t++){int n=rand()%20,A[20],r=0; for(int i=0;i<n;i++)A[i]=rand()%11-5;
    for(int i=0;i<n;i++){int c=0;for(int j=0;j<n;j++)if(A[j]==A[i])c++; if(c>r)r=c;}
    if(number_returns(A,n)!=r)bad++;}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
