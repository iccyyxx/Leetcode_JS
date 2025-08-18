/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    let ans = 1;
    let numsObj = {}
    // 将数组变成map，方便查找
    nums.forEach(num => numsObj[num] = 1)
    Object.keys(numsObj).forEach(item => {
        let num = +item
        let temAns = 1;
        let addCount = 0;
        // 寻找相邻数字，若找到直接剔除，减少遍历时间
        while (numsObj[num + addCount + 1]) {
            addCount++;
            delete numsObj[num + addCount]
        }
        let subCount = 0;
        while (numsObj[num - subCount - 1]) {
            delete numsObj[num - subCount - 1]
            subCount++
        }
        temAns = temAns + addCount + subCount
        ans = ans < temAns ? temAns : ans
    })
    return ans;
};
// @lc code=end
const nums = [1, 0, 1, 2]
console.log(longestConsecutive(nums));
