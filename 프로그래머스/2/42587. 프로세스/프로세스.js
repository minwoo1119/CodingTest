function solution(priorities, location) {
    const queue = [];
    
    for(let i=0;i<priorities.length;i++){
        queue.push({num:i,value:priorities[i]})
    }
    
    const answer = [];
    
    while(queue.length>0){
        const data = queue.shift();
        if(queue.reduce((max, item) => Math.max(max, item.value), 0)>data.value) queue.push(data);
        else answer.push(data);
    }
    console.log(answer);
    
    let result = 0;
    for(let i=0;i<answer.length;i++){
        if(answer[i].num===location) return i+1;
    }
}