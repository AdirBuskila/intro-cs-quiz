import sys,os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
build_run(D,'q1',HDR+code_of('25A-B',1)+r'''
int main(){int bad=0;for(int t=0;t<300000;t++){int n=rnd()%11;int a[11];for(int i=0;i<n;i++)a[i]=(int)(rnd()%41)-20;int c=0;for(int i=0;i<n;i++){int pv=((a[i]%2)+2)%2,pi=i%2;if(pv!=pi)c++;}if(c!=check_parity(a,n))bad++;}
 int e1[7]={8,7,22,-5,14,3,2},e2[6]={8,8,6,5,51,7};printf("q1 bad=%d ex %d %d\n",bad,check_parity(e1,7),check_parity(e2,6));return 0;}''')
base=code_of('25A-B',2)
# variant A: library binary_search returns index/-1 (the 19A-A semantics); variant B: returns 1/0 as the student assumed
for tag,defn in [('idx','int bsx(int*a,int n,int x){return binary_search(a,n,x);}'),('01','int bsx(int*a,int n,int x){return binary_search(a,n,x)>=0;}')]:
    body=base.replace('binary_search(temp','bsx(temp').replace('#include <assert.h>','')
    build_run(D,'q2_'+tag,HDR+defn+'\n'+body+r'''
int main(){int bad=0;for(int t=0;t<200000;t++){int n=1+rnd()%9;int a[9],b[9],o[9];int pool[30];for(int i=0;i<30;i++)pool[i]=i-15;for(int i=29;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}
 for(int i=0;i<n;i++)a[i]=pool[i];for(int i=29;i>0;i--){int j=rnd()%(i+1);int x=pool[i];pool[i]=pool[j];pool[j]=x;}for(int i=0;i<n;i++){b[i]=pool[i];int f=0;for(int j=0;j<n;j++)if(a[j]==b[i])f=1;o[i]=f;}
 int a0[9];memcpy(a0,a,n*4);search_in_array(a,b,n);if(memcmp(b,o,n*4)||memcmp(a,a0,n*4))bad++;}
 printf("q2 variant bad=%d\n",bad);return 0;}'''.replace('variant','VAR_'+tag))
build_run(D,'q3',HDR+code_of('25A-B',3)+r'''
int main(){int bad=0;for(int t=0;t<500000;t++){char tx[14],w[10];int al=(rnd()%2)?4:26;int lt=rnd()%13,lw=rnd()%8;for(int i=0;i<lt;i++)tx[i]='a'+rnd()%al;tx[lt]=0;for(int i=0;i<lw;i++)w[i]='a'+rnd()%al;w[lw]=0;
 int ct[26]={0},ok=1;for(int i=0;i<lt;i++)ct[tx[i]-'a']++;for(int i=0;i<lw;i++)if(ct[w[i]-'a']-->0);else ok=0;
 /* independent ref: for each letter, occurrences in word <= occurrences in text */ int ok2=1;for(int c=0;c<26;c++){int a=0,b=0;for(int i=0;i<lt;i++)a+=tx[i]=='a'+c;for(int i=0;i<lw;i++)b+=w[i]=='a'+c;if(b>a)ok2=0;}
 if(ok2!=word_in_text(tx,w))bad++;}
 const char*ws[6]={"glue","glee","client","electing","inciting","intelligence"};printf("q3 bad=%d ex:",bad);for(int i=0;i<6;i++)printf(" %d",word_in_text("intelligence",(char*)ws[i]));putchar(10);return 0;}''')
src=HDR+'#define N 6\n'+code_of('25A-B',4)+r'''
static int ref(int m[N][N]){int ps[N+1][N+1];memset(ps,0,sizeof ps);for(int i=0;i<N;i++)for(int j=0;j<N;j++)ps[i+1][j+1]=ps[i][j+1]+ps[i+1][j]-ps[i][j]+m[i][j];int c=0;for(int i=0;i+3<=N;i++)for(int j=0;j+3<=N;j++)if(ps[i+3][j+3]-ps[i][j+3]-ps[i+3][j]+ps[i][j]==9)c++;return c;}
int main(){int im[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};printf("sample=%d ref=%d\n",number_squares(im),ref(im));
 int bad=0;for(int t=0;t<500000;t++){int m[N][N];int dens=rnd()%4;for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=dens?(rnd()%16!=0):(rnd()%2);if(ref(m)!=number_squares(m))bad++;}printf("q4 N=6 random bad=%d\n",bad);return 0;}'''
build_run(D,'q4_N6',src)
for n in (3,4,5):
    s=HDR+'#define N %d\n'%n+code_of('25A-B',4)+r'''
static int ref(int m[N][N]){int c=0;for(int i=0;i+3<=N;i++)for(int j=0;j+3<=N;j++){int ok=1;for(int a=0;a<3;a++)for(int b=0;b<3;b++)if(!m[i+a][j+b])ok=0;c+=ok;}return c;}
int main(){long tot=1L<<(N*N),bad=0,nz=0;for(long c=0;c<tot;c++){int m[N][N];for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=(c>>(i*N+j))&1;int r=ref(m);nz+=r>0;if(r!=number_squares(m))bad++;}printf("N=%d exhaustive tot=%ld withsquare=%ld bad=%ld\n",N,tot,nz,bad);return 0;}'''
    build_run(D,'q4_exh%d'%n,s)
