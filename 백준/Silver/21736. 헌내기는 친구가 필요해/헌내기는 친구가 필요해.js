const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((data) => data.split(''));

let startR, startC;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 'I') {
      startR = i;
      startC = j;
      break;
    }
  }
}

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];
const visited = Array.from({ length: n }, () => new Array(m).fill(false));

function bfs(r, c) {
  const queue = [[r, c]];
  visited[r][c] = true;
  let peopleCount = 0;
  let head = 0;

  while (queue.length > head) {
    const [currR, currC] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = currR + dr[i];
      const nc = currC + dc[i];

      if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
        if (graph[nr][nc] !== 'X' && !visited[nr][nc]) {
          visited[nr][nc] = true;

          if (graph[nr][nc] === 'P') {
            peopleCount++;
          }

          queue.push([nr, nc]);
        }
      }
    }
  }

  return peopleCount;
}

const result = bfs(startR, startC);

console.log(result === 0 ? 'TT' : result);
