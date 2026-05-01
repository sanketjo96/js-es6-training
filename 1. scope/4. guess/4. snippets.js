const z = "outer-const";

try {
  const z = "shadow-z";
  console.log("13:", z);
  z = "mutate";
} catch (e) {
  console.log("14:", e.constructor.name);
}

console.log("15:", z);

(function() {
  console.log("16:", typeof secret);
  var secret = "iife-secret";
  console.log("17:", secret);
})();

console.log("18:", typeof secret);