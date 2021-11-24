import { Car } from "./car.js";
import { Motorbike } from "./motorbike.js";
import { Truck } from "./truck.js";

const transports = [
  new Car("Mercedes", "AM2510-4", 300, 800),
  new Motorbike("Horse Motors", "OA3600-4", 240, 100, false),
  new Truck("ГАЗ", "EM5102", 130, 2500, true),
];

function showTable(arr = []) {
    arr.forEach(item => {
        console.log(item.toString());
    })
}

showTable(transports);
