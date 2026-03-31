const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

let pointer = 0;
const numOfTestCase = Number(input[pointer++]);

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (let t = 0; t < numOfTestCase; t++) {
  const [h, w] = input[pointer++].split(' ').map(Number);
  const grid = [];
  for (let i = 0; i < h; i++) {
    grid.push(input[pointer++].trim().split(''));
  }

  const visited = Array.from({ length: h }, () => new Array(w).fill(false));
  let count = 0;

  function dfs(r, c) {
    visited[r][c] = true;

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < h && nc >= 0 && nc < w) {
        if (grid[nr][nc] === '#' && !visited[nr][nc]) {
          dfs(nr, nc);
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === '#' && !visited[i][j]) {
        count++;
        dfs(i, j);
      }
    }
  }

  console.log(count);
}
