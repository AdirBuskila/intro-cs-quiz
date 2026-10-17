# Independent refuter harness: compiles every fillblank option / order permutation / findbug variant
# with clang and compares behaviour with the correct version. Not reusing the author's harness.
import json, sys, os, subprocess, itertools, tempfile, hashlib
from concurrent.futures import ThreadPoolExecutor
CLANG = r'C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang.exe'
ROOT = r'C:\Users\Adir\Desktop\Coding\Dev\intro-cs-quiz'
TMP = os.path.join(tempfile.gettempdir(), 'refute_steps'); os.makedirs(TMP, exist_ok=True)

PRE = r'''
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
static unsigned long long S=88172645463325252ULL;
static unsigned rnd(void){S^=S<<13;S^=S>>7;S^=S<<17;return (unsigned)(S>>11);}
static void merge_sort(int*a,int lo,int hi){int i,j;for(i=lo+1;i<=hi;i++){int v=a[i];j=i-1;while(j>=lo&&a[j]>v){a[j+1]=a[j];j--;}a[j+1]=v;}}
#ifdef BS_INDEX
static int binary_search(int*a,int n,int x){int lo=0,hi=n-1;while(lo<=hi){int m=(lo+hi)/2;if(a[m]==x)return m;if(a[m]<x)lo=m+1;else hi=m-1;}return -1;}
#else
static int binary_search(int*a,int n,int x){int lo=0,hi=n-1;while(lo<=hi){int m=(lo+hi)/2;if(a[m]==x)return 1;if(a[m]<x)lo=m+1;else hi=m-1;}return 0;}
#endif
'''
D = {}
D['19A-A|2|'] = ('', r'''
int main(){int t,n,i;for(t=0;t<4000;t++){int a[8];n=rnd()%7;for(i=0;i<n;i++)a[i]=rnd()%3;printf("%d\n",isPalindromeRec(a,n));}
int e[]={1,3,2,3,1};printf("%d\n",isPalindromeRec(e,5));return 0;}''')
D['19A-A|3|a'] = ('', r'''
int main(){int t,n,i;for(t=0;t<4000;t++){int a[9];n=1+rnd()%8;for(i=0;i<n;i++)a[i]=rnd()%n;printf("%d\n",is_permutation_of_palindrom(a,n));}return 0;}''')
D['19A-A|3|b'] = ('', r'''
int main(){int t,n,i;for(t=0;t<4000;t++){int a[9];n=1+rnd()%8;for(i=0;i<n;i++)a[i]=rnd()%n;printf("%d\n",bonus(a,n));}return 0;}''')
D['19A-A|4|'] = ('', r'''
int main(){int t,n,i;for(t=0;t<6000;t++){int a[8],b[8];n=1+rnd()%6;int v=(int)(rnd()%5)-2;for(i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;}v=(int)(rnd()%5)-2;for(i=n-1;i>=0;i--){v+=1+rnd()%3;b[i]=v;}printf("%d\n",check_if_different_elements(a,b,n));}return 0;}''')
D['19A-A|5|'] = ('#define BS_INDEX\n', r'''
int main(){int t,n,i;for(t=0;t<6000;t++){int a[8],b[8];n=1+rnd()%5;for(i=0;i<n;i++){a[i]=(int)(rnd()%7);b[i]=(int)(rnd()%7);}int d=rnd()%13;printf("%d\n",is_sum(a,b,n,d));}return 0;}''')
D['19A-A|6|'] = ('#define N 3\n', r'''
int main(){int c,i,A[3][3];for(c=0;c<19683;c++){int x=c;for(i=0;i<9;i++){A[i/3][i%3]=x%3;x/=3;}printf("%d\n",CheckMagic(A));}
int M[3][3]={{12,19,14},{17,15,13},{16,11,18}};printf("%d\n",CheckMagic(M));return 0;}''')
D['19A-B|2|'] = ('', r'''
int main(){int n;for(n=0;n<30000;n++)printf("%d\n",digits_parity(n));printf("%d\n",digits_parity(43418));return 0;}''')
D['19A-B|3|a'] = ('', r'''
int main(){int t,n,i;for(t=0;t<5000;t++){int a[8];n=1+rnd()%7;for(i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2;printf("%d\n",count_in_range(a,n));}return 0;}''')
D['19A-B|3|b'] = ('', r'''
int main(){int t,n,i;for(t=0;t<5000;t++){int a[8];n=1+rnd()%7;for(i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2;printf("%d\n",min_prefix_index(a,n));}
int e[]={1,9999,1,4,2,1};printf("%d\n",min_prefix_index(e,6));int f[]={2,8888,2,5,2};printf("%d\n",min_prefix_index(f,5));return 0;}''')
D['19A-B|4|'] = ('', r'''
int main(){int n,i,x,y;for(n=0;n<=4;n++){int P=1;for(i=2;i<=n;i++)P*=i;int pa[24][4];
 for(x=0;x<P;x++){int v[4],idx=x,used[4]={0,0,0,0},k,j;for(k=0;k<n;k++){int r=idx%(n-k);idx/=(n-k);for(j=0;j<n;j++)if(!used[j]){if(r==0)break;r--;}used[j]=1;v[k]=j;}for(k=0;k<n;k++)pa[x][k]=v[k];}
 for(x=0;x<P;x++)for(y=0;y<P;y++){int a[4],b[4];for(i=0;i<n;i++){a[i]=pa[x][i];b[i]=pa[y][i];}printf("%d\n",is_rotation(a,b,n));}}
return 0;}''')
D['19A-B|5|'] = ('', r'''
static int cmp(const void*x,const void*y){return *(int*)x-*(int*)y;}
int main(){int t,n,i,p,q;for(t=0;t<6000;t++){int a[10],r[10];p=rnd()%5;q=rnd()%5;if(p+q==0)p=1;n=p+q;for(i=0;i<n;i++)a[i]=(int)(rnd()%7)-3;qsort(a,p,sizeof(int),cmp);qsort(a+p,q,sizeof(int),cmp);memcpy(r,a,sizeof r);qsort(r,n,sizeof(int),cmp);
 sort_two_parts(a,n);for(i=0;i<n;i++)printf("%d ",a[i]);printf(memcmp(a,r,n*sizeof(int))?"BAD\n":"ok\n");}return 0;}''')
D['19A-B|6|'] = ('#define N 3\n', r'''
int main(){int c,i,A[3][3];for(c=0;c<262144;c++){int x=c;for(i=0;i<9;i++){A[i/3][i%3]=x%4;x/=4;}printf("%d\n",neighbors_differ(A));}return 0;}''')
D['24A-B|1|'] = ('', r'''
int main(){int t,n,i,k,sz;for(t=0;t<4000;t++){int a[8];n=rnd()%7;for(i=0;i<n;i++)a[i]=rnd()%(n+1);int*r=valueNotInArray(a,n,&sz);printf("%d:",sz);for(k=0;k<sz&&k<8;k++)printf(" %d",r[k]);printf("\n");}return 0;}''')
D['24A-B|2|'] = ('', r'''
int main(){int t,i,L;char s[16];for(t=0;t<8000;t++){L=2+rnd()%9;int al=(t%2)?3:10;for(i=0;i<L;i++)s[i]='0'+rnd()%al;s[L]=0;printf("%d\n",find_two_digits(s));}
printf("%d %d %d %d %d\n",find_two_digits("0001"),find_two_digits("426144"),find_two_digits("1234"),find_two_digits("222211"),find_two_digits("21212121212"));return 0;}''')
D['24A-B|3|'] = ('', r'''
int main(){int x,y,i,j;for(x=0;x<256;x++)for(y=0;y<256;y++){int p[8],q[8],n=0,m=0;for(i=0;i<8;i++)if(x>>i&1)p[n++]=i+1;for(j=7;j>=0;j--)if(y>>j&1)q[m++]=-(j+1);
 printf("%d\n",is_zero(p,n,q,m));}return 0;}''')
D['24A-B|4|'] = ('', r'''
int main(){int t,n,i;for(t=0;t<6000;t++){int a[9];n=rnd()%9;for(i=0;i<n;i++)a[i]=rnd()%4;printf("%d\n",number_returns(a,n));}return 0;}''')
D['25A-B|1|'] = ('', r'''
int main(){int t,n,i;for(t=0;t<5000;t++){int a[8];n=rnd()%8;for(i=0;i<n;i++)a[i]=(int)(rnd()%7)-3;printf("%d\n",check_parity(a,n));}return 0;}''')
D['25A-B|2|'] = ('', r'''
int main(){int t,n,i,j;for(t=0;t<6000;t++){int a1[8],a2[8];n=1+rnd()%6;for(i=0;i<n;i++){do{a1[i]=(int)(rnd()%11)-5;for(j=0;j<i;j++)if(a1[j]==a1[i])break;}while(j<i);}
 for(i=0;i<n;i++){do{a2[i]=(int)(rnd()%11)-5;for(j=0;j<i;j++)if(a2[j]==a2[i])break;}while(j<i);}
 search_in_array(a1,a2,n);for(i=0;i<n;i++)printf("%d,%d ",a1[i],a2[i]);printf("\n");}return 0;}''')
D['25A-B|3|'] = ('', r'''
int main(){int x,y,L,i;char*ts[200];int nt=0;for(L=0;L<=4;L++){int c=1;for(i=0;i<L;i++)c*=3;for(x=0;x<c;x++){int z=x;char*s=malloc(8);for(i=0;i<L;i++){s[i]='a'+z%3;z/=3;}s[L]=0;ts[nt++]=s;}}
 for(x=0;x<nt;x++)for(y=0;y<nt;y++)printf("%d\n",word_in_text(ts[x],ts[y]));return 0;}''')
D['25A-B|4|'] = ('#define N 6\n', r'''
int main(){int t,i,A[6][6];int im[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};printf("%d\n",number_squares(im));
 for(t=0;t<4000;t++){for(i=0;i<36;i++)A[i/6][i%6]=(rnd()%10)<(t%2?9:8);printf("%d\n",number_squares(A));}return 0;}''')

def run_src(src, tag, timeout=8):
    h = hashlib.md5((src+tag).encode()).hexdigest()[:12]
    c = os.path.join(TMP, h+'.c'); e = os.path.join(TMP, h+'.exe')
    open(c,'w',encoding='utf8').write(src)
    r = subprocess.run([CLANG,'-w','-O0',c,'-o',e],capture_output=True,text=True)
    if r.returncode: return ('COMPILE_FAIL', '')
    try:
        p = subprocess.run([e],capture_output=True,timeout=timeout)
        return ('RC%d'%p.returncode, hashlib.md5(p.stdout).hexdigest())
    except subprocess.TimeoutExpired:
        return ('TIMEOUT','')

def build(key, code):
    extra, main = D[key]
    return extra + PRE + code + '\n' + main

def fillcode(st, optval):
    L = list(st['lines']); L[st['blankIndex']] = L[st['blankIndex']].replace('___', optval)
    return '\n'.join(L)

def main(code):
    res = {}
    d = json.load(open(os.path.join(ROOT,'tools','raw',code+'.json'),encoding='utf8'))
    for q in d['questions']:
        part = {'': '', '\u05d0':'a','\u05d1':'b'}[q.get('part','')]
        key = f"{code}|{q['num']}|{part}"
        steps = q.get('steps', [])
        ref = None
        for si, st in enumerate(steps):
            if st['type']=='fillblank':
                outs = {}
                for o in st['options']:
                    outs[o['id']] = run_src(build(key, fillcode(st,o['value'])), 'f%d%s'%(si,o['id']))
                cor = outs[st['correctId']]
                msg=[]
                if cor[0]!='RC0': msg.append('correct option does not run clean: %s'%(cor,))
                for oid,v in outs.items():
                    if oid!=st['correctId']:
                        msg.append('distractor %s: %s'%(oid, 'INDISTINGUISHABLE' if v==cor else v[0]+('' if v[0]!='RC0' else '/differs')))
                res[f'{key} step{si} fillblank'] = msg
                ref = cor
            elif st['type']=='order':
                lines = st['lines']
                wrapper = lambda ls: '\n'.join(ls)
                if key=='25A-B|4|':
                    pre=['int number_squares(int matrix[N][N])','{','int i,j,a,b,all_ones,count=0;','for(i=0;i+2<N;i++) for(j=0;j+2<N;j++){']
                    wrapper = lambda ls: '\n'.join(pre+list(ls)+['}','return count;','}'])
                    head=[];mid=lines;tail=[]
                else:
                    head=lines[:2]; mid=lines[2:-1]; tail=lines[-1:]
                perms = list(itertools.permutations(range(len(mid))))
                def job(pm, si=si, head=head, mid=mid, tail=tail, wrapper=wrapper):
                    ls = head+[mid[i] for i in pm]+tail
                    return pm, run_src(build(key, wrapper(ls)), 'o%d%s'%(si,pm))
                with ThreadPoolExecutor(8) as ex: rs = list(ex.map(job, perms))
                ident = tuple(range(len(mid)))
                bres = [r for pm,r in rs if pm==ident][0]
                same = [pm for pm,r in rs if pm!=ident and r==bres]
                msg = ['perm %s behaves like correct order: %s'%(pm,[mid[i][:30] for i in pm]) for pm in same] if same else ['ok (%d perms, all others differ/fail)'%len(perms)]
                kinds = {}
                for pm,r in rs:
                    if pm!=ident and r!=bres: kinds[r[0]] = kinds.get(r[0],0)+1
                msg.append('failure kinds %s'%kinds)
                if bres[0]!='RC0': msg.append('correct order not clean %s'%(bres,))
                if ref and bres!=ref: msg.append('ORDER RESULT != FILL-CORRECT RESULT')
                res[f'{key} step{si} order'] = msg
            elif st['type']=='findbug':
                bres = run_src(build(key, '\n'.join(st['lines'])), 'b%d'%si)
                msg=[]
                if ref is None: msg.append('no ref')
                elif bres==ref: msg.append('BUG VARIANT INDISTINGUISHABLE from correct')
                else: msg.append('bug differs (%s)'%bres[0])
                for st2 in steps:
                    if st2['type']=='fillblank' and len(st2['lines'])==len(st['lines']):
                        cor = [o for o in st2['options'] if o['id']==st2['correctId']][0]['value']
                        good = fillcode(st2,cor).split('\n')
                        diff=[i for i,(x,y) in enumerate(zip(good,st['lines'])) if x.strip()!=y.strip()]
                        msg.append('diff lines vs correct: %s, bugIndex=%s'%(diff,st['bugIndex']))
                res[f'{key} step{si} findbug'] = msg
    return res

if __name__=='__main__':
    for c in sys.argv[1:]:
        for k,v in main(c).items(): print(k,'=>',v)
