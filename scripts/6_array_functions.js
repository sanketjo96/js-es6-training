const list = [1, 3, 4, 5]


// map
const mulByTwo = list.map((element) => {
    return element * 2;
})

// console.log(mulByTwo)

// filter
const filteredList = list.filter((element) => {
    return element <= 3;
})

// console.log(filteredList)

// Reduce
const result = list.reduce((acc, element) => {
    acc += element
    return acc
}, 0)

// console.log(result)


// find
// slice
// splice
// concat
// push 
// pop