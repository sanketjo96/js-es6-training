// ES6 introduced const and let which have block scope.
// let for block scope vars and const is for block scope const

function icecream() {
    let flavour = "mango"
    if (1) {
        let flavour = "pista"
        console.log(flavour)
    }
}
