const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

let cursor = 0;
const N = parseInt(input[cursor++]);
const M = parseInt(input[cursor++]);

const queue = Array.from({ length: 200001 }, () => []);

for (let i = 0; i < N; i++) {
  const k = parseInt(input[cursor++]);
  for (let j = 0; j < k; j++) {
    const sushiType = parseInt(input[cursor++]);
    queue[sushiType].push(i);
  }
}

const cooks = [];
for (let i = 0; i < M; i++) {
  cooks.push(parseInt(input[cursor++]));
}

const result = new Array(N).fill(0);
const head = new Array(200001).fill(0);

for (const sushi of cooks) {
  if (head[sushi] < queue[sushi].length) {
    const personIdx = queue[sushi][head[sushi]];
    result[personIdx]++;
    head[sushi]++;
  }
}

console.log(result.join(' '));
