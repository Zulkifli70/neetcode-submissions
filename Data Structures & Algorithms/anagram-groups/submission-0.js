class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map()

        for(let string of strs){
            const sorted = string.split('').sort().join('')
            if(group.has(sorted)){
                group.get(sorted).push(string)
            } else {
                group.set(sorted, [string])
            }
        }
        return Array.from(group.values())
    }
}
