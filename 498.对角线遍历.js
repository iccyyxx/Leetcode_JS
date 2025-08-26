/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length; // 行数
  const n = mat?.[0]?.length || 0; //列数
  let i = 0,
    j = 0;
  let ans = [];

  const outBorder = (x, y) => !(x >= 0 && x < m && y >= 0 && y < n);
  while (!outBorder(i, j)) {
    while ((i + j) % 2 === 0 && !outBorder(i, j)) {
      ans.push(mat[i][j]);
      if (i === 0 || j === n - 1) {
        if (j + 1 <= n - 1) {
          j++;
        } else {
          j = n - 1;
          i++;
        }
      } else {
        i--;
        j++;
      }
    }
    while ((i + j) % 2 && !outBorder(i, j)) {
      ans.push(mat[i][j]);
      if (j === 0 || i === m - 1) {
        if (i + 1 <= m - 1) {
          i++;
        } else {
          i = m - 1;
          j++;
        }
      } else {
        j--;
        i++;
      }
    }
  }
  return ans;
};
// @lc code=end
