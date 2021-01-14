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

/*console.log(n.ultimo())
console.log(n.dequeue());
console.log(n.primero())


function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    //this.empty = empty;
}
function enqueue(p) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
            items.splice(i, 0, queueElement);
            added = true;
            break; // {4}
        }
    }
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}
var ed = new Queue();

var p = new Patient("Smith",1);
ed.enqueue(p);
p = new Patient("Jones", 3);
ed.enqueue(p);
p = new Patient("Fehrenbach", 3);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 5);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log(ed.toString());
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// another round

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString())


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
    this.quitar = function () {
        return this.items[1];
    }
    this.print = function(){
        for (let i=0; i<items.length; i++){
            console.log({items[i].element} +"-"+ {items[i].priority});
        }
    };
}
let prioriti= new PriorityQueue();
prioriti.enqueue("1122",1)
prioriti.enqueue("agilo", 2)
prioriti.enqueue(3,3)
prioriti.enqueue("12",1)
prioriti.print()
//prioriti.quitar()
prioriti.print()

 */
