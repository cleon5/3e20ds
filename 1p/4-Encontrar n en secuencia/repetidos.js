var S=[3,1,4,2,3];
var y=S[0];

for(let x = 0; x < S.length; x++){
    for(let z = x + 1; 1<S.length; z++){
        if(S[x] == S[z]){
            console.log("El numero repetido es "+S[z]);
            process.exit();
        }
    }
}