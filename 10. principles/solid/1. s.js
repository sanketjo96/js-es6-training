/*
 * Concept: principles / solid / s
 * Run: node "10. principles/solid/1. s.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "10. principles/solid/1. s.js"
 */

function IcecreamMaker(flavour) {
    this.flavour = flavour
}

IcecreamMaker.prototype.getFlavour = function () {
    return this.flavour
}

const mango = new IcecreamMaker('mango')
console.log(mango.getFlavour())
