const { readFileSync } = require('fs');

console.log(
  readFileSync(process.argv[2], { encoding: 'utf8' }).split('\n').length - 1);
