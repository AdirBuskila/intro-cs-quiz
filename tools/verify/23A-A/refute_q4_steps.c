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
#define R 4
#define C 4
int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255; //Mark not to return
    return fill +
        waterfill(valley, cloudR - 1, cloudC, cloudH) +
        waterfill(valley, cloudR + 1, cloudC, cloudH) +
        waterfill(valley, cloudR, cloudC - 1, cloudH) +
        waterfill(valley, cloudR, cloudC + 1, cloudH);
}
int wf_bug(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255; //Mark not to return
    return fill +
        wf_bug(valley, cloudR - 1, cloudC, cloudH) +
        wf_bug(valley, cloudR + 1, cloudC, cloudH) +
        wf_bug(valley, cloudR, cloudC - 1, cloudH) +
        wf_bug(valley, cloudR, cloudC - 1, cloudH);
}
int main(){int v[4][4]={{255,255,255,255},{255,3,5,255},{255,4,9,255},{255,255,255,255}};int w[4][4];
 memcpy(w,v,sizeof v);printf("h6=%d ",waterfill(w,1,1,6));memcpy(w,v,sizeof v);printf("h10=%d ",waterfill(w,1,1,10));memcpy(w,v,sizeof v);printf("bug h6=%d\n",wf_bug(w,1,1,6));return 0;}