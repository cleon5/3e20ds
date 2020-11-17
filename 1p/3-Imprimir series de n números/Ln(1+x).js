var x;
var c=0;
var y=1;
console.log("Escribe cuantas iteracciones tendra ");      
    b= process.openStdin();
    b.addListener("data", function(n){
            for(var i=1;i<=n;i++){
                if(i%2==1){
                    console.log("X^"+i+"/"+i);
                }
                if(i%2==0){
                    console.log("-X^"+i+"/"+i);
                }
        }

    process.exit();
});