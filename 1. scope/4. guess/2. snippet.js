var x = "global";
let y = "outer-let";
const z = "outer-const";

function outer() {
  var x = "function-var";
  let y = "function-let";

  console.log("3:", x, y, z);

  if (true) {
    var x = "if-var";
    let y = "if-let";
    const z = "if-const";
    var newVar = "hoisted";

    console.log("4:", x, y, z);
  }

  console.log("5:", x, y, z);
  console.log("6:", newVar);

  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("7-var:", i), 0);
  }

  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("8-let:", j), 0);
  }
}

outer();
