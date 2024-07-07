export default class Currency {
    constructor(code, name) {
      if (typeof code !== 'string' || typeof name !== 'string') {
        throw TypeError('constructor attributes must be string');
      }
      this._name = name;
      this._code = code;
    }
  
    get code() {
      return this._code;
    }
  
    get name() {
      return this._name;
    }
  
    set code(code) {
      if (typeof code !== 'string') {
        throw TypeError('code must be string');
      } else {
        this._code = code;
      }
    }
  
    set name(name) {
      if (typeof name !== 'string') {
        throw TypeError('name must be string');
      } else {
        this._name = name;
      }
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }