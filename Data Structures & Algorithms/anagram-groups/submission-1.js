class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let seen = {}

      for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join('')

        if(!seen[key]){
            seen[key] = [strs[i]]
        } else {
            seen[key].push(strs[i])
        }
      }
      return Object.values(seen)
    }
}
