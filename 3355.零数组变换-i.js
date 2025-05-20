/*
 * @lc app=leetcode.cn id=3355 lang=javascript
 *
 * [3355] 零数组变换 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
    const temNums = Array(nums.length + 1).fill(0);
    queries.forEach(([left, right]) => {
        temNums[left] += 1;
        temNums[right + 1] -= 1;
    })

    const opsCount = [];
    let count = 0
    for (const i of temNums) {
        count += i;
        opsCount.push(count)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > opsCount[i]) {
            return false
        }
    }
    return true
};
// @lc code=end
