var x=0;
function pascal(n) {
    if (n==0) return [1];
    else
      var old = pascal(n-1);
      var newA = [];
      for (var i=0; i<old.length-1; i++)
        newA.push(old[i]+old[i+1]);
      return [1].concat(newA).concat([1]);
  }
  
  for (var i=0; i<5; i++){
    x=pascal(i);
  }

  console.log(x);
