/*
 * Concept: functions / 2.infinitecurry
 * Run: node "3. functions/2.infinitecurry.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "3. functions/2.infinitecurry.js"
 */

function sum(a) {
    if (typeof a !== 'number') {
        throw TypeError('Parameter should strictly be a number')
    }

    return function () {
        if (arguments.length) {
            const b = arguments[0]
            if (typeof b !== 'number') {
                throw TypeError('Parameter should strictly be a number')
            }
            return sum(a + b)
        }
        return a
    }
}

console.log(sum(1)(2)(3)(4)())
