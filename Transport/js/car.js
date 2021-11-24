import { Transport } from "./transport.js";

export class Car extends Transport {
  constructor(brand, number, maxSpeed, cargoWeight) {
    super(brand, number, maxSpeed, cargoWeight);
  }

  toString() {
    return `Автомобиль. ${super.toString()}`;
  }
}
