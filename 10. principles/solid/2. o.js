/*
 * Concept: principles / solid / o — Open/Closed Principle (OCP)
 * Run: node "10. principles/solid/2. o.js"
 *
 * CONCEPT:
 *   Classes should be open for extension but closed for modification. Adding
 *   a new icecream flavour should not require editing existing pricing code —
 *   you extend by adding a new class, not by changing the old one.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — IcecreamPricerBad must be edited every time a new flavour is added.
 *   ✓ GOOD — Each flavour is its own class with getPrice(). IcecreamPricer never
 *             changes when a new flavour is introduced.
 */

// ✗ BAD
class IcecreamPricerBad {
    getPrice(flavour) {
        if (flavour === 'vanilla')  return 3
        if (flavour === 'mango')    return 4
        // adding 'pistachio' means editing this method ← violates OCP
    }
}

// ✓ GOOD
class VanillaIcecream {
    getPrice() { return 3 }
}

class MangoIcecream {
    getPrice() { return 4 }
}

class PistachioIcecream {          // new flavour — nothing above was touched
    getPrice() { return 6 }
}

class IcecreamPricer {
    getPrice(icecream) { return icecream.getPrice() }
}

// ─── Usage ───────────────────────────────────────────────────────────────────
const pricer = new IcecreamPricer()
console.log(pricer.getPrice(new VanillaIcecream()))    // 3
console.log(pricer.getPrice(new MangoIcecream()))      // 4
console.log(pricer.getPrice(new PistachioIcecream()))  // 6
