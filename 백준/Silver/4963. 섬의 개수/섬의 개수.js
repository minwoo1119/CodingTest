const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;

while (line < input.length) {
  const lineData = input[line++].split(' ').map(Number);
  if (lineData.length < 2) continue;

  const [w, h] = lineData;
  if (w === 0 && h === 0) break;

  const grid = [];
  for (let i = 0; i < h; i++) {
    grid.push(input[line++].split(' ').map(Number));
  }

  let islandCount = 0;

  const dr = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dc = [0, 0, -1, 1, -1, 1, -1, 1];

  function dfs(r, c) {
    grid[r][c] = 0;

    for (let i = 0; i < 8; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr >= 0 && nr < h && nc >= 0 && nc < w && grid[nr][nc] === 1) {
        dfs(nr, nc);
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === 1) {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  console.log(islandCount);
}
