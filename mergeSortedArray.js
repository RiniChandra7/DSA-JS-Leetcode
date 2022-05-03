/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1;
    let j = nums2.length - 1;
        
    let l1 = nums1.length;
    
    if (m > 0 && n > 0) {
        i = 0;
        j = 0;
        let res = [];
        
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                nums1.push(nums1[i]);
                i++;
            }
            else {
                nums1.push(nums2[j]);
                j++;
            }
        }
        
        if (i < m) {
            while (i < m) {
                nums1.push(nums1[i]);
                i++;
            }
        }
        
        if (j < n) {
            while (j < n) {
                nums1.push(nums2[j]);
                j++;
            }
        }
        
        nums1 = nums1.splice(0, l1);
    }
    else {
        let i = 0;
        
        if (m == 0 && n > 0) {
            let c = 0;
            while (c < l1) {
                nums1.shift();
                c++;
            }
            
            while (i < n) {
                nums1.push(nums2[i]);
                i++;
            }
        }
    }
};
