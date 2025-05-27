/*
 * @lc app=leetcode.cn id=2894 lang=javascript
 *
 * [2894] 分类求和并作差
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const allSum = (1+n)*n /2;
    let i=0;
    let subSum = 0;
    while(i*m<=n) {
        subSum+=i*m;
        i++
    }
    return allSum - 2*subSum
};
// @lc code=end