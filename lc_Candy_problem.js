/*LEET CODE CANDY PUZZLE
https://leetcode.com/problems/candy/

135. Candy
Hard

1078

171

Add to List

Share
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.


*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // find the max number of candies for some kid 
  let maxCandies = 0;

  for (let i = 0; i < candies.length; i++) {
    maxCandies = Math.max(maxCandies, candies[i]);
  }


  // iterate through candies 
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  // if currentCandy + extraCandies >= max, set to true 
  // otherwise, set to false 

  return candies;
};