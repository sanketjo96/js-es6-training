/*
 * Concept: oops / old / inheritance
 * Run: node "8. oops/old/1. inheritance.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "8. oops/old/1. inheritance.js"
 */

function Icecream(flavour, freezingPoint) {
    this.flavour = flavour
    this.freezingPoint = freezingPoint
}

Icecream.prototype.category = "dessert"
Icecream.prototype.getFlavour = function () {
    return this.flavour
}

Icecream.prototype.getFreezingPoint = function () {
    return this.freezingPoint
}

Icecream.prototype.toText = function () {
    return "I am icecream"
}

function ConeIcecream(flavour, freezingPoint, scoop, type) {
    Icecream.call(this, flavour, freezingPoint)
    this.scoop = scoop
    this.type = type
}

ConeIcecream.prototype = Object.create(Icecream.prototype)
ConeIcecream.prototype.constructor = ConeIcecream

ConeIcecream.prototype.getScoop = function () {
    return this.scoop
}

ConeIcecream.prototype.getType = function () {
    return this.type
}

ConeIcecream.prototype.toText = function () {
    return "I am cone icecream"
}

const mangoIcecreamCone = new ConeIcecream("mango", "4dc", "single", "normal cone")
console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof ConeIcecream)
console.log(mangoIcecreamCone.getFlavour()) // inherited from base class
console.log(mangoIcecreamCone.toText()) // derived class overrides base method
console.log(mangoIcecreamCone.category) // shared property from prototype
