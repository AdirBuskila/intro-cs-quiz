#include <stdio.h>
int sum_chars(char* str, char ch)
{
        if (*str == '\0')
                return 0;
        if (*str == ch)
                return 1 + sum_chars(str + 1, ch);
        return sum_chars(str + 1, ch);
}
int main(void){
  printf("street,t -> %d (expect 2)\n",sum_chars("street",'t'));
  printf("empty -> %d (expect 0)\n",sum_chars("",'a'));
  printf("banana,a -> %d (expect 3)\n",sum_chars("banana",'a'));
  printf("xyz,q -> %d (expect 0)\n",sum_chars("xyz",'q'));
  return 0;}
