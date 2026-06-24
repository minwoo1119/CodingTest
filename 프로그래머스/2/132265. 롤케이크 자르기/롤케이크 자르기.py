from collections import Counter

def solution(topping):
    count = 0
    
    dic_counter = Counter(topping)
    
    set_cheolsu = set()
    
    for p in topping:
        set_cheolsu.add(p)
        dic_counter[p] -= 1
        
        if dic_counter[p] == 0:
            del dic_counter[p]
        
        if len(dic_counter) == len(set_cheolsu):
            count+=1
    return count