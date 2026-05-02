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