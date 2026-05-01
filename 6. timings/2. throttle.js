// Throttling is the act to responding to events
// after every fixed interval no matter what

function makeThrottled(fn, time) {
    let lastCallTime = 0
    return function (args) {
        let currentCallTime = Date.now()
        if (currentCallTime - lastCallTime > time) {
            lastCallTime = currentCallTime
            fn(args)
        }
    }

}

throttledLog = makeThrottled((msg) => {
    console.log(`${Date.now()} ${msg}`);
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
}, 100);

