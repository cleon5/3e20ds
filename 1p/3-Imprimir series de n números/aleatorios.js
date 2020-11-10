var b;
var ramdom;
var c=0;
console.log("Escribe las veces a genera numeros aleatorios");      
    b= process.openStdin();
    b.addListener("data", function(n){
    while(c<n){
    ramdom=Math.round(Math.random()*10);
    console.log(ramdom);
    c++;
}
    process.exit();
});
