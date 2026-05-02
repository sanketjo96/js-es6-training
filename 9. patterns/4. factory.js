/*
 * Concept: patterns / factory
 * Run: node "9. patterns/4. factory.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/4. factory.js"
 */

class IcecreamFactory {
    create(type) {
        switch (type) {
            case 'mango':
                return { flavour: 'mango', price: 5 }
            case 'chocolate':
                return { flavour: 'chocolate', price: 6 }
            default:
                return { flavour: 'vanilla', price: 4 }
        }
    }
}

const factory = new IcecreamFactory()
console.log(factory.create('mango'))
console.log(factory.create('strawberry'))
