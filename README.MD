# Senior JavaScript Interview Preparation
## Complete Study Guide + 2-Day Refresher

---

## 📑 QUICK NAVIGATION

### 🚀 **[PART 1: 2-DAY PRE-INTERVIEW REFRESHER](#part-1-2-day-pre-interview-refresher)** ⭐ Read this 48 hours before
Quick refresh of high-impact concepts. **Time:** ~3-4 hours  
Perfect for last-minute prep before the interview.

### 📚 **[PART 2: DETAILED COMPREHENSIVE GUIDE](#part-2-detailed-comprehensive-study-guide)** ⭐ Read this during study
Complete coverage of all interview topics. **Time:** 2-3 weeks  
Deep dive into every concept with full explanations.

---

---

# PART 1: 2-DAY PRE-INTERVIEW REFRESHER

**Goal:** Quick refresh of high-impact concepts 48 hours before interview  
**Time:** ~3-4 hours total (split across 2 days)  
**Focus:** Most frequently tested patterns + gotchas + output prediction

---

## ⚡ 2-Day Refresh Schedule

### **Day 1 (2-3 hours)**
- Morning: Scope, this binding, Closures (30 min)
- Mid: Array methods polyfills (30 min)  
- Afternoon: Function patterns - currying, debounce, throttle (45 min)
- Evening: Async/Promises quick review (30 min)

### **Day 2 (1-2 hours)**
- Morning: Output prediction challenges (30 min)
- Mid: Object operations & edge cases (20 min)
- Afternoon: Top 5 gotchas & common mistakes (30 min)
- Final: Quick mock problem (20 min)

---

## 🔥 TOP 5 MOST TESTED CONCEPTS

### 1️⃣ **SCOPE, CLOSURES & THIS BINDING**
**Why:** 90% of interviews test this  
**Time to review:** 30 min

#### Core Rules:
```javascript
// VAR: Function scoped, hoisted, can be redeclared
// LET/CONST: Block scoped, not redeclared, TDZ exists

// CLOSURES: Inner function accesses outer scope
const counter = (() => {
  let count = 0;
  return () => ++count;
})();

// THIS: Depends on HOW function is called
obj.method()          // this = obj
func()                // this = undefined (strict) or window
func.call(obj)        // this = obj (explicit)
() => {}              // this = parent's this (lexical)
new Constructor()     // this = new object
```

#### Critical Gotchas:
- [ ] `var` in loop with setTimeout - closure captures same reference
- [ ] `this` in arrow functions inside methods
- [ ] Passing methods as callbacks loses context
- [ ] Hoisting: var hoisted as undefined, let/const not accessible before declaration

#### Must-Know Interview Questions:
```javascript
// Q1: What's the output?
var x = 5;
function test() {
  console.log(x);
  var x = 10;
}
test(); // undefined (x hoisted locally)

// Q2: What prints?
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs.forEach(f => f()); // 3, 3, 3 (var is function-scoped)

// Q3: Fix it with let
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs.forEach(f => f()); // 0, 1, 2 (let is block-scoped)
```

---

### 2️⃣ **ARRAY METHODS & POLYFILLS**
**Why:** Direct coding test  
**Time to review:** 30 min

#### Must Implement (in order of frequency):
```javascript
// 1. MAP - Transform each element
Array.prototype.myMap = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// 2. FILTER - Keep elements that pass test
Array.prototype.myFilter = function(cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// 3. REDUCE - Single value from array
Array.prototype.myReduce = function(cb, initial) {
  let acc = initial !== undefined ? initial : this[0];
  const start = initial !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

// 4. FIND - First element matching condition
Array.prototype.myFind = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return this[i];
  }
};

// 5. SOME - Any element passes test?
Array.prototype.mySome = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return true;
  }
  return false;
};

// 6. EVERY - All elements pass test?
Array.prototype.myEvery = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) return false;
  }
  return true;
};

// 7. FLAT - Flatten nested arrays
Array.prototype.myFlat = function(depth = 1) {
  let result = [];
  for (let item of this) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
};
```

#### Common Traps:
- [ ] Forget to pass `index` and `array` to callback
- [ ] `reduce` with no initial value when array is empty
- [ ] `find` returns element, not index
- [ ] `flat` doesn't modify original array
- [ ] Handle `this` context for callbacks with `thisArg`

---

### 3️⃣ **FUNCTION PATTERNS**
**Why:** Shows advanced understanding  
**Time to review:** 45 min

#### Pattern 1: CURRYING
```javascript
// Transform: func(a,b,c) -> func(a)(b)(c)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```

#### Pattern 2: DEBOUNCE (delay execution)
```javascript
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Usage: Search input (only search on stop typing)
const search = debounce((query) => {
  console.log('Searching:', query);
}, 500);
```

#### Pattern 3: THROTTLE (limit frequency)
```javascript
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}

// Usage: Scroll event (max once per 100ms)
const handleScroll = throttle(() => {
  console.log('Scrolling');
}, 100);
```

#### Pattern 4: MEMOIZATION (cache results)
```javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Usage: Expensive computation
const expensiveCalc = memoize((n) => {
  console.log('Computing...');
  return n * n;
});
```

#### Pattern 5: COMPOSE (function chaining)
```javascript
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// PIPE (left to right)
function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

// Usage
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const pipeline = pipe(add5, multiply2);
console.log(pipeline(3)); // (3 + 5) * 2 = 16
```

---

### 4️⃣ **ASYNCHRONOUS PATTERNS**
**Why:** Real-world critical  
**Time to review:** 30 min

#### Key Patterns:
```javascript
// PROMISES: Three states (pending, resolved, rejected)
const promise = new Promise((resolve, reject) => {
  if (success) resolve(value);
  else reject(error);
});

// ASYNC/AWAIT: Cleaner syntax
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// PROMISE.ALL: Wait for all promises
Promise.all([p1, p2, p3]).then(results => {
  // All succeeded
}).catch(error => {
  // Any failed
});

// PROMISE.RACE: First to settle
Promise.race([p1, p2]).then(result => {
  // Fastest promise
});

// PROMISE.ALLSETTLED: All done (success or fail)
Promise.allSettled([p1, p2]).then(results => {
  // [{status: 'fulfilled', value: x}, {status: 'rejected', reason: e}]
});
```

#### Common Interview Questions:
```javascript
// Q: Output order?
console.log('1');
Promise.resolve().then(() => console.log('2'));
console.log('3');
// Output: 1, 3, 2 (microtask queue)

// Q: Fix this - concurrent requests with limit
async function batchFetch(urls, limit = 2) {
  const results = [];
  for (let i = 0; i < urls.length; i += limit) {
    const batch = urls.slice(i, i + limit);
    results.push(...await Promise.all(batch.map(fetch)));
  }
  return results;
}

// Q: Retry logic
async function retryFetch(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fetch(url);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

---

### 5️⃣ **DEEP COPY & OBJECT MANIPULATION**
**Why:** Data transformation critical  
**Time to review:** 20 min

```javascript
// SHALLOW COPY: Only copies top level
const shallow = {...original};
const shallow2 = Object.assign({}, original);

// DEEP COPY: Copy all nested levels
function deepCopy(obj, seen = new Map()) {
  // Handle circular references
  if (seen.has(obj)) return seen.get(obj);
  
  if (obj === null || typeof obj !== 'object') return obj;
  
  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);
  
  for (const key in obj) {
    copy[key] = deepCopy(obj[key], seen);
  }
  return copy;
}

// NESTED PROPERTY ACCESS (lodash.get)
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Usage
getNestedValue({a: {b: {c: 5}}}, 'a.b.c'); // 5

// NESTED PROPERTY SET (lodash.set)
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  let current = obj;
  
  for (const key of keys) {
    current[key] = current[key] || {};
    current = current[key];
  }
  
  current[lastKey] = value;
  return obj;
}
```

---
## ⚠️ GOTCHAS & EDGE CASES (Most Tested)

### ⚠️ GOTCHA 1: Closure in Loops
```javascript
// WRONG: All functions reference same i
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3
}

// FIX 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0, 1, 2
}

// FIX 2: IIFE (create new scope)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0); // 0, 1, 2
  })(i);
}
```

### ⚠️ GOTCHA 2: this Context Loss
```javascript
// WRONG: Lost context when passed as callback
const obj = {
  name: 'Test',
  greet() { console.log(this.name); }
};

setTimeout(obj.greet, 0); // undefined (this lost)

// FIX: Bind context
setTimeout(obj.greet.bind(obj), 0); // 'Test'
setTimeout(() => obj.greet(), 0);   // 'Test'
```

### ⚠️ GOTCHA 3: Array Methods & Sparse Arrays
```javascript
const arr = [1, , 3];
arr.map(x => x * 2);     // [2, empty, 6] (skips hole)
arr.forEach(x => console.log(x)); // 1, 3 (skips hole)
```

### ⚠️ GOTCHA 4: Reduce with No Initial Value
```javascript
[].reduce((a, b) => a + b); // TypeError (empty array)
[].reduce((a, b) => a + b, 0); // 0 (initial provided)
```

### ⚠️ GOTCHA 5: Type Coercion Nightmare
```javascript
[] == false        // true (coerces both to 0)
[] == ''           // true
[] == ![]          // true (both become 0)
'' == false        // true
'0' == false       // true
null == undefined  // true
NaN === NaN        // false (!!)
```

---

## 💻 OUTPUT PREDICTION DRILL
**Time:** 30 min (Day 2 morning)

Try to predict outputs without running:

```javascript
// 1. Scope + Hoisting
function test() {
  console.log(x);
  var x = 5;
  console.log(x);
}
test();
// Answer: undefined, 5

// 2. Closure
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i);
}
console.log(funcs[0](), funcs[1](), funcs[2]());
// Answer: 3, 3, 3

// 3. This Binding
const obj = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};
console.log(obj.getValue()());
// Answer: 42

// 4. Type Coercion
console.log(5 + '5');      // Answer: '55'
console.log('5' - '3');    // Answer: 2
console.log([] + []);      // Answer: ''
console.log({} + {});      // Answer: '[object Object][object Object]'

// 5. Promise Order
console.log('1');
Promise.resolve().then(() => console.log('2'));
console.log('3');
// Answer: 1, 3, 2

// 6. Destructuring
const {a = 10, b = 20} = {a: undefined};
console.log(a, b);
// Answer: 10, 20 (undefined triggers default)

// 7. Spread vs Rest
const arr = [1, 2, 3];
const [first, ...rest] = arr;
console.log(first, rest);
// Answer: 1, [2, 3]

// 8. Reduce
[1, 2, 3].reduce((a, b) => a + b);
// Answer: 6
```

---
## � QUICK CHECKLIST: Before Interview Day

### Mentally Review (30 min):
- [ ] Can you implement map/filter/reduce without looking?
- [ ] What's the output of 3 closure/scope puzzles?
- [ ] Can you write debounce & throttle from memory?
- [ ] Explain this binding in 4 scenarios (method, function, arrow, new)
- [ ] What's the event loop execution order?
- [ ] How to fix circular reference in deep copy?

### Code It Out (30 min):
- [ ] Run one full mock problem (45 min timed)
- [ ] Review your code for edge cases
- [ ] Check: meaningful names, clear logic, error handling

### Night Before:
- [ ] Get good sleep (more important than last-minute cramming)
- [ ] Have running environment ready (Node.js works)
- [ ] Review this README one more time

---

## 📌 ESSENTIAL REFERENCE PATTERNS

### Pattern: Event Emitter (Common Interview Pattern)
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
  
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}
```

### Pattern: Singleton (Only one instance)
```javascript
const Singleton = (() => {
  let instance;
  
  function createInstance() {
    return {id: Math.random()};
  }
  
  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
```

### Pattern: Observer/Pub-Sub
```javascript
class PubSub {
  constructor() {
    this.subscribers = {};
  }
  
  subscribe(topic, callback) {
    if (!this.subscribers[topic]) this.subscribers[topic] = [];
    this.subscribers[topic].push(callback);
    return () => this.unsubscribe(topic, callback);
  }
  
  publish(topic, data) {
    if (this.subscribers[topic]) {
      this.subscribers[topic].forEach(cb => cb(data));
    }
  }
  
  unsubscribe(topic, callback) {
    this.subscribers[topic] = 
      this.subscribers[topic].filter(cb => cb !== callback);
  }
}
```

---

**Duration:** 2-4 hours pre-interview  
**Goal:** Refresh critical patterns for machine coding  
**Mindset:** You know this - just remind yourself how

---

---

# PART 2: DETAILED COMPREHENSIVE STUDY GUIDE

**Goal:** Master JavaScript language features for senior-level interviews  
**Time:** 2-3 weeks of dedicated study  
**Focus:** Implementation, code quality, problem-solving thinking

---

## 📋 Complete Topics & Implementation Patterns

### 1. **SCOPE & CLOSURES** 
**Why it matters:** Every interview tests scope understanding. Essential for memory optimization and avoiding bugs.

#### Key Concepts:
- **Global vs Local Scope**
- **Function Scope (var)**
- **Block Scope (let/const)**
- **Closure Formation & Memory Impact**
- **Lexical Environment**

#### Interview Questions:
- What's the output? (Classic hoisting/scope puzzles)
- Implement a counter using closures
- Memory implications of closures in loops
- What causes memory leaks with closures?

#### 📁 Implementations:
- [scope-var.js](./1.%20scope/1.%20scope-var.js) - Functional scope vs block scope
- [hoisting.js](./1.%20scope/2.%20hoisting.js) - Temporal Dead Zone, hoisting behavior
- [scope-const-let.js](./1.%20scope/3.%20scope-const-let.js) - Block scope comparison
- [snippet.js files](./1.%20scope/guess/) - Output prediction challenges

**Practice:** Can you fix scope bugs? Create closures that don't leak memory?

---

### 2. **PROTOTYPES & INHERITANCE**
**Why it matters:** JavaScript's core mechanism. Tests deep language understanding.

#### Key Concepts:
- **Prototype Chain**
- **Constructor Functions vs Classes**
- **Object.create(), new keyword**
- **Prototype Methods vs Instance Methods**
- **Performance: Method Lookup Chain**
- **instanceof, typeof, constructor**

#### Interview Questions:
- Implement inheritance patterns (prototypal, ES6 class)
- What happens when property not found?
- Design an efficient class hierarchy
- Memory impact of different inheritance patterns
- Polyfill Object.create()

#### 📁 Implementations Needed:
- Constructor function patterns
- Prototype method setup
- ES6 class vs function constructors comparison
- Prototype chain traversal
- instanceof implementation

**Practice:** Build a plugin system using prototypes. Implement multiple inheritance patterns.

---

### 3. **THIS BINDING & EXECUTION CONTEXT**
**Why it matters:** Biggest source of bugs. Tests deep understanding.

#### Key Concepts:
- **Global Context, Function Context, Method Context**
- **Implicit Binding**
- **Explicit Binding (call, apply, bind)**
- **Arrow Functions & Lexical this**
- **new keyword & Constructor Context**

#### Interview Questions:
- Output prediction with context loss/switching
- Implement Function.prototype.call, apply, bind
- When should you use arrow functions?
- Fix real-world context bugs
- Design patterns using this binding

#### 📁 Implementations Needed:
- Custom call/apply/bind implementation
- Context binding examples
- Arrow function vs regular function comparisons
- This in different scenarios (event handlers, callbacks)

**Practice:** Can you fix context bugs in callbacks? Implement decorators with proper binding?

---

### 4. **ARRAY METHODS & POLYFILLS**
**Why it matters:** Tests implementation skills and algorithm thinking.

#### Key Concepts:
- **Higher-Order Functions**
- **map, filter, reduce, forEach Behavior**
- **Callback Order & this Context**
- **Index & Element Position**
- **Short-circuit Evaluation**

#### Interview Questions:
- Implement: map, filter, reduce, forEach, find, findIndex, some, every
- Implement: flat, flatMap
- Implement: Array.from, Array.isArray
- Performance: When to use which method?
- Handle edge cases (empty arrays, undefined, null)

#### 📁 Implementations:
- [map.js](./2.array/polyfills/1.%20map.js) - Custom map implementation
- [reduce.js](./2.array/polyfills/2.%20reduce.js) - Reduce with initial value
- [forEach.js](./2.array/polyfills/3.forEach.js) - forEach behavior
- **TODO:** filter, find, some, every, flat, flatMap

**Practice:** Can you implement each method correctly handling all edge cases? Chain methods efficiently?

---

### 5. **FUNCTION PATTERNS & ADVANCED FEATURES**
**Why it matters:** Demonstrates mastery of functional programming and optimization.

#### Key Concepts:
- **Higher-Order Functions**
- **Currying & Partial Application**
- **Memoization**
- **Debouncing & Throttling**
- **Function Composition**
- **Generators & Iterators**
- **Arguments vs Rest Parameters**
- **Default Parameters**

#### Interview Questions:
- Implement: debounce, throttle
- Implement: memoization decorator
- Implement: compose, pipe functions
- Implement: currying transformation
- Design a rate limiter
- Implement: retry with exponential backoff
- Generator-based lazy evaluation

#### 📁 Implementations:
- [modularjs.js](./3.functions/1.%20modularjs.js) - Module pattern (IIFE, closures)
- [infinitecurry.js](./3.functions/2.infinitecurry.js) - Currying implementation
- **TODO:** Debounce, Throttle, Memoization, Compose, Generators

**Practice:** How would you optimize a frequently-called function? Implement a sophisticated rate limiter.

---

### 6. **OBJECT MANIPULATION & DEEP OPERATIONS**
**Why it matters:** Core for data transformation, immutability, and complex algorithms.

#### Key Concepts:
- **Shallow vs Deep Copy**
- **Object.assign() Behavior**
- **Spread Operator**
- **Property Descriptors**
- **Object.keys, values, entries**
- **Freezing & Sealing Objects**
- **Immutability Patterns**

#### Interview Questions:
- Implement: Deep clone
- Implement: Object merge with strategy
- Implement: Nested property access/modification (lodash.get/set)
- Implement: Object.freeze recursively
- Handle circular references
- Performance: When copy vs reference?

#### 📁 Implementations:
- [deep_copy.js](./4.%20objects/1.%20deep_copy.js) - Deep cloning implementation
- [objects.js](./4.%20objects/1.%20objects.js) - Object patterns
- **TODO:** Property descriptors, freezing, nested access (get/set)

**Practice:** Can you deep clone complex objects with circular references? Implement immutability helpers?

---

### 7. **ASYNCHRONOUS PROGRAMMING**
**Why it matters:** Critical for real-world applications. Tests async/await, promises, callbacks.

#### Key Concepts:
- **Callbacks & Callback Hell**
- **Promise States & Chaining**
- **Async/Await & Error Handling**
- **Event Loop & Microtask Queue**
- **Promise.all, race, allSettled**
- **Generator-based Async**

#### Interview Questions:
- Output prediction: async execution order
- Implement: Promise polyfill
- Implement: Promise.all, race, allSettled
- Fix race conditions
- Design: Concurrent request limiter
- Fix: Async/await error handling
- Implement: Retry logic with backoff

#### 📁 Implementations Needed:
- Promise basics and polyfill
- Promise combinators (all, race, allSettled, any)
- Async patterns and examples
- Event loop visualization
- Concurrent control patterns

**Practice:** Can you predict execution order? Implement concurrent request management?

---

### 8. **DESTRUCTURING & MODERN SYNTAX**
**Why it matters:** Shows modern JavaScript knowledge.

#### Key Concepts:
- **Array Destructuring**
- **Object Destructuring**
- **Nested Destructuring**
- **Rest Parameters & Spread Operator**
- **Default Values**
- **Renaming in Destructuring**

#### Interview Questions:
- Extract specific values from complex structures
- Combine/merge data structures using spread
- Function parameters with destructuring
- Avoid dynamic property access

#### 📁 Implementations Needed:
- Destructuring examples
- Spread vs rest usage
- Parameter handling patterns

**Practice:** Can you refactor verbose code using destructuring? Handle complex nested structures efficiently?

---

### 9. **PERFORMANCE & OPTIMIZATION**
**Why it matters:** Senior-level interviews expect performance awareness.

#### Key Concepts:
- **Time Complexity Analysis**
- **Space Complexity**
- **Memory Leaks & Garbage Collection**
- **Optimization Techniques**
- **Lazy Loading & Caching**
- **Event Delegation**

#### Interview Questions:
- Optimize: O(n²) algorithm to O(n)
- Identify memory leaks
- Design efficient data structures
- When to cache? When to compute fresh?
- Handle large datasets efficiently

#### 📁 Implementations Needed:
- Performance-compared implementations
- Optimization before/after
- Memory profiling examples

**Practice:** Can you identify performance bottlenecks? Optimize without breaking functionality?

---

### 10. **TYPE COERCION & EQUALITY**
**Why it matters:** Tests depth of language understanding.

#### Key Concepts:
- **Implicit Type Coercion**
- **== vs ===**
- **Truthy vs Falsy**
- **NaN, Infinity, undefined vs null**
- **Object to Primitive Conversion**
- **Symbol.toPrimitive**

#### Interview Questions:
- Output prediction with type coercion
- When is == safe to use?
- Implement custom valueOf/toString
- Handle edge cases ([], {}, NaN)

#### 📁 Implementations Needed:
- Type coercion examples
- Equality edge cases
- Primitive conversion examples

**Practice:** Can you predict outputs? Explain why coercion happens?

---

### 11. **ERROR HANDLING & DEFENSIVE PROGRAMMING**
**Why it matters:** Shows production-ready code quality.

#### Key Concepts:
- **Try/Catch/Finally**
- **Custom Error Classes**
- **Error Recovery & Retry**
- **Validation & Assertions**
- **Error Propagation**

#### Interview Questions:
- Design error recovery strategy
- Implement: Custom error handling
- Implement: Retry with exponential backoff
- When to throw vs return error object?
- Error logging & debugging

#### 📁 Implementations Needed:
- Custom error classes
- Error handling patterns
- Retry and recovery mechanisms

**Practice:** How would you handle errors in a production system? Implement recovery strategies?

---

### 12. **COMMON CODING PATTERNS**
**Why it matters:** Shows you can solve problems efficiently.

#### Key Patterns:
- **Singleton Pattern**
- **Observer/Publish-Subscribe**
- **Factory Pattern**
- **Strategy Pattern**
- **Decorator Pattern**
- **Adapter Pattern**

#### Interview Questions:
- Implement: Event emitter (on, off, emit)
- Implement: Pub/Sub system
- Design: Flexible configuration system
- Implement: Plugin architecture

#### 📁 Implementations Needed:
- Event emitter
- Pub/Sub pattern
- Factory implementations
- Decorator examples

**Practice:** Can you implement a flexible event system? Design extensible architecture?

---

## 📊 Study Progression

### Week 1-2: Fundamentals
- Scope, Hoisting, Closures
- Prototypes, this binding
- Practice output prediction questions

### Week 3-4: Array & Object Operations
- Array polyfills (map, filter, reduce, etc.)
- Deep copy, object manipulation
- Implement common utilities

### Week 5-6: Functions & Patterns
- Higher-order functions, currying, composition
- Debounce, throttle, memoization
- Design patterns (observer, factory, etc.)

### Week 7-8: Advanced Topics
- Async/Promises, async/await
- Generators, iterators
- Performance optimization

### Week 9-10: Mock Interviews
- Timed problems (45-60 min)
- Various difficulty levels
- Code review & optimization

---

## 🚀 Quick Reference: Must-Know Concepts

| Concept | Why? | How to Master? |
|---------|------|----------------|
| Closure | Every code test | Implement counter, cache, private variables |
| this binding | Context bugs | Implement call/apply/bind, understand new |
| Prototype | Language core | Build inheritance, understand __proto__ |
| Async | Real-world | Implement Promise polyfill, sequence async operations |
| Array methods | Daily use | Implement all polyfills, handle edge cases |
| Currying | Functional style | Transform functions, partial application |
| Deep copy | Data manipulation | Handle circular refs, nested structures |
| Debounce/Throttle | Performance | Implement and use in real scenarios |

---

## 💡 Tips for Success

1. **Run Code While Learning** - Don't just read, execute and experiment
2. **Understand Why** - Not just how to write it, but why it works
3. **Edge Cases First** - Think of what can break before implementing
4. **Performance Aware** - Know complexity of your approach
5. **Communicate** - Explain your thinking during interviews
6. **Practice Output Prediction** - Build intuition for JavaScript behavior
7. **Refactor & Optimize** - After working solution, improve it
8. **Read Others' Code** - Learn different approaches and patterns

---

## 📝 How to Use This Repository

1. **Read the relevant section** (2-day or comprehensive)
2. **Review implementations** to see working examples
3. **Modify & experiment** - Don't just copy, understand
4. **Implement missing pieces** - Code the polyfills yourself first
5. **Test edge cases** - Run files and test edge cases
6. **Simulate interviews** - Time yourself, solve without looking at examples

---

## 🎓 Assessment: Can You Explain These?

- [ ] Why does this code output that value? (Output prediction)
- [ ] What's the time/space complexity? (Algorithm analysis)
- [ ] What edge cases could break this? (Defensive thinking)
- [ ] How would you optimize this? (Performance thinking)
- [ ] What would a production version look like? (Code quality)

If you can answer these for any implementation, you're ready.

---

**Last Updated:** April 2026  
**Structure:** 2-Day Refresher + Comprehensive Guide  
**Focus:** Implementation, code quality, problem-solving thinking
