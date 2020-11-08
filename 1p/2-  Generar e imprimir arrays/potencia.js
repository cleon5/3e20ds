var x=3; 
var y=3;
var c=0;
let num=[];
while(c<10){
    num[c]=x;
    x=x*y;
    c++;
}
for(let i=0; i<10; i++){
    console.log(num[i]);
}