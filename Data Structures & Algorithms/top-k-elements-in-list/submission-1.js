class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCount = new Map()

        for(const num of nums){
             if(numCount.has(num)){
                numCount.set(num, numCount.get(num) + 1)
            } else {
                numCount.set(num, 1)
            }
        }
       const sort = [...numCount.entries()].sort((a, b) => b[1] - a[1])
       return sort.slice(0, k).map(entry => entry[0])
    }
}
