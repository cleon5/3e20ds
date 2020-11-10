lucas=[1,3];
var c=2;

while(c<10){ 
        lucas[c]=lucas[c-1]+lucas[c-2];
        c++;        
    }
for(let i=0; i<10; i++){
    console.log(lucas[i]);
}
