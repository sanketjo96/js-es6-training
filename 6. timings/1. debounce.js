// Debouncing is the act to responding to the stream of events
// when no new events observed for fixed interval of time. 


function makeDebounced(fn, time) {
    let timer

    return function (args) {
        clearInterval(timer)

        timer = setTimeout(() => {
            fn(args)
        }, time)
    }
}

const debouncedLog  = makeDebounced((msg) => {
    console.log(msg)
}, 600)


console.log("Firing 5 rapid calls...");
debouncedLog("call 1");
debouncedLog("call 2");
debouncedLog("call 3");
debouncedLog("call 4");
debouncedLog("call 5"); // only this should fire

setTimeout(() => {
    console.log("\nFiring after a pause (600ms later)...");
    debouncedLog("call 6"); // this fires too, since gap > 600ms
}, 600);