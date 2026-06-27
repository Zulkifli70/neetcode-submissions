class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const output = [nums]
        for(const num of nums){
          output.push(num)
        }
        return output
    }
}
