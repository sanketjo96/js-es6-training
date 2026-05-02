function addFive(num) {
    return num + 5;
}

function multiplyByFour(num) {
    return num * 4;
}

function subtractTwo(num) {
    return num - 2;
}

function compose(...args) {
    return (val, isLtr) => {
        return args.reduceRight((acc, fn) => {
            console.log(fn)
            return fn(acc)
        }, val)
    }
}

const result = compose(addFive, subtractTwo, multiplyByFour)(5, true);
console.log(result);