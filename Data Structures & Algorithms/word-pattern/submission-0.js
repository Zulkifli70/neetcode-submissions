class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let sentence = s.split(" ")

        if (pattern.length !== sentence.length) return false

        const charToWord = new Map()
        const wordToChar = new Map()

         for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i]
            const word = sentence[i]

            if (charToWord.has(char)) {
                if (charToWord.get(char) !== word) return false
            } else {
                if (wordToChar.has(word)) return false 
                charToWord.set(char, word)
                wordToChar.set(word, char)
            }
        }

        return true
    }
}

