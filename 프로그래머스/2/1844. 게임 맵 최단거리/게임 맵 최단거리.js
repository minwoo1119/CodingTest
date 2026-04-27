function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dr = [-1,1,0,0];
    const dc = [0,0,-1,1];
    
    const distance = Array.from({ length: n }, () => new Array(m).fill(0));
    
    const queue = [[0,0]];
    distance[0][0] = 1;
    
    while(queue.length>0){
        const [r,c] = queue.shift();
        
        if (r === n - 1 && c === m - 1) return distance[r][c];
        
        for(let i=0;i<4;i++){
            const nr = r+dr[i];
            const nc = c+dc[i];
            
            if(nr>=0 && nc>=0 && nr<n && nc<m){
                if (maps[nr][nc] === 1 && distance[nr][nc] === 0) {
                    distance[nr][nc] = distance[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }
    }
    
    return -1;
}