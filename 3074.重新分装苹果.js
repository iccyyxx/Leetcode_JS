/*
 * @lc app=leetcode.cn id=3074 lang=javascript
 *
 * [3074] 重新分装苹果
 */

// @lc code=start
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    /**
     * 看起来像一个算数问题，只需要将苹果总数算出来，然后把箱子从大到小计算是否能装下所有苹果即可
     */
    let totalApples = apple.reduce((sum, num) => sum + num, 0);
    const sortedCapacity = capacity.sort((a, b) => b - a);
    let boxCount = 0;
    for (let i = 0; i < sortedCapacity.length; i++) {
        totalApples -= sortedCapacity[i];
        boxCount++;
        if (totalApples <= 0) {
            return boxCount;
        }
    }
    return boxCount;
};
// @lc code=end

