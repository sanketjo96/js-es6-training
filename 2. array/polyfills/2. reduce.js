Array.prototype.newReduce = function (callback, acc) {

    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    let result = acc;
    let j = 0;
    if (arguments.length === 1) {
        result = this[0]
        j++
    }

    for (let i = j; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}

const icecreamRate = [10, 20, 30, 40]
const acc = icecreamRate.newReduce((acc, item, index, arr) => {
    acc = acc + item
    return acc
}, 100)

console.log(acc)
