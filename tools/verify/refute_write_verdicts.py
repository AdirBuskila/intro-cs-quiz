import json,os
RAW=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'raw')
A,Dg,U='agree','disagree','unclear'
def w(code,obj):
    obj['examCode']=code; obj['by']='refuter (own clang harnesses tools/verify/%s/refute_*)'%code
    json.dump(obj,open(os.path.join(RAW,'_verify_%s.json'%code),'w',encoding='utf8'),ensure_ascii=False,indent=1)
def it(v,n=''): return {'verdict':v,'note':n}
w('19A-A',{'items':{
 'Q5':it(A,'only the signature line differs from the printed official code (adds int d, as the body needs); 200k random tests vs brute force 0 diffs; one merge_sort + n binary searches = O(n log n), timing scales n log n'),
 'Q6':it(A,'only the inner column loop header differs (j++ -> i++); exhaustive N=1..4 (3,256,19683,65536 matrices) 0 diffs vs brute force; O(N^2) by inspection')}})
w('19A-B',{'items':{
 'Q1':it(A,'x+y for all x,y in [-30,30]; "If" is a transcription typo of the exam, fine'),
 'Q2':it(A,'0..3e6 vs digit-position brute force, 0 diffs'),
 'Q3a':it(A,'300k random tests, 0 diffs; linear timing'),
 'Q3b':it(A,'300k random tests 0 diffs; n=0 returns -1 and the no-in-range case returns 0 (both unspecified by the question, noted in the stored solution)'),
 'Q4':it(A,'solution correct (500k random tests vs all-rotations brute force). TRANSCRIPTION DEFECT: the question text contains a literal backslash-n ("\\\\n") between "...של המערך $a$." and "כתבו פונקציה" in tools/raw/19A-B.json / generator'),
 'Q5':it(A,'500k random tests vs qsort, 0 diffs; linear timing'),
 'Q6':it(A,'exhaustive N=1..3 (values up to 5) and N=4 (0/1) plus structured random N=3,4 (both outcomes occur), 0 diffs vs all-pairs brute force')}})
w('24A-B',{'items':{
 'Q1':it(A,'300k random + both examples (size 3 {2,4,6}; empty -> {0}, size 1); linear timing'),
 'Q2':it(A,'500k random strings vs pair-count argmax with smallest tie; all six examples match; strings shorter than 2 digits unspecified (returns 0)'),
 'Q3':it(A,'500k random sorted pos/neg arrays vs double loop, 0 diffs; both examples match; O(n+m)'),
 'Q4':it(A,'500k random arrays vs counting, 0 diffs; example gives 6; merge_sort is in the exam black-box list; n log n timing')}})
w('25A-B',{'items':{
 'Q1':it(A,'300k random tests incl. negatives vs parity-count; examples 0 and 2'),
 'Q2':it(U,'correct only if the black-box binary_search returns 1/0 (the handwritten note in the student answer, 0 diffs in that case); with the index/-1 semantics used in 19A-A, every test fails (200000/200000). The exam page lists only signatures, so the assumption is not given by the sitting. Flag the semantics assumption in the solution text'),
 'Q3':it(A,'500k random tests vs per-letter count, 0 diffs. EXAM DEFECT (transcription faithful to page 12): the printed example claims "glue" -> 1 for text="intelligence", but the text has no letter u, so the correct result is 0'),
 'Q4':it(A,'exhaustive N=3,4,5 (512; 65536; 33.5M matrices) and 500k random N=6 vs an independent prefix-sum reference, 0 diffs; the sample gives 4; O(N^2)')}})
w('23A-A',{'items':{'Q1':it(A,'official code verified: 100k valid inputs all paired, 3 swaps at size 12'),'Q2':it(A,'official verified'),'Q3':it(A,'official verified (random vs stable sort by distance)'),'Q4':it(A,'official verified vs BFS')},
 'steps':{
 'Q1.s0 choice':it(A,'1,9,3,7,8,2 is the real output'),
 'Q1.s1 numeric':it(A,'3 swaps at size 12'),
 'Q1.s2 order':it(A,'forced (declaration must precede the loop)'),
 'Q1.s3 findbug':it(A,'i<size leaves the sample unchanged (1,2,3,7,8,9); line 3 is the only change'),
 'Q1.s4 text':it(A),
 'Q1.pitfall2':it(Dg,'swapping a[i] with a[size-1-i] for i<size/2 reverses the array (9,8,7,3,2,1), it does not restore the original; it only restores it if the loop runs over all i. The pitfall wording "returns pairs to their original place" is inaccurate; both versions are wrong but for different reasons'),
 'Q1.rubric':it(A,'6+10+4+6=26'),
 'Q2.s0 choice':it(A,'dca'),
 'Q2.s1 fillblank':it(Dg,'two correct options: a (count=0) and b (count--) both give 0/200000 wrong vs the reference; b is not checkably wrong. c and d are wrong (83034/200000)'),
 'Q2.s2 order':it(Dg,'order not forced: "int count[26]" can precede "int i, pos"; "count[..]=0" can precede "str[pos++]=str[i]" (0/200000 wrong when swapped)'),
 'Q2.s3 findbug':it(A,'index 8, == 2 gives empty for the sample'),
 'Q2.s4 text':it(A),
 'Q2.rubric':it(A,'7+8+6+3+2=26'),
 'Q3.s0 choice':it(A),'Q3.s1 numeric':it(A,'2,1,3 -> 1'),
 'Q3.s2 fillblank':it(A,'only a correct (c wrong on 13746/20000; b writes past the end, d overwrites index 0)'),
 'Q3.s3 order':it(Dg,'order not forced: the "int first,last,new_position" line and the "int* new_sort = malloc" line are independent (swapped version correct on 20000/20000)'),
 'Q3.s4 findbug':it(A,'index 6; > gives 2,3,1'),
 'Q3.rubric':it(A,'3+7+9+6+2=27'),
 'Q4.s0 numeric':it(A,'6'),'Q4.s1 numeric':it(A,'19'),
 'Q4.s2 fillblank':it(A,'only a correct (b wrong on 3017/20000; c returns 0 immediately; d counts non-255 cells wrongly)'),
 'Q4.s3 order':it(Dg,'order not forced: the four neighbour calls are independent; reversed call order gives identical results on 20000/20000'),
 'Q4.s4 findbug':it(A,'index 9; sample gives 5 not 6'),
 'Q4.rubric':it(A,'6+5+7+6+2=26')}})
w('24A-A',{'items':{'Q1':it(A),'Q2':it(A),'Q3':it(A),'Q4':it(A)},
 'steps':{
 'Q1.s0 numeric':it(A,'36'),
 'Q1.s1 choice':it(A,'-12; holds with both positive-valued and signed Euclid gcd'),
 'Q1.s2 fillblank':it(A,'only a correct over all nonzero pairs in [-60,60]'),
 'Q1.s3 order':it(A,'3 lines, forced'),
 'Q1.s4 findbug':it(A,'48 for (4,6)'),
 'Q1.rubric':it(A,'14+8+5=27'),
 'Q2.s0 numeric':it(A,'3'),
 'Q2.s1 fillblank':it(A,'only a correct'),
 'Q2.s2 order':it(Dg,'order not forced: the declarations (dists vs len,i,maxdist) and "maxdist=0" vs "len=strlen(str)" can be swapped (0/200000 wrong)'),
 'Q2.s3 findbug':it(A,'index 9; < returns 0 for the sample'),
 'Q2.s4 text':it(A),
 'Q2.rubric':it(A,'5+8+8+3+2=26'),
 'Q3.s0 numeric':it(A,'6'),'Q3.s1 numeric':it(A,'8'),
 'Q3.s2 fillblank':it(A,'only a correct (b,c,d wrong on ~all n)'),
 'Q3.s3 order':it(A,'4 lines, forced'),'Q3.s4 findbug':it(A,'f(6)=0 with /10'),
 'Q3.rubric':it(A,'7+7+8+4=26'),
 'Q4.s0 numeric':it(A,'low=6'),
 'Q4.s1 fillblank':it(Dg,'two correct options: a (mid-mid%2) and b (mid+mid%2) both 0/100000 wrong vs membership. Rounding up stays inside [low,high] because low is always even and high always odd. c and d not run (a[-1]/wrong pair)'),
 'Q4.s2 order':it(Dg,'order not forced: "low=0" and "high=n-1" are independent; the two equality checks can also be swapped (0/100000 wrong in both variants)'),
 'Q4.s3 findbug':it(A,'index 13; > returns -1 for 90'),
 'Q4.s4 text':it(A),
 'Q4.rubric':it(A,'7+6+5+5+3=26')}})
