var canJump = function (nums) {
  let lastGoodIndexPosition = nums.length - 1;

  for (let i = nums.length; i >= 0; i--) {
    if (i + nums[i] >= lastGoodIndexPosition) {
      lastGoodIndexPosition = i;
    }
  }
  return lastGoodIndexPosition == 0;
};
