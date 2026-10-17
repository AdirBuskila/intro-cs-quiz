/* 19A-B Q2 solver harness: recursive even/odd digit positions. */
#include <stdio.h>
/* SOLUTION BEGIN */
int digits_parity(int n)
{
   if (n == 0)
      return 1;
   if (n % 10 % 2 != 0)        // even position (0, 2, ...) must hold an even digit
      return 0;
   n = n / 10;
   if (n == 0)
      return 1;
   if (n % 10 % 2 == 0)        // odd position (1, 3, ...) must hold an odd digit
      return 0;
   return digits_parity(n / 10);
}
/* SOLUTION END */
static int ref(int n){ int pos=0; do{ int d=n%10; if(d%2!=pos%2) return 0; n/=10; pos++; }while(n>0); return 1; }
int main(void){
  printf("43418 -> %d (1), 343518 -> %d (0)\n",digits_parity(43418),digits_parity(343518));
  int bad=0,T=0; for(int n=0;n<=2000000;n++){T++; if(digits_parity(n)!=ref(n))bad++;}
  printf("exhaustive n=0..2000000: %d cases, %d mismatches\n",T,bad); return bad!=0;}
