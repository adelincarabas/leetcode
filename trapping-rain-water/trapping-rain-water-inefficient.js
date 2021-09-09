const getTrappedRainwater = function(height) {
  let totalWater = 0;
  for(let p = 0; p < height.length; p++) {
    let leftP = p;
    let rightP = p;
    let maxL = 0;
    let maxR = 0;
    while(leftP >= 0) {
      maxL = Math.max(maxL,height[leftP]);
      leftP--;
    }
    while(rightP < height.length) {
      maxR = Math.max(maxR,height[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxL,maxR)-height[p];
    if(currentWater >= 0) {
      totalWater = totalWater + currentWater;
    }
  }
  return totalWater;
}
