# puzzles

Daily Puzzles from Daily Coding Problem

(1) 5/7/2020
Given a list of numbers and a number k, return whether two numbers from list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass? [sumpuzzle.js]

(2) 5/9/2020 **
LeetCode Given arr of ints, return indices of the two numbers 
such that they add up to a specific target.
Assume that each input would have exactly one solution, 
and you may NOT use the same element twice.
Ex: Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. EX2: IN [3,3] 6 OUT [0,1]
accepted runtime beats 27% memory beats 95% [LC_twoSum.js]

(3) Given arr of ints, return a new arr such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
IN: [1, 2, 3, 4, 5], OUT: [120, 60, 40, 30, 24]. AND IN: [3, 2, 1], OUT: [2, 3, 6].  Follow-up: what if you can't use division? [prodExCurrent]