function solution(s) {
    var answer = 0;
    const arr = [...s]; 

    const checkCorrect = (targetArray) => {
        const stack = [];
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < targetArray.length; i++) {
            const char = targetArray[i];
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } 
            else {
                if (stack.length === 0) return false;
                const last = stack.pop();
                if (last !== map[char]) return false;
            }
        }
        return stack.length === 0;
    };

    for (let i = 0; i < s.length; i++) {
        if (checkCorrect(arr)) {
            answer++;
        }
        
        arr.push(arr.shift());
    }

    return answer;
}