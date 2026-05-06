function solution(n) {
    let number = n+1;
    while(true){
        if(number.toString(2).match(/1/g).length===n.toString(2).match(/1/g).length) break;
        if(number>=1000000) break;
        number++;
    }
    
    return number;
}