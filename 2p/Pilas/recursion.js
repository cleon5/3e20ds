class Pila{
    constructor() {
        this.pila=[]
    }
    agregar(algo){
        this.pila.push(algo)
        return this.pila
    }
    ultimo(){
        console.log(this.pila[(this.tamaño())-1])
    }
    quitar(){
        console.log(this.pila.pop())

    }
    tamaño(){
        return  this.pila.length;
    }
    mosrtrar(){
        console.log(this.pila)
    }
    aleatorio(){
        pila.agregar(Math.round(Math.random()*10));
    }
}
pila=new Pila()
pila.aleatorio()
pila.aleatorio()
pila.aleatorio()
pila.aleatorio()
console.log("Numeros Generados Aleatoriamente por recursion")
pila.mosrtrar()
console.log("Sacando valores de la pila, por recursion")
todo()
function todo(){
    if(pila.tamaño()!=0) {
        pila.quitar()
        todo()
    }
    else{
        console.log("Eso es todo")
    }
}
