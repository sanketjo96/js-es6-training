/*
 * Concept: Promise / promise
 * Run: node "5. Promise/2. promise.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "5. Promise/2. promise.js"
 */

// Promise is a representation of an upcoming success or failure.

let isSummer = false
console.log("start")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSummer === true) {
            resolve("Find the icecream shop")
        } else {
            reject("Shop not found")
        }
    }, 1000)
})

promise.then(() => {
    console.log("Task done")
}).catch(() => {
    console.log("Icecream for summer only!!")
}).finally(() => {
    console.log("end")
})
