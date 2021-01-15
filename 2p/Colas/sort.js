class Cola{
    constructor() {
        this.cola=[]
        this.vec=[]
    }
    agregar(element){
        this.cola.push(element);
    }
    ordenar(){
        let ban;
        let aux;
        let c=0
        while(this.cola.length>0){
            this.vec[c]=this.cola.shift()
            c++
        }
        ban=false;
        while (!ban){
            ban=true;
            for(let i=0; i<3; i++){
                if(this.vec[i]>this.vec[i+1]){
                    aux=this.vec[i+1];
                    this.vec[i+1]=this.vec[i];
                    this.vec[i]= aux
                    ban=false
                }
            }
        }
        for (let j=0;j<4;j++){
            this.cola.push(this.vec[j])

        }
    }
    mostrar(){
        return this.cola;
    }
}

cola=new Cola()
cola.agregar(71)
cola.agregar(12)
cola.agregar(75)
cola.agregar(55)
console.log("Cola original")
console.log(cola.mostrar())
cola.ordenar()
console.log("Cola ordenada")
console.log(cola.mostrar())