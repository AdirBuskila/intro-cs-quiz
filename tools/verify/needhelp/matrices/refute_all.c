#include <stdio.h>
#define N 4
int main(){
{int m[3][4]={{1,2,3,4},{5,6,7,8},{9,10,11,12}};int*p=&m[0][0];printf("C01 %d %d %d\n",m[1][2],(int)(sizeof(int[5][7])/sizeof(int)),p[6]);}
{int a[3][3]={{3,8,1},{6,2,9},{4,7,6}};int s=0,c=0;for(int i=0;i<3;i++)for(int j=0;j<3;j++){s+=a[i][j];if(a[i][j]>4)c++;}printf("C02 %d %d ",s,c);}
{int a[2][3]={{1,2,3},{4,5,6}};for(int j=0;j<3;j++)for(int i=0;i<2;i++)printf("%d",a[i][j]);puts("");}
{int a[3][3]={{1,4,2},{6,0,3},{5,5,1}};int s=0;for(int k=0;k<3;k++)s+=a[k][2];int best=0,bs=-1;for(int i=0;i<3;i++){int t=0;for(int j=0;j<3;j++)t+=a[i][j];if(t>bs){bs=t;best=i;}}printf("C03 %d %d\n",s,best);}
{int e[4][4]={{2,0,5,1},{3,4,1,7},{6,2,9,0},{8,1,3,5}};int s=0,t=0;for(int i=0;i<4;i++){s+=e[i][i];t+=e[i][3-i];}printf("C04 %d %d\n",s,t);}
{int a[3][3]={{1,2,3},{4,5,6},{7,8,9}};for(int i=0;i<3;i++)a[i][i]=0;int s=0;for(int i=0;i<3;i++)for(int j=0;j<3;j++)s+=a[i][j];int b[4][5];printf("C05 %d %d ",s,(int)(&b[2][3]-&b[0][0]));}
{int a[2][3]={{1,2,3},{4,5,6}},o[3]={0};for(int i=0;i<2;i++)for(int j=0;j<3;j++)o[j]+=a[i][j];printf("%d %d %d\n",o[0],o[1],o[2]);}
{int a[3][3]={{1,1,2},{3,3,3},{2,1,1}};int c=0;for(int i=0;i<3;i++)for(int j=0;j<2;j++)if(a[i][j]==a[i][j+1])c++;printf("C06 %d ",c);}
{int a[3][3]={{1,2,3},{4,5,6},{7,8,9}};int s=0;for(int di=-1;di<=1;di++)for(int dj=-1;dj<=1;dj++)if(di||dj)s+=a[1+di][1+dj];printf("%d ",s);}
{int a[3][3]={{9,1,9},{2,9,3},{4,5,6}};int c[10]={0};for(int i=0;i<3;i++)for(int j=0;j<3;j++)c[a[i][j]]++;printf("%d ",c[9]);int w=0;for(int r=0;r+2<6;r++)for(int cc=0;cc+2<5;cc++)w++;printf("%d\n",w);}
{int m[2][4]={{9,9,9,9},{1,2,3,4}};int r=1,last=m[r][3];for(int c=3;c>0;c--)m[r][c]=m[r][c-1];m[r][0]=last;printf("C07 ");for(int c=0;c<4;c++)printf("%d ",m[r][c]);}
{int m[N][N]={{1,2,3,4},{5,6,7,8},{5,6,0,8},{1,2,3,9}};int v=0,w=0;for(int i=0;i<N/2;i++)for(int j=0;j<N;j++)if(m[i][j]!=m[N-1-i][j])v++;for(int i=0;i<N;i++)for(int j=0;j<N;j++)if(m[i][j]!=m[N-1-i][j])w++;printf("%d %d ",v,w);}
{int a[3][3]={{1,4,7},{2,5,8},{3,6,9}};int key=6,i=0,j=2,st=0;while(i<3&&j>=0){st++;if(a[i][j]==key)break;if(a[i][j]>key)j--;else i++;}printf("%d\n",st);}
}
