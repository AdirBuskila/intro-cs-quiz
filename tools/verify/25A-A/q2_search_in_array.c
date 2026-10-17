#include <stdio.h>
int search_in_array(int* arr, int size, int key) {
   int left = 0, right = size - 1;
   while (left <= right) {
      int mid = (left + right) / 2;
      if (arr[mid] == key)
         return mid;
      else
         if ((key < arr[mid]) && (arr[mid] < 0))
            left = mid + 1;
         else
            right = mid - 1;
   }
   return -1;
}
int main(void){
  int a[]={-1,-5,-13,-15,-21,2,5,12,23}; int n=9; int fails=0;
  for(int k=-25;k<0;k++) /* spec: k is negative */{
    int exp=-1; for(int i=0;i<n;i++) if(a[i]==k) exp=i;
    int got=search_in_array(a,n,k);
    if(got!=exp){ printf("key %d: got %d expected %d\n",k,got,exp); fails++; }
  }
  printf("fails=%d\n",fails); return 0;}
