var data = { a: 10, b: 20 };

// import MyMath, { sum, substract } from "./math.js";

// console.log(1, sum(data)); //1, object
// console.log(1, substract(data)); //1, object
// console.log(1, MyMath.divide(data)); //1, object

// import { sum as add } from "./math.js";

// console.log(1, sum(data));

import * as MyMath from "./math.js";

console.log(1, MyMath.sum(data)); //1, object
console.log(1, MyMath.substract(data)); //1, object
console.log(1, MyMath.divide(data)); //1, object
