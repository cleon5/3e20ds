class Gexample{
    getloopy(){
        return [
            [1,1]
            [1,0]
        ]
    }
    cnew(){
        return []
    }
    undirected(){
        return[
            [0,1,0,0]
            [1,0,1,1]
            [0,1,0,1]
            [0,1,1,0]
        ]
    }
    directed(){
        return[
            [0,1,0,0]
            [0,0,1,0]
            [0,0,0,1]
            [0,1,0,0]
        ]
    }
}

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
    tamaño(){//order
        console.log(this.n.length)
    }
    removeEdge(x){
        this.n[x]=
    }


}
let s=new Gexample()
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

//g.removeEdge(0,2)
g.removeEdge(1)
g.fill()
g.imprimir()
g.tamaño()
