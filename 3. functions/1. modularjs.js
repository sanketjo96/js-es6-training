/*
 * Concept: functions / modularjs
 * Run: node "3. functions/1. modularjs.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "3. functions/1. modularjs.js"
 */

const icecreamShop = (() => {
    const mix = 'sMix'
    const temp = '2dc'
    let pulps = ['straberry', 'vanila', 'guva', 'mango']

    return {
        getFlavours: function () {
            return pulps
        },
        getMenu: function () {
            return pulps.map(item => {
                return { [item]: 100 } 
            })
        }
    }

})();

console.log(icecreamShop.getFlavours())
console.log(icecreamShop.getMenu())