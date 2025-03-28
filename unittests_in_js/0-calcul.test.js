const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**

* `describe` --> creates a test suite named 'calculateNumber' :
        *  All related tests are grouped inside this block

* `it` --> defines a specific test case:
        * The first parameter is a description of what the test verifies
        * The second parameter is a function containing the actual test

* `assert.strictEqual` --> verifies that the result is exactly equal to the expected value. If the assertion fails, the test will fail
 */

describe('calculateNumber', function() {
  // Test case for integers
  it('should return the sum of integers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(2, 4), 6);
  });

  // Test case for rounding down
  it('should round down numbers properly', function() {
    assert.strictEqual(calculateNumber(1, 3.3), 4);
    assert.strictEqual(calculateNumber(1.2, 3.4), 4);
  });

  // Test case for rounding up
  it('should round up numbers properly', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Test edge cases
  it('should handle edge cases', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
    assert.strictEqual(calculateNumber(1.49, 1.49), 2);
  });
});
