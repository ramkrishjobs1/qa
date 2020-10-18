'use strict';


// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let retStr = 'YES';
    let wordArray = magazine.split(' ');
    let wordSet = new Set(wordArray);
    let noteWordArr = note.split(' ');
    for (let word of noteWordArr) {
      if (!wordSet.has(word)) {
        retStr = "NO";
        break;
      }
    }

    return retStr;
}

console.log(checkMagazine('two times three is not four','two times two is four'));