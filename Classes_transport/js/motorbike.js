import { Transport } from "./transport.js";

export class Motorbike extends Transport {
  constructor(brand, number, maxSpeed, cargoWeight, withSidecar = false) {
    super(brand, number, maxSpeed, cargoWeight);

    this._withSidecar = withSidecar;
    this._cargoWeight = this._withSidecar ? cargoWeight : 0;
  }

  toString() {
    return `Мотоцикл. ${super.toString()}, наличие коляски: ${this._withSidecar ? 'есть' : 'нет'}`;
  }
}
