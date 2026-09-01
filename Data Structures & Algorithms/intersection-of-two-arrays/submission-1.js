class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        nums1.sort((a,b) => a-b)
        nums2.sort((a,b) => a-b)
        let right = 0, left = 0, res = new Set()

        while(left < nums1.length && right < nums2.length){
            if(nums1[left] < nums2[right]){
                left++
            } else if(nums1[left] === nums2[right]){
                res.add(nums1[left])
                left++
                right++
            } else if(nums1[left] > nums2[right]){
                right++
            }
        }
        return [...res]
    }
}
