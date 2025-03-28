const mocha = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function() {
  /**
   * This test verifies that sendPaymentRequestToApi correctly uses the
   * Utils.calculateNumber function and logs the expected output
   */
  it("should call calculateNumber with correct arguments and log the result", function() {
    // Create a spy on the Utils.calculateNumber function to monitor its usage
    const calculateNumberSpy = sinon.spy(utils, "calculateNumber");
    
    // Create a spy on console.log to verify the output
    const consoleLogSpy = sinon.spy(console, "log");
    
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    
    // Verify that calculateNumber was called once with the exact expected arguments
    expect(calculateNumberSpy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    
    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledWithExactly("The total is: 120")).to.be.true;
    
    // Verify that the function returns the expected value
    // Note: Our sendPaymentRequestToApi doesn't return a value, so this might not be 
    // necessary in this particular implementation
    
    // Always restore spies after use to prevent side effects in other tests
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
