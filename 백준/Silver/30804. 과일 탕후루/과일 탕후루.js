const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const n = +input[0];
const array = input[1].split(' ').map(Number);

const count = new Array(10).fill(0);

let distinctCount = 0;
let left = 0;
let maxFruits = 0;

for (let right = 0; right < n; right++) {
  const rightFruit = array[right];

  if (count[rightFruit] === 0) distinctCount++;

  count[rightFruit]++;

  while (distinctCount > 2) {
    const leftFruit = array[left];
    count[leftFruit]--;

    if (count[leftFruit] === 0) distinctCount--;
    left++;
  }

  maxFruits = Math.max(maxFruits, right - left + 1);
}

console.log(maxFruits);
