function solution(s) {
    let count = 0;
    let removedZeros = 0;
    
    while (s !== '1') {
        const originalLength = s.length;
        const sWithoutZeros = s.replace(/0/g, '');
        const afterLength = sWithoutZeros.length;
        
        removedZeros += (originalLength - afterLength);
        s = afterLength.toString(2);
        count++;
    }
    
    return [count, removedZeros];
}