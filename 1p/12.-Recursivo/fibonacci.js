/*
function fibo(n){
    if (n<1)
        return 0
    if(n<3)
        return 1
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))*/
let array = [3,4,5.2,9,5.03,8,6]; //array de prueba
let x;
let c=0;
function funcion(){
    if(Number.isInteger(x)===true)
    {
        console.log("entero "+x)
        c++;   
    }
}
for (let i = 0; i<array.length; i++) {
    x=array[i]
    funcion(x)
}
console.log("El array tiene "+c+" enteros")


