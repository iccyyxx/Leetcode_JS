/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tem = []
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            tem.push(nums1[i]);
            i++;
        } else if (nums1[i] > nums2[j]) { 
            tem.push(nums2[j]);
            j++;
        }
        else {
            tem.push(nums1[i]);
            tem.push(nums2[j]);
            i++;
            j++;
        }
    }
    while (i < m) {
        tem.push(nums1[i]);
        i++;
    }   
    while (j < n) {
        tem.push(nums2[j]);
        j++;
    }
    nums1.splice(0, nums1.length, ...tem);
    return nums1;
};
// @lc code=end

