
function Task(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done: " + name)
        }, 1000)
    })
}

console.log('Start party')

Task("find icecream shoop").then((output) => {
    console.log(output)
    return Task("Place an order");
}).then((output) => {
    console.log(output)
    return Task("Pay the bill")
}).then((output) => {
    console.log(output)
}).catch(e => console.log(e))
    .finally(() => console.log("done!!"))