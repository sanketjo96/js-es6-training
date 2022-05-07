/**
 * In general programming, "this" points to current executing object
 * 
 * In JS
 * - If function is constructor/method - "this" points to current executing object
 * - Otherwsie  - "this" points to global object (like window etc.) 
 */

/**
 * "this" points to current executing object
 */
function Car(model, yr) {
    this.model = model;
    this.yr = yr;
    
    // This will point to object executing at given time
    console.log(this)
}

// new Car('Swift', 2000)
// new Car('Safari', 2005)

// What is we call Car directly
// Car()


function CarWithNotification(model, yr) {
    this.model = model;
    this.yr = yr;
    
    // This will point to object executing at given time
    console.log(this)


    // const IsCompleted = function() {
    //     console.log(this.model + ' is completed from factory!!')
    // }
    // IsCompleted()


    // Arrow functions are light weighted functions where 
    // their context points to parent context 
    const IsCompleted = () => {
        console.log(this.model + ' is completed from factory!!')
    }
    IsCompleted()
    
}

new CarWithNotification('Swift', 2000)