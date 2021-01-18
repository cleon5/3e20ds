class Transponer{
    constructor(matriz,matriz2) {
        this.matriz=[]
        this.matriz2= [];
    }
     traspon(){
        for (let i=0; i<4; i++) {
            for (let j = 0; j < 3; j++) {
                matriz2[j][i] = matriz[i][j];
            }
        }
        console.log("Transpuesta")
        for (let i=0; i<matriz2.length; i++){
            console.log(matriz2[i]);
        }
    }
}
let matriz2=[]
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

for(let i=0; i<3; i++) {
    matriz2[i]=[]
}

for (let i=0; i<matriz.length; i++){
    console.log(matriz[i]);
}
let t=new Transponer(matriz,matriz2)
console.log(t.traspon())
