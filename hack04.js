'use strict';


// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  let notifyDays = 0;
  console.log(expenditure);
  let leftPointer = 0;
  for (let i=d; i<expenditure.length; i++) {
      const medianPrice = findMedian(expenditure.slice(leftPointer,i),d);
      leftPointer++;
      let spending = expenditure[i];
      if (spending >= medianPrice * 2) {
          notifyDays++;
      }
  }
  console.log(notifyDays);
  return notifyDays;
}

function findMedian(exp, d) {
  //let exp = expOrig.slice(0,d);
  console.log(exp);
  exp.sort((a,b) => a - b);
  console.log('sorted...'+exp);
  let medianPrice = 0;
  let medianIndex = Math.ceil(exp.length/2) - 1;
  if (exp.length%2 > 0) {
      medianPrice = exp[medianIndex];
  } else {
      medianPrice = (exp[medianIndex] + exp[medianIndex+1]) / 2
  }
  console.log(medianPrice);
  return medianPrice;
}


console.log(activityNotifications([ 10, 20, 30, 40, 50],3));