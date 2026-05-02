/*
 * Concept: timings / throttle
 * Run: node "6. timings/2. throttle.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "6. timings/2. throttle.js"
 */

// Throttling limits function execution to once per interval.

function makeThrottled(fn, delay) {
    let lastCallTime = 0
    return function (...args) {
        const currentCallTime = Date.now()
        if (currentCallTime - lastCallTime > delay) {
            lastCallTime = currentCallTime
            fn(...args)
        }
    }
}

const throttledLog = makeThrottled((msg) => {
    console.log(`${Date.now()} ${msg}`)
}, 100)

throttledLog("Call 1")
throttledLog("Call 2")
throttledLog("Call 3")
throttledLog("Call 4")
throttledLog("Call 5")

setTimeout(() => {
    throttledLog("Call 7")
    throttledLog("Call 8")
    throttledLog("Call 9")
    throttledLog("Call 10")
}, 100)
