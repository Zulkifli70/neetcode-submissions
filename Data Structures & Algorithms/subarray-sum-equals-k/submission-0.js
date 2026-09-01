class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let seen = new Map([[0, 1]])
        let prefixSum = 0
        let count = 0

        for(let i= 0; i < nums.length; i++){
            prefixSum += nums[i]

            if(seen.has(prefixSum - k)){
                count += seen.get(prefixSum - k)
            }

            
            seen.set(prefixSum, (seen.get(prefixSum) || 0) + 1)
        }

        return count
    }
}
