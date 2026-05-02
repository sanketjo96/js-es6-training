/*
 * Concept: scope / guess / snippet
 * Run: node "1. scope/4. guess/3. snippet.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "1. scope/4. guess/3. snippet.js"
 */

{
  var blockVar = "leaks out";
  let blockLet = "stays in";
}

console.log("10:", blockVar);
console.log("11:", typeof blockLet); // errors