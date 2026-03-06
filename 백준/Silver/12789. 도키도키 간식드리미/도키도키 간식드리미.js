const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const numbering = input[1].split(' ').map((data) => Number(data));

const stack = [];
let target = 1;
let isSuccess = false;

for (let i = 0; i < N; i++) {
  let current = numbering[i];

  if (current === target) {
    target++;
  } else {
    stack.push(current);
  }

  while (stack.length > 0 && stack[stack.length - 1] === target) {
    stack.pop();
    target++;
  }
}
if (stack.length === 0) {
  console.log('Nice');
} else {
  console.log('Sad');
}
