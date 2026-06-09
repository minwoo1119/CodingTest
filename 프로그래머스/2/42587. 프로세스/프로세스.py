def solution(priorities, location):
    queue = [(i,p) for i,p in enumerate(priorities)]
    order = 0
        
    while queue:
        value = queue.pop(0)
        
        if any(value[1] < q[1] for q in queue):
            queue.append(value)
        else:
            order += 1
            
            if value[0] == location:
                return order
            