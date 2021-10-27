/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsVisited = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const complement = target - num;

    console.log(numsVisited[complement], null, num, null, complement);
    if (numsVisited[complement] !== undefined) {
      result.push(i);
      result.push(numsVisited[complement]);
    }

    numsVisited[num] = i;
  }

  return result;
};
