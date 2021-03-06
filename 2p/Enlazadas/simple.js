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
            prev.next=nuevoNodo;
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
lista.insertar(3,1)
console.log(lista.imp())
lista.remove(3)
console.log(lista.imp())

