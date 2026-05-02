/*
 * Concept: scope / guess / snippet
 * Run: node "1. scope/4. guess/1. snippet.js"
 * Notes:
 *   - Comment out alternate examples when you want to run one scenario at a time.
 *   - Execute from repository root: node "1. scope/4. guess/1. snippet.js"
 */

var x = "global";
let y = "outer-let";
const z = "outer-const";

console.log("1:", x, y, z);

var x = "re-declared-var";
console.log("2:", x);

