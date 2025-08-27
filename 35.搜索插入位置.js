/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums[0] > target) return 0;
  else if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  let i = 0,
    j = nums.length - 1;
  while (true) {
    let mid = parseInt((i + j + 1) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      j = mid;
    } else if (nums[mid] < target) {
      i = mid;
    }
    if (i + 1 >= j) {
      return nums[i] >= target ? i : j;
    }
  }
};
// @lc code=end

let nums = [1, 3],
  target = 1;
console.log(searchInsert(nums, target));
