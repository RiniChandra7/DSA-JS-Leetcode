/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mp = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900]
    ]);
    let sum = 0;
    
    for (let i = s.length - 1; i >= 0;) {
        let str = "";
        
        if (mp.has(str + s[i - 1] + s[i])) {
            console.log(str + s[i - 1] + s[i]);
            sum += mp.get(str + s[i - 1] + s[i]);
            i = i - 2;
        }
        else {
            console.log(str + s[i]);
            sum += mp.get(str + s[i]);
            i = i - 1;
        }
    }
    
    return sum;
};