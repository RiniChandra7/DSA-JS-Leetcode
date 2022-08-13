/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let ans = [];
    let substrLength = words[0].length * words.length;
    
    let st = new Map();
    let i = 0;
    while (i < words.length) {
        if (st.has(words[i])){
            st.set(words[i], st.get(words[i])+ 1);
        }
        else {
            st.set(words[i], 1);
        }
        i++;
    }
    let set = st;
    
    let str = s;
    i = 0;
    while (i < str.length) {
        let sub = str.substring(i, i + substrLength);
        //console.log("Sub "+sub);
        st = new Map(set);
        //console.log(st);
        
        let j = 0;
        let flag = 0;
        let wordCount = 0;
        //t wdAr = [];
        while (j < substrLength) {
            let wd = sub.substring(j, j + words[0].length);
            //console.log("wd "+wd);
            if (!words.includes(wd)) {
                flag = 1;
                break;
            }
            if (st.has(wd) && st.get(wd) > 0) {
                //console.log(st);
                st.set(wd, st.get(wd) - 1);
                wordCount++;
            }
            j += words[0].length;
        }
        
        if (flag === 0 && wordCount === words.length) {
            ans.push(i);
        }
        //st = set;
        //i += words[0].length;
        i++;
    }
    
    return ans;
};