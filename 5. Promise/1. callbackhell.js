
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