class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let pairs = { ')': '(', ']': '[', '}': '{' }

        for(let i = 0; i < s.length; i++){
            let char = s[i]

            if(char === '(' || char === '[' || char === '{'){
                stack.push(char)
            } else {
                 if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false
                 }
            }
        }
        if(stack.length === 0){
        return true
        } else {
            return false
        }
    }
}
