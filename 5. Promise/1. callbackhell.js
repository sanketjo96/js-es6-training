/*
 * Concept: Promise / callbackhell
 * Run: node "5. Promise/1. callbackhell.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "5. Promise/1. callbackhell.js"
 */


function Task(name, callback) {
    setTimeout(() => {
        callback("Completed: " + name)
    }, 1000)
}

console.log('Start party')

Task("find icecream shoop", (output) => {
    console.log(output)
    Task("Place an order", (output) => {
        console.log(output)
        Task("Pay the bill", (output) => {
            console.log(output)
        })
    })
})