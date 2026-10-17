#include <stdio.h>
int isPalindromeRec(int *arr, int n)
{
      if (n <= 1)
            return 1;
      return arr[0] != arr[n - 1] ? 0 : isPalindromeRec(arr + 1, n - 2);
}
int main(void){
  int a1[]={1,3,2,3,1}, a2[]={1,3,2,2,3,1}, a3[]={1,3,2,2,1};
  printf("%d %d %d\n",isPalindromeRec(a1,5),isPalindromeRec(a2,6),isPalindromeRec(a3,5));
  int fails=0;
  for(int n=0;n<=8;n++) for(int code=0;code<(1<<n);code++){
    int a[8]; for(int i=0;i<n;i++) a[i]=(code>>i)&1;
    int ref=1; for(int i=0;i<n;i++) if(a[i]!=a[n-1-i]) ref=0;
    if(isPalindromeRec(a,n)!=ref) fails++;
  }
  printf("fails=%d\n",fails);
  return 0;}
