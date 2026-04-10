const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const n = +input[0];
const array = input.slice(1).map((d) => d.split(' ').map(Number));

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][k] === 1 && array[k][j] === 1) {
        array[i][j] = 1;
      }
    }
  }
}

const result = array.map((row) => row.join(' ')).join('\n');
console.log(result);
