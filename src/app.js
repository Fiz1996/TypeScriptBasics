"use strict";
var Vehicle;
(function (Vehicle) {
    Vehicle["Truck"] = "Truck";
    Vehicle["MotorCycle"] = "MotorCycle";
    Vehicle["bike"] = "bike";
})(Vehicle || (Vehicle = {}));
// let arr: [number,string] = ["test",123454]
let arr1 = [123454, "string"];
let nameT = 1;
nameT = "test";
var alphas;
class CarClass {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
const car = new CarClass(Vehicle.MotorCycle, "2020");
const add = (type, model) => ("car brand: " + type + " car model: " + model);
console.log(add(Vehicle.MotorCycle, "test"));
console.log(car);
function getCar(car) {
    return car;
}
