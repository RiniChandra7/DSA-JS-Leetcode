/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let cur_vol = 0, l = 0, r = height.length - 1;
  while(l<r){
    let leftPole = height[l], rightPole = height[r];
    cur_vol = Math.max(cur_vol, Math.min(height[l], height[r]) * (r - l));
    if(leftPole<=rightPole) l++;
    if(rightPole<=leftPole) r--;
  }
  return cur_vol; 
};
