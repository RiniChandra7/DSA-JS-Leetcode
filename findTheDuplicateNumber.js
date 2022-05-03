/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();
    
    let i = 0;
    
    while (i < nums.length) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        }
        else {
            return nums[i];
        }
        i++;
    }
};
