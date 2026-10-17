// Independent refuter check of every numeric/choice/text-derived value in the 22 ai-draft step sets.
// build: clang refute_values.c -o refute_values.exe
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
static int calls;
#define CK(name, got, want) do{ int g_=(got), w_=(want); printf("%-34s got %d want %d %s\n", name, g_, w_, g_==w_?"ok":"MISMATCH"); }while(0)

/* 19A-A */
int fun(int x,int y){calls++; if(y<0){y=-y;x=-x;} if(y==1)return x; return fun(x,y-1)+x;}
int pal(int*a,int n){calls++; if(n<=1)return 1; return a[0]!=a[n-1]?0:pal(a+1,n-2);}
int oddcount(int*a,int n){int t[16]={0},i,c=0;for(i=0;i<n;i++)t[a[i]]++;for(i=0;i<n;i++)if(t[i]%2)c++;return c;}
int bonus(int*a,int n){int c=oddcount(a,n);return c>1?c-1:0;}
int diffel(int*a,int*b,int n,int*iters){int ia=0,ib=n-1;*iters=0;while(ia<n&&ib>=0){(*iters)++;if(a[ia]==b[ib])return 0;if(a[ia]<b[ib])ia++;else ib--;}return 1;}
/* 19A-B */
int fn(int x,int y){calls++; if(y==0)return x; if(y<0)return fn(x,y+1)-1; return fn(x,y-1)+1;}
int dp(int n){calls++; if(n==0)return 1; if(n%10%2!=0)return 0; n/=10; if(n==0)return 1; if(n%10%2==0)return 0; return dp(n/10);}
int inrange(int*a,int n){int s[16]={0},i,c=0;for(i=0;i<n;i++)if(a[i]>=0&&a[i]<n&&!s[a[i]]){s[a[i]]=1;c++;}return c;}
int total(int*a,int n){return inrange(a,n);}
int minprefix(int*a,int n){int s[16]={0},i,t=total(a,n),f=0;for(i=0;i<n;i++){if(a[i]>=0&&a[i]<n&&!s[a[i]]){s[a[i]]=1;f++;}if(f==t)return i;}return -1;}
int midof(int*a,int n){int m=1;while(m<n&&a[m-1]<=a[m])m++;return m;}
int rot(int*a,int*b,int n,int*kk){int i,k=-1;for(i=0;i<n;i++)if(b[i]==a[0])k=i;*kk=k;if(k<0)return 0;for(i=0;i<n;i++)if(b[(i+k)%n]!=a[i])return 0;return 1;}
/* 24A-B */
int zc(int*p,int n,int*q,int m){calls++; if(n==0||m==0)return 0; if(p[0]+q[m-1]==0)return 1; if(p[0]<-q[m-1])return zc(p+1,n-1,q,m); return zc(p,n,q,m-1);}
int twod(const char*s){int c[100]={0},i,b=0;for(i=0;s[i]&&s[i+1];i++)c[(s[i]-'0')*10+(s[i+1]-'0')]++;for(i=1;i<100;i++)if(c[i]>c[b])b=i;return b;}
int cmpi(const void*x,const void*y){return *(int*)x-*(int*)y;}
int maxrun(int*a,int n){qsort(a,n,sizeof(int),cmpi);int i,r=1,b=1;for(i=1;i<n;i++){r=a[i]==a[i-1]?r+1:1;if(r>b)b=r;}return b;}
/* 25A-B */
int par(int*a,int n){calls++; if(n==0)return 0; if((a[n-1]+n)%2==0)return 1+par(a,n-1); return par(a,n-1);}

int main(void){
  int k, it;
  CK("19A-A Q1 fun(3,4)",fun(3,4),12); calls=0; fun(3,4); CK("19A-A Q1 calls(3,4)",calls,4); CK("19A-A Q1 fun(5,-3)",fun(5,-3),-15);
  { int a[]={1,3,2,2,3,1}; calls=0; CK("19A-A Q2 pal result",pal(a,6),1); CK("19A-A Q2 calls",calls,4); }
  { int a[]={1,1,5,0,1,1,0}; CK("19A-A Q3a odd",oddcount(a,7),1); CK("19A-A Q3a ret", oddcount(a,7)<2,1); }
  { int a[]={0,1,2}; CK("19A-A Q3a {0,1,2}",oddcount(a,3)<2,0); }
  { int a[]={1,1,4,3,1}; CK("19A-A Q3b count",oddcount(a,5),3); CK("19A-A Q3b ret",bonus(a,5),2);}
  { int a[]={0,1,2,3}; CK("19A-A Q3b {0..3}",bonus(a,4),3);}
  { int a[]={1,2,3},b[]={9,8,7}; int r=diffel(a,b,3,&it); CK("19A-A Q4 iters",it,3); CK("19A-A Q4 ret",r,1);}
  { int a[]={1,3,5},b[]={9,6,3}; CK("19A-A Q4 choice",diffel(a,b,3,&it),0);}
  { int b[]={15,11,2,8}; qsort(b,4,sizeof(int),cmpi); for(k=0;k<4;k++)if(b[k]==11)CK("19A-A Q5 idx of 11",k,2);
    int a[]={12,2,14,2},hit=0,i,j,searches=0; for(i=0;i<4;i++){searches++;for(j=0;j<4;j++)if(b[j]==5-a[i])hit=1; if(hit)break;} CK("19A-A Q5 searches d=5",searches,4); CK("19A-A Q5 hit d=5",hit,0);
    hit=0; for(i=0;i<4;i++)for(j=0;j<4;j++)if(a[i]+b[j]==23)hit=1; CK("19A-A Q5 d=23",hit,1);}
  { int M[3][3]={{12,19,14},{17,15,13},{16,11,18}}; CK("19A-A Q6 sum",M[0][0]+M[0][1]+M[0][2],45);
    int N[3][3]={{1,2,3},{2,3,1},{3,1,2}}; int r=N[0][0]+N[0][1]+N[0][2],ok=1,i;
    for(i=0;i<3;i++){if(N[i][0]+N[i][1]+N[i][2]!=r)ok=0;if(N[0][i]+N[1][i]+N[2][i]!=r)ok=0;}
    if(N[0][0]+N[1][1]+N[2][2]!=r)ok=0; if(N[0][2]+N[1][1]+N[2][0]!=r)ok=0; CK("19A-A Q6 choice",ok,0);
    printf("   antidiag=%d main=%d\n",N[0][2]+N[1][1]+N[2][0],N[0][0]+N[1][1]+N[2][2]);
    int B[3][3]={{1,2,3},{3,1,2},{2,3,1}}; printf("   findbug matrix: rows %d %d %d cols %d %d %d main %d anti %d\n",
      B[0][0]+B[0][1]+B[0][2],B[1][0]+B[1][1]+B[1][2],B[2][0]+B[2][1]+B[2][2],B[0][0]+B[1][0]+B[2][0],B[0][1]+B[1][1]+B[2][1],B[0][2]+B[1][2]+B[2][2],B[0][0]+B[1][1]+B[2][2],B[0][2]+B[1][1]+B[2][0]); }
  CK("19A-B Q1 fn(5,3)",fn(5,3),8); CK("19A-B Q1 fn(5,-3)",fn(5,-3),2); calls=0; fn(5,-3); CK("19A-B Q1 calls",calls,4);
  calls=0; dp(43418); CK("19A-B Q2 calls",calls,3); CK("19A-B Q2 dp(43418)",dp(43418),1); CK("19A-B Q2 dp(12)",dp(12),1); CK("19A-B Q2 dp(21)",dp(21),0); CK("19A-B Q2 dp(343518)",dp(343518),0);
  { int a[]={3,3,-1,0,7,0}; CK("19A-B Q3a",inrange(a,6),2);}
  { int a[]={1,9999,1,4,2,1}; CK("19A-B Q3b total",total(a,6),3); CK("19A-B Q3b idx",minprefix(a,6),4);}
  { int a[]={0,0,0,1,1}; CK("19A-B Q3b {0,0,0,1,1}",minprefix(a,5),3);}
  { int a[]={5,2,8,4,1},b[]={4,1,5,2,8}; CK("19A-B Q4 ret",rot(a,b,5,&k),1); CK("19A-B Q4 k",k,2);}
  { int a[]={1,2,3},b[]={3,2,1}; CK("19A-B Q4 choice",rot(a,b,3,&k),0);}
  { int a[]={1,1,4,8,-2,3}; CK("19A-B Q5 mid1",midof(a,6),4); int c[]={5,6,7,1,2}; CK("19A-B Q5 mid2",midof(c,5),3);}
  { int A[3][3]={{1,2,1},{3,4,3},{1,2,1}},bad=0,i,j,di,dj; for(i=0;i<3;i++)for(j=0;j<3;j++)for(di=-1;di<=1;di++)for(dj=-1;dj<=1;dj++){int x=i+di,y=j+dj;if((di||dj)&&x>=0&&x<3&&y>=0&&y<3&&A[x][y]==A[i][j])bad=1;} CK("19A-B Q6 choice",!bad,1);
    int pairs=0; for(i=0;i<3;i++)for(j=0;j<3;j++)for(di=-1;di<=1;di++)for(dj=-1;dj<=1;dj++){int x=i+di,y=j+dj;if((di||dj)&&x>=0&&x<3&&y>=0&&y<3)pairs++;} CK("19A-B Q6 pairs (ordered/2)",pairs/2,20);
    int B[3][3]={{1,2,3},{4,1,5},{6,7,8}}; int eq=0; for(i=0;i<3;i++)for(j=0;j<3;j++)for(di=-1;di<=1;di++)for(dj=-1;dj<=1;dj++){int x=i+di,y=j+dj;if((di||dj)&&x>=0&&x<3&&y>=0&&y<3&&B[x][y]==B[i][j])eq=1;} CK("19A-B Q6 findbug matrix correct=0",!eq,0);}
  /* 24A-B Q1 */
  { int a[]={0,1,1,0,3,5},s[7]={0},i,c=0; for(i=0;i<6;i++)s[a[i]]=1; for(i=0;i<=6;i++)if(!s[i])c++; CK("24A-B Q1 newSize",c,3); printf("   missing:"); for(i=0;i<=6;i++)if(!s[i])printf(" %d",i); printf("\n");
    int b[]={1,1},t[3]={0}; for(i=0;i<2;i++)t[b[i]]=1; printf("   {1,1} n=2 missing:"); for(i=0;i<=2;i++)if(!t[i])printf(" %d",i); printf("\n"); }
  CK("24A-B Q2 0001",twod("0001"),0); CK("24A-B Q2 426144",twod("426144"),14); CK("24A-B Q2 1234",twod("1234"),12); CK("24A-B Q2 222211",twod("222211"),22); CK("24A-B Q2 2121..",twod("21212121212"),12);
  { int p[]={1,4,8,11},q[]={-20,-15,-11,-3,-2},q2[]={-20,-15,-12,-3,-2}; calls=0; CK("24A-B Q3 ex1",zc(p,4,q,5),1); CK("24A-B Q3 calls1",calls,6); calls=0; CK("24A-B Q3 ex2",zc(p,4,q2,5),0); CK("24A-B Q3 calls2",calls,7);}
  { int a[]={5,5,1,5,1,5}; CK("24A-B Q4 a",maxrun(a,6),4); int b[]={2,9,2,9,2}; CK("24A-B Q4 b",maxrun(b,5),3);
    int c[]={1,2,-3005,2,3,1,-1000,3,7,-11,2,15,2,3,90,7,2,2,1000}; CK("24A-B Q4 exam",maxrun(c,19),6);}
  { int a[]={3,4}; CK("25A-B Q1 {3,4}",par(a,2),2); int b[]={8,8,6,5,51,7}; calls=0; CK("25A-B Q1 ex2",par(b,6),2); CK("25A-B Q1 calls",calls,7);
    int c[]={8,7,22,-5,14,3,2}; CK("25A-B Q1 ex1",par(c,7),0);}
  { int a1[]={9,-5,3,-15,-21,2,-6,12,23},a2[]={99,2,3,4,-5,6,7,1,9},i,j,s=0; for(i=0;i<9;i++){int f=0;for(j=0;j<9;j++)if(a1[j]==a2[i])f=1;s+=f;} CK("25A-B Q2 sum arr2",s,4);}
  { const char*t="intelligence"; int c[26]={0},i; for(i=0;t[i];i++)c[t[i]-'a']++; CK("25A-B Q3 count e",c['e'-'a'],3);
    const char*w="inciting"; char first='?'; for(i=0;w[i];i++){if(--c[w[i]-'a']<0){first=w[i];break;}} printf("   first negative letter in inciting: %c\n",first);}
  { int im[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}},i,j,a,b,cnt=0,corners=0; for(i=0;i+2<6;i++)for(j=0;j+2<6;j++){corners++;int ok=1;for(a=i;a<i+3;a++)for(b=j;b<j+3;b++)if(!im[a][b])ok=0;cnt+=ok;} CK("25A-B Q4 corners",corners,16); CK("25A-B Q4 count",cnt,4);}
  return 0;
}
