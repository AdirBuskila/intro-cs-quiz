import sys,os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
build_run(D,'q1',HDR+code_of('24A-B',1)+r'''
int main(){int bad=0;for(int t=0;t<300000;t++){int n=rnd()%10;int a[10];for(int i=0;i<n;i++)a[i]=rnd()%(n+1);int ns=-1;int*r=valueNotInArray(a,n,&ns);
 int exp[12],c=0;for(int v=0;v<=n;v++){int f=0;for(int i=0;i<n;i++)if(a[i]==v)f=1;if(!f)exp[c++]=v;}
 if(ns!=c||memcmp(r,exp,c*4))bad++;free(r);}
 int a[6]={0,1,1,0,3,5},ns;int*r=valueNotInArray(a,6,&ns);printf("q1 bad=%d ex size=%d: %d %d %d\n",bad,ns,r[0],r[1],r[2]);int*e=valueNotInArray(a,0,&ns);printf("empty: size=%d val=%d\n",ns,e[0]);
 int n=1<<22;int*b=malloc(n*4);for(int i=0;i<n;i++)b[i]=rnd()%(n+1);double t0=now();free(valueNotInArray(b,n,&ns));double t1=now()-t0;n*=2;b=realloc(b,n*4);for(int i=0;i<n;i++)b[i]=rnd()%(n+1);t0=now();free(valueNotInArray(b,n,&ns));printf("t=%.3f t2=%.3f\n",t1,now()-t0);return 0;}''')
build_run(D,'q2',HDR+code_of('24A-B',2)+r'''
int main(){int bad=0;for(int t=0;t<500000;t++){int len=2+rnd()%11;int al=(rnd()%2)?3:10;char s[16];for(int i=0;i<len;i++)s[i]='0'+rnd()%al;s[len]=0;
 int cnt[100]={0};for(int i=0;i+1<len;i++)cnt[(s[i]-'0')*10+s[i+1]-'0']++;int best=-1,bc=-1;for(int v=0;v<100;v++)if(cnt[v]>bc){bc=cnt[v];best=v;}
 if(best!=find_two_digits(s)){bad++;if(bad<4)printf("DIFF %s\n",s);}}
 printf("q2 bad=%d ex: %d %d %d %d %d %d\n",bad,find_two_digits("12121212121"),find_two_digits("21212121212"),find_two_digits("222211"),find_two_digits("0001"),find_two_digits("1234"),find_two_digits("426144"));
 int n=1<<24;char*s=malloc(n+1);for(int i=0;i<n;i++)s[i]='0'+rnd()%10;s[n]=0;double t0=now();find_two_digits(s);double t1=now()-t0;s[n/2]=0;t0=now();find_two_digits(s);printf("t(16M)=%.3f t(8M)=%.3f\n",t1,now()-t0);return 0;}''')
build_run(D,'q3',HDR+code_of('24A-B',3)+r'''
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){int bad=0,yes=0;for(int t=0;t<500000;t++){int n=rnd()%8,m=rnd()%8;int p[8],q[8];for(int i=0;i<n;i++)p[i]=1+rnd()%12;for(int i=0;i<m;i++)q[i]=-1-(int)(rnd()%12);qsort(p,n,4,cmp);qsort(q,m,4,cmp);
 int ref=0;for(int i=0;i<n;i++)for(int j=0;j<m;j++)if(p[i]+q[j]==0)ref=1;yes+=ref;if(ref!=is_zero(p,n,q,m))bad++;}
 int a[4]={1,4,8,11},b[5]={-20,-15,-11,-3,-2},c[5]={-20,-15,-12,-3,-2};printf("q3 bad=%d yes=%d ex %d %d\n",bad,yes,is_zero(a,4,b,5),is_zero(a,4,c,5));
 {int n=1<<19;int*p=malloc(n*4),*q=malloc(n*4);for(int i=0;i<n;i++){p[i]=2*i+2;q[i]=-(2*(n-1-i)+1);}double t0=now();int r=is_zero(p,n,q,n);printf("worst-case-ish n=%d r=%d t=%.3f (deep recursion)\n",n,r,now()-t0);}return 0;}''')
build_run(D,'q4',HDR+code_of('24A-B',4)+r'''
int main(){int bad=0;for(int t=0;t<500000;t++){int n=rnd()%11;int a[11];for(int i=0;i<n;i++)a[i]=(int)(rnd()%5)-2;int best=0;for(int i=0;i<n;i++){int c=0;for(int j=0;j<n;j++)if(a[j]==a[i])c++;if(c>best)best=c;}
 if(best!=number_returns(a,n))bad++;}
 int e[19]={1,2,-3005,2,3,1,-1000,3,7,-11,2,15,2,3,90,7,2,2,1000};printf("q4 bad=%d ex=%d\n",bad,number_returns(e,19));
 for(int n=1<<20;n<=1<<22;n*=2){int*a=malloc(n*4);for(int i=0;i<n;i++)a[i]=rnd()%1000;double t0=now();number_returns(a,n);printf("n=%d t=%.3f\n",n,now()-t0);}return 0;}''')
