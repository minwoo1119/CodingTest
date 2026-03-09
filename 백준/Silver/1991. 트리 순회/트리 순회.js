const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const data = input.slice(1);
const tree = {};

function preorder(node) {
  if (node == '.') return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node == '.') return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node) {
  if (node == '.') return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}

for (let i = 0; i < N; i++) {
  const [root, left, right] = data[i].split(' ');
  tree[root] = [left, right];
}

let result = '';

preorder('A');
result += '\n';
inorder('A');
result += '\n';
postorder('A');

console.log(result);
