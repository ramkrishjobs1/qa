function mergeIntervals(intervals, newInterval) {
    //is time slot available ?
    //Sort
    intervals.sort((a,b) => a[0]-b[0]);

    //Find if available
    let prevInterval = null;
    let found = false;
    console.log(newInterval)
    if ((newInterval[0] >= intervals[intervals.length - 1][0]) || (newInterval[1] <= intervals[0][0]) ) {
        found = true;
    } else {
        for(let interval of intervals) {
            if (prevInterval) {
                let isAvail = (newInterval[0] - prevInterval[1] >= 0) &&  (interval[0] - newInterval[1] >= 0);
                if (isAvail) {
                    found = true;
                    break;
                }
            }
            prevInterval = interval;
        }
    }
    console.log('found',found);
    return found;

}

mergeIntervals([[1,2],[5,6],[7,8]],[1,4]);

