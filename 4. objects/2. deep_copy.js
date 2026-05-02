/*
 * Concept: objects / deep copy
 * Run: node "4. objects/2. deep_copy.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "4. objects/2. deep_copy.js"
 */

const iceCream = {
    taste: 'bitter',
    expiry: 60,
    servings: ["scoop", "cone"]
}

// Shallow copy: nested arrays and objects are shared.
const shallowCopy = Object.assign({}, iceCream)
shallowCopy.taste = "sweet"
shallowCopy.servings.push("waffle")
console.log("After shallow copy mutation, original servings:", iceCream.servings)

// Deep copy: nested data is duplicated.
const deepCopy = JSON.parse(JSON.stringify(iceCream))
deepCopy.taste = "sweet"
deepCopy.servings.push("waffle")
console.log("Original servings remain unchanged with deep copy:", iceCream.servings)
