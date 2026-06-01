def solution(s):
    answer = []
    
    data = s[2:-2].split('},{')
    data.sort(key=len)
    
    for string in data:
        numbers = string.split(',')
        
        for num in numbers:
            int_num = int(num)
            
            if int_num not in answer:
                answer.append(int_num)
                break
    
    return answer