function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
    }
        if (right < arr.length) {
        mergeArrays(arr, left, left+step, right, arr.length);
    }
    step *= 2;
    }
   }
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
 }
    rightArr[rightArr.length-1] = Infinity; // a sentinel value
    leftArr[leftArr.length-1] = Infinity; // a sentinel value
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
 }
        else {
            arr[k] = rightArr[n];
            n++;
    }
 }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}
var nums = [6,10,1,9,4,8,2,7,3,5];
console.log(nums);
console.log();
mergeSort(nums);
console.log();
console.log(nums);


/*
var b;
var c=0;
console.log("Hasta que numero quieres ");      
    b= process.openStdin();
    b.addListener("data", function(n){
                regre(n)

    
    process.exit()
});

function fibo(c){
    if (c<1)
        return 0
    if(c<3)
        return 1
    return (fibo(c-1)+fibo(c-2))
}
function regre(n){ 
    if(c<n){
        console.log(fibo(c))
        c++;
        regre(n)
    }
}*/