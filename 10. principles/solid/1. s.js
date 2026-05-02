/*
 * Concept: principles / solid / s — Single Responsibility Principle (SRP)
 * Run: node "10. principles/solid/1. s.js"
 *
 * CONCEPT:
 *   A class should have only one reason to change — it should do exactly one
 *   thing. Mixing concerns (e.g. making icecream + printing receipts) means a
 *   change in receipt format forces you to touch icecream-making code too.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — IcecreamShopBad both prepares the icecream AND formats the receipt.
 *             Two reasons to change live in one class.
 *   ✓ GOOD — IcecreamShop only prepares; IcecreamReceipt only formats.
 *             Each class has exactly one reason to change.
 */

// ✗ BAD
class IcecreamShopBad {
    prepare(flavour) { return `Prepared ${flavour} icecream` }
    receipt(flavour, price) { return `Receipt: ${flavour} — $${price}` }
}

// ✓ GOOD
class IcecreamShop {
    prepare(flavour) { return `Prepared ${flavour} icecream` }
}

class IcecreamReceipt {
    generate(flavour, price) { return `Receipt: ${flavour} — $${price}` }
}

// ─── Usage ───────────────────────────────────────────────────────────────────
const shop = new IcecreamShop()
const receipt = new IcecreamReceipt()

console.log(shop.prepare('mango'))
console.log(receipt.generate('mango', 5))
