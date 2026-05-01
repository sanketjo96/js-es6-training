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


// Promise.all - parallel execuation, one failed everything failed
Promise.all([
    Task("find icecream shoop"),
    Task("find food to order", 1000 ,false),
    Task("find party place")
]).then((result) => {
    console.log("Result for .all")
    console.log(result)
}).catch(e => console.log(e))


// Promise.allSettled - exactly similar to all but it returns falied as well as succeeded promises/
// settled - success or fail 
// If all failed - catch
// If any one succeed - then
// Promise.allSettled([
//     Task("find icecream from zomato", 1000, false),
//     Task("find icecream from swiggy", 200),
//     Task("find icecream from local vender", 500, false)
// ]).then((result) => {
//     console.log("Result for .allSettled")
//     console.log(result)
// }).catch(e => console.log(e))


// Promise.race - it runs in parallel but returns first promise which will be failed or succeed
// quickest failed - catch
// quickest success - the
// If all failed - catch
// Promise.race([
//     Task("find icecream from zomato", 1000, true),
//     Task("find icecream from swiggy", 1000, false),
//     Task("find icecream from local vender", 1000, false)
// ]).then((result) => {
//     console.log("Result for .race")
//     console.log(result)
// }).catch(e => {
//     console.log("error for .race")
//     console.log(e)
// })


// Promise.any - parallel but returns first successful promise, fails if every single one failed
// Promise.any([
//     Task("find icecream from zomato", 1000,false),
//     Task("find icecream from swiggy", 200, false),
//     Task("find icecream from local vender", 500, false)
// ]).then((result) => {
//     console.log("Result for .any")
//     console.log(result)
// }).catch(e => console.log(e))
