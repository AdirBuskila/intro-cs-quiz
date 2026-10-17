#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct { int num, numerator, denominator; } Fraction;
Fraction findBiggest(Fraction *pSArray, int size)
{
	int i;
	Fraction max_result = pSArray[0];
	for (i = 1; i < size; i++)
	{
		if (pSArray[i].num > max_result.num)
			max_result = pSArray[i];
		else if (pSArray[i].num == max_result.num)
		{
			if(pSArray[i].numerator * max_result.denominator>max_result.numerator*pSArray[i].denominator)
				max_result = pSArray[i];
		}
	}
	return max_result;
}
int incr_subarray(int * a, int n)
{
	if (n == 1) return 1;
	if (a[0] < a[1]) return 1 + incr_subarray(a + 1, n - 1);
	else return 1;
}
void rd1(char *str) {
	char *last=str;
	int count[26] = { 0 };
	while (*str)
	{
		if (count[(*str) - 'a'] == 0)
		{
			count[(*str) - 'a']=1;
			*last = *str;
			last++;
		}
		str++;
	}
	*last = '\0';
}
void rd2(char *s) {
	int i, newLast;
	int count[26] = { 0 };
	for (i = 0, newLast = 0; s[i]; i++)
		if (count[s[i] - 'A']++ == 0)
			s[newLast++] = s[i];
	s[newLast] = '\0';
}
int q4v1(int arr[], int n, double x) {
	int low = 0, high = n - 1, mid, max=arr[0];
	while (low <= high) {
		mid = (low + high) / 2;
		if (arr[mid] <= x) { max = arr[mid]; low = mid + 1; }
		else high = mid - 1;
	}
	return max;
}
int q4v2(int a[], int n, double k) {
	int low = 0, high = n - 1, mid, min = a[n-1];
	while (low <= high) {
		mid = (low + high) / 2;
		if (a[mid] >= k) { min = a[mid]; high = mid - 1; }
		else low = mid + 1;
	}
	return min;
}
int main(void){
	Fraction f[5]={{2,3,4},{5,3,4},{3,1,5},{2,7,8},{5,1,2}};
	Fraction r=findBiggest(f,5); printf("Q1 %d %d/%d (want 5 3/4)\n",r.num,r.numerator,r.denominator);
	int a1[]={-5,-2,12,12,25,34,40},a2[]={-5,-5,12,10,25,34,40},a3[]={12,10,25,34,40},a4[]={7};
	printf("Q2 %d %d %d %d (want 3 1 1 1)\n",incr_subarray(a1,7),incr_subarray(a2,7),incr_subarray(a3,5),incr_subarray(a4,1));
	char s[]="blablabh"; rd1(s); printf("Q3v1 %s (want blah)\n",s);
	char t[]="blablabh"; rd2(t); printf("Q3v2 uppercase-indexed on lowercase input: %s (UB, index 'a'-'A'=32 > 25)\n",t);
	int a[]={-5,-2,-1,0,2,4,4,9};
	printf("Q4v1 %d  Q4v2 %d (want 2); v1 is largest<=x\n",q4v1(a,8,1.375),q4v2(a,8,1.375));
	return 0;
}
