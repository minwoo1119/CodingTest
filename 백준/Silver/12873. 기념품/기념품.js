const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const array = Array.from({ length: n }, (_, i) => i + 1);

let level = 1;
let currentIndex = 0;

while (array.length != 1) {
  let step = Math.pow(level, 3);
  let delIndex = (step + currentIndex - 1) % array.length;
  array.splice(delIndex, 1);

  currentIndex = delIndex % array.length;
  level++;
}

console.log(array[0]);
