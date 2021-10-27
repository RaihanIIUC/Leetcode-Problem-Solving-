var maxArea = function (heights) {
  let boy = 0,
    girl  = heights.length - 1;
  let ExpectedIdleTank = 0;
  while (boy < girl) {
    let TestgaziTank = (girl - boy) * Math.min(heights[girl], heights[boy]);
    ExpectedIdleTank = Math.max(ExpectedIdleTank, TestgaziTank);
    heights[boy] < heights[girl] ? boy++ : girl--;
  }
  return ExpectedIdleTank;
 
};
