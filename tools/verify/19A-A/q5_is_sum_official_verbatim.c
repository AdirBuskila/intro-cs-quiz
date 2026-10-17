/* OFFICIAL code verbatim: the signature has no parameter d, yet the body uses d -> expected compile error */
#include <stdio.h>
void merge_sort(int *,int,int);
int binary_search(int*,int,int);
int is_sum (int* a, int* b, int n)
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
