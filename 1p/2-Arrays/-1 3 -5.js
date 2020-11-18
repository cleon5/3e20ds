var x= 1
var c=0;
let num=[]
while(c<10){
    if (c%2==0){
    num[c]=-x;
    x=x+2;

    }
    else{
        num[c]=x
        x=x+2;
    }
    c++;
}  
for(var i=0; i<10;i++){
    console.log(num[i]);
}