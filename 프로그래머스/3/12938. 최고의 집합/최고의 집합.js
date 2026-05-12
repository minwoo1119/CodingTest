function solution(n, s) {
    if(n>s) return [-1];
    
    const base = Math.floor(s/n);
    
    let remainValue = s % n;
    
    const result = new Array(n).fill(base);
    
    for(let i=0;i<remainValue;i++){
        result[n-1-i]++;
    }
    
    return result;
}