class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const clean = s.trim().split('').reverse()
        let result = 0
        for(let i = 0; i < clean.length; i++){
            if(clean[i] === " "){
                return result
            } else if (clean[i] !== " ") {
                result++
            }
        }
    return result 
    }
}