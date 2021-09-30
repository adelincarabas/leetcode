/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let sell = prices.length - 1;

  for(let buy = prices.length - 1; buy >= 0; buy--){
    let sellBuy = prices[sell];
    let valBuy = prices[buy];

    if(valBuy - sellBuy >= 0) {
     sell = buy;
    } else {
      let price = sellBuy - valBuy;
      profit = Math.max(profit, price)
    }
  }
  return profit;
};