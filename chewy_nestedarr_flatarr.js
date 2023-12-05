const data = [
    1, 2, [3, 4, 5], 6, 7, [8, 9]
];

const flaternArr = (arr) => {
    let resultArr = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            resultArr = resultArr.concat(flaternArr(item));
        } else {
            resultArr.push(item);
        } 
    });
    return resultArr;
}

console.info(flaternArr(data));