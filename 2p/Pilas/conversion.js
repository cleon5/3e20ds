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
    pop(){
        return this.pop();
    }
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

function fact(n) {
    var s = new Cola();
    while (n > 1) {
        s.agregar(n--);
    }
    var product = 1;
    while (s.size() > 0) {
        product *= s.pop();
    }
    return product;
}
console.log(factorial(5)); // displays 120
console.log(fact(5)); // displays 120