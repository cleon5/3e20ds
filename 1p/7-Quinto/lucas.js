var lucas3=0;
var c=2;
var lucas1=1;
var lucas2=3;
while(c<5) {
        lucas3=lucas1+lucas2;
        lucas1 = lucas2;
        lucas2 = lucas3; 
    c++
}
console.log(lucas2);