/* 19A-B Q1 solver harness: fn as printed, with the exam typo `If` read as `if` (else it does not compile).
   Claim: fn(x,y) == x + y for every x, y. */
#include <stdio.h>
int fn (int x, int y)
{
        if (y==0)
                return x;
        if (y<0)
                return fn(x, y+1) - 1;
        return fn(x, y-1) + 1;
}
int main(void){ int bad=0,T=0;
  for(int x=-60;x<=60;x++)for(int y=-60;y<=60;y++){T++; if(fn(x,y)!=x+y)bad++;}
  printf("fn(5,3)=%d fn(5,-3)=%d; exhaustive x,y in -60..60: %d cases, %d not equal to x+y\n",fn(5,3),fn(5,-3),T,bad); return bad!=0;}
