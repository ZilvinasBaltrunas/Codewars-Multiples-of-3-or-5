function solution(number){
  sum=0;
  for (let i=0; i<number; i++) {
    (i%3==0) ? (sum=sum+i) : (i%5==0) ? (sum=sum+i) : null; 
  }
  return sum;
}