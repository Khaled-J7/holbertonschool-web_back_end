export default class Building {
    constructor(sqft) {
      if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
      if (typeof sqft !== 'number') {
        throw TypeError('constructor attribute must be number');
      }
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  
    set sqft(sqft) {
      if (typeof sqft !== 'number') {
        throw TypeError('sqft must be number');
      }
      this._sqft = sqft;
    }
  }