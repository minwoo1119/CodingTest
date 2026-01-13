function solution(N, stages) {
    var answer = [];
    const result = [];
    
    for(let i=1;i<=N;i++){
        let numOfPlayer = 0;
        let numOfClearPlayer = 0;
        for(let j=0;j<stages.length;j++){
            if(stages[j]>=i) numOfClearPlayer++;
            if(stages[j]===i) numOfPlayer++;
        }
        result[i-1] = {idx:i, failure:numOfClearPlayer===0?0:numOfPlayer/numOfClearPlayer};
        
    }
    
    answer = result.sort((a,b)=>b.failure-a.failure).map((data)=>data.idx);
    console.log(result.sort((a,b)=>b.failure-a.failure).map((data)=>data.idx));
    return answer;
}