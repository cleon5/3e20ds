/*
Los objetos WeakSet son colecciones de objetos. 
Un objecto en WeakSet solo puede ser agregado una vez; Esto quiere decir que es unico en la coleccion WeakSet.

Las principales diferencias con el objeto Set son:
    A diferencia de  Sets, WeakSets  son solamente colecciones de objetos y no contienen valores arbitrarios de cualquier otro tipo.
    El WeakSet  es débil: Las referencias a objetos en la colección se mantienen débilmente.. 
    Si ya no hay otra referencia a un objeto almacenado en el  WeakSet, ellos pueden ser removidos por el recolector de basura. 
    Esto también significa que no hay ninguna lista de objetos almacenados en la colección. Los WeakSets no son enumerables.
*/
console.log("Weakset");
let obj1 = {name: 'John'};
let obj2 = {name: 'Peter'};
let obj3 = {name: 'Thomas'};

const weakSet = new WeakSet();
weakSet.add(obj1).add(obj2).add(obj3);
 
console.log(weakSet.has(obj3));
console.log(weakSet.has(obj1)); 
console.log(weakSet.has(obj2)); 

console.log("Set");
let setn = new Set();
setn.add('luis');
setn.add('daniel');
setn.add('Fausta');
setn.add('Lalo');
console.log(setn);