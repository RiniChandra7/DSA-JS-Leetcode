/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = [];
    
    for (let i = 0; i < 3; i++) {
        count[i] = 0;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count[0]++;
        }
        else if (nums[i] == 1) {
            count[1]++;
        }
        else {
            count[2]++;
        }
    }
    
    count[1] += count[0];
    count[2] += count[1];
    
    let c = 0;
    while (c < count[0]) {
        nums[c] = 0;
        c++;
    }
    
    while (c < count[1]) {
        nums[c] = 1;
        c++;
    }
    
    while (c < count[2]) {
        nums[c] = 2;
        c++;
    }
};
