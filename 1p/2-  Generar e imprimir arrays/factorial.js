var x=10
var cont=0;
var z=1;
let num=[];
while(cont<10){
    z=z*(cont+1);
    num[cont]=((cont+1)+(".- ")+z);
    cont ++;
}
for(let i=0; i<10; i++){
    console.log(num[i]);
}