var checkAnagram = function(arr1,arr2) {
    let sArr1 = arr1.sort();
    let sArr2 = arr2.sort();
    return (sArr1.join('') === sArr2.join(''))
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //define check anagram method(str1,str2)
    let arr = s.split('');
    let k = p.length;
    //output array 
    let output = [];
    //start index = 0
    let startIndex = 0;
    //running array
    let runningArr = [];
    //loop string
    for (let i=0;i<arr.length;i++) {
        //add ch to running arry
        runningArr.push(arr[i]);
        //if index is > the length
        if (i >= k-1) {
            //check anagram
            if (checkAnagram(p.split(''),runningArr.join('').split(''))){
             //if anagram
                output.push(startIndex);
                //push startindex to output array
            }
            runningArr.splice(0,1);
            startIndex++;
            
            //remove start index from running array
        }
    }
    return output;
};

console.log(findAnagrams('acbdddbcar','abc'));