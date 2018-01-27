const http = require('http');

http.get(process.argv[2], resp => {
  const buffs = [];
  resp.on('data', chunk => buffs.push(chunk));
  resp.on('end', () => {
    const s = Buffer.concat(buffs).toString();
    console.log(`${s.length}\n${s}`);
  });
});
