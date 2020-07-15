const { assert } = require('../util');
const BaseCoder = require('./BaseCoder');

class NullCoder extends BaseCoder {
  static from({ type, name }) {
    if (type !== '') {
      return undefined;
    }
    return new this({ name, type: 'null' });
  }

  /**
   * @param value {null}
   * @return {Buffer}
   */
  encode(value) {
    assert(value === null, {
      message: 'unexpected type',
      expect: null,
      got: value,
      coder: this,
    });

    return Buffer.from('');
  }

  /**
   * @return {null}
   */
  decode() {
    return null;
  }
}

module.exports = NullCoder;
