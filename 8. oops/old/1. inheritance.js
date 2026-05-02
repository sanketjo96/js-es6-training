function icecream(flavour, freezingPoint) {
    this.flavour = flavour
    this.freezingPoint = freezingPoint
}
icecream.prototype.category = "dessert"
icecream.prototype.getFlavour = function() {
    return this.flavour
}

icecream.prototype.getFreezingPoint = function() {
    return this.freezingPoint
}

icecream.prototype.toText = function() {
    return "I am icecream"
}

function coneIcecream(flavour, freezingPoint, scoop, type) {
    icecream.call(this, flavour, freezingPoint)
    this.scoop = scoop
    this.type = type
}

coneIcecream.prototype = new icecream()
coneIcecream.prototype.getScoop = function() {
    return this.scoop
}

coneIcecream.prototype.getType = function () {
    return this.type
}

coneIcecream.prototype.toText = function() {
    return "I am cone icecream"
}


const mangoIcecreamCone = new coneIcecream("mango", "4dc", "single", "normal cone")

console.log(mangoIcecreamCone)
console.log(typeof mangoIcecreamCone)
console.log(mangoIcecreamCone instanceof coneIcecream)


console.log(mangoIcecreamCone.getFlavour()) // from base class showcase inheritance
console.log(mangoIcecreamCone.toText()) // from derived class showcase method overiding
console.log(mangoIcecreamCone.category) // shared property across instance