function getGcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function getLcm(a, b) {
    return (a * b) / getGcd(a, b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => getLcm(acc, cur));
}