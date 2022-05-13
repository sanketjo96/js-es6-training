/**
 * For easy extraction of array elements or obj data to variables
 * (might sound similar to spread)
 */

const list = [1, 2, 3]
const [a, b] = list;
// console.log(a, b)

const nameObj = { key: 'test', lastName: 'last_test' }
const { key } = nameObj;
console.log(key)