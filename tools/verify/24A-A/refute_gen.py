import sys,os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
J='\n'.join
def steps(n): return sol('24A-A',n)['steps']
# ---- Q1 lcm (gcd both sign conventions)
S=steps(1)
opts={o['id']:o['value'] for o in S[2]['options']}
fns=''.join('int lcm_%s(int a,int b){%s}\n'%(k,v) for k,v in opts.items())
fns+='int lcm_bug(int a,int b){return abs(a*b*gcd(a,b));}\n'
fns+='int lcm_nobad(int a,int b){return a*b/gcd(a,b);}\n'
main=r'''
int main(){int bad[6]={0};const char*nm[6]={"a","b","c(no abs)","d","bug(*)","no-abs"};
 for(int a=-60;a<=60;a++)for(int b=-60;b<=60;b++){if(!a||!b)continue;int e=0;for(int m=1;;m++)if(m%a==0&&m%b==0){e=m;break;}
  int g[6]={lcm_a(a,b),lcm_b(a,b),lcm_c(a,b),lcm_d(a,b),lcm_bug(a,b),lcm_nobad(a,b)};for(int k=0;k<6;k++)if(g[k]!=e)bad[k]++;}
 for(int k=0;k<6;k++)printf("GCDMODE option %s wrong on %d/14400 pairs\n",nm[k],bad[k]);
 printf("lcm(12,18)=%d; no-abs(-4,6)=%d; bug(4,6)=%d\n",lcm_a(12,18),lcm_nobad(-4,6),lcm_bug(4,6));return 0;}
'''
gpos='int gcd(int a,int b){if(a<0)a=-a;if(b<0)b=-b;while(b){int t=a%b;a=b;b=t;}return a;}\n'
gneg='int gcd(int a,int b){while(b){int t=a%b;a=b;b=t;}return a;}\n'  # C remainder keeps sign of dividend
build_run(D,'q1_gcdpos',(HDR+gpos+fns+main).replace('GCDMODE','gcd>=0:'))
build_run(D,'q1_gcdsigned',(HDR+gneg+fns+main).replace('GCDMODE','gcd(signed euclid):'))
# ---- Q2
S=steps(2)
code=sol('24A-A',2)['solution']
import re
f=re.search(r'```c\n(.*?)```',code,re.S).group(1)
bi=S[1]['blankIndex'];vs=[]
for o in S[1]['options']:
    L=list(S[1]['lines']);L[bi]=o['value'];vs.append(J(L).replace('str_chardist(','cd_%s('%o['id']))
bug=J(S[3]['lines']).replace('str_chardist(','cd_bug(')
o2=list(S[2]['lines']);o2[1],o2[2]=o2[2],o2[1];o2[4],o2[3]=o2[3],o2[4]
ordv=J(o2).replace('str_chardist(','cd_ord(')
main=r'''
typedef int(*F)(char*);
int main(){F fs[6]={str_chardist,cd_a,cd_bug,cd_ord};const char*nm[4]={"official","fill a","findbug(<)","order-permuted decls+maxdist=0 before strlen"};int bad[4]={0};
 for(int t=0;t<200000;t++){char s[20];int len=2+rnd()%15,al=2+rnd()%25;for(int i=0;i<len;i++)s[i]='a'+rnd()%al;s[len]=0;int c[26]={0};for(int i=0;i+1<len;i++)c[abs(s[i]-s[i+1])]++;int mx=0;for(int i=0;i<26;i++)if(c[i]>mx)mx=c[i];
  for(int k=0;k<4;k++){int r=fs[k](s);if(r<0||r>25||c[r]!=mx)bad[k]++;}}
 for(int k=0;k<4;k++)printf("q2 %s wrong on %d/200000\n",nm[k],bad[k]);
 printf("dists[2] for acefhyz: ");{char*s="acefhyz";int c[26]={0};for(int i=0;i+1<7;i++)c[abs(s[i]-s[i+1])]++;printf("%d; official=%d bug=%d\n",c[2],str_chardist(s),cd_bug(s));}return 0;}
'''
build_run(D,'q2',HDR+f+'\n'+vs[0]+'\n'+bug+'\n'+ordv+main)
# ---- Q3
S=steps(3)
main=r'''
int pop(unsigned x){int c=0;while(x){c+=x&1;x>>=1;}return c;}
int f_b(int num){return num ? num%2 + f_b(num/10) : 0;}
int f_c(int num){return num>1 ? num/2 + f_c(num%2) : num/2;}
int f_d(int num){return num ? 1 + f_d(num/2) : 0;}
int f_a(int num){return num ? num%2 + f_a(num/2) : 0;}
int f_v2(int num){if(num==1)return 1;return num % 2 + f_v2(num / 2);}
int main(){int bad[5]={0};for(int n=1;n<200000;n++){int e=pop(n);if(f_a(n)!=e)bad[0]++;if(f_b(n)!=e)bad[1]++;if(n!=1&&f_c(n)!=e)bad[2]++;if(f_d(n)!=e)bad[3]++;if(f_v2(n)!=e)bad[4]++;}
 printf("q3 wrong counts a,b,c,d,v2: %d %d %d %d %d ; 1000=%d 255=%d f_b(6)=%d\n",bad[0],bad[1],bad[2],bad[3],bad[4],f_a(1000),f_a(255),f_b(6));return 0;}
'''
build_run(D,'q3',HDR+main)
# ---- Q4
S=steps(4)
bi=S[1]['blankIndex'];vs=[]
for o in S[1]['options']:
    L=list(S[1]['lines']);L[bi]=o['value'];vs.append(J(L).replace('bin_search_mixed(','bs_%s('%o['id']))
bug=J(S[3]['lines']).replace('bin_search_mixed(','bs_bug(')
o1=list(S[2]['lines']);o1[3],o1[4]=o1[4],o1[3]
ordv=J(o1).replace('bin_search_mixed(','bs_ord1(')
o2=list(S[2]['lines']);o2[9:13]=[o2[11],o2[12],o2[9],o2[10]]
ordv2=J(o2).replace('bin_search_mixed(','bs_ord2(')
main=r'''
typedef int(*F)(int,int*,int);
int main(){F fs[8]={bs_a,bs_b,bs_c,bs_d,bs_bug,bs_ord1,bs_ord2};const char*nm[7]={"fill a","fill b(+mid%2)","fill c(mid/2)","fill d(mid-1)","findbug(>)","order: low/high init swapped","order: equality checks swapped"};
 int bad[7]={0};for(int t=0;t<100000;t++){int n=2*(1+rnd()%7);int a[16];int v=(int)(rnd()%3);for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;}for(int i=0;i<n;i+=2)if(rnd()%2){int x=a[i];a[i]=a[i+1];a[i+1]=x;}
  int key=(int)(rnd()%(v+4));int e=0;for(int i=0;i<n;i++)if(a[i]==key)e=1;
  for(int k=0;k<7;k++){if(k==2||k==3)continue;int r=fs[k](key,a,n);if((r>=0)!=e)bad[k]++;}}
 for(int k=0;k<7;k++)if(k==2||k==3)printf("q4 %s: not run (may read a[-1]/loop)\n",nm[k]);else printf("q4 %s wrong on %d/100000\n",nm[k],bad[k]);
 {int a[10]={1,2,7,3,11,15,90,23,1000,722};printf("90 official=%d bug=%d\n",bs_a(90,a,10),bs_bug(90,a,10));}return 0;}
'''
stub='int bs_c(int k,int*a,int n){return -1;}\nint bs_d(int k,int*a,int n){return -1;}\n'
build_run(D,'q4',HDR+J([vs[0],vs[1]])+'\n'+stub+bug+'\n'+ordv+'\n'+ordv2+main)
build_run(D,'q4_steps',HDR+vs[0]+r'''
int main(){int a[10]={1,2,7,3,11,15,90,23,1000,722};int low=0,high=9,mid=(low+high)/2;mid-=mid%2;printf("mid=%d a[mid]=%d low_next=%d\n",mid,a[mid],mid+2);return 0;}''')
