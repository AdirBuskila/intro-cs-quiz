#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#define R 4
#define C 4
static int swaps=0;
void swap(int*x,int*y){int t=*x;*x=*y;*y=t;swaps++;}
void sp1(int* a, int size){ int i; for (i = 1; i < size/2 ; i += 2) swap(a + i, a + size - i); }
void sp1_bug(int* a, int size){ int i; for (i = 1; i < size ; i += 2) swap(a + i, a + size - i); }
void sq1(char* str){ int i, pos = 0; int count[26] = { 0 }; int len = strlen(str);
  for (i = 0; i < len; ++i) count[str[i] - 'a']++;
  for (i = 0; i < len; ++i){ if (count[str[i] - 'a'] == 3) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; } }
  str[pos] = '\0'; }
void sq1_bug(char* str){ int i, pos = 0; int count[26] = { 0 }; int len = strlen(str);
  for (i = 0; i < len; ++i) count[str[i] - 'a']++;
  for (i = 0; i < len; ++i){ if (count[str[i] - 'a'] == 2) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; } }
  str[pos] = '\0'; }
#define DS(NAME,CMP) int* NAME(int* a, int n, int num){ int first = 0, last = n - 1, new_position = n - 1; \
  int* new_sort = (int*)malloc(n * sizeof(int)); assert(new_sort); \
  while (first <= last) { if (a[last] - num CMP num - a[first]) { new_sort[new_position--] = a[last--]; } \
  else new_sort[new_position--] = a[first++]; } return new_sort; }
DS(ds,>=)
DS(ds_bug,>)
int wf(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC]) return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255;
    return fill + wf(valley, cloudR - 1, cloudC, cloudH) + wf(valley, cloudR + 1, cloudC, cloudH)
        + wf(valley, cloudR, cloudC - 1, cloudH) + wf(valley, cloudR, cloudC + 1, cloudH);
}
int wf_bug(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC]) return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255;
    return fill + wf_bug(valley, cloudR - 1, cloudC, cloudH) + wf_bug(valley, cloudR + 1, cloudC, cloudH)
        + wf_bug(valley, cloudR, cloudC - 1, cloudH) + wf_bug(valley, cloudR, cloudC - 1, cloudH);
}
static void pr(int*p,int n){for(int i=0;i<n;i++)printf(" %d",p[i]);printf("\n");}
int main(void){
  int e[]={1,2,3,7,8,9}; swaps=0; sp1(e,6); printf("Q1 sp1:"); pr(e,6); printf("Q1 swaps size6=%d\n",swaps);
  int e2[]={1,2,3,4,9,10,11,12,13,14,15,16}; /* size 12 swaps count only */ swaps=0; sp1(e2,12); printf("Q1 swaps size12=%d\n",swaps);
  int e3[]={1,2,3,7,8,9}; sp1_bug(e3,6); printf("Q1 bug:"); pr(e3,6);
  char s[]="abcabcabc"; sq1(s); printf("Q2 abcabcabc -> %s\n",s);
  char s2[]="dbcabafacbcbdd"; sq1(s2); printf("Q2 example -> %s\n",s2);
  char s3[]="xyxyxzzzy"; sq1(s3); printf("Q2 xyxyxzzzy -> %s\n",s3);
  char s4[]="dbcabafacbcbdd"; sq1_bug(s4); printf("Q2 bug example -> %s\n",s4);
  int a5[]={1,2,5,7,10},a3[]={1,2,3}; int*r;
  r=ds(a5,5,7); printf("Q3 7:"); pr(r,5); free(r);
  r=ds(a3,3,2); printf("Q3 2:"); pr(r,3); free(r);
  r=ds_bug(a3,3,2); printf("Q3 bug 2:"); pr(r,3); free(r);
  r=ds_bug(a5,5,7); printf("Q3 bug 7:"); pr(r,5); free(r);
  int V[R][C]={{255,255,255,255},{255,3,5,255},{255,4,9,255},{255,255,255,255}};
  int H[]={3,4,6,10}; for(int k=0;k<4;k++){int A[R][C],B[R][C];memcpy(A,V,sizeof V);memcpy(B,V,sizeof V);
    printf("Q4 H=%d: %d bug %d\n",H[k],wf(A,1,1,H[k]),wf_bug(B,1,1,H[k]));}
  return 0;}
