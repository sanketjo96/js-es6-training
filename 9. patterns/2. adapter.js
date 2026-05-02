/*
 * Concept: patterns / adapter
 * Run: node "9. patterns/2. adapter.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/2. adapter.js"
 */

class LegacyIcecreamVendor {
    buyIcecream() {
        return { flavour: 'mango', size: 'medium', cost: 5 }
    }
}

class IcecreamAdapter {
    constructor(vendor) {
        this.vendor = vendor
    }

    getProduct() {
        const item = this.vendor.buyIcecream()
        return {
            name: item.flavour,
            price: item.cost,
            size: item.size
        }
    }
}

const vendor = new LegacyIcecreamVendor()
const adapter = new IcecreamAdapter(vendor)
console.log(adapter.getProduct())
