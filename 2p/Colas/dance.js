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
