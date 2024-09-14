/*
 * @lc app=leetcode.cn id=2390 lang=javascript
 *
 * [2390] 从字符串中移除星号
 */

/**
 * 解题思路：双指针
 * 从后往前扫描删除，从而得到答案
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let visited = [];
  let i = s.length - 1,
    j = i - 1;
  let res = [];
  while (i >= 0) {
    if (j < 0) {
      visited[i] = 1;
      res.push(s[i]);
      i--;
    }
    while (j >= 0) {
      if (s[i] === "*") {
        //   符合删除条件
        if (s[j] !== "*") {
          // 成对删除
          visited[i] = 1;
          visited[j] = 1;
          // 找出还没遍历的位置
          while (visited[i]) {
            i--;
          }
          if (i == j - 1) {
            j--;
          }
        }
      } else {
        visited[i] = 1;
        res.push(s[i]);
        i--;
      }
      j--;
    }
  }
  return res.reverse().join("");
};

// @lc code=end

removeStars("erase*****");
