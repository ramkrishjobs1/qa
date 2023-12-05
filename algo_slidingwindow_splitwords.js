/*
This problem was asked by Amazon.

Given a string s and an integer k, break up the string into multiple lines such 
that each line has a length of k or less. You must break it up so that words don't 
break across lines. Each line has to have the maximum possible amount of words. 
If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that 
there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" 
and k = 10, you should return:
["the quick", "brown fox", "jumps over", "the lazy", "dog"]. 
No string in the list has a length of more than 10.
*/

function findWordsByLength(str, k) {
    let resultStr = [];
    let lastSpaceIndex = -1;
    let cnt = -1;
    let resultArr = [];
    for (i in str) {
        if (str[i] == " ") {
            if (resultStr.length == k) {
                resultArr.push(resultStr);
                resultStr = [];
            } else if (resultStr.length < k) {
                lastSpaceIndex = resultStr.length;
                resultStr.push(str[i]);
            } else {
                //substring till lastspceindex
                //add it to result arr
                resultArr.push(resultStr.join().subString(0,lastSpaceIndex));
                resultStr=resultStr.join().subString(lastSpaceIndex+1).split('');
                lastSpaceIndex = -1;
                //
            }
        } else {
            resultStr.push(str[i]);
        }
    }
    return resultArr;
}

//console.log(findWordsByLength("the quick brown fox jumps over the lazy dog",10));

function breakString(s, k) {
    const words = s.split(" ");
    const result = [];
    let currentLine = [];
  
    for (const word of words) {
      if (
        currentLine.reduce((acc, w) => acc + w.length, 0) +
          currentLine.length +
          word.length <=
        k
      ) {
        currentLine.push(word);
      } else {
        result.push(currentLine.join(" "));
        currentLine = [word];
      }
    }
  
    if (currentLine.length > 0) {
      result.push(currentLine.join(" "));
    }
  
    return result.length > 0 ? result : null;
  }
  
  // Example Usage:
  const inputString = "the quick brown fox jumps over the lazy dog";
  const maxLineLength = 10;
  const result = breakString(inputString, maxLineLength);
  console.log(result);