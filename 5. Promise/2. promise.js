// Promise is represetation of upcomming event or failuar

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
    console.log("Iceram for summer only !!")
}).finally(() => {
    console.log("end")
})

