/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /**
     * 解题思路：
     * 一方面是计数，计算一遇到的val的个数
     * 另一方面进行遍历，将非val的元素前移
     */
    // 等于val的数量
    let count = 0;
    for (let i = 0; i < nums.length;i++ ) {
        nums[i] =nums[i + count];
        if(nums[i] === val) {
            count++;
            i--
        }
    }
    return nums.length - count;
};
// @lc code=end