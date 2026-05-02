/*
 * Concept: Promise / polyfills / promise
 * Run: node "5. Promise/polyfills/1. promise.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "5. Promise/polyfills/1. promise.js"
 */

function godPromise(executor) {
    let isResolved = false
    let isRejected = false
    let resolveCallback
    let rejectCallback
    let resolvedValue
    let rejectedValue

    function Resolve(value) {
        isResolved = true
        if (typeof resolveCallback === 'function') {
            resolveCallback(value)
        } else {
            resolvedValue = value
        }
    }

    function Reject(value) {
        isRejected = true
        if (typeof rejectCallback === 'function') {
            rejectCallback(value)
        } else {
            rejectedValue = value
        }
    }

    this.then = function (callback) {
        if (isResolved) {
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
            rejectCallback = callback
        }
        return this
    }

    executor(Resolve, Reject)
}

const promise = new godPromise((resolve, reject) => {
    reject("data")
})

promise.then((data) => {
    console.log("Success", data)
}).catch((e) => {
    console.log("Error", e)
})
