class Car {
    constructor(model, year) {
        // Properties
        this.model =  model;
        this.year = year;
    }

    // Method
    run() {
        console.log('Whroom!!!')
    }
}

const car = new Car('Swift', 2000)
// car.run()


class SUV extends Car {
    constructor(doors, model, year) {
        // Manual step to pass control to base class
        super(model, year)
        this.doors = doors
    }

    // Method
    getDoors() {
        console.log(`Returning ${this.doors} doors`)
    }
}

const suv = new SUV(5, 'TasoRa', 2005)
// suv.run()
// suv.getDoors()
// console.log(suv)