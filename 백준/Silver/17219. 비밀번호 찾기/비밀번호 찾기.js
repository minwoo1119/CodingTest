const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((data) => Number(data));
const data = input.slice(1, N + 1);
const question = input.slice(N + 1);

const hashMap = new Map();
for (let i = 0; i < data.length; i++) {
  const [key, value] = data[i].split(' ');
  hashMap.set(key, value);
}

const result = [];

for (let i = 0; i < question.length; i++) {
  result.push(hashMap.get(question[i]));
}

console.log(result.join('\n'));
