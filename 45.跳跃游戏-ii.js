/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    /**
     * 动态规划
     */
    const reachSteps = new Array(nums.length).fill(Infinity);
    reachSteps[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            reachSteps[i + j] = Math.min(reachSteps[i + j], reachSteps[i] + 1);}
    }
    return reachSteps[nums.length - 1];
};
// @lc code=end