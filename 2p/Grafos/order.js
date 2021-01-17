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
    removeEdge(i,j){
        this.n[i][j]=0
    }
    order(){
        let c=0
        let a=this.toString()
        for(let i=0;i< a.length;i++){
            for(let j=0; j<a.length; j++){
                if (a[i][j]==1)
                    c++
            }
        }
        console.log(c)
    }

}
let g= new Grafo([
    [0,1,0,0],
    [0,0,1,0],
    [1,0,0,1],
    [0,1,0,0],])
g.imprimir()
g.order()