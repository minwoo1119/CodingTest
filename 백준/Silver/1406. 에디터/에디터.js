const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let leftStack = input[0].split('');
let rightStack = [];
const M = parseInt(input[1]);

for (let i = 2; i < 2 + M; i++) {
  const cmd = input[i];

  if (cmd === 'L') {
    if (leftStack.length > 0) {
      rightStack.push(leftStack.pop());
    }
  } else if (cmd === 'D') {
    if (rightStack.length > 0) {
      leftStack.push(rightStack.pop());
    }
  } else if (cmd === 'B') {
    if (leftStack.length > 0) {
      leftStack.pop();
    }
  } else if (cmd.startsWith('P')) {
    const char = cmd.split(' ')[1];
    leftStack.push(char);
  }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));
