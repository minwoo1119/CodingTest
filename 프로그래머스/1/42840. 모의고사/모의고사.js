function solution(answers) {
    var answer = [];
    const pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    
    
    const score = [0,0,0];
    
    for(let i=0;i<score.length;i++){
        for(let j=0;j<answers.length;j++){
            if(answers[j]===pattern[i][j%pattern[i].length]){
                score[i]++
            }
        }
    }
    
    const maxScore = Math.max(...score);
    
    for(let i=0;i<3;i++){
        if(score[i]===maxScore){
            answer.push(i+1)
        }
    }
    
    return answer;
}