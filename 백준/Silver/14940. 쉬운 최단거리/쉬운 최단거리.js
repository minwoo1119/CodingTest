const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((line) => line.split(' ').map(Number));

const result = Array.from({ length: n }, () => new Array(m).fill(-1));
const queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 2) {
      queue.push([i, j]);
      result[i][j] = 0;
    } else if (graph[i][j] === 0) {
      result[i][j] = 0;
    }
  }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let head = 0;
while (queue.length > head) {
  const [r, c] = queue[head++];

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
      if (graph[nr][nc] === 1 && result[nr][nc] === -1) {
        result[nr][nc] = result[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
}

// 3. 출력 최적화
console.log(result.map((row) => row.join(' ')).join('\n'));
