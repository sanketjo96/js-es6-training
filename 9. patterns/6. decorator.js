/*
 * Concept: patterns / decorator
 * Run: node "9. patterns/6. decorator.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/6. decorator.js"
 */

const userService = {
    name: 'userService',
    getUser: function (id) {
        return `sanket-${id}`
    }
}

function withLogging(baseService) {
    return new Proxy(baseService, {
        get(target, prop) {
            const original = target[prop]
            if (typeof original !== 'function') return original

            return (args) => {
                console.log(`[Log] started calling ${target.name}  ${args}`)
                const result = original.call(baseService, args)
                console.log(`[Log] done calling  ${target.name}  ${args}`)
                return result;
            }

        }
    })
}

const usrservice = withLogging(userService)
console.log(usrservice.getUser('123'))