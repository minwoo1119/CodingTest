function solution(begin, target, words) {
    function isdifferenceOne(word1, word2){
        let count = 0;
        for(let i=0;i<word1.length;i++){
            if(word1[i]!==word2[i]) count++;
        }
        return count === 1;
    }
    
    if(!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    const visited = new Set();
    
    while(queue.length>0){
        const [current,count] = queue.shift();
        
        if(current===target) return count;
        
        for(const word of words){
            if(!visited.has(word) && isdifferenceOne(current,word)){
                visited.add(word);
                queue.push([word, count + 1]);
            }
        }
    }
    return 0;
}