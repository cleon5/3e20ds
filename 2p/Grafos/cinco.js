class Grafo{
    constructor(o) {
        this.n=o
    }
    addVertex(v){
        this.n[v]=0
    }
    addEdge(e,f){
        if(typeof(this.n[e]==="number")){
            this.n[e]=[]
        }
        this.n[e][f]=1
    }
    fill(){
        for(let i=0; i<this.n.length; i++) {
            for(let j=0; j<this.n.length; j++) {
                if(this.n[i][j]===undefined)
                    this.n[i][j]=0;
            }
        }
    }
    toString(){
        let s ="\n"
        for(let i=0; i<this.n.length; i++) {
            s += "\n"
            for(let j=0; j<this.n.length; j++) {
                s+=this.n[i][j];
            }
        }
        return s;
    }
    imprimir(){
        console.log(this.toString())
    }
    list(x){
        let l= new Enlazada()
        let a=this.toString()
        l.AgregarDato("Lista de "+x)
        for(let i=0; i<a.length; i++){
            if (this.n[x][i]==1){
                l.AgregarDato(i)
            }
            else{
                console.log(a)
            }
        }
        console.log(l.imp())
    }
}
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


}


let g= new Grafo([])
g.addVertex(0)
g.addVertex(1)
g.addVertex(2)

g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,2)
g.addEdge(2,0)

g.fill()
g.imprimir()

g.list(3)
