console.log("Weakmap")
let obj1 = {name: 'John'};
let obj2 = {name: 'Peter'};
let obj3 = {name: 'Thomas'};
const weakMap = new WeakMap();
 
weakMap.set(obj1, 3);
weakMap.set(obj2, 'string');
weakMap.set(obj3, 5.5);
  
console.log(weakMap.has(obj3)); 
console.log(weakMap.has(obj1)); 
console.log(weakMap.has(obj2));

console.log("map")
let map = new Map();
map.set(1,'luis');
map.set(2,'daniel');
map.set(3,'Fausta');
map.set(4,'Lalo');
map.set(5,'Laura');
map.set(6,'Axel');
console.log(map);