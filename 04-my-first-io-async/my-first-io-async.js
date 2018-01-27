const { readFile } = require('fs');

readFile(process.argv[2], { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
