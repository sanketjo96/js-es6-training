/*
 * Concept: principles / solid / o
 * Run: node "10. principles/solid/2. o.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "10. principles/solid/2. o.js"
 */

class Icecream {
    constructor(flavour) {
        this.flavour = flavour
    }

    getDescription() {
        return `Icecream flavour: ${this.flavour}`
    }
}

class SpecialIcecream extends Icecream {
    getDescription() {
        return `Special icecream flavour: ${this.flavour}`
    }
}

const classic = new Icecream('vanilla')
const special = new SpecialIcecream('pistachio')
console.log(classic.getDescription())
console.log(special.getDescription())
