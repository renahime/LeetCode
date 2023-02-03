/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let queue = [root];
  const visited = new Set();

  while(queue.length){
      let curr = queue.shift();
      if(visited.has(k - curr.val))
      return true;

      visited.add(curr.val);

      if(curr.left)
      queue.push(curr.left);
      if(curr.right)
      queue.push(curr.right);
  }

  return false;
};
