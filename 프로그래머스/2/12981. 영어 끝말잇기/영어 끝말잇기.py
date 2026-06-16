def solution(n, words):
    word_set = set()
    
    for index, value in enumerate(words):
        if value in word_set or (index > 0 and words[index-1][-1] != value[0]):
            
            number = (index % n) + 1
            order = (index // n) + 1
            return [number, order]
            
        else:
            word_set.add(value)
            
    return [0, 0]