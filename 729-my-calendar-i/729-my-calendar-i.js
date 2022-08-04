
var MyCalendar = function() {
    this.intervals = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let l = this.intervals.length;
    /*console.log(this.intervals);
    console.log("beg "+this.intervals[0]);
    console.log("start, end " + start + "," + end);*/
    
    if (l === 0 || this.intervals[l - 1][1] <= start) {
        this.intervals.push([start, end]);
        return true;
    }
    else if (this.intervals[0][0] >= end) {
        //console.log("shifted")
        this.intervals.unshift([start, end]);
        return true;
    }
    else {
        for (let i = 0; i < l - 1; i++) {
            if (this.intervals[i][1] <= start && 
                this.intervals[i + 1][0] >= end) {
                this.intervals.splice(i + 1, 0, [start, end]);
                return true;
            }
        }
    }
    
    return false;
    
    return false;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */