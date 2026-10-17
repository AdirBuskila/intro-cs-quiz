/* 19A-B Q5 solver harness: sort an array made of two ascending runs, O(n). */
#include <stdio.h>
#include <stdlib.h>
/* SOLUTION BEGIN */
void sort_two_parts(int *a, int n)
{
   int i, j, k, mid = 1;
   int *temp;
   while (mid < n && a[mid - 1] <= a[mid])   // the second part starts at the first descent
      mid++;
   if (mid >= n)                             // no descent: already sorted
      return;
   temp = (int*)malloc(n * sizeof(int));
   i = 0; j = mid; k = 0;
   while (i < mid && j < n)                  // merge the two sorted parts
   {
      if (a[i] <= a[j])
         temp[k++] = a[i++];
      else
         temp[k++] = a[j++];
   }
   while (i < mid)
      temp[k++] = a[i++];
   while (j < n)
      temp[k++] = a[j++];
   for (i = 0; i < n; i++)
      a[i] = temp[i];
   free(temp);
}
/* SOLUTION END */
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(void){
  int a[]={1,1,4,8,-2,3}; sort_two_parts(a,6); printf("ex: "); for(int i=0;i<6;i++)printf("%d ",a[i]); printf("(expect -2 1 1 3 4 8)\n");
  srand(195); int bad=0,T=20000;
  for(int t=0;t<T;t++){int n=rand()%16,A[16],R[16],s=n?rand()%(n+1):0;
    for(int i=0;i<n;i++)A[i]=rand()%13-6; qsort(A,s,sizeof(int),cmp); qsort(A+s,n-s,sizeof(int),cmp);
    for(int i=0;i<n;i++)R[i]=A[i]; qsort(R,n,sizeof(int),cmp); sort_two_parts(A,n);
    for(int i=0;i<n;i++) if(A[i]!=R[i]){bad++;break;}}
  printf("random: %d cases, %d mismatches\n",T,bad); return bad!=0;}
