def solution(nums):
    answer = set(nums)
    
    return len(answer) if len(answer) < len(nums) // 2 else len(nums) // 2