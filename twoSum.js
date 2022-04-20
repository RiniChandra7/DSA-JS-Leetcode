/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const m = new Map();
    let i;
    let comp_ind;
    for (i = 0; i < nums.length; i++) {
        if (i > 0) {
            comp_ind = m.get(target - nums[i]);
            if (m.has(target - nums[i]) && comp_ind != i) {
                return [comp_ind, i];
            }   
        }
        
        m.set(nums[i], i);
    }
    
    return [];
};