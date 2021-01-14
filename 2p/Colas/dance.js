class Cola{
    constructor() {
        this.algo=[];
    }
    agregar(element){
        this.algo.push(element)
        return this.algo;
    }
    quitar(){
        return this.algo.shift();
    }
    cadena() {
        let x = "";
        for (let i = 0; i < this.algo.length; i++) {
            x += this.dato[i] + "\n";
        }
    }
    size(){
        return this.algo.length;
    }
    primero(){
        return this.algo[0];
    }
    ordenar(nums, cola, n, digito) {
        for (let i = 0; i < n; i++) {
            if (digito == 1) {
                this.algo(nums[i] % 10).agregar(nums[i]);
            } else {
                this.algo[Math.floor(nums[i]) / 10].agregar(nums[i]);
            }
        }
    }
    mostrar(){
        return this.algo;
    }
}
let x= new Cola();
x.agregar(43)
x.agregar(44)
x.agregar(54)
x.agregar(66)
x.agregar(12)
x.agregar(13);
console.log(x.mostrar())


