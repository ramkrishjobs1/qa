'use strict';

function findSmallestDivisor(s, t) {
    if (s.length%t.length === 0) {
        let rStr =  findRepeat(t);
        if (rStr) {
            if (isPatternStr(s,t)) {
                return rStr.length;
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

function findRepeat(s) {
    let repeatStr = s;
    for(let i=1; i <= s.length/2; i++) {
        let ss = s.substr(0, i).repeat(s.length/i);
        if(ss === s) {
            repeatStr = s.substr(0, i);
            break;
        }
    }
    return repeatStr;
};

function isPatternStr(whole, pattern) {
    let ss= pattern.repeat(whole.length/pattern.length);
    if (ss === whole) {
        return true;
    }
    return false;
}

console.log(findSmallestDivisor('abcabcabcabc','abcabc'));