console.log(
  process.argv.splice(2).map(n => parseInt(n)).reduce((a, b) => a + b));
