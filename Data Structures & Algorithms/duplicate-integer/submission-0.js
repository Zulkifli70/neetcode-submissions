class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums)

        const uniqueArr = [...unique]

        if(nums.length === uniqueArr.length){
            return false
        } else {
            return true
        }
    }
}
