var c=1;
console.log("Que seno quieres calcular ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        while(c<=n){
            c++;
        }
        console.log(Math.sin(c));
    process.exit();
});