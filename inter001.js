/*
Given two array of characters, add them together like an addition problem and return them in a char array. 

['3', '5', '9'] ['1', 2', '8', '4'] = 1284 + 359 = 1643 = ['1', '6', '4', '3']
*/

function add(arr1, arr2) {
    var retVal = []
    //try {
        let no1 = parseInt(arr1.join(''));
        let no2 = parseInt(arr2.join(''));
        let total = no1 + no2;
        retVal = Array.from(''+total);
    //}catch(e) {
        //Handle exception
    //}
    return retVal;
}

console.log(add(['3', '5', '9'],['1', '2', '8', '4']));