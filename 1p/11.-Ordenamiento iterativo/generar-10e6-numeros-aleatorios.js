let array=new Array(1000000);                          
let c=0;
console.time();
for(let i=1;i<=1000000;i++){  
    array[i]=Math.round(Math.random()*(1-1000000)+100000);                          
const bubbleSort = arr => {
    const l = arr.length;
    for (let i=0; i<l; i++) {
      for (let j=0; j<l-1-i; j++) {
        if (arr[j]>arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          c++;
        }
      }
    }
    return arr;
  };
  const result=bubbleSort(array);
for(let i=1;i<=1000000;i++){
    console.log(i+"- "+result[i]);   
}
   
console.timeEnd()
}