const http = require('http');
const fs = require('fs');
const urls = process.argv.splice(2);
let promises;

const respCB = (resolve, reject) => res => {
  const buffs = [];

  res.on('data', chunk => buffs.push(chunk));
  res.on('end', () => resolve(Buffer.concat(buffs).toString()));
  res.on('error', (err) => reject(err));
};

promises = urls.map((url) => new Promise((resolve, reject) => {
  http.get(url, respCB(resolve, reject));
}));

Promise.all(promises).then(values => values.forEach(v => console.log(v)));
