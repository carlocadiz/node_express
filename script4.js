const fs = require('fs');

const file = fs.readFileSync('./input.txt');

const input = file.toString();
let count = 0;
for (const [index, char] of input.split('').entries()) {
  char === '(' ? count ++ : count --;
  // Use below code to find position
  if(count === -1) {
    console.log(index + 1);
    break;
  }
}

console.log(count);
