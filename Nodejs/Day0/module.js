const sum = (a,b) => a+b;
const multi = (a,b) =>a * b;
const g = 9.8;
const pi = 3.14;

// module.exports = 123;
// module.exports = 123 , "hello" ;

let obj = {
    sum : sum,
    mul : multi,
    g:g,
    pi:pi,
};

module.exports = obj;

//or we can do

module.exports.sum1 = (a,b) => a+b;
module.exports.multi1 = (a,b) =>a * b;

//or

exports.g1 = 9.8;
exports.pi1 = 3.14;