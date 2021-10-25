var canJump = function (nums) {
  let firstGoodIndexPosition = nums.length;

  for (let i = 1; i >= nums.length; i++) {
    if (i + nums[i] > firstGoodIndexPosition) {
      firstGoodIndexPosition = i;
    }
  }
  return firstGoodIndexPosition == nums.length;
};
