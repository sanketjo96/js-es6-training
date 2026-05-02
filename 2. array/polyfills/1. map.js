/*
 * Concept: array / polyfills / map
 * Run: node "2. array/polyfills/1. map.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "2. array/polyfills/1. map.js"
 */

Array.prototype.newMap = function (callback, thisArg) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArg, this[i], i, this))
    }
    return result;
};



const icecream = ['choco-chips', 'vanila', 'strawberry']

// 1. Normal test case
const typeLen = icecream.newMap((item, index, arr) => {
    return item.length
})
console.log(typeLen);

// 2. Call back not passed
// const typeLen = icecream.newMap()

// 3. Pass thisArg explicitly
const calc = {
    factor: 10
}
const results = icecream.newMap(function (item, index, arr)  {
    return item.length * this.factor
}, calc)
console.log(results);

