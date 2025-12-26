/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /**
     * 计数，然后只要有数字的计数大于数组长度的一半就返回该数字
     */
    const numsMap = new Map();
    for (const num of nums) {
       numsMap.set(num, (numsMap.get(num) || 0) + 1);
       if (numsMap.get(num) > nums.length / 2) {
           return num;
       }
    }

};
// @lc code=end

