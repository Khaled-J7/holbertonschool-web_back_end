const { expect } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  /**
   * This test verifies that sendPaymentRequestToApi correctly calls Utils.calculateNumber
   * but uses a stub to prevent the actual calculation from happening
   */
  it('should stub Utils.calculateNumber and verify console.log', function() {
    // Create a stub for Utils.calculateNumber to always return 10
    // regardless of the arguments passed to it
    const calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
    
    // Create a spy on console.log to verify what it logs
    const consoleLogSpy = sinon.spy(console, 'log');
    
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    
    // Verify the stub was called with the expected arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
    // Verify that console.log was called with the message using our stubbed return value (10)
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    
    // Restore the stub and spy to prevent affecting other tests
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
