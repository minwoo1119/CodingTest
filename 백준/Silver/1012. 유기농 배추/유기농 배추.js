const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let line = 1;

for (let i = 0; i < T; i++) {
  const [M, N, K] = input[line++].split(' ').map(Number);

  const field = Array.from(Array(N), () => Array(M).fill(0));

  for (let j = 0; j < K; j++) {
    const [x, y] = input[line++].split(' ').map(Number);
    field[y][x] = 1;
  }

  let wormCount = 0;

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (field[row][col] === 1) {
        dfs(row, col, field, N, M);
        wormCount++;
      }
    }
  }
  console.log(wormCount);
}

function dfs(y, x, field, N, M) {
  if (x < 0 || x >= M || y < 0 || y >= N || field[y][x] === 0) return;

  field[y][x] = 0;

  dfs(y + 1, x, field, N, M);
  dfs(y - 1, x, field, N, M);
  dfs(y, x + 1, field, N, M);
  dfs(y, x - 1, field, N, M);
}
