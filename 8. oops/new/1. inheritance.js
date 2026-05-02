/*
 * Concept: oops / new / inheritance
 * Run: node "8. oops/new/1. inheritance.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "8. oops/new/1. inheritance.js"
 */

class Icecream {
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
        return "I am icecream"
    }
}

class ConeIcecream extends Icecream {
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
        return this.type
    }

    toText() {
        return "I am cone icecream"
    }
}

const mangoIcecreamCone = new ConeIcecream("mango", "4dc", "single", "normal cone")
console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof ConeIcecream)

console.log(mangoIcecreamCone.getFlavour()) // inherited from base class
console.log(mangoIcecreamCone.toText()) // derived class overrides base method
console.log(ConeIcecream.category) // static property is available on the class
