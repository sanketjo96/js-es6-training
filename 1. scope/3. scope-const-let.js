/*
 * Concept: scope / scope const let
 * Run: node "1. scope/3. scope-const-let.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "1. scope/3. scope-const-let.js"
 */

function blockScopeExample() {
    let flavour = "mango"

    if (true) {
        let flavour = "pista"
        console.log("Inside block:", flavour)
    }

    console.log("Outside block:", flavour)
}

blockScopeExample()
