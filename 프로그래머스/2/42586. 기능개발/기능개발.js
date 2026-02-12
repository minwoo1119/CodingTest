function solution(progresses, speeds) {
    var answer = [];
    
    const days = progresses.map((p,i)=>Math.ceil((100-p)/speeds[i]));
    

    while (days.length > 0) {
        let firstJob = days.shift(); 
        let count = 1; 
        
        while (days.length > 0 && days[0] <= firstJob) {
            days.shift(); 
            count++;   
        }
        
        answer.push(count);
    }
    
    return answer;
}