import heapq

def solution(scoville, K):
    heap = []
    count = 0;
    
    for value in scoville:
        heapq.heappush(heap,value)
        
    while len(heap) >= 2 and heap[0] < K:
        val1 = heapq.heappop(heap)
        val2 = heapq.heappop(heap)
        mixed = val1 + val2*2
        heapq.heappush(heap, mixed)
        count += 1
        
    return count if heap[0] >= K else -1
    
    