/*
Input: Words: ['cat', 'dog', 'bat', 'bart', 'yzrzx', 'zyx, 'ab', 'a']

scrambledString: 'zrzabxabty'

Answer: ['bat', 'yzrzx', 'ab']

2 hashmaps and store the characters and the character counts in both the hashmaps 
and for each character if the character count is the same you can return that string 
otherwise not.
*/
function sumOfChars(str, obj) {
    let letter_count = 0;
    for (let i = 0; i < str.length; i++) {
        if (obj.str[i] !== undefined) {
            letter_count += obj[i];
        }
    }
    return letter_count;
}

function retWords(scrambled, inputWords) {
    // let firstHash = {};
    let secondHash = {};
    let resultArr = [];
    for (let i = 0; i < inputWords.length; i++) {

        let resultArr = [];
        let firstHash = {};
        for (let i = 0; i < scrambled.length; i++) {
            firstHash[scrambled[i]] = (firstHash[scrambled[i]] || 0) + 1;
        }
        console.log('count of each char in SCRAMBLED  ', JSON.stringify(firstHash));
        let secondHash = {};
        for (let i = 0; i < inputWords.length; i++) {
            let charCount;
            //secondHash[inputWords[i]] = sumOfChars(inputWords[i]);
            for (let j = 0; j < inputWords[i].length; j++) {
                //if letter not in 1st hash -increment outer loop
                if (firstHash[inputWords[i][j]] == undefined) { i++; }
                secondHash[inputWords[i][j]] = (secondHash[inputWords[i][j]] || 0) + 1;
            }
            resultArr.push(inputWords[i])
        }
    }
    console.log('total of letters in each Word  ', JSON.stringify(secondHash));
    console.log('CURRENT RESULT ARR', resultArr);
}

///************** */
//     let resutlArr = [];
//     let myArray = scrambled.split('');
//     console.log(myArray)

//     for (let i = 0; i < inputWords.length; i++) {
//         let copyArr = myArray;

//         for (let j = 0; j < inputWords[i].length; j++) {
//             if (!inputWords[i].includes(inputWords[i][j])) { i++ } else {
//                 let position = copyArr.indexOf(inputWords[i][j])
//                 copyArr.slice(position, 1);
//                 if (inputWords[i][j] == inputWords[i].length - 1) {
//                     resutlArr.push(inputWords[i]);
//                 }
//             }
//         }
//     }


//     console.log("RESULT ARR ", resutlArr);
//     console.log("RESULT ARR ", resutlArr);

// }
//     let resultArr = [];
//     let firstHash = {};
//     for (let i = 0; i < scrambled.length; i++) {
//         firstHash[scrambled[i]] = (firstHash[scrambled[i]] || 0) + 1;
//     }
//     console.log('count of each char in SCRAMBLED  ', JSON.stringify(firstHash));
//     let secondHash = {};
//     // for (let i = 0; i < inputWords.length; i++) {
//     //     let charCount;
//     //     //secondHash[inputWords[i]] = sumOfChars(inputWords[i]);
//     //     for (let j = 0; j < inputWords[i].length; j++) {
//     //         //if letter not in 1st hash -increment outer loop
//     //         if (firstHash[inputWords[i][j]] == undefined) { i++; }
//     //         secondHash[inputWords[i][j]] = (secondHash[inputWords[i][j]] || 0) + 1;

//     //     }
//     //     resultArr.push(inputWords[i])

//     // }


//     ///final step - use up the scrambled string to build only the words that can be built
//     for (let i = 0; i < inputWords.length; i++) {

//         for (let j = 0; j < inputWords[i].length; j++) {

//             if (firstHash[inputWords[i][j]] == undefined) { i++; } else {
//                 if (firstHash[inputWords[i][j]] > 0) {
//                     firstHash[inputWords[i][j]]--;
//                 }
//                 if (inputWords[i] == inputWords[i].length - 1) {
//                     resultArr.push(inputWords[i]);
//                 }
//             }
//         }


//     }
//     console.log('total of letters in each Word  ', JSON.stringify(secondHash));
//     console.log('CURRENT RESULT ARR', resultArr);
// }

let scrambledString = 'zrzabxabty';
let inpWrds = ['cat', 'dog', 'bat', 'bart', 'yzrzx', 'zyx', 'ab ', 'a'];

retWords(scrambledString, inpWrds);