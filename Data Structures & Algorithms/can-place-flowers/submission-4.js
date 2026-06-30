class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = 0
        for(let i = 0; i < flowerbed.length; i++){
            let prev = (i === 0) || (flowerbed[i - 1] === 0)
            let next = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0)

            if(flowerbed[i] === 0 && prev && next){
                flowerbed[i] = 1;
                count++;
            }
        }
        return count >= n
    }
}
