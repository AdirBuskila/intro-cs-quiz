import pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from steps_lib import *

d = load("19A-A")
STUBS = r"""
#define N 3
static int calls;
void merge_sort(int*a,int l,int r){ for(int i=l+1;i<=r;i++){int v=a[i],j=i-1; while(j>=l&&a[j]>v){a[j+1]=a[j];j--;} a[j+1]=v;} }
int binary_search(int*b,int n,int x){ calls++; int lo=0,hi=n-1; while(lo<=hi){int m=(lo+hi)/2; if(b[m]==x)return m; if(b[m]<x)lo=m+1; else hi=m-1;} return -1; }
"""
build = lambda ls: STUBS + "\n".join(ls)

# ---- Q1
q = item(d, 1)
fun = code_of(q["question"])
print("Q1")
claim(q, 0, STUBS + fun, 'int main(){printf("%d\\n",fun(3,4));return 0;}', "Q1 fun(3,4)")
claim(q, 1, STUBS + fun, 'int main(){printf("%d\\n",fun(5,-3));return 0;}', "Q1 fun(5,-3)")
claim(q, 2, STUBS + fun.replace("{", "{ calls++;", 1), 'int main(){fun(3,4);printf("%d\\n",calls);return 0;}', "Q1 calls")
# the key b (product) holds for a grid
r = run(STUBS + fun, 'int main(){for(int x=-9;x<=9;x++)for(int y=-9;y<=9;y++)if(y)if(fun(x,y)!=x*y){puts("BAD");return 1;}puts("OK");return 0;}')
ok(r == (0, "OK\n"), "Q1 fun == x*y on grid")

# ---- Q2
q = item(d, 2)
src = sol_code(q)
D2 = r"""int main(){ for(int t=0;t<4000;t++){ int n=rnd()%9, a[9]; for(int i=0;i<n;i++)a[i]=rnd()%3; if(rnd()&1) for(int i=0;i<n/2;i++)a[n-1-i]=a[i]; printf("%d\n",isPalindromeRec(a,n)); } return 0; }"""
print("Q2")
claim(q, 0, STUBS + src.replace("{", "{ calls++;", 1), 'int main(){int a[6]={1,3,2,2,3,1};isPalindromeRec(a,6);printf("%d\\n",calls);return 0;}', "Q2 calls")
ref = run(STUBS + src, D2)
fill(q, 1, build, D2, ref, "Q2")
order(q, 2, build, D2, ref, "Q2")
bugcheck(q, 3, build, D2, ref, "Q2")

# ---- Q3a
q = item(d, 3, "א")
src = sol_code(q)
D3 = r"""int main(){ for(int t=0;t<4000;t++){ int n=1+rnd()%7, a[8]; for(int i=0;i<n;i++)a[i]=rnd()%n; printf("%d\n",is_permutation_of_palindrom(a,n)); } return 0; }"""
print("Q3a")
claim(q, 0, STUBS + src.replace("free(temp);", 'printf("%d\\n",count);free(temp);'), 'int main(){int a[7]={1,1,5,0,1,1,0};is_permutation_of_palindrom(a,7);return 0;}', "Q3a odd count")
claim(q, 1, STUBS + src, 'int main(){int a[3]={0,1,2};printf("%d\\n",is_permutation_of_palindrom(a,3));return 0;}', "Q3a {0,1,2}")
ref = run(STUBS + src, D3)
fill(q, 2, build, D3, ref, "Q3a")
order(q, 3, build, D3, ref, "Q3a")
r = run(STUBS + src, 'int main(){int a[7]={1,1,5,0,1,1,0};int b[2]={0,1};printf("%d%d\\n",is_permutation_of_palindrom(a,7),is_permutation_of_palindrom(b,2));return 0;}')
ok(r == (0, "10\n"), "Q3a examples")

# ---- Q3b
q = item(d, 3, "ב")
src = sol_code(q)
D3b = r"""int main(){ for(int t=0;t<4000;t++){ int n=1+rnd()%7, a[8]; for(int i=0;i<n;i++)a[i]=rnd()%n; printf("%d\n",bonus(a,n)); } return 0; }"""
print("Q3b")
claim(q, 0, STUBS + src.replace("free(temp);", 'printf("%d\\n",count);free(temp);'), 'int main(){int a[5]={1,1,4,3,1};bonus(a,5);return 0;}', "Q3b odd count")
claim(q, 1, STUBS + src, 'int main(){int a[4]={0,1,2,3};printf("%d\\n",bonus(a,4));return 0;}', "Q3b {0,1,2,3}")
ref = run(STUBS + src, D3b)
fill(q, 2, build, D3b, ref, "Q3b")
order(q, 3, build, D3b, ref, "Q3b")
r = run(STUBS + src, 'int main(){int a[5]={1,1,4,3,1};printf("%d\\n",bonus(a,5));return 0;}')
ok(r == (0, "2\n"), "Q3b example 2")

# ---- Q4
q = item(d, 4)
src = sol_code(q)
D4 = r"""int main(){ for(int t=0;t<6000;t++){ int n=1+rnd()%6,a[6],b[6],v=rnd()%3,w=14+rnd()%3; for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;w-=1+rnd()%3;b[i]=w;} printf("%d\n",check_if_different_elements(a,b,n)); } return 0; }"""
print("Q4")
claim(q, 0, STUBS + src.replace("if (a[ia] == b[ib])", "calls++; if (a[ia] == b[ib])"), 'int main(){int a[3]={1,2,3},b[3]={9,8,7};check_if_different_elements(a,b,3);printf("%d\\n",calls);return 0;}', "Q4 iterations")
claim(q, 1, STUBS + src, 'int main(){int a[3]={1,3,5},b[3]={9,6,3};printf("%d\\n",check_if_different_elements(a,b,3));return 0;}', "Q4 {1,3,5}/{9,6,3}")
ref = run(STUBS + src, D4)
ok(ref[0] == 0 and "0" in ref[1] and "1" in ref[1], "Q4 reference sees both outcomes")
fill(q, 2, build, D4, ref, "Q4")
order(q, 3, build, D4, ref, "Q4")

# ---- Q5 (solver-fixed code)
q = item(d, 5)
src = sol_code(q)
D5 = r"""int main(){ for(int t=0;t<5000;t++){ int n=1+rnd()%5,a[5],b[5],d=(int)(rnd()%14)-1; for(int i=0;i<n;i++){a[i]=(int)(rnd()%12)-3;b[i]=(int)(rnd()%12)-3;} printf("%d\n",is_sum(a,b,n,d)); } return 0; }"""
print("Q5")
claim(q, 0, STUBS + src, 'int main(){int b[4]={15,11,2,8};merge_sort(b,0,3);for(int i=0;i<4;i++)if(b[i]==11)printf("%d\\n",i);return 0;}', "Q5 index of 11")
claim(q, 1, STUBS + src, 'int main(){int a[4]={12,2,14,2},b[4]={15,11,2,8};is_sum(a,b,4,5);printf("%d\\n",calls);return 0;}', "Q5 searches for d=5")
ref = run(STUBS + src, D5)
fill(q, 2, build, D5, ref, "Q5")
order(q, 3, build, D5, ref, "Q5")
r = run(STUBS + src, 'int main(){int a[4]={12,2,14,2},b[4]={15,11,2,8};int x=is_sum(a,b,4,23);int c[4]={15,11,2,8};printf("%d%d\\n",x,is_sum(a,c,4,5));return 0;}')
ok(r == (0, "10\n"), "Q5 examples")

# ---- Q6 (solver-fixed code)
q = item(d, 6)
src = sol_code(q)
D6 = r"""int main(){
 int fixed[][3][3]={{{12,19,14},{17,15,13},{16,11,18}},{{1,2,3},{2,3,1},{3,1,2}},{{1,2,3},{3,1,2},{2,3,1}},{{1,2,3},{1,2,3},{3,3,0}},{{2,7,6},{9,5,1},{4,3,8}},{{8,1,6},{3,5,7},{4,9,2}}};
 for(int k=0;k<6;k++) printf("%d\n",CheckMagic(fixed[k]));
 for(int t=0;t<6000;t++){ int A[3][3]; for(int i=0;i<3;i++)for(int j=0;j<3;j++)A[i][j]=rnd()%3; printf("%d\n",CheckMagic(A)); }
 return 0; }"""
print("Q6")
claim(q, 0, STUBS + src.replace("//check rows", 'printf("%d\\n", sum); return 1;'), 'int main(){int A[3][3]={{12,19,14},{17,15,13},{16,11,18}};CheckMagic(A);return 0;}', "Q6 sum")
claim(q, 1, STUBS + src, 'int main(){int A[3][3]={{1,2,3},{2,3,1},{3,1,2}};printf("%d\\n",CheckMagic(A));return 0;}', "Q6 latin square")
ref = run(STUBS + src, D6)
ok(ref[0] == 0 and ref[1].count("1") > 3, "Q6 reference sees both outcomes")
fill(q, 2, build, D6, ref, "Q6")
bugcheck(q, 3, build, D6, ref, "Q6")
finish()
