/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

    if (root === null) {
    return null
    }
  
    let leftSubtree = this.invertTree(root.left)
    let rightSubtree = this.invertTree(root.right)

    root.left = rightSubtree
    root.right = leftSubtree

    return root
    }
}
