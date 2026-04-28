function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let count = 0;
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            count++;
            bfs(i)
        }
    }
    
    
    function bfs(start){
        const queue = [start];
        visited[start] = true;
        
        while(queue.length>0){
            const cur = queue.shift();
            for(let val=0;val<n;val++){
                if(computers[cur][val]===1 && !visited[val]){
                    visited[val] = true;
                    queue.push(val);
                }
            }
        }
    }
    
    return count;
}