/*
 * Concept: objects / thisBinding
 * Run: node "4. objects/3. thisBinding.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "4. objects/3. thisBinding.js"
 */

function Person(name) {
    this.name = name
}

const person = new Person('sanket')
console.log("Constructor call binds this to the new instance:", person.name)

const icecreamObj = {
    name: 'vanilla',
    getName() {
        return this.name
    }
}

console.log("Method call binds this to the object:", icecreamObj.getName())

const lostGetName = icecreamObj.getName
console.log("Detached method loses this context:", lostGetName())
