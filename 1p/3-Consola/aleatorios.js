var ramdom;
var c=0;

console.log("Las veces a generar numeros aleatorios ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        console.log("escribe el valor maximo que puede tener ");
    d=process.openStdin();
    d.addListener("data", function(k){
        while(c<n){
            ramdom=Math.round(Math.random()*(1*k)*1);
            console.log(ramdom);
            c++;
        }
    })
    process.exit();
});