var n=3
function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log(factorialRecursivo(2));
console.log(factorialRecursivo(3));
console.log(factorialRecursivo(4));
console.log(factorialRecursivo(5));