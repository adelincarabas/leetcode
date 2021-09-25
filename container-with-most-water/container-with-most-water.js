/**
 * @param {number[]} height
 * @return {number}
 */
//start
var maxArea = function(height) {
  let p1 = 0;
  let found = 0;
  let p2 = height.length-1;
  while(p1 < p2) {
     const maxValue = Math.min(height[p1],height[p2]) * (p2-p1);
     found = Math.max(found,maxValue)
  if(Math.min(height[p1],height[p2]) == height[p1]){
    p1++;
  }else {
    p2--;
  }
  }
  return found;
};
