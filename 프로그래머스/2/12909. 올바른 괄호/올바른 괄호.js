function solution(s){
    const stack = [];
    let result = true;
    
    for(let value of s.split('')){
        if(value==='('){
            stack.push(value);
        }else if(value===')'){
            if(stack[stack.length-1]==='(')
                stack.pop();
            else
                result = false;
        }
    }
    
    if(stack.length>0) result = false
    
    return result;
}