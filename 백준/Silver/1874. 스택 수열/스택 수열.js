const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const n = input[0];
const data = input.slice(1);

const stack = [];
let answer = [];
let success = true;
let j = 1;

for (let i = 0; i < n; i++) {
  while (+data[i] > j) {
    stack.push(j);
    answer.push('+');
    j++;
  }

  if (+data[i] === j) {
    stack.push(j);
    answer.push('+');
    stack.pop();
    answer.push('-');
    j++;
  } else if (+data[i] < j) {
    if (stack[stack.length - 1] === +data[i]) {
      stack.pop();
      answer.push('-');
    } else success = false;
  }
}

if (success) {
  console.log(answer.join('\n'));
} else {
  console.log('NO');
}
