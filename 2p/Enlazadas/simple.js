class Nodo{
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
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
        }
        else{
            let actual=this.inicio;
            while (actual.next){
                actual=actual.next;
            }
            actual.next=nuevoNodo;
        }
        this.tamaño ++;
    }

}
let lista = new Enlazada()
console.log(lista);
lista.AgregarDato(10);
//lista.AgregarDato("Algo");
lista.AgregarDato(1);
lista.AgregarDato(31);
console.log(lista);

