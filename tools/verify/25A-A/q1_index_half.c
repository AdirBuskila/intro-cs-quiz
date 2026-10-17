#include <stdio.h>
int index_half(int* arr, int size)
{
   int i, half_sum, sum=0;
   for (i = 0; i < size; i++)
      sum += arr[i];
   if (sum % 2)
      return -1;
   half_sum = sum / 2;
   sum = 0;
   for (i = 0; i < size - 1; i++)
   {
      sum += arr[i];
      if (sum == half_sum)
         return i;
   }
   return -1;
}
static int ref(int *a,int n){ for(int i=0;i<n;i++){int l=0,r=0;for(int j=0;j<=i;j++)l+=a[j];for(int j=i+1;j<n;j++)r+=a[j];if(l==r&&i<n-1)return i;} return -1;}
int main(void){
  int a[]={5,-4,-2,8,10,-3}; int b[]={5,-4,-2,8,10,-2};
  printf("ex1=%d (expect 3)\nex2=%d (expect -1)\n",index_half(a,6),index_half(b,6));
  int bad=0; unsigned s=12345;
  for(int t=0;t<20000;t++){int n=1+s%7;int x[8];for(int i=0;i<n;i++){s=s*1103515245+12345;x[i]=(int)((s>>16)%9)-4;} s=s*1103515245+12345;
    if(index_half(x,n)!=ref(x,n))bad++;}
  printf("random mismatches vs brute force: %d\n",bad);
  
  /* steps trace values */
  {int t1[]={1,2,3}, t2[]={3,-3}, t3[]={0,5,-5}, t4[]={2,2,4}, t5[]={1,2,4}, t6[]={7,0,0,0};
   printf("step {1,2,3}=%d {3,-3}=%d {0,5,-5}=%d {2,2,4}=%d {1,2,4}=%d {7,0,0,0}=%d\n",
     index_half(t1,3),index_half(t2,2),index_half(t3,3),index_half(t4,3),index_half(t5,3),index_half(t6,4));}
  return 0;}
