class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let myMap = new Map()

       for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]

        if(myMap.has(complement)){
            return [myMap.get(complement), i]
        } else {
            myMap.set(nums[i], i)
        }
       }
    }
}
