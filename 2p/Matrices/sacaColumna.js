class SacaColumna {
    constructor(matriz) {
        this.matriz=matriz
    }

    columna(x) {
        for (let i = 0; i < matriz.length ; i++){
            console.log(matriz[i][x]);
        }
        return
    }
}
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],];
let x = 0;
for (let i = 0; i < 4; i++) {
    console.log(matriz[i]);
}

let t=new SacaColumna(matriz)
console.log("columna 1")
console.log(t.columna(0));
console.log("columna 2")
console.log(t.columna(1));
console.log("columna 3")
console.log(t.columna(2));

