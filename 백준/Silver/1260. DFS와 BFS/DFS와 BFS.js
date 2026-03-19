const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const data = input.slice(1).map((d) => d.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of data) {
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];

  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = new Array(N + 1).fill(false);
let result = [];

function DFS(node) {
  visited[node] = true;
  result.push(node);

  for (let i of graph[node]) {
    if (!visited[i]) DFS(i);
  }
}

function BFS(start) {
  const queue = [start];
  visited[start] = true;
  result.push(start);

  while (queue.length) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        result.push(next);
        queue.push(next);
      }
    }
  }
}

DFS(V);
console.log(result.join(' '));

visited = new Array(N + 1).fill(false);
result = [];

BFS(V);
console.log(result.join(' '));
