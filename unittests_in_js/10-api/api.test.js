const request = require('request');
const { expect } = require('chai');

describe('API integration testing', () => {
  const API_URL = 'http://localhost:7865';

  describe('Index page', () => {
    it('should return correct status code', (done) => {
      request.get(API_URL, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result', (done) => {
      request.get(API_URL, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result when :id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 when :id is NOT a number', (done) => {
      request.get(`${API_URL}/cart/hello`, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments endpoint', () => {
    it('should return correct status code', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct payment methods object', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        
        const expectedPaymentMethods = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        
        // Parse the JSON response body
        const paymentMethods = JSON.parse(body);
        
        // Use deep equality to compare objects
        expect(paymentMethods).to.deep.equal(expectedPaymentMethods);
        done();
      });
    });
  });

  describe('Login endpoint', () => {
    it('should return correct welcome message for valid userName', (done) => {
      const options = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: { userName: 'Betty' },
        headers: { 'Content-Type': 'application/json' }
      };
      
      request(options, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should handle missing userName parameter', (done) => {
      const options = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: {},
        headers: { 'Content-Type': 'application/json' }
      };
      
      request(options, (error, response, body) => {
        if (error) {
          done(new Error(`Connection error: ${error.message}`));
          return;
        }
        
        expect(response.statusCode).to.equal(400);
        done();
      });
    });
  });
});
