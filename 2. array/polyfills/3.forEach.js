/*
 * Concept: array / polyfills / 3.forEach
 * Run: node "2. array/polyfills/3.forEach.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "2. array/polyfills/3.forEach.js"
 */

Array.prototype.newForEach = function (callback, thisArg) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this)
    }
};

const data = [1, 2, 3]
data.newForEach((value, index, array) => {
    console.log(`index=${index}, value=${value}, original array=[${array}]`)
})

console.log("Original data remains unchanged:", data)
