const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [numOfCannotHear, numOfCannotSeen] = input[0]
  .split(' ')
  .map((num) => Number(num));
const nameOfCannotHear = input.slice(1, numOfCannotHear + 1);
const nameOfCannotSeen = input.slice(numOfCannotHear + 1, input.length);

const hashMap = new Set();
nameOfCannotHear.map((data) => hashMap.add(data));

const result = [];

for (let i = 0; i < numOfCannotSeen; i++) {
  if (hashMap.has(nameOfCannotSeen[i])) result.push(nameOfCannotSeen[i]);
}

result.sort();
console.log(result.length);
console.log(result.join('\n'));
