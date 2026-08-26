class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0, windowSum = 0, minLen = Infinity

        for(let right = 0; right < nums.length; right++){
            windowSum += nums[right]

            while(windowSum >= target){
                minLen = Math.min(minLen, right - left + 1)
                windowSum -= nums[left]
                left++
            }
        }
        return minLen === Infinity ? 0 : minLen
    }
}
