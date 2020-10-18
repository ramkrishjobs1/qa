'use strict';


// Complete the checkMagazine function below.
function makeAnagram(a, b) {
  let aArr = Array.from(a);
  let bArr = Array.from(b);
//  let aSet = new Set(aArr);
//  let bSet = new Set(bArr);
  let countMap = new Map();
  for (let av of aArr) {
    let data = countMap[av] || {};
    data.aCount = (data.aCount || 0) + 1;
    data.bCount = (data.bCount || 0);
    countMap[av] = data;
  }
  for (let bv of bArr) {
    let data = countMap[bv] || {};
    data.aCount = (data.aCount || 0);
    data.bCount = (data.bCount || 0) + 1;
    countMap[bv] = data;
  }  
  let deleteCount = 0;
  for (let l in countMap) {
     let v = countMap[l];
     if (v.aCount ===0 || v.bCount === 0) {
      deleteCount = deleteCount + v.aCount + v.bCount;
     } else {
       deleteCount = deleteCount + v.aCount < v.bCount ? v.bCount - v.aCount : v.aCount - v.bCount
     }
  }
  console.log(deleteCount);
  return deleteCount;
}

console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));