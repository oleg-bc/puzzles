function makeHash(scram) {
    let hash = {}
    for (let i = 0; i < scram.length; i++) {
        hash[scram[i]] = (hash[scram[i]] || 0) + 1;
    }
    return hash;
}

function checkLetter(string, hash) {

    for (let i = 0; i < string.length; i++) {
        let current = string[i];
        if (!hash.hasOwnProperty(current)) { return false }
    }
    return true;
}


function returnFiltered(arrStrings, hash) {
    let returnArray = [];
    for (let i = 0; i < arrStrings.length; i++) {
        let current = arrStrings[i];
        if (checkLetter(current, hash)) { returnArray.push(current); }
    }
    return returnArray;
}

function retWords(scrambled, inWords) {
    let filteredArr = [];
    let hash1 = makeHash(scrambled);
    filteredArr = returnFiltered(inWords, hash1);
    console.log('hash1 is   ', hash1, '\nfiltered ', filteredArr);
}

let scrambledString = 'zrzabxabty';
let inpWrds = ['cat', 'dog', 'bat', 'bart', 'yzrzx', 'zyx', 'ab ', 'a'];

retWords(scrambledString, inpWrds);