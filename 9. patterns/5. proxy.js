/*
 * Concept: patterns / proxy
 * Run: node "9. patterns/5. proxy.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/5. proxy.js"
 */

const icecream = {name: "choco chip", recipe: 'something big...', price: 200}

const actualIcecream = new Proxy(icecream, {
    get(target, prop) {
        if (prop === 'recipe' ) return "*****"
        return target[prop]
    }
})

console.log(actualIcecream.name)
console.log(actualIcecream.recipe)