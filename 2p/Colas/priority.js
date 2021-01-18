function ColaPrioridad(){
    this.dato = Array.prototype.slice.call(arguments, 0);
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.primero=primero;
    this.longitud= longitud;

    function enqueue (element){
        this.dato.push(element);
    }
    function dequeue(){
        let priority= this.dato[0].priority;
        let pItem=0;
        this.dato.forEach(function (item, ind){
            if(item.priority < priority){
                priority=item.priority;
                pItem=ind;
            }
        });
        return this.dato.splice(pItem, 1)[0]
    }
    function primero(){
        return this.dato[0];
    }
    function longitud(){
        return this.dato.length
    }
}
function paciente(nombre, priority){
    this.nombre=nombre;
    this.priority=priority;

}

let n = new ColaPrioridad()
n.enqueue(new paciente("Hernandez", 1));
n.enqueue(new paciente("Lopez", 4));
n.enqueue(new paciente("paredes", 2));
n.enqueue(new paciente("Perez", 3));
n.enqueue(new paciente("Mendez", 5));

console.log("La Cola tiene una longitud de ")
console.log(n.longitud())
console.log("El primer valor de la cola es ");
console.log(n.primero())
console.log("Sacando valores de la Cola en orden")
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())
