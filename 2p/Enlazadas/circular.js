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
/*
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
 