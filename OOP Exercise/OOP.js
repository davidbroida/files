

class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `This is a ${make}${model} from ${year} `
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
}


class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Sorry, only vehicles are allowed in here."
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}