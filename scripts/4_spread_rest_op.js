// Rest and spread have single syntax it just differs 
// in usage context


/**
 * Spread - Used to split up array elements or object properties
 * 
 */
const oldArray = [1,2,3,4]
const newArray = [11, 22, ...oldArray]
console.log(newArray)


const nameObj = {name: 'test', lastName: 'last_test'}
const details = {...nameObj, rank: 22}
console.log(details)

/**
 * Rest - Used to merge list function arguments to array
 */

const Add = (firstNum, ...args) => {
    let result = firstNum;

    for (let i=0; i<args.length; i++) {
        result += args[i]
    }

    console.log(result)
}

Add(10, 2, 3, 4)