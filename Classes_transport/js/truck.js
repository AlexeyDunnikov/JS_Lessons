import { Transport } from "./transport.js";

export class Truck extends Transport {
  constructor(brand, number, maxSpeed, cargoWeight, withTrailer = false) {
    super(brand, number, maxSpeed, cargoWeight);

    this._withTrailer = withTrailer;
    this._cargoWeight = withTrailer ? cargoWeight * 2 : cargoWeight;
  }

  toString() {
    return `Грузовой автомобиль. ${super.toString()}, наличие прицепа: ${this._withTrailer ? 'есть' : 'нет'} `;
  }
}