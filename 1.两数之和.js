/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numbers = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numbers.has(diff)) {
            return [numbers.get(diff), i];
        }
        numbers.set(nums[i], i);
    }
};

twoSum([2, 7, 11, 15], 9);
// @lc code=end

