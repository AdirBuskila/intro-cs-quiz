import sys,os,json
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from refute_lib import *
D=os.path.dirname(os.path.abspath(__file__))
def steps(n): return sol('23A-A',n)['steps']
J='\n'.join
# ---------- Q1 sortpairs
S1=steps(1)
off1=J(S1[2]['lines'])
bug1=J(S1[3]['lines']).replace('sortpairs(','sortpairs_bug(')
rev1='void sortpairs_rev(int*a,int size){int i;for(i=0;i<size/2;i++)swap(a+i,a+size-1-i);}'
main1=r'''
static int valid(int*a,int*orig,int n){
 int s=a[0]+a[1];for(int i=0;i<n;i+=2)if(a[i]+a[i+1]!=s)return 0;int x[40],y[40];memcpy(x,a,n*4);memcpy(y,orig,n*4);
 for(int i=0;i<n;i++)for(int j=i+1;j<n;j++){if(x[j]<x[i]){int t=x[i];x[i]=x[j];x[j]=t;}if(y[j]<y[i]){int t=y[i];y[i]=y[j];y[j]=t;}}return !memcmp(x,y,n*4);}
int main(){int bad=0,badb=0,badr=0,tot=0,swp12=-1;
 for(int t=0;t<100000;t++){int n=1+rnd()%10,sz=2*n,S=20+rnd()%10;int a[40],o[40];int x[20];for(int i=0;i<n;i++)x[i]=(int)(rnd()%(S/2+1));
  for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(x[j]<x[i]){int tt=x[i];x[i]=x[j];x[j]=tt;}
  for(int i=0;i<n;i++){a[i]=x[i];a[sz-1-i]=S-x[i];}
  memcpy(o,a,sz*4);tot++;
  swaps=0;sortpairs(a,sz);if(!valid(a,o,sz))bad++;if(sz==12&&swp12<0)swp12=swaps;
  memcpy(a,o,sz*4);sortpairs_bug(a,sz);if(!valid(a,o,sz))badb++;
  memcpy(a,o,sz*4);sortpairs_rev(a,sz);if(!valid(a,o,sz))badr++;}
 int e[6]={1,2,3,7,8,9};sortpairs(e,6);printf("q1 official invalid=%d/%d, bugged(i<size) invalid=%d, reverse-pitfall invalid=%d; sample after=%d,%d,%d,%d,%d,%d; swaps for size12=%d\n",bad,tot,badb,badr,e[0],e[1],e[2],e[3],e[4],e[5],swp12);
 int f[6]={1,2,3,7,8,9};sortpairs_bug(f,6);printf("bug sample after=%d,%d,%d,%d,%d,%d\n",f[0],f[1],f[2],f[3],f[4],f[5]);
 int g[6]={1,2,3,7,8,9};sortpairs_rev(g,6);printf("rev sample after=%d,%d,%d,%d,%d,%d\n",g[0],g[1],g[2],g[3],g[4],g[5]);return 0;}
'''
build_run(D,'q1',HDR+'static int swaps=0;\nvoid swap(int*x,int*y){int t=*x;*x=*y;*y=t;swaps++;}\n'+off1+'\n'+bug1+'\n'+rev1+main1)
# ---------- Q2 squeeze
S2=steps(2)
lines=S2[1]['lines']; bi=S2[1]['blankIndex']
variants=[]
for opt in S2[1]['options']:
    L=list(lines);L[bi]=opt['value'];variants.append(J(L).replace('squeeze(','sq_%s('%opt['id']))
ordsw=["void sq_ord1(char* str)","{","    int count[26] = { 0 };","    int i, pos = 0;","    int len = strlen(str);","    for (i = 0; i < len; ++i)","        count[str[i] - 'a']++;","    for (i = 0; i < len; ++i){","        if (count[str[i] - 'a'] == 3)","        {","            count[str[i] - 'a'] = 0;","            str[pos++] = str[i];","        }","    }","    str[pos] = '\\0';","}"]
fb=J(S2[3]['lines']).replace('squeeze(','sq_bug(')
main2=r'''
typedef void(*F)(char*);
static void ref(const char*s,char*out){int c[26]={0};for(const char*p=s;*p;p++)c[*p-'a']++;int k=0;int seen[26]={0};for(const char*p=s;*p;p++)if(c[*p-'a']==3&&!seen[*p-'a']){seen[*p-'a']=1;out[k++]=*p;}out[k]=0;}
int main(){F fs[6]={sq_a,sq_b,sq_c,sq_d,sq_ord1,sq_bug};const char*nm[6]={"fill a","fill b(--)","fill c(=3)","fill d(pos++)","order-swapped decls+reset-before-copy","findbug(==2)"};
 int bad[6]={0};for(int t=0;t<200000;t++){char s[24],w[24],r[24];int len=rnd()%20,al=2+rnd()%6;for(int i=0;i<len;i++)s[i]='a'+rnd()%al;s[len]=0;ref(s,r);for(int f=0;f<6;f++){strcpy(w,s);fs[f](w);if(strcmp(w,r))bad[f]++;}}
 for(int f=0;f<6;f++)printf("q2 %s: wrong on %d/200000\n",nm[f],bad[f]);
 char w[32]="dbcabafacbcbdd";sq_a(w);printf("sample=%s\n",w);return 0;}
'''
build_run(D,'q2',HDR+J(variants)+'\n'+J(ordsw)+'\n'+fb+main2)
# ---------- Q3 distsort
S3=steps(3)
lines=S3[2]['lines'];bi=S3[2]['blankIndex']
vs=[]
for opt in S3[2]['options']:
    L=list(lines);L[bi]=opt['value'];vs.append(J(L).replace('distsort(','ds_%s('%opt['id']))
bug=J(S3[4]['lines']).replace('distsort(','ds_bug(')
sd=list(S3[3]['lines']);sd[2],sd[3]=sd[3],sd[2]
swp=J(sd).replace('distsort(','ds_ord(')
main3=r'''
typedef int*(*F)(int*,int,int);
static int pnum;static int cmp(const void*x,const void*y){int a=*(int*)x,b=*(int*)y;int da=abs(a-pnum),db=abs(b-pnum);if(da!=db)return da-db;return a-b;}
void show(int*r,int n){for(int i=0;i<n;i++)printf("%d ",r[i]);putchar(10);}
int main(){F fs[6]={ds_a,ds_b,ds_c,ds_d,ds_bug,ds_ord};const char*nm[6]={"fill a","fill b","fill c","fill d","findbug(>)","order-swapped decl/malloc"};int bad[6]={0};
 for(int t=0;t<20000;t++){int n=1+rnd()%9;int a[9];int v=(int)(rnd()%5);for(int i=0;i<n;i++){v+=1+rnd()%4;a[i]=v;}int num=a[rnd()%n];pnum=num;int ref[9];memcpy(ref,a,n*4);qsort(ref,n,4,cmp);
  int run[6]={1,0,1,0,1,1};
  for(int f=0;f<6;f++){if(f==1||f==3)continue;int*r=fs[f](a,n,num);if(memcmp(r,ref,n*4))bad[f]++;free(r);}}
 for(int f=0;f<6;f++){if(f!=1&&f!=3)printf("q3 %s wrong on %d/20000\n",nm[f],bad[f]);else printf("q3 %s: not run (writes out of range by construction)\n",nm[f]);}
 {int a[5]={1,2,5,7,10};int*r=ds_a(a,5,7);show(r,5);int b[3]={1,2,3};r=ds_a(b,3,2);show(r,3);r=ds_bug(b,3,2);show(r,3);}return 0;}
'''
# ds_b writes new_position++ from n-1 -> OOB; ds_d writes index 0: run is skipped
build_run(D,'q3',HDR+J(vs)+'\n'+bug+'\n'+swp+main3)
# ---------- Q4 waterfill
S4=steps(4)
lines=S4[2]['lines'];bi=S4[2]['blankIndex']
vs=[]
for opt in S4[2]['options']:
    L=list(lines);L[bi]=opt['value'];vs.append(J(L).replace('waterfill(','wf_%s('%opt['id']))
off=J(S4[3]['lines']);bug=J(S4[4]['lines']).replace('waterfill(','wf_bug(')
calls=['        waterfill(valley, cloudR - 1, cloudC, cloudH)','        waterfill(valley, cloudR + 1, cloudC, cloudH)','        waterfill(valley, cloudR, cloudC - 1, cloudH)','        waterfill(valley, cloudR, cloudC + 1, cloudH)']
perm=[calls[i] for i in (3,2,1,0)]
permsrc='''int wf_perm(int valley[R][C], int cloudR, int cloudC, int cloudH) {
    if (cloudH <= valley[cloudR][cloudC])
        return 0;
    int fill = cloudH - valley[cloudR][cloudC];
    valley[cloudR][cloudC] = 255;
    return fill +
'''+' +\n'.join(c.replace('waterfill(','wf_perm(') for c in perm)+';\n}'
main4=r'''
static int ref(int v[R][C],int r,int c,int h){int seen[R][C];memset(seen,0,sizeof seen);int q[R*C][2],qh=0,qt=0,tot=0;if(h<=v[r][c])return 0;q[qt][0]=r;q[qt++][1]=c;seen[r][c]=1;
 while(qh<qt){int y=q[qh][0],x=q[qh++][1];tot+=h-v[y][x];int dy[4]={-1,1,0,0},dx[4]={0,0,-1,1};for(int k=0;k<4;k++){int ny=y+dy[k],nx=x+dx[k];if(ny<0||nx<0||ny>=R||nx>=C)continue;if(!seen[ny][nx]&&v[ny][nx]<h){seen[ny][nx]=1;q[qt][0]=ny;q[qt++][1]=nx;}}}return tot;}
typedef int(*F)(int[R][C],int,int,int);
int main(){F fs[7]={waterfill,wf_a,wf_b,wf_c,wf_d,wf_bug,wf_perm};const char*nm[7]={"official","fill a","fill b(<)","fill c(>=)","fill d(==255)","findbug","permuted-call-order"};int bad[7]={0};
 for(int t=0;t<20000;t++){int v[R][C],w[R][C];for(int i=0;i<R;i++)for(int j=0;j<C;j++)v[i][j]=(i==0||j==0||i==R-1||j==C-1)?255:1+rnd()%12;int r=1+rnd()%(R-2),c=1+rnd()%(C-2),h=1+rnd()%14;int e=ref(v,r,c,h);
  for(int f=0;f<7;f++){if(f==4||f==3)continue;memcpy(w,v,sizeof v);if(fs[f](w,r,c,h)!=e)bad[f]++;}}
 for(int f=0;f<7;f++){if(f==3||f==4)printf("q4 %s: not run (can recurse forever/out of bounds)\n",nm[f]);else printf("q4 %s wrong on %d/20000\n",nm[f],bad[f]);}
 return 0;}
'''
build_run(D,'q4',HDR+'#define R 7\n#define C 7\n'+off+'\n'+J(vs[:3])+'\n'+bug+'\n'+permsrc+'\nint wf_c(int v[R][C],int a,int b,int c){return 0;}\nint wf_d(int v[R][C],int a,int b,int c){return 0;}\n'.replace('wf_a(','wf_a(')+main4) if False else None
# wf variants a,b run; c and d replaced by stubs (declared only once)
vsel=[vs[0],vs[1]]
build_run(D,'q4',HDR+'#define R 7\n#define C 7\n'+off+'\n'+J(vsel)+'\n'+bug+'\n'+permsrc+'\nint wf_c(int v[R][C],int a,int b,int c){return 0;}\nint wf_d(int v[R][C],int a,int b,int c){return 0;}\n'+main4)
step_src=HDR+'#define R 4\n#define C 4\n'+off+'\n'+bug+r'''
int main(){int v[4][4]={{255,255,255,255},{255,3,5,255},{255,4,9,255},{255,255,255,255}};int w[4][4];
 memcpy(w,v,sizeof v);printf("h6=%d ",waterfill(w,1,1,6));memcpy(w,v,sizeof v);printf("h10=%d ",waterfill(w,1,1,10));memcpy(w,v,sizeof v);printf("bug h6=%d\n",wf_bug(w,1,1,6));return 0;}'''
build_run(D,'q4_steps',step_src)
