function solution(array, commands) {
    var answer = [];
    for(let command of commands){
        const [i,j,k] = command.map((d)=>Number(d));
        const newArr = array.slice(i-1,j);
        newArr.sort((a,b)=>a-b);
        answer.push(newArr[k-1]);
    }
    return answer;
}