const assert = require('assert');
const { add, multiply } = require('../index');

describe('Simple math', function () {
  it('adds numbers', function () {
    assert.strictEqual(add(2, 3), 5);
  });

  it('multiplies numbers', function () {
    assert.strictEqual(multiply(3, 4), 12);
  });

  it('handles negatives', function () {
    assert.strictEqual(add(-1, -1), -2);
  });
});
