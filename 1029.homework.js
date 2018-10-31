class Vehicle {
    constructor(wheels, doors) {
        this.wheels = wheels,
        this.doors = doors
    }

    getWheels() {
        return this.wheels;
    }
}

class SedanCar extends Vehicle{
    constructor(vehicleName){
        super(4, 4);
        this.vehicleName = vehicleName
    }

    setVehicleName(name){
        this.vehicleName = name;
    }

    getVehicleName(){
        return this.vehicleName;
    }

}

class Coupe extends Vehicle{
    constructor(vehicleName){
        super(4, 2);
        this.vehicleName = vehicleName
    }

    setVehicleName(name){
        this.vehicleName = name;
    }

    getVehicleName(){
        return this.vehicleName;
    }

}
const hondaCivic = new SedanCar('honda Civic');
const mustangCoupe = new Coupe('Mustang');

console.log(hondaCivic)
console.log(mustangCoupe)