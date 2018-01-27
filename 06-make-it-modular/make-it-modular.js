const filter = require('./filter');
const dir = process.argv[2];
const ext = process.argv[3];

filter(dir, ext, (err, data) => {
  if (err) throw err;

  data.forEach(file => console.log(file));
});
