function solution(s) {
    return s.split(' ').map(word => {
        if (word.length === 0) return "";
        
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
}