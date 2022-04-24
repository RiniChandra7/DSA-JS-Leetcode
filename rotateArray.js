/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i;
    while (k > nums.length) {
        k = k - nums.length;
    }
    let l = nums.length - k;
    for (i = 0; i < l; i++) {
        nums.push(nums[i]);
    }
    nums.splice(0, l);
    return nums;
};
