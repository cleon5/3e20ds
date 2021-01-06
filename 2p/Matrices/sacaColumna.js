let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]];
let colum = [];
let x=0;

for (let i=0; i<matriz.length; i++){
    console.log(matriz[i]);
}

class SacaColumna {
    static columna() {
        for (let i = 0; i < matriz.length; i++){
            console.log(matriz[i][x]);
        }
        return colum
    }
}
console.log("Que columna deseas imprimir");
b= process.openStdin();
b.addListener("data", function(n) {
    x = (parseInt(n))-1;
    console.log(SacaColumna.columna());
    process.exit();
})