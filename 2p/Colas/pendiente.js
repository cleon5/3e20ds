class Cola{
    constructor() {
        this.algo=[]
        //this.nums=[];
    }
    agregar(element){
        this.algo.push(element);
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
    vacio() {
        if (this.algo.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    ordenar(nums, n, digito) {
        for (let i = 0; i < n; i++) {
            if (digito == 1) {
                this.algo[nums[i] % 10].agregar(nums[i]);
            } else {
                this.algo[Math.floor(nums[i]) / 10].agregar(nums[i]);
            }
        }
    }
    collect() {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
            while (this.algo.length==0) {
                nums[i++] = this.algo[digit].dequeue();
            }
        }
    }

    mostrar(){
        return this.algo;
    }
    mostrar2(){
        return nums;
    }
}
let nums=[]
let x= new Cola();
x.agregar(43)
x.agregar(44)
x.agregar(54)
x.agregar(66)
x.agregar(12)
x.agregar(13);
x.ordenar(nums, 10, 1)
x.collect(nums)
console.log(x.mostrar())
console.log(x.mostrar2())