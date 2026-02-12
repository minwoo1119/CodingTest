function solution(cards1, cards2, goal) {
    let baseWord1 = cards1.shift();
    let baseWord2 = cards2.shift();
    
    while(goal.length > 0){
        if(goal[0]===baseWord1){
            goal.shift();
            baseWord1 = cards1.shift();
        }
        else if(goal[0]===baseWord2){
            goal.shift();
            baseWord2 = cards2.shift();
        }
        else{
            return "No";
        }
    }
    
    return "Yes";
}