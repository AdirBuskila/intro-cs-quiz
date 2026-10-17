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
#define R 7
#define C 7
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
int wf_a(int valley[R][C], int cloudR, int cloudC, int cloudH) {
if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255; //Mark not to return
    return fill +
        wf_a(valley, cloudR - 1, cloudC, cloudH) +
        wf_a(valley, cloudR + 1, cloudC, cloudH) +
        wf_a(valley, cloudR, cloudC - 1, cloudH) +
        wf_a(valley, cloudR, cloudC + 1, cloudH);
}
int wf_b(int valley[R][C], int cloudR, int cloudC, int cloudH) {
if (cloudH < valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255; //Mark not to return
    return fill +
        wf_b(valley, cloudR - 1, cloudC, cloudH) +
        wf_b(valley, cloudR + 1, cloudC, cloudH) +
        wf_b(valley, cloudR, cloudC - 1, cloudH) +
        wf_b(valley, cloudR, cloudC + 1, cloudH);
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
int wf_perm(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255;
    return fill +
        wf_perm(valley, cloudR, cloudC + 1, cloudH) +
        wf_perm(valley, cloudR, cloudC - 1, cloudH) +
        wf_perm(valley, cloudR + 1, cloudC, cloudH) +
        wf_perm(valley, cloudR - 1, cloudC, cloudH);
}
int wf_c(int v[R][C],int a,int b,int c){return 0;}
int wf_d(int v[R][C],int a,int b,int c){return 0;}

static int ref(int v[R][C],int r,int c,int h){int seen[R][C];memset(seen,0,sizeof seen);int q[R*C][2],qh=0,qt=0,tot=0;if(h<=v[r][c])return 0;q[qt][0]=r;q[qt++][1]=c;seen[r][c]=1;
 while(qh<qt){int y=q[qh][0],x=q[qh++][1];tot+=h-v[y][x];int dy[4]={-1,1,0,0},dx[4]={0,0,-1,1};for(int k=0;k<4;k++){int ny=y+dy[k],nx=x+dx[k];if(ny<0||nx<0||ny>=R||nx>=C)continue;if(!seen[ny][nx]&&v[ny][nx]<h){seen[ny][nx]=1;q[qt][0]=ny;q[qt++][1]=nx;}}}return tot;}
typedef int(*F)(int[R][C],int,int,int);
int main(){F fs[7]={waterfill,wf_a,wf_b,wf_c,wf_d,wf_bug,wf_perm};const char*nm[7]={"official","fill a","fill b(<)","fill c(>=)","fill d(==255)","findbug","permuted-call-order"};int bad[7]={0};
 for(int t=0;t<20000;t++){int v[R][C],w[R][C];for(int i=0;i<R;i++)for(int j=0;j<C;j++)v[i][j]=(i==0||j==0||i==R-1||j==C-1)?255:1+rnd()%12;int r=1+rnd()%(R-2),c=1+rnd()%(C-2),h=1+rnd()%14;int e=ref(v,r,c,h);
  for(int f=0;f<7;f++){if(f==4||f==3)continue;memcpy(w,v,sizeof v);if(fs[f](w,r,c,h)!=e)bad[f]++;}}
 for(int f=0;f<7;f++){if(f==3||f==4)printf("q4 %s: not run (can recurse forever/out of bounds)\n",nm[f]);else printf("q4 %s wrong on %d/20000\n",nm[f],bad[f]);}
 return 0;}
