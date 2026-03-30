const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, r] = input[0].split(' ').map(Number);
const data = input.slice(1).map((d) => d.split(' '));

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = data[i];
  graph[a].push(+b);
  graph[b].push(+a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

const visited = new Array(n + 1).fill(false);
const map = new Map();
let count = 1;

function bfs(startNode) {
  const queue = [startNode];
  map.set(startNode, count++);
  visited[startNode] = true;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let next of graph[node]) {
      if (visited[next] == false) {
        queue.push(next);
        map.set(next, count++);
        visited[next] = true;
      }
    }
  }
}

bfs(r);

const result = [];

for (let i = 1; i <= n; i++) {
  if (map.has(i)) result.push(map.get(i));
  else result.push(0);
}

console.log(result.join('\n'));
