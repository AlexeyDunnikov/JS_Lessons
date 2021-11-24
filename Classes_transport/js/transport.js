export class Transport{
    constructor (brand = 'no name', number = 'AA0000-1', maxSpeed = 0, cargoWeight = 0){
        this._brand = brand;
        this._number = number;
        this._maxSpeed = maxSpeed;
        this._cargoWeight = cargoWeight;
    }

    toString(){
        return `Марка: ${this._brand}, номер: ${this._number}, максимальная скорость: ${this._maxSpeed}, грузоподъемность: ${this._cargoWeight}`;
    }

    static compareBySpeed(transport1, transport2){
        return transport1.maxSpeed - transport2.maxSpeed;
    }

    static compareByCargoWeight(transport1, transport2){
        return transport1.cargoWeight - transport2.cargoWeight;
    }
}