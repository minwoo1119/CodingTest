const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

let currentLine = 0;
const T = Number(input[currentLine++]);

for (let t = 0; t < T; t++) {
  const n = Number(input[currentLine++]);
  const clothesMap = new Map();

  for (let i = 0; i < n; i++) {
    const [name, type] = input[currentLine++].split(' ');
    
    if (clothesMap.has(type)) {
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else {
      clothesMap.set(type, 1);
    }
  }

  let answer = 1;
  for (let count of clothesMap.values()) {
    answer *= (count + 1);
  }
    
  console.log(answer - 1);
}