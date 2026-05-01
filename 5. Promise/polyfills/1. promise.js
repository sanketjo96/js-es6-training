function godPromise(executor) {
    let isRsolved = false;
    let isRejected = false;

    let resolveCallback, resolvedValue;
    let rejectedCallback, rejectedValue;


    function Resolve(value) {
        isRsolved = true
        if (typeof resolveCallback === 'function') {
            resolveCallback(value)
        } else {
            resolvedValue = value
        }
    }

    function Rejected(value) {
        isRejected = true
        if (typeof rejectedCallback === 'function') {
            rejectedCallback(value)
        } else {
            rejectedValue = value
        }
    }

    this.then = function (callback) {
        if (isRsolved) {
            callback(resolvedValue)
        } else {
            resolveCallback = callback
        }
        return this
    }

    this.catch = function (callback) {
        if (isRejected) {
            callback(rejectedValue)
        } else {
            rejectedCallback = callback
        }
        return this
    }

    executor(Resolve, Rejected)
}

const promise = new godPromise((resolve, rejected) => {
    // setTimeout(() => {
        rejected("data")
    // }, 10)
})

promise.then((data) => {
    console.log("Success " + data)
}).catch((e) => {
    console.log("Error " + e)
})