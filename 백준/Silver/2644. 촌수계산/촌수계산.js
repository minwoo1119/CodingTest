const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const [people1, people2] = input[1].split(' ').map(Number);
const m = +input[2];
const data = input.slice(3).map((d) => d.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const distance = new Array(n + 1).fill(-1);

for (let i = 0; i < m; i++) {
  const [a, b] = data[i];
  graph[a].push(b);
  graph[b].push(a);
}

function bfs(start) {
  const queue = [start];
  distance[start] = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let next of graph[node]) {
      if (distance[next] === -1) {
        distance[next] = distance[node] + 1;
        queue.push(next);
      }
    }
  }
}

bfs(people1);

console.log(distance[people2]);
