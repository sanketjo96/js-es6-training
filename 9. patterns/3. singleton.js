/*
 * Concept: patterns / singleton
 * Run: node "9. patterns/3. singleton.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/3. singleton.js"
 */

class IcecreamShop {
    constructor(name) {
        this.name = name
    }

    static getInstance(name) {
        if (!IcecreamShop.instance) {
            IcecreamShop.instance = new IcecreamShop(name)
        }
        return IcecreamShop.instance
    }
}

const store1 = IcecreamShop.getInstance('Shop A')
const store2 = IcecreamShop.getInstance('Shop B')
console.log(store1 === store2)
console.log(store2.name)
