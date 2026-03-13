const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;
const [A, B, C] = input[line++].split(' ').map(Number);

const menuA = new Map();
for (let i = 0; i < A; i++) {
  const [name, price] = input[line++].split(' ');
  menuA.set(name, Number(price));
}

const menuB = new Map();
for (let i = 0; i < B; i++) {
  const [name, price] = input[line++].split(' ');
  menuB.set(name, Number(price));
}

const menuC = new Set();
for (let i = 0; i < C; i++) {
  menuC.add(input[line++].trim());
}

const N = Number(input[line++]);
let sumA = 0;
let sumB = 0;
let countC = 0;

for (let i = 0; i < N; i++) {
  const order = input[line++].trim();
  if (menuA.has(order)) {
    sumA += menuA.get(order);
  } else if (menuB.has(order)) {
    sumB += menuB.get(order);
  } else if (menuC.has(order)) {
    countC++;
  }
}

let isPossible = true;

if (sumB > 0 && sumA < 20000) {
  isPossible = false;
}

if (countC > 0 && sumA + sumB < 50000) {
  isPossible = false;
}

if (countC > 1) {
  isPossible = false;
}

console.log(isPossible ? 'Okay' : 'No');
