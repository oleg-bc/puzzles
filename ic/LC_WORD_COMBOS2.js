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
    let secondHash = {};
    let firstHash = {};
    let resultArr = [];
    let letterWeights = [];
    for (let i = 0; i < scrambled.length; i++) {
        firstHash[scrambled[i]] = (firstHash[scrambled[i]] || 0) + 1;
        secondHash[scrambled[i]] = (secondHash[scrambled[i]] || 0) + 1;
    }
    for (let i = 0; i < inputWords.length; i++) {
        for (let j = 0; j < inputWords[i].length; j++) {
            let curr = inputWords[i][j];
            console.log('curr is   ', curr, 'firstHashcurr is ', firstHash[curr])
            if (firstHash[curr] == 0 || firstHash[curr] == undefined) {
                i++;
            } else if (firstHash.hasOwnProperty([inputWords[i][j]])) {
                console.log("GOT ", firstHash[inputWords[i][j]]);
                if (firstHash[inputWords[i][j]] == 1) { delete firstHash[inputWords[i][j]]; }
                if (firstHash[inputWords[i][j]] > 1) { firstHash[inputWords[i][j]]--; }
                if (inputWords[i][j] == inputWords[i].length - 1) {
                    resultArr.push(inputWords[i]);
                }
            }
        }
    }
    console.log('count of each char in SCRAMBLED  ', JSON.stringify(firstHash));
    console.log('total of letters in each Word  ', JSON.stringify(secondHash));
    console.log('CURRENT RESULT ARR', resultArr);
    console.log('LETTER WEIGHTS ', letterWeights);

}


let scrambledString = 'zrzabxabty';
let inpWrds = ['cat', 'dog', 'bat', 'bart', 'yzrzx', 'zyx', 'ab ', 'a'];

retWords(scrambledString, inpWrds);