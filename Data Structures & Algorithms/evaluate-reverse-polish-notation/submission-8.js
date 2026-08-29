class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for(let i = 0; i < tokens.length; i++){
            let token = tokens[i]

            if(token === "+" || token === "-" || token === "/" || token === "*"){
                let a = parseInt(stack.pop())
                let b = parseInt(stack.pop())

                let result

                if(token === "+"){
                    result = b + a
                } else if(token === "-"){
                    result = b - a
                } else if (token === "/"){
                    result = Math.trunc(b / a)
                } else if(token === "*"){
                    result = b * a
                }

                stack.push(result)
            } else {
                stack.push(token)
            }
        }
    return stack.pop()
    }
}
