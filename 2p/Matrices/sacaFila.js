let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]];
let fila = [];

for (let i=0; i<matriz.length; i++){
    console.log(matriz[i]);
}
console.log("Que fila deseas imprimir");

b= process.openStdin();
b.addListener("data", function(n) {
    x = (parseInt(n))-1;
    console.log(SacaFila.fila());
    process.exit();
})
class SacaFila {
    static fila() {
        for (let i = 0; i < matriz[0][Array.length+1]; i++) {
            fila[i] = matriz[x][i];
        }
        return fila
    }
}
