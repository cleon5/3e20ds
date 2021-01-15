class Pila{
    constructor() {
        this.pila=[]
        this.top=0;
    }
    agregar(algo){
        this.pila[this.top++] = algo
    }
    quitar2(){
        return this.pila[--this.top]
    }
    tamaño(){
        return this.top;
    }
}
function isPalindrome(palabra) {
    let pila = new Pila();
    let control ="";
    for (let i = 0; i < palabra.length; i++) {
        pila.agregar(palabra[i]);
    }
    while (pila.tamaño() >0) {
        control += pila.quitar2();
    }
    console.log(control)
    if (palabra == control) {
        console.log(palabra + " Es un Palindromo");
    }
    else {
        console.log("No es palindromo")
    }
}
let palabra="casilla"
isPalindrome(palabra);
console.log("")
palabra="tenet"
isPalindrome(palabra);
console.log("")
palabra="atole"
isPalindrome(palabra);
console.log("")