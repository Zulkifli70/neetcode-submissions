class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    helper(s, t) {
        let pair = new Map()

        for(let i = 0; i < s.length; i++){
            if(pair.has(s[i]) && pair.get(s[i]) !== t[i]){
                return false
            }

            pair.set(s[i], t[i])
        }
        return true
    }

    isIsomorphic(s, t){
        return this.helper(s, t) && this.helper(t, s);
    }

}
