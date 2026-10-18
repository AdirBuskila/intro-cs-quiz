#include <stdio.h>
#include <string.h>
int f1(int n){if(n==1)return 1;return n*f1(n-1);}
int h(int n){if(n==0)return 5;return h(n-1)+2;}
int calls=0;int f3(int n){calls++;if(n==0)return 0;return 1+f3(n-1);}
int a2(int a,int b){if(b==0)return 0;return a+a2(a,b-1);}
int s(int n){if(n==1)return 1;return s(n-1)+2*n-1;}
int g(int n){if(n==0)return 1;return 2*g(n-1)+1;}
int r(int n){if(n<=0)return 0;return r(n-2)+n;}
void p1(int n){if(n==0)return;printf("%d ",n*2);p1(n-1);}
void p2(int n){if(n==0)return;p2(n-1);printf("%d ",n*2);}
void p3(int n){if(n==0)return;printf("%d ",n);p3(n-1);printf("%d ",n*10);}
int kc=0;void k(int n){kc++;if(n==0){printf("0 ");return;}printf("%d ",n);k(n-1);printf("%d ",n);}
void up(int n){if(n==0)return;up(n-1);printf("%d ",n);}
int f4(int n){if(n==0)return 0;return n%10+f4(n/10);}
void pp(int n){if(n==0)return;printf("%d",n%10);pp(n/10);}
int c7(int n){if(n==0)return 0;return (n%10==7)+c7(n/10);}
int cc(int n){if(n==0)return 0;return 1+cc(n/10);}
int f5(int*a,int n){if(n==0)return 0;return (a[n-1]>3)+f5(a,n-1);}
int f52(int*a,int n){if(n==0)return 0;return a[0]+f52(a+1,n-1);}
int mx(int*a,int n){if(n==1)return a[0];int m=mx(a+1,n-1);return a[0]>m?a[0]:m;}
int cnt(char*s,char c){if(*s==0)return 0;return (*s==c)+cnt(s+1,c);}
void rev(char*s){if(!*s)return;rev(s+1);putchar(*s);}
int f6(char*s){if(!*s)return 0;return (*s>='a'&&*s<='m')+f6(s+1);}
int w(int n){if(n==0)return 1;if(n==1)return 2;return w(n-1)+w(n-2);}
int fc=0;int fib(int n){fc++;if(n<=1)return n;return fib(n-1)+fib(n-2);}
void t3(int n){if(n==0)return;t3(n-1);printf("%d ",n);t3(n-1);}
int c4=0;void t4(int n){c4++;if(n==0)return;t4(n-1);t4(n-1);}
int e2(int n){if(n<=0)return 0;return 1+e2(n-3);}
int sc=0;int st(int n){sc++;if(n==0)return sc;return st(n-1);}
int ob(int n){if(n==0)return 0;return n%2+ob(n/2);}
int gg(int x,int n){if(n==0)return 1;if(n%2==0){int h=gg(x,n/2);return h*h;}return x*gg(x,n-1);}
int pd(int n){if(n<10)return n;return n%10*pd(n/10);}
int ip(int*a,int n){if(n<=1)return 1;if(a[0]!=a[n-1])return 0;return ip(a+1,n-2);}
int main(){int a[]={5,1,4,3,9,2},b[]={2,4,6,8};
printf("C01 %d %d ",f1(4),h(3));f3(4);printf("%d\n",calls);
printf("C02 %d %d %d %d\n",a2(3,4),s(5),g(4),r(7));
printf("C03 ");p1(4);puts("");p2(4);puts("");p3(3);puts("");k(3);printf("| %d\n",kc);up(3);puts("");
printf("C04 %d ",f4(4527));pp(1230);printf(" %d %d %d\n",c7(7177),cc(0),cc(305));
printf("C05 %d %d %d\n",f5(a,6),f52(b,2),mx(a,6));
printf("C06 %d ",cnt("banana",'a'));rev("abc");printf(" %d\n",f6("hello world"));
fib(5);printf("C07 %d %d ",w(5),fc);t3(3);t4(4);printf("%d\n",c4);
printf("C08 %d ",e2(10));st(3);printf("%d\n",st(2));
printf("C09 %d %d %d %d\n",ob(13),gg(3,5),pd(234),ip(b,4));
int pal[]={1,2,3,2,1},np[]={1,2,3,4,1};printf("pal %d %d\n",ip(pal,5),ip(np,5));
}
