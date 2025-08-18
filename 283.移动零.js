/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    /**
     * 遍历数组，将0的下标存储起来，每逢非0则将其与前面的第一个0交换。
     */
    let zeroIndex = []
    nums.forEach((num,index) => {
        if (num === 0) {
            zeroIndex.push(index)
        }
        else {
            if (zeroIndex?.length > 0) {
                nums[zeroIndex.shift()] = num
                nums[index]=0;
                zeroIndex.push(index)
            }
        }
    })
    return nums;

};
// @lc code=end
const nums = [0];
console.log(moveZeroes(nums));

