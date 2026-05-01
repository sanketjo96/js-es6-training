const iceCream = {
    "taste": 'bitter',
    "expriy": 60
}

let otherIcecream = iceCream
otherIcecream.taste = "sweet"

console.log(iceCream)


function tasteIcecream(value = { ...iceCream, expriy: 20 }) {
    if (value.expriy === 60) {
        return "Throw"
    } else {
        return "Investigate"
    }
}

console.log("Testing..." + tasteIcecream())
console.log("Testing..." + tasteIcecream(iceCream))
