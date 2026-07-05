class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = []
        for(let i = 0; i < nums1.length; i++){
            let target = nums1[i]
            let startIndex = nums2.indexOf(target)
            let found = false

            for(let j = startIndex + 1; j < nums2.length; j++){
                if(nums2[j] > target){
                    res.push(nums2[j])
                    found = true
                    break 
                }
            }
            if(!found){
            res.push(-1)
            }
        }
        return res
    }
}