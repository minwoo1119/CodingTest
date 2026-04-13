const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);

const prefixSum = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  prefixSum[i + 1] = prefixSum[i] + data[i];
}

const result = [];
for (let k = 0; k < m; k++) {
  const [i, j] = input[k + 2].split(' ').map(Number);

  result.push(prefixSum[j] - prefixSum[i - 1]);
}

console.log(result.join('\n'));
