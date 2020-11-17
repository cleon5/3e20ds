var names = new Map();
var Silabas=['a','e','i','o','u'];
var Consonantes=['b','c','d','f','g','j','k','l','m','p','r','v'];
for(let x=0;x<=9;x++){
    var names_aux='';
    for(let x=0;x<=Math.random()*2;x++){
        names_aux+=(Consonantes[Math.floor(Math.random()*Consonantes.length)]);
        names_aux+=(Silabas[Math.floor(Math.random()*Silabas.length)]);
        names_aux+=(Consonantes[Math.floor(Math.random()*Consonantes.length)]);
        names_aux+=(Silabas[Math.floor(Math.random()*Silabas.length)]);
    }
    names.set(x,names_aux);
}   
console.log(names);    