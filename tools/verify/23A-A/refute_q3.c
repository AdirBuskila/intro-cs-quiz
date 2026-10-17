#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <time.h>
static unsigned long long rs=88172645463325252ULL;
static unsigned rnd(void){rs^=rs<<13;rs^=rs>>7;rs^=rs<<17;return (unsigned)(rs>>11);}
static void ms_(int*a,int lo,int hi){ if(lo>=hi)return; int m=(lo+hi)/2; ms_(a,lo,m); ms_(a,m+1,hi); int n=hi-lo+1; int*t=malloc(n*sizeof(int)); int i=lo,j=m+1,k=0; while(i<=m&&j<=hi)t[k++]=a[i]<=a[j]?a[i++]:a[j++]; while(i<=m)t[k++]=a[i++]; while(j<=hi)t[k++]=a[j++]; memcpy(a+lo,t,n*sizeof(int)); free(t);}
void merge_sort(int*a,int lo,int hi){ms_(a,lo,hi);}
int binary_search(int*a,int n,int x){int l=0,h=n-1;while(l<=h){int m=(l+h)/2;if(a[m]==x)return m;if(a[m]<x)l=m+1;else h=m-1;}return -1;}
static double now(void){return (double)clock()/CLOCKS_PER_SEC;}
int* ds_a(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
new_sort[new_position--] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int* ds_b(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
new_sort[new_position++] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int* ds_c(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
new_sort[new_position--] = a[first++];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int* ds_d(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
new_sort[0] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int* ds_bug(int* a, int n, int num)
{
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num > num - a[first]) {
            new_sort[new_position--] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int* ds_ord(int* a, int n, int num)
{
    int* new_sort = (int*)malloc(n * sizeof(int));
    int first = 0, last = n - 1, new_position = n - 1;
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) {
            new_sort[new_position--] = a[last--];
        }
        else
            new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
typedef int*(*F)(int*,int,int);
static int pnum;static int cmp(const void*x,const void*y){int a=*(int*)x,b=*(int*)y;int da=abs(a-pnum),db=abs(b-pnum);if(da!=db)return da-db;return a-b;}
void show(int*r,int n){for(int i=0;i<n;i++)printf("%d ",r[i]);putchar(10);}
int main(){F fs[6]={ds_a,ds_b,ds_c,ds_d,ds_bug,ds_ord};const char*nm[6]={"fill a","fill b","fill c","fill d","findbug(>)","order-swapped decl/malloc"};int bad[6]={0};
 for(int t=0;t<20000;t++){int n=1+rnd()%9;int a[9];int v=(int)(rnd()%5);for(int i=0;i<n;i++){v+=1+rnd()%4;a[i]=v;}int num=a[rnd()%n];pnum=num;int ref[9];memcpy(ref,a,n*4);qsort(ref,n,4,cmp);
  int run[6]={1,0,1,0,1,1};
  for(int f=0;f<6;f++){if(f==1||f==3)continue;int*r=fs[f](a,n,num);if(memcmp(r,ref,n*4))bad[f]++;free(r);}}
 for(int f=0;f<6;f++){if(f!=1&&f!=3)printf("q3 %s wrong on %d/20000\n",nm[f],bad[f]);else printf("q3 %s: not run (writes out of range by construction)\n",nm[f]);}
 {int a[5]={1,2,5,7,10};int*r=ds_a(a,5,7);show(r,5);int b[3]={1,2,3};r=ds_a(b,3,2);show(r,3);r=ds_bug(b,3,2);show(r,3);}return 0;}
