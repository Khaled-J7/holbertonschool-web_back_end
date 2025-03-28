const { expect } = require('chai');
/**
 * This is using destructuring to import just the expect function from Chai. Chai offers multiple assertion styles (expect, should, and assert), but we're using the BDD-style expect syntax.
 */
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  // Test suite for SUM operation
  describe('SUM operation', function() {
    it('should correctly add two rounded numbers', function() {
      // Basic cases
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
      
      // Rounding edge cases
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 1.49, 3.49)).to.equal(4);
      
      // Negative numbers
      expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
      expect(calculateNumber('SUM', -1.5, -3.5)).to.equal(-4);
    });
  });

  // Test suite for SUBTRACT operation
  describe('SUBTRACT operation', function() {
    it('should correctly subtract rounded b from rounded a', function() {
      // Basic cases
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 5.9, 3.2)).to.equal(3);
      
      // Rounding edge cases
      expect(calculateNumber('SUBTRACT', 5.4, 3.8)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 5.5, 3.5)).to.equal(2);
      
      // Negative numbers
      expect(calculateNumber('SUBTRACT', -5.4, -3.8)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', -5, 1)).to.equal(-6);
    });
  });

  // Test suite for DIVIDE operation
  describe('DIVIDE operation', function() {
    it('should correctly divide rounded a by rounded b', function() {
      // Integer division
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
      
      // Non-integer division
      expect(calculateNumber('DIVIDE', 8.4, 2.3)).to.equal(4);
      expect(calculateNumber('DIVIDE', 9.7, 4.2)).to.equal(2.5);
      
      // Negative numbers
      expect(calculateNumber('DIVIDE', -10, 2)).to.equal(-5);
      expect(calculateNumber('DIVIDE', 10, -2)).to.equal(-5);
    });

    it('should return "Error" when dividing by zero', function() {
      // Direct zero
      expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
      
      // Numbers that round to zero
      expect(calculateNumber('DIVIDE', 10.3, 0.2)).to.equal('Error'); // 0.2 rounds to 0
      expect(calculateNumber('DIVIDE', 5.9, 0.4)).to.equal('Error'); // 0.4 rounds to 0
    });
  });
});
