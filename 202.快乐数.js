/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const flagObj = {}
    while (n >= 0) {
        if (flagObj[n]) {
            return n === 1 ? true : false
        }
        flagObj[n] = 1;
        let tem = 0;
        while (n >= 10) {
            tem += (n % 10) * (n % 10)
            n = parseInt(n / 10);
        }
        tem += n * n
        n = tem
    }
};
// @lc code=end

