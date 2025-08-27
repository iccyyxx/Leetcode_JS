/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let appearFlag = {};
  nums.forEach((num) => {
    if (!appearFlag[num]) {
      appearFlag[num] = true;
    } else {
      delete appearFlag[num];
    }
  });
  return Number(Object.keys(appearFlag)[0]);
};
// @lc code=end
const nums = [2, 2, 1];

console.log(singleNumber(nums));
