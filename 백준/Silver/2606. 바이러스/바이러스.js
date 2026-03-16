const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numOfComputer = Number(input[0]);
const numOfConnectedCouple = Number(input[1]);

const connects = input.slice(2);

const adjList = {};

connects
  .map((data) => data.split(' '))
  .forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);

    if (!adjList[v]) adjList[v] = [];
    adjList[v].push(u);
  });

function DFS(node, visited, result) {
  visited.add(node);
  result.push(node);
  (adjList[node] || []).forEach((neighbor) => {
    if (!visited.has(neighbor)) {
      DFS(neighbor, visited, result);
    }
  });
}

const visited = new Set();
const result = [];
DFS('1', visited, result);

console.log(result.length - 1);
