/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0,j=0;
    let numMap =  new Map()
    while (j < nums.length && i < nums.length) {
        if (!numMap.has(nums[j]) || numMap.get(nums[j]) < 2) {
            nums[i] = nums [j];
            numMap.set(nums[j], (numMap.get(nums[j]) || 0) + 1);
            i++;
            j++;
        }else {
            j++
        }
    }
    return i;
};
// @lc code=end