function icecream() {
    // No error, but declaration gets hoisted to top of scope is hoisting
    console.log("Initial flavour: " + flavour) 
    var flavour = "straberry"
    console.log("Final flavour: " + flavour)
}

// icecream()
icecreamFixed()

