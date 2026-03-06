const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sentence = input[0];

let isTag = false;
const stack = [];
let result = '';

for (let char of sentence) {
  if (char === '<') {
    while (stack.length > 0) {
      result += stack.pop();
    }
    isTag = true;
    result += char;
  } else if (char === '>') {
    isTag = false;
    result += char;
  } else if (isTag) {
    result += char;
  } else {
    if (char == ' ') {
      while (stack.length > 0) {
        result += stack.pop();
      }
      result += char;
    } else {
      stack.push(char);
    }
  }
}

while (stack.length > 0) {
  result += stack.pop();
}

console.log(result);
