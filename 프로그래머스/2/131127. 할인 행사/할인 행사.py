from collections import Counter

def solution(want, number, discount):
    answer = 0    
    want_dict = dict(zip(want, number))
    
    for i in range(len(discount) - 9):
        discount_10_days = Counter(discount[i:i+10])
        
        if want_dict == discount_10_days:
            answer += 1
            
    return answer