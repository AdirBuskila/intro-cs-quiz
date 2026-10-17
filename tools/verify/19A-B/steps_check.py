import pathlib, re, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from steps_lib import *

d = load("19A-B")
STUBS = "#define N 3\nstatic int calls;\n"
build = lambda ls: STUBS + "\n".join(ls)


def before(src, marker, stmt):
    """Insert stmt on its own line just before the line containing marker."""
    i = src.index(marker)
    ls = src.rfind("\n", 0, i) + 1
    return src[:ls] + stmt + "\n" + src[ls:]


# ---- Q1 (the printed `If` is a typo for `if`)
q = item(d, 1)
fn = code_of(q["question"]).replace("If (", "if (")
print("Q1")
claim(q, 0, STUBS + fn, 'int main(){printf("%d\\n",fn(5,3));return 0;}', "Q1 fn(5,3)")
claim(q, 1, STUBS + fn, 'int main(){printf("%d\\n",fn(5,-3));return 0;}', "Q1 fn(5,-3)")
claim(q, 2, STUBS + fn.replace("{", "{ calls++;", 1), 'int main(){fn(5,-3);printf("%d\\n",calls);return 0;}', "Q1 calls")
r = run(STUBS + fn, 'int main(){for(int x=-20;x<=20;x++)for(int y=-20;y<=20;y++)if(fn(x,y)!=x+y){puts("BAD");return 1;}puts("OK");return 0;}')
ok(r == (0, "OK\n"), "Q1 fn == x+y on grid")

# ---- Q2
q = item(d, 2)
src = sol_code(q)
D = r"""int main(){ int v[]={0,1,2,3,4,12,21,43418,343518,2,1234,5,50,11,22,2143,3412}; for(int k=0;k<17;k++)printf("%d\n",digits_parity(v[k])); for(int t=0;t<4000;t++){ printf("%d\n",digits_parity(rnd()%2000000)); } return 0; }"""
print("Q2")
claim(q, 0, STUBS + src.replace("{", "{ calls++;", 1), 'int main(){digits_parity(43418);printf("%d\\n",calls);return 0;}', "Q2 calls")
claim(q, 1, STUBS + src, 'int main(){printf("%d, %d\\n",digits_parity(12),digits_parity(21));return 0;}', "Q2 12 and 21")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q2")
order(q, 3, build, D, ref, "Q2")
r = run(STUBS + src, 'int main(){printf("%d%d\\n",digits_parity(43418),digits_parity(343518));return 0;}')
ok(r == (0, "10\n"), "Q2 examples")

# ---- Q3a
q = item(d, 3, "א")
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<5000;t++){ int n=1+rnd()%7,a[8]; for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2; printf("%d\n",count_in_range(a,n)); } return 0; }"""
print("Q3a")
claim(q, 0, STUBS + src, 'int main(){int a[6]={3,3,-1,0,7,0};printf("%d\\n",count_in_range(a,6));return 0;}', "Q3a")
ref = run(STUBS + src, D)
fill(q, 1, build, D, ref, "Q3a")
order(q, 2, build, D, ref, "Q3a")
r = run(STUBS + src, 'int main(){int a[7]={1,1,5,0,9999,123456,0};printf("%d\\n",count_in_range(a,7));return 0;}')
ok(r == (0, "3\n"), "Q3a example")

# ---- Q3b
q = item(d, 3, "ב")
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<5000;t++){ int n=1+rnd()%7,a[8]; for(int i=0;i<n;i++)a[i]=(int)(rnd()%(n+4))-2; printf("%d\n",min_prefix_index(a,n)); } return 0; }"""
print("Q3b")
claim(q, 0, before(STUBS + src, "// pass 2", 'printf("%d\\n", total);'), 'int main(){int a[6]={1,9999,1,4,2,1};min_prefix_index(a,6);return 0;}', "Q3b total")
claim(q, 1, STUBS + src, 'int main(){int a[5]={0,0,0,1,1};printf("%d\\n",min_prefix_index(a,5));return 0;}', "Q3b {0,0,0,1,1}")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q3b")
order(q, 3, build, D, ref, "Q3b")
r = run(STUBS + src, 'int main(){int a[6]={1,9999,1,4,2,1},b[5]={2,8888,2,5,2};printf("%d%d\\n",min_prefix_index(a,6),min_prefix_index(b,5));return 0;}')
ok(r == (0, "40\n"), "Q3b examples")

# ---- Q4
q = item(d, 4)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<6000;t++){ int n=rnd()%7,a[8],b[8],s=n?rnd()%n:0,m=rnd()%4; for(int i=0;i<n;i++)a[i]=i*3+rnd()%3; for(int i=0;i<n;i++)b[(i+s)%n]=a[i];
  if(n>=2&&m==1){int x=rnd()%n,y=rnd()%n;int tmp=b[x];b[x]=b[y];b[y]=tmp;} if(n>=1&&m==2)b[rnd()%n]=100; if(m==3)for(int i=0;i<n;i++)b[i]=50+i;
  printf("%d\n",is_rotation(a,b,n)); } return 0; }"""
print("Q4")
claim(q, 0, before(STUBS + src, "// a rotation by k", 'printf("%d\\n", k);'), 'int main(){int a[5]={5,2,8,4,1},b[5]={4,1,5,2,8};is_rotation(a,b,5);return 0;}', "Q4 k")
claim(q, 1, STUBS + src, 'int main(){int a[3]={1,2,3},b[3]={3,2,1};printf("%d\\n",is_rotation(a,b,3));return 0;}', "Q4 reversed")
ref = run(STUBS + src, D)
ok(ref[0] == 0 and "0" in ref[1] and "1" in ref[1], "Q4 reference sees both outcomes")
fill(q, 2, build, D, ref, "Q4")
order(q, 3, build, D, ref, "Q4")

# ---- Q5
q = item(d, 5)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<5000;t++){ int n=rnd()%9,s=n?rnd()%(n+1):0,a[9]; for(int i=0;i<n;i++)a[i]=(int)(rnd()%16)-5;
  for(int i=1;i<s;i++){int v=a[i],j=i-1;while(j>=0&&a[j]>v){a[j+1]=a[j];j--;}a[j+1]=v;} for(int i=s+1;i<n;i++){int v=a[i],j=i-1;while(j>=s&&a[j]>v){a[j+1]=a[j];j--;}a[j+1]=v;}
  sort_two_parts(a,n); for(int i=0;i<n;i++)printf("%d ",a[i]); printf("\n"); } return 0; }"""
print("Q5")
claim(q, 0, before(STUBS + src, "if (mid >= n)", 'printf("%d\\n", mid);'), 'int main(){int a[6]={1,1,4,8,-2,3};sort_two_parts(a,6);return 0;}', "Q5 mid")
claim(q, 1, before(STUBS + src, "if (mid >= n)", 'printf("%d\\n", mid);'), 'int main(){int a[5]={5,6,7,1,2};sort_two_parts(a,5);return 0;}', "Q5 mid2")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q5")
order(q, 3, build, D, ref, "Q5")
r = run(STUBS + src, 'int main(){int a[6]={1,1,4,8,-2,3};sort_two_parts(a,6);for(int i=0;i<6;i++)printf("%d ",a[i]);return 0;}')
ok(r == (0, "-2 1 1 3 4 8 "), "Q5 example")

# ---- Q6
q = item(d, 6)
src = sol_code(q)
D = r"""int main(){ int f[][3][3]={{{1,2,1},{3,4,3},{1,2,1}},{{1,2,3},{4,1,5},{6,7,8}},{{11,10,11},{17,-5,13},{10,11,10}},{{11,33,11},{33,15,13},{10,11,10}}};
 for(int k=0;k<4;k++)printf("%d\n",neighbors_differ(f[k]));
 for(int t=0;t<8000;t++){ int A[3][3]; int m=rnd()%3; for(int i=0;i<3;i++)for(int j=0;j<3;j++)A[i][j]=(m==0)?(int)(rnd()%5):(i*3+j)*(m==1?1:2)+ (rnd()%2?0:0); if(m>=1){int x=rnd()%3,y=rnd()%3,u=rnd()%3,v=rnd()%3;if(rnd()%2)A[x][y]=A[u][v];} printf("%d\n",neighbors_differ(A)); }
 return 0; }"""
print("Q6")
claim(q, 0, STUBS + src, 'int main(){int A[3][3]={{1,2,1},{3,4,3},{1,2,1}};printf("%d\\n",neighbors_differ(A));return 0;}', "Q6 matrix")
inst = re.sub(r"(\bA\[i\]\[j\]) ==", r"(calls++, \1) ==", src)
claim(q, 1, STUBS + inst, 'int main(){int A[3][3]={{1,2,3},{4,5,6},{7,8,9}};neighbors_differ(A);printf("%d\\n",calls);return 0;}', "Q6 comparisons")
ref = run(STUBS + src, D)
ok(ref[0] == 0 and ref[1].count("0") > 100 and ref[1].count("1") > 100, "Q6 reference sees both outcomes")
fill(q, 2, build, D, ref, "Q6")
bugcheck(q, 3, build, D, ref, "Q6")
r = run(STUBS + src, 'int main(){int A[3][3]={{1,2,3},{4,1,5},{6,7,8}};printf("%d\\n",neighbors_differ(A));return 0;}')
ok(r == (0, "0\n"), "Q6 bug-explain matrix returns 0 for reference")
bug_r = run(build(q["steps"][3]["lines"]), 'int main(){int A[3][3]={{1,2,3},{4,1,5},{6,7,8}};printf("%d\\n",neighbors_differ(A));return 0;}')
ok(bug_r == (0, "1\n"), "Q6 bug-explain matrix returns 1 for buggy version")
finish()
