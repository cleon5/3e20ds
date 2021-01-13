class Node{
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class doble {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addtogead(data){
        const newNodo= new Node(data, this.head, null)
        if (this.head){
            newNodo.next=this.head;
            this.head.prev=newNodo;
            this.head = newNodo;
        }
        else{
            this.head= newNodo;
            this.tail= newNodo;
        }
        this.size++;
    }
    addtotail(data){
        const newNodo=new Node(data,null,this.tail)
        if(this.tail){
            newNodo.prev = this.tail;
            this.tail.next = newNodo;
            this.tail=newNodo
        }
        else{
            this.tail=newNodo;
            this.head=newNodo;
        }
        this.size++;
    }
    insertAct(data, ind) {
        if (ind < 0 || ind > this.size) {
            return null;
        }
        const newNodo=new Node(data, null,null);
        let current=this.head;
        let previo;
        if (ind===0){
            newNodo.next=current;
            current.prev=newNodo;
            this.head=newNodo;
        }
        else{
            for(let i=0;i<ind;i++){
                previo=current;
                current=current.next;
            }
            newNodo.next=current;
            newNodo.prev=previo;
            current.prev=newNodo;
            previo.next=newNodo;
        }
        this.size++;
    }
    removeFromHead(){
        if(this.head){
            return null;
        }
        let valorToReturn=this.head.data;
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            this.head.prev=null;
        }
        this.size--;
        return valorToReturn;
    }
    removeFromTail(){
        if(this.tail){
            return null;
        }
        let valorToReturn=this.tail.data;
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        }
        else{
            this.tail=this.tail.next;
            this.tail.next=null;
        }
        this.size--;
        return valorToReturn;
    }
    remove(data){
        let current=this.head;
        let previo=null;
        while(current!==null){
            if(current.data==data){
                if (!previo){
                    this.removeFromHead()
                }
                else if(!current.next){
                    this.removeFromTail()
                }
                else{
                    previo.next=current.next;
                    current.next.prev=previo;
                }
                this.size--;
                return current.data;
            }
            previo=current;
            current=current.next;
        }
        return null;
    }

    print() {
        let current = this.head
        let resul="";
        while(current){
            resul+=current.data+"<>";
            current=current.next;
        }
        return resul+= "X"
    }
    reversePrint(){
        let current = this.tail;
        let resul="";
        while (current){
            resul += current.data+"<->"
            current = current.prev;
        }
        return resul+="X";
    }
}

const  listadoble= new doble();
listadoble.addtogead(3);
listadoble.addtogead(4);
listadoble.addtotail(5);
console.log(listadoble.print())
listadoble.insertAct(42,2)
listadoble.insertAct(24,2)
console.log(listadoble.print())
console.log(listadoble.remove(5))
console.log(listadoble.reversePrint())



/*
class Elemento
{
    siguiente = null;
    valor = null;

    constructor(valor) {
        this.valor = valor;
    }
}
class ListaEnlazada
{
    primero = null;
    ultimo = null;

    agregar = (valor) => {

        const elemento = new Elemento(valor);

        if (!this.primero) {
            this.primero = elemento;
            this.ultimo = elemento;
            return;
        }

        this.ultimo.next = elemento;
        this.ultimo = elemento;
    }
}
const lista = new ListaEnlazada();

lista.agregar('a');
lista.agregar('b');
lista.agregar('s');

lista.agregar('vv');
lista.agregar('bw1');
lista.agregar('c');
console.log(lista);



function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function Node(element) {
    this.element = element;
    this.next = null;
}
function display() {
    var currNode = this.head;
    }}
function LList() {
    this.head = new Node("\n" +
        "    while (!(currNode.next == null)) {\n" +
        "        print(currNode.next.element);\n" +
        "        currNode = currNode.next;Head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}
// main program
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
*/