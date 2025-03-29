const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  // Declare the spy variable in the describe scope so it's accessible to all tests
  let consoleLogSpy;
  
  // beforeEach hook runs before each test
  beforeEach(function() {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });
  
  // afterEach hook runs after each test
  afterEach(function() {
    // Restore the console.log spy after each test
    consoleLogSpy.restore();
  });
  
  // First test: sendPaymentRequestToAPI with 100 and 20
  it('should log "The total is: 120" when called with 100 and 20', function() {
    // Call the function being tested
    sendPaymentRequestToApi(100, 20);
    
    // Verify console.log was called with the correct string
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
    
    // Verify console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
  
  // Second test: sendPaymentRequestToAPI with 10 and 10
  it('should log "The total is: 20" when called with 10 and 10', function() {
    // Call the function being tested
    sendPaymentRequestToApi(10, 10);
    
    // Verify console.log was called with the correct string
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
    
    // Verify console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
