/*
 * Concept: objects / objects
 * Run: node "4. objects/1. objects.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "4. objects/1. objects.js"
 */

const iceCream = {
    taste: 'bitter',
    expiry: 60
}

let otherIcecream = iceCream
otherIcecream.taste = "sweet"

console.log("Original object after shallow assignment:", iceCream)

function tasteIcecream(value = { ...iceCream, expiry: 20 }) {
    if (value.expiry === 60) {
        return "Throw"
    }
    return "Investigate"
}

console.log("Testing...", tasteIcecream())
console.log("Testing (original object)...", tasteIcecream(iceCream))
