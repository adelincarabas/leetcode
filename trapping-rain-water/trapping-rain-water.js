/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0, right = height.length-1, leftMax = 0, rightMax = 0, total = 0;
  while(left < right) {
    if(height[left] <= height[right]) {
      if(height[left] >= leftMax) {
        leftMax = height[left];
      }else {
        total += leftMax - height[left];
      }
      left++;
    }else {
      if(height[right] >= rightMax) {
        rightMax = height[right];
      }else {
        total += rightMax - height[right];
      }
      right--;
    }
  }
  return total;
};