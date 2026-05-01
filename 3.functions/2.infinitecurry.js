// sum(1)(2)(3)(5)()

function sum(a) {
    if (typeof a !== 'number') {
        throw TypeError('Parmeter should stictly be number')
    }

    return function () {
        if (arguments.length) {
            let b = arguments[0];
            
            if (typeof b !== 'number') throw TypeError('Parmeter should stictly be number')
            return sum(a + b)
        } else {
            return a;
        }

    }
}

console.log(sum(1)(2)(3)(4)())