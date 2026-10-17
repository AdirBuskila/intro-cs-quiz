/* Independent refuter harness for 22A-A (not reusing the author's outputs). */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct { int num, numerator, denominator; } Fraction;

/* ---- Q1. v: 0 official, 1 '<' compare, 2 numerators only, 3 numerator*denominator products, 4 whole-part '<' bug, 5 '<' on cross-mult */
static Fraction fb(Fraction*p,int n,int v){
  Fraction mx=p[0];
  for(int i=1;i<n;i++){
    int gt=(v==4)?(p[i].num<mx.num):(p[i].num>mx.num);
    if(gt) mx=p[i];
    else if(p[i].num==mx.num){
      int c;
      switch(v){
        case 1: c=p[i].numerator*mx.denominator<mx.numerator*p[i].denominator;break;
        case 2: c=p[i].numerator>mx.numerator;break;
        case 3: c=p[i].numerator*p[i].denominator>mx.numerator*mx.denominator;break;
        default: c=p[i].numerator*mx.denominator>mx.numerator*p[i].denominator;
      }
      if(c) mx=p[i];
    }
  }
  return mx;
}
/* reference: compare as exact rationals (whole*den+numer)/den */
static int fr_gt(Fraction a,Fraction b){ return (long)(a.num*a.denominator+a.numerator)*b.denominator > (long)(b.num*b.denominator+b.numerator)*a.denominator; }
static Fraction rnd_frac(void){ Fraction f; f.num=rand()%4; f.denominator=rand()%7+2; f.numerator=rand()%f.denominator; return f; }
static void test_fb(const char*name,int v){
  srand(21); int bad=0,N=20000,first=1;
  for(int t=0;t<N;t++){
    Fraction a[6]; int n=rand()%5+1; for(int i=0;i<n;i++)a[i]=rnd_frac();
    Fraction ref=a[0]; for(int i=1;i<n;i++) if(fr_gt(a[i],ref)) ref=a[i];
    Fraction got=fb(a,n,v);
    /* equal-valued different representations: compare by value */
    if(fr_gt(ref,got)||fr_gt(got,ref)){bad++; if(first){first=0;printf("   witness n=%d:",n);for(int i=0;i<n;i++)printf(" %d %d/%d",a[i].num,a[i].numerator,a[i].denominator);printf(" -> %d %d/%d\n",got.num,got.numerator,got.denominator);}}
  }
  printf("Q1 %-26s wrong=%d of %d\n",name,bad,N);
}

/* ---- Q2. v: 0 official, 1 no '1+', 2 (a, n-1), 3 (a+1, n), 4 '<=' ; depth cap + padded array */
static int depth_cap;
static int inc(int*a,int n,int v,int d){
  if(d>60){depth_cap=1;return -1;}
  if(n==1) return 1;
  int c=(v==4)?(a[0]<=a[1]):(a[0]<a[1]);
  if(c){
    switch(v){
      case 1: return inc(a+1,n-1,v,d+1);
      case 2: return 1+inc(a,n-1,v,d+1);
      case 3: return 1+inc(a+1,n,v,d+1);
      default: return 1+inc(a+1,n-1,v,d+1);
    }
  } else return 1;
}
static int inc_ref(int*a,int n){ int l=1; while(l<n&&a[l-1]<a[l])l++; return l; }
static void test_inc(const char*name,int v){
  srand(4); int bad=0,N=30000,first=1;
  for(int t=0;t<N;t++){
    int buf[80]; for(int i=0;i<80;i++)buf[i]=rand()%6;
    int n=rand()%7+1; for(int i=0;i<n;i++)buf[i]=rand()%6;
    if(rand()%2){ for(int i=1;i<n;i++) if(rand()%5) buf[i]=buf[i-1]+1+rand()%2; }
    depth_cap=0; int g=inc(buf,n,v,0); int w=inc_ref(buf,n);
    if(depth_cap||g!=w){bad++; if(first){first=0;printf("   witness n=%d:",n);for(int i=0;i<n;i++)printf(" %d",buf[i]);printf(" -> %d (want %d)%s\n",g,w,depth_cap?" [recursion cap]":"");}}
  }
  printf("Q2 %-26s wrong=%d of %d\n",name,bad,N);
}

/* ---- Q3. v: 0 ==0 official, 1 ==1, 2 !=0, 3 >1, 4 count=0 bug, 5 v2 index 'A' */
static void rd(char*s,int v,int*oob){
  char*last=s; int count[26]={0}; *oob=0;
  while(*s){
    int idx=(v==5)?(*s-'A'):(*s-'a'); if(idx<0||idx>=26){*oob=1; s++; continue;}
    int c;
    switch(v){case 1:c=count[idx]==1;break;case 2:c=count[idx]!=0;break;case 3:c=count[idx]>1;break;default:c=count[idx]==0;}
    if(c){ count[idx]=(v==4)?0:1; *last=*s; last++; }
    s++;
  }
  *last='\0';
}
static void ref_dup(const char*in,char*out){ int seen[26]={0}; int k=0; for(;*in;in++){ if(!seen[*in-'a']){seen[*in-'a']=1;out[k++]=*in;} } out[k]=0; }
static void test_rd(const char*name,int v){
  srand(8); int bad=0,N=20000,first=1,oobs=0;
  for(int t=0;t<N;t++){
    char s[16],o[16],w[16]; int n=rand()%9+1; for(int i=0;i<n;i++)s[i]='a'+rand()%4; s[n]=0;
    ref_dup(s,w); strcpy(o,s); int oob; rd(o,v,&oob); oobs+=oob;
    if(strcmp(o,w)){bad++; if(first){first=0;printf("   witness \"%s\" -> \"%s\" (want \"%s\")\n",s,o,w);}}
  }
  printf("Q3 %-26s wrong=%d of %d (strings that index out of count[26]: %d)\n",name,bad,N,oobs);
}

/* ---- Q4. v: 0 version2 official, 1 high=mid, 2 low=mid+1, 3 low=mid, 4 version1 (<= x, max) ; returns -9999 on hang */
static int q4(int*a,int n,double k,int v){
  int low=0,high=n-1,mid,it=0,res=(v==4)?a[0]:a[n-1];
  while(low<=high){
    if(++it>200) return -9999;
    mid=(low+high)/2;
    if(v==4){ if(a[mid]<=k){res=a[mid];low=mid+1;} else high=mid-1; continue; }
    if(a[mid]>=k){ res=a[mid];
      switch(v){case 1:high=mid;break;case 2:low=mid+1;break;case 3:low=mid;break;default:high=mid-1;} }
    else low=mid+1;
  }
  return res;
}
static int cmpi(const void*x,const void*y){return *(int*)x-*(int*)y;}
static void test_q4(const char*name,int v){
  srand(13); int bad=0,hang=0,N=30000,first=1;
  for(int t=0;t<N;t++){
    int n=rand()%8+1,a[9]; double s=0; for(int i=0;i<n;i++){a[i]=rand()%15-7;s+=a[i];} qsort(a,n,sizeof(int),cmpi);
    double k=s/n; int w=0,f=0; for(int i=0;i<n;i++) if(a[i]>=k){w=a[i];f=1;break;}
    if(!f){printf("   !! no element >= mean?\n");}
    int g=q4(a,n,k,v);
    if(g==-9999){hang++;}
    if(g!=w){bad++; if(first){first=0;printf("   witness n=%d:",n);for(int i=0;i<n;i++)printf(" %d",a[i]);printf(" mean=%.3f -> %d (want %d)%s\n",k,g,w,g==-9999?" [hang]":"");}}
  }
  printf("Q4 %-26s wrong=%d (hang=%d) of %d\n",name,bad,hang,N);
}

int main(void){
  Fraction ex[5]={{2,3,4},{5,3,4},{3,1,5},{2,7,8},{5,1,2}};
  Fraction r=fb(ex,5,0); printf("Q1 example -> %d %d/%d\n",r.num,r.numerator,r.denominator);
  Fraction x=fb(ex,5,4); printf("Q1 findbug '<' whole part -> %d %d/%d\n",x.num,x.numerator,x.denominator);
  printf("Q1 step: 2*2=%d vs 1*3=%d ; example cross 3*2=%d vs 1*4=%d\n",2*2,1*3,3*2,1*4);
  { Fraction p[2]={{1,1,2},{1,2,3}}; Fraction q=fb(p,2,0); printf("Q1 1 1/2 vs 1 2/3 -> %d %d/%d\n",q.num,q.numerator,q.denominator); }
  test_fb("official",0); test_fb("'<' cross-mult",1); test_fb("numerators only",2); test_fb("numer*denom products",3); test_fb("findbug whole '<'",4);
  { int a[7]={-5,-2,12,12,25,34,40}; int b[6]={1,2,3,4,5,5}; printf("Q2 %d %d\n",inc(a,7,0,0),inc(b,6,0,0)); }
  test_inc("official",0); test_inc("no 1+ (b)",1); test_inc("(a,n-1) (c)",2); test_inc("(a+1,n) (d)",3); test_inc("findbug '<='",4);
  { char s[]="aabbcab"; int o; rd(s,0,&o); printf("Q3 aabbcab -> %s\n",s); }
  { int c='a'-'A'; printf("Q3 version2 index for 'a' = %d (array size 26)\n",'a'-'A'); (void)c; }
  test_rd("official",0); test_rd("==1",1); test_rd("!=0",2); test_rd(">1",3); test_rd("findbug count=0",4); test_rd("version2 -'A' (lowercase)",5);
  { int a[8]={-5,-2,-1,0,2,4,4,9}; double k=1.375; printf("Q4 mid0=%d a[mid]=%d ; v2=%d v1=%d\n",(0+7)/2,a[3],q4(a,8,k,0),q4(a,8,k,4)); }
  { int a[8]={-5,-2,-1,0,2,4,4,9}; int low=0,high=7,it=0,mid; double k=1.375; while(low<=high){mid=(low+high)/2;it++; if(a[mid]>=k)high=mid-1; else low=mid+1;} printf("Q4 iterations=%d\n",it); }
  test_q4("official v2",0); test_q4("high=mid",1); test_q4("low=mid+1",2); test_q4("low=mid",3); test_q4("version1 (<=)",4);
  return 0; }
