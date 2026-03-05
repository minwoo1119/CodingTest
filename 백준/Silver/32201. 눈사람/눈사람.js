const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const preRank = input[1].split(' ');
const postRank = input[2].split(' ');

const preHashMap = new Map();
const postHashMap = new Map();

for (let i = 0; i < N; i++) {
  preHashMap.set(preRank[i], i + 1);
  postHashMap.set(postRank[i], i + 1);
}

const resultHashMap = new Map();

for (let i = 0; i < N; i++) {
  resultHashMap.set(
    preRank[i],
    postHashMap.get(preRank[i]) - preHashMap.get(preRank[i]),
  );
}

const minVal = Math.min(...resultHashMap.values());

const result = postRank.filter(
  (player) => resultHashMap.get(player) === minVal,
);

console.log(result.join(' '));
