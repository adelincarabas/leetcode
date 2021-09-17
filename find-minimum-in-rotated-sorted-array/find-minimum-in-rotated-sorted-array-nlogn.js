var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right) {
        let MidPoint = Math.floor((left+right)/2);
        if(nums[MidPoint] > nums[right])
            left = MidPoint + 1;
        else
            right = MidPoint;
    }
    return nums[left];
};
