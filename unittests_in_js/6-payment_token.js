/**
 * Gets a payment token from the API
 * @param {boolean} success - Whether the API call should succeed
 * @returns {Promise|undefined} - A promise if success is true, undefined otherwise
 */
function getPaymentTokenFromAPI(success) {
    if (success) {
      return Promise.resolve({ data: 'Successful response from the API' });
    }
    // Function does nothing when success is false
    return undefined;
  }
  
module.exports = getPaymentTokenFromAPI;
