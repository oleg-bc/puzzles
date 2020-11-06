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
    console.log('total of letters in each Word  ', JSON.stringify(secondHash));
    console.log('CURRENT RESULT ARR', resultArr);

    ///final step - use up the scrambled string to build only the words that can be built

}

let scrambledString = 'zrzabxabty';
let inpWrds = ['cat', 'dog', 'bat', 'bart', 'yzrzx', 'zyx', 'ab ', 'a'];

retWords(scrambledString, inpWrds);