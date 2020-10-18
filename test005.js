function icecreamParlor(m, arr) {
    var result = [];
    var costMap = new Map();
    for (var i = 1; i <= arr.length; i++) {
        var complement = m - arr[i-1];
        console.log("complement...."+ complement);
        console.dir("costMap...."+ costMap);
        if (costMap.has(complement)) {
            result.push(costMap.get(complement));
            result.push(i)
            break;
        } else {
            costMap.set(arr[i-1], i);
        }
    }
    return result;
}

icecreamParlor(4, [ 1, 4, 5, 3, 2 ]);
