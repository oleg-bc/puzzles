/*
Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

For example:

  const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]
*/


// //my attempt
// function sortScores(unorderedScores, highestPossibleScore) {

//     // Array of 0s at indices 0..highestPossibleScore
//     const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
//     // Populate scoreCounts
//     unorderedScores.forEach(score => {
//       scoreCounts[score]++;
//     });

//     // Populate the final sorted array
//     const sortedScores = [];
  
//     // For each item in scoreCounts
//     for (let score = highestPossibleScore; score >= 0; score--) {
//       const count = scoreCounts[score];
  
//       // For the number of times the item occurs
//       for (let time = 0; time < count; time++) {
//         sortedScores.push(score);
//       }
//     }
  
//     return sortedScores;
//   }


/*
answer with explanation

//[37, 89, 41, 65, 91, 53], 100
let hps = 100;
let arrScores = [37, 89, 41, 65, 91, 53]
const scoreCounts = new Array(100+1).fill(0);
console.log(scoreCounts);

arrScores.forEach(score => {scoreCounts[score]++;});

console.log('after forEach', scoreCounts);

const sortedScores = [];

for (let score = hps; score >= 0; score--){////LOOP DOWN STARTING WITH HI SCORE 100
    const count = scoreCounts[score];//////   ASSIGN CURRENT POSITION TO COUNT STARTING
    console.log('JUST THE COUNT',count);
    for(let time = 0; time<count; time++){ /////// LOOP ***UP*** FROM ZERO NOT TO CUR POSITION OF OUTER LOOP but to count! which is either 0 or 1 or even the same score
        sortedScores.push(score);/// I DONT UNDERSTAND WHY THIS WORKS WHAT GETS PUSHED????ANSWER IT GETS PUSHED ONLY IF ITS NOT 0 and it will get pushed in DESCENDING order because how outer loop is structured
                console.log('PUSHING NOW',score);

        }
}
console.log('FINAL', sortedScores);

*/

////////////////////WORKING THRU THE SOLUTION

function sortScores(unorderedScores, highestPossibleScore) {

    // Array of 0s at indices 0..highestPossibleScore
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  
    // Populate scoreCounts
    unorderedScores.forEach(score => {
      scoreCounts[score]++;
    });
  
    // Populate the final sorted array
    const sortedScores = [];
  
    // For each item in scoreCounts
    for (let score = highestPossibleScore; score >= 0; score--) {
      const count = scoreCounts[score];
  
      // For the number of times the item occurs
      for (let time = 0; time < count; time++) {
        sortedScores.push(score);
      }
    }
  
    return sortedScores;
  }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'no scores';
  let actual = sortScores([], 100);
  let expected = [];
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);
  
  desc = 'one score';
  actual = sortScores([55], 100);
  expected = [55];
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);
  
  desc = 'two scores';
  actual = sortScores([30, 60], 100);
  expected = [60, 30];
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);
  
  desc = 'many scores';
  actual = sortScores([37, 89, 41, 65, 91, 53], 100);
  expected = [91, 89, 65, 53, 41, 37];
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);
  
  desc = 'repeated scores';
  actual = sortScores([20, 10, 30, 30, 10, 20], 100);
  expected = [30, 30, 20, 20, 10, 10];
  assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }