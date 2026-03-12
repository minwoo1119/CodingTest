const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for (let i = 0; i < N; i++) {
  makeResult(input[2 * i + 1], input[2 * i + 2]);
}

function makeResult(line, rawPriority) {
  const [numOfDoc, index] = line.split(' ').map(Number);
  let targetIndex = Number(index);
  const priority = rawPriority.split(' ').map((data) => Number(data));

  let count = 0;

  while (priority.length > 0) {
    let max = Math.max(...priority);
    // 첫번째 요소보다 큰 수가 존재하면
    if (priority[0] < max) {
      const tmp = priority.shift();
      priority.push(tmp);

      if (targetIndex == 0) {
        targetIndex = priority.length - 1;
      } else {
        targetIndex--;
      }
    } else {
      const tmp = priority.shift();
      count++;
      max = Math.max(...priority);

      if (targetIndex != 0) {
        targetIndex--;
      } else {
        console.log(count);
        break;
      }
    }
  }
}
