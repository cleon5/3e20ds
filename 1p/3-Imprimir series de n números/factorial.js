var b;
var x;
var cont=0;
var z=1;
console.log("Escribe que factorial quieres ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        x=n;
        while((cont)<x){
            z=z*(cont+1);
            
            cont ++;
        }
        console.log((cont) + (".-" )+z);
    process.exit();
});

