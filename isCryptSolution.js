let tst = ["SENDED"];
let crypt = ["SEND",
    "MORE",
    "MONEY"
]
let solution = [
    ["O", "0"],
    ["M", "1"],
    ["Y", "2"],
    ["E", "5"],
    ["N", "6"],
    ["D", "7"],
    ["R", "8"],
    ["S", "9"]
]

function solTohash(sol) {
    let hash = {};
    for (let i = 0; i < sol.length; i++) {
        hash[sol[i][0]] = sol[i][1];
    }
    for (let [key, value] of Object.entries(hash)) {
        console.log(`${key}:${value}`);
    }
    return hash;
}

function toIint(inpt) {
    let result = 0;
    for (let i = 0; i < inpt.length; i++) {
        result = (result + inpt[i] % 10) * 10;

    }
    return result / 10;
}

//console.log(toArr(inp));

function decode(crypt, solution) {
    let hash = solTohash(solution);
    let wordar = [];
    let numwords = []; // the whole message as arr of single digits
    let wordarz = [];
    for (let i = 0; i < crypt.length; i++) {
        wordar = crypt[i].split("");
        wordarz.push(wordar);
        let numar = []; //single word as arr of single digits
        for (let j = 0; j < wordar.length; j++) {
            if (wordar[j] in hash) {
                numar.push(hash[wordar[j]])
            }
        }
        numwords.push(numar);
        console.log("NUMAR>>>>>>>>>>>>>>", numar)

    }
    //console.log("JUST TO TEST numwordz is   >>>", numwords);
    //console.log("WORDARZ", wordarz);
    let arrToSum = [];
    for (let a = 0; a < numwords.length; a++) {
        let wrd = toIint(numwords[a]);
        arrToSum.push(wrd);
    }
    console.log("TEST ARRTOSUM RAN:  ", arrToSum)
    if (arrToSum[0] + arrToSum[1] !== arrToSum[2]) { return false; }
    return true;
}
console.log(decode(crypt, solution));