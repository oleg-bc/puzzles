/*
Write an efficient function that checks whether any permutation ↴
A permutation is an ordering of a set of items.

Example: all permutations of 'tom':

tom
tmo
omt
otm
mto
mot
Not to be confused with a combination, which is an unordered set or subset.

of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false

*/
///my response: and it worked
function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    let newArr = theString.split('');
    let isPalySet = new Set();
    for (let i = 0;i<newArr.length;i++){
        if(isPalySet.has(newArr[i])){
            isPalySet.delete(newArr[i]); 
        }else(isPalySet.add(newArr[i]));
    }
    if (isPalySet.size > 1){
    return false;}else {return true;}
  }



  ///official reponse

  /*
  function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'permutation with odd number of chars';
  assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);
  
  desc = 'permutation with even number of chars';
  assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);
  
  desc = 'no permutation with odd number of chars';
  assertEqual(hasPalindromePermutation('aabcd'), false, desc);
  
  desc = 'no permutation with even number of chars';
  assertEqual(hasPalindromePermutation('aabbcd'), false, desc);
  
  desc = 'empty string';
  assertEqual(hasPalindromePermutation(''), true, desc);
  
  desc = 'one character string ';
  assertEqual(hasPalindromePermutation('a'), true, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }