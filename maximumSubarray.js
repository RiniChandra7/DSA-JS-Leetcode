/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    else {
        let prevSum = nums[0];
        let sum = 0;
        let ans;
        
        let i;
        for (i = 0; i < nums.length; i++) {
            sum += nums[i];
            prevSum = Math.max(sum, prevSum);
            if (sum < 0) {
                
                sum = 0;
            }
        }
        return prevSum;
    }
};