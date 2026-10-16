class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums)

        if(nums.length !== [...unique].length){
            return true
        }
        
        return false 
    }
}
