import heapq

def solution(jobs):
    all_tasks = []
    ready_queue = []
    
    endTime = []
    now = 0
    total_jobs_count = len(jobs)

    for i in range(len(jobs)):
        heapq.heappush(all_tasks, (jobs[i][0], jobs[i][1], i, jobs[i]))
        
    while all_tasks or ready_queue:
        
        while all_tasks and all_tasks[0][0] <= now:
            req, take, i, job = heapq.heappop(all_tasks)
            heapq.heappush(ready_queue, (take, req, i, job))
            
        if ready_queue:
            take_time, req_time, i, job = heapq.heappop(ready_queue)
            now += take_time
            endTime.append(now - req_time) 
            
        else:
            now = all_tasks[0][0]
        
    return sum(endTime) // total_jobs_count