const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  /**
   * Tests the asynchronous function getPaymentTokenFromAPI when success is true
   * This test uses the done callback to signal when the async operation is complete
   */
  it('should resolve with the correct response when success is true', function(done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify the response has the expected data
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        // Call done to signal the test is complete
        done();
      })
      .catch((error) => {
        // If any error occurs, pass it to done to fail the test
        done(error);
      });
  });
});
