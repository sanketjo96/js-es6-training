/*
 * Concept: scope / hoisting
 * Run: node "1. scope/2. hoisting.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "1. scope/2. hoisting.js"
 */

function hoistingExample() {
    // The declaration is hoisted, but the assignment happens later.
    console.log("Initial flavour:", flavour)
    var flavour = "strawberry"
    console.log("Final flavour:", flavour)
}

function noHoistingExample() {
    // let is block-scoped and not hoisted in the same way.
    let flavour = "strawberry"
    console.log("No hoisting with let:", flavour)
}

hoistingExample()
// noHoistingExample()
