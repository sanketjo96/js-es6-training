/*
 * Concept: Promise / polyfills / all
 * Run: node "5. Promise/polyfills/2. all.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "5. Promise/polyfills/2. all.js"
 */

function Task(name, time = 1000, isPartyTime = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPartyTime === true) {
                resolve("Done: " + name)
            } else {
                reject("error in task " + name)
            }
        }, time)
    })
}

function myPromiseAll(promises) {
    const results = Array(promises.length)
    let resolvedCount = 0
    let hasRejected = false
    let resolvedCallback
    let rejectCallback

    this.then = function (callback) {
        resolvedCallback = callback
        return this
    }

    this.catch = function (callback) {
        rejectCallback = callback
        return this
    }

    promises.forEach((promise, index) => {
        promise.then((value) => {
            if (hasRejected) return
            results[index] = value
            resolvedCount += 1
            if (resolvedCount === promises.length && typeof resolvedCallback === 'function') {
                resolvedCallback(results)
            }
        }).catch((error) => {
            if (!hasRejected && typeof rejectCallback === 'function') {
                hasRejected = true
                rejectCallback(error)
            }
        })
    })
}

new myPromiseAll([
    Task("find icecream shop"),
    Task("find food to order", 100, true),
    Task("find party place")
]).then((data) => {
    console.log("Success", data)
}).catch((e) => {
    console.log("error", e)
})
