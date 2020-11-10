var lucas3=0;
var c=1;
var lucas1=1;
var lucas2=3;
console.log(lucas1);
while(c<10) {
        console.log(lucas2);
        lucas3=lucas1+lucas2;
        lucas1 = lucas2;
        lucas2 = lucas3; 
    c++
}