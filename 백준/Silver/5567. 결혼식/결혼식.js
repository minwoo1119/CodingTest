const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const m = +input[1];

const graph = Array.from({ length: n + 1 }, () => []);

const data = input.slice(2);

for (let i = 0; i < m; i++) {
  const [v, w] = data[i].split(' ').map(Number);
  graph[v].push(w);
  graph[w].push(v);
}

const distance = new Array(n + 1).fill(-1);
let count = 0;

function bfs(start) {
  const queue = [start];
  distance[start] = 0;

  while (queue.length) {
    const node = queue.shift();

    if (distance[node] >= 2) continue;

    for (let next of graph[node]) {
      if (distance[next] === -1) {
        distance[next] = distance[node] + 1;
        queue.push(next);
        count++;
      }
    }
  }
}

bfs(1);

console.log(count);
