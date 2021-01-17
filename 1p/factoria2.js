var b;
console.log("Escribe que factorial quieres ");      
    b= process.openStdin();
    b.addListener("data", function(n){
        console.log(factorialRecursivo(n))
        
    process.exit();
});
function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}