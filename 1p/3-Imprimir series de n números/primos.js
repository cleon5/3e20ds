var c=0
var i =2;
console.log("Veces que se generan numeros primos");      
    b= process.openStdin();
    b.addListener("data", function(n){
        while(c<n){
            var primo = 1;
            var contador = 2;
            while(contador <= i/2 && primo) {
                if (i % contador === 0) {
                    primo = 0;
                    i++
                    c--
                }
                contador++;
            }
            if( primo ) {
                console.log(i );
                i++
            }
            c++;
        }
    process.exit();
});