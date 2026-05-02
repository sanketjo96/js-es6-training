/*
 * Concept: patterns / observer
 * Run: node "9. patterns/1. observer.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "9. patterns/1. observer.js"
 */

class IcecreamStoreObservable {
    observerList = {}
    servings = []

    constructor(servings) {
        this.servings = servings
    }

    subscribe(label, fn) {
        if (label && !this.observerList[label]) {
            this.observerList[label] = fn
            console.log(`${label} subsribed to store, thanks!`)
        } else if (label) {
            console.log(`${label} we got you already!`)
        } else {
            console.log(`Name please ?`)
        }

        return  () => {
            delete this.observerList[label]
            console.log(`${label} we will miss you...`)
        }
    }

    set(servings) {
        this.servings = servings
        for (let i in this.observerList) {
            this.observerList[i](servings)
        }
    }
}

const observable = new IcecreamStoreObservable(["cone", "cup", "packs"])

const unsubMom = observable.subscribe('Mom', (updatedValue) => {
    console.log("mom", updatedValue)
})

const unsubSon = observable.subscribe('Son', (updatedValue) => {
    console.log("me", updatedValue)
})

observable.set([["cone", "cup", "packs", "halfpacks"]])

unsubMom();

observable.set([["cone", "cup"]])