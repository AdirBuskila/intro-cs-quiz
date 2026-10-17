import json,re,subprocess,os,sys
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLANG=r'C:\Users\Adir\AppData\Local\Programs\Swift\Toolchains\6.1.0+Asserts\usr\bin\clang.exe'
def sol(code,num,part=None):
    d=json.load(open(os.path.join(ROOT,'raw',code+'.json'),encoding='utf8'))
    for q in d['questions']:
        if q['num']==num and q.get('part')==part:
            return q
    raise KeyError
def code_of(code,num,part=None):
    s=sol(code,num,part)['solution']
    m=re.search(r'```c\n(.*?)```',s,re.S)
    return m.group(1)
def build_run(outdir,name,src,flags=()):
    c=os.path.join(outdir,'refute_'+name+'.c'); e=os.path.join(outdir,'refute_'+name+'.exe')
    open(c,'w',encoding='utf8').write(src)
    r=subprocess.run([CLANG,'-O1','-g','-fsanitize=address,undefined' if False else '-Wall',c,'-o',e,*flags],capture_output=True,text=True)
    if r.returncode: print(name,'COMPILE FAIL',r.stderr[:1500]); return
    r=subprocess.run([e],capture_output=True,text=True,timeout=300)
    print(name,'->',r.stdout.strip(),r.stderr.strip()[:300])
HDR='''#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include <time.h>
static unsigned long long rs=88172645463325252ULL;
static unsigned rnd(void){rs^=rs<<13;rs^=rs>>7;rs^=rs<<17;return (unsigned)(rs>>11);}
static void ms_(int*a,int lo,int hi){ if(lo>=hi)return; int m=(lo+hi)/2; ms_(a,lo,m); ms_(a,m+1,hi); int n=hi-lo+1; int*t=malloc(n*sizeof(int)); int i=lo,j=m+1,k=0; while(i<=m&&j<=hi)t[k++]=a[i]<=a[j]?a[i++]:a[j++]; while(i<=m)t[k++]=a[i++]; while(j<=hi)t[k++]=a[j++]; memcpy(a+lo,t,n*sizeof(int)); free(t);}
void merge_sort(int*a,int lo,int hi){ms_(a,lo,hi);}
int binary_search(int*a,int n,int x){int l=0,h=n-1;while(l<=h){int m=(l+h)/2;if(a[m]==x)return m;if(a[m]<x)l=m+1;else h=m-1;}return -1;}
static double now(void){return (double)clock()/CLOCKS_PER_SEC;}
'''
