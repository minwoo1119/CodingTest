function solution(participant, completion) {
    const hashMap = new Map();
    
    for(let value of participant){
        if(hashMap.has(value)){
            hashMap.set(value, hashMap.get(value)+1);
        }
        else{
            hashMap.set(value,1);
        }
    }
    
    
    for(let value of completion){
        if(hashMap.get(value)>0){
            hashMap.set(value,hashMap.get(value)-1);
        }
    }
    
    for(let [key,value] of hashMap){
        if(value===1) return key;
    }
}