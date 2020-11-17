var name = new Set();
var silaba=['a','e','i','o','u'];
var cons=['b','c','d','f','g','j','k','l','m','p','r','v'];
var c=0;
while(c<10){
    var nombre='';
    for(let s=0;s<=Math.random()*2;s++){
        nombre+=(cons[Math.floor(Math.random()*cons.length)]);
        nombre+=(silaba[Math.floor(Math.random()*silaba.length)]);
        nombre+=(cons[Math.floor(Math.random()*cons.length)]);
        nombre+=(silaba[Math.floor(Math.random()*silaba.length)]);
    }
    name.add(nombre);
    c++;
}   
console.log(name);      