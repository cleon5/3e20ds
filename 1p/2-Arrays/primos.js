var c=0
var i =2;
var num =[];
while(c<10){
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
     num[c]=i;  
      i++
  }
  c++;
}
for(let i=0; i<10; i++){
  console.log(num[i]);
}