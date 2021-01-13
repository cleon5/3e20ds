function PriorityQueue(){

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.isEmpty = isEmpty;
    this.print = print;

    function enqueue (element) {
        this.dataStore.push(element);
    }

    function dequeue(){
        var priority = this.dataStore[0].priority;
        var priorizedItem = 0;
        this.dataStore.forEach(function (item, index ){
            if(item.priority < priority) {
                priority = item.priority;
                priorizedItem = index;
            }
        });
        return this.dataStore.splice(priorizedItem, 1)[0];
    }

    function isEmpty(){
        return this.dataStore.length == 0;
    }

    function print(element){
        this.dataStore.map(function(patient){
            element.appendChild(patient.node);
        });
    }
}
function dequeue(){
    var priority = this.dataStore[0].priority;
    var priorizedItem = 0;
    this.dataStore.forEach(function (item, index ){
        if(item.priority < priority) {
            priority = item.priority;
            priorizedItem = index;
        }
    });
    return this.dataStore.splice(priorizedItem, 1)[0];
}
new Patient("Fernanda", 1),
    new Patient("Lorena", 4),
    new Patient("Fabricio", 2),
    new Patient("Esteban", 3)



/*
function PriorityQueue() {
    let items = [];
    function QueueElement (element, priority){
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority){
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i=0; i<items.length; i++){
            if (queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement);
                added = true;
                break; // {4}
            }
        }
        if (!added){
            items.push(queueElement); //{5}
        }
    };
    this.dequeue= function (element, priority) {
        var priority = this.items[0].priority;
        for (var i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority,1);
    }
    this.quitar = function () {
        return this.items[1];
    }
    this.print = function(){
        for (let i=0; i<items.length; i++){
            console.log(`${items[i].element} -
            ${items[i].priority}`);
        }
    }
}
let prioriti= new PriorityQueue();
prioriti.enqueue("1122",1)
prioriti.enqueue("agilo", 2)
prioriti.enqueue(3,3)
prioriti.enqueue("12",1)
prioriti.print()
prioriti.dequeue()
prioriti.print()

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

 */