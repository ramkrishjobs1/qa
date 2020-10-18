'use strict';



function minimumBribes(q) {
    //q = [ 1, 2, 5, 3, 7, 8, 4, 6 ] ;
    let array = [ 1, 2, 5, 3, 7, 8, 6, 4 ];
    let bribes = 0
    for(let i = 0; i<array.length;i++){
      if (array[i] - (i + 1) > 2) return "Too chaotic"
      console.log('-------');
      for (let j = 0; j < i; j++){
        console.log(array[j] +'..>..'+array[i]);
        if (array[j] > array[i]) { console.log('bribed'); bribes++}
      }
    }
    return bribes;
}

console.log(minimumBribes());

//0 0 2 -1 2 2 -1 -4

1 2 3 4 5
2 1 5 3 4

1 -1 2 -1 -1
