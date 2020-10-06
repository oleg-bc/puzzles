// function getMaxProfit(stockPrices) {

//     // Calculate the max profit
//     let maxProfit = 0;
//     if(stockPrices.length<1){return maxProfit}
//     if(stockPrices.length===1){return 0;}
//     for(let i=0;i<stockPrices.length-1;i++){
//         maxProfit = Math.max(0, stockPrices[i+1]-stockPrices[i])+maxProfit;   
//     }
//   if (maxProfit<0){maxpProfit=0;}
//     return maxProfit;
//   }
  
  /*ANSWER*/

  function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }
  
    // We'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
  
    // Start at the second (index 1) time
    // We can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // If we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0.
    for (let i = 1; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  
      // Update minPrice so it's always
      // the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfit;
  }
  
  
  const stockPrices = [10, 7, 5, 8, 11, 9];

  console.log('hiiiiiiiiiiiiiiiii',getMaxProfit(stockPrices));
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'price goes up then down';
  let actual = getMaxProfit([1, 5, 3, 2]);
  let expected = 4;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes down then up';
  actual = getMaxProfit([7, 2, 8, 9]);
  expected = 7;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes up all day';
  actual = getMaxProfit([1, 6, 7, 9]);
  expected = 8;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes down all day';
  actual = getMaxProfit([9, 7, 4, 1]);
  expected = -2;
  assertEqual(actual, expected, desc);
  
  desc = 'price stays the same all day';
  actual = getMaxProfit([1, 1, 1, 1]);
  expected = 0;
  assertEqual(actual, expected, desc);
  
  desc = 'error with empty prices';
  const emptyArray = () => (getMaxProfit([]));
  assertThrowsError(emptyArray, desc);
  
  desc = 'error with one price';
  const onePrice = () => (getMaxProfit([1]));
  assertThrowsError(onePrice, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }
  
  function assertThrowsError(func, desc) {
    try {
      func();
      console.log(`${desc} ... FAIL`);
    } catch (e) {
      console.log(`${desc} ... PASS`);
    }
  }