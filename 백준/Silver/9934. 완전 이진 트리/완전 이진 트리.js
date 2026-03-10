const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const data = input[1].split(' ');

const levels = Array.from({ length: N }, () => []);

function makeTree(arr, depth) {
  if (depth === N) return;

  const mid = Math.floor(arr.length / 2);
  const root = arr[mid];

  levels[depth].push(root);

  makeTree(arr.slice(0, mid), depth + 1);
  makeTree(arr.slice(mid + 1), depth + 1);
}

makeTree(data, 0);

let result = '';
for (let i = 0; i < N; i++) {
  result += levels[i].join(' ') + '\n';
}
console.log(result.trim());
