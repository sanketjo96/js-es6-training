const iceCream = {
    "taste": 'bitter',
    "expriy": 60,
    "servings": ["scoop", "cone"]
}



// 1. assign but nested structure is not copied - shallow copy
const otherIcecream = Object.assign({}, iceCream);
otherIcecream.taste = "sweet";
otherIcecream.servings.push("wafale")
console.log(iceCream)

// 2. Deep compy - comment previous one to avoid "wafale" - deep copy
someOtherIcecream = JSON.parse(JSON.stringify(iceCream))
someOtherIcecream.taste = "sweet";
someOtherIcecream.servings.push("wafale")
console.log(iceCream)