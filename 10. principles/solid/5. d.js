/*
 * Concept: principles / solid / d — Dependency Inversion Principle (DIP)
 * Run: node "10. principles/solid/5. d.js"
 *
 * CONCEPT:
 *   High-level modules should not depend on low-level modules; both should
 *   depend on abstractions. Business logic should not be hard-wired to a
 *   specific implementation — inject the dependency from outside instead.
 *
 * HOW THIS PROGRAM DEMONSTRATES IT:
 *   ✗ BAD  — IcecreamShopBad hard-wires new CashPayment() inside the constructor.
 *             Swapping to card payment means editing the shop itself.
 *   ✓ GOOD — IcecreamShop depends on a PaymentMethod abstraction injected from
 *             outside. CashPayment and CardPayment both implement it. The shop
 *             never changes when a new payment method is introduced.
 */

// ✗ BAD
class CashPaymentBad {
    pay(amount) { return `Paid $${amount} in cash` }
}

class IcecreamShopBad {
    constructor() {
        this.payment = new CashPaymentBad()  // hard-wired; impossible to swap
    }
    checkout(amount) { return this.payment.pay(amount) }
}

// ✓ GOOD
class PaymentMethod {
    pay(amount) { throw new Error('Not implemented') }
}

class CashPayment extends PaymentMethod {
    pay(amount) { return `Paid $${amount} in cash` }
}

class CardPayment extends PaymentMethod {
    pay(amount) { return `Paid $${amount} by card` }
}

class IcecreamShop {
    constructor(paymentMethod) {          // abstraction injected from outside
        this.paymentMethod = paymentMethod
    }
    checkout(amount) { return this.paymentMethod.pay(amount) }
}

// ─── Usage ───────────────────────────────────────────────────────────────────
console.log(new IcecreamShop(new CashPayment()).checkout(5))   // Paid $5 in cash
console.log(new IcecreamShop(new CardPayment()).checkout(5))   // Paid $5 by card
