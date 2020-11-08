var c=0
var i =2;
while(c<5){
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
        i++
    }
    c++;
}
console.log(i-1)