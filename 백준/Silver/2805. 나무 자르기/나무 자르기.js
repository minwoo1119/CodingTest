const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let low = 0;
let high = Math.max(...trees);
let answer = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (trees[i] > mid) {
      sum += trees[i] - mid;
    }
  }

  if (sum >= m) {
    answer = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(answer);
