function Queue(){

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.isEmpty = isEmpty;
    this.peek=peek

    function enqueue (element) {
        this.dato.push(element);
    }

    function dequeue(){
        var priority = this.dato[0].priority;
        var priorizedItem = 0;
        this.dato.forEach(function (item, index ){
            if(item.priority < priority) {
                priority = item.priority;
                priorizedItem = index;
            }
        });
        return this.dato.splice(priorizedItem, 1)[0];
    }
    function peek(){
        return this.dato[0]
    }
    function isEmpty(){
        return this.dato.length == 0;
    }
}

function Patient(nombre, priority){
    this.nombre = nombre;
    this.priority = priority;
}

/*
let n=new Queue(
    new Patient("Fernanda", 1),
    new Patient("Lorena", 4),
    new Patient("Fabricio", 2),
    new Patient("Esteban", 3)
);

 */
let n = new  Queue()
n.enqueue(new Patient("Fernanda", 1));
n.enqueue(new Patient("Lorena", 4));
n.enqueue(new Patient("Fabricio", 2));
n.enqueue(new Patient("Esteban", 3));
n.enqueue(new Patient("Esteban2", 5));
//console.log(n.print())
console.log(n.peek())
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())