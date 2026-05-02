/*
 * Concept: timings / debounce
 * Run: node "6. timings/1. debounce.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "6. timings/1. debounce.js"
 */

// Debouncing responds only after a quiet period.

function makeDebounced(fn, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const debouncedLog = makeDebounced((msg) => {
    console.log(msg)
}, 600)

console.log("Firing 5 rapid calls...")
debouncedLog("call 1")
debouncedLog("call 2")
debouncedLog("call 3")
debouncedLog("call 4")
debouncedLog("call 5") // only this should fire

setTimeout(() => {
    console.log("Firing after a pause (600ms later)...")
    debouncedLog("call 6")
}, 600)
