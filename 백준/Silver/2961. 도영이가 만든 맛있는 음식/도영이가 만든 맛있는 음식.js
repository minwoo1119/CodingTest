const fs = require('fs');
const { diff } = require('util');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const n = +input[0];
const ingredients = [];

for (let i = 0; i < n; i++) {
  ingredients.push(input[i + 1].split(' ').map(Number));
}

let minDiff = Infinity;

function findBestRecipe(idx, sour, bitter, count) {
  if (idx === n) {
    if (count > 0) {
      minDiff = Math.min(minDiff, Math.abs(sour - bitter));
    }
    return;
  }

  findBestRecipe(
    idx + 1,
    sour * ingredients[idx][0],
    bitter + ingredients[idx][1],
    count + 1,
  );

  findBestRecipe(idx + 1, sour, bitter, count);
}

findBestRecipe(0, 1, 0, 0);

console.log(minDiff);
