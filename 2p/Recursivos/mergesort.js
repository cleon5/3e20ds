const mergeSort = arr => {if (arr.length < 2) {
    return arr;
}
const middle = parseInt(arr.length / 2) | 0;
const left = arr.slice(0, middle);
const right = arr.slice(middle);
const merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
        result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
    }

    return [...result, ...left.slice(il), ...right.slice(ir)];
}

return merge(mergeSort(left), mergeSort(right));
}

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = mergeSort(arr);
console.log(arr);
console.log(result)

result; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]

/*
function merger(arr) {
    if (arr.length < 2) {
        return;
    }
    let mid = parseInt(arr.length / 2) | 0;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return sort(merger(left), merger(right));
}
    function sort(left, right){

        let result =[];
        let il = ir = 0;

        while (il < left.length && ir < right.length){
            result.push((left[il] < right[ir])? left[il++] : right[ir++])
        }
        return[...result, ...left.slice(il), ...right.slice(ir)];
    }


let arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
let res= merger(arr)
let result = sort(res)
console.log(arr)
console.log(result)



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

*/