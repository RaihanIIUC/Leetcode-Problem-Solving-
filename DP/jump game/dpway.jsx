var canJump = function (nums) {
    let procedToEnd = 0;
    for (let IfIcrossEnd = 0; IfIcrossEnd < nums.length; IfIcrossEnd++) {
      if (IfIcrossEnd > procedToEnd) return false;
      procedToEnd = Math.max(procedToEnd, countHelper + nums[IfIcrossEnd]);
    }
    return true;
};
