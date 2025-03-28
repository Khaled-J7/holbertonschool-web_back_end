const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  // Test suite for SUM operation
  describe('SUM operation', function() {
    it('should correctly add two rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
    });
  });

  // Test suite for SUBTRACT operation
  describe('SUBTRACT operation', function() {
    it('should correctly subtract rounded b from rounded a', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.9, 3.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 3.8), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -5.4, -3.8), -1);
    });
  });

  // Test suite for DIVIDE operation
  describe('DIVIDE operation', function() {
    it('should correctly divide rounded a by rounded b', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.3), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 4.2), 2.5);
    });

    it('should return "Error" when dividing by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 10.3, 0.2), 'Error'); // 0.2 rounds to 0
      assert.strictEqual(calculateNumber('DIVIDE', 5.9, 0.4), 'Error'); // 0.4 rounds to 0
    });
  });
});