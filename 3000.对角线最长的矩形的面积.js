/*
 * @lc app=leetcode.cn id=3000 lang=javascript
 *
 * [3000] 对角线最长的矩形的面积
 */

// @lc code=start
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    /**
     * 没什么特殊的，在对比对角线的时候可以不需要开方进行比较。
     */
    let ans = 0;
    let diagonalSquare = 0;
    dimensions.forEach(([a, b]) => {
        let temDiagonalSquare = a * a + b * b
        if (temDiagonalSquare > diagonalSquare) {
            diagonalSquare = temDiagonalSquare;
            ans = a * b
        } else if (temDiagonalSquare == diagonalSquare) {
            ans = ans > a * b ? ans : a * b
        }
    })
    return ans
};
// @lc code=end


