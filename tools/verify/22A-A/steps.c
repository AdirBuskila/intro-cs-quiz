#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct { int num, numerator, denominator; } Fraction;
typedef int (*Better)(Fraction x, Fraction m);
static int better_ok(Fraction x, Fraction m){ return x.numerator*m.denominator > m.numerator*x.denominator; }
static int better_lt(Fraction x, Fraction m){ return x.numerator*m.denominator < m.numerator*x.denominator; }
static int better_num(Fraction x, Fraction m){ return x.numerator > m.numerator; }
static int better_prod(Fraction x, Fraction m){ return x.numerator*x.denominator > m.numerator*m.denominator; }
static Fraction fb(Fraction *p, int size, Better b, int flipnum){
	int i; Fraction mx = p[0];
	for (i = 1; i < size; i++){
		if (flipnum ? (p[i].num < mx.num) : (p[i].num > mx.num)) mx = p[i];
		else if (p[i].num == mx.num){ if (b(p[i], mx)) mx = p[i]; }
	}
	return mx;
}
static double val(Fraction f){ return f.num + (double)f.numerator/f.denominator; }
int incr_subarray(int *a, int n){ if(n==1) return 1; if(a[0]<a[1]) return 1+incr_subarray(a+1,n-1); else return 1; }
int incr_mut(int *a, int n){ if(n==1) return 1; if(a[0]<=a[1]) return 1+incr_mut(a+1,n-1); else return 1; }
void rd1(char *str){ char *last=str; int count[26]={0};
	while(*str){ if(count[(*str)-'a']==0){ count[(*str)-'a']=1; *last=*str; last++; } str++; } *last='\0'; }
void rd_mut(char *str){ char *last=str; int count[26]={0};
	while(*str){ if(count[(*str)-'a']==0){ count[(*str)-'a']=0; *last=*str; last++; } str++; } *last='\0'; }
int mid0, iters;
int q4v2(int a[], int n, double k){ int low=0,high=n-1,mid,min=a[n-1]; iters=0; mid0=-1;
	while(low<=high){ mid=(low+high)/2; if(mid0<0) mid0=mid; iters++;
		if(a[mid]>=k){ min=a[mid]; high=mid-1; } else low=mid+1; } return min; }
int main(void){
	Fraction ex[]={{2,3,4},{5,3,4},{3,1,5},{2,7,8},{5,1,2}};
	Fraction r=fb(ex,5,better_ok,0); printf("Q1 example -> %d %d/%d\n",r.num,r.numerator,r.denominator);
	Fraction t[]={{1,1,2},{1,2,3}};
	printf("Q1 tie 1 1/2 vs 1 2/3: x.num*m.den=%d m.num*x.den=%d result=%d %d/%d\n",2*2,1*3,fb(t,2,better_ok,0).num,fb(t,2,better_ok,0).numerator,fb(t,2,better_ok,0).denominator);
	Better bs[3]={better_lt,better_num,better_prod}; const char*nm[3]={"lt","num-only","product"}; unsigned s=3;
	for(int b=0;b<3;b++){ int bad=0; Fraction ce[2]={{0,0,1},{0,0,1}};
		for(int it=0;it<20000;it++){ Fraction p[2]; for(int i=0;i<2;i++){ p[i].num=((s=s*1103515245u+12345u)>>16)%2; p[i].denominator=2+((s=s*1103515245u+12345u)>>16)%6; p[i].numerator=((s=s*1103515245u+12345u)>>16)%p[i].denominator; }
			Fraction g=fb(p,2,bs[b],0), w=p[0]; if(val(p[1])>val(p[0])) w=p[1];
			if(val(g)!=val(w)){ if(!bad){ce[0]=p[0];ce[1]=p[1];} bad++; } }
		printf("Q1 mutant %s wrong in %d/20000 e.g. %d %d/%d , %d %d/%d\n",nm[b],bad,ce[0].num,ce[0].numerator,ce[0].denominator,ce[1].num,ce[1].numerator,ce[1].denominator); }
	{ int bad=0; for(int it=0;it<20000;it++){ Fraction p[4]; for(int i=0;i<4;i++){ p[i].num=((s=s*1103515245u+12345u)>>16)%3; p[i].denominator=2+((s=s*1103515245u+12345u)>>16)%6; p[i].numerator=((s=s*1103515245u+12345u)>>16)%p[i].denominator; }
		Fraction g=fb(p,4,better_ok,0), w=p[0]; for(int i=1;i<4;i++) if(val(p[i])>val(w)) w=p[i]; if(val(g)!=val(w)) bad++; }
	  printf("Q1 official wrong in %d/20000\n",bad); }
	Fraction ex2[]={{2,3,4},{5,3,4},{3,1,5},{2,7,8},{5,1,2}}; Fraction rm=fb(ex2,5,better_ok,1); printf("Q1 flipped-num mutant -> %d %d/%d\n",rm.num,rm.numerator,rm.denominator);
	int a1[]={-5,-2,12,12,25,34,40}, a2[]={-5,-5,12,10,25,34,40}, a3[]={12,10,25,34,40}, a4[]={1,2,3,4,5,5}, a5[]={7};
	printf("Q2 %d %d %d %d %d | mutant %d %d %d %d\n",incr_subarray(a1,7),incr_subarray(a2,7),incr_subarray(a3,5),incr_subarray(a4,6),incr_subarray(a5,1),incr_mut(a1,7),incr_mut(a2,7),incr_mut(a3,5),incr_mut(a4,6));
	char b1[32]="blablabh", b2[32]="aabbcab", b3[32]="aa", b4[32]="aabbcab";
	rd1(b1); rd1(b2); rd_mut(b3); rd_mut(b4); printf("Q3 blablabh->%s aabbcab->%s | mutant aa->%s aabbcab->%s\n",b1,b2,b3,b4);
	int a[]={-5,-2,-1,0,2,4,4,9}; double k=1.375; int res=q4v2(a,8,k); printf("Q4 v2=%d mid0=%d iters=%d a[mid0]=%d\n",res,mid0,iters,a[mid0]);
	{ int bad=0; for(int it=0;it<20000;it++){ int n=1+((s=s*1103515245u+12345u)>>16)%10; int arr[12],sum=0,v=-8; for(int i=0;i<n;i++){ v+=((s=s*1103515245u+12345u)>>16)%4; arr[i]=v; sum+=v; } double kk=(double)sum/n; int g=q4v2(arr,n,kk), w=0; for(int i=0;i<n;i++) if(arr[i]>=kk){ w=arr[i]; break; } if(g!=w) bad++; }
	  printf("Q4 v2 wrong in %d/20000 (random sorted arrays, k=mean)\n",bad); }
	return 0; }
