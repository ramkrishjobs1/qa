'use strict';


// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  const medianPrice = findMedian(expenditure,d);
  let calcAmount = medianPrice * 2;
  let notifyDays = 0;
  console.log(expenditure);
  for (let i=d; i<expenditure.length; i++) {
      let spending = expenditure[i];
      if (spending >= calcAmount) {
          notifyDays++;
      }
  }
  console.log(notifyDays);
  return notifyDays;
}

function findMedian(expOrig, d) {
  let exp = [...expOrig];
  exp.sort((a,b) => a - b);
  let medianPrice = 0;
  let medianIndex = Math.ceil(exp.length/2) - 1;
  if (exp.length%2 > 0) {
      medianPrice = exp[medianIndex];
  } else {
      medianPrice = (exp[medianIndex] + exp[medianPrice+1]) / 2
  }
  console.log(medianPrice);
  return medianPrice;
}
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  arr = [ 2, 3, 4, 1, 5 ];
  console.log(arr);
  var indexes = [...arr];
  arr.forEach((val,i)=> {
      indexes[i]=arr[i]-1;
  });
  console.log(indexes);
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

console.log(minimumSwaps());