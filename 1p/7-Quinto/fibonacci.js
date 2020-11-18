var x=0;
var c=0;
var y=1;
var z=0;
while(c<5){
    z=y;
    y=x+y; 
    x=z;
    c++;
}
console.log("El quinto numero es "+x)