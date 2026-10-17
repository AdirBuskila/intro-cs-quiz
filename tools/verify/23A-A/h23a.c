#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#define R 6
#define C 6
void swap(int*x,int*y){int t=*x;*x=*y;*y=t;}
void sp1(int* a, int size){ int i; for (i = 1; i < size/2 ; i += 2) swap(a + i, a + size - i); }
void sp2(int* a, int size){ int low = 1, high = size - 1; while (low < high-1 ) { swap(a + low, a + high); low += 2; high -= 2; } }
void sp3(int* a, int size){ int i,sum=a[0]+a[size-1]; for (i = 0; i < size-1; i += 2) { a[i + 1] = sum-a[i]; } }
void sq1(char* str){ int i, pos = 0; int count[26] = { 0 }; int len = strlen(str);
  for (i = 0; i < len; ++i) count[str[i] - 'a']++;
  for (i = 0; i < len; ++i){ if (count[str[i] - 'a'] == 3) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; } }
  str[pos] = '\0'; }
void sq2(char* str){ int count[26] = { 0 }; char* temp = str;
  while (*temp) count[*temp++ - 'a']++;
  temp = str;
  while (*temp) if (count[*temp++ - 'a'] == 3) { *str = *(temp - 1); count[*str++ - 'a'] = 0; }
  *str = '\0'; }
int binary_search(int*a,int n,int num){int lo=0,hi=n-1;while(lo<=hi){int m=(lo+hi)/2;if(a[m]==num)return m;if(a[m]<num)lo=m+1;else hi=m-1;}return -1;}
int* ds2(int* a, int n, int num){
    int idx_num = binary_search(a, n, num);
    int idx_smaller = idx_num - 1, idx_larger = idx_num + 1, new_pos = 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    new_sort[0] = num;
    while (0 <= idx_smaller && idx_larger < n) {
        if (a[idx_larger] - num < num - a[idx_smaller]) { new_sort[new_pos++] = a[idx_larger++]; }
        else new_sort[new_pos++] = a[idx_smaller--];
    }
    while (0 <= idx_smaller) { new_sort[new_pos++] = a[idx_smaller--]; }
    while (idx_larger < n) { new_sort[new_pos++] = a[idx_larger++]; }
    return new_sort;
}
int* ds1(int* a, int n, int num){
    int first = 0, last = n - 1, new_position = n - 1;
    int* new_sort = (int*)malloc(n * sizeof(int));
    assert(new_sort);
    while (first <= last) {
        if (a[last] - num >= num - a[first]) { new_sort[new_position--] = a[last--]; }
        else new_sort[new_position--] = a[first++];
    }
    return new_sort;
}
int wf(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC]) return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255;
    return fill + wf(valley, cloudR - 1, cloudC, cloudH) + wf(valley, cloudR + 1, cloudC, cloudH)
        + wf(valley, cloudR, cloudC - 1, cloudH) + wf(valley, cloudR, cloudC + 1, cloudH);
}
int wf2(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC]) return 0;
    valley[cloudR][cloudC] += 255;
    return 255 + cloudH - valley[cloudR][cloudC] +
        wf2(valley, cloudR - 1, cloudC, cloudH) + wf2(valley, cloudR + 1, cloudC, cloudH) +
        wf2(valley, cloudR, cloudC - 1, cloudH) + wf2(valley, cloudR, cloudC + 1, cloudH);
}
static int cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}
int main(void){
  /* Q1: random sorted arrays with equal-sum pairs; check each result has n adjacent pairs of equal sum, multiset kept */
  int bad[3]={0,0,0}; srand(1);
  for(int it=0;it<20000;it++){
    int n=1+rand()%6, size=2*n, a[12], s=20+rand()%30;
    for(int p=0;p<n;p++){ int x=rand()%20; a[p]=x; a[size-1-p]=s-x; }
    qsort(a,size,sizeof(int),cmp);
    /* check precondition: sorted array pairs (i,size-1-i) sum equal */
    int okpre=1; for(int p=0;p<n;p++) if(a[p]+a[size-1-p]!=a[0]+a[size-1]) okpre=0;
    if(!okpre) continue;
    for(int v=0;v<3;v++){ int b[12]; memcpy(b,a,sizeof(int)*size);
      if(v==0)sp1(b,size); else if(v==1)sp2(b,size); else sp3(b,size);
      int ok=1; int sum=a[0]+a[size-1];
      for(int p=0;p<size;p+=2) if(b[p]+b[p+1]!=sum) ok=0;
      int x[12],y[12]; memcpy(x,a,sizeof(int)*size); memcpy(y,b,sizeof(int)*size);
      qsort(x,size,sizeof(int),cmp); qsort(y,size,sizeof(int),cmp);
      if(memcmp(x,y,sizeof(int)*size)) ok=0;
      if(!ok) bad[v]++; } }
  printf("Q1 mismatches v1 %d v2 %d v3 %d (want 0 0 0)\n",bad[0],bad[1],bad[2]);
  int e[]={1,2,3,7,8,9}; sp1(e,6); printf("Q1 example:"); for(int i=0;i<6;i++)printf(" %d",e[i]); printf("\n");
  char s1[]="dbcabafacbcbdd", s2[]="dbcabafacbcbdd"; sq1(s1); sq2(s2); printf("Q2 %s | %s (want dca; stated example string has 3 each of d? see note)\n",s1,s2);
  int bq=0; srand(2);
  for(int it=0;it<20000;it++){ char u[40],v[40]; int L=rand()%30; for(int i=0;i<L;i++)u[i]='a'+rand()%5; u[L]=0; strcpy(v,u); sq1(u); sq2(v); if(strcmp(u,v))bq++; }
  printf("Q2 sq1 vs sq2 differ on %d random strings (want 0)\n",bq);
  int a5[]={1,2,5,7,10},a3[]={1,2,3}; int *r;
  for(int v=0;v<2;v++){ r=v?ds1(a5,5,5):ds2(a5,5,5); printf("Q3 v%d 5:",v); for(int i=0;i<5;i++)printf(" %d",r[i]); free(r);
    r=v?ds1(a5,5,7):ds2(a5,5,7); printf(" | 7:"); for(int i=0;i<5;i++)printf(" %d",r[i]); free(r);
    r=v?ds1(a3,3,2):ds2(a3,3,2); printf(" | 2:"); for(int i=0;i<3;i++)printf(" %d",r[i]); free(r); printf("\n"); }
  int bd=0; srand(3);
  for(int it=0;it<20000;it++){ int n=1+rand()%8,a[8],x=0; for(int i=0;i<n;i++){x+=1+rand()%4;a[i]=x;} int num=a[rand()%n];
    int*p=ds1(a,n,num),*q=ds2(a,n,num); if(memcmp(p,q,n*sizeof(int)))bd++; free(p);free(q); }
  printf("Q3 efficient vs regular differ %d (want 0)\n",bd);
  int V[R][C]={{255,255,255,255,255,255},{255,20,62,10,1,255},{255,25,27,50,1,255},{255,30,63,2,1,255},{255,255,255,255,255,255}};
  int V2[R][C]; memcpy(V2,V,sizeof V);
  int H[5]={5,30,64,100,150}; int br=0;
  for(int k=0;k<5;k++){ int A[R][C],B[R][C]; memcpy(A,V,sizeof V); memcpy(B,V,sizeof V);
    int x=wf(A,1,1,H[k]), y=wf2(B,1,1,H[k]); printf("Q4 H=%d: %d %d\n",H[k],x,y); if(x!=y)br++; }
  (void)V2; printf("Q4 mismatches %d\n",br);
  return 0; }
