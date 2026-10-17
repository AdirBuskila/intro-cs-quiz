#include <stdio.h>
#include <math.h>
double fun_rec(double *a, int n)
{
        if (n == 1) return a[0];

        return a[n-1] / n + fun_rec(a, n - 1)*(n-1)/n;
}
int main(void){
  double a[]={-3,6,7,-2,12};
  printf("n=5 -> %.1f   n=4 -> %.1f\n", fun_rec(a,5), fun_rec(a,4));
  int fails=0; unsigned s=1;
  for(int it=0;it<10000;it++){
    int n=1+(s=s*1103515245u+12345u)%12; double b[16],sum=0;
    for(int i=0;i<n;i++){ b[i]=((int)((s=s*1103515245u+12345u)>>16)%2001-1000)/8.0; sum+=b[i]; }
    if(fabs(fun_rec(b,n)-sum/n)>1e-9) fails++;
  }
  printf("fails=%d (vs mean of n elements)\n",fails);
  return 0;}
