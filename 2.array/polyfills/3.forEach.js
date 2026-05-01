Array.prototype.newForEach = function (callback) {
    if (!callback) {
        throw new TypeError("Callback function is missing.")
    }

    if (typeof callback !== 'function') {
        throw new TypeError("Callback should be of type function.")
    }

    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i], i, this)
    }
};

const data = [1, 2, 3]
data.newForEach((value, index, array) => {
    return value * 2;
})

console.log(data)

data.