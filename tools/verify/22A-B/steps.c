#include <stdio.h>
#include <string.h>
#define N 4
int M1a[4][4]={{10,2,7,1},{2,7,-1,6},{1,-2,-6,-5},{-2,4,7,9}};
int M2a[4][4]={{10,2,7,1},{2,7,-1,5},{1,-2,-6,-5},{-2,4,7,9}};
int M1b[4][4]={{10,2,7,-1},{2,7,-20,4},{9,-2,-6,6},{-1,7,7,9}};
int M2b[4][4]={{10,2,7,1},{2,7,-20,4},{9,-2,-6,6},{-1,4,7,9}};
#define ROWF(name,COND) int name(int M[][N]){int i,j,sum;for(i=0;i<N;i++){sum=0;for(j=0;j<N;j++){sum+=M[i][j];}if(COND)return 0;}return 1;}
ROWF(f_1, sum-M[i][i]!=M[i][i])
ROWF(f_1_eq, sum-M[i][i]==M[i][i])
ROWF(f_1_nodiag, sum!=M[i][i])
ROWF(f_1_plus, sum+M[i][i]!=M[i][i])
#define COLF(name,TERM,COND) int name(int M[][N]){int i,j,sum;for(j=0;j<N;j++){sum=0;for(i=0;i<N;i++){sum+=TERM;}if(COND)return 0;}return 1;}
COLF(f_11, M[i][j], sum-M[j][j]!=M[j][j])
COLF(f_11_rowterm, M[j][i], sum-M[j][j]!=M[j][j])
COLF(f_11_diagterm, M[i][i], sum-M[j][j]!=M[j][j])
COLF(f_11_nodiag, M[i][j], sum!=M[j][j])
int calls;
int f_2(int *c,int k,int i,int j){ calls++; if(i==j) return -1; if(c[i]+c[j]==k) return i; if(c[i]+c[j]>k) return f_2(c,k,i,j-1); return f_2(c,k,i+1,j);}
int f_2m(int *c,int k,int i,int j){ if(i==j) return -1; if(c[i]+c[j]==k) return i; if(c[i]+c[j]<k) return f_2m(c,k,i,j-1); return f_2m(c,k,i+1,j);}
#define F3(name, GT, W1) int name(char*str){int a[26]={0};int i=0;while(*str){a[*str-'a']++;if(a[*str-'a'] GT) return 0;str++;}while((i<26)&&(a[i]==0))i++;while W1 i++;while(i<26){if(a[i]!=0)return 0;i++;}return 1;}
F3(f_3, >1, ((i<26)&&(a[i]==1)))
F3(f_3_ge, >=1, ((i<26)&&(a[i]==1)))
F3(f_3_w0, >1, ((i<26)&&(a[i]==0)))
F3(f_3_wgt, >1, ((i<26)&&(a[i]>1)))
F3(f_3_wall, >1, (i<26))
int maxmax(int n){int max,i,num;scanf("%d",&max);for(i=0;i<n-1;i++){scanf("%d",&num);if(num>max){printf("%d",num);max=num;}}return 0;}
int maxmax_ge(int n){int max,i,num;scanf("%d",&max);for(i=0;i<n-1;i++){scanf("%d",&num);if(num>=max){printf("%d",num);max=num;}}return 0;}
int main(void){
  printf("Q1a f_1: M1=%d M2=%d | eq: %d %d | nodiag: %d %d | plus: %d %d\n",f_1(M1a),f_1(M2a),f_1_eq(M1a),f_1_eq(M2a),f_1_nodiag(M1a),f_1_nodiag(M2a),f_1_plus(M1a),f_1_plus(M2a));
  {int sum=0; for(int j=0;j<4;j++) sum+=M1a[1][j]; printf("Q1a row1 sum-diag=%d\n",sum-M1a[1][1]);}
  printf("Q1b f_11: M1=%d M2=%d | rowterm: %d %d | diagterm: %d %d | nodiag: %d %d\n",f_11(M1b),f_11(M2b),f_11_rowterm(M1b),f_11_rowterm(M2b),f_11_diagterm(M1b),f_11_diagterm(M2b),f_11_nodiag(M1b),f_11_nodiag(M2b));
  {int sum=0; for(int i=0;i<4;i++) sum+=M1b[i][1]; printf("Q1b col1 sum-diag=%d\n",sum-M1b[1][1]);}
  int c[]={-5,-2,12,25,34,40};
  calls=0; int r1=f_2(c,23,0,4); int nc=calls; printf("Q2 ex1=%d calls=%d | ex2=%d | mutant ex1=%d ex2=%d\n",r1,nc,f_2(c,23,2,4),f_2m(c,23,0,4),f_2m(c,23,2,4));
  printf("Q3 cbed=%d dcbd=%d dbcj=%d ca=%d cab=%d abd=%d b=%d\n",f_3("cbed"),f_3("dcbd"),f_3("dbcj"),f_3("ca"),f_3("cab"),f_3("abd"),f_3("b"));
  printf("Q3 mut >=1: b=%d ; \n",f_3_ge("b"));
  /* exhaustive over a..e len<=4 vs reference */
  const char*nm[4]={"ge","w==0","w>1","w-all"}; int (*fs[4])(char*)={f_3_ge,f_3_w0,f_3_wgt,f_3_wall}; int bad[4]={0}; int badf=0; char ce[4][8]={"","","",""};
  char s[8];
  for(int len=1;len<=4;len++){ int tot=1; for(int t=0;t<len;t++) tot*=5; for(int x=0;x<tot;x++){ int y=x; for(int t=0;t<len;t++){ s[t]='a'+y%5; y/=5;} s[len]=0;
    int cnt[26]={0},ok=1,mn=26,mx=-1; for(int t=0;t<len;t++){ cnt[s[t]-'a']++; if(cnt[s[t]-'a']>1) ok=0; if(s[t]-'a'<mn)mn=s[t]-'a'; if(s[t]-'a'>mx)mx=s[t]-'a'; }
    if(ok) for(int q=mn;q<=mx;q++) if(!cnt[q]) ok=0;
    if(f_3(s)!=ok) badf++;
    for(int m=0;m<4;m++) if(fs[m](s)!=ok){ if(!bad[m]) strcpy(ce[m],s); bad[m]++; } } }
  printf("Q3 official wrong=%d ;",badf); for(int m=0;m<4;m++) printf(" %s wrong=%d (e.g. %s)",nm[m],bad[m],ce[m]); puts("");
  FILE*f; f=fopen("in1.txt","w"); fputs("2 6 3 4 7 5\n",f); fclose(f); freopen("in1.txt","r",stdin); printf("Q4 out=["); maxmax(6); printf("]\n");
  f=fopen("in2.txt","w"); fputs("2 2 3\n",f); fclose(f); freopen("in2.txt","r",stdin); printf("Q4 '2 2 3' out=["); maxmax(3); printf("]\n");
  freopen("in2.txt","r",stdin); printf("Q4 mutant >= '2 2 3' out=["); maxmax_ge(3); printf("]\n");
  remove("in1.txt"); remove("in2.txt");
  return 0;}
