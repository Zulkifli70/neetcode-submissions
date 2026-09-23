class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        let left = 0
        let right = clean.length - 1
        
        while(right > left){
            if(clean[left] === clean[right]){
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }
}
