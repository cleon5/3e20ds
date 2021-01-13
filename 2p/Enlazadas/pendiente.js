const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = parseInt(arr.length / 2) | 0;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const merge = (left, right) => {
        const result = [];
        let il = ir = 0;

        function repetir (left, right){
                result.push( (left[il] < right[ir]) ? left[il++] : right[ir++]);
            }
            if(il < left.length && ir < right.length) {
                repetir(left,right)
            }
        return [...result, ...left.slice(il), ...right.slice(ir)];
    }

    return merge(mergeSort(left), mergeSort(right));
}

const arr = [134,5,46,234,68,2,456,12,1,1];
const result = mergeSort(arr);
console.log(arr);
console.log(result)

