/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let res = 0; // 记录结果
  var tree = {};

  //构建员工关系树
  employees.forEach((item) => {
    tree[item?.id] = item;
    item?.subordinates?.forEach((sub) => {
      tree[sub] = tree[sub] || {
        id: sub,
        importance: 0,
        subordinates: [],
      };
    });
  });

  /**
   * 深度优先搜索函数
   *
   * @param node 当前节点
   * @param isCount 是否计数
   * @param targetId 目标节点ID
   * @returns 返回总重要度
   */
  var dfs = (node, isCount, targetId) => {
    let temIsCount = isCount;
    if (node?.id === targetId || isCount) {
      res += node.importance;
      temIsCount = true;
    }
    node?.subordinates?.forEach((sub) => {
      dfs(tree[sub], temIsCount);
    });
    return res;
  };

  return dfs(tree[id], false, id);
};

// @lc code=end
