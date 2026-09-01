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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p === null && q === null){
            return true
        } else  if((p === null && q) || (p && q === null)){
            return false
        } else if(p.val === q.val){
            if(this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}
