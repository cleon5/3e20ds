class Cola{
    constructor() {
        this.algo=[];
    }
    agregar(element){
        this.algo.push(element)
        return this.algo;
    }
    quitar(){
        return this.algo.shift();
    }
    size(){
        return this.algo.length;
    }
    primero(){
        return this.algo[0];
    }
    mostrar(){
        return this.algo;
    }
}

let cosa = new Cola();
cosa.agregar("Leon");
cosa.agregar("Perro");
cosa.agregar("Gato");
console.log(cosa.mostrar());
console.log(cosa.primero());
console.log(cosa.mostrar());
cosa.quitar();
console.log(cosa.mostrar());
console.log(cosa.mostrar())
console.log(cosa.size())