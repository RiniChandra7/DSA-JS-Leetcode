/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let mp = new Map();
    for (word in wordList) {
        mp.set(wordList[word], 1);
    }
    //console.log(mp);
    
    if (!mp.has(endWord)) {
        console.log("no end word");
        return [];
    }
    
    mp.delete(beginWord);
    
    let queue = [beginWord];
    let levels = [];
    let reached = 0;
    
    while (queue.length > 0 && reached == 0) {
        levels.push(queue.slice());
        let qlen = queue.length;
        for (let i = 0; i < qlen && reached == 0; i++) {
            let fromWord = queue.shift();
            for (let toWord of mp.keys()) {
                //console.log(toWord)
                if (isConnected(fromWord, toWord) == false) {
                    continue;
                }
                if (toWord == endWord) {
                    reached = 1;
                    break;
                }
                queue.push(toWord);
                mp.delete(toWord);
            }
        }
    }
    
    if (reached == 0) {
        console.log("Not reached");
        return [];
    }
    
    //console.log(levels);
    
    let res = [[endWord]];
    for (let lev = levels.length - 1; lev >= 0; lev--) {
        let reslen = res.length;
        for (let i = 0; i < reslen; i++) {
            let l = res.shift();
            let last = l[0];
            //console.log(l);
            for (let word of levels[lev]) {
                //console.log(word);
                if (!isConnected(last, word)) {
                    //console.log(word + " didn't match " +last);
                    continue;
                }
                //console.log(word + " matched " +last);
                res.push([word, ...l]);
            }
        }
    }
    
    return res;
};

let isConnected = function(str1, str2) {
    let c = 0;
    for (let i = 0; i < str1.length && c < 2; i++) {
        if (str1[i] !== str2[i]) c++;
    }
    return c == 1;
}