var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for(const p of prices){
        min = Math.min(min, p);
        profit = Math.max((p-min),profit);
    } 
    return profit;
};

//time: O(n)
//space: O(n)