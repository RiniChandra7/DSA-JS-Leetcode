/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let len = arr.length;
    let mp = new Map();
    
    let i = 0;
    while (i < len) {
        if (!mp.has(arr[i])) {
            mp.set(arr[i], 1);
        }
        else {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        }
        i++;
    }
    
    let freq = Array.from(mp.values());
    if (mp.size == 1 || len == 2) {
        return 1;
    }
    else {
        let target = len / 2;
        let sum = 0;
        freq = freq.sort((a, b) => b - a);
        let i = 0;
        while (sum < target) {
            sum += freq[i];
            //console.log(sum);
            i++;
        }
        return i;
    }
    console.log(freq);
};