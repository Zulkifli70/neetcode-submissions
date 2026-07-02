class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = new Map()
        const arr = s.split('')

        for(let string of arr){
            freq.set(string, (freq.get(string)|| 0) + 1)
        }
        const counts = [...freq.values()];
        const odd = counts.filter(count => count % 2 === 1)
        const even = counts.filter(count => count % 2 === 0)
        return Math.max(...odd) - Math.min(...even)
    }
}
