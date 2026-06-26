class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arrayS = s.split('')
        const arrayT = t.split('')

        if(arrayS.length !== arrayT.length){
            return false
        }

        const charCount = new Map()

        for(const char of arrayS){
            if(charCount.has(char)){
                charCount.set(char, charCount.get(char) + 1)
            } else {
                charCount.set(char, 1)
            }
        }

        for(const char of arrayT){
            if(charCount.get(char) > 1){
                charCount.set(char, charCount.get(char) - 1)
            } else {
                charCount.delete(char)
            }
        }

        const result = [...charCount]

        if(result.length !== 0){
            return false
        } else {
            return true
        }
    }
}
