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

function myPromiseAll(list) {
    const resultData = []
    let isResolved, isRejected
    let resolvedCallback, rejectCallback;

    this.then = function (callback) {
        resolvedCallback = callback
        return this
    }

    this.catch = function (callback) {
        rejectCallback = callback
        return this
    }

    list.forEach((promise, index) => {
        promise.then((data) => {
            resultData.push(data)
            if (list.length === resultData.length) {
                resolvedCallback(resultData)
            }
        }).catch((data) => {
            isRejected = true;
            rejectCallback(data)
        })

    });
}



new myPromiseAll([
    Task("find icecream shoop"),
    Task("find food to order", 100, true),
    Task("find party place")
]).then((data) => {
    console.log("Success " + data)
}).catch((e) => {
    console.log("error " + e)
})