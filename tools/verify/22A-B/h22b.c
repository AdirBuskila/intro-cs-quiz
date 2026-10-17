#include <stdio.h>
#define N 4
int f_1(int M[][N]) {
    int i, j, sum;
    for (i = 0; i < N; i++) {
        sum = 0;
        for (j = 0; j < N; j++) { sum += M[i][j]; }
        if (sum - M[i][i] != M[i][i]) return 0;
    }
    return 1;
}
int f_11(int M[][N]) {
    int i, j, sum;
    for (j = 0; j < N; j++) {
        sum = 0;
        for (i = 0; i < N; i++) { sum += M[i][j]; }
        if (sum - M[j][j] != M[j][j]) return 0;
    }
    return 1;
}
int f_2(int *c, int k, int i, int j) {
    if (i == j) return -1;
    if (c[i] + c[j] == k) return i;
    if (c[i] + c[j] > k) return f_2(c, k, i, j - 1);
    return f_2(c, k, i + 1, j);
}
int f_3(char* str) {
	int a[26] = { 0 };
	int i = 0;
	while (*str) {
		a[*str - 'a']++;
		if (a[*str - 'a'] > 1) return 0;
		str++;
	}
	while ((i<26) && (a[i] == 0)) i++;
	while ((i < 26) && (a[i] == 1)) i++;
	while (i < 26) {
		if (a[i] != 0) return 0;
		i++;
	}
	return 1;
}
int f_33(char* str) {
	int count[26] = { 0 };
	int i = 0,j;
	char min='z', max='a';
	while (*str) {
		count[*str - 'a']++;
		if (count[*str - 'a'] > 1) return 0;
		if (min > *str) min = *str;
		else if (max < *str) max = *str;
		str++;
	}
	i = min - 'a';
	j= max - 'a';
	while (i <= j) {
		if (count[i] != 1) return 0;
		i++;
	}
	return 1;
}
void maxmax(int n) {
    int max, i, num;
    scanf("%d", &max);
    for (i = 0; i < n - 1; i++) {
        scanf("%d", &num);
        if (num > max) { printf("%d", num); max = num; }
    }
}
int main(void){
	int A1[4][4]={{10,2,7,1},{2,7,-1,6},{1,-2,-6,-5},{-2,4,7,9}};
	int A2[4][4]={{10,2,7,1},{2,7,-1,5},{1,-2,-6,-5},{-2,4,7,9}};
	int B1[4][4]={{10,2,7,-1},{2,7,-20,4},{9,-2,-6,6},{-1,7,7,9}};
	int B2[4][4]={{10,2,7,1},{2,7,-20,4},{9,-2,-6,6},{-1,4,7,9}};
	printf("Q1a %d %d (want 1 0)  Q1b %d %d (want 1 0)\n",f_1(A1),f_1(A2),f_11(B1),f_11(B2));
	int c[]={-5,-2,12,25,34,40};
	printf("Q2 %d %d (want 1 -1)\n",f_2(c,23,0,4),f_2(c,23,2,4));
	printf("Q3 f_3: cbed %d dcbd %d dbcj %d (want 1 0 0); f_33: %d %d %d\n",f_3("cbed"),f_3("dcbd"),f_3("dbcj"),f_33("cbed"),f_33("dcbd"),f_33("dbcj"));
	printf("Q3 f_3 'ca' %d (want 0), f_33 'ca' %d  | 'bz' f_3 %d f_33 %d | 'ba' f_3 %d f_33 %d\n",f_3("ca"),f_33("ca"),f_3("bz"),f_33("bz"),f_3("ba"),f_33("ba"));
	int bad=0; /* exhaustive over strings of distinct letters from a..e */
	char s[8];
	for(int len=1;len<=4;len++){ int tot=1; for(int t=0;t<len;t++) tot*=5;
	  for(int x=0;x<tot;x++){ int y=x; for(int t=0;t<len;t++){s[t]='a'+y%5;y/=5;} s[len]=0;
	    if(f_3(s)!=f_33(s)) {bad++; if(bad<=3) printf("  differ on %s: f_3=%d f_33=%d\n",s,f_3(s),f_33(s));} } }
	printf("f_3 vs f_33 differ on %d strings (a..e, len<=4)\n",bad);
	printf("Q4 stdin 2 6 3 4 7 5 -> ");
	maxmax(6); printf("  (want 6 then 7: '67')\n");
	return 0;
}
