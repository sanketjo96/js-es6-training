{
  var blockVar = "leaks out";
  let blockLet = "stays in";
}

console.log("10:", blockVar);
console.log("11:", typeof blockLet); // errors