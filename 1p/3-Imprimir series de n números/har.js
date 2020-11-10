var x=1;
var c=0;

console.log("Numero de veces de imprimir ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        while(c<n){
            console.log(x);
            x=x/2;
            c++;
            
        }
        process.exit();
});