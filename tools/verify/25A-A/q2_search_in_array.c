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
  printf("fails=%d\n",fails); 
  /* steps: trace of key -15 and absent key */
  {int key=-15, left=0, right=n-1;
   while(left<=right){int mid=(left+right)/2; printf("trace key %d: left=%d right=%d mid=%d arr[mid]=%d\n",key,left,right,mid,a[mid]);
     if(a[mid]==key)break; if(key<a[mid]&&a[mid]<0)left=mid+1; else right=mid-1;}
   printf("step -15=%d -1=%d -21=%d -14=%d -30=%d\n",search_in_array(a,n,-15),search_in_array(a,n,-1),search_in_array(a,n,-21),search_in_array(a,n,-14),search_in_array(a,n,-30));}
  return 0;}
