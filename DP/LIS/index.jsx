/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0;
    let dpSubSequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;
    for (let Pivot = 1; Pivot < nums.length; Pivot++) {
      for (let SearchEngine = 0; SearchEngine < j; SearchEngine++) {
        if (nums[Pivot] > nums[SearchEngine]) {
          dpSubSequence[Pivot] = Math.max(
            dpSubSequence[SearchEngine] + 1,
            dpSubSequence[Pivot]
          );
        }
      }
      maxSoFar = Math.max(maxSoFar, dpSubSequence[Pivot]);
    }
    return maxSoFar;
};
