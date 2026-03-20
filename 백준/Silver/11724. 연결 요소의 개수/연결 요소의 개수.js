const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const data = input.slice(1).map((d) => d.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = data[i];
  graph[a].push(b);
  graph[b].push(a);
}

const visited = [];
let count = 0;

function dfs(node) {
  visited[node] = true;

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}
console.log(count);
