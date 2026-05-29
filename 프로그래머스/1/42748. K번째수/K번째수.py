def solution(array, commands):
    result = []
    for c in commands:
        result.append(sorted(array[c[0]-1:c[1]])[c[2]-1])
    return result