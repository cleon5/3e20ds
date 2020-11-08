var x=0;
var c=0;
var y=1;
var z=0;
let num=[];
while(c<10){
    num[c]=x;
    z=y;
    y=x+y; 
    x=z;
    c++;
}
for(let i=0; i<10; i++){
    console.log(num[i]);
}