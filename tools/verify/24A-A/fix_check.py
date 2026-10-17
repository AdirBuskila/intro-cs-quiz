import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from fix_lib import *

Q2 = [
"int str_chardist(char* str) {",
"   int dists[26]={0}, i, len=strlen(str), maxdist=0;",
"   for (i=0;i<len-1;i++) dists[abs(str[i]-str[i+1])]++;",
"   for (i=1;i<26;i++) if (dists[i]>dists[maxdist]) maxdist = i;",
"   return maxdist;",
"}"]
D2 = r"""int main(){ for(int t=0;t<3000;t++){ char s[32]; int n=2+rnd()%10; for(int i=0;i<n;i++)s[i]='a'+rnd()%8; s[n]=0; printf("%s %d\n",s,str_chardist(s));} return 0;}"""
check_swaps(Q2, D2, "24A Q2 order")

Q4 = [
"int bin_search_mixed(int key, int* a, int n) { //assume: n is even",
"       int low = 0, high = n - 1, mid = 0;",
"       while (low <= high) {",
"              mid = (low + high) / 2;",
"              mid = mid - (mid % 2); // mid is even index",
"              if (key == a[mid]) return mid; if (key == a[mid + 1]) return mid + 1;",
"              else if (key < a[mid])",
"                     high = mid - 1;",
"              else",
"                     low = mid + 2; }",
"       return -1;",
"}"]
D4 = r"""int main(){ for(int t=0;t<20000;t++){int n=2*(1+rnd()%7);int a[16];int v=(int)(rnd()%3);for(int i=0;i<n;i++){v+=1+rnd()%3;a[i]=v;}for(int i=0;i<n;i+=2)if(rnd()%2){int x=a[i];a[i]=a[i+1];a[i+1]=x;}
 a[n]=a[n+1]=-77; int key=(int)(rnd()%(v+4)); printf("%d\n",bin_search_mixed(key,a,n));} return 0;}"""
check_swaps(Q4, D4, "24A Q4 order")
Q4F = list(Q4)
for cand in ["mid = mid - (mid % 2); // mid is even index", "mid = mid + (mid % 2); // mid is even index", "mid = mid | 1; // mid is even index", "mid = mid + 1; // mid is even index"]:
    check_variant(Q4F, 4, "              " + cand, D4, "24A Q4 fillblank")
