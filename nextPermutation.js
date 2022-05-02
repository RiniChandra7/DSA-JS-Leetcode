/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    console.log(i);
    
    if (i >= 0) {
        let next_large = i;
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    
    console.log(nums)
    
    let start = i + 1;
    let end = nums.length - 1;
    
    while (start < end) {
        let t = nums[start];
        nums[start] = nums[end];
        nums[end] = t;
        
        start++;
        end--;
    }
    console.log(nums)
};
