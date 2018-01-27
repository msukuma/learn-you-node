const { extname } = require('path');
const { readdir } = require('fs');

module.exports = function filter(dir, ext, callback) {
  ext = '.' + ext.replace(/\./, '');

  readdir(dir, (err, data) => {
    if (err) return callback(err);

    callback(null, data.filter(file => extname(file) === ext));
  });
};
