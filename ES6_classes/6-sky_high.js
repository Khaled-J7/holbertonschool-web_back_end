import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw TypeError('error in the type of constructor attributes');
    }
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be number');
    }
    this._sqft = sqft;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw TypeError('floors must be number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}