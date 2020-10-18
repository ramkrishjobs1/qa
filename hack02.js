'use strict';



// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  arr = [ 2, 3, 4, 1, 5 ];
  console.log(arr);
  var indexes = [...arr];
  arr.forEach((val,i)=> {
      indexes[i]=arr[i]-1;
  });
  console.log('index...'+indexes);
  arr.forEach((val,i)=> {
    if (i == arr.length - 1) return arr;
    // [ 2, 3, 4, 1, 5 ]
    // [ 1, 2, 3, 0, 4 ]
    // [ 3, 2, 4, 1, 5 ]
      let swapIndex = indexes[i];
      if (arr[i] != swapIndex) {
          let swapVal = arr[swapIndex]; //3
          arr[swapIndex] = arr[i];
          arr[i] = swapVal;
      } 
      arr.forEach((val,i)=> {
        indexes[i]=arr[i]-1;
      });
  console.log(arr);
  console.log('------');
  });

  return arr;
}

function minimumSwaps2() {
  let arr = [ 2, 3, 4, 1, 5 ];
  console.log(arr);
  arr.forEach((val,i) => {
    console.log(val);
    if (val === i+1) {
      //do nothing
    } else {
      arr[i] = arr[val-1];
      arr[val-1] = val;
    }
    console.log("swap...."+arr);
  });
  return arr;
}
console.log(minimumSwaps());