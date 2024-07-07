export default class HolbertonClass {
    constructor(size, location) {
      if (typeof size !== 'number' || typeof location !== 'string') {
        throw TypeError('error in the type of constructor attributes');
      }
      this._size = size;
      this._location = location;
    }
  
    valueOf() {
      return this._size;
    }
  
    toString() {
      return this._location;
    }
  }