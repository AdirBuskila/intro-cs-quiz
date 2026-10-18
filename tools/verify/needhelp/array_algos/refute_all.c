#include <stdio.h>
#include <stdlib.h>
int count=0;
int pivot(int*a,int n){int i,t=0,l=0;for(i=0;i<n;i++)t+=a[i];for(i=0;i<n;i++){if(l==t-l-a[i])return i;l+=a[i];}return -1;}
int main(){int i,j,n;
count=0;for(i=0;i<30;i+=3)count++;printf("C01 %d ",count);
count=0;for(i=0;i<40;i++)count++;for(i=0;i<40;i+=2)count++;printf("%d\n",count);
count=0;for(i=0;i<10;i++)for(j=0;j<i;j++)count++;printf("C02 %d ",count);
count=0;for(i=1;i<1024;i*=2)count++;printf("%d\n",count);
{int a[]={3,1,3,0,1,3},cnt[7]={0};for(i=0;i<6;i++)cnt[a[i]]++;printf("C03 %d ",cnt[3]);}
{int a[]={1,1,5,0,1,1,0},cnt[7]={0},o=0;for(i=0;i<7;i++)cnt[a[i]]++;for(i=0;i<7;i++)if(cnt[i]%2)o++;printf("%d ",o);}
count=0;n=50;for(i=0;i<n;i++)for(j=0;j<n;j++)count++;printf("%d\n",count);
{int a[]={1,7,3,6,5,6};printf("C04 %d ",pivot(a,6));}
printf("%d\n",20*19);
{int a[]={1,3,4,6,9,11};int lo=0,hi=5,it=0;while(lo<hi){it++;int s=a[lo]+a[hi];if(s==15)break;if(s<15)lo++;else hi--;}printf("C05 %d ",it);}
{int a[]={1,2,1};int ok=1;for(i=0;i<3/2;i++)if(a[i]!=a[3-2-i])ok=0;printf("bugpal=%d ",ok);int b[]={5};int lo=0,hi=0,r=0;while(lo<=hi){int s=b[lo]+b[hi];if(s==10){r=1;break;}if(s<10)lo++;else hi--;}printf("le=%d\n",r);}
{int a[]={1,3,5,7},b[]={2,3,6,7,8};int i=0,j=0,c=0,it=0;while(i<4&&j<5){it++;if(a[i]==b[j]){c++;i++;j++;}else if(a[i]<b[j])i++;else j++;}printf("C06 %d %d ",it,c);}
{int a[]={1,3},b[]={3};int i=0,j=0,c=0;while(i<2&&j<1){if(a[i]==b[j]){c++;i++;j++;}else if(a[i]<b[j])j++;else j++;}printf("bug=%d ",c);}
{int a[]={2,3,5,6,9,10,12,13};int t=a[1];a[1]=a[7];a[7]=t;printf("%d\n",a[1]);}
{int lo=0,hi=999,it=0;while(lo<hi){it++;int s=lo+hi;if(s==5000)break;if(s<5000)lo++;else hi--;}printf("C07 %d\n",it);}
}
