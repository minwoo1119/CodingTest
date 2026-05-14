function solution(elements) {
    let result = new Set();
    
    function addSubSequence(length){
        // 시작 위치 설정
        for(let i=0;i<elements.length;i++){
            let sum = 0;
            // length 개수만큼 요소를 누적해서 더함
            for(let j=0;j<length;j++){
                sum += elements[(i+j)%elements.length];
            }
            result.add(sum);
        }
    }
    
    for(let i=1;i<=elements.length;i++){
        addSubSequence(i);
    }
    
    return result.size;
}
