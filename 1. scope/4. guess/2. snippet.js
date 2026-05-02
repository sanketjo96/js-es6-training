/*
 * Concept: scope / guess / snippet
 * Run: node "1. scope/4. guess/2. snippet.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "1. scope/4. guess/2. snippet.js"
 */

function icecream() {
    // No error, but declaration gets hoisted to the top of scope.
    console.log("Initial flavour:", flavour)
    var flavour = "strawberry"
    console.log("Final flavour:", flavour)
}

icecream()
