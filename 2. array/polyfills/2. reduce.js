/*
 * Concept: array / polyfills / reduce
 * Run: node "2. array/polyfills/2. reduce.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "2. array/polyfills/2. reduce.js"
 */

Array.prototype.newReduce = function (callback, acc) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    if (this.length === 0 && arguments.length === 1) {
        throw new TypeError("Reduce of empty array with no initial value")
    }

    let result = acc
    let startIndex = 0
    if (arguments.length === 1) {
        result = this[0]
        startIndex = 1
    }

    for (let i = startIndex; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const icecreamRate = [10, 20, 30, 40]
const acc = icecreamRate.newReduce((acc, item) => acc + item, 100)
console.log(acc)
