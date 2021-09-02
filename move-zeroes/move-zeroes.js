/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let b = 0;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        let temp = nums[i];
        nums[i] = nums[b];
        nums[b] = temp;
        b++;
      }
    }
    return nums;
};