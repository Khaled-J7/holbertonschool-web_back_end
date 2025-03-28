const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber with correct arguments', function() {
    // Create a spy on the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    
    // Verify the spy was called with the expected arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    
    // Verify that the function returned the expected result
    expect(calculateNumberSpy.returnValues[0]).to.equal(120);
    
    // Restore the original function to prevent affecting other tests
    calculateNumberSpy.restore();
  });
});
