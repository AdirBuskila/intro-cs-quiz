#include <stdio.h>
int fun (int x, int y)
{
   if (y<0)
   {
      y = -y;
      x = -x;
   }
   if(y==1)
      return x;
   return fun(x,y-1)+x;
}
int main(void){
  int fails=0;
  for(int x=-20;x<=20;x++) for(int y=-20;y<=20;y++){
    if(y==0) continue; /* y==0 recurses forever (never reaches 1), outside the intended domain */
    if(fun(x,y)!=x*y){fails++; printf("x=%d y=%d got %d\n",x,y,fun(x,y));}
  }
  printf("fails=%d\n",fails);
  return 0;}
