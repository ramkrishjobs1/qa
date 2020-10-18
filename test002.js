'use strict';



   function findSmallestDivisor(s, t)
    {
        if (s.length%t.length === 0) {
            return findRepeat(t);
        } else {
            return -1;
        }
    }

    function findRepeat(s) {
        for(let i=1; i <= s.length/2; i++)
            let ss = s.substr(0, i).repeat(s.length/i);
            if(ss === s) {
                console.log('...'+s.substr(0, i))
                return true;
            }
        return false;
    };

console.log(findSmallestDivisor('bcdbcdbcdb','bcdbcd'));