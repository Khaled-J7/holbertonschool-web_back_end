const Utils = require('./utils');

/**
 * Sends a payment request with the total amount
 * @param {number} totalAmount - The amount to be paid
 * @param {number} totalShipping - The shipping cost
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Calculate the total by adding totalAmount and totalShipping
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  
  // Display the result
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
