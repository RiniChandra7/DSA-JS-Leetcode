/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    if (prices.length == 2 && prices[1] > prices[0]) {
        return prices[1] - prices[0];
    }
    let i = 0;
    
    /* This approach had TLE for large inputs
    while (i < prices.length - 1) {
        console.log("Price:"+prices[i]);
        let arr = prices.slice(i + 1);
        let max = Math.max(...arr);
        console.log(max);
        console.log("Old prof"+profit);
        if (prices[i] < max && (max - prices[i]) > profit) {
            profit = max - prices[i];
            console.log("New prof "+profit);
        }
        i++;
    }*/
    
    let j = 1;
    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            profit = Math.max(profit, prices[j] - prices[i]);
        }
        else {
            i = j;
        }
        j++;
    }
    
    return profit;
};
