enum Vehicle {
    Truck="Truck", 
    MotorCycle="MotorCycle",
    bike="bike",
}


interface CarInterface {
    (type:Vehicle,
    model:String):String
}


// let arr: [number,string] = ["test",123454]
let arr1: [number,string] = [123454,"string"]

let nameT: string | number = 1
nameT = "test"



var alphas:string[]; 
class CarClass {
    brand: Vehicle;
    model: String;
    constructor(brand: Vehicle, model: String) {
        this.brand = brand;
        this.model = model;
    }
}
const car = new CarClass(Vehicle.MotorCycle,"2020")

const add:CarInterface = (type:Vehicle,model:String) :String  =>("car brand: "+type+" car model: "+model)



console.log(add(Vehicle.MotorCycle,"test"))
console.log(car)

function getCar(car :CarInterface) {
    return car
}
