var productExceptSelf = function (nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (
    var rightLocation = nums.length - 1;
    rightLocation >= 0;
    rightLocation--
  ) {
    output[rightLocation] = rightMult;
    rightMult *= nums[rightLocation];
  }
  for (var leftLocation = 0; leftLocation < nums.length; leftLocation++) {
    output[leftLocation] *= leftMult;
    leftMult *= nums[leftLocation];
  }
  return output;
};
