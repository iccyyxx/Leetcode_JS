/*
 * @Description:
 *
 */
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /**
   * 解题思路
   * 将字符串进行排序后作为key存入map中，后匹配排序后的结果，若一致则为字母异位词，存入map中
   */
  const m = new Map();
  strs.forEach((str) => {
    const tem = str.split("").sort().join("");
    if (m.has(tem)) {
      m.get(tem).push(str);
    } else {
      m.set(tem, [str]);
    }
  });
  const res = [];
  m.forEach((item) => {
    res.push(item);
  });
  return res;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// @lc code=end
