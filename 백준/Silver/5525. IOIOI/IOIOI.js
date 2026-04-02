const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const n = Number(input[0]);
const m = Number(input[1]);
const s = input[2];

let answer = 0;
let patternCount = 0;

for (let i = 1; i < m - 1; i++) {
  if (s[i - 1] === 'I' && s[i] === 'O' && s[i + 1] === 'I') {
    patternCount++;

    if (patternCount === n) {
      answer++;
      patternCount--;
    }

    i++;
  } else {
    patternCount = 0;
  }
}

console.log(answer);
