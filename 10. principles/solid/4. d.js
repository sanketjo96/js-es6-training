/*
 * Concept: principles / solid / d
 * Run: node "10. principles/solid/4. d.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "10. principles/solid/4. d.js"
 */

class PaymentMethod {
    pay(amount) {
        throw new Error('Not implemented')
    }
}

class CreditCard extends PaymentMethod {
    pay(amount) {
        return `Paid ${amount} with credit card`
    }
}

class OrderProcessor {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod
    }

    process(amount) {
        return this.paymentMethod.pay(amount)
    }
}

const processor = new OrderProcessor(new CreditCard())
console.log(processor.process(100))
