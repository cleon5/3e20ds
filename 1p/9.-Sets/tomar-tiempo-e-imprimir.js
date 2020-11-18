console.time();
let set = new Set();
set.add("10e4 = "+Math.pow(10,4))
set.add("10e4 = "+Math.pow(10,5))
set.add("10e4 = "+Math.pow(10,6))
console.log(set)
console.timeEnd();