#include <stdio.h>
int CalGimatria ( char * str , int * gematria )
{

    if (*str == '\0')
    {
        return 0;
    }
    return gematria [*str - 'a'] + CalGimatria (str + 1, gematria);
}
int main(void){
  /* a=1..i=9, j=10,k=20..r=90, s=100,t=200..z=800 (26 letters, no sofit) */
  int g[26]; int vals[26]={1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800};
  for(int i=0;i<26;i++) g[i]=vals[i];
  printf("exam=%d (expected 646)\n", CalGimatria("exam",g));
  printf("empty=%d  a=%d  zz=%d\n", CalGimatria("",g), CalGimatria("a",g), CalGimatria("zz",g));
  return 0;}
