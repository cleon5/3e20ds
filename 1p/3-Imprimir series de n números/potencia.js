var b;
var x=3; 
var y=3;
var c=0;
console.log("Escribe la base del numero");      
    b= process.openStdin();
    b.addListener("data", function(n){
        console.log("Escribe el exponente");
    d=process.openStdin();
    d.addListener("data", function(k){
        while(c<k){
            console.log("3^"+(c+1) +"- " +n);
            n=n*k;
            c++;
        }
    })
    process.exit();
});