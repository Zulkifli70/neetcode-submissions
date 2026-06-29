class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let result = 0
        for(let i = 0; i < details.length; i++){
            const age = details[i].split('').splice(11, 2).join('')
            if(age > 60){
                result++
            }
        }
        return result
    }
}
