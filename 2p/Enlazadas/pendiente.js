function Cola(){
    this.dato=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.cadena=cadena;
    this.ordenar=ordenar;
    this.mostrar=mostrar;
    //this.distribuir=distribuir;
    this.recolectar=recolectar;
    this.vacio=vacio;
}
function enqueue(elemento){
    this.dato.push(elemento);
}
function dequeue(){
    return this.dato.shift();
}
function cadena(){
    let x="";
    for (let i=0; i<this.dato.length; i++){
        x +=this.dato[i]+"\n";
    }
    return x;
}
function vacio() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}
function ordenar(nums, cola, n, digito) {
    for (let i = 0; i < n; i++) {
        if (digito == 1) {
            cola(nums[i] % 10).enqueue(nums[i]);
        } else {
            cola[Math.floor(nums[i]) / 10].enqueue(nums[i]);
        }
    }
}
function recolectar(cola, nums){
    let x=0;
    for (let i=0; i<10;i++){
        while (!cola[i].vacio()){
            nums[x++]= cola[i].dequeue();
        }
    }
}

function mostrar(array){
    for (let i=0; i<array.length; i++){
        console.log(array[i]+"");
    }
}

let cola=[];
for (let i = 0; i < 10; i++){
    cola[i]= new Cola();
}
let nums=[]
for( let i=0; i<10; i++){
    nums[i]= Math.floor(Math.floor(Math.random()*101))
}

console.log("antes");
mostrar(nums);
ordenar(nums, cola, 10, 1)
recolectar(cola, nums);
ordenar(nums, cola, 10,10)
recolectar(cola, nums);
console.log("\n\n despues");
mostrar(nums);





/*
const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = parseInt(arr.length / 2) | 0;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const merge = (left, right) => {
        const result = [];
        let il = ir = 0;

        function repetir (left, right){
                result.push( (left[il] < right[ir]) ? left[il++] : right[ir++]);
            }
            if(il < left.length && ir < right.length) {
                repetir(left,right)
            }
        return [...result, ...left.slice(il), ...right.slice(ir)];
    }

    return merge(mergeSort(left), mergeSort(right));
}

const arr = [134,5,46,234,68,2,456,12,1,1];
const result = mergeSort(arr);
console.log(arr);
console.log(result)


 */
