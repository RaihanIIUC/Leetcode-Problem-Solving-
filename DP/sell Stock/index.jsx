/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

 let minPirce = prices[0];
 let maxProfit = 0 ;
 let Profit = 0;

 for( let finder = 0 ; finder < prices.length ; finder++){
     minPirce = Math.min(prices[finder] , minPirce);
  
     Profit   = prices[finder] - minPirce;
     maxProfit = Math.max(maxProfit , Profit);

 }

 return maxProfit;

};
