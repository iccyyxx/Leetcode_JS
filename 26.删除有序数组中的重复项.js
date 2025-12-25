/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
     * 解题思路：使用双指针法，一个指针i指向不重复数组的最后一个位置，另一个指针j用于遍历数组
     */
    let i = 0;j = 0;
    let numMap =  new Map()
    while (j < nums.length && i < nums.length) {
        if (!numMap.has(nums[j])) {
            numMap.set(nums[j], true);
            nums[i] = nums[j];
            i++;
            j++
        }
        else {
            j++;
        }
    }
    return i;
    
};
// @lc code=end

removeDuplicates([0,0,1,1,1,2,2,3,3,4])