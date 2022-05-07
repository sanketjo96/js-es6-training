/**
 * 1. var has functional or lexical scope in javascript.
 * 2. Its possible to redeclare variable with same name, it always refers to initially defined/declare variable.
 */
function VarDemo() {
    var test = 10;
    if (test) {
        var test = 20;

        // Guess ??
        console.log(test)
    }


    // Guess ??
    console.log(test)
}

/**
 * 1. let got introduced in early version of  has function scope in javascript.
 * 2. let provides block scope and whatever you declare in a block stays for that block only.
 * 3. You cant redeclare couple of lets within same block scope. 
 */
function LetDemo() {
    let test = 10;
    if (test) {
        let test = 20;

        // Guess ??
        console.log(test)
    }

    // Guess ??
    console.log(test)

    // Guess ??
    // let test = 30;
}

VarDemo()
// LetDemo()