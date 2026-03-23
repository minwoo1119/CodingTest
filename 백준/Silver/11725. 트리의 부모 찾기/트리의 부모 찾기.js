const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  const [v, w] = input[i].split(' ').map(Number);
  graph[v].push(w);
  graph[w].push(v);
}

const parents = new Array(n + 1).fill(0);

function bfs(start) {
  const queue = [start];
  parents[start] = -1;

  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];

    for (const next of graph[current]) {
      if (parents[next] === 0) {
        parents[next] = current;
        queue.push(next);
      }
    }
  }
}

bfs(1);

let result = '';
for (let i = 2; i <= n; i++) {
  result += parents[i] + '\n';
}
console.log(result.trim());
