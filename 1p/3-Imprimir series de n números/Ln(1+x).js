var x;
var c=1;
var y=1;
console.log("Escribe cuantas iteracciones tendra ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        while(c<=n){
            x=y/c;
            console.log(x);
            c++;
        }

    process.exit();
});