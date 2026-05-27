def solution(arr):
    queue = []
    queue.append(arr[0])
    
    for i in range(1,len(arr)):
        if arr[i-1] != arr[i]:
            queue.append(arr[i])
            
    return queue