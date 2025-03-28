/**
 * Performs basic arithmetic operations with rounding
 * @param {string} type - Operation type: 'SUM', 'SUBTRACT', or 'DIVIDE'
 * @param {number} a - First number to round
 * @param {number} b - Second number to round
 * @returns {number|string} - Result of the operation or "Error" for division by zero
 */
function calculateNumber(type, a, b) {
    // Round both numbers first
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    
    // Perform operation based on type
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid operation type. Use SUM, SUBTRACT, or DIVIDE.');
    }
  }
  
  module.exports = calculateNumber;