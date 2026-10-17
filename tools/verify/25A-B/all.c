#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>
#define N 6
int check_parity(int* arr, int size)
{
   if(size==0)
      return 0;
   if((arr[size-1]+size)%2==0)
      return 1+check_parity(arr,size-1);
   return check_parity(arr,size-1);
}
/* stand-ins for the allowed library functions (assumed semantics: merge_sort(arr,lo,hi), binary_search returns 1 if found else 0 -- as the student assumed; real library semantics not in the sitting) */
static void msort(int*a,int lo,int hi){for(int i=lo;i<=hi;i++)for(int j=i+1;j<=hi;j++)if(a[j]<a[i]){int t=a[i];a[i]=a[j];a[j]=t;}}
#define merge_sort msort
static int bsearch1(int*a,int n,int k){int l=0,h=n-1;while(l<=h){int m=(l+h)/2;if(a[m]==k)return 1;if(a[m]<k)l=m+1;else h=m-1;}return 0;}
#define binary_search bsearch1
void search_in_array(int* arr1, int* arr2, int size)
{
   int* temp=(int*)malloc(size*sizeof(int));
   assert(temp);
   for(int i=0;i<size;i++)
      temp[i]=arr1[i];
   merge_sort(temp,0,size-1);
   for(int i=0;i<size;i++)
      arr2[i]=binary_search(temp,size,arr2[i]);
   free(temp);
}
int word_in_text(char* text, char* word)
{
   int count[26]={0};
   while(*text){
      count[*text-'a']++;
      text++;
   }
   while(*word){
      if(--count[*word-'a']<0)
         return 0;
      word++;
   }
   return 1;
}
/* Q4: student's (graded 22/27) code, verbatim, to see the defect */
int is_sub_square(int matrix[N][N], int r, int c)
{
   for(int i=r-2;i<r;i++)
      if(matrix[i][c]==0)
         return 0;
   for(int j=c-2;j<c;j++)
      if(matrix[r][j]==0)
         return 0;
   for(int i=r-2;i<c;i++)
      for(int j=c-2;j<c;j++)
         if(matrix[i][j]==0)
            return 0;
   return 1;
}
int number_squares(int matrix[N][N])
{
   int count=0;
   for(int i=2;i<N;i++)
      for(int j=2;j<N;j++)
         if(matrix[i][j])
            count+=is_sub_square(matrix,i,j);
   return count;
}
int ref4(int m[N][N]){int c=0;for(int i=0;i+2<N;i++)for(int j=0;j+2<N;j++){int ok=1;for(int a=0;a<3;a++)for(int b=0;b<3;b++)if(!m[i+a][j+b])ok=0;c+=ok;}return c;}
int main(void){
  int a1[]={8,7,22,-5,14,3,2},a2[]={8,8,6,5,51,7},e[]={0};
  printf("Q1 ex1=%d (0) ex2=%d (2)\n",check_parity(a1,7),check_parity(a2,6));
  int bad=0;for(int t=0;t<20000;t++){int n=rand()%15,a[16],ref=0;for(int i=0;i<n;i++){a[i]=rand()%41-20;if(((a[i]%2)+2)%2!=i%2)ref++;} if(check_parity(a,n)!=ref)bad++;}
  printf("Q1 random mismatches=%d, size0=%d\n",bad,check_parity(e,0));
  int x1[]={9,-5,3,-15,-21,2,-6,12,23},x2[]={99,2,3,4,-5,6,7,1,9};
  search_in_array(x1,x2,9);
  printf("Q2 ");for(int i=0;i<9;i++)printf("%d ",x2[i]);printf("(expect 0 1 1 0 1 0 0 0 1)\n");
  printf("Q3 glue=%d glee=%d client=%d electing=%d inciting=%d (1 1 1 1 0)\n",word_in_text("intelligence","glue"),word_in_text("intelligence","glee"),word_in_text("intelligence","client"),word_in_text("intelligence","electing"),word_in_text("intelligence","inciting"));
  int bad3=0;for(int t=0;t<20000;t++){char tx[20],w[10];int n=rand()%19,m=rand()%9;for(int i=0;i<n;i++)tx[i]='a'+rand()%4;tx[n]=0;for(int i=0;i<m;i++)w[i]='a'+rand()%4;w[m]=0;int c[4]={0},ok=1;for(int i=0;i<n;i++)c[tx[i]-'a']++;for(int i=0;i<m;i++)if(--c[w[i]-'a']<0)ok=0;if(word_in_text(tx,w)!=ok)bad3++;}
  printf("Q3 random mismatches=%d\n",bad3);
  int img[N][N]={{0,0,1,0,1,1},{1,1,1,1,1,1},{1,1,1,1,1,0},{1,1,1,1,1,1},{1,1,0,1,1,1},{1,1,1,1,1,1}};
  printf("Q4 student=%d reference=%d (printed example: 4)\n",number_squares(img),ref4(img));
  int bad4=0;for(int t=0;t<2000;t++){int m[N][N];for(int i=0;i<N;i++)for(int j=0;j<N;j++)m[i][j]=rand()%8!=0;if(number_squares(m)!=ref4(m))bad4++;}
  printf("Q4 student code differs from reference on %d/2000 random 6x6\n",bad4);
  return 0;}
