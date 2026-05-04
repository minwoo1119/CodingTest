function solution(k, dungeons) {
    let answer = 0;
    
    function isValid(myFatigue, requireFatigue){
        return myFatigue>=requireFatigue;
    }
    
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentK,count){
        answer = Math.max(count,answer);
        
        for(let i=0;i<dungeons.length;i++){
            const [requireFatigue, costFatigue] = dungeons[i];
            
            if(isValid(currentK,requireFatigue) && !visited[i]){
                visited[i] = true;
                dfs(currentK-costFatigue,count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k,0);
    
    return answer;
}