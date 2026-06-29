class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
            let result = ''
                for(let i = 0; i < strs[0].length; i++){
                    let currentChar = strs[0][i]
                    for(let j = 1; j < strs.length; j++){
                        if(i >= strs[j].length || strs[j][i] !== currentChar){
                            return result
                        }
                    }
                    result += currentChar
                }
            return result
    }
}
