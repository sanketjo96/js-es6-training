const icecream = {name: "choco chip", recipe: 'something big...', price: 200}

const actualIcecream = new Proxy(icecream, {
    get(target, prop) {
        if (prop === 'recipe' ) return "*****"
        return target[prop]
    }
})

console.log(actualIcecream.name)
console.log(actualIcecream.recipe)