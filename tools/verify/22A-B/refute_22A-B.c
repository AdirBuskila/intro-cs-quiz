/* Independent refuter harness for 22A-B (not reusing the author's outputs). */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 4

/* ---- Q1a rows / Q1b columns. v: 0 official, 1 sum!=diag, 2 '==' , 3 sum+diag!=diag ; col=1 for the column version */
static int f1(int M[][N],int v,int col){
  int i,j,sum;
  for(i=0;i<N;i++){
    sum=0; for(j=0;j<N;j++) sum+= col?M[j][i]:M[i][j];
    int d=M[i][i], bad;
    switch(v){case 1:bad=(sum!=d);break;case 2:bad=(sum-d==d);break;case 3:bad=(sum+d!=d);break;default:bad=(sum-d!=d);}
    if(bad) return 0;
  } return 1; }
static int f1_ref(int M[][N],int col){ for(int i=0;i<N;i++){int s=0;for(int j=0;j<N;j++) if(j!=i) s+= col?M[j][i]:M[i][j]; if(s!=M[i][i]) return 0;} return 1; }
/* column fillblank variants: 0 M[i][j], 1 M[j][i], 2 M[i][i] */
static int f11(int M[][N],int v){
  int i,j,sum;
  for(j=0;j<N;j++){ sum=0; for(i=0;i<N;i++) sum+= (v==0)?M[i][j]:(v==1)?M[j][i]:M[i][i];
    if(sum-M[j][j]!=M[j][j]) return 0; }
  return 1; }
static void gen(int M[][N],int col,int valid){
  for(int i=0;i<N;i++)for(int j=0;j<N;j++)M[i][j]=rand()%11-5;
  if(valid){ for(int i=0;i<N;i++){int s=0;for(int j=0;j<N;j++) if(j!=i) s+= col?M[j][i]:M[i][j]; M[i][i]=s; /* diag shared by row i and col i: set sequentially, recheck below */ } }
}
static void test_f1(const char*name,int v,int col){
  srand(2); int bad=0,N2=20000,vc=0,first=1;
  for(int t=0;t<N2;t++){ int M[N][N]; gen(M,col,rand()%2);
    /* diag assignments interact (a diagonal cell is in its row and its column), so only keep what the reference says */
    int w=f1_ref(M,col); vc+=w; int g=f1(M,v,col);
    if(g!=w){bad++; if(first){first=0;printf("   witness (want %d got %d) diag=",w,g);for(int i=0;i<N;i++)printf("%d ",M[i][i]);printf("\n");}}}
  printf("Q1%c %-28s wrong=%d of %d (valid matrices seen: %d)\n",col?'b':'a',name,bad,N2,vc);
}

/* ---- Q2. v: 0 official, 1 '<' , 2 i+1 on >, 3 j+1, 4 i-1 ; also 5: '>' before '==' (order swap) */
static int cap;
static int f2(int*c,int k,int i,int j,int v,int d,int*calls){
  (*calls)++; if(d>50){cap=1;return -2;}
  if(i==j) return -1;
  int s=c[i]+c[j];
  if(v==5){ if(s>k) return f2(c,k,i,j-1,v,d+1,calls); if(s==k) return i; return f2(c,k,i+1,j,v,d+1,calls); }
  if(s==k) return i;
  int big=(v==1)?(s<k):(s>k);
  if(big){ switch(v){case 2:return f2(c,k,i+1,j,v,d+1,calls);case 3:return f2(c,k,i,j+1,v,d+1,calls);case 4:return f2(c,k,i-1,j,v,d+1,calls);default:return f2(c,k,i,j-1,v,d+1,calls);} }
  return f2(c,k,i+1,j,v,d+1,calls);
}
static int cmpi(const void*x,const void*y){return *(int*)x-*(int*)y;}
static int f2_has(int*c,int k,int i,int j){ for(int a=i;a<=j;a++)for(int b=a+1;b<=j;b++) if(c[a]+c[b]==k) return 1; return 0; }
static int f2_valid(int*c,int k,int i,int j,int r){ if(r<i||r>j)return 0; for(int b=i;b<=j;b++) if(b!=r&&c[r]+c[b]==k) return 1; return 0; }
static void test_f2(const char*name,int v){
  srand(6); int bad=0,NN=30000,first=1;
  for(int t=0;t<NN;t++){
    int buf[40]; for(int q=0;q<40;q++)buf[q]=rand()%20-5; int n=rand()%7+2; qsort(buf,n,sizeof(int),cmpi);
    /* padding after n is random (not sorted) so OOB moves read garbage */
    int i=rand()%(n-1), j=i+1+rand()%(n-1-i); int k=rand()%30-6; int calls=0; cap=0;
    int r=f2(buf,k,i,j,v,0,&calls); int has=f2_has(buf,k,i,j);
    int ok= cap?0 : (has? f2_valid(buf,k,i,j,r):(r==-1));
    if(!ok){bad++; if(first){first=0;printf("   witness c=");for(int q=0;q<n;q++)printf("%d ",buf[q]);printf("k=%d i=%d j=%d -> %d (pair exists=%d)%s\n",k,i,j,r,has,cap?" [recursion cap]":"");}}
  }
  printf("Q2 %-28s wrong=%d of %d\n",name,bad,NN);
}

/* ---- Q3. f_3 official ; mid-loop variants: 0 ==1, 1 ==0, 2 >1, 3 plain i<26 ; 4 '>= 1' dup check ; 9 version2 */
static int f3(const char*s,int v){
  int a[26]={0}; int i=0;
  while(*s){ a[*s-'a']++; if(v==4? a[*s-'a']>=1 : a[*s-'a']>1) return 0; s++; }
  while(i<26&&a[i]==0)i++;
  switch(v){
    case 1: while(i<26&&a[i]==0)i++; break;
    case 2: while(i<26&&a[i]>1)i++; break;
    case 3: while(i<26)i++; break;
    default: while(i<26&&a[i]==1)i++;
  }
  while(i<26){ if(a[i]!=0) return 0; i++; }
  return 1;
}
static int f33(const char*s){
  int count[26]={0},i,j; char mn='z',mx='a';
  while(*s){ count[*s-'a']++; if(count[*s-'a']>1) return 0; if(mn>*s) mn=*s; else if(mx<*s) mx=*s; s++; }
  i=mn-'a'; j=mx-'a'; while(i<=j){ if(count[i]!=1) return 0; i++; } return 1; }
static int f3_ref(const char*s){ int seen[26]={0},mn=26,mx=-1; for(;*s;s++){int c=*s-'a'; if(seen[c])return 0; seen[c]=1; if(c<mn)mn=c; if(c>mx)mx=c;} for(int c=mn;c<=mx;c++) if(!seen[c]) return 0; return 1; }
static void test_f3(const char*name,int v){
  int bad=0,tot=0,first=1; char s[8];
  for(int len=1;len<=4;len++){ int total=1; for(int q=0;q<len;q++)total*=5;
    for(int code=0;code<total;code++){ int x=code; for(int q=0;q<len;q++){s[q]='a'+x%5;x/=5;} s[len]=0; tot++;
      int g=(v==9)?f33(s):f3(s,v); int w=f3_ref(s);
      if(g!=w){bad++; if(first){first=0;printf("   witness \"%s\" -> %d (want %d)\n",s,g,w);}}}}
  printf("Q3 %-28s wrong=%d of %d\n",name,bad,tot);
}

/* ---- Q4 maxmax with scanf replaced by array. v: 0 '>', 1 '>=', 2 '<', 3 '!=' */
static void mm(int*in,int n,int v,char*out){
  int max,num,i,p=0; out[0]=0; max=in[p++];
  for(i=0;i<n-1;i++){ num=in[p++]; int c;
    switch(v){case 1:c=num>=max;break;case 2:c=num<max;break;case 3:c=num!=max;break;default:c=num>max;}
    if(c){ char t[16]; sprintf(t,"%d",num); strcat(out,t); max=num; } }
}
static void mm_ref(int*in,int n,char*out){ out[0]=0; for(int i=1;i<n;i++){ int ok=1; for(int j=0;j<i;j++) if(in[j]>=in[i]) ok=0; if(ok){char t[16];sprintf(t,"%d",in[i]);strcat(out,t);} } }
static void test_mm(const char*name,int v){
  srand(17); int bad=0,NN=20000,first=1;
  for(int t=0;t<NN;t++){ int n=rand()%8+1,in[9]; for(int i=0;i<n;i++)in[i]=rand()%7; char o[100],w[100]; mm(in,n,v,o); mm_ref(in,n,w);
    if(strcmp(o,w)){bad++; if(first){first=0;printf("   witness in=");for(int i=0;i<n;i++)printf("%d ",in[i]);printf("-> \"%s\" (want \"%s\")\n",o,w);}}}
  printf("Q4 %-28s wrong=%d of %d\n",name,bad,NN);
}

int main(void){
  int A1[4][4]={{10,2,7,1},{2,7,-1,6},{1,-2,-6,-5},{-2,4,7,9}}, A2[4][4]={{10,2,7,1},{2,7,-1,5},{1,-2,-6,-5},{-2,4,7,9}};
  int B1[4][4]={{10,2,7,-1},{2,7,-20,4},{9,-2,-6,6},{-1,7,7,9}}, B2[4][4]={{10,2,7,1},{2,7,-20,4},{9,-2,-6,6},{-1,4,7,9}};
  printf("Q1a f_1: M1=%d M2=%d ; row1 sum w/o diag=%d\n",f1(A1,0,0),f1(A2,0,0),2+(-1)+6);
  printf("Q1b f_11: M1=%d M2=%d ; col1 sum w/o diag=%d ; M2 col1 sum=%d\n",f11(B1,0),f11(B2,0),B1[0][1]+B1[2][1]+B1[3][1],B2[0][1]+B2[2][1]+B2[3][1]);
  printf("Q1a variants on M1: sum!=d:%d '==':%d sum+d:%d\n",f1(A1,1,0),f1(A1,2,0),f1(A1,3,0));
  printf("Q1b variants on B1: M[j][i]:%d M[i][i]:%d\n",f11(B1,1),f11(B1,2));
  printf("Q1b findbug (sum!=M[j][j]) on B1: ");
  { int bad=0; for(int j=0;j<N;j++){int s=0;for(int i=0;i<N;i++)s+=B1[i][j]; if(s!=B1[j][j])bad=1;} printf("%d\n",bad?0:1); }
  /* construct genuinely valid matrices (solve for a consistent set is hard); rely on the 4 examples plus random + planted below */
  test_f1("official rows",0,0); test_f1("sum!=diag",1,0); test_f1("'=='",2,0); test_f1("sum+diag",3,0);
  test_f1("official cols",0,1);
  { int w[2]={0}; w[0]=f1(A1,1,0)!=f1_ref(A1,0); w[1]=f1(A1,2,0)!=f1_ref(A1,0); printf("   distractors disagree with truth on example M1: %d %d\n",w[0],w[1]); }
  { int c[6]={-5,-2,12,25,34,40}; int calls=0; cap=0; int r=f2(c,23,0,4,0,0,&calls); int calls2=0; int r2=f2(c,23,2,4,0,0,&calls2); printf("Q2 example1 -> %d in %d calls ; example2 -> %d\n",r,calls,r2);
    calls=0; r=f2(c,23,0,4,1,0,&calls); printf("Q2 findbug '<' example1 -> %d\n",r); }
  test_f2("official",0); test_f2("'<' findbug",1); test_f2("i+1 on >",2); test_f2("j+1 on >",3); test_f2("i-1 on >",4); test_f2("'>' before '==' (order swap)",5);
  printf("Q3 ca=%d cab=%d ; version2 ca=%d\n",f3("ca",0),f3("cab",0),f33("ca"));
  test_f3("official f_3",0); test_f3("loop ==0 (b)",1); test_f3("loop >1 (c)",2); test_f3("plain i<26 (d)",3); test_f3("findbug >=1",4); test_f3("version 2 f_33",9);
  { int in[6]={2,6,3,4,7,5}; char o[64]; mm(in,6,0,o); int cnt=(int)strlen(o); printf("Q4 example -> \"%s\" (%d chars)\n",o,cnt); int in2[3]={2,2,3}; mm(in2,3,1,o); printf("Q4 '>=' on 2 2 3 -> \"%s\"\n",o); }
  test_mm("official",0); test_mm(">= (findbug)",1); test_mm("<",2); test_mm("!=",3);
  return 0; }
