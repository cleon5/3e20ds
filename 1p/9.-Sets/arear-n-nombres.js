var name = new Set();
var Silabas=['a','e','i','o','u'];
var Consonantes=['b','c','d','f','g','j','k','l','m','p','r','v'];

for(let s=0;s<=9;s++){
    var name_aux='';
    
    for(let s=0;s<=Math.random()*2;s++){
        name_aux+=(Consonantes[Math.floor(Math.random()*Consonantes.length)]);
        name_aux+=(Silabas[Math.floor(Math.random()*Silabas.length)]);
        name_aux+=(Consonantes[Math.floor(Math.random()*Consonantes.length)]);
        name_aux+=(Silabas[Math.floor(Math.random()*Silabas.length)]);
    }
    
    name.add(name_aux);

}   
console.log(name);    