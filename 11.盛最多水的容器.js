/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i=0,j=height?.length-1;
    let ans = 0;
    while(i<j){
        let tem = (j-i)*Math.min(height[i],height[j]);
        if (tem>ans) {
            ans=tem;
        }
        if (height[i]<=height[j]){
            i++;
        }else {
            j--;
        }
    }
    return ans
    
};
// @lc code=end

const height = [1,8,6,2,5,4,8,3,7];
maxArea(height)