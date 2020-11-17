var name = new Map();
var silaba=['a','e','i','o','u'];
var cons=['b','c','d','f','g','j','k','l','m','p','r','v'];
var c=1;
var n =5;
while(c<n){
    var nombre='';
    for(let s=0;s<=Math.random()*2;s++){
        nombre+=(cons[Math.floor(Math.random()*cons.length)]);
        nombre+=(silaba[Math.floor(Math.random()*silaba.length)]);
        nombre+=(cons[Math.floor(Math.random()*cons.length)]);
        nombre+=(silaba[Math.floor(Math.random()*silaba.length)]);
    }
    name.set(c,nombre);
    c++;
}   
console.log(name);      