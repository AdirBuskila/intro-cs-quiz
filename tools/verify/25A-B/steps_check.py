import pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from steps_lib import *

d = load("25A-B")
STUBS = r"""
#define N 6
static int calls;
void merge_sort(int*a,int l,int r){ for(int i=l+1;i<=r;i++){int v=a[i],j=i-1; while(j>=l&&a[j]>v){a[j+1]=a[j];j--;} a[j+1]=v;} }
/* the sitting gives only the signature; the student solution assumes 1 if found, else 0 */
int binary_search(int*b,int n,int x){ int lo=0,hi=n-1; while(lo<=hi){int m=(lo+hi)/2; if(b[m]==x)return 1; if(b[m]<x)lo=m+1; else hi=m-1;} return 0; }
"""
build = lambda ls: STUBS + "\n".join(ls)

# ---- Q1
q = item(d, 1)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<5000;t++){ int n=rnd()%9,a[9]; for(int i=0;i<n;i++)a[i]=(int)(rnd()%15)-5; printf("%d\n",check_parity(a,n)); } return 0; }"""
print("Q1")
claim(q, 0, STUBS + src, 'int main(){int a[2]={3,4};printf("%d\\n",check_parity(a,2));return 0;}', "Q1 {3,4}")
claim(q, 1, STUBS + src.replace("{", "{ calls++;", 1), 'int main(){int a[6]={8,8,6,5,51,7};check_parity(a,6);printf("%d\\n",calls);return 0;}', "Q1 calls")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q1")
order(q, 3, build, D, ref, "Q1")
r = run(STUBS + src, 'int main(){int a[7]={8,7,22,-5,14,3,2},b[6]={8,8,6,5,51,7};printf("%d %d\\n",check_parity(a,7),check_parity(b,6));return 0;}')
ok(r == (0, "0 2\n"), "Q1 printed examples")

# ---- Q2
q = item(d, 2)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<4000;t++){ int n=1+rnd()%8,a[8],b[8],c[8],v; v=(int)(rnd()%3)-4; for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;} for(int i=n-1;i>0;i--){int j=rnd()%(i+1),tmp=a[i];a[i]=a[j];a[j]=tmp;}
  v=(int)(rnd()%3)-4; for(int i=0;i<n;i++){v+=1+rnd()%3;b[i]=v;} for(int i=n-1;i>0;i--){int j=rnd()%(i+1),tmp=b[i];b[i]=b[j];b[j]=tmp;}
  for(int i=0;i<n;i++)c[i]=a[i]; search_in_array(a,b,n); for(int i=0;i<n;i++)printf("%d%s",b[i],a[i]==c[i]?" ":"! "); printf("\n"); } return 0; }"""
EX = 'int main(){int a[9]={9,-5,3,-15,-21,2,-6,12,23},b[9]={99,2,3,4,-5,6,7,1,9},c[9];for(int i=0;i<9;i++)c[i]=a[i];search_in_array(a,b,9);'
print("Q2")
claim(q, 1, STUBS + src, EX + 'int s=0;for(int i=0;i<9;i++)s+=b[i];printf("%d\\n",s);return 0;}', "Q2 sum of arr2")
ref = run(STUBS + src, D)
fill(q, 2, build, D, ref, "Q2")
order(q, 3, build, D, ref, "Q2")
r = run(STUBS + src, EX + 'for(int i=0;i<9;i++)printf("%d ",b[i]);for(int i=0;i<9;i++)if(a[i]!=c[i])puts("CHANGED");return 0;}')
ok(r == (0, "0 1 1 0 1 0 0 0 1 "), "Q2 printed example, arr1 unchanged")
# distractor of the choice step: sorting arr1 itself changes it
alt = src.replace("merge_sort(temp,0,size-1);", "merge_sort(arr1,0,size-1);")
ok(alt != src, "Q2 variant sorts arr1")
r = run(STUBS + alt, EX + 'int ch=0;for(int i=0;i<9;i++)if(a[i]!=c[i])ch=1;printf("%d\\n",ch);return 0;}')
ok(r == (0, "1\n"), "Q2 sorting arr1 itself modifies arr1")

# ---- Q3
q = item(d, 3)
src = sol_code(q)
D = r"""int main(){ for(int t=0;t<8000;t++){ char tx[16],w[10]; int n=rnd()%11,m=rnd()%7; for(int i=0;i<n;i++)tx[i]='a'+rnd()%5; tx[n]=0; for(int i=0;i<m;i++)w[i]='a'+rnd()%5; w[m]=0; printf("%d\n",word_in_text(tx,w)); } return 0; }"""
print("Q3")
def before(s, marker, stmt):
    i = s.index(marker); ls = s.rfind("\n", 0, i) + 1
    return s[:ls] + stmt + "\n" + s[ls:]
claim(q, 0, before(STUBS + src, "while(*word)", 'printf("%d\\n", count[\'e\'-\'a\']);'), 'int main(){word_in_text("intelligence","a");return 0;}', "Q3 count e")
claim(q, 1, STUBS + src.replace("return 0;", 'return printf("%c\\n", *word), 0;'), 'int main(){word_in_text("intelligence","inciting");return 0;}', "Q3 failing letter")
ref = run(STUBS + src, D)
ok(ref[0] == 0 and ref[1].count("0") > 300 and ref[1].count("1") > 300, "Q3 reference sees both outcomes")
fill(q, 2, build, D, ref, "Q3")
order(q, 3, build, D, ref, "Q3")
r = run(STUBS + src, 'int main(){const char*w[]={"glee","client","electing","inciting"};for(int i=0;i<4;i++)printf("%d",word_in_text("intelligence",(char*)w[i]));return 0;}')
ok(r == (0, "1110"), "Q3 printed examples (glee, client, electing, inciting)")
r = run(STUBS + src, 'int main(){printf("%d\\n",word_in_text("intelligence","i"));return 0;}')
ok(r == (0, "1\n"), "Q3 sanity")
claim_i = run(before(STUBS + src, "while(*word)", 'printf("%d\\n", count[\'i\'-\'a\']);'), 'int main(){word_in_text("intelligence","a");return 0;}')
ok(claim_i == (0, "2\n"), "Q3 count i == 2 (statement in the pitfalls)")

# ---- Q4
q = item(d, 4)
src = sol_code(q)
IMG = "int image[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};"
D = r"""int main(){ int im[6][6]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}}; printf("%d\n",number_squares(im));
 for(int t=0;t<6000;t++){ int A[6][6]; int p=2+rnd()%3; for(int i=0;i<6;i++)for(int j=0;j<6;j++)A[i][j]=(int)(rnd()%10)<(p*2)?1:0; if(rnd()%2) for(int i=0;i<6;i++)for(int j=0;j<6;j++)A[i][j]=(int)(rnd()%12)==0?0:1; printf("%d\n",number_squares(A)); } return 0; }"""
print("Q4")
claim(q, 0, STUBS + src.replace("all_ones = 1;", "all_ones = 1; calls++;"), 'int main(){' + IMG + 'number_squares(image);printf("%d\\n",calls);return 0;}', "Q4 corners")
claim(q, 1, STUBS + src, 'int main(){' + IMG + 'printf("%d\\n",number_squares(image));return 0;}', "Q4 image")
ref = run(STUBS + src, D)
ok(ref[0] == 0 and len(set(ref[1].split())) > 4, "Q4 reference sees varied counts")
fill(q, 2, build, D, ref, "Q4")
FRAME = lambda ls: (STUBS + "int number_squares(int matrix[N][N]) {\n int i, j, a, b, all_ones, count = 0;\n"
                    " for (i = 0; i + 2 < N; i++) for (j = 0; j + 2 < N; j++) {\n" + "\n".join(ls) + "\n }\n return count;\n}")
order(q, 3, FRAME, D, ref, "Q4")
finish()
