const someValue = require("./module");
console.log(someValue)
console.log(someValue.mul(2,2))
console.log(someValue.pi)
console.log("fruits require export and module")

const fruits = require('./Fruits_Exports_in_directories')
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[0].name);