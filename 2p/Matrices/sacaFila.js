class SacaFila {
    constructor(matriz) {
        this.matriz=[]
    }
    fila(x) {
        let fila=[]
        for (let i = 0; i < matriz[0][Array.length+1]; i++) {
            fila[i] = matriz[x][i];
        }
        return fila
    }
}

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]];
for (let i=0; i<matriz.length; i++){
    console.log(matriz[i]);
}

let x=new SacaFila(matriz)
console.log("Fila 1")
console.log(x.fila(0))
console.log("Fila 2")
console.log(x.fila(1))
console.log("Fila 4")
console.log(x.fila(3))