class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let balloon = new Map([
            ['b', 0],
            ['a', 0],
            ['l', 0],
  	        ['o', 0],
  	        ['n', 0],
        ])

        for(let char of text){
            if(balloon.has(char)){
                balloon.set(char, balloon.get(char) + 1)
            }
        }
    
        if (balloon.size < 5) {
            return 0;
        }

        balloon.set('l', Math.floor(balloon.get('l') / 2));
        balloon.set('o', Math.floor(balloon.get('o') / 2));
        return Math.min(...Array.from(balloon.values()));
    }
}
