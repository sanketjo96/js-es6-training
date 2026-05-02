class icecream {
    flavour
    freezingPoint

    constructor(flavour, freezingPoint) {
        this.flavour = flavour
        this.freezingPoint = freezingPoint
    }

    getFreezingPoint() {
        return this.freezingPoint
    }

    getFlavour() {
        return this.flavour
    }

    toText() {
        return "I am  icecream"
    }
}

class coneIcecream extends icecream {
    scoop
    type

    static category = "dessert"

    constructor(flavour, freezingPoint, scoop, type) {
        super(flavour, freezingPoint)
        this.scoop = scoop
        this.type = type
    }

    getScoop() {
        return this.scoop
    }

    getType() {
        return this.scoop
    }

    toText() {
        return "I am cone icecream"
    }
}


const mangoIcecreamCone = new coneIcecream("mango", "4dc", "single", "normal cone")
console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof coneIcecream)

console.log(mangoIcecreamCone.getFlavour()) // from base class showcase inheritance
console.log(mangoIcecreamCone.toText()) // from derived class showcase method overiding

console.log(coneIcecream.category) // unable to access static prop through object