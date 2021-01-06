let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];
let matriz2= [];
for(let i=0; i<3; i++) {
    matriz2[i]=[]
}

for (let i=0; i<matriz.length; i++){
    console.log(matriz[i]);
}

class Transponer{
    static traspon(){
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
Transponer.traspon()

/*
for (let i=0; i<matriz.length; i++){
    for (let j=0; j<matriz.length; j++)
        matriz[i][j]= matriz2[j][i];
}

let temp = new array[2][0]
var matrix[2][0] = new array[0][2]
matrix[0][2] = temp
const transpose = matrix => {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < row; column++) {
            let temp = matrix[row][column]
            matrix[row][column] = matrix[column][row]
            matrix[column][row] = temp
        }
    }
    return matrix;
}

let matriz = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];

let matrizT = new Array[];
for (let x=0; x < matriz.length; x++) {
    for (let y=0; y < matriz[x].length; y++) {
        matrizT[y][x] = matriz[x][y];
    }
}*/