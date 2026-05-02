/*
 * Concept: principles / solid / l
 * Run: node "10. principles/solid/3. l.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "10. principles/solid/3. l.js"
 */

class Icecream {
    constructor(flavour) {
        this.flavour = flavour
    }

    getFlavour() {
        return this.flavour
    }
}

class ConeIcecream extends Icecream {
    getPrice() {
        return 5
    }
}

function printFlavour(icecream) {
    console.log(icecream.getFlavour())
}

printFlavour(new Icecream('strawberry'))
printFlavour(new ConeIcecream('mango'))
