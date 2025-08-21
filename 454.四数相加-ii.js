/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    //先将四个数组分为两组，将和计算出来。
    let group1 = {}, group2 = {};
    nums1.forEach(num1 => {
        nums2.forEach(num2 => {
            const sum1 = num1 + num2;
            if (group1[sum1]) {
                group1[sum1]++
            } else {
                group1[sum1] = 1;
            }
        })
    })
    nums3.forEach(num1 => {
        nums4.forEach(num2 => {
            const sum = num1 + num2;
            if (group2[sum]) {
                group2[sum]++
            } else {
                group2[sum] = 1;
            }
        })
    })
    let ans = 0
    Object.keys(group1).forEach(num => {
        if (group2[-num]) {
            ans += group1[num] * group2[-num]
        }
    })
    return ans
};
// @lc code=end



