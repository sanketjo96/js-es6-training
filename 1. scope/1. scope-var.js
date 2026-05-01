// global scope

flavour = "mango"

function icecream() {
    // var is functional scope
    var flavour = "straberry"
    console.log("Functional scope: " + flavour)
    if (1) {
        // JS dont have block scope for var. It does
        // not create new variable here, it shadows nearest functional
        // scope variable for same name.
        var flavour = "pista" 
        console.log("Functional scope: " + flavour)
    }
}

icecream()
console.log("Global Scope: " + flavour)