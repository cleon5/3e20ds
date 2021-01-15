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

function Conversion(num, base) {
    let pila = new Pila();
    let num2=num;
    do {
        pila.agregar(num % base);
        num = Math.floor(num /= base);
    }
    while (num > 0);
    let converted = "";
    while (pila.tamaño() > 0) {
        converted += pila.quitar2();
    }
    console.log(num2 +" Convertido a base "+ base + " es "+converted);
    return converted;
}
Conversion(32,2)
Conversion(125,8)
Conversion(16,2)
Conversion(100,10)