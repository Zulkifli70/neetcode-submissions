class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, longest = 0, curr
        let mySet = new Set()

        for(let right = 0; right < s.length; right++){
            while(mySet.has(s[right])){
                mySet.delete(s[left])
                left++
            }  
            mySet.add(s[right])
            longest = Math.max(mySet.size, longest)
        }
        return longest
    }
}
