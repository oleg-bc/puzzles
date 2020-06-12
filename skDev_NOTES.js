function generatePermutations(str) {
    let result = [];

}
generatePermutations('dev')
    // ['dev', 'dve', 'edv', 'evd', 'vde', 'ved']

// Notice you include duplicate permutations if there are duplicate letters
generatePermutations('bob')
    // ['bob', 'bbo', 'bob', 'bbo', 'obb', 'obb']

//
const sumDigits = (number) => {
    // Your solution herereturn number
    if (number === 0) { return 0; }
    return (number % 10) + sumDigits(Math.floor(number / 10));
}
console.log(sumDigits(1));
console.log(sumDigits(0));
console.log(sumDigits(50201));
console.log(sumDigits(200));