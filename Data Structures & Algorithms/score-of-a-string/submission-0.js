class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        const arr = s.split('')
        let current = 0 

        for (let i = 0; i < arr.length - 1; i++){
         current += (Math.abs(arr[i].charCodeAt(0) - arr[i + 1].charCodeAt(0)))
        }
        return current
    }
}
