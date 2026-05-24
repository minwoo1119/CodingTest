def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities) * 5
        
    visited = [0] * cacheSize
    cache = []
    count = 1
    total_time = 0 
    
    for value in cities:
        value = value.lower() 
        
        if value in cache:
            total_time += 1
            visited[cache.index(value)] = count
            count += 1
            
        elif value not in cache:
            total_time += 5
            
            if len(cache) == cacheSize:
                target_idx = visited.index(min(visited))
                cache[target_idx] = value
                visited[target_idx] = count
            else :
                cache.append(value)
                visited[cache.index(value)] = count
                
            count += 1
                
    return total_time 