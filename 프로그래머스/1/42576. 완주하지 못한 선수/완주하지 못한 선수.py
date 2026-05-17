def solution(participant, completion):        
    hash_dict = {}
    
    for p in participant:
        hash_dict[p] = hash_dict.get(p,0)+1
    
    for c in completion:
        hash_dict[c] -= 1
        
    for key, value in hash_dict.items():
        if value>0:
            return key
