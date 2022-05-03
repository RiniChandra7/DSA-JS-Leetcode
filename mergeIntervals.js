/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0]-b[0]);
    
    let res = [];
    
    let cur = intervals.shift();
    
    while (intervals.length > 0) {
        let next = intervals.shift();
        
        if ((next[0] <= cur[1] && cur[1] <= next[1]) || (cur[0] <= next[1] && next[1] <= cur[1])) {
            let new_interval = [];
            new_interval[0] = Math.min(cur[0], next[0]);
            new_interval[1] = Math.max(cur[1], next[1]);
            cur = new_interval;
        }
        else {
            res.push(cur);
            cur = next;
        }
    }
    res.push(cur);
    
    return res;
};
