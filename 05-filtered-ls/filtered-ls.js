const { readdir } = require('fs');
const { extname } = require('path');
const path = process.argv[2];
const ext = '.' + process.argv[3];

readdir(path, (err, data) => {
  if (err) throw err;

  data.forEach(file => {
    if (extname(file) === ext) {
      console.log(file);
    }
  });
});
