S = "capitalone"
c = 'a'
// assert freq_count(S, c, 0, 4) == 1
// assert freq_count(S, c, 0, 9) == 2

function freq_count(S, c, start, end) {
   let strLen = S.length;
   let count = 0;
   if (start >= 0 && end < strLen) {
       let strArr = Array.from(S);
       for (let i=start; i<= end; i++) {
           if (c === strArr[i]) {
               count++;
           }
       }
   }
   return count;
}

S_preprocessed = ...{
   'ca' : { c : 1; a: 1},
   'cap' : {c ,a , p}
}

function freq_count_fast(c, start, end) {
   S_preprocessed['ca'][c]    
}

console.log("..."+freq_count(S,c,0,9));