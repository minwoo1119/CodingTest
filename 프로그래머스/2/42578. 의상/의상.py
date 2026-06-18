def solution(clothes):
    clothes_map = {}
    
    for name, kind in clothes:
        clothes_map[kind] = clothes_map.get(kind, 0) + 1
    combinations = 1
    
    for count in clothes_map.values():
        combinations *= (count + 1)
    return combinations - 1