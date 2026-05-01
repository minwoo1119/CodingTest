function solution(n) {
    var answer = 0;
    
    const board = new Array(n).fill(0);
    
    
    function isValid(row, col){
        for(let i=0;i<row;i++){
            if(board[i]===col || Math.abs(board[i]-col)===row-i){
                return false;
            }
        }
        return true;
    }
    
    function backtrack(row){
        if(row===n){
            answer++;
            return ;
        }
        
        for(let col=0;col<n;col++){
            if(isValid(row,col)){
                board[row] = col;
                backtrack(row+1);
            }
        }
    }
    
    backtrack(0);
    return answer;
}