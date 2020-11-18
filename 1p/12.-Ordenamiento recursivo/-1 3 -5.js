
function x(n){
    if (n%2==0){
        res=((n-1)*2)+1
        return res;

    }
    else{
        res=((n-1)*2)+1
        res=-res;
        return res;
    }
}  
console.log(x(2));
console.log(x(3));
console.log(x(4));
console.log(x(5));
console.log(x(6));