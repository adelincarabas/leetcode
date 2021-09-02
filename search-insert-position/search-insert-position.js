/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   if ( nums == null || nums.length == 0 ) return -1;

    let largest = 0;
  for (let i = 0; i < nums.length; i++ )
  {
      if (nums[i] >= target) return i;
  }
  return nums.length;
};