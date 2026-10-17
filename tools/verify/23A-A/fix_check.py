import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from fix_lib import *

Q2 = [
"void squeeze(char* str)",
"{",
"    int i, pos = 0, count[26] = { 0 }, len = strlen(str);",
"    for (i = 0; i < len; ++i) count[str[i] - 'a']++;",
"    for (i = 0; i < len; ++i) if (count[str[i] - 'a'] == 3) { str[pos++] = str[i]; count[str[i] - 'a'] = 0; }",
"    str[pos] = '\0';",
"}"]
D2 = r"""int main(){ for(int t=0;t<3000;t++){ char s[64]; int n=1+rnd()%14; for(int i=0;i<n;i++)s[i]='a'+rnd()%4; s[n]=0; char o[64]; strcpy(o,s); memset(s+n+1,0,0); squeeze(s); printf("%s|%s\n",o,s);} return 0;}"""
check_swaps(Q2, D2, "23A Q2 order")
# fillblank distractor candidates (full-line form, original layout)
Q2F = [
"void squeeze(char* str)", "{", "    int i, pos = 0;", "    int count[26] = { 0 };", "    int len = strlen(str);",
"    for (i = 0; i < len; ++i)", "        count[str[i] - 'a']++;", "    for (i = 0; i < len; ++i){",
"        if (count[str[i] - 'a'] == 3)", "        {", "            str[pos++] = str[i];",
"            count[str[i] - 'a'] = 0;", "        }", "    }", "    str[pos] = '\0';", "}"]
for cand in ["count[str[i] - 'a'] = 0;", "count[str[i] - 'a'] = pos;", "count[str[i] - 'a'] = 3;", "count[str[i] - 'a']--;", "pos++;"]:
    check_variant(Q2F, 11, "            " + cand, D2, "23A Q2 fillblank")

Q3 = [
"int* distsort(int* a, int n, int num)",
"{",
"    int first = 0, last = n - 1, new_position = n - 1, *new_sort = (int*)malloc(n * sizeof(int));",
"    assert(new_sort);",
"    while (first <= last)",
"        if (a[last] - num >= num - a[first])",
"            new_sort[new_position--] = a[last--];",
"        else",
"            new_sort[new_position--] = a[first++];",
"    return new_sort;",
"}"]
D3 = r"""int main(){ for(int t=0;t<3000;t++){ int n=1+rnd()%8; int a[16]; int v=(int)(rnd()%3); for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;} int num=a[rnd()%n]; int*r=distsort(a,n,num); for(int i=0;i<n;i++)printf("%d ",r[i]); printf("\n"); free(r);} return 0;}"""
check_swaps(Q3, D3, "23A Q3 order")

Q4 = [
"int waterfill(int valley[R][C], int cloudR, int cloudC, int cloudH) {",
"    if (cloudH <= valley[cloudR][cloudC]) return 0;",
"    int fill = cloudH - valley[cloudR][cloudC]; valley[cloudR][cloudC] = 255;",
"    return fill +",
"        waterfill(valley, cloudR - 1, cloudC, cloudH) + waterfill(valley, cloudR + 1, cloudC, cloudH) + waterfill(valley, cloudR, cloudC - 1, cloudH) + waterfill(valley, cloudR, cloudC + 1, cloudH);",
"}"]
D4 = r"""int main(){ for(int t=0;t<3000;t++){ int v[R][C]; for(int i=0;i<R;i++)for(int j=0;j<C;j++)v[i][j]=(i==0||j==0||i==R-1||j==C-1)?255:1+rnd()%100; int r=1+rnd()%(R-2), c=1+rnd()%(C-2); int h=1+rnd()%150; printf("%d\n",waterfill(v,r,c,h)); } return 0;}"""
import fix_lib
fix_lib.PRE += "#define R 6\n#define C 6\n"
check_swaps(Q4, D4, "23A Q4 order")
