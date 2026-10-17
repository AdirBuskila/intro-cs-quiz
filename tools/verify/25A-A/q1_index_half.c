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
  return 0;}
