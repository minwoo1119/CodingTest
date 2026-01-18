function solution(s)
{
    var answer = -1;

    const stack = [];
    let top = -1;
    
    for(let i=0;i<s.length;i++){
        if(top==-1) {
            stack.push(s[i]);
            top++;
        } 
        else if(s[i]==stack[top]){
            stack.pop();
            top--;
        }
        else{
            stack.push(s[i]);
            top++;
        }
    }
    
    answer = stack.length==0?1:0;
    

    return answer;
}