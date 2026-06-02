def solution(s):
    strings = list(s)
    stack = []
    
    for value in strings:
        if value == '(':
            stack.append(value)
        elif value == ')':
            if stack and stack[-1] == '(':
                stack.pop()
            else:
                return False
        else:
            return False    
        
    return len(stack) == 0

