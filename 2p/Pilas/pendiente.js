class Pila{
    constructor() {
        this.pila=[]
    }
    agregar(algo){
        this.pila.push(algo)
        return this.pila
    }
    ultimo(){
        console.log(this.pila[this.tamaño()-1])
    }
    quitar(){
        return this.pila.pop()
    }
    tamaño(){
        return  this.pila.length;
    }
    mosrtrar(){
        console.log(this.pila)
    }
}
let pila=new Pila()
pila.agregar("Perro")
pila.agregar("Sapo")
pila.agregar("Caballo")
pila.agregar("Serpiente")
pila.agregar("Foca")
pila.mosrtrar()
pila.ultimo()
pila.quitar()
pila.mosrtrar()
pila.tamaño()

