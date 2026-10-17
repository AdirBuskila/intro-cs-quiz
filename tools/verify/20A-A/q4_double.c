#include <stdio.h>
#include <stdlib.h>
int FindDouble(int* a ,  int n)
{
    int low = 0, high = n - 1, mid;
    while (low < high)
    {
        mid = (high-low)/2+low;
        if (a[mid] == a[mid + 1])
            return a[mid];

        if(a[mid] - a[low] == mid - low)

            low = mid + 1;
        else
            high = mid;
    }
    return -999; /* added by the harness: the official code has no return after the loop */
}
int findDoubleNum(int *a, int n)
{
    int low = 0, high = n - 1, mid;
    /*if (n == 2)
        return a[0];*/

    while (low <= high)
    {
        mid = (high - low) / 2 + low;
        if (a[mid] == a[0]+mid)
            low = mid + 1;
        else
            high = mid-1;
    }
    return a[mid];
}
int main(void){
  int ex[]={-3,-2,-1,0,1,2,3,3,4,5,6,7,8,9};
  printf("example: FindDouble=%d findDoubleNum=%d\n",FindDouble(ex,14),findDoubleNum(ex,14));
  /* all valid arrays: start s, length n>=2, duplicated position d (a[d]==a[d-1]), otherwise +1 steps */
  int f1=0,f2=0,total=0;
  for(int s=-4;s<=4;s++) for(int n=2;n<=12;n++) for(int d=1;d<n;d++){
    int a[16]; a[0]=s; for(int i=1;i<n;i++) a[i]= (i==d)? a[i-1] : a[i-1]+1;
    int expv=a[d]; total++;
    if(FindDouble(a,n)!=expv) {f1++; if(f1<=3) printf("FindDouble fails n=%d d=%d got %d\n",n,d,FindDouble(a,n));}
    if(findDoubleNum(a,n)!=expv) {f2++; if(f2<=3) printf("findDoubleNum fails n=%d d=%d got %d\n",n,d,findDoubleNum(a,n));}
  }
  printf("arrays=%d FindDouble_fails=%d findDoubleNum_fails=%d\n",total,f1,f2);
  return 0;}
