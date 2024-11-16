/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

*/

/*
- talk thru problem
    2 what is anagram , lowercase only a <> A
    example
        'acbacccbaa' 'abc'



    let result = []

    create pattern hashmap

    checkAanagram (str, patternHashmap) {
        check all letters are in the pattern
    }


    k = pattern.size -1
    runningStr = ''
    loolstring(i)
        if (i <= k) {
            append to runningString
        } else {
            runningStr = remove the first one add at current index char at the end
        }

        if (i >= k) {
            if (checkAnagram) {
                result.push(i - k -1)
            }
        }

*/

function findAnagrams1(str, pattern) {
    let result = [];

    let k = pattern.length -1;
    let runningStr = "";
    for (let i in str) {
        if (i <= k) {
            runningStr += str[i];
        } else {
            runningStr = runningStr.substring(1);
            runningStr += str[i];
        }
        if (i >= k) {
            if (checkAnagram(runningStr.split(''), pattern.split(''))) {
                result.push(i - k);
            }
        }
    }
    return result;
}


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

console.log(findAnagrams1('acbdddbcar','abc'));