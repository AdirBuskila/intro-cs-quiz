import pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from steps_lib import *

d = load("24A-B")
STUBS = r"""
static int calls;
void merge_sort(int*a,int l,int r){ for(int i=l+1;i<=r;i++){int v=a[i],j=i-1; while(j>=l&&a[j]>v){a[j+1]=a[j];j--;} a[j+1]=v;} }
"""
build = lambda ls: STUBS + "\n".join(ls)

# ---- Q1
q = item(d, 1)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<4000;t++){ int n=rnd()%9,a[9],sz=-7; for(int i=0;i<n;i++)a[i]=rnd()%(n+1); int*r=valueNotInArray(a,n,&sz); printf("%d:",sz); for(int i=0;i<sz;i++)printf(" %d",r[i]); printf("\n"); free(r);} return 0; }"""
print("Q1")
claim(q, 0, STUBS + src, 'int main(){int a[6]={0,1,1,0,3,5},sz=-1;int*r=valueNotInArray(a,6,&sz);printf("%d\\n",sz);return 0;}', "Q1 newSize")
claim(q, 1, STUBS + src, 'int main(){int a[2]={1,1},sz=-1;int*r=valueNotInArray(a,2,&sz);for(int i=0;i<sz;i++)printf(i?", %d":"%d",r[i]);printf("\\n");return 0;}', "Q1 {1,1}")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q1")
order(q, 3, build, D, ref, "Q1")

# ---- Q2
q = item(d, 2)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<5000;t++){ char s[12]; int n=rnd()%10; for(int i=0;i<n;i++)s[i]='0'+rnd()%4; s[n]=0; printf("%d\n",find_two_digits(s)); } return 0; }"""
print("Q2")
claim(q, 0, STUBS + src, 'int main(){printf("%d\\n",find_two_digits("0001"));return 0;}', "Q2 0001")
claim(q, 1, STUBS + src, 'int main(){printf("%d\\n",find_two_digits("426144"));return 0;}', "Q2 426144")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q2")
order(q, 3, build, D, ref, "Q2")
r = run(STUBS + src, 'int main(){printf("%d %d %d %d %d %d\\n",find_two_digits("12121212121"),find_two_digits("21212121212"),find_two_digits("222211"),find_two_digits("0001"),find_two_digits("1234"),find_two_digits("426144"));return 0;}')
ok(r == (0, "12 12 22 0 12 14\n"), "Q2 printed examples")

# ---- Q3
q = item(d, 3)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<8000;t++){ int n=rnd()%7,m=rnd()%7,p[8],g[8],v=rnd()%2,mag=14; for(int i=0;i<n;i++){v+=1+rnd()%3;p[i]=v;} for(int i=0;i<m;i++){mag-=1+rnd()%2;g[i]=-mag;}
  printf("%d\n",is_zero(p,n,g,m)); } return 0; }"""
print("Q3")
CALLS = src.replace("{", "{ calls++;", 1)
claim(q, 0, STUBS + CALLS, 'int main(){int p[4]={1,4,8,11},g[5]={-20,-15,-11,-3,-2};is_zero(p,4,g,5);printf("%d\\n",calls);return 0;}', "Q3 calls ex1")
claim(q, 1, STUBS + CALLS, 'int main(){int p[4]={1,4,8,11},g[5]={-20,-15,-12,-3,-2};is_zero(p,4,g,5);printf("%d\\n",calls);return 0;}', "Q3 calls ex2")
ref = run(STUBS + src, D)
ok(ref[0] == 0 and ref[1].count("1") > 300 and ref[1].count("0") > 300, "Q3 reference sees both outcomes")
fill(q, 2, build, D, ref, "Q3")
order(q, 3, build, D, ref, "Q3")
r = run(STUBS + src, 'int main(){int p[4]={1,4,8,11},g[5]={-20,-15,-11,-3,-2},h[5]={-20,-15,-12,-3,-2};printf("%d%d\\n",is_zero(p,4,g,5),is_zero(p,4,h,5));return 0;}')
ok(r == (0, "10\n"), "Q3 examples")

# ---- Q4
q = item(d, 4)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<6000;t++){ int n=rnd()%10,a[10]; for(int i=0;i<n;i++)a[i]=rnd()%4; printf("%d\n",number_returns(a,n)); } return 0; }"""
print("Q4")
claim(q, 0, STUBS + src, 'int main(){int a[6]={5,5,1,5,1,5};printf("%d\\n",number_returns(a,6));return 0;}', "Q4 {5,5,1,5,1,5}")
claim(q, 1, STUBS + src, 'int main(){int a[5]={2,9,2,9,2};printf("%d\\n",number_returns(a,5));return 0;}', "Q4 {2,9,2,9,2}")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q4")
bugcheck(q, 3, build, D, ref, "Q4")
r = run(STUBS + src, 'int main(){int a[3]={1,2,2};int b[19]={1,2,-3005,2,3,1,-1000,3,7,-11,2,15,2,3,90,7,2,2,1000};printf("%d %d\\n",number_returns(a,3),number_returns(b,19));return 0;}')
ok(r == (0, "2 6\n"), "Q4 findbug-explain {1,2,2} and printed example")
bug_r = run(build(q["steps"][3]["lines"]), 'int main(){int a[3]={1,2,2};printf("%d\\n",number_returns(a,3));return 0;}')
ok(bug_r == (0, "1\n"), "Q4 buggy version gives 1 on {1,2,2}")
finish()
