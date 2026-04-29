function solution(s) {
    const data = s.split(' ').map(Number);
    var answer = `${Math.min(...data)} ${Math.max(...data)}`;
    return answer;
}