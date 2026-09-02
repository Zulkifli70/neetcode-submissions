class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindromeRange(s, left, right) {
        while(left < right){
            if(s[left] !== s[right]){
                return false
            } else {
                right--
                left++
            }
        }
        return true
    }

    validPalindrome(s) {
    let left = 0, right = s.length - 1
  
    while (left < right) {
    if (s[left] !== s[right]) {
      return this.isPalindromeRange(s, left + 1, right) || this.isPalindromeRange(s, left, right - 1)
    }
    left++
    right--
    }
  
  return true
}
}
