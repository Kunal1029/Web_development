
const figlet = require("figlet")

figlet("@kunal1029", function (err, data) {
    // if (err) {
    //   console.log("Something went wrong...");
    //   console.dir(err);
    //   return;
    // }
    console.log(data);
  });
let n = 5;

for(let i =0;i<n;i++){
    console.log("Hello" , i);
}

let a = "5";
console.log(typeof a)
let b = 2;
console.log(typeof b)
let k = ++a;
console.log(typeof k)
// console.log(++a + 1)

let x = 'a';
let y = 2;
console.log(x+++y);

let args = process.argv;
for(let i=2;i<args.length;i++){
    console.log("Hello to ", args[i]);
}
// console.log(process.argv)