const { Transform } = require('stream');

class MyTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
}

module.exports = MyTransform;
