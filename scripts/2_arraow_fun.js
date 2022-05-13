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

// What if we call Car directly
// Car()


function CarWithNotification(model, yr) {
    this.model = model;
    this.yr = yr;
    
    // This will point to object executing at given time
    console.log(this)


    // How we can reslove this.model to 'Swift' here ?
    const IsCompleted = function() {
        console.log(this.model + ' is completed from factory!!')
    }
    IsCompleted()
}

new CarWithNotification('Swift', 2000)