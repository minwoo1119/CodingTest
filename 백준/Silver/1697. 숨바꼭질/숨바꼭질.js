const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const [n, k] = input[0].split(' ').map(Number);

const MAX = 100001;
const visited = new Array(MAX).fill(-1);

function bfs(start) {
  const queue = [start];
  visited[start] = 0;

  let head = 0;
  while (queue.length > head) {
    const current = queue[head++];

    if (current === k) {
      return visited[current];
    }

    const nextPositions = [current - 1, current + 1, current * 2];

    for (const next of nextPositions) {
      if (next >= 0 && next < MAX && visited[next] === -1) {
        visited[next] = visited[current] + 1; // 현재 시간 + 1초
        queue.push(next);
      }
    }
  }
}

console.log(bfs(n));
