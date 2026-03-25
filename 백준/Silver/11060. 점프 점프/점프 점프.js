const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const dist = new Array(N).fill(-1);

function bfs() {
  const queue = [0];
  dist[0] = 0;

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const jumpAbility = A[curr];

    for (let j = 1; j <= jumpAbility; j++) {
      const next = curr + j;

      if (next < N && dist[next] === -1) {
        dist[next] = dist[curr] + 1;
        queue.push(next);
      }
    }
  }
}

bfs();

console.log(dist[N - 1]);
