#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 5
/* official-as-claimed */
int index_half(int* arr,int size){int i,h,s=0;for(i=0;i<size;i++)s+=arr[i];if(s%2)return -1;h=s/2;s=0;for(i=0;i<size-1;i++){s+=arr[i];if(s==h)return i;}return -1;}
int index_half_bug(int* arr,int size){int i,h,s=0;for(i=0;i<size;i++)s+=arr[i];if(s%2)return -1;h=s;s=0;for(i=0;i<size-1;i++){s+=arr[i];if(s==h)return i;}return -1;}
/* my brute: i in 0..size-2 and also variant including size-1 */
int brute(int*a,int n,int incl){int lim=incl?n:n-1;for(int i=0;i<lim;i++){long p=0,q=0;for(int j=0;j<=i;j++)p+=a[j];for(int j=i+1;j<n;j++)q+=a[j];if(p==q)return i;}return -1;}
int search_in_array(int*a,int size,int key){int l=0,r=size-1;while(l<=r){int m=(l+r)/2;if(a[m]==key)return m;else if(key<a[m]&&a[m]<0)l=m+1;else r=m-1;}return -1;}
int sum_chars(char*s,char c){if(*s=='\0')return 0;if(*s==c)return 1+sum_chars(s+1,c);return sum_chars(s+1,c);}
int viol(int m[N][N],int dbl){int v=0;for(int i=0;i<(dbl?N:N/2);i++)for(int j=0;j<N;j++)if(m[i][j]!=m[N-1-i][j])v++;for(int i=0;i<N;i++)for(int j=0;j<N/2;j++)if(m[i][j]!=m[i][N-1-j])v++;return v;}
int rowsOnly(int m[N][N]){int v=0;for(int i=0;i<N/2;i++)for(int j=0;j<N;j++)if(m[i][j]!=m[N-1-i][j])v++;return v;}
int main(void){
 int a1[]={1,2,3},a2[]={7,0,0,0},a3[]={0,5,-5},a4[]={5,-4,-2,8,10,-3},a5[]={5,-4,-2,8,10,-2};
 printf("Q1 steps: %d %d %d | ex %d %d\n",index_half(a1,3),index_half(a2,4),index_half(a3,3),index_half(a4,6),index_half(a5,6));
 srand(1);int diffs=0,diffIncl=0;
 for(int t=0;t<200000;t++){int n=rand()%8,a[8];for(int i=0;i<n;i++)a[i]=rand()%9-4;
  if(index_half(a,n)!=brute(a,n,0))diffs++; if(brute(a,n,0)!=brute(a,n,1))diffIncl++;
  /* bug variant must fail on some */}
 printf("Q1 official vs brute(i<=n-2) diffs=%d ; excl/incl last-index diffs=%d\n",diffs,diffIncl);
 int bf=0;for(int t=0;t<20000;t++){int n=rand()%8,a[8];for(int i=0;i<n;i++)a[i]=rand()%9-4;if(index_half_bug(a,n)!=brute(a,n,0))bf++;}
 printf("Q1 bug variant fails %d/20000\n",bf);
 int b[]={-1,-5,-13,-15,-21,2,5,12,23};
 int l=0,r=8;printf("Q2 mids:");while(l<=r){int m=(l+r)/2;printf(" %d(%d)",m,b[m]);if(b[m]==-15)break;if(-15<b[m]&&b[m]<0)l=m+1;else r=m-1;}
 printf("\nQ2 result %d\n",search_in_array(b,9,-15));
 /* random Q2 validation */
 int bad=0;for(int t=0;t<200000;t++){int neg=rand()%7,pos=rand()%7,n=neg+pos,a[16],v=-1;
  for(int i=0;i<neg;i++){v-=1+rand()%3;a[i]=v;} v=0;for(int i=0;i<pos;i++){v+=1+rand()%3;a[neg+i]=v;}
  for(int k=-25;k<0;k++){int e=-1;for(int i=0;i<n;i++)if(a[i]==k)e=i;if(search_in_array(a,n,k)!=e)bad++;}}
 printf("Q2 random mismatches=%d\n",bad);
 printf("Q3: %d %d %d %d %d\n",sum_chars("aXa",'a'),sum_chars("street",'z'),sum_chars("street",'e'),sum_chars("street",'t'),sum_chars("aaaa",'a'));
 int np[N][N]={{1,2,8,2,1},{7,4,6,4,7},{5,6,8,7,5},{7,4,6,4,7},{1,2,8,2,4}};
 int pf[N][N]={{1,2,8,2,1},{7,4,6,4,7},{5,9,8,9,5},{7,4,6,4,7},{1,2,8,2,1}};
 printf("Q4: rows %d total %d perfect %d dbl(bug) %d\n",rowsOnly(np),viol(np,0),viol(pf,0),viol(np,1));
 printf("Q4 cols only %d\n",viol(np,0)-rowsOnly(np));
 return 0;}
