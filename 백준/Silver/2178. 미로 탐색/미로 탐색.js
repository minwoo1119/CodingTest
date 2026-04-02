const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const array = input.slice(1).map((d) => d.split('').map(Number));

const distance = Array.from({ length: n }, () => new Array(m).fill(0));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function bfs(x, y) {
  const queue = [[x, y]];
  distance[x][y] = 1;

  let head = 0;
  while (queue.length > head) {
    const [r, c] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
        if (array[nr][nc] === 1 && distance[nr][nc] === 0) {
          distance[nr][nc] = distance[r][c] + 1;
          queue.push([nr, nc]);
        }
      }
    }
  }
}

bfs(0, 0);

console.log(distance[n - 1][m - 1]);
