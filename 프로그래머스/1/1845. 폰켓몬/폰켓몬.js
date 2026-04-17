function solution(nums) {
    const set = new Set(nums);
    console.log(...set)
    return Math.min([...set].length,nums.length/2);
}