
class Nodo{
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
        this.prev=null;
    }
}
class Enlazada{
    constructor() {
        this.inicio=null;
        this.tamaño=0;
    }
    AgregarDato(dato){
        let nuevoNodo= new Nodo(dato,null);
        if (!this.inicio){
            this.inicio=nuevoNodo;
            nuevoNodo.prev=nuevoNodo;

        }
        else{
            let actual=this.inicio;
            let tail= this.inicio.prev;
            actual.next=nuevoNodo;
            nuevoNodo.prev=tail;
            nuevoNodo.next=this.inicio
            this.inicio.prev=nuevoNodo
        }
        this.tamaño ++;
    }
    insertar(dato, ind){
        if (ind <0 || ind > this.tamaño){
            return null
        }
        const  nuevoNodo=new Nodo(dato);
        let actual= this.inicio;
        let prev;
        if (ind===0){
            nuevoNodo.next=actual;
            this.inicio=nuevoNodo;
        }
        else{
            for (let i=0; i<ind; i++){
                prev=actual;
                actual= actual.next;
            }
            nuevoNodo.next=actual;
            prev.next=nuevoNodo
            nevoNodo.next=this.inicio;
        }
        this.tamaño++;
    }
    imp(){
        let actual=this.inicio;
        let resultado="";
        if(!this.tamaño){
            return null
        }
        for(let i=0;i<this.tamaño; i++){
            resultado=resultado + actual.dato + "->";
            actual=actual.next;
        }
        return resultado
    }
    remove(dato){
        let actual= this.inicio;
        let prev=null;
        while(actual !=null) {
            if (actual.dato === dato) {
                if (!prev) {
                    this.inicio = actual.next;
                } else {
                    prev.next = actual.next;
                }
                this.tamaño--;
                return actual.dato;
            }
            prev = actual;
            actual = actual.next;
        }
        return null;
    }

}
let lista = new Enlazada()
lista.AgregarDato(10);
lista.AgregarDato("Algo");
lista.AgregarDato(1);
lista.AgregarDato(31);
//lista.insertar(3,1)
console.log(lista.imp())

console.log(lista.imp())



/*
class Elemento {
    siguiente = null;
    valor = null;

    constructor(valor) {
        this.valor = valor;
    }
}
class ListaEnlazada {
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
        //this.ultimo.next = this.primero
    }
    mostrar = (valor) => {
        return this.primero

}
}
const lista = new ListaEnlazada();

lista.agregar('a');
lista.agregar('b');
lista.agregar('s');
console.log(lista);
//console.log(lista.mostrar())

class Node{
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class circular{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addtohead(){
        const newNodo= new Node(data, this.head, null)
        if this.head
    }
    print(){
        let current = this.tail;
        let result = "";
        while(current){
            result+=current.data+"<<>>"
            current = current.prev
        }
    }
}

*/
 