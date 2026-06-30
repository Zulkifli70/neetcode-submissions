class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0
        let lowest = prices[0]
        let prevProfit = 0

        for(let i = 0; i < prices.length; i++){
            if(prices[i] > lowest){
                let currentProfit = prices[i] - lowest
                if(currentProfit > prevProfit){
                    prevProfit = currentProfit
                }
            } else {
                lowest = prices[i]
            }
            result = prevProfit
        }
        return result
    }
}
