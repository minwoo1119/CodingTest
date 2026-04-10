const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const data = input.slice(1, n + 1);
const question = input.slice(n + 1);

const map = new Map();

for (let i = 1; i <= n; i++) {
  map.set('' + i, data[i - 1]);
  map.set(data[i - 1], '' + i);
}

const result = [];

for (let i = 0; i < m; i++) {
  result.push(map.get(question[i]));
}

console.log(result.join('\n'));
