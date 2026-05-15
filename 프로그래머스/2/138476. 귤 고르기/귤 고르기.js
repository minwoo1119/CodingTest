function solution(k, tangerine) {
    const counts = {};
    
    for(let value of tangerine){
        counts[value] = (counts[value] || 0) + 1;
    }
    
    const sortedCounts = Object.values(counts).sort((a, b) => b - a);
    
    let answer = 0;
    
    for (const count of sortedCounts) {
        answer++;
        k -= count;
        
        if (k <= 0) break;
    }

    return answer;
}