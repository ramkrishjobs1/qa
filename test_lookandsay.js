function lookAndSay(n,maxLines) {
    let arr = [n];
    for(let i=0;i < maxLines;i++) {
        let hm = {};
        let output = [];
        //count
        for (let j=0; j< arr.length; j++){
            let a = arr[i];
            if (hm[a]) {
                hm[a] = hm[n]+1;
            } else {
                hm[a] = 1;
            }
        }
        console.log(hm);
        //process count    
        for(let k in hm) {
            console.log(k,hm[k]);
            console.log(Array(hm[k]+1).fill(k));
            output = output.concat(Array(hm[k]+1).fill(k));
        }
        arr = output;
        console.log(output);
    }
}

lookAndSay(1,10);