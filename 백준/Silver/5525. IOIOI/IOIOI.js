const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const n = +input[0];
const m = +input[1];
const s = input[2];

function makeString(n) {
  let count = 0;
  let string = 'I';
  while (count < n) {
    string += 'OI';
    count++;
  }

  return string;
}

let count = 0;
let head = 0;
const targetString = makeString(n);
let tail = targetString.length - 1;

while (tail < s.length) {
  if (targetString == s.slice(head, tail + 1)) {
    count++;
  }
  head++;
  tail++;
}

console.log(count);
